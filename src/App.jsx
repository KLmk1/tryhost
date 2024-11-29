import React from "react";
import "./App.css";

function App() {
  const handleClick = () => {
    alert("Поздравляю! Вы создали React-сайт и выложили его на хостинг!");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Добро пожаловать!</h1>
        <p>Этот сайт создан для обучения выкладыванию на хостинг.</p>
        <button onClick={handleClick}>Нажми на меня</button>
      </header>
    </div>
  );
}

export default App;
