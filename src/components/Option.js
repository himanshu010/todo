import "../styles/styles.scss";

const Option = (props) => {
  return (
    <div className="option">
      <p className="option__text">
        {props.count}.{props.option}
      </p>

      <button
        className="button button--link"
        onClick={(e) => {
          props.handleRemove(props.option);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default Option;
