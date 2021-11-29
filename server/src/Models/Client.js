const { DATE } = require('sequelize');
const Sequelize = require('sequelize');
const database = require('../DB/db');

const User = database.define(
  "users",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    senha: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DATE,
      allowNull: false,
      defaultValue: new Date(),
      field: "created_at",
    }, 

    updatedAt: {
      type: DATE,
      allowNull: false,
      defaultValue: new Date(),
      field: "updated_at",
    },
  },
  {
      tableName: "users",
       hooks: {
          beforeCreate: function (user, options) {
            const hashed_password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
            user.password = hashed_password;
          }, afterCreate: function (user, options) { }
  }
});
User.associate = function (models) {
     User.hasMany(models.Order);
    User.belongsToMany(models.Role, {through: 'users_roles', foreignKey: 'userId', otherKey: 'roleId'});
    User.hasMany(models.Address,);

     User.beforeBulkUpdate(user => {
        user.attributes.updateTime = new Date();
        return user;
     });

    User.beforeCreate((user) => {
        console.log(user);
        return user;
    });
    User.prototype.isAdminSync = function () {
        return this.roles != null && this.roles.some(role => role.name === 'ROLE_ADMIN');
    };
    User.prototype.isAdminAsync = async function () {
        let isAdmin = false;
        await this.getRoles().then(roles => {
            isAdmin = roles.some(r => r.name === 'ROLE_ADMIN');
        }).catch(err => {
            console.error(err);
        });

        return isAdmin;
    };

      User.prototype.isValidPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };
    User.prototype.generateJwt = function () {
        return jwt.sign(
            {
                userId: this.id,
                username: this.get('username,'),
                roles: this.roles.map(role => role.name)
            },
            process.env.JWT_SECRET || 'JWT_SUPER_SECRET',
            {expiresIn: process.env.EXPIRE_TIME || 360000}
        );
    };
}
module.exports = User;
