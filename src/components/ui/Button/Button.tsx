import React from "react";
import "./button.css";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "default" | "secondary" | "destructive" | "outline";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`btn-default-style font-regular body-md  btn-${variant} ${className}`}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };
