import Arrow_icon from '../Assets/breadcrum_arrow.png';
import PropTypes from 'prop-types';

const Breadcrumbs = ({ product }) => {
    return (
        <div className='flex items-center gap-2 text-[#5e5e5e] text-base font-semibold my-10 mx-44 capitalize'>
            HOME <img src={Arrow_icon} alt="" /> SHOP <img src={Arrow_icon} alt="" />
            {product.category} <img src={Arrow_icon} alt="" /> {product.name}
        </div>
    );
}

Breadcrumbs.propTypes = {
    product: PropTypes.shape({
        category: PropTypes.any.isRequired,
        name: PropTypes.any.isRequired,
    }).isRequired,
};

export default Breadcrumbs;

