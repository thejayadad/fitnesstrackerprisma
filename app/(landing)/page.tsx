import { auth } from "@/auth";
import AuthModal from "@/components/auth/auth-modal";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth()
  const userEmail = session?.user?.email
  if(userEmail){
    redirect(`/${userEmail}`)
  }
  return (
    <div>
      homePage
      <AuthModal />
    </div>
  );
}
