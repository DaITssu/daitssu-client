import { useState, FormEvent } from 'react';
import { useRouter } from 'next/router';
import Header from '@/components/common/Header/Header';
import Link from 'next/link';
import { loginUser } from './api/login';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const userResponse = await loginUser({ email, password });

      localStorage.setItem('user', JSON.stringify(userResponse.user));
      console.log(userResponse);
      router.push('/');
    } catch (error) {
      if (error instanceof Error) {
        console.error('Login failed:', error.message);
      }
    }
  };

  return (
    <>
      <Header />
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign in</h1>
              <p className="text-xs-center">
                <Link href="/register">Need an account?</Link>
              </p>

              <form onSubmit={handleLogin}>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </fieldset>
                <button
                  className="btn btn-lg btn-primary pull-xs-right"
                  type="submit"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
