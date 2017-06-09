Vue

1. 生命周期

        beforeCreate

        created

        beforeMount

        mounted

            beforeUpdate

            updated

        boforeDestory

        destoryed

2. 模版语法

    v-bind:href  ==>  :href

    v-on:click  ==> @click

    修饰符

        v-on:click.prevnt  ==> .prevent 修饰符告诉 v-on 指令对于触发的事件调用 event.preventDefault()

    过滤器

        {{message | captitalize}}

        v-bind:id = "message | captitalize"

        {{ message | filterA('arg1', arg2) }}

            字符串 'arg1' 将传给过滤器作为第二个参数， arg2 表达式的值将被求值然后传给过滤器作为第三个参数

3. 计算属性

    computed : {
        methods ...
    }
