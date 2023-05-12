import PropTypes from "prop-types";

function Travelogue({ title }) {
  return (
    <div className="travelogue">
      <h5>{title.title}</h5>
      <p>{title.name}</p>
    </div>
  );
}

Travelogue.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Travelogue;
