function cardNumber(cardPin){
    if (cardPin.length < 16 || cardPin.length > 16 || isNaN(+cardPin)){
        console.log('Error writing');
    }
    if(cardPin.startsWith('8600')){
        console.log('Your card is Uzcard!');
    }else if (cardPin.startsWith('9680')){
        console.log('Your card is Khumo!');
    }else{
        console.log('This is an error!');
    }
    let symbol = "**********";
    console.log(cardPin.slice(0 , 4) + symbol + cardPin.slice(12 , 16));
}
cardNumber('9680123456798875')
