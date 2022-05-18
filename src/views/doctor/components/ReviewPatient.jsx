import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {Button, FormGroup, Label, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import {Checkbox, Input} from 'antd';
import {sendWeb3Data} from '../../../http/httpService'

function ReviewPatient({modal, toggle, doctor, patient}) {

    const [URL, setURL] = useState("https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf");
    const [hasMedicine, setHasMedicine] = useState(false);
    const [hasLabTest, setHasLabTest] = useState(false);


    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Review Patient</ModalHeader>

                <ModalBody>
                    <div>
                        <div className="mb-3">
                            <FormGroup>
                                <Label for="file">File URL</Label>
                                <Input
                                    type="text"
                                    name="file"
                                    id="file"
                                    value={URL}
                                    className="form-control-alternative"
                                    required
                                    onChange={e => setURL(e.target.value)}
                                />
                            </FormGroup>
                        </div>
                        <div>
                            <Checkbox checked={hasMedicine} onChange={
                                () => {
                                    setHasMedicine(!hasMedicine)
                                }
                            }> Has Medicine</Checkbox>
                        </div>
                        <div>

                            <Checkbox checked={hasLabTest} onChange={
                                () => {
                                    setHasLabTest(!hasLabTest)
                                }
                            }> Has Lab-Test</Checkbox>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={async () => {

                        if (hasMedicine) {
                            await sendWeb3Data({
                                "functionName": "addPrescription",
                                "data": [
                                    uuidv4(),
                                    `${doctor}`,
                                    `${patient}`,
                                    '2', // default id
                                    URL
                                ]
                            })
                        }
                        if (hasLabTest) {
                            await sendWeb3Data({
                                "functionName": "addLabTest",
                                "data": [
                                    uuidv4(),
                                    `${doctor}`,
                                    `${patient}`,
                                    `8`, // default id
                                    URL
                                ]
                            })
                        }

                        toggle()

                    }}>Admit</Button>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default ReviewPatient;