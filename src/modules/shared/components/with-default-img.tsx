import React, { ComponentType, useEffect, useState } from 'react';
import DefaultImage from 'assets/imges/no-image.png';

interface InProps {
    url: string;
    onError: () => void;
}

interface OutProps {
    url: string;
}

export const WithDefaultImage = (Component: ComponentType<InProps>) => {
    return ({ url }: OutProps) => {
        const [imgUrl, setImgUrl] = useState(url);

        useEffect(() => {
            setImgUrl(url);
        }, [url]);

        return <Component url={imgUrl} onError={() => setImgUrl(DefaultImage)} />;
    };
};
