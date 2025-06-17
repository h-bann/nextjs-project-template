import { getAuthUser } from "@/lib/auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Dashboard - Your App",
  description: "User dashboard",
};

export default async function DashboardPage() {
  const user = await getAuthUser();

  if (!user) {
    redirect("/auth/login");
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome to your Dashboard, {user.name}!
          </h1>
          <p className="text-gray-600">
            You're successfully logged in and authenticated.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Profile</h3>
              <div className="text-blue-600">👤</div>
            </div>
            <p className="text-gray-600 text-sm mb-2">Email: {user.email}</p>
            <p className="text-gray-600 text-sm">Name: {user.name}</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Settings</h3>
              <div className="text-green-600">⚙️</div>
            </div>
            <p className="text-gray-600 text-sm">
              Manage your account settings and preferences.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Activity</h3>
              <div className="text-purple-600">📊</div>
            </div>
            <p className="text-gray-600 text-sm">
              View your recent activity and usage statistics.
            </p>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-blue-900 mb-2">
            🎉 Your template is working!
          </h2>
          <p className="text-blue-800">
            This dashboard proves that your authentication system is working
            correctly. You can now start building your application features on
            top of this foundation.
          </p>
        </div>
      </div>
    </div>
  );
}
