import { ToastContainer } from "react-toastify";
import React from 'react';

const StyledToaster = () => {
    return (
        <ToastContainer
            position="bottom-center"
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={true}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            style={{ opacity: 1 }}
        />
    )
};

export default StyledToaster;