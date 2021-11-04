"use strict";
const slugify = require("slugify");
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define(
    "tags",
    {
      name: DataTypes.STRING,
      slug: { type: DataTypes.STRING, allowNull: false },
      description: DataTypes.STRING,
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
        field: "created_at",
      },

      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
        field: "updated_at",
      },
    },
    {
      hooks: {
        beforeValidate: function (tag, options) {
          tag.slug = slugify(tag.name, { lower: true });
        },
      },
    }
  );
  Tag.associate = function (models) {
    Tag.belongsToMany(models.Product, { through: models.ProductTag });
    Tag.hasMany(models.TagImage, { as: "images" });
  };
  return Tag;
};
