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
         <Results input={userInput} />
      </>
   );
}

export default App;
