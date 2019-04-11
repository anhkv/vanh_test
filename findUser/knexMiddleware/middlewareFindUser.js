module.exports = async (context, next) => {
    if(!context.query.name){
        return context.body = "phai nhap du lieu....."
    }else {
        await next();
    }
}