import React from 'react';
import PropTypes from 'prop-types';
import "./styles.css";

// DESTRUCTURING

// const Location = (props) => {

//     // Destructuring ( cuando se almacena en una variable con el mismo nombre que la propiedad dentro de props)
//     const {city, city2} = props;

//     return (<div><h1>{city}</h1></div>);
// };

const Location = ({city}) => {
    return (
    <div className="locationCont">
        <h1>
            {city}
        </h1>
    </div>)
};

Location.propTypes = {
    city: PropTypes.string.isRequired,
}

export default Location;