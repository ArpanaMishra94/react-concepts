import React, { useEffect } from 'react';

const Child = ({ func }) => {

    useEffect(() => {
        console.log('func was called');
    }, [func])

    return (
        <div>
            {func('Pedro')}
        </div>
    )
}

export default Child;