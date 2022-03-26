import {Card, CardHeader, Col, Container, Row} from "reactstrap";


export default function Index(props) {

    return (
        <>
            <div className="header bg-gradient-info pb-8 pt-5 pt-md-8"/>
            <Container className="mt--9" fluid>
                <Row className="mb-4">
                    <Col>
                        <Card className="shadow">
                            <CardHeader className="border-0 d-flex justify-content-between align-items-center">
                                <h2 className="mb-0">Doctor</h2>
                            </CardHeader>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}