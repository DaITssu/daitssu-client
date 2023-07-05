import Link from 'next/link';
import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/router';
import { signup } from '@/api/signup';
import { useAtom } from 'jotai';
import { userAtom } from '@/states/userAtom';
import { login } from '@/api/login';

const Login: React.FC = () => {
  const router = useRouter();
  const [user, setUser] = useAtom(userAtom);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(email, password)
      .then((res) => {
        setUser(res.user);
      })
      .then(() => {
        router.replace('/');
      });
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign In</h1>
            <p className="text-xs-center">
              <Link href="/register">Need an account?</Link>
            </p>

            <form onSubmit={handleSubmit}>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
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
  );
};

export default Login;
