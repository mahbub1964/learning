import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import Layout from '../shared/layout';
import { authOld, authNew, createUserProfileDocument } from '../../firebase';
import './sign-up.styles.scss';

const validate = values => {
  const errors = {};
  if(!values.email) errors.email = 'Required';
  else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if(!values.firstname) errors.firstname  = 'Required';
  if(!values.password) errors.password = 'Required';
  return errors;
}

const SignUp = () => {
  const [error, setError] = useState(null);
  const initialValues = { firstname: '', email: '', password: '' };
  const navigate = useNavigate();
  const handleSignUp = async (values, { setSubmitting }) => {
    const { firstname, email, password } = values; //console.log("handleSignUp:: values:", values);
    try {
      const { user } = await authOld.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName: firstname });
      setSubmitting(false); navigate('/shop');
    } catch(error) { console.log(error);
      setSubmitting(false); setError(error);
    }
  };
  return (
    <Layout>
      <div className='sign-up'>
        <h1>Sign Up</h1>
        <div className='form-container'>
          <Formik initialValues={initialValues} validate={validate}
            onSubmit={handleSignUp //values => {console.log(values)}
            }>
            {({values, errors, handleChange, handleSubmit, isSubmitting}) => {
              //console.log("errors", errors, ", values:", values);
              const { firstname, email, password } = errors; //(errors? errors: initialValues);
              return <form onSubmit={handleSubmit}>
                <div><input type='text' name='firstname' onChange={handleChange}
                  value={values.firstname} placeholder='First Name'
                  className={'nomad-input ' + (firstname? 'error': '')} /></div>
                <div><input type='email' name='email' onChange={handleChange}
                  value={values.email} placeholder='Email'
                  className={'nomad-input ' + (email? 'error': '')} /></div>
                <div><input type='password' name='password' onChange={handleChange}
                  value={values.password} placeholder='Password'
                  className={'nomad-input ' + (password? 'error': '')} /></div>
                <div className='submit-btn'><button type='submit' disabled={isSubmitting}
                  className='button is-black nomad-btn submit'>Sign Up</button></div>
                <div className='error-message'>
                  { error && <p>{error.message}</p> }
                </div>
              </form>;
            }}
          </Formik>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
