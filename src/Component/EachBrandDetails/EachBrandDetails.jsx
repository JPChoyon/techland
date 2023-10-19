import { useLoaderData, useParams } from "react-router-dom";


const EachBrandDetails = () => {
  const { name, _id } = useParams()
  const details = useLoaderData()
  console.log(details);
  // console.log(details);
  return <div>this is details page of {name}</div>;
};

export default EachBrandDetails;