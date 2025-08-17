import React from "react";
import "./loader.css";
export interface LoaderProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  variant: "default" | "secondary" | "destructive" | "outline";
}

const Loader = React.forwardRef<HTMLDivElement, LoaderProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return <div ref={ref} className={`loader loader-${variant} ${className}`} {...props}></div>;
  },
);
Loader.displayName = "Loader";

export { Loader };
