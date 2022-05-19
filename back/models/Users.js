module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });

    return Users;
};