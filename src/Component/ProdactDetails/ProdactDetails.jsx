import Rating from "react-rating";
import { Link, useLoaderData, useParams } from "react-router-dom";
import yelloStar from "../../assets/images/star-yellow.png";
import grayStar from "../../assets/images/star-grey.png";
import redStar from "../../assets/images/star-red.png";

const ProdactDetails = () => {
  const { name } = useParams();
  const prodacts = useLoaderData();

  if (prodacts.length > 0) {
    return (
      <div>
        <h1 className="text-4xl py-4 font-bold text-center">
          {name}'s prodact
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {prodacts.map((prodact) => (
            <div key={prodact._id}>
              <div className="w-full mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                <a href="#">
                  <img
                    className="p-8 rounded-t-lg"
                    src={prodact.image}
                    alt="product image"
                  />
                </a>
                <div className="px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
                      {prodact.name}
                    </h5>
                  </a>
                  <div className="flex items-center mt-2.5 mb-5">
                    rating :
                    <span>
                      <Rating
                        placeholderRating={parseFloat(prodact.rating)}
                        emptySymbol={<img src={grayStar} className="icon" />}
                        placeholderSymbol={
                          <img src={redStar} className="icon" />
                        }
                        fullSymbol={<img src={yelloStar} className="icon" />}
                      />
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                      {prodact.rating}
                    </span>
                  </div>
                  <p>{prodact.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      {prodact.price}$
                    </span>
                    <Link to={`/brandDetails/${prodact._id}`}>
                      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Details
                      </button>
                    </Link>
                    <Link to={`/updateprodact/${prodact._id}`}>
                      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Update
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* slider  */}
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full  mx-auto relative">
            <img
              src="https://i.imgur.com/OUQNAWX.jpg"
              className="w-full h-52 mx-auto"
            />
            <div className="absolute text-white">
              <h2 className="text-xl font-bold">Pixel 8 Pro</h2>
              <p>Price : 42000 $</p>
              <p>This phone is manufactured by google</p>
            </div>
          </div>
          <div id="item2" className="carousel-item w-full relative">
            <img
              src="https://i.imgur.com/ay2gOUs.jpg"
              className="w-full h-52 mx-auto"
            />
            <div className="absolute text-white">
              <h2 className="text-xl font-bold">Samsung z flip phone</h2>
              <p>Price : 92000 $</p>
              <p>This phone is manufactured by samsung</p>
            </div>
          </div>
          <div id="item3" className="carousel-item w-full relative">
            <img
              src="https://i.imgur.com/OUQNAWX.jpg"
              className="w-full h-52 mx-auto"
            />
            <div className="absolute text-white">
              <h2 className="text-xl font-bold">iphone 13 Pro</h2>
              <p>Price : 120000 $</p>
              <p>This phone is manufactured by apple</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
        </div>
      </div>
    );
  } 
  else {
    return (
      <div>
        <div >
          <img
            className="w-6/4 h-72 mx-auto"
            src="https://i.imgur.com/sHZ18Zw.png"
            alt=""
          />
        </div>
      </div>
    );
  }
};

export default ProdactDetails;
