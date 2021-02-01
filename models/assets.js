
// Creating our User model
module.exports = function (sequelize, DataTypes) {
    var Assets = sequelize.define("Assets", {
        // The email cannot be null, and must be a proper email before creation
        principalResidence: {
            type: DataTypes.INTEGER,

            validate: {
                isNumeric: true,
            }
        },
        investmentProperty: {
            type: DataTypes.INTEGER,

            validate: {
                isNumeric: true,
            }
        },
        homeContents: {
            type: DataTypes.INTEGER,

            validate: {
                isNumeric: true,
            }
        },
        primaryCar: {
            type: DataTypes.INTEGER,

            validate: {
                isNumeric: true,
            }
        },
        secondaryCar: {
            type: DataTypes.INTEGER,

            validate: {
                isNumeric: true,
            }
        },
        cashInBank: {
            type: DataTypes.INTEGER,

            validate: {
                isNumeric: true,
            }
        },
        managedFund: {
            type: DataTypes.INTEGER,

            validate: {
                isNumeric: true,
            }
        },
        sharePortfolio: {
            type: DataTypes.INTEGER,

            validate: {
                isNumeric: true,
            }
        },
        caravanCamper: {
            type: DataTypes.INTEGER,

            validate: {
                isNumeric: true,
            }
        },
        boatWatercraft: {
            type: DataTypes.INTEGER,

            validate: {
                isNumeric: true,
            }
        },
        otherMachinery: {
            type: DataTypes.INTEGER,

            validate: {
                isNumeric: true,
            }
        },
        otherAsset: {
            type: DataTypes.INTEGER,

            validate: {
                isNumeric: true,
            }
        },
    });

    return Assets;
};
