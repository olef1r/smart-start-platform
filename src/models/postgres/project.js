module.exports = (sequelize, DataTypes) => {
  const Projects = sequelize.define(
    'Projects',
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
      description: {
        type: DataTypes.TEXT,
        unique: true,
        allowNull: false
      }
    },
    {}
    );
  return Projects;
}