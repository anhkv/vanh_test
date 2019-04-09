const Mutilply = require('./mutilply');
const Divide = require('./divide');
const Koa = require('koa');
const Calculator = require('./caculator');

const app   = new Koa();
const calculate = new Calculator();


const numberMiddleware = async (context, next) => {
    let firstNumber    = context.query.first;
    let secondNumber   = context.query.second;

    if(firstNumber && secondNumber) {
        await next();
    }else {
        context.body = "Ban chua nhap so."
    }
}

const run = async (context, next) => {
    let firstNumber  = parseInt(context.query.first);
    let secondNumber = parseInt(context.query.second);

    let mutil        = calculate.calculate(new Mutilply(), firstNumber, secondNumber);
    let div          = calculate.calculate(new Divide(), firstNumber, secondNumber);

    context.body     = {
        Mutilply: mutil,
        Divide  : div
    }
}


app.use(numberMiddleware);
app.use(run);
app.listen(2710);