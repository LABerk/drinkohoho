import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";
import Card from "./Card";
import { holidayData } from "./store/bingoData";

function HolidayBoard() {
  const row1 = holidayData.filter((item, i) => {
    return i <= 4;
  });

  const row2 = holidayData.filter((item, i) => {
    return i > 4 && i <= 9;
  });

  const row3 = holidayData.filter((item, i) => {
    return i > 9 && i <= 15;
  });

  return (
    <div className="container">
      <div className="row h-100 flex-row justify-content-around">
        <div className="col d-flex flex-column flex-md-row justify-content-around align-items-center">
          {row1.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </div>
      <div className="row h-100">
        <div className="col d-flex flex-column flex-md-row justify-content-around align-items-center">
          {row2.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </div>
      <div className="row h-100">
        <div className="col d-flex flex-column flex-md-row justify-content-around align-items-center">
          {row3.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HolidayBoard;
