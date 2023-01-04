import useCharacters from "../services/characters/useCharacters";
import { CharacterInterface } from "../services/characters/index.d";
import Character from "./Character";

export default function Characters() {
  const { data, status } = useCharacters();

  if (status === "loading") return <div>Loading...</div>;

  if (status === "error") return <div>Error</div>;
  return (
    <div className="characters">
      {data.results.map((character: CharacterInterface) => (
        <Character key={character.id} character={character} />
      ))}
    </div>
  );
}
