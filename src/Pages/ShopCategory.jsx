import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';

function ShopCategory(props) {
    const { All_product } = useContext(ShopContext);

    return (
        <>
            <div className='catagory'>

            </div>
        </>
    )
}

export default ShopCategory;
