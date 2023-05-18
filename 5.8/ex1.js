let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

// символьное свойство вместо имени, которое известно только нашему коду
let isRead = Symbol("isRead");
messages[0][isRead] = true;