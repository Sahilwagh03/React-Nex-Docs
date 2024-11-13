import Image from 'next/image'
import Button from '../../Button/Button'
import React, { useState } from 'react'
import AiIcons from '../../../assets/Ai-icons.svg'
import Ai_Modal from './Ai_Modal';
const NexusAiButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);  // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <>
      {/* Button that triggers the modal */}
      <Button
        className="fixed bottom-5 right-5 z-30 min-h-[6rem] gap-1 !px-2 flex flex-col justify-center items-center text-white bg-black shadow-lg overflow-hidden"
        onClick={handleOpenModal}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#B38FFF] to-[#6780FE] blur-lg opacity-25 -z-10 dark:hidden" />
        <div>
          <Image src={AiIcons} alt="React-Nex" width={40} height={40} />
        </div>
        <div>
          <h2 className="text-[1rem] leading-[1.55] font-[900]">NexusAI</h2>
        </div>
      </Button>

      {/* Modal that appears when the button is clicked */
        <Ai_Modal handleCloseModal={handleCloseModal}  isModalOpen={isModalOpen}/>
      }

    </>
  );
};

export default NexusAiButton;
