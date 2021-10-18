import React from 'react'
import AppImg from '../AppImg';

function ProductImg(props) {

    let cssImg = {
        position: 'absolute',
        top: '0px',
        bottom: '0px',
        left: '0px',
        right: '0px',
        width: '33.3333%',
        paddingLeft: '50px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };

    return (
        <>
            <AppImg src = 'https://marketifythemes.net/html/waxon/img/portfolio/1.jpg' css = {cssImg} />
        </>
    )
}

export default ProductImg;