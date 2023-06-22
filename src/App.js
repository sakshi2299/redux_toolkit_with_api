
import { useDispatch, useSelector } from 'react-redux';
import './App.css';


import { useEffect } from 'react';
import { FetchNewsAPI, test } from './store/feature/UserSlice';


function App() {
const dispatch = useDispatch()
const getStoreData = useSelector(state=>state.userDetails)
const {data, errorData,loading, status} = useSelector(state=>state.userDetails.userData)
console.log(data, errorData,loading, status)

useEffect(()=>{
  dispatch(test(1))
  dispatch(FetchNewsAPI(1))

},[])

  return (
    <>
    {getStoreData.value}

    </>
  );
}

export default App;
