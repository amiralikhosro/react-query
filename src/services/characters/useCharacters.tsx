import { useState } from "react";
import { useQuery } from "react-query";

interface FetchParams {
  queryKey: (string | number)[];
}

const useCharacters = () => {
  const [page, setPage] = useState(1);

  const fetchCharacters = async ({ queryKey }: FetchParams) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
    );
    return response.json();
  };

  const { data, status } = useQuery(["characters", page], fetchCharacters);

  return {
    data,
    status,
    setPage,
  };
};

export default useCharacters;
