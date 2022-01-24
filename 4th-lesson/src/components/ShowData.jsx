import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Characters from "./Characters";
import Loading from "./Loading";

const ShowData = ({ characterName }) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  const feedAPI = async (name) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${name}&status=alive`
      );
      if (!res.ok) {
        return Swal.fire({
          title: "Ups!!",
          text: `The character  (${name.toUpperCase()}) dons't exits!`,
          icon: "error",
          iconColor: "red",
        });
      }
      const data = await res.json();
      console.log(data.results);

      setCharacters(data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    feedAPI(characterName);
  }, [characterName]);

  if (loading) {
    return (
      <div className="mt-4">
        <Loading />
      </div>
    );
  }

  return (
    <div className="row mt-4">
      {characters.map((item) => (
        <Characters key={item.id} Characters={item} />
      ))}
    </div>
  );
};

export default ShowData;
