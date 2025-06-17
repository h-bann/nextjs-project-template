import Link from "next/link";
import { getAuthUser } from "@/lib/auth";
import LogoutButton from "./LogoutButton";

export default async function Navigation() {
  const user = await getAuthUser();

  return (
    <nav className="flex items-center space-x-6">
      <Link href="/" className="text-gray-700 hover:text-gray-900">
        Home
      </Link>

      {user ? (
        <>
          <Link href="/dashboard" className="text-gray-700 hover:text-gray-900">
            Dashboard
          </Link>
          <span className="text-gray-600">Hi, {user.name}</span>
          <LogoutButton />
        </>
      ) : (
        <>
          <Link
            href="/auth/login"
            className="text-gray-700 hover:text-gray-900"
          >
            Login
          </Link>
          <Link
            href="/auth/register"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Sign Up
          </Link>
        </>
      )}
    </nav>
  );
}
