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
    box-shadow: 2px 2px 2px 2px gray;

    &:hover{
        color: ${props => props.hoverColor || props.backgroundColor ||'white'};
        background-color: ${props => props.hoverBackgroundColor || props.color ||'black'};
    }

    &:active{
        color: ${props => props.hoverColor || props.backgroundColor ||'white'};
        background-color: ${props => props.hoverBackgroundColor || props.color ||'black'};
        transform:translate(3px,3px);
        box-shadow: 1px 1px 1px 1px gray;
    }

`
const StyledButton = ({children, ...props }) => {
    return  <ButtonStyle {...props} >{children}</ButtonStyle>
}

export default StyledButton;