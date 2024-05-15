import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import Remove_icon from '../Assets/cart_cross_icon.png';

function CartItems() {
    const { getTotalCartAmount, All_product, cartItems, removeFromCart } = useContext(ShopContext);

    return (
        <>
            <div className='my-24 mx-40'>
                <div className='grid grid-cols-6 items-center gap-20 py-5 px-0 text-[#454545] text-lg font-semibold'>
                    <p>Products</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <hr className='h-1 bg-[#e2e2e2] border-0' />
                {All_product.map((e) => {
                    if (cartItems[e.id] > 0) {
                        return <>
                            <div>
                                <div className='grid grid-cols-6 items-center gap-20 py-5 px-0 text-[#454545] text-base font-medium'>
                                    <img src={e.image} alt="" className='h-16' />
                                    <p>{e.name}</p>
                                    <p>$ {e.new_price}</p>
                                    <button className='w-16 h-12 border border-solid border-[#ebebeb] bg-white'>{cartItems[e.id]}</button>
                                    <p>$ {e.new_price * cartItems[e.id]}</p>
                                    <img className='w-4 my-0 mx-10 cursor-pointer' src={Remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                                </div>
                                <hr />
                            </div>
                        </>
                    }
                    return null;
                })}
                <div className='flex my-24 mx-0'>
                    <div className='flex flex-1 flex-col mr-48 gap-10'>
                        <h1 className='text-[2rem] font-semibold '>Cart Totals</h1>
                        <div>
                            <div className='flex justify-between py-4 px-0'>
                                <p>Subtotal</p>
                                <p>$ {getTotalCartAmount()}</p>
                            </div>
                            <hr />
                            <div className='flex justify-between py-4 px-0'>
                                <p>Shipping Free</p>
                                <p>Free</p>
                            </div>
                            <hr />
                            <div className='flex justify-between py-4 px-0 font-semibold'>
                                <h3>Total</h3>
                                <h3>$ {getTotalCartAmount()}</h3>
                            </div>
                        </div>
                        <button className='w-64 h-14 outline-none border-none bg-[#ff5a5a] text-[#fff] text-base font-semibold cursor-pointer'>PROCEED TO CHECKOUT</button>
                    </div>
                    <div className='flex-1 text-base font-medium'>
                        <p className='text-[#555]'>If you have a promo code, Enter it here</p>
                        <div className='w-96 mt-4 pl-5 h-14 bg-[#eaeaea] flex'>
                            <input className='border-none outline-none bg-transparent text-base w-80 h-12' type="text" placeholder='promo code' />
                            <button className='w-40 h-14 text-base bg-black text-white cursor-pointer'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItems
