import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import '../styles/LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    if (!email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setLoggedIn(true);
  };

  if (loggedIn) {
    return (
      <div className="page login-page">
        <PageHeader title="Welcome Back!" subtitle="You are now signed in." />
        <p className="login-page__success">
          Signed in as <strong>{email}</strong>
        </p>
      </div>
    );
  }

  return (
    <div className="page login-page">
      <PageHeader
        title="Login"
        subtitle="Sign in to manage your reservations and orders."
      />

      <form className="login-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="login-email">Email</label>
          <input
            type="email"
            id="login-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
            aria-required="true"
            aria-invalid={!!error}
          />
        </div>

        <div className="form-group">
          <label htmlFor="login-password">Password</label>
          <input
            type="password"
            id="login-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
            aria-required="true"
            aria-invalid={!!error}
          />
        </div>

        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}

        <Button type="submit" variant="primary">
          Sign In
        </Button>
      </form>
    </div>
  );
}

export default LoginPage;
