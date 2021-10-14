import React from 'react'

const AppImg = (props) => {
    const { src, brandLogo, authorImg, productAndNewsImg, quoteImg, circleImg, url } = props;

    let cssImg = {
        width: 'auto',
        height: 'auto',
    }

    if (brandLogo) {
        cssImg.maxWidth = '70px'
    };

    if (authorImg) {
        cssImg.width = '40%';
        cssImg.minWidth = '10%';
    };

    if (productAndNewsImg) {
        cssImg.backgroundImage = `url(${url})`;
        cssImg.width = '33.3333%';
        cssImg.paddingLeft = '50px';
    }

    if (quoteImg) {
        cssImg.backgroundImage = `url(${url})`;
        cssImg.width = '50%';
        cssImg.paddingLeft = '50px';
        cssImg.marginBottom = '50px';
    }

    if (circleImg) {
        cssImg.borderRadius = '50%'
    }

    let cssDiv = {
        width: '200px',
        height: '200px'
    }

    return (
        <div style = {cssDiv}>
            <img src = {src} alt = {src} style = {cssImg} />
        </div>
    )
}

export default AppImg
