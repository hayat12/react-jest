import './App.css';
import Counter from './components/counter/counter';
import Skills from './components/skills/skills';
import { Button } from '@mui/material'
function App() {
  return (
    <div className="App">
      <Skills/>

      <hr /> <br /><br />
      <Button variant='text'>Save</Button>

      <Counter/>


    </div>
  );
}

export default App;
