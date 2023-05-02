/* 
Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward).
Otherwise it returns false.
*/

function isPalindrome(str){
  // add whatever parameters you deem necessary - good luck!
  newStr = ''
  
  if(str.length <= 1) return newStr
  
  newStr = isPalindrome(str.slice(1)) + str[0] 
  return newStr
  
  console.log(newStr)
  
  if(newStr === str) return true
  else return false
}

isPalindrome('awesome')
isPalindrome('foobar')
isPalindrome('tacocat')
isPalindrome('amanaplanacanalpanama')
isPalindrome('amanaplanacanalpandemonium')

// 나는 뒤집은 걸 newStr에 넣어서 기존 str이랑 비교하고 싶었는데 실패

/* 
Expected 'mosewa' to equal false.
Expected 'aboof' to equal false.
Expected 'acocat' to equal true.
Expected 'manaplanacanalpanama' to equal true.
Expected 'uinomednaplanacanalpanama' to equal false.
*/
