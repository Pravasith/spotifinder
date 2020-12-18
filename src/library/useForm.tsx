import { useEffect, useState, ChangeEvent } from "react"
import InputValues from "../interfaces/inputValues"




export const useForm = (initialState: InputValues) => {
    const [ values, setValues ] = useState<InputValues>(initialState)


    return {
        values,
        handler: (e: ChangeEvent<HTMLInputElement>) => {
            setValues({
                ...values,
                [e.target.name]: e.target.value
            })
        }
    }


}