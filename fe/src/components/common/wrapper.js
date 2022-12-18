import React from "react";
import GlobalStyle from "components/styled/globalStyle";
import Loading from "components/common/loading";

const Wrapper = props => {

    return (
        <>
            <Loading />
            <GlobalStyle backgroundColor='rgb(246,246,246)' color='black'/>
                {props.children}
        </>
    );
  }
  export default Wrapper