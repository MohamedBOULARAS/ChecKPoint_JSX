import './App.css';
import myImage from "./nature2.jpg";
import react from 'react';

function App() {
  return (
   <Picture />
  );
}

const Picture = () => {
  let firstName = "Mohamed";
  let lastName = "BOULARAS";

  return ( <div style= {{border: "solid 1px black", maxWidth:"100vw"}}>
  <div>
    <h1 style={{color: "red", fontSize: 40, fontFamily: "Diagramm-Regular"}}>{firstName+" "+lastName}</h1>
    <br></br>
    <img className="img-1" src={myImage} width="500" height="250" ></img>
    <br></br>
    <img className="img-2" src="/nature1.jpg" width="500" height="250" ></img>
  </div>
  <div>
    <h3 style={{color: "green", fontSize: 20, fontFamily: "Diagramm-Regular"}}>My video</h3>
    <video width="620" height="300" controls>
    <source src="videoNature.mp4" type="video/mp4"></source>
    </video>)
  </div>

  </div>

  );
}




export default App;
