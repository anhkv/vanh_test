// class TinhDienTich{
//     hinhtron(r){
//         if(r < 1){
//             throw('Bán kính phải lớn hơn 1');
//         }else{
//             return 3.14 * r * r;
//         }
//     }
// }

// var tinhdientich = new TinhDienTich();
// try{
//     console.log(tinhdientich.hinhtron(-3)); //Sẽ in ra "Bán kinh phải lớn hơn 1"
// }catch(e){
//     console.log(e);
// }

function demo(){
    return "abc";
}

function test(e){
    return e;
}

try{
    console.log(demo());
}
finally{
    console.log(test('xyz'));
}