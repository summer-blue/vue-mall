//sequelize基础配置文件
const Sequelize = require('sequelize');
const sequelize = new Sequelize('mall','root','MyNewPass4!',{
	host:'120.79.190.67',
	dialect:'mysql',
})

module.exports = sequelize;
