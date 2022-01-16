'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.createTable('admin', { 
      id: {
        type: Sequelize.INTEGER,
        primarykey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
      },
      username: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      nome: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      sobrenome: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      telefone: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      senha: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      foto_link: {
        type: Sequelize.TEXT,
        allowNull: false
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
    
    await queryInterface.dropTable('admin');
  }
};
