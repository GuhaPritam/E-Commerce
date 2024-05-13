import Arrow_icon from '../Assets/breadcrum_arrow.png';
import PropTypes from 'prop-types';

const Breadcrumbs = ({ product }) => {
    return (
        <div className='breadcrumb'>
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

