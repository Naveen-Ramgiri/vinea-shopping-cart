import React from 'react';
import { useForm } from "react-hook-form";
import './SignUp.css';

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    reset();
  };

  return (
    <div className="container">
      <div className="signup">
        <h4 className="">Create an Account</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label className="col-form-label">First name</label>
            <input
              type="text"
              className={`form-control ${errors.fname && "invalid"}`}
              {...register("fname", { required: "There is an error that relates to this field" })}
              onKeyUp={() => {
                trigger("fname");
              }}
            />
            {errors.fname && (
              <small className="text-danger">{errors.fname.message}</small>
            )}
          </div>
          <div className="form-group">
            <label className="col-form-label">Last name</label>
            <input
              type="text"
              className={`form-control ${errors.lname && "invalid"}`}
              {...register("lname", {
                required: "There is an error that relates to this field"
              })}
              onKeyUp={() => {
                trigger("lname");
              }}
            />
            {errors.lname && (
              <small className="text-danger">{errors.lname.message}</small>
            )}
          </div>
          <div className="form-group">
            <label className="col-form-label">Email address</label>
            <input
              type="text"
              className={`form-control ${errors.email && "invalid"}`}
              {...register("email", {
                required: "There is an error that relates to this field",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid Email address",
                }
              })}
              onKeyUp={() => {
                trigger("email");
              }}
            />
            {errors.email && (
              <small className="text-danger">{errors.email.message}</small>
            )}
          </div>
          <div className="form-group">
            <label className="col-form-label">Password</label>
            <input
              type="password"
              className={`form-control ${errors.password1 && "invalid"}`}
              {...register("password1", {
                required: "There is an error that relates to this field"
              })}
              onKeyUp={() => {
                trigger("password1");
              }}
            />
            {errors.password1 && (
              <small className="text-danger">{errors.password1.message}</small>
            )}
          </div>
          <div className='button-section'>
            <input
              type="submit"
              className="button-primary"
              value="Sign In"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
