import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const AddressAutocomplete = () => (
    <div>
        <GooglePlacesAutocomplete
            apiKey="AIzaSyCcYu91ogagqmx5C1WmjPtxmfmW13QiDlo&callback=initAutocomplete&libraries=places&v=weekly"

        />
    </div>
);

export default AddressAutocomplete;