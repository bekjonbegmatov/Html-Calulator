$('document').ready(function(){
    let number1 = "";
    let number2 = "";
    let znak  = "";
    let indikator = true;
    let znak_n = 0;
    let natija;

    $('.buttons').on('click' , function(){
        let num =  $(this).val(); 
        if (indikator == true){
            
            if((num == '-' || num == '+' || num == '*' || num == '/' ) && (znak_n == 0 )){
                if(num == '_'){
                    znak = '-';
                    indikator = false;
                    znak_n++;
                }else if(num == '+'){
                    znak = '+';
                    indikator = false;
                    znak_n++;
                }else if(num == '*'){
                    znak = '*';
                    indikator = false;
                    znak_n++;
                }else if(num == '/'){
                    znak = '/';
                    indikator = false;
                    znak_n++;
                }
                console.log(num);
            }else{
                
                number1 += num;
                $('#display').html(number1);
                console.log(number1);
                //alert(number1)
            }

            

        }else if(indikator == false){
            
            number2 += num;
            $('#display').html(number2);
            console.log(number2);

        }
        $('#goto').on('click' , function(){
            number1 = parseFloat(number1);
            number2 = parseFloat(number2);

            if(znak == '_'){
                natija = number1 - number2;
            }else if(znak == '+'){
                natija = number1 + number2;
            }else if(znak == '*'){
                natija = number1 * number2;
            }else if(znak == '/'){
                natija = number1 / number2;
            };

            $('#display').html(natija);
            console.log(natija);
        });
        if(number1.length > 7 || number2.length > 7){
            //alert('Langth Error !!!');
            //location.reload();
            $('#display').css('font-size' , 40)
        }else if(number1.length < 7 || number2.length < 7){
            $('#display').css('font-size' , 65)
        }
        
    });


    $('.res').on('click' , function(){
        location.reload()
    })

});
