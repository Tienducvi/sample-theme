import React from 'react'
import AppImg from '../AppImg';

function AuthorImg() {

    let cssImg = {
        marginBottom: '193px',
        paddingTop: '230px',
        width: '40%',
        minWidth: '10%',
        maxWidth: '100%',
        verticalAlign: 'middle',
        willChange: 'transform',
        transform: 'translate3d(0px, -10px, 0px)',
        transition: 'transform 5s cubic-bezier(0, 0, 0, 1) 0s',
    };


    return (
        <>
           <AppImg src = 'https://marketifythemes.net/html/waxon/img/about/2.jpg' css = {cssImg} />
        </>
    )
}

export default AuthorImg;