import style from './Getstarted.module.css'
import { useFormik } from 'formik';

import * as yup from 'yup'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const Getstarted = () => {
    const navigate=useNavigate()
    const [log, setlog] = useState(true)
    function changelog(){
        setlog(!log)
        console.log(log)
    }
    const regFormik=useFormik({
        initialValues:{
            name:"",
            email:"",
            password:"",
    
        },
        validationSchema:yup.object().shape({
            name:yup.string().required("you must enter name ").min(3,"name must be more than 3 character"),
            email:yup.string().required("you must enter email ").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,"invalid email"),
            password:yup.string().required("you must enter password").min(8,"password must be 8 character")
        }),
        onSubmit:function(values){
            navigate('/home')
        }
    })
    return <>
    <div className={`${style.started} `}>
        <img src="./Get Started.jpg" alt="" />
        <div className={`${style.login}`}>
            <div className={`${style.btns} text-center mt-5`}>
            <button onClick={changelog} className={`${style.btn3} btn`}>Sign Up</button>
            <button  onClick={changelog} className={`${style.btn4} btn`}>Login</button>
            </div>
    {log?
            <form onSubmit={regFormik.handleSubmit}>
            <label htmlFor="name" className='text-white mx-4 my-2'>Name : </label>
            <input id='name' type="text" className='form-control m-auto w-75' value={regFormik.values.name} onBlur={regFormik.handleBlur} onChange={regFormik.handleChange}/>
            {regFormik.errors.name&&regFormik.touched.name?
            <div class="alert alert-warning w-75 ms-5 my-1 py-0" role="alert">
            {regFormik.errors.name}
          </div>
            :""}
            <label htmlFor="email" className='text-white mx-4 my-2' >Email : </label>
            <input id='email' type="email" className='form-control m-auto w-75' value={regFormik.values.email} onBlur={regFormik.handleBlur} onChange={regFormik.handleChange}/>
            {regFormik.errors.email&&regFormik.touched.email?
            <div class="alert alert-warning w-75 ms-5 my-1 py-0" role="alert">
            {regFormik.errors.email}
          </div>
            :""}
            <label htmlFor="password" className='text-white mx-4 my-2'>Password</label>
            <input id='password'type="password"className='form-control m-auto w-75' value={regFormik.values.password} onBlur={regFormik.handleBlur} onChange={regFormik.handleChange} />
            {regFormik.errors.password&&regFormik.touched.password?
            <div class="alert alert-warning w-75 ms-5 my-1 py-0" role="alert">
            {regFormik.errors.password}
          </div>
            :""}
            <button  type='submit' className={`${style.btn5} btn w-50`}>SignUp</button>
           </form>

           
            :
            <form onSubmit={regFormik.handleSubmit} >
                <label htmlFor="name" className='text-white mx-4 my-2'>Name : </label>
            <input id='name' type="text" className='form-control m-auto w-75' value={regFormik.values.name} onBlur={regFormik.handleBlur} onChange={regFormik.handleChange}/>
            
            <label htmlFor="password" className='text-white mx-4 my-2'>Password</label>
            <input id='password'type="password"className='form-control m-auto w-75' value={regFormik.values.password} onBlur={regFormik.handleBlur} onChange={regFormik.handleChange} />
                <button type='submit' className={`${style.btn5} btn w-50`}>Login</button>
            </form >

            }
            
           
              
        </div>
    </div>
    </>
}

export default Getstarted;
