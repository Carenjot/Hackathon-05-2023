import { useState } from "react";
import logo from "../assets/nodebook.png";
import Travelogue from "./Travelogue";

import InsideTravelogue from "./InsideTravelogue";

const listTitle = [
  {
    id: 1,
    title: "titre1",
  },
  { id: 2, title: "titre2" },
  { id: 3, title: "titre3" },
  { id: 4, title: "titre4" },
];

function TraveloguePack() {
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
        {listTitle.map((title) => (
          <button
            key={title.id}
            type="button"
            className="button-carnet"
            value={title.id}
            onClick={() => {
              checkInside(title.title);
            }}
          >
            <Travelogue title={title.title} />
          </button>
        ))}
        {numberTravelogue != null && (
          <InsideTravelogue title={numberTravelogue.toString()} />
        )}
      </section>
    </>
  );
}

export default TraveloguePack;
