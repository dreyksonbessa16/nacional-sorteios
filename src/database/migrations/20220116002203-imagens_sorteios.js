'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.createTable('imagens_sorteios', { 
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
      num_sequen: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      sorteio_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'sorteios', key: 'id' },
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
    
    await queryInterface.dropTable('imagens_sorteios');
  }
};
