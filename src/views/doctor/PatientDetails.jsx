import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";


export default function PatientDetails({ data: { cnic, contact, dob, name, guardian } }) {
    //
    return (
        <>
            <div className="header bg-gradient-info pb-8 pt-5 pt-md-8" />
            <Container className="mt--9" fluid>
                <Row className="mb-4">
                    <Col>
                        <Card className="shadow">
                            <CardBody>
                                <Row className="mb-4">
                                    <Col>
                                        <h2 className="mb-0">Patient Details</h2>
                                    </Col>
                                </Row>
                                <Row className="mb-4">
                                    <Col md={6}>
                                        <div>
                                            <p className="mb-0 small text-muted">CNIC</p>
                                            <h4>{cnic}</h4>
                                        </div>
                                        <div>
                                            <p className="mb-0 small text-muted">Name</p>
                                            <h4>{name}</h4>
                                        </div>
                                        <div>
                                            <p className="mb-0 small text-muted">DOB</p>
                                            <h4>{dob}</h4>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div>
                                            <p className="mb-0 small text-muted">Guardian</p>
                                            <h4>{guardian}</h4>
                                        </div>
                                        <div>
                                            <p className="mb-0 small text-muted">Emergency Contact</p>
                                            <h4>{contact}</h4>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="mb-4">
                                    <Col>
                                        <h2 className="mb-0">Medical History</h2>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6} className="pr-md-5">
                                        <h4 className="font-weight-light">Prescriptions</h4>
                                        <hr className="mt-0 mb-3" />

                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex justify-content-start">
                                                <div className="mr-5">
                                                    <p className="mb-0 small text-muted">Date</p>
                                                    <h4>21/09/21</h4>
                                                </div>
                                                <div>
                                                    <p className="mb-0 small text-muted">Prescribed By</p>
                                                    <h4>Dr. Hassan Amjad</h4>
                                                </div>
                                            </div>
                                            <Button color="primary" size="sm">View Prescription</Button>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex justify-content-start">
                                                <div className="mr-5">
                                                    <p className="mb-0 small text-muted">Date</p>
                                                    <h4>05/03/22</h4>
                                                </div>
                                                <div>
                                                    <p className="mb-0 small text-muted">Prescribed By</p>
                                                    <h4>Dr. Faisal Khan</h4>
                                                </div>
                                            </div>
                                            <Button color="primary" size="sm">View Prescription</Button>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex justify-content-start">
                                                <div className="mr-5">
                                                    <p className="mb-0 small text-muted">Date</p>
                                                    <h4>19/04/22</h4>
                                                </div>
                                                <div>
                                                    <p className="mb-0 small text-muted">Prescribed By</p>
                                                    <h4>Dr. Faisal Khan</h4>
                                                </div>
                                            </div>
                                            <Button color="primary" size="sm">View Prescription</Button>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <h4 className="font-weight-light">Lab Tests</h4>
                                        <hr className="mt-0 mb-3" />

                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex justify-content-start">
                                                <div className="mr-5">
                                                    <p className="mb-0 small text-muted">Date</p>
                                                    <h4>04/10/21</h4>
                                                </div>
                                                <div>
                                                    <p className="mb-0 small text-muted">Prescribed By</p>
                                                    <h4>Dr. Hassan Amjad</h4>
                                                </div>
                                            </div>
                                            <Button color="primary" size="sm">View Reports</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}