Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

        You may assume that each input would have exactly one solution, and you may not use the same element twice.

        You can return the answer in any order.



        Example 1:

        Input: nums = [2,7,11,15], target = 9
        Output: [0,1]
        Output: Because nums[0] + nums[1] == 9, we return [0, 1].
        Example 2:

        Input: nums = [3,2,4], target = 6
        Output: [1,2]
        Example 3:

        Input: nums = [3,3], target = 6
        Output: [0,1]


        Constraints:

        2 <= nums.length <= 103
        -109 <= nums[i] <= 109
        -109 <= target <= 109
        Only one valid answer exists.

public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        if (map.containsKey(complement)) {
        return new int[] { map.get(complement), i };
        }
        map.put(nums[i], i);
        }
        throw new IllegalArgumentException("No two sum solution");
        }
===============================================================================
        Given an integer x, return true if x is palindrome integer.

        An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.



        Example 1:

        Input: x = 121
        Output: true
        Example 2:

        Input: x = -121
        Output: false
        Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
        Example 3:

        Input: x = 10
        Output: false
        Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
        Example 4:

        Input: x = -101
        Output: false

        var isPalindrome = function(x) {
        if (x < 0) {
        return false;
        } else if (x === 0) {
        return true;
        }
        let reversed = 0;
        let y = x;
        while (y > 0) {
        const lastDigit = y % 10;
        reversed = (reversed * 10) + lastDigit;
        y = Math.floor(y / 10);
        }
        return reversed === x;
        };