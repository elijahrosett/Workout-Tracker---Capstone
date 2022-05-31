import { useState } from "react";
import AddWorkoutPage from "../pages/AddWorkoutPage/AddWorkoutPage";

const useCustomForm = (initialValues = {}, onSubmit) => {
  const [formData, setFormValues] = useState(initialValues);

  const handleInputChange = (e) => {
    
    e.persist();
    if (e.target.name === "isStudent") {
      setFormValues({ ...formData, [e.target.name]: e.target.checked });
    } else {
      setFormValues({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const reset = () => {
    setFormValues(initialValues);
  };
<AddWorkoutPage setFormValues={setFormValues} />
  return [formData, handleInputChange, handleSubmit, reset];
};

export default useCustomForm;
