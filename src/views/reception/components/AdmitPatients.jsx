
import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { admitPatients } from '../../../http/httpService'

function AdmitPatients({ modal, toggle, Patient, doctors }) {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedDoctor, setSelectedDoctor] = useState(null);


    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Admit Patients</ModalHeader>
                <ModalBody>
                    <Dropdown isOpen={dropdownOpen} toggle={() => { setDropdownOpen(!dropdownOpen) }}  >
                        <DropdownToggle caret>Availble Doctors
                        </DropdownToggle>
                        <DropdownMenu>
                            {
                                doctors.map(({ name, id }) => {
                                    return <DropdownItem onClick={(e) => { setSelectedDoctor(id) }} key={id}>{name}</DropdownItem>
                                })
                            }
                        </DropdownMenu>
                    </Dropdown>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => {
                        if (selectedDoctor !== null) {
                            admitPatients({
                                "patientId": Patient,
                                "doctorId": selectedDoctor
                            })


                            toggle()
                        }
                    }}>Admit Patients</Button>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
export default AdmitPatients;