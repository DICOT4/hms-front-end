import {Card, CardHeader, Col, Container, Row} from "reactstrap";
import {useEffect, useState} from "react";
import PatientsTable from "./components/PatientsTable";
import {getDoctorData} from '../../http/httpService'


export default function Index(props) {
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState('datatable');
    const [doctor, setDoctor] = useState([]);

    useEffect(async () => {
        try {
            const {id} = JSON.parse(localStorage.getItem("_dicota-r"))
            const response = await getDoctorData(id);
            const data = response.data.data;
            data.patients.sort((a, b) => a.createdAt > b.createdAt);
            data.patients = data.patients.filter((a) => a.status === '1');
            console.log(data);
            setPatients(data.patients);
            setDoctor(id)
        } catch (e) {
            console.log(e);
        }
        setLoading(null);
    }, []);

    return (
        <>
            <div className="header bg-gradient-info pb-8 pt-5 pt-md-8" />
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
                        <PatientsTable title="Upcoming Patients" data={patients} doctor={doctor} loading={loading === 'datatable'} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}