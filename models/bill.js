module.exports = (sequelize, DataTypes) => {
    const Bill = sequelize.define("Bill", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        amount: {
            type: DataTypes.DECIMAL (10, 2),
            allowNull: false
        }
    });
    Bill.associate = models => {
        Bill.hasMany(models.Payment);
    };
    return Bill;
};