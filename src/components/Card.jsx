import React from "react";
export const Card = ({ title, imgUrl, children }) => {
  return (
    <div className="card-container">
      {imgUrl && <img src={imgUrl} alt="feture icon" />}
      {title && <h1>{title}</h1>}
      {children}
    </div>
  );
};
