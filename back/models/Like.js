module.exports = (sequelize, DataTypes) => {
    const Like = sequelize.define('Like', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        like: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    });

    return Like;
};