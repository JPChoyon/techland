import toast from "react-hot-toast";

const AddProdact = () => {
  const handleAddProdact = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const image = form.image.value;

    const prodact = { name, brand, type, price, description, rating, image };
    console.log(prodact);
    fetch(
      "https://techland-server-jpchoyon-jp-choyon-khans-projects.vercel.app/prodact",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(prodact),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Successfully toasted!");
        }
      });
  };
  return (
    <div>
      <div className="w-3/4 mx-auto">
        <h1 className="text-center text-4xl font-black mb-5">
          Add Your Prodact Here
        </h1>
        <form onSubmit={handleAddProdact} className="mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <div className="w-full mx-auto mb-2">
              <h2 className="text-xl font-semibold">Prodact Name </h2>
              <input
                name="name"
                type="text"
                placeholder="Prodact Name"
                className="input input-bordered w-full "
                required
              />
            </div>
            <div className="w-full mx-auto mb-2">
              <h2 className="text-xl font-semibold">Brand Name </h2>
              <input
                name="brand"
                type="text"
                placeholder="Brand Name"
                className="input input-bordered w-full "
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4 w-full">
            <div className="w-full mx-auto mb-2">
              <h2 className="text-xl font-semibold">Prodact Type </h2>
              <input
                name="type"
                type="text"
                placeholder="Prodact Type"
                className="input input-bordered w-full "
                required
              />
            </div>
            <div className="w-full mx-auto mb-2">
              <h2 className="text-xl font-semibold">Price </h2>
              <input
                name="price"
                type="text"
                placeholder="Price"
                className="input input-bordered w-full "
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4 w-full">
            <div className="w-full mx-auto mb-2">
              <h2 className="text-xl font-semibold">Short Description</h2>
              <input
                name="description"
                type="text"
                placeholder="Short description"
                className="input input-bordered w-full "
                required
              />
            </div>
            <div className="w-full mx-auto mb-2">
              <h2 className="text-xl font-semibold">Rating </h2>
              <input
                name="rating"
                type="text"
                placeholder="Rating"
                className="input input-bordered w-full "
                required
              />
            </div>
          </div>

          <div className="w-full mx-auto mb-2">
            <h2 className="text-xl font-semibold">Prodact Image </h2>
            <input
              name="image"
              type="text"
              placeholder="Prodact image link"
              className="input input-bordered w-full mx-auto"
              required
            />
          </div>
          <button className="btn btn-block bg-red-500 text-white hover:text-black">
            Submit Prodact
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProdact;
