import { useState } from "react";

function FormComponent() {
    const [nameValue, setNameValue] = useState("")

    function handleInputChange(event) {
        // const {value} = event.target
        console.log(event);
        setNameValue(event.target.value)


    }

    function handleSubmit(event){
        // stop the behaviour
        event.preventDefault();

        // call api here and pass the name value
        console.log(nameValue, "nameValue");
        

    }

    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <input value={nameValue} name="name" id="name" placeholder="Enter you name"
                    onChange={handleInputChange} />

                <button type="submit">Submit</button>
            </form>




        </div>
    )

}

export default FormComponent;