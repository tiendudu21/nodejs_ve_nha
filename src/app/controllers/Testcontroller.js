const test1 = ( req, res)=>{
    const {id, id2} = req.params;
    console.log(id2)

}
const test2 = ( req, res)=>{
    console.log("Test2")
}
module.exports = {
    test1,
    test2
};