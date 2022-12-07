import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router';
import StyledButton from 'components/styled/styledButton';
import axios from 'axios';

const Test = () => {

  const [msg, setMsg] = useState("BE is dead")

  const requestHeartbeat = ()=>{ 
    axios.get("/api/test/heartbeat")
    .then(res => {
      console.log(res)
      setMsg(res.data);
    });
  }

  const requestButton =  <StyledButton 
              width='6.0rem' 
              height='2.0rem'
              hoverColor = 'white'
              backgroundColor='rgba(0,0,0,0.1)'
              hoverBackgroundColor='rgba(0,0,0,0.7)'
              onClick={requestHeartbeat}>재요청</StyledButton>


  useEffect(()=>{
    requestHeartbeat();
  },[])

  useEffect(()=>{},[msg])

  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
              FE is alive
            <hr />
            <span>
              {msg}
            </span>
              {requestButton}
            <hr />  
        
            
        </>
        }>
        </Route>
      </Routes>
    </>
  );
}

export default Test;