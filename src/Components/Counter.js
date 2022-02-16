import {useState} from "react";


function addCount(){
    setCount((count+1));
}

function subCount(){
    if(count === 0){
        console.log("Let's stay possitive");
    } else {
        setCount((count-1));
    }
}


function reset(){
    setCount(0);
}

const Counter = () => {
  let [count, changeCount] = useState(0);
  return (
    <div className="counter">
      <h2>{count}</h2>
      <button onClick={() => changeCount(count - 1)}>
        <span>-1</span>
      </button>
      <button onClick={() => changeCount(count + 1)}>
        <span>+1</span>
      </button>
      <button onClick={() => changeCount((count = 0))}>
        <span>Reset</span>
      </button>
    </div>
  );
};

export default Counter;