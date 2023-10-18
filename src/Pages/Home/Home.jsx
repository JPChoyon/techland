import { useLoaderData } from "react-router-dom";
import Banner from "../../Component/Banner/Banner";
import BrandCard from "../../Component/BrandCard/BrandCard";


const Home = () => {
  const brands = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <div className="mt-16">
        <h1 className="text-3xl font-bold text-center">Brand Name</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto py-10">
          {brands.map((brand) => (
            <BrandCard key={brand.id} brand={brand}></BrandCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;