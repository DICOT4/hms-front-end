import {Button, Card, CardHeader, Spinner} from "reactstrap";
import DataTable from "react-data-table-component";


export default function PatientsTable({title, data, loading}) {

    return (
        <Card className="shadow">
            <CardHeader className="border-0 d-flex justify-content-between align-items-center">
                <h2 className="mb-0">{title}</h2>
            </CardHeader>
            <DataTable
                columns={[
                    {name: 'CNIC', wrap: true, selector: row => row.cnic},
                    {name: 'Name', wrap: true, sortable: true, selector: row => row.name},
                    {name: 'DOB', wrap: true, selector: row => row.dateOfBirth},
                    {name: 'Date/Time', wrap: true, selector: row => row.timestamp},
                    {
                        name: '', cell: row => (
                            <div>
                                <Button color="primary">
                                    View
                                </Button>
                            </div>
                        )
                    }
                ]}
                data={data}
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