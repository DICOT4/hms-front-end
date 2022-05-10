import {Button, Card, CardHeader, Spinner} from "reactstrap";
import DataTable from 'react-data-table-component';
import {useState} from "react";


export default function PatientsTable({title, data, loading}) {
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
            <CardHeader className="border-0">
                <h2 className="mb-0">{title}</h2>
            </CardHeader>
            <DataTable
                columns={[
                    {name: 'CNIC', wrap: true, selector: row => row.cnic},
                    {name: 'Name', wrap: true, sortable: true, selector: row => row.name},
                    {name: 'Guardian', wrap: true, selector: row => row.guardian},
                    {name: 'DOB', wrap: true, selector: row => row.dateOfBirth},
                    {name: 'Emergency Contact', wrap: true, selector: row => row.emergencyContact},
                    {
                        name: '', cell: row => (
                            <div>
                                <Button color="primary">

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