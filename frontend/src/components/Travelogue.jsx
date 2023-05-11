import { useState } from "react";
import InsideTravelogue from "./InsideTravelogue";

function Travelogue() {
  const [isInside, setIsInside] = useState(false);

  const checkInside = () => {
    setIsInside(!isInside);
  };

  return (
    <>
      <button type="button" onClick={checkInside}>
        <div>
          <h1>titre carnet</h1>
        </div>
      </button>
      {isInside && <InsideTravelogue />}
    </>
  );
}

export default Travelogue;
