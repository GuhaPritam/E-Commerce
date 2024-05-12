const item = (props) => {
    return (
        <>
            <div className='w-fit hover:transform duration-600'>
                <img src={props.image} alt="" />
                <p className='mt-1 mb-1'>{props.name}</p>
                <div className='flex space-x-5'>
                    <div className='text-[#374151] text-base font-semibold'>
                        ${props.new_price}
                    </div>
                    <div className='text-[#8c8c8c] text-base font-medium line-through'>
                        ${props.old_price}
                    </div>
                </div>
            </div>
        </>
    )
}

export default item;
