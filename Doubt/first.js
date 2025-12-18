console.log(0.1 + 0.2); // 0.30000000000000004
// How Answer is coming incorrect?
// Because firstly we calculating .1 in binary like this:-->
// Answer in binary:-> 0.000110011
// 0.1 * 2 = 0.2
// 0.2 * 2 = 0.4
// 0.4 * 2 = 0.8
// 0.8 * 2 = 1.6
// 0.6 * 2 = 1.2
// 0.2 * 2 = 0.4
// 0.4 * 2 = 0.8
// 0.8 * 2 = 1.6
// Here we can see number start repeating so we can not find the complete binary. so answer is coming incorrect.
// when the value comes equal to 0 we stop and here not coming 0 it repeating.
