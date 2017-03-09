<template>
	<div id="tabs">
		<!-- 选项卡 -->
    <el-tabs type="card">
      <el-tab-pane label="用户管理">
        <br>
        <el-badge :value="200" :max="99" class="item">
          <el-button size="small">评论</el-button>
        </el-badge>
      
      </el-tab-pane>
      <el-tab-pane label="配置管理">
          <el-switch
            v-model="bSign"
            on-text=""
            off-text="">
          </el-switch>
      </el-tab-pane>
      <el-tab-pane label="角色管理">
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>
      </el-tab-pane>
    </el-tabs>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return {
				tableData: [{
			        date: '2016-05-02',
			        name: '王小虎',
			        address: '上海'
			      }, {
			        date: '2016-05-04',
			        name: '王小虎',
			        address: '上海'
			      }, {
			        date: '2016-05-01',
			        name: '王小虎',
			        address: '上海'
			      }, {
			        date: '2016-05-03',
			        name: '王小虎',
			        address: '上海'
			      }]
			}
		}
	}
</script>