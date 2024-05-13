function LoginSignup() {
    return (
        <>
            <div className='w-full h-[43rem] bg-[#fce3fe] pt-20'>
                <div className='w-[37rem] h-fit bg-white mx-auto py-5 px-10 rounded-3xl'>
                    <h1 className='my-5 mx-0 text-2xl font-bold '>Sign Up</h1>
                    <div className='flex flex-col gap-7 mt-8'>
                        <input className='border border-gray-300 rounded-lg px-3 py-4' type="text" placeholder='Your Name' />
                        <input className='border border-gray-300 rounded-lg px-3 py-4' type="email" placeholder='Email Address' />
                        <input className='border border-gray-300 rounded-lg px-3 py-4' type="password" placeholder='Password' />
                    </div>
                    <button className='bg-[#ff4141] text-white px-4 py-2 rounded mt-4 w-full'>Continue</button>
                    <p className='mt-5 text-[#5c5c5c] text-lg font-medium'>Already have an account? <span className="text-[#ff4141]">Login here</span></p>
                    <div className='flex items-center mt-4 gap-5 text-[#5c5c5c] text-lg font-medium'>
                        <input className='mr-2' type="checkbox" name="" id="" />
                        <p>By continuing, I agree to the terms of use & privacy policy</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginSignup;
