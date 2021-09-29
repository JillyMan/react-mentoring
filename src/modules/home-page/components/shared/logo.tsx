import React from 'react';

interface Props {
    text: string;
    boldText: string;
}

const logoStyle = {
    width: '151px',
    height: '24px',
    color: '#F65261',
    fontFamily: 'Montserrat',
    fontSize: '20px',
};

export const Logo = ({ boldText, text }: Props) => {
    return (
        <p style={logoStyle}>
            <b>{boldText}</b>
            {text}
        </p>
    );
};
