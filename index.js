// 阅读推荐的链接，复习JavaScript中数组的相关方法

// 写程序判断下列变量是不是数组类型。
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(Array.isArray(a));
console.log(Array.isArray(b));

// 编写程序，将下面数组中的每一项都乘以2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
var len = a.length;
for(var i = 0; i < len; i++){
    a[i] = a[i] * 2 ;
}

// 编写程序，按下面的要求输出结果。
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
var n = parseInt(prompt("请输入数字："));
// var n = 3;
var out = "";
switch(n){
    case 1:	
    	//console.log("'");
    	out += "'";
        for (var i = 0; i < colors.length; i++) {
        	//console.log(colors[i]);
        	out += colors[i];
        	if( i == colors.length - 1)
        		break;
        	//console.log(" ");
        	out += " ";
        }
        out += "'";
        console.log(out);
        break;
    case 2:
        // console.log("'");
        out += "'";
        for (var i = 0; i < colors.length; i++) {
        	// console.log(colors[i]);
        	out += colors[i];
        	if( i == colors.length - 1)
        		break;
        	out += "+";
        }
        out += "'";
       	console.log(out);
        break; 
    case 3:
        out += "'";
        for (var i = 0; i < colors.length; i++) {
        	out += colors[i];
        	if( i == colors.length - 1)
        		break;
        	out += ",";
        }
        out += "'";
        console.log(out);
        break; 
}

// 编写程序，将下面数组中的数字按从大到小的顺序排序。
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
for (var i = 0; i < a.length-1; i++) {
	for (var j = i + 1; j < a.length; j++) {
		if(a[i] < a[j]){
			var temp = a[i];
			a[i] = a[j];
			a[j] = temp;
		}
	}
}
console.log(a);

// 编程程序，找出下列数组中出现频率最高的元素。
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var b = [], c = [];
// var d = {};
// for (var i = 0; i < a.length; i++) {
// 	d[]
// }
var n = 0;
for (var i = 0; i < a.length; i++) {
	if(b.indexOf(a[i]) == -1){
		b[n] = a[i];
		c[n] = 1;
		n++;
	}
	else{
		c[b.indexOf(a[i])]++;
	}
}
console.log(b);
console.log(c);
var max = 0, maxb;
for (var i = 0; i < c.length; i++) {
	if(c[i] > max){
		max = c[i];
		maxb = i;
	}
}
console.log(max);
