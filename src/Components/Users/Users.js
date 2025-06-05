import { useState } from 'react';
import users from './users.json';
import './users.css';

const Users = () => {
    const [userData, setUserData] = useState(users);

    const getInitials = (name) => {
        return name.split(' ').map(n => n[0]).join('').toUpperCase();
    };

    const handleChange = (value) => {
        if (!value) {
            setUserData(users);
            return;
        };

        const filteredUsers = users.filter(ele =>
            ele?.firstName?.toLowerCase().includes(value.toLowerCase()) ||
            ele?.age?.toString().includes(value) ||
            ele?.bloodGroup?.toLowerCase().includes(value.toLowerCase())
        );

        setUserData(filteredUsers);
    };

    const getInitialsBgColor = (name) => {
        const colors = [
            '#3b82f6', '#10b981', '#8b5cf6', '#ec4899',
            '#f59e0b', '#6366f1', '#ef4444', '#14b8a6'
        ];
        const index = name.charCodeAt(0) % colors.length;
        return colors[index];
    };

    return (
        <div className="users-container">
            {/* Header */}
            <div className="users-header">
                <h1 className="users-title">Users</h1>
                <div className="users-header-controls">
                    {/* Search */}
                    <div className="users-search-container">
                        <input
                            type="text"
                            placeholder="Search users"
                            className="users-search-input"
                            onChange={(e) => handleChange(e?.target?.value)}
                        />
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="users-table-container">
                <table className="users-table">
                    <thead className="users-table-header">
                        <tr>
                            <th className="users-th">Profile</th>
                            <th className="users-th">Username</th>
                            <th className="users-th">Age</th>
                            <th className="users-th">Gender</th>
                            <th className="users-th">Email</th>
                            <th className="users-th">Birthdate</th>
                            <th className="users-th">Phone</th>
                            <th className="users-th">Blood group</th>
                            <th className="users-th">Country</th>
                        </tr>
                    </thead>
                    <tbody className="users-tbody">
                        {userData.map((user) => (
                            <tr key={user.id} className="users-tr">
                                <td className="users-td">
                                    <div className="users-profile-image-container">
                                        {user.image ? (
                                            <img
                                                className="users-profile-image"
                                                src={user.image}
                                                alt={user.username}
                                            />
                                        ) : (
                                            <div
                                                className="users-profile-initials"
                                                style={{
                                                    backgroundColor: getInitialsBgColor(user.username)
                                                }}
                                            >
                                                {getInitials(user.username)}
                                            </div>
                                        )}
                                    </div>
                                </td>
                                <td className="users-td">
                                    <div className="users-username">{user.username}</div>
                                </td>
                                <td className="users-td">
                                    <div className="users-cell-text">{user.age}</div>
                                </td>
                                <td className="users-td">
                                    <div className="users-cell-text">{user.gender}</div>
                                </td>
                                <td className="users-td">
                                    <div className="users-cell-text">
                                        <a href={`mailto:${user.email}`} className='links'>{user.email}</a>
                                    </div>
                                </td>
                                <td className="users-td">
                                    <div className="users-cell-text">{user.birthDate}</div>
                                </td>
                                <td className="users-td">
                                    <div className="users-cell-text">
                                        <a href={`tel:${user.phone}`} className='links'>{user.phone}</a>
                                    </div>
                                </td>
                                <td className="users-td">
                                    <div className="users-cell-text">{user.bloodGroup}</div>
                                </td>
                                <td className="users-td">
                                    <div className="users-cell-text">{user.address.country}</div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;