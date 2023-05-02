# vue3-wonjin-template

A template that contains useful packages and configs.

![](./vue-project/src/assets/jongang.jpg)

### Install
~~1. npm~~ (will be supported)

~~`npm init vue3-wonjin-template`~~

2. Clone repository

`npm clone https://github.com/wonjinYi/vue3-wonjin-template.git`

3. copy&paste

Download this Replository as ZIP, copy the contents, then paste to your project

### Installed Packages
* vue3
* vue-router
* vite
* scss
* axios
* gh-pages

### Commands
* npm run dev : Run development server
* npm run build : Build with vite (make the new directory `dist`)
* npm run deploy : Deploy to the Github Pages
* npm run lint : Lint with eslint

### Configured 
* vite.config.js
  * All SFCs Use alias **@** for `src`
  * All SFCs load `src/assets/global.scss`
* src/router.js
  * Configure 2 views (main, not-found)
* eslintrc.cjs
  * https://www.gymcoding.co/eslint-prettier
* index.html
  * loads `public/reset.css`
* main.js
  * Inserts `App.vue` to `index.html`
  * Loads router config from `router.js`
* App.vue
  * Contains `router-view`

### Files
```
[assets] : favicon, reset.css
[components]
[views] : MAIN, NOTFOUND view.

App.vue : The root component
main.js
router.js
index.html

.eslintrc.cjs
.prettierrc.json

package-lock.json
package.json

vite.config.js
```