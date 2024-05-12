import Item from '../Item/item';
import data_product from '../Assets/data';

const Populer = () => {
    return (
        <>
            <div className='flex flex-col items-center gap-10 h-[50rem]'>
                <h1 className='text-[#171717] text-4xl font-semibold'>POPULER IN WOMAN</h1>
                <hr className='w-[13rem] h-2 rounded-2xl bg-[#252525]' />
                <div className='flex mt-10 gap-10'>
                    {data_product.map((element, index) => {
                        return <Item key={index} id={element.id} name={element.name} image={element.image} new_price={element.new_price} old_price={element.old_price} />
                    })}
                </div>
            </div>
        </>
    )
}

export default Populer;
