import { useState, createContext } from 'react';

export const StockContext = createContext();

function StockContextProvider(props) {
    const [stockForNewsFeed, setStockForNewsFeed] = useState("AAPL");
    const [sharesForNewsFeed, setSharesForNewsFeed] = useState(0);
    const [closingPriceForNewsFeed, setClosingPriceForNewsFeed] = useState(0);
    const [percentageForNewsFeed, setPercentageForNewsFeed] = useState(0);
    const [confirmedPassword, setConfirmedPassword] = useState("");
    const [allStocksSymbols, setAllStocksSymbols] = useState([]);
    const [currentUserUid, setCurrentUserUid] = useState("myStocks");
    const [username, setUsername] = useState("tepez1000");
    const value = { stockForNewsFeed , setStockForNewsFeed , sharesForNewsFeed, setSharesForNewsFeed , closingPriceForNewsFeed, setClosingPriceForNewsFeed , percentageForNewsFeed, setPercentageForNewsFeed,allStocksSymbols, setAllStocksSymbols , confirmedPassword, setConfirmedPassword ,currentUserUid, setCurrentUserUid,username, setUsername};

    return (
        <StockContext.Provider value = {value}>
            {props.children}
        </StockContext.Provider>
    )
}

export default StockContextProvider;