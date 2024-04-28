import React, { Fragment } from "react";
import Films from "../../films/films.component.js";
import SpacecraftAttribute from "./spacecraft-attribute.component.js";


export default function selectedSpacecraft({ selectedSpacecraft }) {

  return (
    <div className="selectedPerson">
      {selectedSpacecraft !== undefined ? (
        <div>
			<h1>Spacecraft</h1>
          <SpacecraftAttribute>
            <SpacecraftAttribute.Title>Name</SpacecraftAttribute.Title>
            <SpacecraftAttribute.Value>{selectedSpacecraft.title}</SpacecraftAttribute.Value>
          </SpacecraftAttribute>
          <SpacecraftAttribute>
            <SpacecraftAttribute.Title>Armaments</SpacecraftAttribute.Title>
            <SpacecraftAttribute.Value>
             {selectedSpacecraft.armaments}
            </SpacecraftAttribute.Value>
          </SpacecraftAttribute>
          <SpacecraftAttribute>
            <SpacecraftAttribute.Title>Power</SpacecraftAttribute.Title>
            <SpacecraftAttribute.Value>{selectedSpacecraft.power}</SpacecraftAttribute.Value>
          </SpacecraftAttribute>
          <SpacecraftAttribute>
            <SpacecraftAttribute.Title>Propulsion</SpacecraftAttribute.Title>
            <SpacecraftAttribute.Value>
              {selectedSpacecraft.propulsion}
            </SpacecraftAttribute.Value>
          </SpacecraftAttribute>
          <SpacecraftAttribute>
            <SpacecraftAttribute.Title>Size</SpacecraftAttribute.Title>
            <SpacecraftAttribute.Value>
              {selectedSpacecraft.size}
            </SpacecraftAttribute.Value>
          </SpacecraftAttribute>
          <SpacecraftAttribute>
            <SpacecraftAttribute.Title>Speed</SpacecraftAttribute.Title>
            <SpacecraftAttribute.Value>
              {selectedSpacecraft.speed}
            </SpacecraftAttribute.Value>
          </SpacecraftAttribute>
          <SpacecraftAttribute style={{ marginTop: '30px' }}> 
            <SpacecraftAttribute.Title>Films</SpacecraftAttribute.Title>
            <SpacecraftAttribute.Value>
              <Films films={selectedSpacecraft.films} />
            </SpacecraftAttribute.Value>
          </SpacecraftAttribute>
			 <div></div>
        </div>
		  
      ) : (
        <div>
				<h1>Spacecraft</h1>
				<p>None selected</p>
		  
		  </div>
      )}
    </div>
  );

}


