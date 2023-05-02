function isPalindrome(str){
  // add whatever parameters you deem necessary - good luck!
  if(str.length === 1) return true;
  // str 문자열이 홀수일 경우
  if(str.length === 2) return str[0] === str[1];
  // str 문자열이 짝수일 경우
  if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
  return false;
  
}

isPalindrome('awesome')
isPalindrome('foobar')
isPalindrome('tacocat')
isPalindrome('amanaplanacanalpanama')
isPalindrome('amanaplanacanalpandemonium')
