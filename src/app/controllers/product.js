const indexProduct = ( req, res)=>{
    res.send("/admin/products/");
}


const createProduct = ( req, res)=>{
    res.send("/admin/products/create");
}
const updateProduct = ( req, res)=>{
    res.send("/admin/products/update");
}
const deleteProduct = ( req, res)=>{
    res.send("/admin/products/delete");
}

module.exports = {
    indexProduct,
    createProduct,
    updateProduct,
    deleteProduct
    
};