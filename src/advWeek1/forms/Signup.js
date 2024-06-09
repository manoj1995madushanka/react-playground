import {useState} from "react";
import {validateEmail} from "./utils";

const PasswordErrorMessage = () => {
    return (
        <p className="FieldError">Password should have at least 8 characters</p>
    )
}

const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState({
        value: "",
        isTouched: false,
    });
    const [role, setRole] = useState("role")

    const roles = [
        {value: "role", label: "Role"},
        {value: "individual", label: "Individual"},
        {value: "business", label: "Business"}
    ];

    const getIsFormValid = () => {
        return (
            firstName &&
            validateEmail(email) &&
            password.value.length >= 8 &&
            role !== "role"
        );
    }

    const clearForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword({
            value: "",
            isTouched: false,
        });
        setRole("role")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Account Created")
        clearForm();
    }

    return (
        <div className="Signup">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h2>Sign Up</h2>
                    <div className="Field">
                        <label htmlFor="firstName">
                            First Name <sup>*</sup>
                        </label>
                        <input
                            id="firstName"
                            placeholder="First Name"
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)
                            }/>
                    </div>
                    <div className="Field">
                        <label htmlFor="lastName">
                            Last Name <sup>*</sup>
                        </label>
                        <input id="lastName" placeholder="Last Name" value={lastName}
                               onChange={e => setLastName(e.target.value)}/>
                    </div>
                    <div className="Field">
                        <label htmlFor="email">
                            Email <sup>*</sup>
                        </label>
                        <input id="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className="Field">
                        <label htmlFor="password">
                            Password <sup>*</sup>
                        </label>
                        <input
                            id="password"
                            placeholder="Password"
                            value={password.value}
                            onChange={e =>
                                setPassword({...password, value: e.target.value})}
                            onBlur={() => {
                                setPassword({...password, isTouched: true})
                            }}
                        />
                        {password.isTouched && password.value.length < 8 ? (<PasswordErrorMessage/>) : null}
                    </div>
                    <div className="Field">
                        <label>
                            Role <sup>*</sup>
                        </label>
                        <select value={role} onChange={e => {
                            setRole(e.target.value)
                        }}>
                            {roles.map((roleOption) => (
                                    <option key={roleOption.value} value={roleOption.value}>
                                        {roleOption.label}
                                    </option>
                                )
                            )}
                        </select>
                    </div>
                    <button type="submit" disabled={!getIsFormValid()}>
                        Create account
                    </button>
                </fieldset>
            </form>
        </div>
    )
}

export default Signup;