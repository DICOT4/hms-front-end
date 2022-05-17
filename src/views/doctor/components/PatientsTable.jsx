
import React, { useState } from 'react';

import { Button, Card, CardHeader, Spinner } from "reactstrap";
import DataTable from "react-data-table-component";
import ReviewPatient from './ReviewPatient'
import PatientDetails from '../PatientDetails'

export default function PatientsTable({ title, data, loading, doctor }) {
    const [viewModal, setModalVisibility] = useState(false);
    const [selectedPatients, setSelectedPatients] = useState('');
    const [selectedPatientsDetails, setSelectedPatientsDetails] = useState({});
    console.log("selectedPatientsDetails",selectedPatientsDetails)
    const [viewSelectedPatientsDetails, setViewSelectedPatientsDetails] = useState(false);
    return (
        <Card className="shadow">
            <CardHeader className="border-0 d-flex justify-content-between align-items-center">
                <h2 className="mb-0">{title}</h2>
            </CardHeader>
            <DataTable
                columns={[
                    { name: 'CNIC', wrap: true, selector: row => row.cnic },
                    { name: 'Name', wrap: true, sortable: true, selector: row => row.name },
                    { name: 'DOB', wrap: true, selector: row => row.dob },
                    { name: 'Date/Time', wrap: true, selector: row => row.activePatients.createdAt },
                    {
                        name: '', cell: row => (
                            <div>
                                <Button color="primary" onClick={() => {
                                    setSelectedPatientsDetails(row)
                                    setViewSelectedPatientsDetails(true)
                                }}>
                                    View
                                </Button>
                                {title === 'Upcoming Patients' && <Button color="primary" onClick={() => {
                                    setSelectedPatients(row.id)
                                    setModalVisibility(true)
                                }}>
                                    Submit
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
            {viewSelectedPatientsDetails && <PatientDetails data={selectedPatientsDetails}/>}
        </Card>
    )
}