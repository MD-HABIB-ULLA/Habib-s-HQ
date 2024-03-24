import { useContext } from "react";
import SelectedItemContext from "../../context/context";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { addToCart } from "../../util/localStorage";


const Food = ({ categorie }) => {

  
  const { strCategoryThumb, strCategory, idCategory } = categorie;

  const { selectedFoods, setSelectedFoods } = useContext(SelectedItemContext);
  const notify = () => toast("You already selected this item");
  const handleclick = () => {
    if (selectedFoods.includes(categorie)) {
      notify();
    } else {
      setSelectedFoods([...selectedFoods, categorie]);
      addToCart(idCategory)
    }
  };


  return (
    <div>
      <div className="card  bg-transparent shadow-xl">
        <figure className="pt-4  px-4">
          <img src={strCategoryThumb} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className=" flex justify-center lobster text-[#533831]">
          <h2 className="card-title">{strCategory}</h2>
        </div>
        <div className=" flex justify-center flex-row items-center text-center py-7 gap-5">
          <Link to={`details/${idCategory}`}>
            <button  className="btn text-white px-7 bg-[#533831] hover:bg-[#533831a1]">
              Details
            </button>
          </Link>
          <button
            onClick={() => handleclick()}
            className="btn text-white px-7 bg-[#533831] hover:bg-[#533831a1]"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Food;
