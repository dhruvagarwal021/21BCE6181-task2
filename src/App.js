import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Calculator } from './components/Calculator';
function App() {
  return (
    <div style={{border:"1px solid black",backgroundColor:"#00FFFF",widht:"50px",height:"800px"}}>
      <center>
        <Calculator/>
      </center>
    </div>
  );
}

export default App;