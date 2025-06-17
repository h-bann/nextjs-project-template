import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function AuthGuard({ children, requireAuth = true }) {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/user/profile');
        setAuthenticated(response.ok);
        
        if (requireAuth && !response.ok) {
          router.push('/auth/login');
          return;
        }
        
        if (!requireAuth && response.ok) {
          router.push('/dashboard');
          return;
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        if (requireAuth) {
          router.push('/auth/login');
        }
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [requireAuth, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="xl" />
      </div>
    );
  }

  if (requireAuth && !authenticated) {
    return null; // Router will redirect
  }

  if (!requireAuth && authenticated) {
    return null; // Router will redirect
  }

  return children;
}
