
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Checkbox, Input } from 'antd';
import { setPatientData } from '../../../http/httpService'

function ReviewPatient({ modal, toggle, doctor, patient }) {

    const [URL, setURL] = useState("https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf");
    const [HasMedicinen, setHasMedicine] = useState(false);
    const [HaslabTest, setHaslabTest] = useState(false);



    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Review Patient</ModalHeader>

                <ModalBody>
                    <div>
                        <div>
                            <h2>
                                File URL
                            </h2>
                            <Input placeholder="Basic usage" value={URL} />
                        </div>
                        <div>
                            <Checkbox checked={HasMedicinen} onChange={
                                () => { setHasMedicine(!HasMedicinen) }
                            } >Has Medicine</Checkbox>
                        </div>
                        <div>

                            <Checkbox checked={HaslabTest} onChange={
                                () => { setHaslabTest(!HaslabTest) }
                            } > Has lab Test</Checkbox>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={async () => {

                        if (HasMedicinen) {
                            await setPatientData({
                                "functionName": "addPrescription",
                                "data": [
                                    uuidv4(),
                                    `${doctor}`,
                                    `${patient}`,
                                    '2',
                                    URL
                                ]
                            })
                        }
                        if (HaslabTest) {
                            await setPatientData({
                                "functionName": "addLabTest",
                                "data": [
                                    uuidv4(),
                                    `${doctor}`,
                                    `${patient}`,
                                    `8`,
                                    URL
                                ]
                            })
                        }

                        toggle()

                    }}>Admit Patients</Button>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
export default ReviewPatient;