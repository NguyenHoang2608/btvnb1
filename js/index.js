var a = 13         // gán `13` vào `a`
var b = a          // copy giá trị `a` vào `b`
b = 37             // gán `37` vào `b`
console.log(a)     // => 13

var a = { c: 13 }  // gán địa chỉ tham chiếu of đối tượng vào `a`
var b = a          // copy địa chỉ của a vào giá trị của b
b.c = 37           // chỉnh sửa giá trị của đối tượng mà `b` tham chiếu tới
console.log(a) 

//b1
const obj1 = { x: 20, y: 30 };

function cloneDeep(obj) {
  return {...obj};
}
const obj2 = cloneDeep(obj1); 
obj2.x = 10;

console.log(obj1);
console.log(obj2);

//b2

const macbooks = ['macbook2015', {model:'macbook2014'}, 'macbook2017']
const apples =[...macbooks]
apples[0] = 'air'
apples[1].model = 'm1'
console.log(macbooks)
console.log(apples)

// Đầu tiên là do sử dụng Shallow coppying, nên chỉ những giá trị nguyên thủy là đc lưu ở chỗ mới òn object{model:'macbook2014'} vẫn lưu ở ô nhớ cũ, khi ta thay đổi,apples[1].model = 'm1' do cùng chỉ vào 1 địa chỉ ô nhớ thì ta đc kết quả kia
//b3
var text = 'outside';
function show() {
  console.log(text) //1
  var text = 'inside';
}
console.log(show())

// undìine vì do cơ chế hoisting nên n sẽ khai báo 1 thg trc nó nên k có giá trị
//b4

let arr = [1, 2, 3, 4, 5, 6, 7];
function inBetween(a){
    return a>2 && a<7;
}

function inArray(a){
  return a<2;
}

console.log(arr.filter(inBetween));

console.log( arr.filter(inArray) ); // 1,2

//b5

function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}

let counter = new Counter();

console.log( counter.up() ); // ?
console.log( counter.up() ); // ?
console.log( counter.down() ); // ?
console.log( counter.down() );

// khi t goi ham up n sẽ cộng giá trị lên 1 rồi ta gọi up thêm lần nữa n lại cộng giá trị lên 1,
// ta gọi hàm down 1 lần n sẽ giảm giá trị đi 1 lần nên sẽ đc kq trên

//b6
console.log("hello");

setTimeout(() => console.log("world"), 0);

console.log("hi");

// vì settimeout sẽ đưa vào hàng chờ đợi các code khác chạy xong thì settime out mới chạy