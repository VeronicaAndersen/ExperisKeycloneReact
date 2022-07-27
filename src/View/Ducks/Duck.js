import { useEffect, useState } from "react";

const Quote = () => {

    const [quote, setQuote] = useState("");
    const url = 'https://random-d.uk/api/quack';

    const fetchQuote = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setQuote(data.url)
    }

    useEffect(() => {
        fetchQuote()
    }, [])

    return (
        <>
        <img src={quote} alt="duck" />
            <p>{quote}</p>
        </>
    );
};

export default Quote
