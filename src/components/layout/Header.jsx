import Link from "next/link";
import { getAuthUser } from "@/lib/auth";
import Navigation from "./Navigation";

export default async function Header() {
  const user = await getAuthUser();

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-gray-900">
            Your App
          </Link>

          <Navigation user={user} />
        </div>
      </div>
    </header>
  );
}
