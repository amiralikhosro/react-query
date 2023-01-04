import useCharacters from "../services/characters/useCharacters";

export default function Characters() {
  const { characters } = useCharacters();
  return (
    <div>
      {characters.map((character) => (
        <div key={character.id}>{character.name}</div>
      ))}
    </div>
  );
}
