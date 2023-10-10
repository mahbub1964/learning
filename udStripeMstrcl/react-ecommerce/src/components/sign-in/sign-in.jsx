import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
//import { authOld } from '../../firebase'; //, auth
import { UserContext } from '../../context/user-context';
import Layout from '../shared/layout';
import '../sign-up/sign-up.styles.scss';

const SignIn = () => {
  const [error, setError] = useState(null);
  const { user, setUser } = useContext(UserContext); //console.log("user:", user);
  const navigate = useNavigate();
  const initialValues = { email: '', password: '' };

  // const handleSignIn_Old = async (values, { setSubmitting }) => {
  //   const { email, password } = values;
  //   try {
  //     await authOld.signInWithEmailAndPassword(email, password);
  //     setSubmitting(false); navigate('/shop');
  //   } catch(error) { console.log(error);
  //     setSubmitting(false); setError(error);
  //   }
  // };

  const handleSignIn = async (values, { setSubmitting }) => {
    const { email, password } = values;
    try {
      // await authOld.signInWithEmailAndPassword(email, password);
      const auth = getAuth(); //console.log("Sign-in:: auth:", auth);
      //console.log("Sign-in:: auth.currentUser:", auth.currentUser);

      await signInWithEmailAndPassword(auth, email, password);
      //console.log("Signed In. getAuth().currentUser:", getAuth().currentUser);
      //console.log("getAuth().currentUser.displayName:", getAuth().currentUser.displayName);
      if(auth.currentUser) {
        const { uid, displayName, email } = auth.currentUser;
        setUser({ uid, displayName, email });
      } else setUser(null);
      setSubmitting(false); navigate('/shop');
    } catch(error) { console.log(error);
      setSubmitting(false); setError(error); setUser(null);
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
