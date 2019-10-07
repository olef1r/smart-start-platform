module.exports = (sequelize, DataTypes) => {
  const UsersProjects = sequelize.define(
    'UsersProjects',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      userId: {
        type: DataTypes.UUID,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      projectId: {
        type: DataTypes.UUID,
        references: {
          model: 'Projects',
          key: 'id'
        }
      }
    },
    {timestamps: false}
    );
  return UsersProjects;
}