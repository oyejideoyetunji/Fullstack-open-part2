import React from "react";

const StatusDisplay = ({ statusData }) => {
  return statusData === null ? null : (
    <p className={statusData.type === "error" ? "error-blck" : "success-blck"}>
      <em>{statusData.text}</em>
    </p>
  );
};

export default StatusDisplay;
