import React from "react";

import "./toogle.scss";

interface ToggleProps {
  keyEle: string;
  onChange: any;
  value: boolean;
}

const Toggle: React.FC<ToggleProps> = ({ keyEle, onChange, value }) => {
  return (
    <div className="cbx-toggle">
      <input
        className="styled-checkbox"
        id={keyEle}
        type="checkbox"
        value="value1"
        onChange={onChange}
        checked={value}
      />
      <label htmlFor={keyEle} />
    </div>
  );
};

export default Toggle;
