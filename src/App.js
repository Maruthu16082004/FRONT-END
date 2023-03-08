import './bala.css';
import Showdata from './components/Showdata.jsx';
import Signup from './components/Signup.jsx';
import Update from './components/Update.jsx';
import Delete from './components/Delete.jsx';
function App() {
  return (
    <div className="App">
      <Signup/>
      <Showdata/>
      <Update/>
      <Delete/>
      
    </div>
)
 }

export default App;