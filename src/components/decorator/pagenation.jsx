import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
// import Pagination from '@mui/material/Pagination';
import "./pagination.css"
export default function PaginationControlled({ total, page, setPage }) {
    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <>
            <div className="pagination-container" style={{
                display: "flex", justifyContent: "center", margin: "20px 0"
            }}>
                <Stack spacing={2}>
                    <Pagination count={total} page={page} onChange={handleChange} color="primary" />
                </Stack>
            </div >
        </>
    );
}