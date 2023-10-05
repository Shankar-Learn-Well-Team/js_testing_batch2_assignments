# JavaScript Assignment 3 - Number and String Utility Functions

1. **isAnagram:**

    - **Use-case:** Checks if two strings are anagrams.
    - **Sample Inputs:** ("listen", "silent")
    - **Sample Output:** True
    - **Constraints:** Case-insensitive comparison.
    - **Operation:** An anagram is a word or phrase formed by rearranging the letters of another.

2. **isPalindrome:**

    - **Use-case:** Determines if a string or number is a palindrome.
    - **Sample Inputs:** ("radar"), (121)
    - **Sample Output:** True
    - **Constraints:** For numbers, consider integer inputs.
    - **Operation:** A palindrome is a sequence that reads the same backward as forward.

3. **isArmstrong:**

    - **Use-case:** Checks if a number is an Armstrong number.
    - **Sample Inputs:** (153)
    - **Sample Output:** True
    - **Constraints:** Works only for positive integers.
    - **Operation:** An Armstrong number is a number that is the sum of its own digits each raised to the power of the number of digits.

4. **isEven:**

    - **Use-case:** Verifies if a number is even.
    - **Sample Inputs:** (8)
    - **Sample Output:** True
    - **Constraints:** Applicable to integers.
    - **Operation:** An even number is an integer that is exactly divisible by 2.

5. **isOdd:**

    - **Use-case:** Determines if a number is odd.
    - **Sample Inputs:** (13)
    - **Sample Output:** True
    - **Constraints:** Applicable to integers.
    - **Operation:** An odd number is an integer that is not divisible by 2.

6. **isPrime:**

    - **Use-case:** Checks if a number is a prime number.
    - **Sample Inputs:** (7)
    - **Sample Output:** True
    - **Constraints:** Works only for positive integers.
    - **Operation:** A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.

7. **isPerfectSquare:**

    - **Use-case:** Determines if a number is a perfect square.
    - **Sample Inputs:** (25)
    - **Sample Output:** True
    - **Constraints:** Works only for positive integers.
    - **Operation:** A perfect square is a number that can be expressed as the product of an integer with itself.

8. **isPowerOfTwo:**

    - **Use-case:** Verifies if a number is a power of two.
    - **Sample Inputs:** (64)
    - **Sample Output:** True
    - **Constraints:** Works only for positive integers.
    - **Operation:** A power of two is a number of the form 2^n where n is an integer.

9. **isPositive:**

    - **Use-case:** Checks if a number is positive.
    - **Sample Inputs:** (42)
    - **Sample Output:** True
    - **Constraints:** Applicable to numbers.
    - **Operation:** A positive number is greater than zero.

10. **isNegative:**

    - **Use-case:** Determines if a number is negative.
    - **Sample Inputs:** (-17)
    - **Sample Output:** True
    - **Constraints:** Applicable to numbers.
    - **Operation:** A negative number is less than zero.

11. **hasUniqueCharacters:**

    - **Use-case:** Verifies if a string has all unique characters.
    - **Sample Inputs:** ("hello")
    - **Sample Output:** False
    - **Constraints:** Case-sensitive comparison.
    - **Operation:** A string with all unique characters has no repeated characters.

12. **isBinaryPalindrome:**

    - **Use-case:** Checks if a binary representation is a palindrome.
    - **Sample Inputs:** (0b110011)
    - **Sample Output:** True
    - **Constraints:** Works for binary representations.
    - **Operation:** A binary palindrome is a binary number that reads the same backward as forward.

13. **isLeapYear:**

    - **Use-case:** Determines if a year is a leap year.
    - **Sample Inputs:** (2024)
    - **Sample Output:** True
    - **Constraints:** Applicable to years.
    - **Operation:** A leap year is a year, occurring once every four years, which has 366 days including 29 February as an intercalary day.

14. **isVowel:**

    - **Use-case:** Checks if a character is a vowel.
    - **Sample Inputs:** ('a')
    - **Sample Output:** True
    - **Constraints:** Case-insensitive comparison.
    - **Operation:** A vowel is a speech sound made with the vocal tract open.

15. **isConsonant:**

    - **Use-case:** Verifies if a character is a consonant.
    - **Sample Inputs:** ('b')
    - **Sample Output:** True
    - **Constraints:** Case-insensitive comparison.
    - **Operation:** A consonant is a speech sound that is not a vowel.

16. **isFibonacciNumber:**

    - **Use-case:** Determines if a number is a Fibonacci number.
    - **Sample Inputs:** (21)
    - **Sample Output:** True
    - **Constraints:** Works only for non-negative integers.
    - **Operation:** A Fibonacci number is a number in the Fibonacci sequence.

17. **isPerfectNumber:**

    - **Use-case:** Checks if a number is a perfect number.
    - **Sample Inputs:** (28)
    - **Sample Output:** True
    - **Constraints:** Works only for positive integers.
    - **Operation:** A perfect number is a positive integer that is equal to the sum of its proper divisors.

18. **isSquareNumber:**

    - **Use-case:** Verifies if a number is a square number.
    - **Sample Inputs:** (49) - **Sample Output:** True
    - **Constraints:** Works only for non-negative integers.
    - **Operation:** A square number is an integer that is the square of an integer.

19. **isCubeNumber:**

    - **Use-case:** Determines if a number is a cube number.
    - **Sample Inputs:** (27)
    - **Sample Output:** True
    - **Constraints:** Works only for non-negative integers.
    - **Operation:** A cube number is a number that is the cube of an integer.

20. **isDivisibleBy:**

    - **Use-case:** Checks if a number is divisible by another.
    - **Sample Inputs:** (10, 2)
    - **Sample Output:** True
    - **Constraints:** Applicable to integers.
    - **Operation:** A number is divisible by another if the division results in an integer.

21. **isPalindromeString:**

    - **Use-case:** Determines if a string is a palindrome.
    - **Sample Inputs:** ("level")
    - **Sample Output:** True
    - **Constraints:** Case-sensitive comparison.
    - **Operation:** A string palindrome reads the same backward as forward.

22. **isDescendingOrder:**

    - **Use-case:** Checks if a sequence of numbers is in descending order.
    - **Sample Inputs:** (5, 4, 3, 2, 1)
    - **Sample Output:** True
    - **Constraints:** Applicable to sequences of comparable elements.
    - **Operation:** A descending order sequence is arranged from largest to smallest.

23. **isAscendingOrder:**

    - **Use-case:** Verifies if a sequence of numbers is in ascending order.
    - **Sample Inputs:** (1, 2, 3, 4, 5)
    - **Sample Output:** True
    - **Constraints:** Applicable to sequences of comparable elements.
    - **Operation:** An ascending order sequence is arranged from smallest to largest.

24. **isMultipleOf:**

    - **Use-case:** Determines if a number is a multiple of another.
    - **Sample Inputs:** (15, 3)
    - **Sample Output:** True
    - **Constraints:** Applicable to integers.
    - **Operation:** A number is a multiple of another if it can be evenly divided by that number.

25. **hasConsecutiveDigits:**

    - **Use-case:** Checks if a number has consecutive digits.
    - **Sample Inputs:** (123)
    - **Sample Output:** True
    - **Constraints:** Applicable to integers.
    - **Operation:** A number has consecutive digits if its digits are in sequential order.

26. **hasEqualDigits:**

    - **Use-case:** Verifies if a number has all equal digits.
    - **Sample Inputs:** (1111)
    - **Sample Output:** True
    - **Constraints:** Applies to positive integers.
    - **Operation:** A number has equal digits if all its digits are the same.

27. **isCircularPrime:**

    - **Use-case:** Determines if a number is a circular prime.
    - **Sample Inputs:** (197)
    - **Sample Output:** True
    - **Constraints:** Works only for positive integers.
    - **Operation:** A circular prime is a number that remains prime under cyclic shifts of its digits.
