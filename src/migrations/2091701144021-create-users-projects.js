module.exports = {
  up: (queryInterface, Sequelize) =>
    Promise.all([
      queryInterface.createTable('UsersProjects', {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true
        },
        userId: {
          type: Sequelize.UUID,
          references: {
            model: 'Users',
            key: 'id'
          },
          onDelete: 'CASCADE'
        },
        projectId: {
          type: Sequelize.UUID,
          references: {
            model: 'Projects',
            key: 'id'
          },
          onDelete: 'CASCADE'
        }
      })
    ]),
  down: queryInterface => Promise.all([queryInterface.dropTable('UsersProjects')])
};
