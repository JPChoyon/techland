import Rating from "react-rating";
import { GiShoppingCart } from "react-icons/gi";
import { useLoaderData } from "react-router-dom";
import yelloStar from "../../assets/images/star-yellow.png";
import grayStar from "../../assets/images/star-grey.png";
import redStar from "../../assets/images/star-red.png";

const EachBrandDetails = () => {
  const details = useLoaderData();
  const { _id, name, brand, price, description, rating, image } = details;

  return (
    <div>
      <div className="w-full">
        <div key={_id}>
          <div className="w-full mx-auto  bg-white border border-gray-200 rounded-lg shadow">
            <a href="#">
              <img
                className="p-8 rounded-t-lg w-full"
                src={image}
                alt="product image"
              />
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                  {name}
                </h5>
              </a>
              <div className="flex items-center mt-2.5 mb-5">
                rating :
                <span>
                  <Rating
                    placeholderRating={parseFloat(rating)}
                    emptySymbol={<img src={grayStar} className="icon" />}
                    placeholderSymbol={<img src={redStar} className="icon" />}
                    fullSymbol={<img src={yelloStar} className="icon" />}
                  />
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                  {parseFloat(rating)}
                </span>
              </div>
              <p>{description}</p>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  {price}$
                </span>
                {/* <Link to={`/brandDetails/${_id}`}> */}
                <button className=" flex items-center gap-4 px-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Add To Cart<GiShoppingCart></GiShoppingCart>
                </button>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachBrandDetails;
