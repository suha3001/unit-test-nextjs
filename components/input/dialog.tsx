import React from 'react';

interface SimpleDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const SimpleDialog: React.FC<SimpleDialogProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div data-testid='dialog' className='fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-75'>
      <div className='bg-white p-6 rounded shadow-lg'>
        <h2 className='text-xl font-bold mb-4'>Dialog Title</h2>
        <p className='mb-4'>This is a simple dialog.</p>
        <button onClick={onClose} className='btn btn-secondary'>Close</button>
      </div>
    </div>
  );
};

export default SimpleDialog;
