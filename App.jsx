import { useState } from 'react'
import './App.css'
import { useForm } from 'react-hook-form';

function App() {

   const {
    register,
    handleSubmit,
    watch,
    formState: { errors , isSubmitting },
  } = useForm();

  const delay = (d)=>{
   return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, d*1000);
    });
  };

  const onSubmit = async (data)=> {
    await delay(3);
    console.log(data)
  }

  return (
    <>
      <div className='container'>
        <div className="form">
        <form onSubmit={handleSubmit(onSubmit)} >
          { isSubmitting && <div className='loading' >Submitting...</div> }
          <input {...register("username",{ required:{value:true,message:"This field is required"}, minLength:{value:3 , message:"min length is 3"},maxLength:{value:8,message:"max length is 8"}})} type="text" placeholder='username'/>
          {errors.username && <div className='red'>{errors.username.message}</div>}
          <input {...register("password", {required:{value:true,message:"Pass is mandatory"}, minLength:{value:8, message:"min length is 8"} } )} type="text" placeholder='password'/>
          {errors.password && <div className='red' > {errors.password.message}</div> }
          <input disabled={isSubmitting} type="submit" className='submit' />
          
        </form>
        </div>
      </div>
    </>
  )
}

export default App
