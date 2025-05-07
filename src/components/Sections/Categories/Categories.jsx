import React from "react";
import { CiCircleInfo } from "react-icons/ci";

function Categories() {
  const categoriesData = [
    { name: "Tbol", age: "5 a 8 anos" },
    { name: "Pré-infantil", age: "7 a 10 anos" },
    { name: "Infantil", age: "11 e 12 anos" },
    { name: "Pré-júnior", age: "13 e 14 anos" },
    { name: "Júnior", age: "15 e 16 anos" },
    { name: "Juvenil", age: "17 e 18 anos" },
    { name: "Softbol", age: "8 a 13 anos" },
    { name: "Veteranos", age: "50+" },
  ];

  return (
    <div className="categories">
      <div className="categories__left">
        <h2 className="categories__main-title">Categorias</h2>
        <p className="categories__info">
          <CiCircleInfo /> Categorias de base que temos:
        </p>
        <table className="categories__table">
          <thead>
            <tr>
              <th>Categoria</th>
              <th>Idade</th>
            </tr>
          </thead>
          <tbody>
            {categoriesData.map((category, index) => (
              <tr key={index}>
                <td>{category.name}</td>
                <td>{category.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="categories__right">
        <div className="categories__grid">
          <img
            src="https://images.unsplash.com/photo-1578432014316-48b448d79d57?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw0fHxiYXNlYmFsbHxlbnwwfHx8fDE3MDczNDE4NzV8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=688&h=449"
            alt="Baseball 1"
            className="categories__image"
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1578432014316-48b448d79d57?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw0fHxiYXNlYmFsbHxlbnwwfHx8fDE3MDczNDE4NzV8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=688&h=449"
            alt="Baseball 2"
            className="categories__image"
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1578432014316-48b448d79d57?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw0fHxiYXNlYmFsbHxlbnwwfHx8fDE3MDczNDE4NzV8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=688&h=449"
            alt="Baseball 3"
            className="categories__image"
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1578432014316-48b448d79d57?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw0fHxiYXNlYmFsbHxlbnwwfHx8fDE3MDczNDE4NzV8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=688&h=449"
            alt="Baseball 4"
            className="categories__image"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default Categories;
