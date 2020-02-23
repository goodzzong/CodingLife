import React from 'react';
import logo from './logo.svg';
import './App.css';
import { taggedSum } from "daggy";

function App() {
  const Result = taggedSum('Result', {
    Success: ['aaa'],
    Failure: ['error']
  })

  const successCase = Result.Success([1, 2, 3])
  const failureCase = Result.Failure('There was a problem.')

  function handleResult(result) {
    result.cata({
      Success: message => console.log(message),
      Failure: error => console.error(error)
    })
  }

  console.log(successCase);

  return (
    <div className="App">
      dd
    </div>
  );
}

export default App;
