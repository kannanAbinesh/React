import { useState } from 'react';
import users from './users.json';

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
            ele?.age == value ||
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

    const styles = {
        container: {
            padding: '24px',
            backgroundColor: '#ffffff',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        },
        header: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '24px'
        },
        title: {
            fontSize: '28px',
            fontWeight: '600',
            color: '#111827',
            margin: '0'
        },
        headerControls: {
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
        },
        searchContainer: {
            position: 'relative'
        },
        searchIcon: {
            position: 'absolute',
            left: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#9ca3af',
            width: '16px',
            height: '16px'
        },
        searchInput: {
            paddingLeft: '40px',
            paddingRight: '16px',
            paddingTop: '8px',
            paddingBottom: '8px',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            fontSize: '14px',
            width: '250px',
            outline: 'none',
            transition: 'all 0.2s ease'
        },
        filterGroup: {
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
        },
        filterLabel: {
            fontSize: '14px',
            color: '#6b7280'
        },
        filterButton: {
            display: 'flex',
            alignItems: 'center',
            padding: '8px 12px',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            backgroundColor: '#ffffff',
            cursor: 'pointer',
            fontSize: '14px',
            gap: '8px',
            transition: 'background-color 0.2s ease'
        },
        tableContainer: {
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            border: '1px solid #e5e7eb',
            overflow: 'hidden'
        },
        table: {
            width: '100%',
            borderCollapse: 'collapse'
        },
        tableHeader: {
            backgroundColor: '#f9fafb',
            borderBottom: '1px solid #e5e7eb'
        },
        th: {
            padding: '12px 24px',
            textAlign: 'center',
            fontSize: '12px',
            fontWeight: '500',
            color: '#6b7280',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
        },
        tbody: {
            backgroundColor: '#ffffff'
        },
        tr: {
            borderBottom: '1px solid #e5e7eb',
            transition: 'background-color 0.2s ease'
        },
        td: {
            padding: '16px 24px',
            whiteSpace: 'nowrap'
        },
        profileImageContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        profileImage: {
            height: '40px',
            width: '40px',
            borderRadius: '50%',
            objectFit: 'cover'
        },
        profileInitials: {
            height: '40px',
            width: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontSize: '14px',
            fontWeight: '500'
        },
        userName: {
            fontSize: '14px',
            fontWeight: '500',
            color: '#111827'
        },
        cellText: {
            fontSize: '14px',
            color: '#111827'
        },
        pagination: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '24px'
        },
        paginationLeft: {
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
        },
        paginationText: {
            fontSize: '14px',
            color: '#374151'
        },
        select: {
            border: '1px solid #d1d5db',
            borderRadius: '4px',
            padding: '4px 8px',
            fontSize: '14px'
        },
        paginationRight: {
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
        },
        paginationButton: {
            padding: '8px 12px',
            fontSize: '14px',
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            color: '#6b7280',
            transition: 'color 0.2s ease'
        },
        paginationButtonActive: {
            padding: '8px 12px',
            fontSize: '14px',
            backgroundColor: '#2563eb',
            color: '#ffffff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
        }
    };

    return (
        <div style={styles.container}>
            {/* Header */}
            <div style={styles.header}>
                <h1 style={styles.title}>Users</h1>
                <div style={styles.headerControls}>
                    {/* Search */}
                    <div style={styles.searchContainer}>
                        {/* <Search style={styles.searchIcon} /> */}
                        <input
                            type="text"
                            placeholder="Search users"
                            style={styles.searchInput}
                            onFocus={(e) => {
                                e.target.style.borderColor = '#2563eb';
                                e.target.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.1)';
                            }}
                            onBlur={(e) => {
                                e.target.style.borderColor = '#d1d5db';
                                e.target.style.boxShadow = 'none';
                            }}
                            onChange={(e) => handleChange(e?.target?.value)}
                        />
                    </div>

                </div>
            </div>

            {/* Table */}
            <div style={styles.tableContainer}>
                <table style={styles.table}>
                    <thead style={styles.tableHeader}>
                        <tr>
                            <th style={styles.th}>Profile</th>
                            <th style={styles.th}>Username</th>
                            <th style={styles.th}>Age</th>
                            <th style={styles.th}>Gender</th>
                            <th style={styles.th}>Email</th>
                            <th style={styles.th}>Birthdate</th>
                            <th style={styles.th}>phone</th>
                        </tr>
                    </thead>
                    <tbody style={styles.tbody}>
                        {userData.map((user) => (
                            <tr
                                key={user.id}
                                style={styles.tr}
                                onMouseEnter={(e) => e.target.style.backgroundColor = '#f9fafb'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = '#ffffff'}
                            >
                                <td style={styles.td}>
                                    <div style={styles.profileImageContainer}>
                                        {user.image ? (
                                            <img
                                                style={styles.profileImage}
                                                src={user.image}
                                                alt={user.username}
                                            />
                                        ) : (
                                            <div style={{
                                                ...styles.profileInitials,
                                                backgroundColor: getInitialsBgColor(user.username)
                                            }}>
                                                {getInitials(user.username)}
                                            </div>
                                        )}
                                    </div>
                                </td>
                                <td style={styles.td}>
                                    <div style={styles.userName}>{user.username}</div>
                                </td>
                                <td style={styles.td}>
                                    <div style={styles.cellText}>{user.age}</div>
                                </td>
                                <td style={styles.td}>
                                    <div style={styles.cellText}>{user.gender}</div>
                                </td>
                                <td style={styles.td}>
                                    <div style={styles.cellText}>
                                        <a href={`mailto:${user.email}`}>{user.email}</a>
                                    </div>
                                </td>
                                <td style={styles.td}>
                                    <div style={styles.cellText}>{user.birthDate}</div>
                                </td>
                                <td style={styles.td}>
                                    <div style={styles.cellText}>
                                        <a href={`tel:${user.phone}`}>{user.phone}</a>
                                    </div>
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
