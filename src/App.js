import './App.css';
import ímagen1 from './img/img002.jpg';

function App() {
  console.log("process: ", process);
  console.log("P env: ", process.env);
  console.log("P vers: ", process.versions);
  console.log("P ver: ", process.version);
  console.log("P title: ", process.title);
  console.log("P browser: ", process.browser);
  return (
    <div className="App">
      CONSULTAS REACT
      <div>
        <img src={ímagen1} alt="imagen 1" width="200" height="200"/>
        <br/>
        {/* <img src={ímagen2} alt="imagen 2"/> */}
        <img src={`${process.env.PUBLIC_URL}/assets/img/img151.jpg`} alt="imagen 2"/>
      </div>
    </div>
  );
}

export default App;
