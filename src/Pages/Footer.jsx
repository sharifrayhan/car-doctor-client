

const Footer = () => {
    return (
<footer className="footer p-10 bg-[#151515] text-base-content">
  <aside>
  <img className=" h-20" src="/src/assets/logo.svg" alt="" />
    <p className="text-white">Car Doctor<br/>Providing services since 1992</p>
  </aside> 
  <nav className="text-white"> 
    <header className="footer-title text-white">Services</header> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav className="text-white">
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav className="text-white">
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    );
};

export default Footer;