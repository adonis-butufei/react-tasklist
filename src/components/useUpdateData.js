import {useState, useEffect} from 'react';

function useUpdateDataLocalStorage(key) {
    const [data, setData] = useState(() => {
        const localData = localStorage.getItem(key);
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(data))
    }, [key, data]);

    return {data, setData};
}

export default useUpdateDataLocalStorage;
