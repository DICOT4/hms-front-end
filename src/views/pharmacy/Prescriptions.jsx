import {Col, Container, Row} from "reactstrap";
import {useEffect, useState} from "react";
import PrescriptionsTable from "./components/prescriptionsTable";
import {getPharmacyData} from "../../http/httpService";


export default function LabTests(props) {
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
                        <PrescriptionsTable title="Prescriptions" data={prescriptions}
                                            loading={loading === 'datatable'}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}