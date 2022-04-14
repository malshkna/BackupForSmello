const sequelize = require('../db')
const{DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Basket = sequelize.define('basket',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const BasketApartment = sequelize.define('basket_apartment',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const Apartment = sequelize.define('apartment',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    square: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false}
})

const Type = sequelize.define('type',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Owner = sequelize.define('type',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const ApartmentInfo = sequelize.define('apartment_info',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    adress: {type: DataTypes.STRING, unique: true, allowNull: false},
    discription: {type: DataTypes.STRING, allowNull: false}

})

const TypeOwner = sequelize.define('type_owner',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketApartment)
BasketApartment.belongsTo(Basket)

Type.hasMany(Apartment)
Apartment.belongsTo(Type)

Owner.hasMany(Apartment)
Apartment.belongsTo(Owner)

Apartment.hasMany(BasketApartment)
BasketApartment.belongsTo(Apartment)

Apartment.hasOne(ApartmentInfo)
ApartmentInfo.belongsTo(Apartment)

Type.belongsToMany(Owner, {through: TypeOwner})
Owner.belongsToMany(Type, {through: TypeOwner})

module.exports = {
    User, 
    Basket, 
    BasketApartment, 
    Apartment, 
    Type, 
    Owner, 
    ApartmentInfo, 
    TypeOwner
}