import './App.css';

function App() {
  console.log("ENV: ", process.env);
  console.log("REACT_APP_ENV: ", process.env.REACT_APP_ENV);
  console.log("REACT_APP_API: ", process.env.REACT_APP_API);
  return (
    <div className="App">
      CONSULTAS REACT
      <div>
        <img src={`${process.env.PUBLIC_URL}/assets/img/img151.jpg`} alt="imagen 2"/>
      </div>
    </div>
  );
}

export default App;
