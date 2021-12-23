const products = [
    {id: 1, quantity: 1, name: "Boca Titular", price: 11000, category: "nacional", stockAvailable:18, picture: "../images/img-camisetas/boca-img.jpg"},
    {id: 2, quantity: 1, name: "River Titular", price: 11000, category: "nacional", stockAvailable:22, picture: "../images/img-camisetas/river-img.jpg"},
    {id: 3, quantity: 1, name: "Psg Titular", price: 12499, category: "internacional", stockAvailable:16, picture: "../images/img-camisetas/psg-img.png"},
    {id: 4, quantity: 1, name: "Manchester City Titular", price: 10500, category: "internacional", stockAvailable:19, picture: "../images/img-camisetas/manchester-city-img.jpg"},
    {id: 5, quantity: 1, name: "Selección Argentina Titular", price: 11000, category: "selecciones", stockAvailable:20, picture: "../images/img-camisetas/arg-img.jpg"},
    {id: 6, quantity: 1, name: "Selección Argentina Alternativa", price: 11000, category: "selecciones", stockAvailable:23, picture: "../images/img-camisetas/arg-2-img.jpg"},
    {id: 7, quantity: 1, name: "Independiente Titular", price: 10000, category: "nacional", stockAvailable:22, picture: "../images/img-camisetas/independiente.jpg"},
    {id: 8, quantity: 1, name: "Brasil Titular", price: 11500, category: "selecciones", stockAvailable:21, picture: "../images/img-camisetas/brasil.jpg"},
    {id: 9, quantity: 1, name: "Manchester United", price: 11000, category: "internacional", stockAvailable:22, picture: "../images/img-camisetas/manch-un.png"}
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
setTimeout(() => {
    resolve(products)
}, 500)
    })
}

export const getProductById = (id) => {  
    return new Promise((resolve, reject) => {
        const productFound = products.find(prod => parseInt(prod.id) === parseInt(id))
        setTimeout(() => resolve(productFound), 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
        const filteredProducts = products.filter(prod => prod.category === categoryId)
        setTimeout(() => resolve(filteredProducts), 500)
    }) 
}