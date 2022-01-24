import React from "react";

const Characters = ({ Characters }) => {
  const { name, species, image } = Characters;

  return (
    <div className="col-md-4 mb-2">
      <div className="card">
        <img src={image} alt={`imagen-${name}`} className="card-img-top" />
        <div className="card-body">
          <h5>{name}</h5>
          <p>{species}</p>
        </div>
      </div>
    </div>
  );
};

export default Characters;