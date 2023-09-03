import { GiMagicHat } from "react-icons/gi";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-500">
      {" "}
      Index PAge
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <GiMagicHat alt="Logo" className="mx-auto w-auto text-9xl" />
      </div>
      <h2 className="mt-6 text-center text-3xl font-bold tracking-tiht text-gray-900">
        {" "}
        Sign into your Account
      </h2>
      <AuthForm />
    </div>
  );
}
