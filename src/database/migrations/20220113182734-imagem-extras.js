'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.createTable('imagens_extras', { 
      id: {
        type: Sequelize.INTEGER,
        primarykey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
      },
      imagem_link: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      status: {
        type: Sequelize.STRING(7),
        allowNull: false
      },
      card_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'cards', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
    
    await queryInterface.dropTable('imagens_extras');
  }
};
