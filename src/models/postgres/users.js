module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    'Users',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      }
    },
    {}
    );
    Users.associate = models => {
      Users.belongsToMany(models.Projects, {
        through: models.UsersProjects,
        foreignKey: 'userId'
      });
    };
  return Users;
}