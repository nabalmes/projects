import { FaSlackHash } from "react-icons/fa";

function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
      <div>
        <FaSlackHash className="text-xl" />
        <a>Copyrights &copy; {footerYear} ALL RIGHTS RESERVED</a>
      </div>
    </footer>
  );
}

export default Footer;
