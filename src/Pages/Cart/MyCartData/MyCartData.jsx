import yelloStar from "../../../assets/images/star-yellow.png";
import grayStar from "../../../assets/images/star-grey.png";
import redStar from "../../../assets/images/star-red.png";
import Rating from "react-rating";
import Swal from "sweetalert2";

const MyCartData = ({ setCartProdact, cartProdact }) => {
  const [{ _id, name, brand, price, description, rating, image }] = cartProdact;
  console.log(cartProdact);
  console.log(_id);
  console.log(cartProdact);
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://techland-server.vercel.app/deletecart/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remain = cartProdact.filter((carts) => carts._id != id);
              setCartProdact(remain);
            }
          });
      }
    });
  };
  return (
    <div key={_id}>
      <div className="w-full flex mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <a href="#">
          <img className="p-8 rounded-t-lg" src={image} alt="product image" />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
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
              {rating}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              {price}$
            </span>

            <button
              onClick={() => handleDelete(_id)}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCartData;
