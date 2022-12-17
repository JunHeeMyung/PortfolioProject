import styled from 'styled-components';

const DivStyle = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    position : absolute;
    z-index: ${props => props.zindex || '1000'};
`

const StyledModal = ({children,open, ...props }) => {

    return  <>
                {
                open?
                <DivStyle {...props} >{children}</DivStyle>
                :<></>
                }
            </>
}

export default StyledModal;