<p align="center">
<img width="675" alt="Image" style="pointer-event: none;" src="https://github.com/user-attachments/assets/884a01c9-ded7-431a-a326-5e0437039041" />
</p>

# Vue Starter Template

<p align="center">
  <img alt="Vue Logo" width="300" src="./public/choosla.svg" />
</p>

<p align="center"">
  ⚡️ Vite + Vue 3 + JavaScript + Tailwind + ESLint + Auto Import 환경 템플릿 ⚡️
</p>

---

## 🛠️ 기술 스택

- [Vue 3 (Composition API + `<script setup>`)](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [vite-plugin-vue-devtools](https://github.com/webfansplz/vite-plugin-vue-devtools)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint Flat Config](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)


---

## 📦 프로젝트 설치
### 1. 기본 설치
```bash
yarn install
```

### 2. Tailwind CSS v4 설정

1. `assets/main.css` 파일에 다음을 추가한다:

```css
@import 'tailwindcss';

:root {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  ...

```

> ✅ `@import 'tailwindcss';`는 Tailwind CSS v4부터 지원되는 방식이다.

2. 다른 폴더에 CSS 파일을 생성한 경우, 엔트리 파일(`main.ts` 또는 `main.js`)에서 다음과 같이 경로를 수정한다:

```js
import './assets/[your file name].css'
```