// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {Link} from 'react-router-dom';

const Register = () => (
  <div className='register-page'>
   <div className='register-heading'>
    <div>
    <h1>Login</h1>
    <Link to="/login"><h4 >or login to your account</h4></Link>
    </div>
    <div className='register-img'>
    <img alt='register-page-img' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r' />
    </div>
    </div>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="email" name="email" placeHolder="Email ID" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" placeHolder="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Register;