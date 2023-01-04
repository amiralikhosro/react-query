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

  const { data, status, isPreviousData, isLoading, isError } = useQuery(
    ["characters", page],
    fetchCharacters,
    {
      keepPreviousData: true,
    }
  );

  const onNextPage = () => data.info.next && setPage((prev) => prev + 1);

  const onPrevPage = () => page !== 1 && setPage((prev) => prev - 1);

  return {
    data,
    status,
    isPreviousData,
    isLoading,
    isError,
    page,
    onNextPage,
    onPrevPage,
  };
};

export default useCharacters;
