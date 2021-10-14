import React from 'react';

const AppButton = (props) => {
    const { aboutButton, contactButton, onClick } = props
    let text = '';
    let cssButton = {
        textDecoration: 'none',
        padding: '13px 50px',
        display: 'inline-block',
        border: '2px solid #000',
        fontStyle: 'italic',
        color: 'white',
        backgroundColor: 'black'
    };
    if (aboutButton) {
        text = 'Learn More';
    };

    if (contactButton) {
        text = 'Send Message';
    }

    return (
        <>
            <a style={cssButton} href='#default' onClick={onClick}>
                <span>{text}</span>
            </a>			
        </>
    )
}

export default AppButton