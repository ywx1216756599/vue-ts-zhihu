// 原始数据类型

// Boolean类型
let BooleanVal: boolean = false
// Number类型
let NumberVal: number = 123
// String类型
let StringVal: string = 'hello world'
// undefined类型
let u: undefined = undefined
// null类型
let n: null = null
// any类型
let  anyVal: any = 1
anyVal = false
anyVal = '1'

//数组和元组

// 数字型数组
let arrOfNumber: number[] = [1, 2, 3, 4, 5]
// arrOfNumber.push('1') // 报错 

// 元组
let arr: [string, number] = ['1', 2]
// let arr1: [string, number] = [2, '1'] // 报错
// let arr2: [string, number] = ['1', 2, 3] // 报错
arr.push(1) // 对元组进行数据操作为增加的时候 必须是元组中有的类型
// arr.push(false) // 报错

// interface 接口
interface Person{
    name: string,
    age: number,
    adress ?: string, //可选属性
    readonly gender : string // 只读属性
}
const wixi: Person = {
    name: 'wixi',
    age: 21,
    gender : '男' 
}
//  wixi.gender = '女' // 报错

// 函数 限制参数和放回结果的类型

function add(x: number,y:number): number{
    return x + y
}
// 可选参数
function add1(x: number,y:number,z?:number): number{
    return typeof z === 'number' ? x + y + z : x + y
}
// 函数类型
const add2 = (x: number,y:number,z?:number): number => {
    return typeof z === 'number' ? x + y + z : x + y
}
// interface 写函数类型
interface Func{
    (x: number,y:number,z?:number): number
}
let add3: Func = add2
add(1,2)

// 类型推断 联合类型 类型断言

// 类型推断
 let str = 'aaa' // 自动推断出set => string
//  str = 1 // 报错

// 联合类型
let demo: string | number;
demo = '1'
demo = 1
demo.toString()
// demo.length // 只能使用联合类型中共有的属性

// 类型断言 as 关键字
function demo1(input: number| string): number{
    const str = input as string
    // const str1 = <string> input  也可以用 <xxx>
    if(str.length){
        return str.length
    }else{
        return str.toString().length
    }
}

// 类型守护 (typeof )
function demo2(input: number| string): number{
    if(typeof input === 'string'){
        // 此时input类型是string
        return input.length
    }else{
        // 此时input类型是number
        return str.toString().length
    }
}

// 类 
// 1. public(共有的)外界可以访问 
// 2. private（私有的）只能自己内部访问，不可被子类访问 
// 3. protected（受保护的）外界访问不到，可以被子类访问 
// 4. readonly(只读) 申明只读属性

class Father{
    static userName: string = 'wixi'
    constructor(){
        
    }
    public view(){
        console.log('look me')
    }
    private header(){
        console.log('this is my header')
    }
    protected house() {
        console.log('this is my house')
    }
    public viewMy(){
        this.header()
    }
    readonly age: number = 123
}

class Son extends Father {
    constructor(){
        super()
    }
    fatherHouse(){
        super.house() // 子类可以访问
        // super.header() // 私有属性不能被访问
    }
}

const father = new Father()
const son = new Son()
console.log(Father.userName) // wixi 静态属性或方法可以类名调用

father.view()
// father.age = 1 // 只读不能改变值

son.view() 
// son.header() // 不可被继承
// son.house() // 外界访问不到

// implements关键字 接口的实现
// 接口的继承

interface Radio{
    switchRadio(trigger: boolean): void
}

interface Battery{
    checkBatteryStatus(): void
}
// 继承接口
interface RadioWithBattery extends Radio{
    checkBatteryStatus(): void
}

// implements 关键字 实现接口的所有方法
class Car implements Radio{
    switchRadio(trigger: boolean): void{}
}
class CellPhone implements Radio,Battery{
    switchRadio(trigger: boolean): void{}
    checkBatteryStatus(): void {}
}
class OtherPhone implements RadioWithBattery{
    switchRadio(trigger: boolean): void{}
    checkBatteryStatus(): void {}
}

// 枚举
enum Arr{
    up,
    down,
    left,
    right
}

Arr.up // 0
Arr[0] // 'up'

enum Arr2{
    up = 'UP',
    down = 'DOWN',
    left = 'LEFT',
    right = 'RIGHT'
}

Arr.up // 'UP'
Arr['UP'] // 'up'

// 常量枚举
const enum Arr3{
    up = 'UP',
    down = 'DOWN',
    left = 'LEFT',
    right = 'RIGHT'
}

// 泛型
function echo<T> (args: T): T{
    return args
}
const result = echo<string>('2234')
 

function echo1<T, U> (arr:[ T, U ]):[ U, T ]{
    return [ arr[1], arr[0] ]
}

const result1 = echo1(['string',1])

// 约束泛型
interface GetLength{
    length: number
}

function echo2 <T extends GetLength>(input: T): T{
    console.log(input.length)
    return input
}
let a = echo2('123')
let b = echo2({length: 10})
let c = echo2([1,2,3,4])
let d = echo2(['1',2])

// 字面量
// const str: 'name' = 'name'

// 类型别名 type
type Default = 1 | 2 | 3 | 4
let num: Default = 4

// 交叉类型
type IName = {
    name: string
}
type IPerson = IName & {age: number}

let person: IPerson = {
    name: 'wixi',
    age: 21
}

// 声明文件 放在.d.ts文件
declare var jQuery: (agrs: string) => any
jQuery('#foo')

// 内置类型 
// 变化成可选  Partial

interface Demo{
    name: string,
    age: number
}

type IDemo = Partial<Demo>

// 过滤 类型 Omit

type ODemo = Omit<Demo,'age'>

