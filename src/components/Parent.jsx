import React, { useState, useEffect } from 'react';
import Search from './Search';
import Users from './Users';
// import { User } from '../types/User'; // Type import removed
import usersData from '../data/users.json';

const Parent = () => {
    const [users] = useState(usersData);
    const [filteredUsers, setFilteredUsers] = useState(users);

    const handleSearch = (email) => {
        if (!email) {
            setFilteredUsers([...users]);
        } else {
            const lowerEmail = email.toLowerCase();
            const filtered = users.filter((user) =>
                user.email.toLowerCase().includes(lowerEmail)
            );
            setFilteredUsers(filtered);
        }
    };

    useEffect(() => {
        setFilteredUsers([...users]);
    }, [users]);

    return (
        <div className="d-flex justify-content-center align-items-start min-vh-100 px-5">
            <div className="bg-light border border-secondary rounded shadow-sm p-4 userDiv">
                <h1 className="text-dark text-center mb-4">Users list</h1>
                <Search onSearch={handleSearch} />
                <Users users={filteredUsers} />
            </div>
        </div>
    );
};

export default Parent;

