import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router';
import axios from 'axios';

const Test = () => {

  const [msg, setMsg] = useState("BE is dead")

  const requestHeartbeat = ()=>{ 
    axios.get("/api/heartbeat")
    .then(res => {
      console.log(res)
      setMsg(res.data);
    });
  }

  useEffect(()=>{
    requestHeartbeat();
  },[])

  useEffect(()=>{},[msg])

  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <p>
              FE is alive
            </p>

            <p>
              {msg}
            </p>

            <button onClick={requestHeartbeat}>재요청</button>

          </>
        } />

      </Routes>
    </>
  );
}

export default Test;