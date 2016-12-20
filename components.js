Vue.component('todo-item', {
	props: ['todo', 'index'],
	template: '<li>{{index}}-{{todo.name}}<button @click="remove">X</button></li>',
	methods: {
		remove: function() {
			this.$emit('remove')
		}
	}
})


Vue.component('button-counter', {
	template: '<button @click="increment">{{counter}}</button>',
	data: function() {
		return {
			counter: 0
		}
	},
	methods: {
		increment: function() {
			this.counter += 1;
			this.$emit('increment')
		}
	}
})

Vue.component('slot-child', {
	template: '<div><h2>child title</h2><slot name="header"></slot><slot name="footer"></slot></div>'
})


Vue.component('component-a',{
	template:'<h4>a</h4>'
})

Vue.component('component-b',{
	template:'<h4>b</h4>'
})