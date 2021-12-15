import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";
import Header from "./Header";
import Board from "./Board";
import Snowflakes from "./Snowflakes";

function App() {
  return (
    <div className="App">
      <Snowflakes />
      <Header />
      <Board />
    </div>
  );
}

export default App;
