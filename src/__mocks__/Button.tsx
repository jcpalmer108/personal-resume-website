import React from "react";
import { ButtonProps } from "../types/Button";

export function Button({ label, url }: ButtonProps) {
  return (
    <div>
      {label}
      {url}
    </div>
  );
}
