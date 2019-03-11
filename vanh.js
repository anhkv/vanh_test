function loop(){
    for(i=1; i<101; i++){
        if(i == 35){
            document.write('sphinx-software');
        }
        else if(i % 3 == 0){
            document.write('sphinx');
        }
        else if(i % 5 == 0){
            document.write('software');
        }
        else{
            document.write(i);
        }
    }
}

loop();