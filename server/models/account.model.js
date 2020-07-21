const modelName = 'Account';

module.exports = mongoose => {
  const schema = mongoose.Schema(
    {
      email: String,
      nameFirst: String,
      nameLast: String,
      phone: Number,
      address: String,
      picture: String,
      employer: String,
      comments: String,
      credit: Number,
      balance: Number,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  return mongoose.model(modelName, schema);
};
  