const Sequelize = require('sequelize');

/*
    index : BIGINT UNSIGNED autoincrement
    userName : char(64)
    userDesc : text
    hasCat : boolean
*/

module.exports = class User extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            index:{
                type:Sequelize.BIGINT.UNSIGNED,
                primaryKey : true,
                autoIncrement : true,
            },
            userName:{
                type:Sequelize.CHAR(64),
            },
            userDesc:{
                type:Sequelize.TEXT,
            },
            hasCat:{
                type:Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
        },{
            // model setting
            sequelize,
            timestamps: false, // create_at update_at
            underscored: false,  //createAt => create_at
            paranoid : false, // delete_at
            modelName: 'User',
            tableName: 'users',
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
}