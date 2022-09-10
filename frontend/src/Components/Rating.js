import React from "react";

const Rating = ({ value, text, color }) => {
  return (
    <div className="Rating">
      <span>
        <i style={{ color: color }} className="fa-solid fa-star"></i>
      </span>
      <span>
        <i
          style={{ color: color }}
          className={
            value === 1.5
              ? "fa-solid fa-star-half"
              : value >= 2
              ? "fa-solid fa-star"
              : "fa-regular fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color: color }}
          className={
            value === 2.5
              ? "fa-solid fa-star-half"
              : value >= 3
              ? "fa-solid fa-star"
              : "fa-regular fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color: color }}
          className={
            value === 3.5
              ? "fa-solid fa-star-half"
              : value >= 4
              ? "fa-solid fa-star"
              : "fa-regular fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color: color }}
          className={
            value === 4.5
              ? "fa-solid fa-star-half"
              : value >= 4.5
              ? "fa-solid fa-star"
              : "fa-regular fa-star"
          }
        ></i>
      </span>
      <span>{text && text}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: "orange",
};

export default Rating;

/* If value is smaller than 2 and equal to 1.5, half star, otherwise full star
 */
