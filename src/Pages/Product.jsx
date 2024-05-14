import { ShopContext } from '../Context/ShopContext';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
    const { All_product } = useContext(ShopContext);
    const { productId } = useParams();
    const product = All_product.find((e) => e.id === Number(productId));

    return (
        <>
            <div>
                <Breadcrums product={product} />
                <ProductDisplay product={product} />
                <RelatedProducts />
            </div>
        </>
    )
}

export default Product;
