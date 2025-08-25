const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const LeaveRequest = sequelize.define('leave_request', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    studentName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    studentId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    studentEmail: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    studentNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    parentNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    department: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mentorName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    leaveType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fromDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    toDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    reason: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'pending',
    },
    mentorApproval: {
        type: DataTypes.STRING,
        defaultValue: 'pending',
    },
    hodApproval: {
        type: DataTypes.STRING,
        defaultValue: 'pending',
    },
    submittedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    mentorApprovedAt: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    hodApprovedAt: {
        type: DataTypes.DATE,
        allowNull: true,
    },
}, {
    tableName: 'leave_requests'
});

module.exports = LeaveRequest;