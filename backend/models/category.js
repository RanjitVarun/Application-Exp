

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('category', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cname: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'category'
  });
};
