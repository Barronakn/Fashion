import { NavLink } from "react-router-dom";
import { useState } from "react";
import toggleIcon from "../assets/toggle-icon.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import croix from "../assets/Croix_small.svg";

const Nav = () => {
  const [visible, setVisible] = useState(false);
  const [visibleSelect, setVisibleSelect] = useState(false);

  return (
    <div className="navigation">
      <div className="bg-clip h-14"></div>
      <div className="logo text-center text-4xl font-bold py-6">
        <NavLink className="text-white" to="/">
          Shoping
        </NavLink>
      </div>
      <section className="flex justify-around mx-4">
        <div>
          <img
            className="toggle w-10 h-7 cursor-pointer"
            onClick={() => {
              setVisible(!visible);
            }}
            src={toggleIcon}
            alt="toggle-icon"
          />
          {visible && (
            <nav className="sidebar fixed top-0 left-0 h-full pt-32 bg-black text-xl z-50 text-white">
              <img
                onClick={() => setVisible(false)}
                className="absolute cursor-pointer right-5 top-8 w-8 h-8"
                src={croix}
                alt="croix-icon"
              />
              <ul className="flex flex-col gap-6 px-16">
                <li className="hover:text-orange-500">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="hover:text-orange-500">
                  <NavLink to="/fashion">Fashion</NavLink>
                </li>
                <li className="hover:text-orange-500">
                  <NavLink to="/electronic">Electronic</NavLink>
                </li>
                <li className="hover:text-orange-500">
                  <NavLink to="/jewellery">Jewellery</NavLink>
                </li>
              </ul>
            </nav>
          )}
        </div>
        <div
          className="categories cursor-pointer relative"
          onClick={() => {
            setVisibleSelect(!visibleSelect);
          }}
        >
          <p className="bg-black rounded-md p-2 text-white">All Categories</p>
          {visibleSelect && (
            <ul className="bg-white p-1 rounded-md absolute z-50 w-44">
              <li className="p-2 mrounded-sm hover:bg-teal-100">Action</li>
              <li className="p-2 rounded-sm hover:bg-teal-100">
                Another action
              </li>
              <li className="p-2 rounded-sm hover:bg-teal-100">
                Something else here
              </li>
            </ul>
          )}
        </div>
        <div>
          <input
            className="search w-96 rounded-md pl-4 py-2"
            type="search"
            placeholder="Search this blog"
          />
        </div>
        <div className="cart">
          <NavLink className=" text-white text-xl font-bold" to="/cart">
            Cart
          </NavLink>
        </div>
      </section>
      <header className="mx-32 mt-20">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="py-20 text-center">
            <h1 className="text-5xl text-white uppercase font-bold mb-16">
              Get start your favriot Fashion
            </h1>
            <NavLink
              className="uppercase bg-gray-800 text-white text-lg font-bold rounded-md py-3 px-8 hover:bg-orange-500"
              to="#"
            >
              Buy now
            </NavLink>
          </SwiperSlide>
          <SwiperSlide className="py-20 text-center">
            <h1 className="text-5xl text-white uppercase font-bold mb-16">
              Get start your favriot Jewellery
            </h1>
            <NavLink
              className="uppercase bg-gray-800 text-white text-lg font-bold rounded-md py-3 px-8 hover:bg-orange-500"
              to="#"
            >
              Buy now
            </NavLink>
          </SwiperSlide>
          <SwiperSlide className="py-20 text-center">
            <h1 className="text-5xl text-white uppercase font-bold mb-16">
              Get start your favriot Electronic
            </h1>
            <NavLink
              className="uppercase bg-gray-800 text-white text-lg font-bold rounded-md py-3 px-8 hover:bg-orange-500"
              to="#"
            >
              Buy now
            </NavLink>
          </SwiperSlide>
        </Swiper>
      </header>
    </div>
  );
};

export default Nav;
