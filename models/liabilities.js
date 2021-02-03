/* eslint-disable prettier/prettier */
// Creating our User model
module.exports = function (sequelize, DataTypes) {
    var Liabilities = sequelize.define("Liabilities", {
        // The email cannot be null, and must be a proper email before creation
        homeMortgage: {
            type: DataTypes.INTEGER,

            validate: {
                isNumeric: true,
            }
        },
        investmentPropertyLoans: {
            type: DataTypes.INTEGER,

            validate: {
                isNumeric: true,
            }
        },
        personalLoans: {
            type: DataTypes.INTEGER,

            validate: {
                isNumeric: true,
            }
        },
        creditCards: {
            type: DataTypes.INTEGER,

            validate: {
                isNumeric: true,
            }
        },
        payDayLending: {
            type: DataTypes.INTEGER,

            validate: {
                isNumeric: true,
            }
        },
        carLoan: {
            type: DataTypes.INTEGER,

            validate: {
                isNumeric: true,
            }
        },
        otherLoans: {
            type: DataTypes.INTEGER,

            validate: {
                isNumeric: true,
            }
        },


    });

    return Liabilities;
};
