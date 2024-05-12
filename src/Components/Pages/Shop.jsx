import Landing from "../Landing/Landing";
import NewCollections from "../NewCollections/NewCollections";
import NewsLetter from "../NewsLetter/NewsLetter";
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
                <NewsLetter />
            </div>
        </>
    )
}

export default Shop;
