import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Styles/Abort.css';
import close from '../assets/close.png';

const Abort = () => {
  const navigate = useNavigate();
  const [isAborted, setIsAborted] = useState(false);

  const handleButtonClick = () => {
    navigate('/apppin');
  };

  const handleAbortClick = () => {
    setIsAborted(true);
    toast.error('The process was aborted');
  };

  const handleResumeClick = () => {
    setIsAborted(false);
  };

  return (
    <div className="abort-process">
        <div className="close-btn-container">
            <div className="close-btn" onClick={handleButtonClick}>
                <img src={close} alt="close" />
            </div>
        </div>

        <div className="abort-header">
          <h1>Abort Process</h1>
          <p>
            Information you may have entered will be saved by default. But you can{' '}
            <span>abort and discard</span>
          </p>
        </div>

        <div className="abort-btn">
            <button onClick={handleResumeClick} disabled={isAborted} className="btn-resume">
                Resume
            </button>
            <button onClick={handleAbortClick} disabled={isAborted} className="btn-abort">
                Abort
            </button>
        </div>
        <ToastContainer />
    </div>
  );
};

export default Abort;
