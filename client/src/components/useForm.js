import {useState} from 'react'

export const useForm = intialValue => {

    const [values, setValues] = useState(intialValue)

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };

    return [values, setValues, handleChanges]

}