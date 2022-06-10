# 项目介绍

## 简介

1. ==架构一个 Vite + typescript + vue3 生态链项目==。文档记录了作者搭建此项目架构的全过程，每个阶段的分支都留在了仓库中，可以一步一步跟着此文档的流程进入到相应的分支中查看对应代码，进而自己搭建出一个类似项目的开发环境。

2. 此项目架构可作为一个通用架构便于开发相同技术栈的项目。

3. 此项目可用于学习 Vite + typescript + vue3 生态链的相关技术

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

## 版权声明

项目本身由作者一人开发完成，其中借鉴了许多网络和书籍的资料，如有侵犯您的权益，可联系作者删除相关内容。
