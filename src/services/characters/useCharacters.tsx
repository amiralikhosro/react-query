import { useState, useEffect } from "react";
import { CharacterInterface } from "./index.d";

const useCharacters = () => {
  const [characters, setCharacters] = useState<CharacterInterface[]>([]);

  const fetchCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    console.log(data);
    setCharacters(data.results);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return {
    characters,
  };
};

export default useCharacters;
