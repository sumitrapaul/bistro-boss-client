import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Register = () => {
   
    
    const {
      register,
      reset,
      handleSubmit,
      formState: { errors },
    } = useForm()
    
    const {createUser, handleProfile} = useContext(AuthContext)
    const navigate = useNavigate()
    const onSubmit = data => {
       createUser(data.email, data.password)
      

       .then((res) => {
              const loggedUser = res.user
              console.log(loggedUser)

              handleProfile(data.name, data.photoURL)
              .then(() =>{
                reset()
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User created successfully!!",
                  showConfirmButton: false,
                  timer: 1500
                });
                navigate('/')
              })
              .catch((error) => {
                console.log(error)
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Something went wrong!",
                  footer: '<a href="#">Why do I have this issue?</a>'
                });
              })
       })
    }
    // const handleRegister = e => {
    //     e.preventDefault()
    //     const form = e.target
    //     const name = form.name.value
    //     const email = form.email.value
    //     const password = form.password.value
    //     console.log(name, email, password)
    //     createUser(email, password)
    //     .then(res => {
    //         const user = res.user
    //         console.log(user)
    //     })
    // }

    return (
        <>
          <Helmet><title>Bistro boss | Register</title></Helmet> 
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
     
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered"/>
          {errors.name && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoURL</span>
          </label>
          <input type="text" {...register("photoURL", { required: true })} placeholder="photo url" className="input input-bordered"/>
          {errors.photoURL && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
          {errors.email && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register("password", { required: true,
           minLength: 6, 
           maxLength: 20, 
           pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ 
          })} 
          name="password" placeholder="password" className="input input-bordered"/>
          {errors.password?.type === "required" && <span className="text-red-600">Password field is required</span>}
          {errors.password?.type === "minLength" && <span className="text-red-600">Password must be 6 characters</span>}
          {errors.password?.type === "maxLength" && <span className="text-red-600">Password must be less than 20 characters</span>}
          {errors.password?.type === "pattern" && <span className="text-red-600">Password must be at least one capital letter,small letter, digits,special characters</span>}
      
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Register" />
          
        </div>
      </form>
      <p className="text-center"><small>Already have an account? Please <Link className="text-blue-700 text-2xl font-bold" to='/login'>Login</Link></small></p>
    </div>
  </div>
</div>
        </>
    );
};

export default Register;