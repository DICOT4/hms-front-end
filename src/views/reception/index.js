import {
    Button,
    Card,
    CardHeader,
    Col,
    Container,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Row,
    Spinner
} from "reactstrap";
import DataTable from 'react-data-table-component';
import {useEffect, useState} from "react";


export default function Index(props) {
    const [fullTableData, setFullTableData] = useState([]);
    const [tableData, setTableData] = useState([]);
    const [loading, setLoading] = useState('datatable');

    useEffect(() => {
        setLoading(null);
    }, []);

    const handleSearch = e => {
        const _searchText = e.target.value;

        if (_searchText)
            setTableData(fullTableData.filter(_row => _row.name.toLowerCase().startsWith(_searchText.toLowerCase()) || _row.cnic.startsWith(_searchText)));
        else
            setTableData(fullTableData);
    }

    return (
        <>
            <div className="header bg-gradient-info pb-8 pt-5 pt-md-8"/>
            <Container className="mt--9" fluid>
                <Row className="mb-4">
                    <Col>
                        <Card className="shadow">
                            <CardHeader className="border-0 d-flex justify-content-between align-items-center">
                                <h2 className="mb-0">Receptionist</h2>
                            </CardHeader>
                        </Card>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col>
                        <Card className="shadow">
                            <CardHeader className="border-0 d-flex justify-content-between align-items-center">
                                <h2 className="mb-0">Patients</h2>
                                <div className="d-flex justify-content-start align-items-center">
                                    <InputGroup className="input-group-alternative" style={{maxWidth: '300px'}}>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="fas fa-search"/>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input className="form-control-alternative" type="search"
                                               placeholder="Search by Name/CNIC" onChange={handleSearch}/>
                                    </InputGroup>
                                    <Button color="primary" className="ml-2">
                                        <i className="fas fa-plus"/>
                                    </Button>
                                </div>
                            </CardHeader>
                            <DataTable
                                columns={[
                                    {name: 'Name', wrap: true, sortable: true, selector: row => row.name},
                                    {name: 'CNIC', wrap: true, selector: row => row.cnic},
                                ]}
                                data={tableData}
                                progressPending={loading === 'datatable'}
                                progressComponent={<div className="py-5"><Spinner color="primary"/></div>}
                                striped
                                pagination
                                responsive
                                persistTableHead
                                highlightOnHover
                            />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}