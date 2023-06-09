import { NavLink } from "react-router-dom";
import img1 from "/src/assets/laptop-img.png";
import img2 from "/src/assets/mobile-img.png";
import img3 from "/src/assets/computer-img.png";

const Electronic = () => {
  const datas = [
    {
      nom: "Laptop",
      price: 100,
      img: img1,
      alt: "laptop-img",
    },
    {
      nom: "Mobile",
      price: 100,
      img: img2,
      alt: "mobile-img",
    },
    {
      nom: "Computers",
      price: 100,
      img: img3,
      alt: "computer-img",
    },
  ];
  return (
    <div className="my-20">
      <h1 className="text-center text-5xl my-8 font-bold pt-20">Electronic</h1>
      <section className="electronic flex justify-around items-center">
        {datas.map((data, index) => {
          return (
            <div
              key={index}
              className="electronicCard p-4 rounded-sm shadow-2xl w-80 h text-center"
            >
              <div>
                <h3 className="font-bold text-xl"> {data.nom} </h3>
                <p className="text-orange-500">
                  Start Price{" "}
                  <span className="text-black">{"$ " + data.price}</span>
                </p>
              </div>
              <div className="flex justify-center items-center my-6">
                <img
                  className="w-56 h-60"
                  src={data.img}
                  alt={data.alt}
                  loading="lazy"
                />
              </div>
              <div className="links flex justify-between">
                <NavLink
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

export default Electronic;
