/* eslint-disable no-unreachable */
import React from "react";
import Container from "../../Container/index";
import SearchForm from "../SearchForm/SearchForm";
import LiabilitiesSearchResults from "../SearchResults/LiabilitiesSearchResults";
import Alert from "../../Alert/index";
import { useAppContext } from '../../../store';
import { getClientLiabilitiesData, getOneClientByLastName } from "../../UserFunctions/userFunctions";

const LiabilitiesSearch = () => {

    const [state, dispatch] = useAppContext();

    const [inputState, setInputState] = React.useState({
        search: "",
        client: [],
        results: [],
        error: "",
        UserId: ""

    });

    const handleInputChange = async (event) => {
        // to update the inputState you don't use this.setState anymore but setInputState
        setInputState({
            ...inputState, // you always have to copy the old state like this
            search: event.target.value // and set the property that changed like this
        });

    };

    // 
    const handleFormSubmit = event => {
        event.preventDefault();


        const LastNameForFunction = inputState.search;
        console.log(LastNameForFunction);
        getOneClientByLastName(LastNameForFunction)
            .then((currentUserData) => {
                console.log(currentUserData);
                console.log(currentUserData.data.id);


                getClientLiabilitiesData(currentUserData.data.id)
                    .then(res => {
                        console.log(res);

                        setInputState({
                            ...inputState,
                            results: res.data
                        });
                        console.log(inputState.results);
                    })
                    .catch(err => setInputState({ error: err.message }));

            });
    };


    return (
        <div>
            <Container style={{ minHeight: "80%" }}>

                <SearchForm
                    handleFormSubmit={handleFormSubmit}
                    handleInputChange={handleInputChange}
                    clients={inputState.clients}
                />
                <LiabilitiesSearchResults results={inputState.results} />
            </Container>
        </div>
    );

}

export default LiabilitiesSearch;
