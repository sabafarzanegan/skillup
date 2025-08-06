import React from "react";
import "./input.css";
function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return <input type={type} data-slot="input" className={`${className} input`} {...props} />;
}

export { Input };
