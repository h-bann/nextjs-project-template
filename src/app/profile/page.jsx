import { getAuthUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import ProfileForm from "@/components/profile/ProfileForm";
import PasswordChangeForm from "@/components/profile/PasswordChangeForm";

export const metadata = {
  title: "Profile - Your App",
  description: "Manage your profile settings",
};

export default async function ProfilePage() {
  const user = await getAuthUser();

  if (!user) {
    redirect("/auth/login");
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Profile Settings
        </h1>

        <div className="space-y-8">
          <ProfileForm user={user} />
          <PasswordChangeForm />
        </div>
      </div>
    </div>
  );
}
