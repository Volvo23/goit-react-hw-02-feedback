import React from "react";
import PropTypes from "prop-types";
import s from "./Info.module.css";

const Info = ({ good, neutral, bad, total, percentage }) => {
  return (
    <>
      <p className={s.info}>Good: {good}</p>
      <p className={s.info}>Neutral: {neutral}</p>
      <p className={s.info}>Bad: {bad}</p>
      <p className={s.info}>Total:{total} </p>
      <p className={s.info}>Positive Feedback:{percentage}% </p>
    </>
  );
};

Info.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  percentage: PropTypes.string,
};
export default Info;
