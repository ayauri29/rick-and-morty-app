import React from 'react'
import styled from 'styled-components'

const CharacterStyled = styled.div`
  grid-area: character-description;
  .label {
    background: #685128;
    padding: 1em;
    color: white;
    border-radius: 10px;
    text-align: left;
    font-size: 25px;
    font-weight: 400;
  }
  @media screen and (max-width: 1024px) {

  }
`
function CharacterDescription({ status, gender, species }) {
  return (
    <CharacterStyled>
      <div className="character-labels">
        <h3 className="label">Género: {gender}</h3>
        <h3 className="label">Especie: {species} </h3>
        <h3 className="label">Status: {status}</h3>
      </div>
    </CharacterStyled>
  )
}

export default CharacterDescription