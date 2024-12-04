import { useState } from "react";

function FormComponent() {
    const [nameValue, setNameValue] = useState("")

    function handleInputChange(event) {
        // const {value} = event.target
        console.log(event);
        setNameValue(event.target.value)


    }

    return (
        <div>
            <h1>Form</h1>

            <input value={nameValue} name="name" id="name" placeholder="Enter you name"
                onChange={handleInputChange} />
        </div>
    )

}

export default FormComponent;