import React from "react";
import axiosInterceptor from "components/common/axiosInterceptor";

const Wrapper = props => {

    axiosInterceptor();

    return (
        <>
                {props.children}
        </>
    );
  }
  export default Wrapper