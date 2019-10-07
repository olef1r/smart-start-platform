module.exports = (sequelize, DataTypes) => {
  const Administrators = sequelize.define(
    'Administrators',
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
        type: DataTypes.TEXT,
        unique: true,
        allowNull: false
      }
    },
    {}
    );
  return Administrators;
}