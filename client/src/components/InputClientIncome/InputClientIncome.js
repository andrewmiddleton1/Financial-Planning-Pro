import React from "react";
import { getOneClientByEmail, inputClientIncome } from '../UserFunctions/userFunctions';
import { useAppContext } from '../../store';
import { useEffect } from 'react';
import SimpleFileUpload from 'react-simple-file-upload';
import { DropdownButton, Dropdown } from 'react-bootstrap';

const InputClientIncome = (props) => {

    const [state, dispatch] = useAppContext();

    const [inputState, setInputState] = React.useState({
        employment_type: '',
        industry: '',
        primary_income: '',
        secondary_income: '',
        centrelink_payments: '',
        dva_payments: '',
        superannuation_payments: '',
        rental_income: '',
        other_income: '',
        ...state.user,

        UserId: "",
        errors: {},
    });

    useEffect(() => {
        const emailForFunction = state.user.email;
        getOneClientByEmail(emailForFunction)
            .then((currentUserData) => {
                // console.log(currentUserData);
                // console.log(currentUserData.data.id);
                // UserEmailId.push(currentUserData);
                // console.log(UserEmailId[0]);
                setInputState({
                    ...inputState,
                    UserId: currentUserData.data.id
                });
            });
    }, []);

    const handleValidation = () => {
        let errors = {};
        let formIsValid = true;


        // // employment_type
        // if (inputState.employment_type !== "undefined") {
        //     if (!inputState.employment_type.match(/^[a-zA-Z]+$/)) {
        //         formIsValid = false;
        //         errors["employment_type"] = "Only letters";
        //     }
        // }
        // else { }

        // // industry
        // if (inputState.industry !== "undefined") {
        //     if (!inputState.industry.match(/^[a-zA-Z]+$/)) {
        //         formIsValid = false;
        //         errors["industry"] = "Only letters";
        //     }
        // }
        // else { }

        // primary_income
        if (inputState.primary_income !== "undefined") {
            if (!inputState.primary_income.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["primary_income"] = "Only numbers";
            }
        }
        else { }

        // secondary_income
        if (inputState.secondary_income !== "undefined") {
            if (!inputState.secondary_income.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["secondary_income"] = "Only numbers";
            }
        }
        else { }

        // centrelink_payments
        if (inputState.centrelink_payments !== "undefined") {
            if (!inputState.centrelink_payments.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["centrelink_payments"] = "Only numbers";
            }
        }
        else { }

        // dva_payments
        if (inputState.dva_payments !== "undefined") {
            if (!inputState.dva_payments.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["dva_payments"] = "Only numbers";
            }
        }
        else { }

        // superannuation_payments
        if (inputState.superannuation_payments !== "undefined") {
            if (!inputState.superannuation_payments.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["superannuation_payments"] = "Only numbers";
            }
        }
        else { }

        // rental_income
        if (inputState.rental_income !== "undefined") {
            if (!inputState.rental_income.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["rental_income"] = "Only numbers";
            }
        }
        else { }

        // other_income
        if (inputState.other_income !== "undefined") {
            if (!inputState.other_income.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["other_income"] = "Only numbers";
            }
        }
        else { }


        setInputState({
            ...inputState,
            errors: errors
        });

        return formIsValid;
    }

    const onChange = (event) => {
        // to update the inputState you don't use this.setState anymore but setInputState
        setInputState({
            ...inputState, // you always have to copy the old state like this
            [event.target.name]: event.target.value // and set the property that changed like this
        });
    };

    const onSubmit = (event) => {
        let errors = {};
        event.preventDefault();
        const userData = {

            employment_type: inputState.employment_type,
            industry: inputState.industry,
            primary_income: inputState.primary_income,
            secondary_income: inputState.secondary_income,
            centrelink_payments: inputState.centrelink_payments,
            dva_payments: inputState.dva_payments,
            superannuation_payments: inputState.superannuation_payments,
            rental_income: inputState.rental_income,
            other_income: inputState.other_income,
            UserId: inputState.UserId

        }
        var result = handleValidation();
        console.log(result);
        if (result) {
            // getUsers().then(response => {
            //     console.log(response);

            // var destination = response.data.map(element => {
            //     if (element.email === inputState.email) {
            //         console.log('foundmatch');
            //         console.log(element.email)
            //         return true;
            //     }
            // }).filter(item => { return item; })[0];
            // if (!destination) {
            inputClientIncome(userData).then(res => {
                props.history.push('/clientexpenses')
            })
            console.log("Income Form submitted");
            // });
            // else {
            //     errors["email"] = "Email already exists";
            //     this.setState({ errors: errors });
            // }
        }

        else {
            console.log("Form has errors.")
        }
    }
    //         else {
    //     console.log("Form has errors.")
    // }
    //     }

    function handleFile(url) {
        console.log('The URL of the file is ' + url)
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 mt-5 mx-auto'>
                    <form noValidate onSubmit={onSubmit}>
                        <h1 className='h3 mb-3 font-weight normal'>Please Input your Income</h1>
                        <div className='form-group'>
                            <label htmlFor='employment_type'>Employment Type</label>
                            <DropdownButton id="dropdown-basic-button"
                                title={inputState.employment_type}
                                placeholder="Employment Type"
                                onSelect={function (env) {
                                    setInputState({
                                        ...inputState,
                                        employment_type: env
                                    })
                                    console.log(env);

                                }}
                                controlShouldRenderValue={true}
                            >
                                <Dropdown.Item eventKey="Full-Time">Full-Time</Dropdown.Item>
                                <Dropdown.Item eventKey="Part-Time">Part-Time</Dropdown.Item>
                                <Dropdown.Item eventKey="Casual">Casual</Dropdown.Item>
                                <Dropdown.Item eventKey="Contractor">Contractor</Dropdown.Item>
                                <Dropdown.Item eventKey="Self-Employed">Self-Employed</Dropdown.Item>
                                <Dropdown.Item eventKey="Retired">Retired</Dropdown.Item>
                                <Dropdown.Item eventKey="Home-Duties">Home-Duties</Dropdown.Item>
                                <Dropdown.Item eventKey="Student">Student</Dropdown.Item>
                                <Dropdown.Item eventKey="Unemployed">Unemployed</Dropdown.Item>
                                <Dropdown.Item eventKey="Other">Other</Dropdown.Item>
                            </DropdownButton>


                            {/* <input type='text'
                                refs='employment_type'
                                className='form-control'
                                name='employment_type'
                                placeholder='Enter Employment Type'
                                value={inputState.employment_type}
                                onChange={onChange}
                            /> */}
                            <span style={{ color: "red" }}>{inputState.errors["employment_type"]}</span>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='industry'>Industry</label>
                            <input type='text'
                                refs='industry'
                                className='form-control'
                                name='industry'
                                placeholder='Enter Industry'
                                value={inputState.industry}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>{inputState.errors["industry"]}</span>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='primary_income'>Primary Income (amount)</label>
                            <input type='text'
                                refs='primary_income'
                                className='form-control'
                                name='primary_income'
                                placeholder='Enter Annual Income (pre-tax)'
                                value={inputState.primary_income}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>{inputState.errors["primary_income"]}</span>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='primary_income'>Upload Payslip</label>

                            <SimpleFileUpload
                                apiKey="c7985f2ddd5c58327200e53688b6b877"
                                onSuccess={handleFile}
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='secondary_income'>Secondary Income (amount)</label>
                            <input type='text'
                                refs='secondary_income'
                                className='form-control'
                                name='secondary_income'
                                placeholder='Enter Secondary Income'
                                value={inputState.secondary_income}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>{inputState.errors["secondary_income"]}</span>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='centrelink_payments'>Centrelink Payments</label>
                            <input type='text'
                                refs='centrelink_payments'
                                className='form-control'
                                name='centrelink_payments'
                                placeholder='Annual Centrelink Payments'
                                value={inputState.centrelink_payments}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>{inputState.errors["centrelink_payments"]}</span>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='dva_payments'>DVA Payments</label>
                            <input type='text'
                                refs='dva_payments'
                                className='form-control'
                                name='dva_payments'
                                placeholder='Annual DVA Payments'
                                value={inputState.dva_payments}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>{inputState.errors["dva_payments"]}</span>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='superannuation_payments'>Superannuation Payments</label>
                            <input type='text'
                                refs='superannuation_payments'
                                className='form-control'
                                name='superannuation_payments'
                                placeholder='Annual Superannuation Payments'
                                value={inputState.superannuation_payments}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>{inputState.errors["superannuation_payments"]}</span>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='rental_income'>Rental Income</label>
                            <input type='text'
                                refs='rental_income'
                                className='form-control'
                                name='rental_income'
                                placeholder='Annual Rental Income'
                                value={inputState.rental_income}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>{inputState.errors["rental_income"]}</span>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='other_income'>Other Income</label>
                            <input type='text'
                                refs='other_income'
                                className='form-control'
                                name='other_income'
                                placeholder='Other Income'
                                value={inputState.other_income}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>{inputState.errors["other_income"]}</span>
                        </div>


                        <button type='submit' className='btn btn-lg btn-primary btn-block'>
                            Save Income
                            </button>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default InputClientIncome;
