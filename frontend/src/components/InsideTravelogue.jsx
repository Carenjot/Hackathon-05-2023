import PropTypes from "prop-types";

function InsideTravelogue({ title }) {
  return (
    <section className="inside-travelogue">
      <section className="page">
        <ul className="contentPage">
          <li>{title}</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
        </ul>
      </section>
    </section>
  );
}

InsideTravelogue.propTypes = {
  title: PropTypes.string.isRequired,
};

export default InsideTravelogue;
