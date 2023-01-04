import { useQuery } from "react-query";

const useCharacters = () => {
  const fetchCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    return response.json();
  };

  const { data, status } = useQuery("characters", fetchCharacters);

  return {
    data,
    status,
  };
};

export default useCharacters;
