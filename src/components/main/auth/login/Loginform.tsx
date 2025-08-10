import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card/Card";
import "./login.css";
import { Button } from "@/components/ui/Button/Button";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Logo from "../../logo/Logo";

function Loginform() {
  return (
    <div className="card-container">
      <Card className="card-login">
        <CardHeader>
          <CardTitle className="login-title">خوش آمدید</CardTitle>
          <p className="login-description">با حساب کاربری گوکل یا گیت هاب خود وارد شوید</p>
        </CardHeader>
        <CardContent className="login-content">
          <Button className="login-btn" variant="outline">
            <p>ورود با گیت هاب</p>
            <FaGithub size={24} className="login-icon" />
          </Button>
          <Button variant="outline" className="login-btn">
            ورود با حساب کاربری
            <FcGoogle size={24} className="login-icon" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Loginform;
