import Link from "next/link";
import { getAuthUser } from "@/lib/auth";

export default async function HomePage() {
  const user = await getAuthUser();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="container-padding section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading-1 text-balance mb-6">
            Welcome to <span className="text-primary-600">Your App</span>
          </h1>
          <p className="body-large max-w-2xl mx-auto mb-8">
            A modern Next.js application with authentication, database
            integration, and beautiful UI components built for 2025.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            {user ? (
              <>
                <Link href="/dashboard" className="btn btn-primary btn-lg">
                  Go to Dashboard
                </Link>
                <Link href="/profile" className="btn btn-secondary btn-lg">
                  View Profile
                </Link>
              </>
            ) : (
              <>
                <Link href="/auth/register" className="btn btn-primary btn-lg">
                  Get Started
                </Link>
                <Link href="/auth/login" className="btn btn-outline btn-lg">
                  Sign In
                </Link>
              </>
            )}
          </div>

          {/* User Welcome Message */}
          {user && (
            <div className="card max-w-2xl mx-auto mb-16 animate-fade-in">
              <div className="card-content text-center">
                <div className="w-12 h-12 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-success-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-slate-900 mb-2">
                  Welcome back, {user.name}! 👋
                </h2>
                <p className="body-base">
                  You're successfully authenticated. Explore your dashboard or
                  update your profile settings.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white">
        <div className="container-padding section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Everything you need</h2>
              <p className="body-large max-w-2xl mx-auto">
                Built with modern web technologies and best practices for
                performance, security, and developer experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="card card-hover text-center animate-fade-in">
                <div className="card-content">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    Fast & Modern
                  </h3>
                  <p className="body-base">
                    Built with Next.js 15, React 19, and modern web technologies
                    for optimal performance and developer experience.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="card card-hover text-center animate-fade-in animation-delay-100">
                <div className="card-content">
                  <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-accent-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    Secure Authentication
                  </h3>
                  <p className="body-base">
                    Complete authentication system with JWT tokens, password
                    hashing, and protected routes for enterprise-grade security.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="card card-hover text-center animate-fade-in animation-delay-200">
                <div className="card-content">
                  <div className="w-12 h-12 bg-warning-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-warning-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    Beautiful UI
                  </h3>
                  <p className="body-base">
                    Styled with Tailwind CSS and includes reusable components
                    for rapid development with a modern, clean design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-slate-900 text-white">
        <div className="container-padding py-16">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="animate-fade-in">
                <div className="text-3xl font-bold text-primary-400 mb-2">
                  99.9%
                </div>
                <div className="text-slate-300">Uptime guaranteed</div>
              </div>
              <div className="animate-fade-in animation-delay-100">
                <div className="text-3xl font-bold text-accent-400 mb-2">
                  &lt;100ms
                </div>
                <div className="text-slate-300">Average response time</div>
              </div>
              <div className="animate-fade-in animation-delay-200">
                <div className="text-3xl font-bold text-success-400 mb-2">
                  24/7
                </div>
                <div className="text-slate-300">Expert support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary-50 to-accent-50">
        <div className="container-padding section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-2 mb-4">Ready to get started?</h2>
            <p className="body-large mb-8">
              Join thousands of developers building amazing applications with
              our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/register" className="btn btn-primary btn-lg">
                Start Building Today
              </Link>
              <Link href="/docs" className="btn btn-ghost btn-lg">
                Read Documentation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
