'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.createTable('rifas', { 
      id: {
        type: Sequelize.INTEGER,
        primarykey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
      },
      numero: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      situacao: {
        type: Sequelize.STRING(2),
        allowNull: false
      },
      sorteio_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'sorteios', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'usuarios', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.dropTable('rifas');
  }
};
