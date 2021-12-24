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
    return i > 9 && i <= 14;
  });
  const row4 = holidayData.filter((item, i) => {
    return i > 14 && i <= 19;
  });
  const row5 = holidayData.filter((item, i) => {
    return i > 19 && i <= 24;
  });
  const row6 = holidayData.filter((item, i) => {
    return i > 24 && i <= 30;
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
      <div className="row h-100 flex-row justify-content-around">
        <div className="col d-flex flex-column flex-md-row justify-content-around align-items-center">
          {row4.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </div>
      <div className="row h-100 flex-row justify-content-around">
        <div className="col d-flex flex-column flex-md-row justify-content-around align-items-center">
          {row5.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </div>
      <div className="row h-100 flex-row justify-content-around">
        <div className="col d-flex flex-column flex-md-row justify-content-around align-items-center">
          {row6.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HolidayBoard;
