import {Col, Container, Row} from "reactstrap";
import {useEffect, useState} from "react";
import LabTestsTable from "./components/LabTestsTable";
import {getLaboratoryData} from "../../http/httpService";


export default function LabTests(props) {
    const [labTests, setLabTests] = useState([]);
    const [loading, setLoading] = useState('datatable');

    useEffect(async () => {
        try {
            const {id} = JSON.parse(localStorage.getItem("_dicota-r"))
            const response = await getLaboratoryData(id);
            const data = response.data.data;
            // data.patients.sort((a, b) => a.createdAt > b.createdAt);
            console.log(data);
            setLabTests(data.labtests);
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
                        <LabTestsTable title="Lab Tests" data={labTests} loading={loading === 'datatable'}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}