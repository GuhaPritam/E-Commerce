import PropTypes from 'prop-types';
import { useContext } from 'react';
import Dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/item';
import { ShopContext } from '../Context/ShopContext';

function ShopCategory(props) {
    const { All_product } = useContext(ShopContext);

    return (
        <>
            <div className='catagory'>
                <img className='block mx-auto my-7 w-[79%]' src={props.banner} alt="" />
                <div className='flex my-0 mx-40 justify-between items-center'>
                    <p>
                        <span className='font-semibold'>Showing 1-12</span> out of 36 products
                    </p>
                    <div className='py-2 px-5 rounded-full border border-solid border-[#888]'>
                        Sort by <img className="inline-block ml-2" src={Dropdown_icon} alt="" />
                    </div>
                </div>
                <div className='my-5 mx-40 grid grid-cols-4 gap-10'>
                    {All_product.map((element, index) => {
                        if (props.category === element.category) {
                            return <Item key={index} id={element.id} name={element.name} image={element.image} new_price={element.new_price} old_price={element.old_price} />
                        }
                        else {
                            return null;
                        }
                    })}
                </div>
                <div className='flex justify-center items-center my-[5rem] mx-auto w-60 h-16 rounded-full bg-[#ededed] text-[#787878] text-lg font-medium'>
                    Explore More
                </div>
            </div>
        </>
    )
}

export default ShopCategory;

ShopCategory.propTypes = {
    banner: PropTypes.any.isRequired,
    category: PropTypes.any.isRequired
};