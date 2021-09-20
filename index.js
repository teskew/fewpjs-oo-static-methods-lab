class Formatter {
  //add static methods here
static capitalize(str){
  
return str.split("")[0].toUpperCase() + str.slice(1);
}
 static sanitize(str){

  return str.replace(/[^A-Za-z0-9-" "']+/g, '');
 }
static titleize(string){
  let words = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
  let strArr = string.split(" ");
  let finalString = [];

  strArr.map(function(word){
    if (words.includes(word) === false){
      finalString.push(Formatter.capitalize(word));
    
    }else{
      finalString.push(word)
    }
  })

 return Formatter.capitalize(finalString.join(" "));
};

}