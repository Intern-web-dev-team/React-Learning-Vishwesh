import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(data) {
    console.log("submitting the form", data);
  }

  return (
    <>
    <div className="form-body">
      <div className="form-heading">
        <h1>Create Your Account</h1>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          
          <div>
            <input
              {...register("firstname", { required: "First name is required" })}
              type="text"
              placeholder="First Name"
            />
            {errors.firstname && <p>{errors.firstname.message}</p>}
          </div>

          
          <div>
            <input
              {...register("lastname", { required: "Last name is required" })}
              type="text"
              placeholder="Last Name"
            />
            {errors.lastname && <p>{errors.lastname.message}</p>}
          </div>

          
          <div>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Enter a valid email",
                },
              })}
              type="email"
              placeholder="Email"
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>

         
          <div>
            <input
              {...register("dob", { required: "Date of Birth is required" })}
              type="date"
              placeholder="DOB"
            />
            {errors.dob && <p>{errors.dob.message}</p>}
          </div>

          
          <div>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              type="password"
              placeholder="Password"
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>

          
          <div>
            <input
              {...register("confirmpassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              type="password"
              placeholder="Confirm Password"
            />
            {errors.confirmpassword && <p>{errors.confirmpassword.message}</p>}
          </div>

          
          <div>
            <select {...register("role", { required: "Please select a role" })}>
              <option value="">Select Role</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="employee">Employee</option>
              <option value="founder">Founder</option>
              <option value="other">Other</option>
            </select>
            {errors.role && <p>{errors.role.message}</p>}
          </div>

        
          <div>
            <input
              {...register("terms", { required: "You must accept the terms" })}
              type="checkbox"
            />
            <label htmlFor="">I accept terms and conditions.</label>
            {errors.terms && <p>{errors.terms.message}</p>}
          </div>

         
          <div>
            <textarea
              {...register("comments")}
              cols="20"
              rows="5"
              placeholder="Comments"
            ></textarea>
          </div>

        
          <div>
            <input type="submit" disabled={isSubmitting} />
          </div>
        </form>
      </div>
      </div>
    </>
  );
}

export default App;
