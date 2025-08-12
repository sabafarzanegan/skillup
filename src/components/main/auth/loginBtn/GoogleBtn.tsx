"use client";
import { authClient } from "@/app/lib/auth-client";
import { Button } from "@/components/ui/Button/Button";
import { useTransition } from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";

function GoogleBtn() {
  const [isPending, startTransition] = useTransition();
  const googleAuthHandler = async () => {
    startTransition(async () => {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
        fetchOptions: {
          onSuccess: () => {
            toast.success("ورود شما با موفقیت انجام شد");
          },
          onError: () => {
            toast.error("خطا هنگام ورود!لطفا دوباره تلاش کنید");
          },
        },
      });
    });
  };
  return (
    <Button
      disabled={isPending}
      onClick={googleAuthHandler}
      variant="outline"
      className="login-btn"
    >
      {isPending ? <span className="loader-login-btn "></span> : "ورود با گوگل"}

      <FcGoogle size={24} className="login-icon" />
    </Button>
  );
}

export default GoogleBtn;
