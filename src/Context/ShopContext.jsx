import { createContext } from 'react';
import All_product from '../Components/Assets/all_product';
import PropTypes from 'prop-types';

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

ShopContextProvider.propTypes = {
    children: PropTypes.string.isRequired,
};
