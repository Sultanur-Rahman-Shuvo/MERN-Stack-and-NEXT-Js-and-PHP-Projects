import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Pagination = () => {
    const [tableData, setTableData] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const indexOfLastItem = currentPage * rowsPerPage;
    const indexOfFirstItem = indexOfLastItem - rowsPerPage;
    const currentItems = tableData?.users?.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(tableData?.total / rowsPerPage);

    useEffect(() => {
        setIsLoading(true);
        axios.get('https://dummyjson.com/users')
            .then((res) => {
                setTableData(res?.data);
                setError(null);
            })
            .catch((err) => setError(err.message))
            .finally(() => setIsLoading(false));
    }, []);

    const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
    const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    const handlePageClick = (pageNumber) => setCurrentPage(pageNumber);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <select value={rowsPerPage} onChange={(e) => setRowsPerPage(Number(e.target.value))}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
            </select>

            {currentItems?.length > 0 ? (
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((value, index) => (
                            <tr key={index}>
                                <td>{value.firstName}</td>
                                <td>{value.email}</td>
                                <td>{value.gender}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No data available.</p>
            )}

            <div className='pagination'>
                <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>First</button>
                <button onClick={handlePrev} disabled={currentPage === 1}>Prev</button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageClick(index + 1)}
                        className={currentPage === index + 1 ? 'active' : ''}
                    >
                        {index + 1}
                    </button>
                ))}
                <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
                <button onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages}>Last</button>
            </div>
        </div>
    );
};

export default Pagination;
