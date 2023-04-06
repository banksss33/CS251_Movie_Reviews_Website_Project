import { useState } from "react";
import Assitance from "./Assitance";

function Test() {
  const [isShown, setCount] = useState(0);
  return (
    <>
      <p>{isShown}</p>
      <Assitance />
    </>
  );
}

export default Test;
