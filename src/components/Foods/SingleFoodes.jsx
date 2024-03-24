import Food from "./Food";
import { useLoaderData } from "react-router-dom";

const SingleFoodes = () => {
    const data = useLoaderData();
    const categories = data.categories;
    return (
        <div>
              <div className="text-center underline ml-5 text-[#533831] text-4xl md:text-7xl font-bold lobster mb-5  py-5">
        Available Foods
      </div>
      
        <div className=" container m-auto">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            {categories.map((categorie, index) => (
              <Food key={index} categorie={categorie} />
            ))}
            
          </div>
        </div>
        </div>
    );
};

export default SingleFoodes;