import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { add } from "slice/axiosCounterSlice";

const AxiosSetting = () => {

    const IPSERVER = "https://api.ipify.org/?format=json";
    
    const dispatch = useDispatch();
    const addAxiosCounter = num => dispatch(add(num));
    const getIpAddr = () => {

      fetch(IPSERVER)
            .then(res=>res.json())
            .then(data => {
                console.log(data.ip);
                setAxiosInterceptor(data.ip);
        }).catch(err=>{
            console.log(err);
            setAxiosInterceptor('');
        })

    }
    const setAxiosInterceptor = ipAddr => {

      axios.interceptors.request.use(
        config => {
            config.headers={...config.headers,'X-Forwarded-For':ipAddr};
            addAxiosCounter(1);
            return config;
        },
        error => Promise.reject(error)
        );

      axios.interceptors.response.use(
        response => {
            addAxiosCounter(-1);
            return response;
        },
        error => Promise.reject(error)
        );

    }

    useEffect(()=>{
      getIpAddr();
      // eslint-disable-next-line
    },[dispatch]);      

  }
  export default AxiosSetting