import {Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row} from "reactstrap";
import {useHistory} from "react-router-dom";
import {useState} from "react";
import {createPatient} from "../../http/httpService";
import moment from "moment";

export default function AddPatient() {
    const [data, setData] = useState({dd: '1', mm: '1', yyyy: '2000'});
    const [loading, setLoading] = useState(null);

    const history = useHistory();

    const handleSubmit = async event => {
        event.preventDefault();
        setLoading('saving');
        try {
            const dob = data.dd + '-' + data.mm + '-' + data.yyyy;

            delete data.dd;
            delete data.mm;
            delete data.yyyy;

            await createPatient({
                ...data,
                dob: moment(dob, 'D-M-YYYY').format('YYYY-MM-DD')
            });
            history.push('/');
        } catch (e) {
            console.log(e);
        }
        setLoading(null);
    }

    return (
        <>
            <div className="header bg-gradient-info pb-8 pt-5 pt-md-8"/>
            <Container className="mt--9" fluid>
                <Row className="mb-4 justify-content-center">
                    <Col lg={8}>
                        <Card className="shadow">
                            <CardHeader className="border-0 d-flex justify-content-between align-items-center">
                                <h2 className="mb-0">Add Patient</h2>
                            </CardHeader>
                            <CardBody>
                                <Form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="name">Name</Label>
                                                <Input type="text" id="name" name="name"
                                                       value={data.name}
                                                       required
                                                       className="form-control-alternative"
                                                       onChange={e => setData({
                                                           ...data,
                                                           [e.target.name]: e.target.value
                                                       })}
                                                />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="guardianName">Guardian Name</Label>
                                                <Input type="text" name="guardian" id="guardian"
                                                       value={data.guardian}
                                                       required
                                                       className="form-control-alternative"
                                                       onChange={e => setData({
                                                           ...data,
                                                           [e.target.name]: e.target.value
                                                       })}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <Row>
                                                <Col lg={6}>
                                                    <FormGroup>
                                                        <Label for="cnic">CNIC</Label>
                                                        <Input type="number" id="cnic"
                                                               value={data.cnic} name="cnic"
                                                               required
                                                               className="form-control-alternative"
                                                               onChange={e => setData({
                                                                   ...data,
                                                                   [e.target.name]: e.target.value
                                                               })}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col lg={6}>
                                                    <FormGroup>
                                                        <Label for="emergencyContact">Emergency Contact</Label>
                                                        <Input type="number" id="emergencyContact"
                                                               value={data.contact} name="contact"
                                                               required
                                                               className="form-control-alternative"
                                                               onChange={e => setData({
                                                                   ...data,
                                                                   [e.target.name]: e.target.value
                                                               })}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <FormGroup>
                                                <Label for="">Date of Birth</Label>
                                                <Row>
                                                    <Col sm={4}>
                                                        <Input type="select" name="dd" id="tabName"
                                                               value={data.dd}
                                                               className="form-control-alternative" required
                                                               onChange={e => setData({
                                                                   ...data,
                                                                   [e.target.name]: e.target.value
                                                               })}
                                                        >
                                                            {
                                                                [...(Array.from({length: 31}, (_, i) => i + 1))]
                                                                    .map(i => <option>{i}</option>)
                                                            }
                                                        </Input>
                                                    </Col>
                                                    <Col sm={4}>
                                                        <Input type="select" name="mm" id="mm"
                                                               value={data.mm}
                                                               className="form-control-alternative" required
                                                               onChange={e => setData({
                                                                   ...data,
                                                                   [e.target.name]: e.target.value
                                                               })}
                                                        >
                                                            {
                                                                [...(Array.from({length: 12}, (_, i) => i + 1))]
                                                                    .map(i => <option>{i}</option>)
                                                            }
                                                        </Input>
                                                    </Col>
                                                    <Col sm={4}>
                                                        <Input type="select" name="yyyy" id="yyyy"
                                                               value={data.yyyy}
                                                               className="form-control-alternative" required
                                                               onChange={e => setData({
                                                                   ...data,
                                                                   [e.target.name]: e.target.value
                                                               })}
                                                        >
                                                            {
                                                                [...(Array.from({length: 101}, (_, i) => i + 1922))]
                                                                    .map(i => <option>{i}</option>)
                                                            }
                                                        </Input>
                                                    </Col>
                                                </Row>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row className="mt-5">
                                        <Col className="text-center">
                                            <Button color="danger" onClick={() => history.goBack()}>Cancel</Button>
                                            <Button color="primary" type="submit"
                                                    disabled={loading === 'saving'}>Save</Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}