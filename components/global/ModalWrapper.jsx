import React, { useState } from 'react'
import Button from '../Button/Button'
import { Modal, ModalContent, ModalDescription, ModalFooter, ModalHeader, ModalTitle } from '../Modal/Modal'

const ModalWrapper = () => {
    const [Open,setOpen]=useState(false)

    return (
        <div>
            <Button title="Show Modal" onClick={()=>setOpen(true)}/>
            <Modal Open={Open}>
                <ModalContent>
                    <ModalHeader>
                        <ModalTitle>Are you absolutely sure?</ModalTitle>
                        <ModalDescription> This action cannot be undone. This will permanently delete your
                            account and remove your data from our servers.</ModalDescription>
                    </ModalHeader>
                    <ModalFooter>
                        <Button title='Close' onClick={()=>setOpen(false)} className='bg-transparent border-2 dark:border-[#09090b]'></Button>
                        <Button title='Continue' onClick={()=>setOpen(false)} ></Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default ModalWrapper