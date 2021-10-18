import React from 'react'
import AppImg from '../AppImg';

function NewsImg(props) {

    let cssImg = {
        position: 'absolute',
        width: '33%',
        height: '100%',
        paddingLeft: '50px',
        marginBottom: '50px',
        backgroundColor: '#fff',
        top: '0px',
        left: '0px',
    };

    return (
        <>
           <AppImg src = '' css = {cssImg} />
        </>
    )
}

export default NewsImg;