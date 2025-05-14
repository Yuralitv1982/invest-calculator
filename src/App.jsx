import { useState } from 'react';

import Header from './components/Header';
import UserInput from './components/UserInput';
import Results from './components/Rresults';

function App() {
   const [userInput, setUserInput] = useState({
      initialInvestment: 10000,
      annualInvestment: 1200,
      expectedReturn: 6,
      duration: 10,
   });

   const inputIsValid = userInput.duration >= 1;

   function handleChange(inputIndentifier, newValue) {
      setUserInput((prevUserInput) => {
         return {
            ...prevUserInput,
            [inputIndentifier]: +newValue,
         };
      });
   }

   return (
      <>
         <Header />;
         <UserInput userInput={userInput} onChange={handleChange} />
         {!inputIsValid && (
            <p className='center'>Please enter a duration greater then zero</p>
         )}
         {inputIsValid && <Results input={userInput} />}
      </>
   );
}

export default App;
