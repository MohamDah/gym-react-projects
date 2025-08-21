import React from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ children, open, onClose }: { children: React.ReactNode, open: boolean, onClose: () => void; }) {
  if (!open) return null;

  return createPortal(
    <>
      <div className='fixed top-0 left-0 right-0 bottom-0 bg-black/70 z-20' />
      <div className='p-12 bg-blue-300 text-xl fixed top-1/2 left-1/2 -translate-1/2 z-20'>
        <button onClick={onClose} className="border p-2 bg-green-200 text-base block">Close Modal</button>
        {children}
      </div>
    </>,
    document.getElementById("portal")!
  );
}
