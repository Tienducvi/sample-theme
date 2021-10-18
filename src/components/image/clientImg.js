import React from 'react'
import AppImg from '../AppImg';

function ClientImg(props) {

    let cssImg = {
        position: 'absolute',
        top: '0px',
        bottom: '0px',
        left: '0px',
        right: '0px',
        width: '50%',
        paddingLeft: '50px',
        marginBottom: '50px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <>
           <AppImg src = '' css = {cssImg} />
        </>
    )
}

export default ClientImg;