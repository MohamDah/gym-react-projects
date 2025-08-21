import { useState } from "react";
import Modal from "../components/Modal";

export default function Portals() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='p-4 relative z-10'>
        <button onClick={() => setOpen(!open)} className="border p-2 text-xl">Open Modal</button>

        <Modal open={open} onClose={() => setOpen(false)}>
          Fancy Modal
        </Modal>
      </div>

      <div className="p-6 bg-red-400 relative z-[15]">Other Content</div>
    </>
  );
}
