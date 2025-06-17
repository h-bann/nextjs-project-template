import Link from "next/link";
import { getAuthUser } from "@/lib/auth";

export default async function HomePage() {
  const user = await getAuthUser();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-blue-600">Your App</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A modern Next.js application with authentication, database
            integration, and beautiful UI components.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            {user ? (
              <>
                <Link
                  href="/dashboard"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Go to Dashboard
                </Link>
                <Link
                  href="/profile"
                  className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  View Profile
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/auth/register"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </Link>
                <Link
                  href="/auth/login"
                  className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  Sign In
                </Link>
              </>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Fast & Modern</h3>
              <p className="text-gray-600">
                Built with Next.js 15, React 19, and modern web technologies for
                optimal performance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-green-600 text-3xl mb-4">🔐</div>
              <h3 className="text-xl font-semibold mb-2">
                Secure Authentication
              </h3>
              <p className="text-gray-600">
                Complete authentication system with JWT tokens, password
                hashing, and protected routes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-purple-600 text-3xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-2">Beautiful UI</h3>
              <p className="text-gray-600">
                Styled with Tailwind CSS and includes reusable components for
                rapid development.
              </p>
            </div>
          </div>

          {user && (
            <div className="mt-12 bg-green-50 border border-green-200 rounded-lg p-6 max-w-2xl mx-auto">
              <h2 className="text-lg font-semibold text-green-800 mb-2">
                Welcome back, {user.name}! 👋
              </h2>
              <p className="text-green-700">
                You're successfully authenticated. Explore your dashboard or
                update your profile settings.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
