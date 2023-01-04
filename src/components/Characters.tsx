import useCharacters from "../services/characters/useCharacters";
import { CharacterInterface } from "../services/characters/index.d";
import Character from "./Character";

export default function Characters() {
  const {
    data,
    status,
    isPreviousData,
    isLoading,
    isError,
    page,
    onNextPage,
    onPrevPage,
  } = useCharacters();

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error</div>;

  return (
    <div className="characters">
      {data.results.map((character: CharacterInterface) => (
        <Character key={character.id} character={character} />
      ))}
      <div>
        <button disabled={page === 1} onClick={onPrevPage}>
          Previous
        </button>
        <button
          disabled={isPreviousData || !data.info.next}
          onClick={onNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}
