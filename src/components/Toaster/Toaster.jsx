import { useEffect } from "react";
import PropTypes from "prop-types";
import "./Toaster.css";

const Toaster = ({ title = '', icon = '', duration = 0, type = '', onClose = () => {} }) => {

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timeoutId);
  }, [duration, onClose]);

  return (
    <div className={`toast ${type}`} role="alert">
      <div className="toast-message">
        {icon && (
          <i className={`${icon}`}></i>
        )}
        <p>{title}</p>
      </div>
      <button className="toast-close-btn" onClick={onClose}>
        <span className="icon">
          <i className="fa fa-close"></i>
        </span>
      </button>
    </div>
  );
};

Toaster.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Toaster;
