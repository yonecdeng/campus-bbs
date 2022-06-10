# 项目介绍

## 简介

1. 技术栈： Vite + typescript + vue3 生态链 + pnpm。

2. 项目开始：代码拉到本地后，输入`pnpm i` 安装依赖 再输入 `pnpm dev`启动

## 包含内容

-   Vite + typescript + vue3 生态链 项目架构

-   Vite 分开发环境和生产环境进行配置
-   新旧浏览器的兼容性处理

-   配置 eslint + stylelint + prettier 去统一代码风格

-   配置 `commitizen` + `commitlint` 去规范代码提交，提交代码时不要执行`git commit` ，而是执行封装好的命令`pnpm commit`

-   对 vue-router 、 pinia、 本地 mock、axios 拦截器、表单验证进行封装

-   支持自动注册组件和自动引入 api

-   集成 icon-park 库和 animate.css 以及 gsap

## 关于类型声明

组件和 apis 的类型声明写在自身文件内

store 里的类型声明单独创建一个 types 文件
