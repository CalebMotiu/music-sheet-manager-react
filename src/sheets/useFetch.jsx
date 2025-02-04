import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const abortCont = new AbortController;

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal})
                .then(res => {
                    if (!res.ok){
                        throw Error('could not fetch the data');
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data)
                    setPending(false)
                    setError(null)
                })
                .catch(err => {
                    if (err === 'AbortError'){
                        console.log('Fetch aborted')
                    } else {
                    setPending(false)
                    setError(err.message)
                    }
                })
        }, 1000)

        return () => abortCont.abort();
    }, [url]);
    return { data, isPending, error}
}

export default useFetch;
