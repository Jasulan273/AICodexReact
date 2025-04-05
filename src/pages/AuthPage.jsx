import { useEffect } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { useAuth } from '../services/auth';
import LoginForm from '../components/Auth/LoginForm';
import RegisterForm from '../components/Auth/RegisterForm';

export default function AuthPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  const [searchParams] = useSearchParams();
  const tab = searchParams.get('tab') || 'login';

  useEffect(() => {
    if (isAuthenticated()) {
      const from = location.state?.from?.pathname || '/app';
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, location]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {tab === 'login' ? <LoginForm /> : <RegisterForm />}
    </div>
  );
}