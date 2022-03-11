import {useState} from 'react'
import Values from 'values.js'
import SingleColor from './components/SingleColor'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [colorList, setColorList] = useState([])
  const [colorValue, setColorValue] = useState('#1F2D62')
  const [error, setError] = useState(false)
  const [colorNum, setColorNum] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      const newColor = new Values(colorValue).all(Number(colorNum))
      setColorList(newColor)
    }catch (error){
      console.log(error)
      setError(true)
      toast.error('You must enter a hex value', {autoClose: 2000,});
    }
  }
  
  return (
    <>
    <section className='container'>
      <ToastContainer />
      <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input 
          className={`${error ? 'error' : null}`} 
          type='text' 
          value={colorValue} 
          onChange={(e) => setColorValue(e.target.value)} 
          />
          
          <input 
          className={`number-input ${error ? 'error' : null}`} 
          type='number' 
          value={colorNum} 
          onChange={(e) => setColorNum(e.target.value)} 
          />

          <button className='btn' type='submit'>Submit</button>
       
        </form>
        </section>
        <section className='colors'>
          {
            colorList.map((singleColor,i) => {
             return (
              <SingleColor key={i} {...singleColor}/>
            )})
          }
        </section>
    </>
  );
}

export default App;
