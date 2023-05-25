import { NavLink } from "react-router-dom";

const Jewellery = () => {
  const datas = [
    {
      nom: "Jumkas",
      price: 100,
      img: "/src/assets/jhumka-img.png",
      alt: "jhumka-img",
    },
    {
      nom: "Necklaces",
      price: 100,
      img: "/src/assets/neklesh-img.png",
      alt: "neklesh-img",
    },
    {
      nom: "Kangans",
      price: 100,
      img: "/src/assets/kangan-img.png",
      alt: "kangan-img",
    },
  ];
  return (
    <div className="my-20">
      <h1 className="text-center text-5xl my-8 font-bold pt-20">
        Jewellery Accessories
      </h1>
      <section className="jewellery flex justify-around items-center">
        {datas.map((data, index) => {
          return (
            <div
              key={index}
              className="jewelleryCard p-4 rounded-sm shadow-2xl h text-center"
            >
              <div>
                <h3 className="font-bold text-xl"> {data.nom} </h3>
                <p className="text-orange-500">
                  Start Price{" "}
                  <span className="text-black">{"$ " + data.price}</span>
                </p>
              </div>
              <div className="flex justify-center items-center my-7">
                <img className="w-80 h-80" src={data.img} alt={alt} />
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

export default Jewellery;
