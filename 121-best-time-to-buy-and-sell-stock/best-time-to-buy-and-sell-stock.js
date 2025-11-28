/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let l=0, r=1, profit=0, i =0;
    while ( i< prices.length){
        if (prices[r]-prices[l]>profit) {
            profit =prices[r] - prices[l]
        }
        else if (prices[l]>prices[r]){ 
            l=r;
        }
        i++ , r++;
    }
return profit 

};