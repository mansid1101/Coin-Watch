import React, { createContext, useContext, useEffect, useState } from 'react'

const Coin = createContext()

const CoinContext = ({ children }) => {

    const [curr, setCurr] = useState("AUD");
    const[sym, setSym] = useState("$");
    useEffect(()=>{
        if (curr === "AUD") setSym("$");
        else if (curr === "USD") setSym("$");
    }, [curr])

    return (
        <Coin.Provider value={{curr, sym, setSym, setCurr}}>
            {children}
        </Coin.Provider>
    )
}

export default CoinContext;

export const CoinState = () => {
    return useContext(Coin)
}