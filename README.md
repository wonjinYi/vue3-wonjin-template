# vue3-wonjin-template
필요한 패키지설치와 설정을 미리 해결해둔 제멋대로 템플릿입니다.

![](./vue-project/src/assets/jongang.jpg)

### 사용하기
여러가지 방법으로 가져다 쓰시면 됩니다.
1. npm package-spec 지정하기
`npm init https://github.com/wonjinYi/vue3-wonjin-template.git`

2. 클론하기
`npm clone https://github.com/wonjinYi/vue3-wonjin-template.git`

3. 복붙하기
다운로드 -- 복사 -- 내 프로젝트에 붙여넣기
### 설치된 패키지
* vue3
* vue-router
* vite
* scss
* axios
* gh-pages

### 커맨드
* npm run dev : 개발서버 실행
* npm run build : 빌드
* npm run deploy : GITHUB PAGES로 배포
* npm run lint : eslint로 린팅

### 설정된 내용
* vite.config.js
  * `src`폴더를 `@`으로 가리킬 수 있습니다.
  * 모든 SFC에서 `src/assets/global.scss`를 불러옵니다.
* src/router.js
  * 두 개의 뷰를 표시합니다. (메인, NOTFOUND)
* eslintrc.cjs
  * 린트 설정이 되어있습니다. 
  * https://www.gymcoding.co/eslint-prettier
* index.html
  * `public/reset.css`를 불러옵니다.
* main.js
  * App.vue를 index.html에 삽입합니다.
  * router.js 라우터 설정을 불러옵니다.
* App.vue
  * router-view가 잡혀있습니다.

### 프로젝트 폴더 구조
vue-project 폴더 내부입니다.
```
[assets] : favicon, reset.css
[components]
[views] : MAIN, NOTFOUND 두 개 뷰 포함

App.vue : 최상위 컴포넌트
main.js
router.js : vue-router설정
index.html

.eslintrc.cjs
.prettierrc.json

package-lock.json
package.json

vite.config.js
```