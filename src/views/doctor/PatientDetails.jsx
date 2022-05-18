import {Card, CardBody, Col, Container, Row} from "reactstrap";
import {useEffect, useState} from "react";
import {getPatientDetails} from "../../http/httpService";
import {useParams} from "react-router-dom";
import moment from "moment";


export default function PatientDetails() {
    const [data, setData] = useState({});

    useEffect(async () => {
        console.log(patientId);
        const response = await getPatientDetails(patientId);
        const _data = response.data.data;
        console.log({_data, ...(_data.patient)});
        setData({..._data, ...(_data.patient)});
    }, []);

    const {patientId} = useParams();

    return (
        <>
            <div className="header bg-gradient-info pb-8 pt-5 pt-md-8"/>
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
                                            <h4>{data.cnic}</h4>
                                        </div>
                                        <div>
                                            <p className="mb-0 small text-muted">Name</p>
                                            <h4>{data.name}</h4>
                                        </div>
                                        <div>
                                            <p className="mb-0 small text-muted">DOB</p>
                                            <h4>{data.dob}</h4>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div>
                                            <p className="mb-0 small text-muted">Guardian</p>
                                            <h4>{data.guardian}</h4>
                                        </div>
                                        <div>
                                            <p className="mb-0 small text-muted">Emergency Contact</p>
                                            <h4>{data.contact}</h4>
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
                                        <hr className="mt-0 mb-3"/>

                                        {
                                            data.prescriptions?.map(_prescription => (
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="d-flex justify-content-start">
                                                        <div className="mr-5">
                                                            <p className="mb-0 small text-muted">Date</p>
                                                            <h4>{moment(_prescription.createdAt).format('DD/MM/YY')}</h4>
                                                        </div>
                                                        <div>
                                                            <p className="mb-0 small text-muted">Prescribed By</p>
                                                            <h4>Dr. #{_prescription.doctorId}</h4>
                                                        </div>
                                                    </div>
                                                    <a href={_prescription.ipfsHash} className="btn btn-primary btn-sm"
                                                       target="_blank">View Prescription</a>
                                                </div>
                                            ))
                                        }
                                    </Col>
                                    <Col md={6}>
                                        <h4 className="font-weight-light">Lab Tests</h4>
                                        <hr className="mt-0 mb-3"/>

                                        {
                                            data.labtests?.map(_test => (
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="d-flex justify-content-start">
                                                        <div className="mr-5">
                                                            <p className="mb-0 small text-muted">Date</p>
                                                            <h4>{moment(_test.createdAt).format('DD/MM/YY')}</h4>
                                                        </div>
                                                        <div>
                                                            <p className="mb-0 small text-muted">Prescribed By</p>
                                                            <h4>Dr. #{_test.doctorId}</h4>
                                                        </div>
                                                    </div>
                                                    <a href={_test.ipfsHash} className="btn btn-primary btn-sm"
                                                       target="_blank">View Report</a>
                                                </div>
                                            ))
                                        }
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