import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Toast from "../Toaster/Toaster";
import "./ToastList.css";

const ToastList = ({ data, position, removeToast }) => {
  const listRef = useRef(null);

  const handleScrolling = (el) => {
    const isTopPosition = ["top-left", "top-right"].includes(position);
    if (isTopPosition) {
      el?.scrollTo(0, el.scrollHeight);
    } else {
      el?.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    handleScrolling(listRef.current);
  }, [position, data]);

  const sortedData = position.includes("bottom")
    ? [...data].reverse()
    : [...data];

  return (
    sortedData.length > 0 && (
      <div
        className={`toast-list toast-list--${position}`}
        aria-live="assertive"
        ref={listRef}
      >
        {sortedData.map((toast) => (
          <Toast
            key={toast.id}
            title={toast.title}
            icon={toast.icon}
            duration={toast.duration}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    )
  );
};

ToastList.propTypes = {
  data: PropTypes.array.isRequired,
  position: PropTypes.string.isRequired,
  removeToast: PropTypes.func.isRequired,
};

export default ToastList;
