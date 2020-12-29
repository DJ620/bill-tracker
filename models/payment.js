module.exports = (sequelize, DataTypes) => {
    const Payment = sequelize.define("Payment", {
        paid: {
            type: DataTypes.DECIMAL (10, 2),
            allowNull: false
        }
    });
    Payment.associate = models => {
        Payment.belongsTo(models.Bill, {
            foreignKey: {
                allowNull: false
            },
            onDelete: 'cascade'
        });
    };
    return Payment;
};