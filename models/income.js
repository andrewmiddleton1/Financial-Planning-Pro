/* eslint-disable prettier/prettier */
// Creating our User model
module.exports = function (sequelize, DataTypes) {
    var Income = sequelize.define("Income", {
        // The email cannot be null, and must be a proper email before creation
        employment_type: {
            type: DataTypes.STRING,
        },

        industry: {
            type: DataTypes.STRING,
        },

        primary_income: {
            type: DataTypes.INTEGER,
            // validate: {
            //     isNumeric: true,
            // }
        },

        secondary_income: {
            type: DataTypes.INTEGER,
            // validate: {
            //     isNumeric: true,
            // }
        },

        centrelink_payments: {
            type: DataTypes.INTEGER,
            // validate: {
            //     isNumeric: true,
            // }
        },

        dva_payments: {
            type: DataTypes.INTEGER,
            // validate: {
            //     isNumeric: true,
            // }
        },

        superannuation_payments: {
            type: DataTypes.INTEGER,
            // validate: {
            //     isNumeric: true,
            // }
        },

        rental_income: {
            type: DataTypes.INTEGER,
            // validate: {
            //     isNumeric: true,
            // }
        },

        other_income: {
            type: DataTypes.INTEGER,
            // validate: {
            //     isNumeric: true,
            // }
        },
    });

    Income.associate = function (models) {
        // We're saying that a Income should belong to a User
        //  Income can't be created without a User due to the foreign key constraint
        Income.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };


    return Income;
};
