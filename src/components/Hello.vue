<template>
    <div>
        {{msg}} -- {{name}}
        <p>
            <input type="text" placeholder="请输入" @keyup.enter="addFeature">
        </p>
        <ul>
            <li v-for="item in features" :key="item.id">{{item.name}}</li>
        </ul>    
        特性数量{{featureCount}}
    </div>
</template>

<script lang="ts">
  
import { Component, Prop, Vue, Emit, Watch } from 'vue-property-decorator';
export class Feature {
  constructor(public id: number, public name: string, public version: string) {}
}
//泛型
interface result<T>{
    status: 0 | 1 | 2;
    data: T[];
}

// 泛型函数
function getData<T>(): Promise<result<T>> {
    const data : any[] = [
        { id: 1, name: "类型注解", version: "2.0" },
        { id: 2, name: "编译型语言", version: "1.0" }
    ]
    return Promise.resolve({status:2,data } as result<T>)
} 

@Component({
  props: {
    // 属性也可以在这里配置
    sname: {
      type: String,
      default: "匿名"
    }
  }
})
export default class HelloWorld extends Vue {
    // private 仅当前类可用
    // protected 子类也可以用
    // public  都可以用

    @Prop() private msg!: string;  // 属性msg必填项, 字符串类型    // private修饰符 私有属性
    @Prop({default:'匿名'}) private name?: string;  // !必填  ?选填
    @Prop() private obj?: {foo:string}; 

    
    private features:Feature[] = [];

    async created(){
        const result = await getData<Feature>();
        this.features = result.data;
    }

    // addFeature(e:any){
    //     this.features.push({id:this.features.length+1,name:e.target.value,version:'1.0'});
    //     e.target.value = '';
    // }
    @Emit()
    addFeature(e:any){
        const feature = {id:this.features.length+1,name:e.target.value,version:'1.0'};
        this.features.push(feature);
        e.target.value = '';
        return feature; // 返回值作为参数
    }

    // 计算属性
    get featureCount() {
        return this.features.length;
    }
    
    @Watch('features')
    watchFeatures(val: Feature[],old:any) {
        console.log('监听开始');
        console.log(val);
        console.log('监听结束')

    }

 
}

 
let a = 'asd';    //类型推论
let as : string;  //类型注解
a = 'asdd';
as = "assdsddd";
console.log(a);
console.log(as);

// 数组类型
let arr : (number | string)[];
let arr1 : Array<string>;
let names : string[];
names = ["jack","tom"];
console.log(names)

//任意类型
let list: any[] = [1,true,'free'];
list[0] = 'list';

//函数中使用
function greeting(person: string): string{
  return "hello, "+person;
}
greeting("tom");

//void 类型
function warn():void {
  alert("alert!!!");
}

//内置类型  string,number,boolean,void,any
 
// function sayHello(name:string, age?:number):string { 
function sayHello(name:string, age:number=20):string {
    return name + ' ' + age;
}
sayHello('tom', 20);

// 函数重载：多个同名函数，通过参数数量或者类型不同或者返回值不同  
function update(a:{foo: string}): string;
function update(a:string): object;
function update(a:any): any{
    if(typeof a === 'object'){
        return a.foo;
    }else{
        return {foo:a};
    }
}
update({ foo: "jerry" });
update("jerry");



class people{
    readonly number : string = '12222';
     
    constructor(public color:string){ 
        console.log(color)
    }
}
let lisi = new people('red');
console.log(lisi.number)
class man extends people {
    constructor(){
        super('green'); 
    }
}



class Employee {
  private firstName: string = "Mike";
  private lastName: string = "James";

  get fullName(): string {
    return this.firstName + " " + this.lastName;
  }
  set fullName(newName: string) {
    console.log("您修改了用户名");
    this.firstName = newName.split(" ")[0];
    this.lastName = newName.split(" ")[1];
  }
}
const employee = new Employee();

employee.fullName = "Bob Smith";

// 接口约束结构
interface Person {
    firstName: string;
    lastName: string;
    sayHello(): string; // 要求实现方法
}

function greeting2(per:Person) {
    return "Hello, "+per.firstName+"  "+per.lastName;
}
// 类实现接口
class Greeter implements Person {
    constructor(public firstName:string, public lastName:string){}
    sayHello(){
        return "Hello, "+ this.firstName +"  "+ this.lastName;
    }
}
  

const user = { firstName: "Jane", lastName: "User", sayHello: () => "lalala" };

const result = greeting2(user)
console.log(result)

const temp = new Greeter("a","b");
console.log(greeting2(temp));

</script>
 
<style scoped lang="scss">
 
</style>
