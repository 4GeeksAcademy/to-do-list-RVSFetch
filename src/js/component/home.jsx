import React, { useState } from "react";
import logoRvs from "../../img/logorvs.png"
import Lista from "./listadetareas";

//create your first component
const Home = () => {

  return (
    <>
      <div className="contenedor">
        <img src={logoRvs} alt="logo" />
        <div className="titulo">
          <h1>To-do list 📚</h1>
          <div className="tareas">
            <Lista />
          </div>
        </div>



      </div>

    </>
  );
};

export default Home;