import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeDrop from "./components/ThemeDrop/ThemeDrop";
import ThemeSelection from "./components/ThemeSelection/ThemeSelection";
import Header from "./components/Header/Header";

function App() {
  //return (
    //<BrowserRouter>
    //<p>hello is the font working</p>
    //<Routes>
      //<Route>
        
     // </Route>
    //</Routes>
   // </BrowserRouter>
 // );

  // return <ThemeDrop />;
  return (
    <div className="App">
      <Header />
      <ThemeSelection />
    </div>

  )}

export default App;
