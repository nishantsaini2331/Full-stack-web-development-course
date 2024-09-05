import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset } from "./utility/counterSlice";


function App() {

    const dispatch =  useDispatch()
    const data =  useSelector((state) => state.counter ) // re-render
    console.log(data.value);
    function handleInc(){

        dispatch(increment("nishant"))
    }
    function handleDec(){

        dispatch(decrement("nishant"))
    }
    function handelReset(){

        dispatch(reset("nishant"))
    }

  return (
    <>
      <div>
            <h1>Hellooo bhaiyee</h1>
            <h1>{data.value}</h1>
            <button onClick={handleInc}>Increment</button>
            <button onClick={handleDec}>Decrement</button>
            <button onClick={handelReset}>Reset</button>
      </div>
    </>
  )
}

export default App
