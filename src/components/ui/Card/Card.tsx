import "./card.css";
function Card({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card" className={`${className} card`} {...props} />;
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-header" className={`${className} card-header`} {...props} />;
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-title" className={className} {...props} />;
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-content" className={`${className} CardContent`} {...props} />;
}

export { Card, CardHeader, CardTitle, CardContent };
