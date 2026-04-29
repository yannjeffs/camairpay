function paiementMTN(phone, amount) {
    var options = {
        method: 'POST',
        url: 'https://sandbox.momodeveloper.mtn.com/collection/v1_0/requesttopay',
    }
    
    console.log(options);
    console.log(phone);
    console.log(amount);
}