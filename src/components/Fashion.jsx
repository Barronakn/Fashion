import { NavLink } from "react-router-dom";

const Fashion = () => {
  const datas = [
    { nom: "Man T -shirt", price: 30, img: "/src/assets/tshirt-img.png" },
    { nom: "Man -shirt", price: 30, img: "/src/assets/dress-shirt-img.png" },
    { nom: "Woman Scart", price: 30, img: "/src/assets/women-clothes-img.png" },
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
              <div className="flex justify-center items-center my-7">
                <img src={data.img} alt="" />
              </div>
              <div className="links flex justify-between">
                <NavLink
                  onClick={() => onAddToCart({ name, price, quantity: 1 })}
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
