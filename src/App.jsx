import "./App.css";
import Homepage from "./components/Homepage.jsx";

function App() {
  function isLoggedIn(password) {
    if (password === "1234") {
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      {Homepage}
      <Hello />
      <PerScholasLogo />
      <br />
      <PerScholasLogo />
      <h1 className={h1Class}>Welcome to React + Vite!!!</h1>
      <p>We learning</p>
      <p>
        I am {getRandomAge() < 18 ? "under 18" : "over 18"} years old and my
        name is {name}
      </p>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div style={{ display: visible ? "block" : "none" }}>
        <h2>Todo List</h2>
        <ul>{todoList}</ul>
      </div>
      <br />
      <hr />
      <br />
      <IsEven />
      <br />
      <hr />
      <br />
      My Mood: <MyMood />
      <br />
      <hr />
      <br />
      {isLoggedIn("123") ? <h1>Sensitive Info</h1> : <h1>Forbidden</h1>}
    </>
  );
}

export default App;
