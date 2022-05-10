import {Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row} from "reactstrap";
import {useHistory} from "react-router-dom";

export default function AddPatient() {

    const history = useHistory();

    const handleSubmit = e => {

    }

    return (
        <>
            <div className="header bg-gradient-info pb-8 pt-5 pt-md-8"/>
            <Container className="mt--9" fluid>
                <Row className="mb-4 justify-content-center">
                    <Col lg={8}>
                        <Card className="shadow">
                            <CardHeader className="border-0 d-flex justify-content-between align-items-center">
                                <h2 className="mb-0">Add Patient</h2>
                            </CardHeader>
                            <CardBody>
                                <Form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="name">Name</Label>
                                                <Input type="text" id="name"
                                                    // value={name || ""}
                                                       required
                                                       maxLength={30}
                                                       onInput={object => {
                                                           if (object.target.value.length > object.target.maxLength)
                                                               object.target.value = object.target.value.slice(0, object.target.maxLength)
                                                       }}
                                                       placeholder="" className="form-control-alternative"
                                                    // onChange={e => setPassingScore(e.target.value)}
                                                />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="guardianName">Guardian Name</Label>
                                                <Input type="text" id="guardianName"
                                                    // value={name || ""}
                                                       required
                                                       maxLength={30}
                                                       onInput={object => {
                                                           if (object.target.value.length > object.target.maxLength)
                                                               object.target.value = object.target.value.slice(0, object.target.maxLength)
                                                       }}
                                                       placeholder="" className="form-control-alternative"
                                                    // onChange={e => setPassingScore(e.target.value)}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <Row>
                                                <Col lg={6}>
                                                    <FormGroup>
                                                        <Label for="cnic">CNIC</Label>
                                                        <Input type="text" id="cnic"
                                                            // value={cnic || ""}
                                                               required
                                                               maxLength={13}
                                                               onInput={object => {
                                                                   if (object.target.value.length > object.target.maxLength)
                                                                       object.target.value = object.target.value.slice(0, object.target.maxLength)
                                                               }}
                                                               placeholder="" className="form-control-alternative"
                                                            // onChange={e => setPassingScore(e.target.value)}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col lg={6}>
                                                    <FormGroup>
                                                        <Label for="emergencyContact">Emergency Contact</Label>
                                                        <Input type="text" id="emergencyContact"
                                                            // value={cnic || ""}
                                                               required
                                                               maxLength={13}
                                                               onInput={object => {
                                                                   if (object.target.value.length > object.target.maxLength)
                                                                       object.target.value = object.target.value.slice(0, object.target.maxLength)
                                                               }}
                                                               placeholder="" className="form-control-alternative"
                                                            // onChange={e => setPassingScore(e.target.value)}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <FormGroup>
                                                <Label for="">Date of Birth</Label>
                                                <Row>
                                                    <Col sm={4}>
                                                        <Input type="select" name="Tab Name" id="tabName"
                                                            // value={levelName}
                                                               className="form-control-alternative" required
                                                            // onChange={e => setLevelName(e.target.value)}
                                                        >
                                                            {
                                                                [1, 2, 3, 4, 5, 6, 7].map(i => <option>{i}</option>)
                                                            }
                                                        </Input>
                                                    </Col>
                                                    <Col sm={4}>
                                                        <Input type="select" name="Tab Name" id="tabName"
                                                            // value={levelName}
                                                               className="form-control-alternative" required
                                                            // onChange={e => setLevelName(e.target.value)}
                                                        >
                                                            {
                                                                ["Jan", "Feb", "Mar"].map(i => <option>{i}</option>)
                                                            }
                                                        </Input>
                                                    </Col>
                                                    <Col sm={4}>
                                                        <Input type="select" name="Tab Name" id="tabName"
                                                            // value={levelName}
                                                               className="form-control-alternative" required
                                                            // onChange={e => setLevelName(e.target.value)}
                                                        >
                                                            {
                                                                [2022].map(i => <option>{i}</option>)
                                                            }
                                                        </Input>
                                                    </Col>
                                                </Row>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row className="mt-5">
                                        <Col className="text-center">
                                            <Button color="danger" onClick={() => history.goBack()}>Cancel</Button>
                                            <Button color="primary" type="submit">Save</Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}