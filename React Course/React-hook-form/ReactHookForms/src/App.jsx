import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Submitting the form", data);
  };

  // Common input configuration
  const inputConfig = (name, type = "text", validationRules) => ({
    type,
    ...register(name, validationRules),
  });

  // Common error message display
  const renderErrorMessage = (error) => error && <p>{error.message}</p>;

  return (
    <div className="App">
      <h1>Learning React Hook Forms</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* First Name */}
        <div>
          <label>First Name: </label>
          <input
            {...inputConfig("firstName", "text", {
              required: { value: true, message: "Input Required" },
              minLength: { value: 3, message: "Minimum 3 characters needed" },
            })}
          />
          {renderErrorMessage(errors.firstName)}
        </div>

        {/* Middle Name */}
        <div>
          <label>Middle Name: </label>
          <input
            {...inputConfig("middleName", "text", {
              required: { value: true, message: "Input Required" },
              minLength: { value: 3, message: "Minimum 3 characters needed" },
            })}
          />
          {renderErrorMessage(errors.middleName)}
        </div>

        {/* Last Name */}
        <div>
          <label>Last Name: </label>
          <input
            {...inputConfig("lastName", "text", {
              required: { value: true, message: "Input Required" },
              minLength: { value: 3, message: "Minimum 3 characters needed" },
            })}
          />
          {renderErrorMessage(errors.lastName)}
        </div>

        {/* Phone Number */}
        <div>
          <label>Phone Number: </label>
          <input
            {...inputConfig("phNumber", "tel", {
              required: { value: true, message: "Input Required" },
              minLength: { value: 10, message: "Enter a valid mobile number" },
              maxLength: { value: 10, message: "Enter a valid mobile number" },
            })}
          />
          {renderErrorMessage(errors.phNumber)}
        </div>

        {/* Age */}
        <div>
          <label>Age: </label>
          <input
            {...inputConfig("age", "number", {
              required: { value: true, message: "Input Required" },
              max: { value: 120, message: "Enter a valid age" },
            })}
          />
          {renderErrorMessage(errors.age)}
        </div>

        {/* Submit Button */}
        <div>
          <input type="submit" disabled={isSubmitting} />
        </div>
      </form>
    </div>
  );
}

export default App;