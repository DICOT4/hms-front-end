import {Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row} from "reactstrap";
import {useHistory} from "react-router-dom";
import {useState} from "react";
import {createUser} from "../../http/httpService";

export default function AddUser() {
    const [data, setData] = useState({role: 'doctor'});
    const [loading, setLoading] = useState(null);

    const history = useHistory();

    const handleSubmit = async e => {
        e.preventDefault();
        setLoading('saving');
        try {
            await createUser({
                ...data,
                userName: Date.now().toString()
            });
            history.push('index');
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
                                <h2 className="mb-0">Add User</h2>
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
                                                       placeholder="" className="form-control-alternative"
                                                       onChange={e => setData({
                                                           ...data,
                                                           [e.target.name]: e.target.value
                                                       })}
                                                />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="role">Role</Label>
                                                <Input type="select" name="role" id="role"
                                                       value={data.role}
                                                       className="form-control-alternative" required
                                                       onChange={e => setData({
                                                           ...data,
                                                           [e.target.name]: e.target.value
                                                       })}
                                                >
                                                    {
                                                        ["doctor", "reception", "pharmacy", "laboratory", "superAdmin"].map(i =>
                                                            <option>{i}</option>)
                                                    }
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="email">Email</Label>
                                                <Input type="email" id="email" name="email"
                                                       value={data.email}
                                                       required
                                                       className="form-control-alternative"
                                                       onChange={e => setData({
                                                           ...data,
                                                           [e.target.name]: e.target.value
                                                       })}
                                                />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="password">Password</Label>
                                                <Input type="text" id="password"
                                                       value={data.password} name="password"
                                                       required
                                                       placeholder="" className="form-control-alternative"
                                                       onChange={e => setData({
                                                           ...data,
                                                           [e.target.name]: e.target.value
                                                       })}
                                                />
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