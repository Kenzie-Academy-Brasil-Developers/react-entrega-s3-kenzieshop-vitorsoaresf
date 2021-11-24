import GlobalStyle from "./style/global";
import Routes from "./routes";
import Header from "./components/Header";
import api from "./services/api";

function App() {
  return (
    <div className="App">
      <Header />
      <GlobalStyle />
      <Routes />
    </div>
  );
}

export default App;
