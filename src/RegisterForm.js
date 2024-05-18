import {useState} from "react";

function RegisterForm() {
    const [userForm, setUserForm] = useState({
        "firstName": "Luke",
        "lastName": "Jones",
        "email": "abc@gmail.com",
    });

    return (
        <>
            <label>
                First name:
                <input
                    value={userForm.firstName}
                    onChange={e => {
                        setUserForm({
                            ...userForm,
                            firstName: e.target.value
                        })
                    }}/>
            </label>
            <label>
                Last name:
                <input
                    value={userForm.lastName}
                    onChange={e => {
                        setUserForm({
                            ...userForm,
                            lastName: e.target.value
                        })
                    }}/>
            </label>
            <label>
                Email:
                <input
                    value={userForm.email}
                    onChange={e => {
                        setUserForm({
                            ...userForm,
                            email: e.target.value
                        })
                    }}/>
            </label>
            <br/>
            <p>
                {userForm.firstName} {userForm.lastName} ({userForm.email})
            </p>
        </>
    )
}

export default RegisterForm;