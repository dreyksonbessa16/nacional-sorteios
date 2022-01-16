'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.createTable('sorteios', { 
      id: {
        type: Sequelize.INTEGER,
        primarykey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
      },
      titulo: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      sub_titulo: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      descricao: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      valor: {
        type: Sequelize.DECIMAL(21, 2),
        allowNull: false
      },
      status: {
        type: Sequelize.STRING(7),
        allowNull: false
      },
      rifas_quant: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      admin_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'admin', key: 'id' },
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
    
    await queryInterface.dropTable('sorteios');
  }
};
