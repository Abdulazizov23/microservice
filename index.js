let book = connect("127.0.0.1:27017/books");
let product = connect("127.0.0.1:27017/products");
let order = connect("127.0.0.1:27017/orders");

book.books.insertMany([
  {
    _id: ObjectId("5f380bd326509c2b381f8c5c"),
    title: "Boy ota Kambag'al opa",
    author: "oyatillo abdulazizov",
    numberPages: 200,
    publisher: "Uzbekiston",
    __v: 0,
  },
])


product.products.insertMany([
  {
    _id: ObjectId("5f380bf52592f6162830adfe"),
    name: "oyatillo",
    age: 23,
    address: "Andijon",
    __v: 0,
  },
])


order.orders.insertMany([
  {
    _id: ObjectId("5f380df62de32327548f7481"),
    productId: ObjectId("5f380bf52592f6162830adfe"),
    bookId: ObjectId("5f380bd326509c2b381f8c5c"),
    initialDate: "2020-08-15T00:00:00.000Z",
    deliveryDate: "2020-08-16T00:00:00.000Z",
    __v: 0,
  },
])
