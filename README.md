# mIIu

---

![mllu.gif](mIIu%20678c30afe19d4b13847774bac4fb46c8/mllu.gif)

<aside>
💡 처음으로 계획해서 완전히 만들어본 프로젝트

</aside>

## 파일 구조 📝

---

## 📂 mllu

```xml
- node_modules
    - react-router-dom
    - framer-motion
- assets
    - pic1~15.png
    - barcode.png
- components
    - Album
        - album.scss
        - album.css
        - album.css.map
        - Album.jsx
    - Header
        - header.css
        - header.scss
        - header.css.map
        - Header.jsx
- routes
    - Home
        - home.css
        - home.scss
        - home.css.map
        - Home.jsx
    - About
        - about.css
        - about.scss
        - about.css.map
        - about.jsx
    - Loading
        - loading.css
        - loading.scss
        - loading.css.map
        - Loading.jsx
    - Musics
        - musics.css
        - musics.scss
        - musics.css.map
        - Musics.jsx
- App.css
- app.css.map
- App.jsx
- app.scss
- index.js
- .gitignore
- package-lock.json
- package.json
- README.md
```

## 사용한 도구 ⛏

---

- React - `SPA가 가능한 JavaScript Framework`
- SCSS - `CSS 전처리기`
- framer-motion - `페이지 이동 애니메이션 라이브러리`
- React-router - `선택 데이터 렌더링 라이브러리`
- git - `버전 관리`
- vscode - `소스 코드 편집기`

### CRA을 사용하여 제작한 프로젝트.

```xml
$ npx create-react-app .
```

### 프로젝트 실행

```xml
$ npm update
$ npm start
```

## 배운 점 🤠

---

1. props의 용도와 사용법
2. React-router에서 컴포넌트 고정 방법
3. 반복되는 코드 줄이는 방법
4. React-router에서 path를 통해 페이지 이동할 때 애니메이션 적용하는 법
5. object 정보들을 props를 통해 받아와서 map으로 뿌리는 법

## 느낀 점 😁

---

1. 확실히 HTML을 사용하여 페이지를 제작하는 것보다 SPA을 사용할 수 있는 React가 정적인

페이지를 만드는 것을 조금 더 수월하게 해주는 것 같다.

1. 반복되는 코드를 처음으로 props와 map을 통해서 코드의 양을 줄여보니 보기에도 수정할 때도

지저분하지 않아서 매우 좋았다.

1. 처음으로 1 ~ 100까지 머리를 쥐어짜며 만들어본 페이지였기에 반성할 점과, 배운 점들이 많아

내 자신을 점검할 수 있는 좋은 시간을 가질 수 있었다.

1. 직접 모두 코드로 적어서 애니메이션이나, 함수를 구현하는 것을 본인의 실력을 높일 수 있고,

모듈이나, 라이브러리를 사용할 경우에는 간편하게 구현할 수 있어 시간을 절약할 수 있다.

## 아쉬웠던 점 😥

---

1. 반응형 페이지를 처음으로 계획하고 적용해보았기에 완성도가 매우 낮았다.
2. 개학에 쫓겨 전체적인 완성도가 많이 높지 않았다.
3. 사용한 모든 도구들의 숙련도가 높지 않았기에 구현 과정에서 다소 애를 먹었다.
4. 확실히 여러 도구들을 만져본다고 CSS를 많이 사용하지 않았어서 그런지 많이 감이 떨어졌었다..
5. 마크업을 할 때, 조금 더 생각해보고 짜기 ( `쓸모없는 태그를 줄이기, 시맨틱 태그들의 의미`)
6. [에러 해결 중 이유를 도무지 알 수 없는 오류 발견..](https://velog.io/@tjdrkr2580/React-Error-React-router-path-white-screen)
