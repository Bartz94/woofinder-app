import { useState } from "react";
import { FormInput } from "../Input";


export const FormValidate = () => {
    const [values, setValues] = useState({
        name: '',
        breed: '',
        lost_date: '',
        citylost: '',
        owner: '',
        phone: '',
        address: '',
        description: '',
        details: ''
    })

    const inputs = [
        {
            id: 1,
            name: "name",
            type: "text",
            placeholder: "Imię psa",
            label: "Imię psa"
        },
        {
            id: 2,
            name: "breed",
            type: "text",
            placeholder: "Rasa psa",
            label: "Rasa psa"
        },
        {
            id: 3,
            name: "lost_date",
            type: "date",
            placeholder: "Data zaginięcia",
            label: "Data zaginięcia"
        },
        {
            id: 4,
            name: "citylost",
            type: "text",
            placeholder: "Ostatnia lokalizacja pobytu",
            label: "Ostatnia lokalizacja pobytu"
        },
        {
            id: 5,
            name: "owner",
            type: "text",
            placeholder: "Właściciel",
            label: "Właściciel"
        },
        {
            id: 6,
            name: "phone",
            type: "number",
            placeholder: "Telefon",
            label: "Telefon"
        },
        {
            id: 7,
            name: "address",
            type: "text",
            placeholder: "Adres właściciela",
            label: "Adres właściciela"
        },
        {
            id: 8,
            name: "description",
            type: "text",
            placeholder: "Opis",
            label: "Opis"
        },
        {
            id: 9,
            name: "details",
            type: "text",
            placeholder: "znaki szczególne ",
            label: "znaki szczególne"
        }

    ]

    const handleSubmit = (e) => {
        e.preventDefault();
}

const onChange = (e)=> {
    setValues({...values, [e. target.name]:e.target.value})
}
console.log(values);
    return (
        <>

            <form onSubmit={handleSubmit}>
                {inputs.map((input) => (
                    <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
                ))}
                <button>Dodaj ogłoszenie</button>
            </form>
        </>
    )
}

export default FormValidate;