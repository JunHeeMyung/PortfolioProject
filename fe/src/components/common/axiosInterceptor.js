import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { plus, minus } from "slice/axiosCounterSlice";
import { setIntercepted } from "slice/axiosInterceptorSlice"

const AxiosInterceptor = () => {

    const dispatch = useDispatch();
    const counterPlus = () => dispatch(plus(1));
    const counterMinus = () => dispatch(minus(1));
    const setAxiosInterceptor = () => dispatch(setIntercepted(1));
    const intercepted = useSelector(state => state.axiosInterceptor.value);

    if(intercepted===0){

        axios.interceptors.request.use(
            config => {
                counterPlus();
                return config;
            },
            error => Promise.reject(error)
            );

        axios.interceptors.response.use(
            response => {
                counterMinus();
                return response;
            },
            error => Promise.reject(error)
            );

        setAxiosInterceptor();

    }
    
}

export default AxiosInterceptor