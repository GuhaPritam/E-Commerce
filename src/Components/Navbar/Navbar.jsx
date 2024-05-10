import Logo from '../Assets/logo.png';
import Cart_icon from '../Assets/cart_icon.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [menu, setMenu] = useState('shop');

    return (
        <div className='flex justify-around p-10 shadow'>
            <div className='flex items-center gap-10'>
                <img src={Logo} alt="Logo" />
                <p className='text-[#171717] text-3xl font-medium'>SHOPPER</p>
            </div>
            <ul className='flex items-center list-none gap-16 text-[#626262] font-2xl font-10 font-medium'>
                <li className='flex flex-col items-center justify-center gap-3 cursor-pointer' onClick={() => setMenu('shop')}>
                    <Link to='/'>Shop</Link> {menu === 'shop' ? <hr className='w-10 h-1 border rounded-lg bg-[#ff4141]' /> : <></>}
                </li>
                <li className='flex flex-col items-center justify-center gap-3 cursor-pointer' onClick={() => setMenu('mens')}>
                    <Link to='/mens'>Men</Link> {menu === 'mens' ? <hr className='w-10 h-1 border rounded-lg bg-[#ff4141]' /> : <></>}
                </li>
                <li className='flex flex-col items-center justify-center gap-3 cursor-pointer' onClick={() => setMenu('womens')}>
                    <Link to='/womens'>Women</Link> {menu === 'womens' ? <hr className='w-10 h-1 border rounded-lg bg-[#ff4141]' /> : <></>}
                </li>
                <li className='flex flex-col items-center justify-center gap-3 cursor-pointer' onClick={() => setMenu('kids')}>
                    <Link to='/kids'>Kids</Link> {menu === 'kids' ? <hr className='w-10 h-1 border rounded-lg bg-[#ff4141]' /> : <></>}
                </li>
            </ul>
            <div className='flex items-center gap-10'>
                <button className='w-28 h-10 border border-black rounded-full outline-none text-[#515151] bg-white text-lg font-medium cursor-pointer active:bg-[#f3f3f3]'>
                    <Link to='/login'>Login</Link>
                </button>
                <Link to='/cart'><img src={Cart_icon} alt="" /></Link>
                <div className='w-5 h-5 flex justify-center items-center mt-[-2rem] ml-[-3rem] rounded-lg text-sm bg-[red] text-white'>
                    0
                </div>
            </div>
        </div>
    )
}

export default Navbar;
