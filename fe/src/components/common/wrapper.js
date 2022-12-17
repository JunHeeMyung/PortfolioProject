import React from "react";
import axiosInterceptor from "components/common/axiosInterceptor";
import GlobalStyle from "components/styled/globalStyle";
import Loading from "components/common/loading";

const Wrapper = props => {

    axiosInterceptor();

    return (
        <>
            <Loading />
            <GlobalStyle backgroundColor='rgb(246,246,246)' color='black'/>
                {props.children}
        </>
    );
  }
  export default Wrapper