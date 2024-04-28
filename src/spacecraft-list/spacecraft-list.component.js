import React, { Fragment } from "react";
import { getSpacecrafts } from "../utils/api.js";
import { Link } from "react-router-dom";

export default function SpacecraftList({ spacecraft, loadingSpacecraft, selectSpacecraft }) {
  return (
    <div>
      <Fragment>
        {spacecraft.map((craft, index) => {
          let borderClass = "border-b";
          if (index === 0) {
            borderClass = "border-t border-b";
          } else if (index + 1 === spacecraft.length) {
            borderClass = "";
          }			
          return (
            <Link
              key={craft.title}
              className={`h-12 flex items-center ${borderClass} border-white cursor-pointer no-underline`}
              to={`/spacecraft/${window.encodeURIComponent(craft.id)}`}
				  
            >
              {craft.title}
				  
            </Link>
          );
        })}
        {loadingSpacecraft && <div>Loading ...</div>}
      </Fragment>
    </div>
  );
}
