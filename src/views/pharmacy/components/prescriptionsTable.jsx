import {Button, Card, CardHeader, Input, InputGroup, InputGroupAddon, InputGroupText, Spinner} from "reactstrap";
import DataTable from 'react-data-table-component';
import {useState} from "react";


export default function PrescriptionsTable({title, data, loading}) {
    const [tableData, setTableData] = useState([]);

    const handleSearch = e => {
        const _searchText = e.target.value;

        if (_searchText)
            setTableData(data.filter(_row => _row.name.toLowerCase().startsWith(_searchText.toLowerCase()) || _row.cnic.startsWith(_searchText)));
        else
            setTableData(data);
    }

    return (
        <Card className="shadow">
            <CardHeader className="border-0 d-flex justify-content-between align-items-center">
                <h2 className="mb-0">{title}</h2>
                <div className="d-flex justify-content-start align-items-center">
                    <InputGroup className="input-group-alternative d-none" style={{maxWidth: '300px'}}>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                                <i className="fas fa-search"/>
                            </InputGroupText>
                        </InputGroupAddon>
                        <Input className="form-control-alternative" type="search"
                               placeholder="Search by Name/CNIC" onChange={handleSearch}/>
                    </InputGroup>
                </div>
            </CardHeader>
            <DataTable
                columns={[
                    {name: 'CNIC', wrap: true, selector: row => row.cnic},
                    {name: 'Name', wrap: true, sortable: true, selector: row => row.name},
                    {name: 'Doctor', wrap: true, selector: row => row.doctor},
                    {name: 'Prescribed At', wrap: true, selector: row => row.prescribedAt},
                    {name: 'Submitted At', wrap: true, selector: row => row.submittedAt},
                    {
                        name: '', cell: row => (
                            <div>
                                <Button color="secondary">
                                    View
                                </Button>
                                <Button color="primary">
                                    Submit
                                </Button>
                            </div>
                        )
                    }
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
    )
}