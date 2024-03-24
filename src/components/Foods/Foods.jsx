import { Outlet } from "react-router-dom";

import NavberForFoods from "./NavberForFoods";
import { useState } from "react";
import SelectedItemContext from "../../context/context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Foods = () => {
  const [selectedFoods, setSelectedFoods] = useState([]);

  return (
    <div>
      <SelectedItemContext.Provider value={{ selectedFoods, setSelectedFoods }}>
        <NavberForFoods />

          <Outlet />

      </SelectedItemContext.Provider>
      <ToastContainer />
    </div>
  );
};

export default Foods;
