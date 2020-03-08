import React, { useState } from 'react';
import FreePlay from './components/FreePlay';
import CompositionPlay from './components/CompositionPlay';
import Menu from './components/Menu';

const DEFAULT_OCTAVES = 4;
const DEFAULT_INITIAL_OCTAVE = 3;

const App = () => {

  const [octaves, setOctaves] = useState(DEFAULT_OCTAVES);
  const [initialOctave, setInitialOctave] = useState(DEFAULT_INITIAL_OCTAVE);
  const [displayNotes, setDisplayNotes] = useState(false);
  return (
    <>
    
      <Menu 
        octaves={octaves}
        setOctaves={setOctaves}
        initialOctave={initialOctave}
        setInitialOctave={setInitialOctave}
        displayNotes={displayNotes}
        setDisplayNotes={setDisplayNotes}
      />

      <FreePlay 
        octaves={octaves}
        initialOctave={initialOctave}
        displayNotes={displayNotes}
      />
      {/* <CompositionPlay /> */}
    </>
  )
}

export default App;
