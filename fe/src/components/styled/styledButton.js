import styled from 'styled-components';

const ButtonStyle = styled.button`

    display: ${props => props.display || 'block'};
    width: ${props => props.width || 'fit-content'};
    height: ${props => props.height || 'fit-content'};
    padding: ${props => props.padding || '0'};
    margin: ${props => props.margin || '0'};
    border: ${props => props.border || 'none'};
    font-size: ${props => props.fontSize || '1.0rem'};
    color: ${props => props.color || 'black'};
    cursor: ${props => props.cursor || 'pointer'};
    text-align: ${props => props.textAlign || 'center'};
    background-color: ${props => props.backgroundColor || 'white'};
    box-shadow: ${props => props.boxShadow || '-2px -2px gray'}; 

    &:hover{
        filter: brightness(0.9);    
    }

`
const StyledButton = ({children, ...props }) => {
    return  <ButtonStyle {...props} >{children}</ButtonStyle>
}

export default StyledButton;