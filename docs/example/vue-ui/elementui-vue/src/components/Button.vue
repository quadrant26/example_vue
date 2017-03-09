<template>
	<div id="button">
		<el-button>默认按钮</el-button>
    	<el-button type="primary">主要按钮</el-button>
    	<el-button type="text">文字按钮</el-button>
    	<div class="empty_height"></div>
    	<el-button :plain="true" :disabled="true">主要按钮</el-button>
		<el-button type="primary" :disabled="true">主要按钮</el-button>
		<el-button type="text" :disabled="true">文字按钮</el-button>
		<div class="empty_height"></div>
		<div class="block">
			<span class="demonstration">默认显示颜色</span>
			<span class="wrapper">
				<el-button type="success">成功按钮</el-button>
				<el-button type="warning">警告按钮</el-button>
				<el-button type="danger">危险按钮</el-button>
				<el-button type="info">信息按钮</el-button>
			</span>
		</div>
		<div class="empty_height"></div>
		<div class="block">
			<span class="demonstration">hover 显示颜色</span>
			<span class="wrapper">
				<el-button :plain="true" type="success">成功按钮</el-button>
				<el-button :plain="true" type="warning">警告按钮</el-button>
				<el-button :plain="true" type="danger">危险按钮</el-button>
				<el-button :plain="true" type="info">信息按钮</el-button>
			</span>
		</div>
		<div class="empty_height"></div>
		<div class="block">
			<span class="demonstration">hover 显示颜色</span>
			<span class="wrapper">
				<el-button type="primary" icon="edit"></el-button>
				<el-button type="primary" icon="share"></el-button>
				<el-button type="primary" icon="delete"></el-button>
				<el-button type="primary" icon="search">搜索</el-button>
				<el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
			</span>
		</div>
		<div class="empty_height"></div>
		<div class="block">
			<span class="demonstration">hover 显示颜色</span>
			<span class="wrapper">
				<el-button-group>
					<el-button type="primary" icon="arrow-left">上一页</el-button>
					<el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
				</el-button-group>
				<el-button-group>
					<el-button type="primary" icon="edit"></el-button>
					<el-button type="primary" icon="share"></el-button>
					<el-button type="primary" icon="delete"></el-button>
				</el-button-group>
			</span>
		</div>
				
	</div>
</template>

<style type="text/css">
.empty_height{ height:15px; }
</style>
