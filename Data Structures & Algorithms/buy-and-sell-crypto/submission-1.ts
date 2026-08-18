class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let result = 0;
        let buy = prices[0];

        for (let i = 1; i < prices.length; i++) {
            result = Math.max(result, prices[i] - buy);
            buy = Math.min(buy, prices[i])
        }

        return result;
    }
}
