import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CharacterName from "./character-name";
import CharacterImage from "./character-image";
import CharacterDescription from "./character-description";
import CharacterPlaceholder from "./character-placeholder";
import Layout from "./layout";
import Next from "./next";
import CharacterContext from "./character-context";
import api from "./api";

const CharacterStyled = styled.div``;

function Character({match}) {
  const [character, setCharacter] = useState({});
  useEffect(() => {
    async function getCharacter() {
      console.log(match)
      setCharacter(await api.getCharacter(match.params.id || 1));
    }
    getCharacter();
  }, [match.params.id]);

  return (
    <CharacterStyled>
      <CharacterContext.Provider
        value={{
          character,
          setCharacter,
        }}
      >
        <CharacterPlaceholder name={character.name} />
        <Layout
          next={<Next />}
          name={<CharacterName name={character.name} />}
          image={<CharacterImage image={character.image} />}
          description={
            <CharacterDescription
              gender={character.gender}
              species={character.species}
              status={character.status}
            />
          }
        />
      </CharacterContext.Provider>
    </CharacterStyled>
  );
}

export default Character;
