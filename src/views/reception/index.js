import {Card, CardHeader, Col, Container, Row} from "reactstrap";
import {useEffect, useState} from "react";
import PatientsTable from "./components/PatientsTable";
import {getReceptionPatients} from "../../http/httpService";


export default function Index(props) {
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState('datatable');

    useEffect(async () => {
        try {
            const response = await getReceptionPatients();
            const data = response.data.data;

            data.patients.sort((a, b) => a.updatedAt < b.updatedAt).slice(0, 50);

            setPatients(data.patients);
        } catch (e) {
            console.log(e);
        }
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
                                <h2 className="mb-0">Welcome, Reception!</h2>
                            </CardHeader>
                        </Card>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col>
                        <PatientsTable title="Recent Patients" data={patients} loading={loading === 'datatable'}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}