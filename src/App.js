import React from 'react';
import { useFormik} from 'formik'

function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''      
    },
    onSubmit: values =>{
      alert('Login Successful');
    },
    validate: values =>{
      let errors = {};
      if(!values.email) errors.email = 'Field required';
      if(values.email && /[A-Za-z]+@[A-Za-z]+\.[A-Za-z]+/.test(values.email) !== true) errors.email = 'Username should be an email';
      if(!values.password) errors.password = 'Field required';
      return errors;
    }
  });
  
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email:</div>
        <input type="text" id="emailField" name="email" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? <div id="emailError" style={{color:'red'}}>{formik.errors.email}</div> : null}        
        <div>Password:</div>
        <input type="text" id="pswField" name="password" onChange={formik.handleChange} value={formik.values.password}/><br/>
        {formik.errors.password ? <div id="pswError" style={{color:'red'}}>{formik.errors.password}</div> : null}                
        <button type="submit" id="submitBtn">Submit</button>
      </form>      
    </div>
  );
}

export default App;