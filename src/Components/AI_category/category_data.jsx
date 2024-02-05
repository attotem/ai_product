import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomerRow = ({ name, login, phone, email, status }) => {
    const statusClass = status === 'Active' ? 'status_active' : 'status_inactive';

    return (
        <tr >
            <td class="py-3 table_text align-middle">{name}</td>
            <td class="py-3 table_text align-middle">{login}</td>
            <td class="py-3 table_text align-middle">{phone}</td>
            <td class="py-3 table_text align-middle">{email}</td>
            <td class="py-3 table_text align-middle">**********</td>
            <td class="py-3 table_text align-middle"><div className={statusClass}>{status}</div></td>
        </tr>
    );
};
export default CustomerRow;
