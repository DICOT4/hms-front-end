import { Button, Card, CardHeader, Spinner } from "reactstrap";
import DataTable from 'react-data-table-component';
import { useEffect, useState } from "react";
import moment from "moment";
import AdmitPatients from "./AdmitPatients";
import { getDoctors } from "../../../http/httpService";


export default function PatientsTable({ title, data, loading }) {
    const [tableData, setTableData] = useState([]);
    const [viewModal, setModalVisibility] = useState(false);
    const [selectedPatient, setSelectedPatient] = useState([]);

    const [doctors, setDoctors] = useState([]);


    useEffect(async () => {
        try {
            const response = await getDoctors();
            const data = response.data.data;
            data.users.sort((a, b) => a.name > b.name);
            setDoctors(data.users);
        } catch (e) {
            console.log(e);
        }
        // setLoading(null);    
    }, []);


    useEffect(() => {
        setTableData(data);
    }, [data]);
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
                    { name: 'CNIC', wrap: true, selector: row => row.cnic },
                    { name: 'Name', wrap: true, sortable: true, selector: row => row.name },
                    { name: 'Guardian', wrap: true, selector: row => row.guardian },
                    {
                        name: 'Age',
                        wrap: true,
                        cell: row => <>{moment().diff(moment(row.dob, "YYYY-MM-DD"), 'years')} years</>
                    },
                    { name: 'Created', wrap: true, selector: row => moment(row.createdAt).fromNow() },
                    { name: 'Updated', wrap: true, selector: row => moment(row.updatedAt).fromNow() },
                    { name: 'Er. Contact', wrap: true, selector: row => row.contact },
                    {
                        name: '', cell: row => (
                            <div>
                                <Button color="primary" size="sm" onClick={() => {
                                    setSelectedPatient(row.id)
                                    setModalVisibility(true)
                                }}>
                                    Admit
                                </Button>
                            </div>
                        )
                    }
                ]}
                data={tableData}
                progressPending={loading}
                progressComponent={<div className="py-5"><Spinner color="primary" /></div>}
                striped
                pagination
                responsive
                persistTableHead
                highlightOnHover
            />
            {viewModal && <AdmitPatients modal={viewModal} Patient={selectedPatient} doctors={doctors} toggle={() => { setModalVisibility(false) }} />}
        </Card>


    )
}