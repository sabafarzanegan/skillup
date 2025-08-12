import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card/Card";
import "./loginform.css";
import GithubBtn from "../loginBtn/GithubBtn";
import GoogleBtn from "../loginBtn/GoogleBtn";

function Loginform() {
  return (
    <div className="card-container">
      <Card className="card-login">
        <CardHeader>
          <CardTitle className="login-title">خوش آمدید</CardTitle>
          <p className="login-description">با حساب کاربری گوکل یا گیت هاب خود وارد شوید</p>
        </CardHeader>
        <CardContent className="login-content">
          <GithubBtn />
          <GoogleBtn />
        </CardContent>
      </Card>
    </div>
  );
}

export default Loginform;
