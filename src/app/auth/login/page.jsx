import LoginForm from "@/components/auth/LoginForm";

export const metadata = {
  title: "Login - Your App",
  description: "Sign in to your account",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <LoginForm />
    </div>
  );
}
