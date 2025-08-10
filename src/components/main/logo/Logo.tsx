import Image from "next/image";
import "./logo.css";
import LogoSvg from "@/public/images/book-heart-love-svgrepo-com.svg";
function Logo() {
  return (
    <div className="logo-container">
      <Image className="logo-svg" src={LogoSvg} width={70} height={46} alt="logo" />
    </div>
  );
}

export default Logo;
