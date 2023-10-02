import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import Layout from '../shared/layout';
import { authOld, authNew } from '../../firebase';
import '../sign-up/sign-up.styles.scss';

const SignIn = () => {
  const [error, setError] = useState(null);
  const initialValues = { email: '', password: '' };
  const navigate = useNavigate();
  const handleSignIn = async (values, { setSubmitting }) => {
    const { email, password } = values;
    try {
      await authOld.signInWithEmailAndPassword(email, password);
      setSubmitting(false); navigate('/shop');
    } catch(error) { console.log(error);
      setSubmitting(false); setError(error);
    }
  };
  return (
    <Layout>
      <h1>Sign In</h1>
      <div className='form-container'>
        <Formik initialValues={initialValues}
          onSubmit={handleSignIn //values => {console.log(values)}
          }>
          {({values, handleChange, handleSubmit, isSubmitting}) => {
            return <form onSubmit={handleSubmit}>
              <div><input type='email' name='email' onChange={handleChange}
                value={values.email} placeholder='Email'
                className='nomad-input' /></div>
              <div><input type='password' name='password' onChange={handleChange}
                value={values.password} placeholder='Password'
                className='nomad-input' /></div>
              <div className='submit-btn'><button type='submit' disabled={isSubmitting}
                className='button is-black nomad-btn submit'>Sign In</button></div>
              <div className='error-message'>
                { error && <p>{error.message}</p> }
              </div>
            </form>;
          }}
        </Formik>
      </div>
    </Layout>
  );
};

export default SignIn;
