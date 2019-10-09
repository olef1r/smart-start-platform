module.exports = {
  up: (queryInterface, Sequelize) =>
      queryInterface.createTable(
        'Projects',
        {
          id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
          },
          name: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: 'unique_name'
          },
          description: {
            type: Sequelize.TEXT,
            allowNull: false
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
          }
        },
        {
          uniqueKeys: {
            unique_name: {
              fields: [ 'name']
            }
          }
        }
      ).then(() =>
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
    ),
  down: queryInterface =>queryInterface.dropTable('Projects')
}