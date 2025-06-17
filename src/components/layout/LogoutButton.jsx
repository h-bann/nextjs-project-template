"use client";

import { logoutAction } from "@/lib/actions/auth";

export default function LogoutButton() {
  return (
    <form action={logoutAction}>
      <button type="submit" className="text-red-600 hover:text-red-800">
        Logout
      </button>
    </form>
  );
}
