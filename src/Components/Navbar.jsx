import Logo from './Assets/logo.png';
import Cart_icon from './Assets/cart_icon.png'

const Navbar = () => {
    return (
        <div className='flex justify-around p-10 shadow'>
            <div className='flex items-center gap-10'>
                <img src={Logo} alt="Logo" />
                <p className='text-[#171717] text-3xl font-medium'>SHOPPER</p>
            </div>
            <ul className='flex items-center list-none gap-16 text-[#626262] font-2xl font-10 font-medium'>
                <li className='flex flex-col items-center justify-center gap-3 cursor-pointer'>
                    Shop
                    <hr className='w-10 h-1 border rounded-lg bg-[#ff4141]' />
                </li>
                <li className='flex flex-col items-center justify-center gap-3 cursor-pointer'>Men</li>
                <li className='flex flex-col items-center justify-center gap-3 cursor-pointer'>Women</li>
                <li className='flex flex-col items-center justify-center gap-3 cursor-pointer'>Kids</li>
            </ul>
            <div className='flex items-center gap-10'>
                <button className='w-28 h-10 border border-black rounded-full outline-none text-[#515151] bg-white text-lg font-medium cursor-pointer active:bg-[#f3f3f3]'>Login</button>
                <img src={Cart_icon} alt="" />
                <div>0</div>
            </div>
        </div>
    )
}

export default Navbar
