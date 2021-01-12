let number = process.argv[2];
function facto ( nbr){
    if (nbr ===0){
        return 1;
    }
    return nbr * facto(nbr-1);

}
 let rev =  console.log(facto(number));

 reser = rev.split('').reverse().join('');
 console.log(reser);


