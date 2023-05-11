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
      <section>
        <button type="button" className="button-page">
          Page précédente
        </button>
        <button type="button" className="button-page">
          Page suivante
        </button>
      </section>
    </section>
  );
}

InsideTravelogue.propTypes = {
  title: PropTypes.string.isRequired,
};

export default InsideTravelogue;
