import New_collection from '../Assets/new_collections';
import Item from '../Item/item'; 

const NewCollections = () => {
    return (
        <>
            <div className='flex flex-col items-center gap-10 h-[44rem] mx-20'>
                <h1 className='text-[#171717] text-4xl font-semibold'>NEW COLLECTIONS</h1>
                <hr className='w-[13rem] h-2 rounded-2xl bg-[#252525]' />
                <div className='grid grid-cols-4 gap-10 mt-12 scale-100'>
                    {New_collection.map((element, index) => {
                        return <Item key={index} id={element.id} name={element.name} image={element.image} new_price={element.new_price} old_price={element.old_price} />
                    })}
                </div>
            </div>
        </>
    )
}

export default NewCollections;
