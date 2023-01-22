
import React, { useEffect, useState } from "react";

const CliOverview = () => {
    const [listOfCustomers, setListOfCustomers] = useState([]);

    const fetchData = async () => {
        const response = await fetch('https://localhost:7264/api/customers')
        const listOfCustomers = await response.json()
        setListOfCustomers(listOfCustomers.data)
        console.log(listOfCustomers.data);
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div className="tab-pane fade show active clientes-overview pt-3" id="clientes-overview">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Nuit</th>
                        <th scope="col">Type</th>
                        <th scope="col">Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listOfCustomers?.map(customer =>
                            <tr key={customer.id}>
                                <td>{customer.id}</td>
                                <td>{customer.name}</td>
                                <td>{customer.nuit}</td>
                                <td>{customer.type}</td>
                                <td>{customer.address}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default CliOverview
