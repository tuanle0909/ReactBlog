import cls from "classnames";
import { ReactDOM, ReactElement, useState } from "react";
import IconSearch from "../IconSearch";
import styles from "./input.module.scss";

type Props = {
  label?: string;
  type: string;
  className?: string;
  icon?: ReactElement;
  messageError?: string;
  [key: string]: any;
};
function Input({ label, type = "text", className, icon = <IconSearch />, messageError, ...restProps }: Props) {
  const [localType, setLocalType] = useState(type);

  function handleToggleShowPwd() {
    if (localType === "password") {
      setLocalType("text");
    } else if (localType === "text") {
      setLocalType("password");
    }
  }
  const classesIconPwd = cls(styles["toggle-password"], {
    "ion-eye": localType === "password",
    "ion-eye-disabled": localType === "text",
  });
  const classesSearch = cls(styles["input-search__input"], className);

  if (type === "search") {
    return (
      <div className={styles["input-search"]}>
        {icon}
        <input className={classesSearch} type={localType} {...restProps} />
      </div>
    );
  }
  const styleError = messageError ? { border: "1px solid #ee2c5a" } : {};

  return (
    <div className={styles["form-control"]}>
      {label && <label>{label}</label>}
      {type === "password" && <i className={classesIconPwd} onClick={handleToggleShowPwd}></i>}
      <input type={localType} className={className} {...restProps} style={styleError} />
      <span style={{ color: "#ee2c5a", fontSize: 14, position: "absolute" }}>{messageError}</span>
    </div>
  );
}

export default Input;
