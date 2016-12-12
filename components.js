Vue.component('todo-item', {
	props: ['todo','index'],
	template: '<li>{{index}}-{{todo.name}}<button v-on:click="$emit(\'remove\')">X</button></li>'
})