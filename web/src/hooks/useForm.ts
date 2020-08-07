import { useState, ChangeEvent } from 'react';


function useForm<T>(formDataDefault : T) {
    
  const [FormData, setFormData] = useState<T>(formDataDefault);

  function handleFormDataChange(event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLSelectElement>){
    const {name, value} = event.target;
    setFormData({... FormData, [name]: value});
  }  

  function clearForm() {
    setFormData(formDataDefault);
  }

  return {
    FormData,
    handleFormDataChange,
    clearForm,
  };
}

export default useForm;