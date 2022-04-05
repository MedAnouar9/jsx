import images from "./images.jpg";
import './App.css';
function App() {

  return (
    <div className="App">


      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
      </div>
      <h1 className="title red">Your name here</h1>
      <br />
      <div>
        <img src="/téléchargement.jpg" />
        <br />
        <img src= {images}/>;
      </div>
      <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
