const Sequelize = require('sequelize');

module.exports = class Results extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        is_ocr_modified: {
          type: Sequelize.TINYINT,
          allowNull: false,
        },
        is_verified: {
          type: Sequelize.TINYINT,
          allowNull: false,
        },
        original_ocr: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        modified_ocr: {
          type: Sequelize.TEXT,
          allowNull: true,
          defaultValue: null,
        },
        id_card_image_url: {
          type: Sequelize.STRING(300),
          allowNull: false,
        },
        cropped_face_image_url: {
          type: Sequelize.STRING(300),
          allowNull: true,
          defaultValue: null,
        },
        id_card_origin_image_url: {
          type: Sequelize.STRING(300),
          allowNull: true,
          defaultValue: null,
        },
        is_manual_input: {
          type: Sequelize.TINYINT,
          allowNull: false,
        },
        uploaded_type: {
          type: Sequelize.STRING(16),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        modelName: 'Results',
        tableName: 'id_card_validation_results',
        paranoid: false,
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
      }
    );
  }
  static associate(db) {
    
  }
};
