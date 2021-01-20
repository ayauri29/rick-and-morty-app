import React from 'react'
import styled from 'styled-components'

const CharacterStyled = styled.div`
  grid-area: avatar;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  .image {
    max-width: 100%;
    /* width: auto; */
    border-radius: 50%;
  }

  @media screen and (max-width: 1024px) {

  }
`

function CharacterImage({ image, name }) {
  return (
    <CharacterStyled>
      <img class="image" src={image} alt={name} />
    </CharacterStyled>
  )
}

export default CharacterImage