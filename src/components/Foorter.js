import { pageLinks,socialLinks } from "../data";
const Foorter = () => {
  return (
    <footer className="section footer">
      {/* Footer links */}
      
      <ul className="footer-links">
      {pageLinks.map((link)=>{
            return(
              <li>
              <a href={link.href} className="footer-link">{link.text}</a>
            </li>
            )
          })

        }
      </ul>

      {/* Footer social media icons */}
      <ul className="footer-icons">
        {socialLinks.map((link)=>{
          return (
            <li>
          <a href={link.href} target="_blank" className="footer-icon">
            <i className={link.icon}></i>
          </a>
        </li>
          )
        })}
      </ul>

      {/* Copyright information */}
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};
export default Foorter