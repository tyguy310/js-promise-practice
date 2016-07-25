// function sum(num1, num2)  {
//   return new Promise(function(resolve, reject)  {
//     resolve(num1 + num2);
//   });
// }
//
// sum(1, 2).then(function(value)  {
//   console.log('first: ' + value);
//   return sum(value, 1);
// }).then(function(value)  {
//   return sum(value,1);
// }).then(function(value) {
//   console.log(value);
// })


// var promise = Promise.resolve($.ajax('http://pokeapi.co/api/v2/pokemon/1'));

function ajaxPromise(url) {
  return Promise.resolve($.ajax(url));
};
ajaxPromise('http://pokeapi.co/api/v2/pokemon/36')
.then(function(value) {
  console.log(value);
  var abilityUrl = value.abilities[0].ability.url;
  return ajaxPromise(abilityUrl)
})
.then(function(ability) {
  console.log(ability.names[0].name);
  console.log(ability.names[1].name);
})
.then(function(sprite)  {
  
})
