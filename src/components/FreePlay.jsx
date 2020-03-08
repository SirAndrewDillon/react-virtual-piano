import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Keys from './Keys';
import Container from './Container';
import PressedKeys from './PressedKeys';
import buildKeys from '../model/keys';
import MIDISounds from 'midi-sounds-react';

const StyledFreePlay = styled.div`
`

const StyledAudio = styled.div`
  visibility: hidden
  width: 0
  height: 0
`

const FreePlay = ({
  octaves,
  initialOctave,
  displayNotes,
}) => {
  const [keys, setKeys] = useState([]);
  const [pressedKey, setPressedKey] = useState(null);
  const [pressedKeys, setPressedKeys] = useState([]);

  useEffect(() => {
    if (pressedKey) {
      setPressedKeys(pressedKeys.concat(pressedKey));
    }
  }, [pressedKey])

  useEffect(() => {
    if(octaves && initialOctave){
      setKeys(buildKeys(octaves, initialOctave));
    }
  }, [octaves, initialOctave])

  const playSound = (octave, number) => {
    MIDISounds.midiSounds.playChordNow(0, [octave * 12 + number], 5);
  }

  return (
    <>
      <Container>
        <StyledFreePlay>
          <Keys
            items={keys}
            setPressedKey={setPressedKey}
            playSound={playSound}
            displayNotes={displayNotes}
          />
        </StyledFreePlay>
        <StyledAudio>
          <MIDISounds style={{ visibility: 'hidden' }} ref={(ref) => (MIDISounds.midiSounds = ref)} appElementName="root" instruments={[3]} />
        </StyledAudio>
      </Container>

      <Container>
        <PressedKeys
          items={pressedKeys}
        />
      </Container>
    </>
  )
}

export default FreePlay;