import { createContext } from 'react';
import All_product from '../Components/Assets/all_product';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const contextValue = { All_product };

    return (
        <>
            <ShopContext.Provider value={contextValue} >
                {props.children}
            </ShopContext.Provider>
        </>
    )
}

export default ShopContextProvider;
