import { Fragment } from "react";
// import classes from './RequestTable.module.css';

const DUMMY_REQUEST = [
    {
        req_id: "202107140813",
        company: "GGP Group of Companies",
        contact_person: "Gerald Gwapo Galanida",
        contact_no: "09176564054",
        status: "Open",
    },
    {
        req_id: "202107140823",
        company: "GGP Group of Companies 2",
        contact_person: "Gwapo Galanida",
        contact_no: "09176564054",
        status: "Ongoing",
    },
    {
        req_id: "202107140913",
        company: "GGP Group of Companies 3",
        contact_person: "Gwapo Gerald Galanida",
        contact_no: "09176564054",
        status: "Cancelled",
    },
    {
        req_id: "202107140914",
        company: "GGP Group of Companies 4",
        contact_person: "Gwapo Gerald Galanida",
        contact_no: "09176564054",
        status: "Closed",
    },
];

function RequestTable(props) {
    let count = 1
    
    return (
        <Fragment>
            <table className="table table-hover table-md">
                <thead className="table-info table-bordered">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">req_id</th>
                        <th scope="col">Company</th>
                        <th scope="col">Contact Person</th>
                        <th scope="col">Contact No.</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                {DUMMY_REQUEST.map((requestItem) => (
                    <tr key={requestItem.req_id}>
                        <td>{count++}</td>
                        <td>{requestItem.req_id}</td>
                        <td>{requestItem.company}</td>
                        <td>{requestItem.contact_person}</td>
                        <td>{requestItem.contact_no}</td>
                        <td>{requestItem.status}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </Fragment>
    )
}

export default RequestTable;