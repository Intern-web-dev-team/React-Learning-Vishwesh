import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import { increment, decrement, incrementByAmount, reset, toggleTheme } from './counterSlice';
import {useState} from 'react'

function App() {
  const [initValue, setInitValue] = useState(0);
  const count = useSelector(State => State.counter.value)
  const dispatch = useDispatch();
  const isDarkMode = useSelector(state=> state.counter.isDarkMode);

  function handleClickInc(){
    dispatch(increment());
  }

  function handleClickDec(){
    dispatch(decrement());
  }

  function handleChange(e){
    setInitValue(e.target.value);
  }
  function handleClickRes(){
    dispatch(reset());
  }

  function handleButton(){
    dispatch(incrementByAmount(initValue));
  }

  return (
   <>
   <h1>COUNT: {count}</h1>
   
   <button onClick={handleClickInc}>+</button>
   <button onClick={handleClickDec}>-</button>
   <input type="number" value={initValue} onChange={handleChange}/>
   <button onClick={handleButton}>INC</button>
   <button onClick={handleClickRes}>Reset</button>
   <button onClick={() => dispatch(toggleTheme())}>
        {isDarkMode ? '🌞' : '🌙'}
      </button>
   </>
  )
}

export default App
