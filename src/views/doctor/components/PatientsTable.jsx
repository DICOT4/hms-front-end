import React, {useState} from 'react';

import {Button, Card, CardHeader, Spinner} from "reactstrap";
import DataTable from "react-data-table-component";
import ReviewPatient from './ReviewPatient'
import moment from "moment";
import {useHistory} from "react-router-dom";

export default function PatientsTable({title, data, loading, doctor}) {
    const [viewModal, setModalVisibility] = useState(false);
    const [selectedPatients, setSelectedPatients] = useState('');
    const [selectedPatientsDetails, setSelectedPatientsDetails] = useState({});

    const history = useHistory();

    return (
        <Card className="shadow">
            <CardHeader className="border-0 d-flex justify-content-between align-items-center">
                <h2 className="mb-0">{title}</h2>
            </CardHeader>
            <DataTable
                columns={[
                    {name: 'CNIC', wrap: true, selector: row => row.cnic},
                    {name: 'Name', wrap: true, sortable: true, selector: row => row.name},
                    {name: 'Age', wrap: true, selector: row => moment(row.dob).toNow(true)},
                    {name: 'Date/Time', wrap: true, selector: row => moment(row.createdAt).fromNow()},
                    {
                        name: '', cell: row => (
                            <div>
                                <Button color="secondary" size="sm" onClick={() => {
                                    history.push(`patients/${row.id}`)
                                }}>
                                    View History
                                </Button>
                                {title === 'Upcoming Patients' && <Button color="primary" size="sm" onClick={() => {
                                    setSelectedPatients(row.id)
                                    setModalVisibility(true)
                                }}>
                                    Prescribe
                                </Button>}
                            </div>
                        )
                    }
                ]}
                data={data}
                progressPending={loading}
                progressComponent={<div className="py-5"><Spinner color="primary" /></div>}
                striped
                pagination
                responsive
                persistTableHead
                highlightOnHover
            />
            {viewModal && <ReviewPatient modal={viewModal} doctor={doctor} patient={selectedPatients} toggle={() => { setModalVisibility(false) }} />}
        </Card>
    )
}