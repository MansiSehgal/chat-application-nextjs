import Image from "next/image";
import { logo } from "../assets";
import { AuthForm } from "./components";
export default function Home() {
  return (
    <div
      className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100
    items-center"
    >
      <div className="sm:max-auto sm:w-full sm:max-w-md items-center flex flex-col">
        <Image
          alt="logo"
          height={48}
          width={48}
          className="max-auto w-auto"
          src={logo}
        />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <AuthForm />
    </div>
  );
}
