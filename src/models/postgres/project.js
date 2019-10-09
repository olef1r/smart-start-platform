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
    Projects.associate = models => {
      Projects.belongsToMany(models.Projects, {
        through: models.ProjectsProjects,
        foreignKey: 'projectId'
      });
    };
  return Projects;
}