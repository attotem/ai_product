import React from 'react'
import Header from '../Header/header'
import CustomerRow from "./category_data"
import './category.css';
function all_categories({ customers }) {

    const customersData = [
        {
            name: 'Jane Cooper',
            login: 'user1',
            phone: '(225) 555-0118',
            email: 'jane@microsoft.com',
            status: 'Active'
        },
        {
            name: 'Floyd Miles',
            login: 'user2',
            phone: '(205) 555-0100',
            email: 'floyd@yahoo.com',
            status: 'Inactive'
        },
        {
            name: 'Ronald Richards',
            login: 'user3',
            phone: '(302) 555-0107',
            email: 'ronald@adobe.com',
            status: 'Inactive'
        },
        {
            name: 'Marvin McKinney',
            login: 'user4',
            phone: '(252) 555-0126',
            email: 'marvin@tesla.com',
            status: 'Active'
        },
        {
            name: 'Jerome Bell',
            login: 'user5',
            phone: '(629) 555-0129',
            email: 'jerome@google.com',
            status: 'Active'
        },
        {
            name: 'Kathryn Murphy',
            login: 'user6',
            phone: '(406) 555-0120',
            email: 'kathryn@microsoft.com',
            status: 'Active'
        },
        {
            name: 'Jacob Jones',
            login: 'user7',
            phone: '(208) 555-0112',
            email: 'jacob@yahoo.com',
            status: 'Active'
        },
        {
            name: 'Kristin Watson',
            login: 'user8',
            phone: '(704) 555-0127',
            email: 'kristin@facebook.com',
            status: 'Inactive'
        }
    ];


    return (
        <>
            <Header />
            <div className="container mt-5">
                <h2>All Customers</h2>
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className='table_header'>Customer Name</th>
                                <th className='table_header'>Login</th>
                                <th className='table_header'>Phone Number</th>
                                <th className='table_header'>Email</th>
                                <th className='table_header'>Password</th>
                                <th className='table_header'>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customersData.map((customer, index) => (
                                <CustomerRow key={index} {...customer} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </>

    )
}

export default all_categories