import Data_product from '../Assets/data';
import Item from '../Item/item';

function RelatedProducts() {
    return (
        <>
            <div className='flex flex-col items-center gap-2 h-screen mt-[10rem]'>
                <h1 className='text-[#171717] text-5xl font-semibold'>Related Products</h1>
                <hr className='w-52 h-2 rounded-lg bg-[#252525]' />
                <div className='my-5 mx-40 grid grid-cols-4 gap-10'>
                    {Data_product.map((element, index) => {
                        return <Item key={index} id={element.id} name={element.name} image={element.image} new_price={element.new_price} old_price={element.old_price} />
                    })}
                </div>
            </div>
        </>
    )
}

export default RelatedProducts;
