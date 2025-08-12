"use client";
import { authClient } from "@/app/lib/auth-client";
import { Button } from "@/components/ui/Button/Button";
import { useTransition } from "react";
import { FaGithub } from "react-icons/fa";
import { toast } from "sonner";

function GithubBtn() {
  const [isPending, startTransition] = useTransition();

  const githubAuthHandler = async () => {
    // Initiating social sign-in with GitHub
    startTransition(async () => {
      await authClient.signIn.social({
        provider: "github",
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
      onClick={githubAuthHandler}
      className="login-btn"
      variant="outline"
    >
      {isPending ? <span className="loader-login-btn "></span> : "ورود با گیت هاب"}

      <FaGithub size={24} className="login-icon" />
    </Button>
  );
}

export default GithubBtn;
