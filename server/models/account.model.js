const modelName = 'Account';

module.exports = mongoose => {
  const schema = mongoose.Schema(
    {
      email: String,
      name_first: String,
      name_last: String,
      phone: Number,
      address: String,
      employer: String,
      comments: String,
      credit: Number,
      balance: Number,
      published: Boolean
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
  