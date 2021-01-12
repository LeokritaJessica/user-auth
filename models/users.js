module.exports = (sequelize, type) => {
  return sequelize.define(
    "users",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: type.STRING(200),
      },
      password: {
        type: type.STRING(200),
      },
      created_at: type.DATE,
      updated_at: type.DATE,
    },
    {
      freezeTablename: true, //digunakan untuk tidak merubah format ketika masukan nama table
      underscored: true //jadi tu biar bisa pakai undescored di nama table
    }
  );
};
