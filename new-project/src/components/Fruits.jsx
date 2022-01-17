import React from "react";

const Fruits = (props) => {
  return (
    <div>
      <h1>Frutas con props</h1>
      <ul>
        {props.FrutasFromApp.map((fruit, index) => (
          <li key={index}>
            {index + 1}. {fruit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fruits;
