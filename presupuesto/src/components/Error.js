import PropTypes from 'prop-types';
import React from 'react'

const Error = ({mensaje}) => (
    <p className="alert alert-danger error">{mensaje}</p>
);

Error.propTypes = {
    mensaje: PropTypes.string.isRequired,
   
}
export default Error;