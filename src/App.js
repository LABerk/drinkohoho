import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";
import Header from "./Header";
import Board from "./Board";

function App() {
  return (
    <div className="App">
      <div className="snowflake">❅</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❅</div>
      <Header />
      <Board />
    </div>
  );
}

export default App;
