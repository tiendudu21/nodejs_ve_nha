const indexCategory = ( req, res)=>{
    res.send("/admin/category/");
}


const createCategory = ( req, res)=>{
    res.send("/admin/category/create");
}
const deleteCategory = ( req, res)=>{
    res.send("/admin/category/delete");
}
const updateCategory = ( req, res)=>{
    res.send("/admin/category/update");
}
module.exports = {
    indexCategory,
    createCategory,
    deleteCategory,
    updateCategory
};