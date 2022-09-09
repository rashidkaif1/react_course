import React from 'react';
import PropTypes from 'prop-types';
export default function Foot(props) {
  return (
    <footer className="footer">
                    © 2016 - 2018 Appzia - All Rights {props.textt}
                </footer>
  )
}
Foot.propTypes = {
  textt: PropTypes.string.isRequired
}
Foot.defaultProps={

  textt:'new text'
};