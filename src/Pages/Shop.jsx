import Landing from "../Components/Landing/Landing";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Offers from "../Components/Offers/Offers";
import Populer from "../Components/Populer/Populer";

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
