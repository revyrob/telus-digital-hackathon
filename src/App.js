import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeDrop from "./components/ThemeDrop/ThemeDrop";
import ThemeSelection from "./components/ThemeSelection/ThemeSelection";
import Categories from "./components/Categories/Categories";

function App() {
  return (
    <>
      <p>hello is the font working</p>
      return <ThemeDrop />
    </>
  );

  // return <ThemeDrop />;
  return <ThemeSelection />;
  return <ThemeDrop />;
}

export default App;
