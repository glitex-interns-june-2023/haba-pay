import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Abort = () => {
  const [isAborted, setIsAborted] = useState(false);

  const handleAbortClick = () => {
    setIsAborted(true);
    toast.error('The process was aborted');
  };

  const handleResumeClick = () => {
    setIsAborted(false);
  };

  return (
    <div className="abort-process">
      <h1>Abort Process</h1>
      <div>
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
