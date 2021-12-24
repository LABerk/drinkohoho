import { useState } from "react";
import cn from "classnames";

function Card({ card }) {
  const [showBack, setShowBack] = useState(false);

  function handleClick() {
    if (card.variant === "click") {
      setShowBack(!showBack);
    }
  }

  return (
    <div
      tabIndex={card.id}
      className={cn("flip-card-outer")}
      onClick={handleClick}
    >
      <div
        className={cn("flip-card-inner", {
          showBack,
        })}
      >
        <div className="card front justify-content-around ">
          <div className="card-body d-flex justify-content-center align-items-center col px-md-100">
            <p className="card-text fs-7 text-wrap fw-bold">{card.front}</p>
          </div>
        </div>
        <div className="card back">
          <div className="card-body d-flex justify-content-center align-items-center">
            <p className="card-text text-wrap fs-6 fw-bold">{card.back}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
