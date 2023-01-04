import useCharacters from "../services/characters/useCharacters";
import { CharacterInterface } from "../services/characters/index.d";

export default function Characters() {
  const { data, status } = useCharacters();

  if (status === "loading") return <div>Loading...</div>;

  if (status === "error") return <div>Error</div>;
  return (
    <div>
      {data.results.map((character: CharacterInterface) => (
        <div key={character.id}>{character.name}</div>
      ))}
    </div>
  );
}
