// The React useMemo Hook returns a memoized value. Think of memoization as caching a value so that it does not need to be recalculated. 
// The useMemo Hook only runs when one of its dependencies update. This can improve performance.


import axios from 'axios';
import React, { useEffect, useState, useMemo } from 'react';

const MemoExample = () => {
    const [data, setData] = useState('Title');
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then((resp) => {
                setData(resp.data.products);
            });
    }, []);

    const findLongestTitle = (products) => {
        if (!products) return null;

        let longestTitle = "";
        for (let i = 0; i < products.length; i++) {
            let currentTitle = products[i].title;
            if (longestTitle.length < currentTitle?.length) {
                longestTitle = currentTitle;
            }
        }
        console.log('computed');
        return longestTitle
    };

    const memo = useMemo(() => findLongestTitle(data), [data])

    return (
        <div>
            {memo}
            <button onClick={() => {
                setToggle(!toggle)
            }}
            >
                Toggle</button>
            {toggle && <h2>toggle</h2>}
        </div>
    )
}

export default MemoExample;