import './App.css';
import Lottery from './assets/Lottery';
import { sum } from './assets/helper';

function App() {

  let wincondition = (ticket) => {
    return sum(ticket) === 15;
  }
  return (
    <>
      
      <Lottery num={3} wincondition={wincondition} />
    </>
  );
}
export default App;
