import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";
import Header from "./Header";
import Board from "./Board";

function App() {
  return (
    <div className="App">
      <div class="snowflake">❅</div>
      <div class="snowflake">❅</div>
      <div class="snowflake">❅</div>
      <div class="snowflake">❅</div>
      <div class="snowflake">❅</div>
      <div class="snowflake">❅</div>
      <div class="snowflake">❅</div>
      <div class="snowflake">❅</div>
      <div class="snowflake">❅</div>
      <div class="snowflake">❅</div>
      <Header />
      <Board />
    </div>
  );
}

export default App;
