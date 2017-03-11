UI 组件

    elementUI

    MintUI

    在 Vue 2.0 中，为自定义组件绑定原生事件必须使用 .native 修饰符：
	<my-component @click.native="handleClick">Click Me</my-component>

 elementUI 安装
	
	1. 安装

		npm i element-ui -D
			
			i 	-> 	install

			D 	-> 	--save-dev

			S 	-> 	--save
	
	2. 使用

		在入口文件引入

			import ElementUI from 'element-ui'
			import 'element-ui/lib/theme-default/index.css'
			
			Vue.use(ElementUI)


 MintUI 安装
	
	1. 安装

		npm i mint-ui -S
	
	2. 使用

		import Vue from 'vue'
		import MintUI from 'mint-ui'
		import 'mint-ui/lib/style.css'
		import App from './App.vue'

		Vue.use(MintUI)


按需引入
	
	npm install babel-plugin-component -D

	.babelrc 修改为

	{
	  "presets": [
	    ["es2015", { "modules": false }]
	  ],
	  "plugins": [["component", [
	    {
	      "libraryName": "mint-ui",
	      "style": true
	    }
	  ]]]
	}
































































