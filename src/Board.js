import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";
import Card from "./Card";
import bingoData from "./store/bingoData";

function Board() {
  return (
    <div className="container">
      <div className="row h-100">
        <div className="col d-flex flex-column flex-md-row justify-content-around align-items-center">
          {bingoData.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Board;
