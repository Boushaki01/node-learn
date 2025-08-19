// List product
let products = [
  {
    id: 1,
    name: "telur",
    price: 3000,
  },
  {
    id: 2,
    name: "nasi",
    price: 10000,
  },
];

// logic untuk get all product
exports.getAllProducts = (req, res) => {
  res.status(200).json(products);
};

