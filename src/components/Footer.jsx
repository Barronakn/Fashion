import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 flex flex-col justify-center items-center gap-16 text-white py-4">
      <div className="logo text-center text-4xl font-bold pt-16">
        <NavLink className="text-white" to="/">
          Shoping
        </NavLink>
      </div>
      <form className="email border-b-2 w-96 flex justify-between pb-2 text-xl">
        <input className="bgc-none" type="email" placeholder="Email" />
        <input
          className="uppercase text-base cursor-pointer text-orange-500 hover:text-white"
          type="submit"
          value="Subscrire"
        />
      </form>
      <div className="contact">
        <p>
          Help Line Number :{" "}
          <NavLink className="text-white hover:text-orange-500" to="#">
            +1 1800 1200 1200
          </NavLink>
        </p>
      </div>
      <div className="copyright">
        <p>© 2023 All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
