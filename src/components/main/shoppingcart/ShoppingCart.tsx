import "./shoppingcart.css";
import { Button } from "@/components/ui/Button/Button";
import { ShoppingCart } from "lucide-react";

function Shoppingcart() {
  return (
    <Button variant="outline" className="cart-icon-btn">
      <ShoppingCart className="cart-icon" />
    </Button>
  );
}

export default Shoppingcart;
