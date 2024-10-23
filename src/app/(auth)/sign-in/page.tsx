import brandImage from "@/assets/images/brand.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import SignInForm from "../components/sign-in-form";
import SupportAlert from "../components/support-alert";

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Image src={brandImage} alt="logo" width={200} height={75} />
      <SignInForm />
      <div className="space-x-2">
        <SupportAlert asChild>
          <Button variant="link">Забыли пароль?</Button>
        </SupportAlert>
        <SupportAlert asChild>
          <Button variant="link">Регистрация</Button>
        </SupportAlert>
      </div>
    </div>
  );
}
