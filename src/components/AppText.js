import React from 'react';

const AppText = (props) => {
    const { Tag, text, italic, bold, h3, p, span, hidden, title, date } = props;

    let cssText = {
        fontFamily: "'Montserrat', 'sans-serif'",
        fontSize: '15px',
        lineHeight: '30px',
        letterSpacing: '0.5px',
        fontWeight: '400',
        color: '#767676',       
        opacity: '1',
    }

    if (italic) {
        cssText.fontStyle = 'italic';
    }

    if (bold) {
        cssText.fontWeight = 'bold';
    }

    if (h3) {
        cssText.textTransform = 'uppercase';
        cssText.fontWeight = '900';
        cssText.fontSize = '35px';
        cssText.color = '#000';
    }

    if (span) {
        cssText.fontWeight = '600';
        cssText.display = 'inline-block';
        cssText.paddingTop = '20px';
    }

    if (p) {
        cssText.marginBottom = '13px';
        cssText.fontFamily = "Mulish";
    }

    if (hidden) {
        cssText.color = 'transparent';
        cssText.fontSize = '150px';
        cssText.fontWeight = '900';
        cssText.opacity = '.1';
        cssText.lineHeight = '0';
        cssText.WebkitTextStroke = '1px #000';
        cssText.WebkitUserSelect = 'none';
    }

    if (title) {
        cssText.fontSize = '18px';
        cssText.fontWeight = '600';
        cssText.color = '#000';
        cssText.marginBottom = '16px';
    }

    if (date) {
        cssText.fontSize = '13px';
    }
    
    return (
        <>
        <Tag style={cssText}>{text}</Tag>
        </>
    )
}

export default AppText;
