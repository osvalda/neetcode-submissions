class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let result = 0;

        for (let i = 0; i < prices.length - 1; i++) {
            for (let sell = i + 1; sell < prices.length; sell++) {
                const profit = prices[sell] - prices[i];
                if (profit > result) {
                    result = profit;
                }
            }
        }

        return result;
    }
}
