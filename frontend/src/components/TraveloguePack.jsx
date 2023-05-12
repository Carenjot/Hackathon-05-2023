import { useEffect, useState } from "react";
import logo from "../assets/nodebook.png";
import Travelogue from "./Travelogue";

import InsideTravelogue from "./InsideTravelogue";

function TraveloguePack() {
  const [listCarnet, setListCarnet] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/citys")
      .then((response) => response.json())
      .then((data) => setListCarnet(data));
  }, []);

  const [numberTravelogue, setNumberTravelogue] = useState();
  const checkInside = (title) => {
    setNumberTravelogue(title);
  };
  return (
    <>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <section className="pack-travelogue">
        {listCarnet.map((carnet) => (
          <button
            key={carnet.id}
            type="button"
            className="button-carnet"
            value={carnet.id}
            onClick={() => {
              checkInside(carnet.id);
            }}
          >
            <Travelogue title={carnet} />
          </button>
        ))}
        {numberTravelogue != null && (
          <InsideTravelogue title={listCarnet} number={numberTravelogue} />
        )}
      </section>
    </>
  );
}

export default TraveloguePack;
