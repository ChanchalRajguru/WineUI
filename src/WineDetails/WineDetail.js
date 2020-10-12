import React from "react";


const wineDetails = (props) => {
  return (
    <div>
      <section>
        <p>{props.wine.id}</p>
        <p>{props.wine.year}</p>
        <p>{props.wine.name}</p>
        <p>{props.wine.grapes}</p>
        <p>{props.wine.country}</p>
        <p>{props.wine.region}</p>
      </section>
      <section>
        <button>New</button>
        <button>Save</button>
        <button onClick={props.deleteClickHandler}>Delete</button>
      </section>
    </div>
  );
};


export default wineDetails;