import "./App.scss";

import ThemeSelection from "./components/ThemeSelection/ThemeSelection";

import Header from "./components/Header/Header";
import PackageSelector from "./components/PackageSelector/PackageSelector";

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
