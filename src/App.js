import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeDrop from "./components/ThemeDrop/ThemeDrop";
import ThemeSelection from "./components/ThemeSelection/ThemeSelection";

function App() {
  return (
    <>
      <p>hello is the font working</p>
      <ThemeDrop />
    </>
  );

  // return <ThemeDrop />;
  return <ThemeSelection />
}

export default App;
