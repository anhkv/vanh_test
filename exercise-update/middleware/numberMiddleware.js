module.exports = async (context, next) => {
    let firstNumber    = parseInt(context.query.first);
    let secondNumber   = parseInt(context.query.second);

    if(firstNumber && secondNumber) {
        context.first  = firstNumber;
        context.second = secondNumber;
        await next();
    }else {
        context.body   = "Ban chua nhap so."
    }
}