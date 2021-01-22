# OOP

## OOP PRINCIPLES
1. Encapsulation : 캡슐화
    - 관련되어 있는 정보를 한 Object에 담아두고 
    - 외부에 노출 여부를 정한다. 
    - ex) 강아지의 상태를 변경할 수 없지만! 놀아주고 밥주면서 강아지의 상태를 바꿀 수 있다.
2. Abscraction : 추상성 
    - 내부의 복잡성을 이해 하지 않아도 외부에서 사용할 수 있도록 하는 것
3. Inheritance : 상속
    - 잘 만들어둔 데이러틑 기반으로 새로운 제품을 만들어 낼 수 있도록 그 기능을 재사용 할 수 있다.
    - IS-A 관계이다. 개는 동물/ 고양이는 동물/ 돼지는 동물!! 동물을 상속 했기 때문에 전부 동물이라고 말할 수 있다
    - EventTarget <- Node <- [Document / Element / Text] 즉 다 이벤트가 있구나
4. Polymorphism : 다형성
    - 공통된 함수로 기능을 접근 할 수 있다.