var array = [
  {
    id: 1,
    params: [],
  },
  {
    id: 2,
    params: [
      {
        id: 3,
        params: [
          {
            id: 4,
            params: 'hah',
          },
          {
            id: 5,
            params: [
              {
                id: 6,
                params: [],
              }
            ],
          },
          {
            id: 7,
            params: [],
          },
        ],
      },
    ],
  }
];

var arr = [];

(function findId(obj){
  obj.forEach(function(item){
  if(Object.prototype.toString.apply(item.params) === '[object Array]') findId(item.params);
  arr.push(item.id);
})
})(array);

// (function findId(obj){
//   obj.map(function(item){
//   if(item.params){
//     if(Object.prototype.toString.apply(item.params) === '[object Array]'){
//       findId(item.params);
//     }
//   }
//   arr.push(item.id);
// })
// })(array);

// (function findId(obj){
//   for(var i = 0,j = obj.length; i < j; i ++ ){
//     if(obj[i].params){
//       if(Object.prototype.toString.apply(obj[i].params) === '[object Array]'){
//         findId(obj[i].params);
//       }
//     }
//     arr.push(obj[i].id);
//   }
// })(array)

console.log(arr)




