import React from "react";
import styled from "styled-components";

const CharacterStyled = styled.img`
  max-width: 100%;
  border-radius: 50%;
`;

function CharacterImage({ image, name }) {
  return <CharacterStyled src={image} alt={name}></CharacterStyled>;
}

export default CharacterImage;
