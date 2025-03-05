import './App.css';
import { useEffect } from "react";

const tg = window.Telegram.WebApp

function App() {
  useEffect(() => {
    tg.ready();
  }, [])
  return (
    <div className="App">
      <h1>App</h1>
    </div>
  );
}

export default App;
