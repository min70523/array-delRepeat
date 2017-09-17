// let arr=[];
// console.log(arr);
// i='x';                            //   全局作用域
// for(let i=0;i<arr.length;i++){    //i  独立作用域  作用域for()里边
// 	i=10;                         //   块级作用域
// }
// let arr=new Array(2); //构造函数只有一个参数，参数为数字，数字代表数组的长度 
// console.log(arr);

// let arr=Array.of(5);    //解决办法
// console.log(arr2)
// let arr=[1,2,3,4,5];
// let arr1=['x','y','z'];
// let arr2=['a','b','c'];
// // arr.push(...arr1);
// // console.log(arr);
// // arr.pop();
// // arr.pop();
// // arr.pop();
// // arr.pop();
// // arr.pop();
// // arr.length=0;
// // console.log(arr.splice(2,3,'x'));     //万能添加与删除
// console.log(arr.concat(arr1,arr2));
// console.log(arr);


//箭头函数    
// let fn=(num)=>({name:'ssas',age:23});    //返回一个json对象
// let aa=(num)=>{                        
// 	return {name:'asdad'};
// }
// console.log(fn(2));
// console.log(aa(2));


//去重  delRepeat [1,2,3,4,5,6]   
//不重复 -新数组
//判断新数组有没有 arr[i]
//没有 放
//return 新数组        
let arr=[100,2323,1650,2323,3,100,5,5,1650,6];
let arr1=[100,2323,1650,2323,3,100,5,5,1650,6];

// function delRepeat(arr){
// 	let newarr=[];
// 	for(let i=0;i<arr.length;i++){
// 	if(!newarr.includes(arr[i])){
// 			newarr.push(arr[i]);
// 	 } 
// 	} 	 
// 	return newarr;
// }
// let result=delRepeat(arr);
// console.log(result);
// 
// 
//2
// function delRepeat(arr){
// 	let newarr=[];	
// 	for(let i=0;i<arr.length;i++){
// 		let flag=true;                      //用一个变量保存当前是否能放
// 		for(let j=i+1;j<arr.length;j++){
// 			if(arr[i]==arr[j]){
// 				flag=false;              //不放
// 				break;
// 		}
// 	 }
// 	 if(flag){                          //一轮比完都不相等，让到新数组
// 		newarr.push(arr[i])		
// 	 }	 
// 	}	
// 	return newarr;
// }
// let result=delRepeat(arr);
// console.log(result);
// 3
// function delRepeat(arr){
// 	let newarr=[];
// 	arr.sort();
// 	for(i=0;i<arr.length;i++){
// 		if(arr[i]!=arr[i+1]){
// 			newarr.push(arr[i]);
// 		}
// 	}
// 	return newarr;
// }
// let result=delRepeat(arr);
// console.log(result);
// 
// 4
function delRepeat(arr){
	let newarr=[];
	for(i=0;i<arr.length;i++){
		let arr1=[];
		for(j=i+1;j<arr.length;j++){
			arr1[arr1.length]=arr[j];
		}
		if(arr[i]==arr1[i]){
			newarr[newarr.length]=arr[i];
		}
	}
	return newarr;
}
let result=delRepeat(arr);
console.log(result);
// // 每一个数组都有去重的方法
// 因此给Array的构造函数的原型对象加一个方法
// Array.prototype.delRepeat=function(){
// 	let newarr=[];	
// 	for(let i=0;i<this.length;i++){
// 		let flag=true;                      //用一个变量保存当前是否能放
// 		for(let j=i+1;j<this.length;j++){
// 			if(this[i]==this[j]){
// 				flag=false;              //不放
// 				break;
// 		}
// 	 }
// 	 if(flag){                          //一轮比完都不相等，让到新数组
// 		newarr.push(this[i])		
// 	 }	 
// 	}	
// 	return newarr;
// }
// let result=arr1.delRepeat();
// console.log(result);