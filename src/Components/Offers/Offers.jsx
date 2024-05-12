import Exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className='ofersleft'>
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCT</p>
            <button>Check Now</button>
        </div>
        <div className='offerright'>
            <img src={Exclusive_image} alt="" />
        </div>
    </div>
  )
}

export default Offers;
