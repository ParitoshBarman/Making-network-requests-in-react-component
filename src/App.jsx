import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DataDisplay from './components/DataDisplay.jsx'
import LoadingComp from './components/LoadingComp.jsx'
import ErrorComp from './components/ErrorComp.jsx'

function App() {
  const [data, setdata] = useState([])
  const [isLoading, setisLoading] = useState(false)
  const [error , seterror ] = useState(null)

  async function fetchData(){
    try{
      setisLoading(true);
      let res = await fetch("https://jsonplaceholder.typicode.com/posts");
      let getdata = await res.json();
      setdata(getdata);
      console.log(getdata);
      setisLoading(false);
    }
    catch(err){
      console.log("This is eeeeeeee:",err);
      seterror("An error ocore");
      setisLoading(false);
    }
  }


  useEffect(()=>{
    fetchData();
  }, [])
  return (
    <>
    <button onClick={fetchData}>Click to Fetch the Data</button>
    <LoadingComp isLoading={isLoading} />
    {data.length>0?<DataDisplay data={data} />:null}
      
      <ErrorComp error={error} />
    </>
  )
}

export default App
