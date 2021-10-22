import React from 'react';

interface Props {
    runtime: number;
}

export const RuntimeInfo = ({ runtime }: Props) => {
    const h = Math.floor(runtime / 60);
    const m = runtime % 60;
    if (h > 0) {
        return <>{`${h}h ${m}min`}</>;
    } else {
        return <>{`${m}min`}</>;
    }
};
