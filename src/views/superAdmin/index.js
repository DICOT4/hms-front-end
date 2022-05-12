import {Card, CardHeader, Col, Container, Row, Spinner} from "reactstrap";
import DataTable from "react-data-table-component";
import {useEffect, useState} from "react";
import {getUsers} from "../../http/httpService";
import moment from "moment";


export default function Index(props) {
    const [data, setData] = useState([]);
    const [tableData, setTableData] = useState([]);
    const [loading, setLoading] = useState('datatable');

    useEffect(async () => {
        try {
            const response = await getUsers();
            const _data = response.data.data;
            setData(_data.users);
            setTableData(_data.users);
        } catch (e) {
            console.log(e);
        }
        setLoading(null);
    }, []);

    const handleSearch = e => {
        const _searchText = e.target.value;

        if (_searchText)
            setTableData(data.filter(_row => _row.name.toLowerCase().startsWith(_searchText.toLowerCase()) || _row.cnic.startsWith(_searchText)));
        else
            setTableData(data);
    }

    return (
        <>
            <div className="header bg-gradient-info pb-8 pt-5 pt-md-8"/>
            <Container className="mt--9" fluid>
                <Row className="mb-4">
                    <Col>
                        <Card className="shadow">
                            <CardHeader className="border-0 d-flex justify-content-between align-items-center">
                                <h2 className="mb-0">Super Admin</h2>
                            </CardHeader>
                        </Card>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col>
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <h2 className="mb-0">Users</h2>
                            </CardHeader>
                            <DataTable
                                columns={[
                                    {name: 'id', wrap: true, selector: row => row.id},
                                    {name: 'Name', wrap: true, sortable: true, selector: row => row.name},
                                    {name: 'Email', wrap: true, selector: row => row.email},
                                    // {name: 'Password', wrap: true, selector: row => row.password},
                                    {name: 'Role', wrap: true, selector: row => row.role},
                                    {name: 'Created', wrap: true, cell: row => moment(row.createdAt).fromNow()}
                                ]}
                                data={tableData}
                                progressPending={loading}
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