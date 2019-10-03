module.exports = {
  up: (queryInterface, Sequelize) =>
    Promise.all([
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
      )
    ]),
  down: queryInterface => Promise.all([queryInterface.dropTable('Projects')])
};
