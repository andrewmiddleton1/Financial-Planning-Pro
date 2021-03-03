import React from "react";
import { getOneClientByEmail, inputClientExpenses } from '../UserFunctions/userFunctions';
import { useAppContext } from '../../store';
import { useEffect } from 'react';


const InputClientExpenses = (props) => {

    const [state, dispatch] = useAppContext();

    const [inputState, setInputState] = React.useState({
        mortgage_repayments: '',
        rent: '',
        council_rates: '',
        land_tax: '',
        electricity_utilities: '',
        investment_property_costs: '',
        telephone_internet: '',
        groceries: '',
        recreation_entertainment: '',
        clothing_personal_care: '',
        medical_health: '',
        transport: '',
        education: '',
        childcare: '',
        insurance: '',
        child_maintenance: '',
        other_Expenses: '',
        ...state.user,

        UserId: "",
        errors: {}
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


        // mortgage_repayments
        if (inputState.mortgage_repayments !== "undefined") {
            if (!inputState.mortgage_repayments.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["mortgage_repayments"] = "Only numbers";
            }
        }
        else { }

        // rent
        if (inputState.rent !== "undefined") {
            if (!inputState.rent.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["rent"] = "Only numbers";
            }
        }
        else { }

        // council_rates
        if (inputState.council_rates !== "undefined") {
            if (!inputState.council_rates.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["council_rates"] = "Only numbers";
            }
        }
        else { }

        // land_tax
        if (inputState.land_tax !== "undefined") {
            if (!inputState.land_tax.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["land_tax"] = "Only numbers";
            }
        }
        else { }

        // electricity_utilities
        if (inputState.electricity_utilities !== "undefined") {
            if (!inputState.electricity_utilities.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["electricity_utilities"] = "Only numbers";
            }
        }
        else { }

        // investment_property_costs
        if (inputState.investment_property_costs !== "undefined") {
            if (!inputState.investment_property_costs.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["investment_property_costs"] = "Only numbers";
            }
        }
        else { }

        // telephone_internet
        if (inputState.telephone_internet !== "undefined") {
            if (!inputState.telephone_internet.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["telephone_internet"] = "Only numbers";
            }
        }
        else { }

        // groceries
        if (inputState.groceries !== "undefined") {
            if (!inputState.groceries.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["groceries"] = "Only numbers";
            }
        }
        else { }

        // recreation_entertainment
        if (inputState.recreation_entertainment !== "undefined") {
            if (!inputState.recreation_entertainment.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["recreation_entertainment"] = "Only numbers";
            }
        }
        else { }

        // clothing_personal_care
        if (inputState.clothing_personal_care !== "undefined") {
            if (!inputState.clothing_personal_care.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["clothing_personal_care"] = "Only numbers";
            }
        }
        else { }

        // medical_health
        if (inputState.medical_health !== "undefined") {
            if (!inputState.medical_health.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["medical_health"] = "Only numbers";
            }
        }
        else { }


        // transport
        if (inputState.transport !== "undefined") {
            if (!inputState.transport.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["transport"] = "Only numbers";
            }
        }
        else { }

        // education
        if (inputState.education !== "undefined") {
            if (!inputState.education.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["education"] = "Only numbers";
            }
        }
        else { }

        // childcare
        if (inputState.childcare !== "undefined") {
            if (!inputState.childcare.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["childcare"] = "Only numbers";
            }
        }
        else { }

        // insurance
        if (inputState.insurance !== "undefined") {
            if (!inputState.insurance.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["insurance"] = "Only numbers";
            }
        }
        else { }

        // child_maintenance
        if (inputState.child_maintenance !== "undefined") {
            if (!inputState.child_maintenance.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["child_maintenance"] = "Only numbers";
            }
        }
        else { }

        // other_Expenses
        if (inputState.other_Expenses !== "undefined") {
            if (!inputState.other_Expenses.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["other_Expenses"] = "Only numbers";
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
        // to update the inputState you don't use inputState.setState anymore but setInputState
        setInputState({
            ...inputState, // you always have to copy the old state like inputState
            [event.target.name]: event.target.value // and set the property that changed like inputState
        });
    };

    const onSubmit = (event) => {
        let errors = {};
        event.preventDefault();
        const userData = {

            mortgage_repayments: inputState.mortgage_repayments,
            rent: inputState.rent,
            council_rates: inputState.council_rates,
            land_tax: inputState.land_tax,
            electricity_utilities: inputState.electricity_utilities,
            investment_property_costs: inputState.investment_property_costs,
            telephone_internet: inputState.telephone_internet,
            groceries: inputState.groceries,
            recreation_entertainment: inputState.recreation_entertainment,
            clothing_personal_care: inputState.clothing_personal_care,
            medical_health: inputState.medical_health,
            transport: inputState.transport,
            education: inputState.education,
            childcare: inputState.childcare,
            insurance: inputState.insurance,
            child_maintenance: inputState.child_maintenance,
            other_Expenses: inputState.other_Expenses,
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
            inputClientExpenses(userData).then(res => {
                props.history.push('/other')
            })
            console.log("Expenses Form submitted");
            // });
            // else {
            //     errors["email"] = "Email already exists";
            //     inputState.setState({ errors: errors });
            // }
        }

        else {
            console.log("Form has errors.")
        }
    };
    //         else {
    //     console.log("Form has errors.")
    // }
    //     }


    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 mt-5 mx-auto'>
                    <form noValidate onSubmit={onSubmit}>
                        <h1 className='h3 mb-3 font-weight normal'>Please Input your Monthly Expenses</h1>
                        <p>(and include zero where none is paid)</p>
                        <div className='form-group'>
                            <label htmlFor='mortgage_repayments'>Monthly Mortgage Repayments</label>
                            <input type='text'
                                refs='mortgage_repayments'
                                className='form-control'
                                name='mortgage_repayments'
                                placeholder='Enter Monthly Mortgage Payments'
                                value={inputState.mortgage_repayments}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>{inputState.errors["mortgage_repayments"]}</span>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='rent'>Rent</label>
                            <input type='text'
                                refs='rent'
                                className='form-control'
                                name='rent'
                                placeholder='Enter Monthly Rent'
                                value={inputState.rent}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>{inputState.errors["rent"]}</span>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='council_rates'>Council Rates</label>
                            <input type='text'
                                refs='council_rates'
                                className='form-control'
                                name='council_rates'
                                placeholder='Enter Monthly Council Rates'
                                value={inputState.council_rates}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>{inputState.errors["council_rates"]}</span>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='land_tax'>Land Tax</label>
                            <input type='text'
                                refs='land_tax'
                                className='form-control'
                                name='land_tax'
                                placeholder='Enter Monthly Land Tax'
                                value={inputState.land_tax}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>{inputState.errors["land_tax"]}</span>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='electricity_utilities'>Electricity and Utilities</label>
                            <input type='text'
                                refs='electricity_utilities'
                                className='form-control'
                                name='electricity_utilities'
                                placeholder='Enter Monthly Electricity and Utilities'
                                value={inputState.electricity_utilities}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>{inputState.errors["electricity_utilities"]}</span>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='investment_property_costs'>Investment Property Costs</label>
                            <input type='text'
                                refs='investment_property_costs'
                                className='form-control'
                                name='investment_property_costs'
                                placeholder='Monthly Investment Property Costs'
                                value={inputState.investment_property_costs}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>{inputState.errors["investment_property_costs"]}</span>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='telephone_internet'>Telephone and Internet</label>
                            <input type='text'
                                refs='telephone_internet'
                                className='form-control'
                                name='telephone_internet'
                                placeholder='Monthly Telephone and Internet Bills'
                                value={inputState.telephone_internet}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>{inputState.errors["telephone_internet"]}</span>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='groceries'>Groceries</label>
                            <input type='text'
                                refs='groceries'
                                className='form-control'
                                name='groceries'
                                placeholder='Monthly Cost of Groceries'
                                value={inputState.groceries}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>{inputState.errors["groceries"]}</span>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='recreation_entertainment'>Recreation and Entertainment</label>
                            <input type='text'
                                refs='recreation_entertainment'
                                className='form-control'
                                name='recreation_entertainment'
                                placeholder='Monthly Recreation and Entertainment Expenses'
                                value={inputState.recreation_entertainment}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>{inputState.errors["recreation_entertainment"]}</span>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='clothing_personal_care'>Clothing and Personal Care</label>
                            <input type='text'
                                refs='clothing_personal_care'
                                className='form-control'
                                name='clothing_personal_care'
                                placeholder='Monthly Clothing and Personal Care Costs'
                                value={inputState.clothing_personal_care}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>{inputState.errors["clothing_personal_care"]}</span>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='medical_health'>Medical and Health</label>
                            <input type='text'
                                refs='medical_health'
                                className='form-control'
                                name='medical_health'
                                placeholder='Monthly Medical and Health Costs'
                                value={inputState.medical_health}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>{inputState.errors["medical_health"]}</span>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='transport'>Transport</label>
                            <input type='text'
                                refs='transport'
                                className='form-control'
                                name='transport'
                                placeholder='Monthly Transport Costs'
                                value={inputState.transport}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>{inputState.errors["transport"]}</span>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='education'>Education</label>
                            <input type='text'
                                refs='education'
                                className='form-control'
                                name='education'
                                placeholder='Monthly Education Costs'
                                value={inputState.education}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>{inputState.errors["education"]}</span>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='childcare'>Childcare</label>
                            <input type='text'
                                refs='childcare'
                                className='form-control'
                                name='childcare'
                                placeholder='Monthly Childcare Costs'
                                value={inputState.childcare}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>{inputState.errors["childcare"]}</span>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='insurance'>Insurance</label>
                            <input type='text'
                                refs='insurance'
                                className='form-control'
                                name='insurance'
                                placeholder='Monthly Insurance Costs'
                                value={inputState.insurance}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>{inputState.errors["insurance"]}</span>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='child_maintenance'>Child Maintenance</label>
                            <input type='text'
                                refs='child_maintenance'
                                className='form-control'
                                name='child_maintenance'
                                placeholder='Monthly Child Maintenance Costs'
                                value={inputState.child_maintenance}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>{inputState.errors["child_maintenance"]}</span>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='other_Expenses'>Other Expenses</label>
                            <input type='text'
                                refs='other_Expenses'
                                className='form-control'
                                name='other_Expenses'
                                placeholder='Any Other Monthly Expenses'
                                value={inputState.other_Expenses}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>{inputState.errors["other_Expenses"]}</span>
                        </div>

                        <button type='submit' className='btn btn-lg btn-primary btn-block'>
                            Save Expenses
                            </button>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default InputClientExpenses;


