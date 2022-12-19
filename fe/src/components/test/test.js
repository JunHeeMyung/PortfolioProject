import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router';
import axios from 'axios';

const Test = () => {

  const [data, setData] = useState({email:''});

  const onChange = e => {
    const { name , value } = e.target;
    setData({...data, [name] : value });
  }

  const onSubmit = e => {
    e.preventDefault();
    register();
  }

  const register = ()=>{ 
    axios({
      method : 'post',
      url : '/api/test/header',
      data : data,
    })
    .then(res => {
      console.log(res)
      alert(res.data);
    }).catch(err=>{
      console.log(err)
    });
  }

  useEffect(()=>{

  },[data])

  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
              전송테스트
            <hr />
              {JSON.stringify(data)}
            <hr />

            <form onSubmit={onSubmit}>
              <input
                type="text"
                name="email"
                defaultValue=""
                onChange={onChange}
              />
              <button type="submit">전송</button>
            </form>

            <hr />
            
        </>
        }>
        </Route>
      </Routes>
    </>
  );
}

export default Test;