import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import spinner from 'images/spinner.png'
import StyledModal from 'components/styled/styledModal';

const Loading = () => {

    const [open,setOpen] = useState(false);
    const axiosCounter = useSelector(state => state.axiosCounter.value);
    const openModal = () => { setOpen(true); }
    const closeModal = () => { setOpen(false); }

    useEffect(()=>{
        axiosCounter===0?
            closeModal():
            openModal();
    },[axiosCounter])

    return(
        <>
            <StyledModal open={open}>
                <img src={spinner} alt="loading"/>
            </StyledModal>

        </>
    );

}

export default Loading