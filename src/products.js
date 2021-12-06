const products = [
    {id: 1, name: "Boca Titular", price: 11000, category: "nacional", stockAvailable:12, picture: "./images/img-camisetas/boca-img.jpg"},
    {id: 2, name: "River Titular", price: 11000, category: "nacional", stockAvailable:15, picture: "./images/img-camisetas/river-img.jpg"},
    {id: 3, name: "Psg Titular", price: 12499, category: "internacional", stockAvailable:13, picture: "./images/img-camisetas/psg-img.png"},
    {id: 4, name: "Manchester City Titular", price: 10500, category: "internacional", stockAvailable:10, picture: "./images/img-camisetas/manchester-city-img.jpg"},
    {id:5, name: "Selección Argentina Titular", price: 11000, category: "selecciones", stockAvailable:12, picture: "./images/img-camisetas/arg-img.jpg"},
    {id:6, name: "Selección Argentina Alternativa", price: 11000, category: "selecciones", stockAvailable:8, picture: "./images/img-camisetas/arg-2-img.jpg"}
]

// const categories = [
//     {id: "nacional", description: "Nacional"},
//     {id: "internacional", description: "Internacional"},
//     {id: "selecciones", description: "Selecciones"}
// ]

// export const getCategories = () => {
//     return new Promise((resolve, reject) =>{
// setTimeout(() => {
//     resolve(categories)
// }, 2000)
//     })
// }

export const getProducts = () => {
    return new Promise((resolve, reject) => {
setTimeout(() => {
    resolve(products)
}, 2000)
    })
}

export const getItem = () => {
    return new Promise((resolve, reject) => {
setTimeout(() => {
    resolve(products[1])
}, 2000)
    })
}