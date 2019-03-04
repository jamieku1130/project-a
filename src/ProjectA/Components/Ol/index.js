import React from "react";

const Ol = ({ orderList }) => (
  <ol style={{ marginLeft: "30px" }}>
    {orderList.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ol>
);

export default Ol;
