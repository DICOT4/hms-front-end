import {Card, CardHeader, Col, Container, Row} from "reactstrap";
import {useEffect, useState} from "react";
import PatientsTable from "./components/PatientsTable";


export default function Index(props) {
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState('datatable');

    useEffect(() => {
        setLoading(null);
    }, []);

    return (
        <>
            <div className="header bg-gradient-info pb-8 pt-5 pt-md-8"/>
            <Container className="mt--9" fluid>
                <Row className="mb-4">
                    <Col>
                        <Card className="shadow">
                            <CardHeader className="border-0 d-flex justify-content-between align-items-center">
                                <h2 className="mb-0">Welcome, Doctor!</h2>
                            </CardHeader>
                        </Card>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col>
                        <PatientsTable title="Upcoming Patients" data={patients} loading={loading === 'datatable'}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}