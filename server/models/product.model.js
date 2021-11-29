const slugify = require('slugify');

module.exports = (sequelize, DataTypes) => {
    const {INTEGER, STRING, DATE, TEXT, DECIMAL, UUID, UUIDV4} = DataTypes;

    const Product = sequelize.define('products', {
        
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: STRING(50),
            allowNull: false,
        },

        slug: {
            type: STRING(50),
            allowNull: false,
        },
        description: {
            type: TEXT,
        },
       
        price: {
            type: DECIMAL(20, 2),
            allowNull: false,
        },

        stock: {
            type: INTEGER(11),
            allowNull: false,
        },
        createdAt: {
            type: DATE,
            allowNull: false,
            defaultValue: new Date(),
            field: 'created_at'
        },
        updatedAt: {
            type: DATE,
            allowNull: false,
            defaultValue: new Date(),
            field: 'updated_at'
        },
    }, {
        timestamps: false,
        tableName: 'products',
        indexes: [
            {fields: ['slug']},
        ],
        hooks: {
            beforeValidate: function (product, options) {
                product.slug = slugify(product.name, {lower: true});
            }
        }
    });


    Product.associate = (models) => {
        

        // here is how we add defaultScope programmatically
        Product.addScope('defaultScope', {
                        },
            {// defaultScope already exists, to avoid the error pass override
                override: true,
            });

        Product.hasMany(models.Comment);
        // Product.hasMany(models.ProductCategory);
        Product.belongsToMany(models.Category, {
            through: models.ProductCategory,
            foreignKey: 'productId',
            otherKey: 'categoryId',
        });

        // Product.hasMany(models.ProductTag);
        Product.belongsToMany(models.Tag, {
            through: models.ProductTag,
            foreignKey: 'productId',
            otherKey: 'tagId'
        });

    };

    Product.beforeBulkUpdate(product => {
        product.attributes.updateTime = new Date();
        return product;
    });

    return Product;
};