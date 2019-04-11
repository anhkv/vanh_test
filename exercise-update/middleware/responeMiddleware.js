const containerOperate = require('../operate/containerOperate');
const Calculator = require('../caculator');

const calculate  = new Calculator();

module.exports = async (context) => {

    let mutil        = calculate.calculate(new containerOperate.Mul(), context.first, context.second);
    let div          = calculate.calculate(new containerOperate.Div(), context.first, context.second);
    context.body     = {
        Mutilply: mutil,
        Divide  : div
    }

}