import React, { useEffect, useState } from "react";
import Characters from "./Characters";
import { Input } from "@nextui-org/react";
import { Spinner } from "@nextui-org/react";

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {


    const getCharacters = async () => {
      setIsLoading(true); // Comenzar la carga

      const apiKey =  import.meta.env.VITE_REACT_APP_MARVEL_API_KEY;
      let url = `https://gateway.marvel.com:443/v1/public/characters?apikey=${apiKey}`;

      if (searchTerm) {
        url += `&nameStartsWith=${searchTerm}`;
      }

      const data = await fetch(url);
      const dataJson = await data.json(); 
      setCharacters(dataJson.data.results);
      setIsLoading(false); // Finalizar la carga
    };

    getCharacters();
  }, [searchTerm]);

  return (
    <div>
      <div className="flex justify-center items-center mb-10 m-5">
        <Input
          type="text"
          label="Search Characters"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {isLoading ? (
        <div className="flex justify-center items-start  h-screen">
          <Spinner label="Loading..." color="warning" />
        </div>
      ) : (
        <ul className="flex flex-wrap justify-around items-center gap-3 m-3">
          {characters.map((character) => (
            <Characters
              key={character.id}
              name={character.name}
              img={`${character.thumbnail.path}`}
              description={character.description}
              comics={character.comics.available}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default CharacterList;
