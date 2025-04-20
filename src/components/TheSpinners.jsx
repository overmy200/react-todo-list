import React from "react";
import { BeatLoader } from "react-spinners";
const TheSpinners = ({loading}) => {
  return (
    <BeatLoader
      color="#3b82f6"
      size={20}
      cssOverride={{ margin: "48px", textAlign: "center" }}
      loading={loading}
    />
  );
};

export default TheSpinners;
