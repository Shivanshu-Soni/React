import { useEffect, useState } from "react";

function EffectApp() {
  const [count, setcount] = useState(0);
  var [total, settotal] = useState(0);
  
  //first -> side up function
  // second -> cleanup function
  // third -> comma seperated de list

  // variation 1 => Runs on every render
  //   useEffect(() => {
  //     alert("i will run on each render");
  //   });

  // variation 2 => runs on First render only
  // useeffect runs before rendering
  //   useEffect(() => {
  //     alert("i will render one time");
  //   }, []);

  // variation 3
  // run for each count update
  //   useEffect(() => {
  //     alert("i will run for each count update");
  //   }, [count]);

  // variation 4
  useEffect(() => {
    alert("i will run for both count and total");
  }, [count, total]);

  function handleClick() {
    setcount(count + 1);
  }

  function handleTotalCount() {
    settotal(total = count+1);
  }

  return (
    <>
      <button onClick={handleClick}>Count</button>
      count is : {count}
      <button onClick={handleTotalCount}>total count</button>
      total is : {total}
    </>
  );
}

export default EffectApp;
