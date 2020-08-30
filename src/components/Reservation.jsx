import React, {useReducer} from 'react';

export default function Reservation() {
  const [guessInput, setGuessInput] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      isGoing: true,
      numberOfGuests: 2,
    }
  );

  const handleChange = e => {
    const name = e.target.name;
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setGuessInput({[name]: value});
  };

  return (
    <form>
      <label style={{marginRight: 8}}>
        Is going:
        <input
          type='checkbox'
          name='isGoing'
          checked={guessInput.isGoing}
          onChange={handleChange}
        />
      </label>
      <label style={{marginRight: 8}}>
        <input
          type='number'
          name='numberOfGuests'
          value={guessInput.numberOfGuests}
          onChange={handleChange}
        />
      </label>
    </form>
  );
}
