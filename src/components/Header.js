import "../styles/styles.scss";
const Header = (props) => {
  return (
    <div className="header">
      <div className="container">
        <h1 className="header__title">{props.title}</h1>
        <h2 className="header__subtitle">{props.subtitle}</h2>
      </div>
    </div>
  );
};
Header.defaultProps = {
  title: "Just Another To-Do",
  subtitle: "With a little tweak",
};

export default Header;
