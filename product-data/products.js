

 const PRODUCTS = [
    {id : 1,
    name: "Samsung A2", 
    category: "",
    imagePath:require("../images/images1.jpeg"),
    amount: "GH$ 73,896",
    discount: '30% off',
    ratings: "",
    inStock: "",
    favorite: "",
    description: "",
 },

    {id : 2, 
    name: "I phone X", 
    category: "",
    imagePath:require("../images/images2.jpeg"),
    amount: "GH$ 6,000",
    discount: '50% off',
    ratings: "",
    inStock: "",
    favorite: "",
    description: "",
 },

    {id : 3,
    name: "Nokia",
    category: "", 
    imagePath:require("../images/images3.jpeg"), 
    amount: "GH$ 3,675",
    discount: '10% off',
    ratings: "",
    inStock: "",
    favorite: "",
    description: "",
},


    {id : 4,
    name: "Infinix",
    category: "", 
    imagePath:require("../images/images4.jpeg"), 
    amount: "GH$ 2,500",
    discount: '15% off',
    ratings: "",
    inStock: "",
    favorite: "",
    description: "",
},
]


export const categories =[
    {id: 1, name: "All", page: ""},
    {id: 2, name: "Samsung", page: ""},
    {id: 3, name: "Iphone", page: "" },
    {id: 4, name: "Techno", page: "" },
    {id: 5, name: "Infinix", page: ""},
    {id: 6, name: "Itel", page: "" },
    {id: 7, name: "Huawei", page: "" },
    {id: 8, name: "Motorolla", page: "" },
    {id: 9, name: "Nokia", page: "" },
    {id: 10, name: "Pixel", page: "" },
]

export const bottonNav =[
    {id: 1, name: "Home", icon: ""},
    {id: 2, name: "Home", icon: ""},
]

export function getProducts() {
    return PRODUCTS;
}
export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}