import { useEffect, useState } from "react"

function useCurrencyInfo(currrency) {

    const [data , setdata ] = useState({})
    const url = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{currency}.json'
    useEffect(() => {
        fetch(url)
            .then((res ) => res.json() )
            .then((res) => setdata(res[currrency]))
           
            
    }, [currrency])
    
    return data
}

export default useCurrencyInfo; 



