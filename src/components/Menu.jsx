import React from 'react';
import styled from 'styled-components';


const StyledMenu = styled.div`
  width: 100%;
  background-color: black;
  color: white;
`

const StyledMenuItem = styled.div`
  display: inline-block;
  border-left: 1px solid white
  padding: 0 20px
  margin: 10px;
  > span {
    border: 1px solid white
    margin: 10px 5px
    padding: 5px 10px
  }

  > span:hover {
    cursor: pointer
  }
`

const MIN_OCTAVES_NUMBER = 1;
const MAX_OCTAVES_NUMBER = 5;

const MIN_INITIAL_OCTAVE = 0;
const MAX_INITIAL_OCTAVE = 5;

const Menu = ({
  octaves,
  setOctaves,
  initialOctave,
  setInitialOctave,
  displayNotes,
  setDisplayNotes,
}) => {

  const incrementOctave = () =>
    (octaves < MAX_OCTAVES_NUMBER)
    && setOctaves(octaves + 1)

  const decrementOctave = () =>
    (octaves > MIN_OCTAVES_NUMBER)
    && setOctaves(octaves - 1)

  const incrementInitialOctave = () =>
    (initialOctave < MAX_INITIAL_OCTAVE)
    && setInitialOctave(initialOctave + 1)

  const decrementInitialOctave = () =>
    (initialOctave > MIN_INITIAL_OCTAVE)
    && setInitialOctave(initialOctave - 1)


  return (
    <StyledMenu>
      <StyledMenuItem> {/* TODO refactor this into one component increment decrement + limits */}
        <label>Number of octaves</label>
        <span onClick={decrementOctave}>-</span>
        <span>{octaves}</span>
        <span onClick={incrementOctave}>+</span>
      </StyledMenuItem>
      <StyledMenuItem>
        <label>Initial octave</label>
        <span onClick={decrementInitialOctave}>-</span>
        <span>{initialOctave}</span>
        <span onClick={incrementInitialOctave}>+</span>
      </StyledMenuItem>

      <StyledMenuItem>
        <input type="checkbox" value={displayNotes} onChange={() => setDisplayNotes(!displayNotes)}></input>
        <label>Display notes</label>
      </StyledMenuItem>
    </StyledMenu>
  )

};

export default Menu;