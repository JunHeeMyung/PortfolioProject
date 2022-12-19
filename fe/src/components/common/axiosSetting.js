import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { add } from "slice/axiosCounterSlice";

const AxiosSetting = () => {

    const IPSERVER = process.env.REACT_APP_IPSERVER;

    const dispatch = useDispatch();
    const addAxiosCounter = addend => dispatch(add(addend));
    const getIpAddr = () => {

        axios.get(IPSERVER)
        .then(res => {
          setAxiosInterceptor(res.data.ip);
        }).catch(err=>{
          setTimeout(() => {window.location.reload();}, 3000);
        });
        
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