import { useState } from "react";

function FormComponent() {
    const [nameValue, setNameValue] = useState("")
    const [emailValue, setEmailValue] = useState("")

    function handleInputChange(event) {
        // const {value} = event.target
        console.log(event);
        setNameValue(event.target.value)


    }

    function handleEmailChange(event){
        console.log(event);
        setEmailValue(event.target.value)

    }

    function handleSubmit(event){
        // stop the behaviour
        event.preventDefault();

        // call api here and pass the name value
        console.log(nameValue, emailValue, "nameValue");
        

    }

    

    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <input value={nameValue} name="name" id="name" placeholder="Enter you name"
                    onChange={handleInputChange} />

                <input type="email" name="email" id="email" placeholder="Enter Your Email" onChange={handleEmailChange} value={emailValue}/>

                <button type="submit">Submit</button>
            </form>




        </div>
    )

}

export default FormComponent;