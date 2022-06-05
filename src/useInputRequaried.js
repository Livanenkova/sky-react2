import  { useState } from "react";

const useInputRequired = (initial, required) => {
  const [value, setValue] = useState('');
  const [error, errorHandling] = useState(false)
  
    let errorMessage = ""

    const onChange = () => {  // фигурная скобка, открывающая тело многострочной функции
      const userValue = initial
      if(userValue){
        setValue(userValue)
        console.log(value, error)
      }
    };
    
    const onBlur = () => {  // фигурная скобка, открывающая тело многострочной функции
      if (value === '') {
        errorHandling(required);
        console.log('Ошибка - заполните поля');
        errorMessage = 'Ошибка - заполните поля'

      } else {
        errorHandling(!required)
        console.log('Все отлично - вы великолепны')
        errorMessage = 'Все отлично - вы великолепны'
      };
      return errorMessage
      
    };

  return {
    onChange, onBlur,errorMessage
  }
}

export default useInputRequired