import { FaFacebook, FaInstagramSquare, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#ECF5FF]">
        <footer className="footer text-base-content p-10 Montserrat">
      <aside>
        <img src="/logo.png" alt="logo"  className="w-[80px]"/>
        <p>
        Design amazing digital experiences <br /> that create more happy in the world.
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Product</h6>
        <a className="link link-hover">Overview</a>
        <a className="link link-hover">Features</a>
        <a className="link link-hover">Solutions</a>
        <a className="link link-hover">Tutorials</a>
        <a className="link link-hover">Pricing</a>
        <a className="link link-hover">Releases</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Careers</a>
        <a className="link link-hover">Press</a>
        <a className="link link-hover">News</a>
        <a className="link link-hover">Media kit</a>
        <a className="link link-hover">Contact</a>
      </nav>
      <nav>
        <h6 className="footer-title">Resources</h6>
        <a className="link link-hover">Blog</a>
        <a className="link link-hover">Newsletter</a>
        <a className="link link-hover">Events</a>
        <a className="link link-hover">Help centre</a>
        <a className="link link-hover">Tutorials</a>
        <a className="link link-hover">Support</a>
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
        <a className="link link-hover">Twitter</a>
        <a className="link link-hover">LinkedIn</a>
        <a className="link link-hover">Facebook</a>
        <a className="link link-hover">GitHub</a>
        <a className="link link-hover">AngelList</a>
        <a className="link link-hover">Dribbble</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms</a>
        <a className="link link-hover">Privacy</a>
        <a className="link link-hover">Cookies</a>
        <a className="link link-hover">Licenses</a>
        <a className="link link-hover">Settings</a>
        <a className="link link-hover">Contact</a>
      </nav>
        </footer>
        <hr className="md:mx-24 mx-8 bg-black"/>
        <footer className="footer text-base-content p-10 Montserrat">
        <aside className="grid-flow-col items-center">
            <p>© {new Date().getFullYear()} Heritage- Nest . All rights reserved.</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end  text-[#0059B1] text-2xl">
            <a><FaTwitter/></a>
            <a><FaLinkedin /></a>
            <a><FaFacebook /></a>
            <a><FaInstagramSquare /></a>
        </nav>
        </footer>
    </div>
  );
};

export default Footer;
