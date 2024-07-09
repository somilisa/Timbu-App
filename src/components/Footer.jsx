import "./Footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <h1>
          <span>SPORT</span> ESSENTIALS
        </h1>
        <input
          type="text"
          placeholder="Subscribe To Newsletter"
          className="search-bar"
        />
        <p className="copyright">copyright@blessingtobi</p>
      </div>
    </footer>
  );
};

export default Footer;
