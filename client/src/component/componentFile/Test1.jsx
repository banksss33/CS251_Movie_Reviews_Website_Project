import { useState } from "react";
import Assitance from "./Assitance";

function Test1() {
  const [isShown, setCount] = useState(0);
  return (
    <>
      <p>{isShown}</p>
    
    </>
  );
}

export default Test1;
