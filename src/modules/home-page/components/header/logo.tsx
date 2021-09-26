import React from 'react';

interface Props {
    text: string;
    boldText: string;
}

export const Logo = ({ boldText, text }: Props) => {
    return (
        <p style={{
            width: '151px',
            height: '24px',
            color: '#F65261',
            fontFamily: 'Montserrat',
            fontSize: '20px'
        }}><b>{boldText}</b>{text}</p>
    );
}
