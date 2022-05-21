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
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bio: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        img_profile: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    return Users;
};