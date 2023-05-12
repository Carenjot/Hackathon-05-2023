import PropTypes from "prop-types";

function InsideTravelogue({ title, number }) {
  return (
    <section className="inside-travelogue">
      <section className="page">
        <ul className="contentPage">
          {title[number - 1].protips.map(
            (tips) => tips !== "" && <li key={tips}>{tips}</li>
          )}
        </ul>
      </section>
    </section>
  );
}

InsideTravelogue.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

export default InsideTravelogue;
