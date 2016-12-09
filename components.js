Vue.component('todo-item', {
	props: ['todo'],
	template: '<li>{{todo.name}}</li>'
})