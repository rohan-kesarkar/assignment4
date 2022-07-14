
import './App.css';
import { Controlled } from './components/controlledForm';
import { Uncontrolled } from './components/uncontrolledform';
import {Parent} from './components/parent';


function App() {
  return (
    <>
    <div>
      <div>
        <div>
      <Controlled />
      </div>
     <h1><Parent/></h1>
      
      
      </div>
      
      <Uncontrolled/>
    </div>
   </>
  );
}

export default App;
