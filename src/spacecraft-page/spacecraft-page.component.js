import React, { Fragment } from "react";
import { getSpacecraft } from "../utils/api.js";
import SpacecraftList from "../spacecraft-list/spacecraft-list.component.js";
import SelectedSpacecraft from "./selected-spacecraft/selected-spacecraft.component.js";
import { Button } from "@react-mf/styleguide";

const initialState = {
  pageNum: 1,
  nextPage: true,
  loadingSpacecraft: true,
  selectedSpacecraft: undefined,
  spacecraft: [],
};

  
export default function SpacecraftPage(props) {
  const { match } = props;
  const { params = {} } = match;
  const { spacecraftId } = params;
  const [state, dispatch] = React.useReducer(reducer, initialState);
  
  const { nextPage, loadingSpacecraft, spacecraft, selectedSpacecraft, pageNum } = state;


  React.useEffect(() => {
    if (nextPage && loadingSpacecraft) {
      dispatch({ type: "loadingSpacecraft" });

      const subscription = getSpacecraft(pageNum).subscribe(
        (results) => {
          dispatch({ type: "newSpacecraft", results });
        },
        (err) => {
          console.log("err", err); // eslint-disable-line
        }
      );

      return () => subscription.unsubscribe();
    }
  }, [pageNum, nextPage, loadingSpacecraft]);

  React.useEffect(() => {	
    if (
      (state.selectedSpacecraft === undefined && spacecraftId !== undefined) ||
      (state.selectedSpacecraft && spacecraftId !== state.selectedSpacecraft.id)
    ) {
      const craft = state.spacecraft.find((p) => p.id === spacecraftId);
      if (craft) {
        dispatch({ type: "selectSpacecraft", craft });

      } 
    }
  }, [state.spacecraft, state.selectedSpacecraft, spacecraftId]);

  return (
    <div>
      <div className="flex">
        <div className="p-6 w-1/3">
         <Button
    			loading={loadingSpacecraft}
    			onClick={fetchMore}
    			disabled={!nextPage || loadingSpacecraft}
  			>
    			Fetch More spacecraft
  			</Button>
  			{loadingSpacecraft && spacecraft.length === 0 ? (
    		<div>Loading ...</div>
  			) : (
    			<SpacecraftList
      			spacecraft={spacecraft}
     				 loadingSpacecraft={loadingSpacecraft}
      			selectSpacecraft={selectSpacecraft}
    			/>
  			)}
			 
        </div>
        <div className="w-2/3 p-6 border-l-2 border-white">
          <div>			
            <SelectedSpacecraft selectedSpacecraft={selectedSpacecraft} />
          </div>
        </div>
      </div>
    </div>
  );

  function selectSpacecraft(index) {
    dispatch({ type: "selectSpacecraftByIndex", index });
  }

  function fetchMore() {
    dispatch({ type: "fetchMore" });
  }
}

function reducer(state = initialState, action) {

  switch (action.type) {
    case "loadingSpacecraft":
      return { ...state, loadingSpacecraft: true };
    case "newSpacecraft":
      return {
        ...state,
        spacecraft: state.spacecraft.concat(action.results.results),
        nextPage: Boolean(action.results.next),
        loadingSpacecraft: false,
      };
    case "selectSpacecraft":
      return {
        ...state,
        selectedSpacecraft: action.craft,
		  
		  
      };
    case "fetchMore":
      return {
        ...state,
        loadingSpacecraft: true,
        pageNum: state.pageNum + 1,
      };
    default:
      throw Error(`Unknown action type '${action.type}'`);
  }
}




