import { Link } from "react-router-dom";

const Navbar = () => {

    // const navLinks = (
    //     <>
    //       <li className={ `${theme == "dark" ? "text-slate-200" : "text-[#162028]"}`} >
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li className={ `${theme == "dark" ? "text-slate-200" : "text-[#162028]"}`}>
    //         <Link to="/AddProducts">Add Product</Link>
    //       </li>
    //       <li className={ `${theme == "dark" ? "text-slate-200" : "text-[#162028]"}`}>
    //         <Link to="/MyCart">My Cart</Link>
    //       </li>
    //     </>
    //   );
    const navLinks = (
        <>
          <li className={ `text-[#162028]`} >
            <Link to="/">Home</Link>
          </li>
          <li className={ `text-[#162028]`}>
            <Link to="/AddProducts">About</Link>
          </li>
          <li className={ `text-[#162028]`}>
            <Link to="/MyCart">Services</Link>
          </li>
          <li className={ `text-[#162028]`}>
            <Link to="/MyCart">Blog</Link>
          </li>
          <li className={ `text-[#162028]`}>
            <Link to="/MyCart">Contact</Link>
          </li>
        </>
      );


    return (
<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <div>
        <img className=" h-12" src="/src/assets/logo.svg" alt="" />
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
  <button className="btn btn-ghost btn-circle">
        <img className=" h-5" src="https://i.ibb.co/0ctz5W0/shopping-cart.png" alt="" />
    </button>
  
  <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>

    <a className="btn btn-outline  text-[#FF3811]">Appointment</a>
  </div>
</div>
    );
};

export default Navbar;