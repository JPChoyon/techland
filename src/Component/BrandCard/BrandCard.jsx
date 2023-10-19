const BrandCard = ({ brand }) => {
  const { name, image } = brand;

  const handleDetails = (name) => {
    console.log(name);
  }
  return (
    <div className="card bg-base-100 shadow-xl mt-2">
      <figure>
        <img className="h-48" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>

        <div className="card-actions justify-center">
          <button onClick={()=>handleDetails(name)} className="btn btn-block btn-primary">
            Show All Prodact
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
