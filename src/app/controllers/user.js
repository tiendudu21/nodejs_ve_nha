const indexUser = ( req, res)=>{
    res.send("/admin/user/");
}


const createUser = ( req, res)=>{
    res.send("/admin/user/create");
}
const deleteUser = ( req, res)=>{
    res.send("/admin/user/delete");
}
const updateUser = ( req, res)=>{
    res.send("/admin/user/update");
}
module.exports = {
    indexUser,
    createUser,
    deleteUser,
    updateUser
};