export  function ProductList(data){
    return data.map(el => {
        return {
            title:el.title,
            price:el.price,
            img:el.image,
            id:el.id,
            description:el.description
        }
    })
}

export function SingleProduct(el){
    return {
        title: el.title,
        price: el.price,
        img: el.image,
        id: el.id,
        description: el.description
    }
}