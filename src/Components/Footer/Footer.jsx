import Footer_logo from '../Assets/logo_big.png';
import Instagram_icon from '../Assets/instagram_icon.png';
import Pintester_icon from '../Assets/pintester_icon.png';
import Whatsapp_icon from '../Assets/whatsapp_icon.png';

function Footer() {
    return (
        <>
            <div className='flex flex-col justify-center items-center gap-10'>
                <div className='flex items-center gap-5'>
                    <img src={Footer_logo} alt="" />
                    <p className='text-[#383838] text-5xl font-bold'>SHOPPER</p>
                </div>
                <ul className='flex list-none gap-12 text-[#252525] text-xl'>
                    <li className='cursor-pointer'>Products</li>
                    <li className='cursor-pointer'>Company</li>
                    <li className='cursor-pointer'>Offices</li>
                    <li className='cursor-pointer'>About</li>
                    <li className='cursor-pointer'>Contact</li>
                </ul>
                <div className='flex gap-5'>
                    <div className='p-3 pb-1 bg-[#fbfbfb] border border-solid border-[#ebebeb]'>
                        <img src={Instagram_icon} alt="" />
                    </div>
                    <div className='p-3 pb-1 bg-[#fbfbfb] border border-solid border-[#ebebeb]'>
                        <img src={Pintester_icon} alt="" />
                    </div>
                    <div className='p-3 pb-1 bg-[#fbfbfb] border border-solid border-[#ebebeb]'>
                        <img src={Whatsapp_icon} alt="" />
                    </div>
                </div>
                <hr className='h-1 w-[80%] bg-black mb-10' />
            </div>
        </>
    )
}

export default Footer;