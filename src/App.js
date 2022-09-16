import "./App.scss";
import ThemeSelection from "./components/ThemeSelection/ThemeSelection";
import Header from "./components/Header/Header";
import PackageSelector from "./components/PackageSelector/PackageSelector";
import Popup from "./components/Popup/Popup";
import ThemeSelectionModalDisplay from "./components/ThemeSelectionModalDisplay/ThemeSelectionModalDisplay";

function App() {
  return (
    <div className="App">
      <Header />
      <PackageSelector />
      <ThemeSelection />
    </div>
  );
}

export default App;
