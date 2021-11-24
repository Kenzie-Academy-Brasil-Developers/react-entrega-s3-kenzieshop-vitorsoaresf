import GlobalStyle from "./style/global";
import Routes from "./routes";
import api from "./services/api";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes />
    </div>
  );
}

export default App;
