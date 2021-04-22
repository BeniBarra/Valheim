if (odinSent.toLowerCase() == 'yes'){
    document.write('<h2>Valheim Welcomes you!</h2>');
}
else if (odinSent.toLowerCase() == 'no'){
    let button = confirm ("THEN AWAY WITH YOU!!!");
    document.write('<h2>Be Gone Pesky GreyDwarf!!</h2>');
}
console.log (odinSent);