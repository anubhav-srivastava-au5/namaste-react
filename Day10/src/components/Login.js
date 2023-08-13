// Render Prop
 import React from 'react';
 import { Formik, Form, Field, ErrorMessage } from 'formik';
 import {Link} from 'react-router-dom';
 
 const Login = () => (
   <div className='bg-purple-200 shadow-2xl  p-2 m-2'>
    <div className='flex flex-wrap p-2 m-2 mb-4 justify-center'>
     <div>
     <h1 className='font-bold text-xl'>Login</h1>
     <Link to="/register"><h4 className='text-lg text-orange-500'>or create an account</h4></Link>
     </div>
     <div>
     <img alt='login-page-img' className='w-36 h-36 ml-20' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r' />
     </div>
     </div>
     <div className='flex flex-wrap justify-center'>
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
           <Field type="email" name="email" className="mr-10 w-72 rounded-lg" placeHolder="Email ID" />
           <ErrorMessage name="email" component="div" />
           <Field type="password" name="password" className="mr-10 w-72 rounded-lg" placeHolder="password" />
           <ErrorMessage name="password" component="div" />
           <button type="submit" className='shadow-lg rounded-lg font-medium w-20' disabled={isSubmitting}>
             Login
           </button>
         </Form>
       )}
     </Formik>
     </div>
   </div>
 );
 
 export default Login;