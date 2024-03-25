import { Link, useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";

const Details = () => {
  const id = parseInt(useParams().id);
  const data = useLoaderData();
  const orgFood = data.categories.find(
    (item) => parseInt(item.idCategory) === id
  );
  const { strCategoryThumb, strCategoryDescription, strCategory } = orgFood;
  console.log(orgFood);
  console.log(typeof id);
  return (
    <div>
      <div className="hero min-h-screen container m-auto bg-transparent">
        <div className="flex w-[100%] flex-col lg:flex-row items-center">
          <div className="lg:w-[40%] w-[90%] lg:p-5 m-auto">
            <img
              src={strCategoryThumb}
              className=" w-full  rounded-lg "
            />
          </div>
          <div className=" p-6 lg:pl-10 lg:w-[60%] w-[90%] m-auto">
            <h1 className="  lg:ml-5 text-[#533831] text-4xl md:text-7xl font-bold lobster  lg:py-5 ">
              {strCategory}
            </h1>
            <p className=" text-base mt-5 lg:p-6 text-[#533831] montserrat1">{strCategoryDescription}</p>
            <Link to={-1}>
              <button className="btn mt-6 text-white bg-[#533831] hover:bg-[#533831a1]">Go Back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
