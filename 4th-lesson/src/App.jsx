import React, { useState } from "react";
import Form from "./components/Form";
import ShowData from "./components/ShowData";
import CustomFooter from "./hooks/CustomFooter";

const App = () => {
  const [characterName, setCharacterName] = useState("");

  return (
    <div>
      <div className="container mt-3 text-center">
        <h1>The Rick & Morty Library!</h1>
        <Form setCharacterName={setCharacterName} />
        <ShowData characterName={characterName} />
      </div>
      <CustomFooter />
    </div>
  );
};

export default App;
