import Hand_icon from '../Assets/hand_icon.png';
import Arrow_icon from '../Assets/arrow.png';
import Hero_image from '../Assets/hero_image.png';

const Landing = () => {
    return (
        <>
            <div className='h-screen bg-gradient-to-b from-purple-100 via-green-100 to-transparent flex'>
                <div className='flex flex-col flex-1 leading-tight justify-center space-y-5 pl-40'>
                    <h2 className='text-2xl font-semibold text-[#090909]'>NEW ARRIVALS ONLY</h2>
                    <div>
                        <div className='flex items-center gap-20'>
                            <p className="text-6xl font-bold text-[#090909]">new</p>
                            <img src={Hand_icon} className='w-[5rem]' alt="" />
                        </div>
                        <p className="text-6xl font-bold text-[#090909]">collections</p>
                        <p className="text-6xl font-bold text-[#090909]">for everyone</p>
                    </div>
                    <div className='flex gap-4 w-80 h-[4rem] rounded-full mt-8 items-center justify-center text-lg font-medium bg-[#ff4141]'>
                        <div>Latest Collection</div>
                        <img src={Arrow_icon} alt="" />
                    </div>
                </div>
                <div className='flex-1 flex items-center justify-center'>
                    <img className='h-[40rem]' src={Hero_image} alt="" />
                </div>
            </div>
        </>
    )
}

export default Landing;
