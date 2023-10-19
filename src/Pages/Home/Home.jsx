import { useLoaderData } from "react-router-dom";
import Banner from "../../Component/Banner/Banner";
import BrandCard from "../../Component/BrandCard/BrandCard";
import offer from "../../assets/images/offer.jpg";
import laptop from "../../assets/images/tamarind-desktop.jpg";

const Home = () => {
  const brands = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <div className="py-5">
        <h1 className="text-center text-4xl font-bold py-6">
          Offer Of The Sesson
        </h1>
        <img src={offer} alt="" />
      </div>
      <div className="mt-16">
        <h1 className="text-3xl font-bold text-center">Brand Name</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto py-10">
          {brands.map((brand) => (
            <BrandCard key={brand.id} brand={brand}></BrandCard>
          ))}
        </div>
      </div>

      <div>
        <img src={laptop} alt="" />
      </div>
    </div>
  );
};

export default Home;
