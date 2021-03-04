import React, { useState, useEffect } from "react";
import { inputClientParticulars } from '../UserFunctions/userFunctions';
import { useAppContext } from '../../store';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";



const InputClientParticulars = (props) => {

    const [state, dispatch] = useAppContext();

    const [googlevalue, setValue] = useState({ value: { description: "" } });
    // appDispatch({ type: SET_USER_ADDRESS, payload: googlevalue });
    console.log('google val', googlevalue)



    const [inputState, setInputState] = React.useState({
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        salutation: '',
        preferredName: '',
        date_of_birth: '',
        sex: '',
        marital_status: '',
        tax_resident: '',
        citizen: '',
        country_of_origin: '',
        preservation_age: '',
        age_pension_age: '',
        address: googlevalue,
        mobile: '',
        home_phone: '',
        work_phone: '',
        errors: {},
        ...state.user

    });

    console.log(inputState);
    console.log(inputState.date_of_birth);

    useEffect(() => {

        setInputState({

            ...inputState,
            address: googlevalue.value.description,

        });
    }, [googlevalue.value.description]);






    const handleValidation = () => {
        let errors = {};
        let formIsValid = true;
        // email
        const inputEmail = inputState.email;
        const emailRegex = /^\w+([\.-]?\w+)*@[a-z]+([\.-]?[a-z]+)*(\.[a-z]{2,4})+$/;
        const emailResult = emailRegex.test(inputEmail);
        if (!inputState.email) {
            formIsValid = false;
            errors["email"] = "Cannot be empty";
        }
        else if (!emailResult) {
            formIsValid = false;
            errors["email"] = "Email is not valid";
        }
        else { }


        // firstName
        if (!inputState.first_name) {
            formIsValid = false;
            errors["first_name"] = "Cannot be empty";
        }
        else if (typeof inputState.first_name !== "undefined") {
            if (!inputState.first_name.match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["first_name"] = "Only letters";
            }
        }
        else { }

        // lastName
        if (!inputState.last_name) {
            formIsValid = false;
            errors["last_name"] = "Cannot be empty";
        }
        else if (!inputState.last_name.match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["last_name"] = "Only letters";
        }
        else { }

        // salutation
        if (!inputState.salutation) {
            formIsValid = false;
            errors["salutation"] = "Cannot be empty";
        }
        // else if (!inputState.salutation.match(/^[a-zA-Z]+$/)) {
        //     formIsValid = false;
        //     errors["salutation"] = "Only letters";
        // }
        else { }

        // // preferredName
        // if (!inputState.preferredName) {
        //     formIsValid = false;
        //     errors["preferredName"] = "Cannot be empty";
        // }
        // else if (!inputState.preferredName.match(/^[a-zA-Z]+$/)) {
        //     formIsValid = false;
        //     errors["preferredName"] = "Only letters";
        // }
        // else { }

        // date_of_birth
        // if (!inputState.date_of_birth) {
        //     formIsValid = false;
        //     errors["date_of_birth"] = "Cannot be empty";
        // }
        // else if (!inputState.date_of_birth.match(/^[0-9]*$/)) {
        //     formIsValid = false;
        //     errors["date_of_birth"] = "Only numbers";
        // }
        // else { }

        // sex
        if (!inputState.sex) {
            formIsValid = false;
            errors["sex"] = "Cannot be empty";
        }
        // else if (!inputState.sex.match(/^[a-zA-Z]+$/)) {
        //     formIsValid = false;
        //     errors["sex"] = "Only letters";
        // }
        else { }

        // marital_status
        if (!inputState.marital_status) {
            formIsValid = false;
            errors["marital_status"] = "Cannot be empty";
        }
        // else if (!inputState.marital_status.match(/^[a-zA-Z]+$/)) {
        //     formIsValid = false;
        //     errors["marital_status"] = "Only letters";
        // }
        else { }

        // tax_resident
        if (!inputState.tax_resident) {
            formIsValid = false;
            errors["tax_resident"] = "Cannot be empty";
        }
        // else if (!inputState.tax_resident.match(/^[a-zA-Z]+$/)) {
        //     formIsValid = false;
        //     errors["tax_resident"] = "Only letters";
        // }
        else { }

        // citizen
        // if (!inputState.citizen) {
        //     formIsValid = false;
        //     errors["citizen"] = "Cannot be empty";
        // }
        // else if (!inputState.citizen.match(/^[a-zA-Z]+$/)) {
        //     formIsValid = false;
        //     errors["citizen"] = "Only letters";
        // }
        // else { }

        // country_of_origin
        if (!inputState.country_of_origin) {
            formIsValid = false;
            errors["country_of_origin"] = "Cannot be empty";
        }
        else if (!inputState.country_of_origin.match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["country_of_origin"] = "Only letters";
        }
        else { }

        // preservation_age
        if (!inputState.preservation_age) {
            formIsValid = false;
            errors["preservation_age"] = "Cannot be empty";
        }
        // else if (!inputState.preservation_age.match(/^[0-9]*$/)) {
        //     formIsValid = false;
        //     errors["preservation_age"] = "Only numbers";
        // }
        else { }

        // age_pension_age
        if (!inputState.age_pension_age) {
            formIsValid = false;
            errors["age_pension_age"] = "Cannot be empty";
        }
        // else if (!inputState.age_pension_age.match(/^[0-9]*$/)) {
        //     formIsValid = false;
        //     errors["age_pension_age"] = "Only numbers";
        // }
        else { }

        // address
        // if (!inputState.address) {
        //     formIsValid = false;
        //     errors["address"] = "Cannot be empty";
        // }
        // // else if (!inputState.address.match(/^[a-zA-Z]+$/)) {
        // //     formIsValid = false;
        // //     errors["address"] = "Only letters";
        // // }
        // else { }

        // mobile
        // if (!inputState.mobile) {
        //     formIsValid = false;
        //     errors["mobile"] = "Cannot be empty";
        // }
        // if (!inputState.mobile.match(/^[0-9]*$/)) {
        //     formIsValid = false;
        //     errors["mobile"] = "Only numbers";
        // }
        // else { }

        // //  home_phone
        // if (!inputState.home_phone) {
        //     formIsValid = false;
        //     errors["home_phone"] = "Cannot be empty";
        // }
        // if (!inputState.home_phone.match(/^[0-9]*$/)) {
        //     formIsValid = false;
        //     errors[" home_phone"] = "Only numbers";
        // }
        // else { }

        // work_phone
        // if (!inputState.work_phone) {
        //     formIsValid = false;
        //     errors["work_phone"] = "Cannot be empty";
        // // }
        // if (!inputState.work_phone.match(/^[0-9]*$/)) {
        //     formIsValid = false;
        //     errors["work_phone"] = "Only numbers";
        // }
        // else { }

        setInputState({
            ...inputState,
            errors: errors
        });

        return formIsValid;
    }

    const onChange = (event) => {
        // to update the inputState you don't use setState anymore but setInputState
        setInputState({
            ...inputState, // you always have to copy the old state like this
            [event.target.name]: event.target.value // and set the property that changed like this

        });
    };



    const onSubmit = (event) => {
        let errors = {};
        event.preventDefault();
        const userData = {
            first_name: inputState.first_name,
            last_name: inputState.last_name,
            email: inputState.email,
            salutation: inputState.salutation,
            preferredName: inputState.preferredName,
            date_of_birth: inputState.date_of_birth,
            sex: inputState.sex,
            marital_status: inputState.marital_status,
            tax_resident: inputState.tax_resident,
            citizen: inputState.citizen,
            country_of_origin: inputState.country_of_origin,
            preservation_age: inputState.preservation_age,
            age_pension_age: inputState.age_pension_age,
            address: inputState.address,
            mobile: inputState.mobile,
            home_phone: inputState.home_phone,
            work_phone: inputState.work_phone,
        }
        var result = handleValidation();

        console.log(result);

        if (result) {
            // getUsers().then(response => {
            //     console.log(response);

            //     var destination = response.data.map(element => {
            //         if (element.email === inputState.email) {
            //             console.log('foundmatch');
            //             console.log(element.email)
            //             return true;
            //         }
            //     }).filter(item => { return item; })[0];
            //     if (!destination) {
            inputClientParticulars(userData).then(res => {
                props.history.push('/clientassets')
            })

            console.log("Particulars Form submitted");
        }
        else {
            console.log("Form has errors.")
        }

    }
    // else {
    //     console.log("Form has errors.")
    // }





    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 mt-5 mx-auto'>
                    <form noValidate onSubmit={onSubmit}>
                        <h1 className='h3 mb-3 font-weight normal'>Please Input your Particulars</h1>
                        <div className='form-group'>
                            <label htmlFor='first_name'>First Name</label>
                            <input type='text'
                                refs='first_name'
                                className='form-control'
                                name='first_name'
                                placeholder='Enter First Name'
                                value={inputState.first_name}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>{inputState.errors["first_name"]}</span>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='last_name'>Last Name</label>
                            <input type='text'
                                refs='last_name'
                                className='form-control'
                                name='last_name'
                                placeholder='Enter Last Name'
                                value={inputState.last_name}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>{inputState.errors["last_name"]}</span>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='email'>Email Address</label>
                            <input type='email'
                                refs='email'
                                className='form-control'
                                name='email'
                                placeholder='Enter Email'
                                value={inputState.email}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>{inputState.errors["email"]}</span>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='salutation'>Salutation</label>
                            <DropdownButton id="dropdown-basic-button"
                                title={inputState.salutation}
                                placeholder="Salutation"
                                onSelect={function (env) {
                                    setInputState({
                                        ...inputState,
                                        salutation: env
                                    })
                                    console.log(env);

                                }}
                                controlShouldRenderValue={true}
                            >
                                <Dropdown.Item eventKey="Mr">Mr</Dropdown.Item>
                                <Dropdown.Item eventKey="Mrs">Mrs</Dropdown.Item>
                                <Dropdown.Item eventKey="Ms">Ms</Dropdown.Item>
                                <Dropdown.Item eventKey="Dr">Dr</Dropdown.Item>
                                <Dropdown.Item eventKey="Other">Other</Dropdown.Item>
                            </DropdownButton>

                            <span style={{ color: "red" }}>{inputState.errors["salutation"]}</span>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='preferredName'>Preferred Name</label>
                            <input type='preferredName'
                                refs='preferredName'
                                className='form-control'
                                name='preferredName'
                                placeholder='Enter Preferred Name'
                                value={inputState.preferredName}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>{inputState.errors["date_of_birth"]}</span>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='date_of_birth'>Date of Birth</label>
                            <input type='date_of_birth'
                                refs='date_of_birth'
                                className='form-control'
                                name='date_of_birth'
                                placeholder='Date Of Birth'
                                value={inputState.date_of_birth}
                                onChange={onChange}
                            />

                            {/* <div>
                                <DatePicker
                                    title={inputState.date_of_birth}
                                    // placeholder="Salutation"
                                    onSelect={function (env) {
                                        setInputState({
                                            ...inputState,
                                            date_of_birth: env
                                        })
                                        console.log(env);

                                    }}
                                    controlShouldRenderValue={true}
                                    selected={inputState.date_of_birth}
                                    showYearDropdown
                                    showMonthDropdown
                                    dateFormat="dd/MM/yyyy"

                                />
                            </div> */}

                            <span style={{ color: "red" }}>{inputState.errors["date_of_birth"]}</span>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='sex'>Sex</label>
                            <DropdownButton id="dropdown-basic-button"
                                title={inputState.sex}
                                placeholder="Sex"
                                onSelect={function (env) {
                                    setInputState({
                                        ...inputState,
                                        sex: env
                                    })
                                    console.log(env);

                                }}
                                controlShouldRenderValue={true}
                            >
                                <Dropdown.Item eventKey="Male">Male</Dropdown.Item>
                                <Dropdown.Item eventKey="Female">Female</Dropdown.Item>
                                <Dropdown.Item eventKey="Other">Other</Dropdown.Item>

                            </DropdownButton>


                            {/* <input type='sex'
                                refs='sex'
                                className='form-control'
                                name='sex'
                                placeholder='Enter Sex'
                                value={inputState.sex}
                                onChange={onChange}
                            /> */}
                            <span style={{ color: "red" }}>{inputState.errors["sex"]}</span>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='marital_status'>Martital Status</label>
                            <DropdownButton id="dropdown-basic-button"
                                title={inputState.marital_status}
                                placeholder="Marital Status"
                                onSelect={function (env) {
                                    setInputState({
                                        ...inputState,
                                        marital_status: env
                                    })
                                    console.log(env);

                                }}
                                controlShouldRenderValue={true}
                            >
                                <Dropdown.Item eventKey="Married">Married</Dropdown.Item>
                                <Dropdown.Item eventKey="Single">Single</Dropdown.Item>
                                <Dropdown.Item eventKey="De Facto">De Facto</Dropdown.Item>
                                <Dropdown.Item eventKey="Divorced">Divorced</Dropdown.Item>
                                <Dropdown.Item eventKey="Widowed">Widowed</Dropdown.Item>
                                <Dropdown.Item eventKey="Other">Other</Dropdown.Item>
                            </DropdownButton>


                            {/* <input type='marital_status'
                                refs='marital_status'
                                className='form-control'
                                name='marital_status'
                                placeholder='Enter Marital Status'
                                value={inputState.marital_status}
                                onChange={onChange}
                            /> */}
                            <span style={{ color: "red" }}>{inputState.errors["marital_status"]}</span>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='tax_resident'>Tax Resident</label>
                            <DropdownButton id="dropdown-basic-button"
                                title={inputState.tax_resident}
                                placeholder="Tax Resident"
                                onSelect={function (env) {
                                    setInputState({
                                        ...inputState,
                                        tax_resident: env
                                    })
                                    console.log(env);

                                }}
                                controlShouldRenderValue={true}
                            >
                                <Dropdown.Item eventKey="Yes">Yes</Dropdown.Item>
                                <Dropdown.Item eventKey="No">No</Dropdown.Item>
                                <Dropdown.Item eventKey="Not Sure">Not sure</Dropdown.Item>

                            </DropdownButton>

                            {/* <input type='tax_resident'
                                refs='tax_resident'
                                className='form-control'
                                name='tax_resident'
                                placeholder='Enter Tax Residence Status'
                                value={inputState.tax_resident}
                                onChange={onChange}
                            /> */}
                            <span style={{ color: "red" }}>{inputState.errors["tax_resident"]}</span>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='citizen'>Australian Citizen</label>

                            <DropdownButton id="citizen"
                                title={inputState.tax_resident}
                                placeholder="Australian Citizen"
                                onSelect={function (env) {
                                    setInputState({
                                        ...inputState,
                                        citizen: env
                                    })
                                    console.log(env);

                                }}
                                controlShouldRenderValue={true}
                            >
                                <Dropdown.Item eventKey="Yes">Yes</Dropdown.Item>
                                <Dropdown.Item eventKey="No">No</Dropdown.Item>

                            </DropdownButton>

                            {/* <input type='citizen'
                                refs='citizen'
                                className='form-control'
                                name='citizen'
                                placeholder='Enter Citizen Status'
                                value={inputState.citizen}
                                onChange={onChange}
                            /> */}
                            <span style={{ color: "red" }}>{inputState.errors["citizen"]}</span>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='country_of_origin'>Country of Origin</label>
                            <input type='country_of_origin'
                                refs='country_of_origin'
                                className='form-control'
                                name='country_of_origin'
                                placeholder='Enter Country of Origin'
                                value={inputState.country_of_origin}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>{inputState.errors["country_of_origin"]}</span>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='preservation_age'>Preservation Age (age you can access your super)</label>
                            <DropdownButton id="dropdown-basic-button"
                                title={inputState.preservation_age}
                                placeholder="Preservation Age"
                                onSelect={function (env) {
                                    setInputState({
                                        ...inputState,
                                        preservation_age: env
                                    })
                                    console.log(env);

                                }}
                                controlShouldRenderValue={true}
                            >
                                <Dropdown.Item eventKey="55">55</Dropdown.Item>
                                <Dropdown.Item eventKey="56">56</Dropdown.Item>
                                <Dropdown.Item eventKey="57">57</Dropdown.Item>
                                <Dropdown.Item eventKey="58">58</Dropdown.Item>
                                <Dropdown.Item eventKey="59">59</Dropdown.Item>
                                <Dropdown.Item eventKey="60">60</Dropdown.Item>
                                <Dropdown.Item eventKey="Not Sure">Not sure</Dropdown.Item>

                            </DropdownButton>


                            {/* <input type='preservation_age'
                                refs='preservation_age'
                                className='form-control'
                                name='preservation_age'
                                placeholder='Enter Preservation Age'
                                value={inputState.preservation_age}
                                onChange={onChange}
                            /> */}
                            <span style={{ color: "red" }}>{inputState.errors["preservation_age"]}</span>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='age_pension_age'>Age Pension Age</label>
                            <DropdownButton id="dropdown-basic-button"
                                title={inputState.age_pension_age}
                                placeholder="Preservation Age"
                                onSelect={function (env) {
                                    setInputState({
                                        ...inputState,
                                        age_pension_age: env
                                    })
                                    console.log(env);

                                }}
                                controlShouldRenderValue={true}
                            >
                                <Dropdown.Item eventKey="66 years">66</Dropdown.Item>
                                <Dropdown.Item eventKey="66 years and 6 months">66 years and 6 months</Dropdown.Item>
                                <Dropdown.Item eventKey="67">67</Dropdown.Item>

                            </DropdownButton>


                            {/* <input type='age_pension_age'
                                refs='age_pension_age'
                                className='form-control'
                                name='age_pension_age'
                                placeholder='Enter Age Pension Age'
                                value={inputState.age_pension_age}
                                onChange={onChange}
                            /> */}
                            <span style={{ color: "red" }}>{inputState.errors["age_pension_age"]}</span>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='address'>Address</label>

                            <div>
                                <GooglePlacesAutocomplete
                                    apiKey="AIzaSyCcYu91ogagqmx5C1WmjPtxmfmW13QiDlo&callback=initAutocomplete&libraries=places&v=weekly"
                                    selectProps={{
                                        googlevalue,
                                        onChange: setValue,
                                    }}
                                />
                            </div>


                            {/* <input type='address'
                                refs='address'
                                className='form-control'
                                name='address'
                                placeholder='Enter Address'
                                value={inputState.address}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>{inputState.errors["address"]}</span> */}
                        </div>

                        <div className='form-group'>
                            <label htmlFor='mobile'>Mobile Phone Number</label>
                            <input type='mobile'
                                refs='mobile'
                                className='form-control'
                                name='mobile'
                                placeholder='Enter Mobile Phone Number'
                                value={inputState.mobile}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>{inputState.errors["mobile"]}</span>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='home_phone'>Home Phone Number</label>
                            <input type='home_phone'
                                refs='home_phone'
                                className='form-control'
                                name='home_phone'
                                placeholder='Enter Home Phone Number'
                                value={inputState.home_phone}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>{inputState.errors["home_phone"]}</span>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='work_phone'>Work Phone Number</label>
                            <input type='work_phone'
                                refs='work_phone'
                                className='form-control'
                                name='work_phone'
                                placeholder='Enter Work Phone Number'
                                value={inputState.work_phone}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>{inputState.errors["work_phone"]}</span>
                        </div>
                        <button type='submit' className='btn btn-lg btn-primary btn-block'>
                            Save Particulars
                            </button>
                    </form>
                </div>
            </div>
        </div >
    );


}


export default InputClientParticulars;
