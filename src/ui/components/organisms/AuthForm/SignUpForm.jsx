import { SignUp } from '/src/services/auth/SignUp.js';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { AuthInputBox } from '/src/ui/components/molecules/AuthInputBox/AuthInputBox.jsx';
import { AuthButton } from '/src/ui/components/atoms/Buttons/AuthButton/AuthButton.jsx';

import './Form.css';
import 'react-toastify/dist/ReactToastify.css';

export const SignUpForm = () => {
  const { email, setEmail, password,  setPassword, firstName, setFirstName, handleRegister } = SignUp();

  return (
    <div className={'form-wrapper'}>
      <form className={'form'}>
        <h3>Sign Up</h3>

        <AuthInputBox
          type={'Name'}
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          maxLength={12}
        />

        <AuthInputBox
          type={'Email address'}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <AuthInputBox
          type={'Password'}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <AuthButton label={'Sign Up'} onClick={handleRegister}/>

        <p>
          Already have an account ? <Link to="/login">Login</Link>
        </p>
      </form>
      <ToastContainer
        style={{top: '-100px'}}
        position={"top-center"}
        autoClose={2000}
        pauseOnHover={false}
      />
    </div>
  );
}