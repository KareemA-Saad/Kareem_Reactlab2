import React from 'react';
// import { User } from '../types/User'; // Type import removed

const Users = ({ users }) => {
    return (
        <div className="container my-4">
            <div className="row justify-content-center">
                {users.map((user, index) => (
                    <div key={index} className="col-md-6 col-lg-4 mb-4">
                        <div className="card text-center shadow-sm">
                            <img
                                src={user.photo}
                                alt="User Photo"
                                className="card-img-top img-fluid user-photo"
                            />
                            <div className="card-body">
                                <div className="d-flex justify-content-center align-items-center mb-2">
                                    <span
                                        className="rounded-circle me-2 d-inline-block"
                                        style={{
                                            width: '15px',
                                            height: '15px',
                                            backgroundColor: user.verified === 'true' ? 'green' : 'red'
                                        }}
                                    />
                                </div>
                                <h5 className="card-title">
                                    {user.username.split(' ').map(word =>
                                        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                                    ).join(' ')}
                                </h5>
                                <p className="card-text mb-1">
                                    <strong>Email:</strong> {user.email}
                                </p>
                                <p className="card-text">
                                    <strong>Phone:</strong> {user.phone}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Users;

