import React, {useState} from 'react'
import { useForm } from 'react-hook-form';

function Register(){
    const[checkedTerms,toggleCheckedTerms] = useState(false);
    const { register, watch, handleSubmit, errors } = useForm();

    const onSuccess = (formData) => {
        console.log(formData)
    }

    const onError = (errorList) => {
        console.log(errorList)
    }

    return(
        <form onSubmit={handleSubmit(onSuccess, onError)}>
            <div>
                <label htmlFor="fullName">Full name</label>
                <input
                    name="fullName"
                    id="fullName"
                    type="text"
                    ref={register({required: true})}
                />
                {errors.fullName && <p>Full name is required</p>}
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input
                    name="email"
                    id="email"
                    type="text"
                    ref={register(
                        {
                        required: true,
                        validate: (value) => value.includes('@'),

                        }
                    )}
                />
                {errors.email && <p>Email is required</p>}
            </div>

            <div>
                <label htmlFor="country">Country</label>
                <input
                    name="country"
                    id="country"
                    type="text"
                    ref={register({required: true})}
                />
                {errors.country && <p>Country is required</p>}
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    name="password"
                    id="password"
                    type="password"
                    ref={register(
                        {
                            required: true,
                            minLength: 6,
                            message: "At least 6 characters",
                        })}
                />
                {errors.password && <p>Password is required</p>}
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    name="confirmPassword"
                    id="confirmPassword"
                    type="password"
                    ref={register(
                        {
                            required: true,
                            minLength: 6,
                            message: "Password does not match!",
                        })}
                />
                {errors.confirmPassword && <p>password does not match!</p>}
            </div>

            <div>
                <label htmlFor="terms-and-conditions">
                    <input
                        type="checkbox"
                        name="terms-and-conditions"
                        id="terms-and-conditions"
                        checked={checkedTerms}
                        onChange={()=> toggleCheckedTerms(!checkedTerms)}
                    />
                    I agree with the terms and conditions!
                </label>
            </div>

            <button
                disabled={!checkedTerms}
                type={"submit"}
                // onClick={sendForm}
            >Send
            </button>
        </form>

    );
}

export default Register;
