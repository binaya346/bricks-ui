import React from "react";
import "./index.scss";
import { ButtonProps } from "../../Interfaces";

export const Button = (props: ButtonProps) => {
  return <button className={props.type}>{props.children}</button>;
};
