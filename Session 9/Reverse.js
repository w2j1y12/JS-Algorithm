/*
Write a recursive function called reverse which accepts a string and returns a new string in reverse
*/

function reverse(str){
  // add whatever parameters you deem necessary - good luck!
  if(str.length <= 1) return str
  else return reverse(str.slice(1)) + str[0]
}

reverse('awesome')
reverse('rithmschool')
