import {Card, CardHeader, Col, Container, Row} from "reactstrap";
import {useEffect, useState} from "react";
import PrescriptionsTable from "./components/prescriptionsTable";
import {getPharmacyData} from "../../http/httpService";


export default function Index({user}) {
    const [prescriptions, setPrescriptions] = useState([]);
    const [loading, setLoading] = useState('datatable');

    useEffect(async () => {
        try {
            const {id} = JSON.parse(localStorage.getItem("_dicota-r"))
            const response = await getPharmacyData(id);
            const data = response.data.data;
            console.log(data);
            setPrescriptions(data.prescriptions);
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
                                <h2 className="mb-0">Welcome, Pharmacy!</h2>
                            </CardHeader>
                        </Card>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col>
                        <PrescriptionsTable title="New Prescriptions" data={prescriptions}
                                            loading={loading === 'datatable'}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}