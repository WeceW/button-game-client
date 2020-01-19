import React from 'react';
import './App.css';

import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const GET_COUNTER_VALUE = gql`
  mutation {
    addCounter
  }
`

const App: React.FC = () => {
  const p = localStorage.getItem('POINTS');
  const [ points, setPoints ] = React.useState(p ? parseInt(p) : 0);

  const [ addCounter, { error, data } ] = useMutation(
    GET_COUNTER_VALUE,
    {
      onCompleted({ addCounter }) {
        console.log( addCounter );    
        if (addCounter % 500 === 0) {
          console.log("Give 250 points!");
          const p = points+250;
          setPoints(p);
          localStorage.setItem('POINTS', String(p));
        }
        else if (addCounter % 100 === 0) {
          console.log("Give 40 points!");
          const p = points+40;
          setPoints(p);
          localStorage.setItem('POINTS', String(p));
        }
        else if (addCounter % 10 === 0) {
          console.log("Give 5 points!");
          const p = points+5;
          setPoints(p);
          localStorage.setItem('POINTS', String(p));
        }
      }
    }
  );
  
  const handleButton = () => {
    addCounter();
  }

  return (
    <div>
      {error ? <p>Sorry, error. :( {error.message}</p> : null}
      <button onClick={() => handleButton()}>Paina tästä</button>
      {data && data.addCounter}
      <div>Points: {points}</div>
    </div>
  );
}

export default App;
