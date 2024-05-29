### 类型别名(type)与接口之间的区别

1. 类型别名和接口非常相似，在很多情况下你可以自由选择使用它们。 
几乎所有 interface 的功能都可以在 type 中使用，
**关键区别在于类型不能重新打开以添加新属性，而接口总是可以扩展的。**
总结：接口可以声明合并，而类型别名不行。
2. 接口只能用于声明对象的形状，而不能重命名基本类型。

- 拓展接口
```javascript
// interface
  interface Animal {
    name: string;
  }

  interface Bear extends Animal {
    honey: boolean;
  }

  const bear = getBear();
  bear.name;
  bear.honey;
// type（通过交集拓展类型）
type Animal = {
  name: string;
}

type Bear = Animal & { 
  honey: boolean;
}

const bear = getBear();
bear.name;
bear.honey;
```
- 添加新字段
```javascript
// interface
  interface Window {
    title: string;
  }

  interface Window {
    ts: TypeScriptAPI;
  }

  const w: Window = {
    title: "My window",
    ts: {}
  };
// type 类型一旦创建就不能更改了。
  type Window = {
    title: string;
  }

  type Window = {
    ts: TypeScriptAPI;
  }

  const w: Window = {
  
}
```

### 泛型使用规则
类型参数用于关联多个值的类型。
1. 规则：在可行的情况下，尽量使用类型参数本身而不是对其进行约束。
```javascript
function firstElement1<Type>(arr: Type[]) {
  return arr[0];
}
 
function firstElement2<Type extends any[]>(arr: Type) {
  return arr[0];
}
 
// a: number (good)
const a = firstElement1([1, 2, 3]);
// b: any (bad)
const b = firstElement2([1, 2, 3]);
```
2. 尽量减少类型参数的使用
```javascript
// good
function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
  return arr.filter(func);
}
// bad(我们创建了一个名为 Func 的类型参数，它不表示两个值之间的关系。 
// 这总是一个危险的信号，因为这意味着调用者想要指定类型参数时，必须手动指定一
// 个额外的类型参数，而没有任何实际用途。  Func 只会让函数更难读懂和理解！)
function filter2<Type, Func extends (arg: Type) => boolean>(
  arr: Type[],
  func: Func
): Type[] {
  return arr.filter(func);
}
```

