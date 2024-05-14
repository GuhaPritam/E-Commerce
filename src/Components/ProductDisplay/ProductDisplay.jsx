import PropTypes from 'prop-types';
import Star_dull_icon from '../Assets/star_dull_icon.png';
import Star_icon from '../Assets/star_icon.png';

function ProductDisplay({ product }) {
    return (
        <>
            <div className='flex my-0 mx-44'>
                <div className='flex gap-4'>
                    <div className='flex flex-col gap-4'>
                        <img className='h-[8.5rem] w-[40rem]' src={product.image} alt="" />
                        <img className='h-[8.5rem] w-[40rem]' src={product.image} alt="" />
                        <img className='h-[8.5rem] w-[40rem]' src={product.image} alt="" />
                        <img className='h-[8.5rem] w-[40rem]' src={product.image} alt="" />
                    </div>
                    <div className='display-img'>
                        <img className='w-[144rem] h-[37rem]' src={product.image} alt="" />
                    </div>
                </div>
                <div className='my-0 mx-16 flex flex-col'>
                    <h1 className='text-[#3d3d3d] text-4xl font-bold'>{product.name}</h1>
                    <div className='flex items-center mt-3 gap-1 text-[#1c1c1c] text-base'>
                        <img src={Star_icon} alt="" />
                        <img src={Star_icon} alt="" />
                        <img src={Star_icon} alt="" />
                        <img src={Star_icon} alt="" />
                        <img src={Star_dull_icon} alt="" />
                        <p>(122)</p>
                    </div>
                    <div className='flex my-5 mx-0 gap-7 text-2xl font-bold'>
                        <div className='text-[#818181] line-through'>
                            ${product.old_price}
                        </div>
                        <div className='text-[#ff4141]'>
                            ${product.new_price}
                        </div>
                    </div>
                    <div className='display-right-description'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. quibusdam ea quia, recusandae nisi est autem.
                    </div>
                    <div className='display-right-size'>
                        <h1 className='mt-5 text-[#656565] text-xl font-semibold'>Select Size</h1>
                        <div className='flex my-7 mx-0 gap-5'>
                            <div className='py-4 px-6 bg-[#fbfbfb] border border-solid border-[#ebebeb] rounded cursor-pointer'>S</div>
                            <div className='py-4 px-6 bg-[#fbfbfb] border border-solid border-[#ebebeb] rounded cursor-pointer'>M</div>
                            <div className='py-4 px-6 bg-[#fbfbfb] border border-solid border-[#ebebeb] rounded cursor-pointer'>L</div>
                            <div className='py-4 px-6 bg-[#fbfbfb] border border-solid border-[#ebebeb] rounded cursor-pointer'>XL</div>
                            <div className='py-4 px-6 bg-[#fbfbfb] border border-solid border-[#ebebeb] rounded cursor-pointer'>XXL</div>
                        </div>
                    </div>
                    <button className='py-5 px-10 w-52 text-base font-semibold text-white bg-[#FF4141] mb-5 border-none outline-none cursor-pointer'>ADD TO CART</button>
                    <p className='mt-2'><span className='font-semibold'>Category :</span>Women, T-Shirt, Crop Top</p>
                    <p className='mt-2'><span className='font-semibold'>Tag :</span>Modern, Latest</p>
                </div>
            </div>
        </>
    );
}

ProductDisplay.propTypes = {
    product: PropTypes.shape({
        image: PropTypes.any.isRequired,
        name: PropTypes.any.isRequired,
        old_price: PropTypes.any.isRequired,
        new_price: PropTypes.any.isRequired,
    }).isRequired,
};

export default ProductDisplay;
