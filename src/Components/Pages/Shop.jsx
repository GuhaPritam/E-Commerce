import Landing from "../Landing/Landing";
import NewCollections from "../NewCollections/NewCollections";
import Offers from "../Offers/Offers";
import Populer from "../Populer/Populer";

const Shop = () => {
    return (
        <>
            <div>
                <Landing />
                <Populer /> 
                <Offers />
                <NewCollections />
            </div>
        </>
    )
}

export default Shop;
