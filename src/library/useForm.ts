import { useEffect, useState, ChangeEvent } from "react"
import InputValues from "../interfaces/inputValues"

export type EType = ChangeEvent<HTMLInputElement>

export const useForm = (initialState: InputValues) => {
    const [values, setValues] = useState<InputValues>(initialState)

    const handler = (e: EType) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }

    let formTuple: [InputValues, (e: EType) => void] = [values, handler]

    return formTuple
}
