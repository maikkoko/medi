import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Select.css";

export interface IOption {
  value: string;
  display: string;
}

interface SelectProps {
  icon: any;
  options: Array<IOption>;
  className?: string;
}

const Select: React.FC<SelectProps> = ({ icon, options, className = "" }) => {
  const formatOptions = () => {
    var optionsArray: any = [];

    options.forEach(({ value, display }: IOption) => {
      optionsArray.push(<option value={value}>{display}</option>);
    });

    return optionsArray;
  };

  return (
    <div className={`select-container ${className}`}>
      <div className="select-icon">
        <FontAwesomeIcon icon={icon} color="#DE4C34" />
      </div>
      <select>{formatOptions()}</select>
    </div>
  );
};

export default Select;
