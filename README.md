# 配置Vue初始化项目

## 技术栈
Vue2.5 + Vue-router3.0 + Vuex3.0 + SASS + Node.js(express) + Karma + Mocha + Chai + ESLint + ES6 + Webpack

## 1更改配置
创建配置文件`vue.vue.config.js`
```
vue.vue.config.js
```
## 2使用sass
```
npm install sass-loader node-sass --save-dev
```

## 3使用ESlint
```
vue add @vue/eslint
vue add @vue/eslint --config airbnb --lintOn save
```
## 4配置编辑器
创建`.editorconfig`
```
root = true

[*]
charset = utf-8
end_of_line = lf
indent_style = space
insert_final_newline = true
trim_trailing_whitespace = true

[*.{js,jsx,scss,vue}]
indent_size = 2

[Makefile]
indent_style = tab

```

## 5单元测试
```
npm i karma mocha chai karma-mocha karma-chai -D
```

## 6路由
```
npm i vue-router -S
```

## 7axios
```
npm i axios -S
```

## 7Vuex
```
npm i vuex -S
```
