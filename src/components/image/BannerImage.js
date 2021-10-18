import React from 'react'
import AppImg from '../AppImg';

function BannerImage(props) {
    
    const { rightPart } = props;

    let cssImg = {
        position: 'absolute',
        width: '33%',
        height: '100%',
        backgroundColor: '#fff',
        top: '0px',
        left: '0px',
    };

    if (rightPart) {
        cssImg.width = '100%';
        cssImg.float = 'left';
        cssImg.paddingLeft = '33%';
    }

    return (
        <>
           <AppImg src = 'https://marketifythemes.net/html/waxon/img/slider/1.jpg' css = {cssImg} />
        </>
    )
}

export default BannerImage
