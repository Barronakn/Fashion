import { NavLink } from "react-router-dom";
import img1 from "/src/assets/tshirt-img.png";
import img2 from "/src/assets/dress-shirt-img.png";
import img3 from "/src/assets/women-clothes-img.png";

const Fashion = () => {
  const datas = [
    {
      nom: "Man T -shirt",
      price: 30,
      img: img1,
      alt: "tshirt-img",
    },
    {
      nom: "Man -shirt",
      price: 30,
      img: img2,
      alt: "dress-shirt-img",
    },
    {
      nom: "Woman Scart",
      price: 30,
      img: img3,
      alt: "women-clothes-img",
    },
  ];
  return (
    <div className="my-20">
      <h1 className="text-center text-5xl my-8 font-bold">
        Man & Woman Fashion
      </h1>
      <section className="fashion flex justify-around items-center">
        {datas.map((data, index) => {
          return (
            <div
              key={index}
              className="fashionCard p-4 rounded-sm shadow-2xl w-80 h text-center"
            >
              <div>
                <h3 className="font-bold text-xl"> {data.nom} </h3>
                <p className="text-orange-500">
                  Price <span className="text-black">{"$ " + data.price}</span>
                </p>
              </div>
              <div className="flex justify-center items-center mt-7 mb-2">
                <img
                  className="w-64 h-96"
                  src={data.img}
                  alt={data.alt}
                  loading="lazy"
                />
              </div>
              <div className="links flex justify-between">
                <NavLink
                  onClick={() => onAddToCart({ nom, price, quantity: 1 })}
                  className="text-orange-500 font-bold hover:text-black"
                  to="#"
                >
                  Buy now
                </NavLink>
                <NavLink className="text-black hover:text-orange-500" to="#">
                  See more
                </NavLink>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Fashion;
