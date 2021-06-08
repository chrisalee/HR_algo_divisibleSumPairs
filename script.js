const divisibleSumPairs = (n, k, ar) => {
    // Write your code here
    let pairs = 0;
    for(let i = 0; i < ar.length; i++) {
        let checks = ar.slice(i + 1, ar.length);
        // console.log(ar[i],' + ',checks);
        checks.filter(item => {
            console.log('i=',i, 'ar['+i+']=',ar[i],'total',item + ar[i]);
            if((item + ar[i]) % k === 0) {
                pairs++;
            }
        });
    }
    // console.log(pairs);
    return pairs;
}
