import Logo from './Assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={Logo} alt="Logo" />
        <p>SHOPPER</p>
      </div>
      <ul>
        <li>Shop</li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>
    </div>
  )
}

export default Navbar
