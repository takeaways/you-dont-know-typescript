# you-dont-know-typescript

## 타입스크립트란?
- 자바스크립트를 베이스로 하는 superset of javascript
- Statically Typed (compile errros)
- 자바스크립트 런타임이 사용하는 어느 곳에서든 사용할 수 있다
- ts -> ( compiler tsc or babel )-> js

## 타입스크립트가 뜨는 이유
- 자바스크립틑 런타임에 타입이 정해진다. 그렇기 때문에 위험 -> Typescript는 컴파일시 타입을 확인한다.
```js
let age = 10;
age = 'welcome'; // bad!! 가독성이 떨어 져요!
```
- OOP가 가능하다.

## How To Study?
- 자바스크립트의 기본 문법을 공부합니다.
- 타입 시스템을 정확히 이해한다.
- [TypeScript](https://www.typescriptlang.org)

## 타입스크립트 컴파일러 툴
1. tsc
- 브라우저는 타입스크립트를 이해할 수 없어요 ts-> js로 컴파일 합시다
```bash
tsc -w(--watch)
```
> ts-node를 사용하면 한 번에 바로 사용할 수 있습니다.

## 기본타입
### 타입이란?
- [기본타입](./02기본타입/기본타입.md)