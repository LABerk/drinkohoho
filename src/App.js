import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";
import Header from "./Header";
import HolidayBoard from "./HolidayBoard";
import Snowflakes from "./Snowflakes";
import MovieForm from "./Form";

function App() {
  return (
    <div className="App">
      <Snowflakes />
      <Header />
      <HolidayBoard />
      <MovieForm />
    </div>
  );
}

export default App;
