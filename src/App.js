import "./App.scss";
import ThemeSelection from "./components/ThemeSelection/ThemeSelection";
import Header from "./components/Header/Header";
import PackageSelector from "./components/PackageSelector/PackageSelector";
import Popup from "./components/Popup/Popup";
import ThemeDrop from "./components/ThemeDrop/ThemeDrop";

function App() {
  return (
    <div className="App">
      <Header />
      <PackageSelector />
      <ThemeSelection />
      {/* <Popup />
      <ThemeDrop /> */}
    </div>
  );
}

export default App;
