import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MIDISounds from 'midi-sounds-react';
import Keys from './Keys';
import Container from './Container';
import PressedKeys from './PressedKeys';

import keysModel from '../model/keys';

import composition from '../model/composition';

const StyledCompositionPlay = styled.div`
`

const StyledPlayButton = styled.button`
  width: 100px;
  height: 50px;
  background-color: black;
  color: white;
  font-size: 1em;
  border-radius: 10px;
`

const StyledAudio = styled.div`
  visibility: hidden
  width: 0
  height: 0
`

const CompositionPlay = ({

}) => {
  const [keys, setKeys] = useState(keysModel);
  const [pressedKey, setPressedKey] = useState(null);
  const [pressedKeys, setPressedKeys] = useState([]);

  const [playedKey, setPlayedKey] = useState(null);

  useEffect(() => {
    if(pressedKey){
      setPressedKeys(pressedKeys.concat(pressedKey));
    }
  }, [pressedKey])

  const playSound = (octave, number) => {
    MIDISounds.midiSounds.playChordNow(0, [octave * 12 + number], 5);
  }

  const playComposition = () => {

    console.log('start composition');
    let index = 0;
    let timeout = setTimeout(function rec (){
      if(index >= composition.length){
        console.log('Timeout cleared');
        clearTimeout(timeout);
        return;
      }
      const x = composition[index++]
      setPlayedKey({ key: x.midi, isPlayed: true });
      console.log('Playing', x);
      
      const delay = 1000 * x.time;
      setTimeout(() => setPlayedKey({ key: x.midi, isPlayed: false }), delay);
      setTimeout(rec, delay)
    }, 0)
  }

  return (
    <>
      <Container marginTop={'5%'} marginBottom={'0%'}>
        <StyledPlayButton onClick={playComposition}>
          Play
        </StyledPlayButton>
      </Container>
      <Container>
        <StyledCompositionPlay>
          <Keys
            items={keys}
            setPressedKey={setPressedKey}
            playSound={playSound}
            playedKey={playedKey}
          />
        </StyledCompositionPlay>
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

export default CompositionPlay;