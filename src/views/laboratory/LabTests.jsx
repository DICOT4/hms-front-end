import {Col, Container, Row} from "reactstrap";
import {useEffect, useState} from "react";
import LabTestsTable from "./components/LabTestsTable";


export default function LabTests(props) {
    const [labTests, setLabTests] = useState([]);
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
                        <LabTestsTable title="Lab Tests" data={labTests} loading={loading === 'datatable'}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}