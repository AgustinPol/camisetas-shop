const products = [
    {id: 1, name: "Boca titular", price: 11000, category: "nacional"},
    {id: 2, name: "River titular", price: 11000, category: "nacional"},
    {id: 3, name: "Psg titular", price: 12499, category: "internacional"},
    {id: 4, name: "Manchester City titular", price: 10500, category: "internacional"},
    {id:5, name: "Selección Argentina Titular", price: 11000, category: "selecciones"},
    {id:6, name: "Selección Argentina Alternativa", price: 11000, category: "selecciones"}
]

const categories = [
    {id: "nacional", description: "Nacional"},
    {id: "internacional", description: "Internacional"},
    {id: "selecciones", description: "Selecciones"}
]

export const getCategories = () => {
    return new Promise((resolve, reject) =>{
setTimeout(() => {
    resolve(categories)
}, 2000)
    })
}

export const getProducts = () => {
    return new Promise((resolve, reject) => {
setTimeout(() => {
    resolve(products)
}, 2000)
    })
}