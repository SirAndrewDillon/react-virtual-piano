import React, { useState } from 'react';
import styled from 'styled-components';
import Key from './Key';

const StyledKeys = styled.div`
`
  
const Keys = ({
  items,
  setPressedKey,
  playSound,
  playedKey,
  displayNotes,
}) => {
  console.log(playedKey);

  const isPlayed = (key) => 
    playedKey 
    && (playedKey.key === key.octave * 12 + key.number) // TODO add the midi attr to the keys model
    && playedKey.isPlayed;

  return (
    <>
      <StyledKeys>
        {
          items.map(
            x => <Key
              id={x.id}
              name={x.name}
              type={x.type}
              number={x.number}
              octave={x.octave}
              setPressedKey={setPressedKey}
              playSound={playSound}
              isPlayed={isPlayed(x)} 
              displayNotes={displayNotes}
            />
          )
        }
      </StyledKeys>
    </>
  )
}

export default Keys;