import PropTypes from "prop-types";

function Travelogue({ title }) {
  return (
    <div className="travelogue">
      <h1>{title}</h1>
      <p>test</p>
    </div>
  );
}

Travelogue.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Travelogue;
