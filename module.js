var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello World'
	}
})

var app2 = new Vue({
	el: '#app-2',
	data: {
		message: 'current time:' + new Date()
	}
})

var app3 = new Vue({
	el: '#app-3',
	data: {
		seen: true
	}
})

var app4 = new Vue({
	el: '#app-4',
	data: {
		players: [{
			name: 'kobe'
		}, {
			name: 'james'
		}, {
			name: 'curry'
		}]
	}
})

var app5 = new Vue({
	el: '#app-5',
	data: {
		message: '12345'
	},
	methods: {
		reverseMessage: function() {
			this.message = this.message.split('').reverse().join('')
		}
	},
	computed: {
		reversedMessage: function() {
			return this.message.split('').reverse().join('')
		}
	}
})

var app6 = new Vue({
	el: '#app-6',
	data: {
		message: 'Hello'
	}
})

var app7 = new Vue({
	el: '#app-7',
	data: {
		players: [{
			name: 'kobe'
		}, {
			name: 'james'
		}, {
			name: 'curry'
		}]
	}
})

var childToParent = new Vue({
	el: '#child-to-parent',
	data: {
		total: 0
	},
	methods: {
		incrementTotal: function() {
			this.total += 1;
		}
	}
})

var slotTest = new Vue({
	el: '#slot-parent'
})

var multiComponent = new Vue({
	el: '#multi-component',
	data: {
		currentView: 'component-a'
	}
})

var transitionTest = new Vue({
	el:'#transition-test',
	data:{
		docState:'saved'
	},
	computed:{
		buttonMessage:function(){
			switch(this.docState){
				case 'saved':return 'Edit'
				case 'edited':return 'Save'
			}
		}
	},
	methods:{
		changeState:function(){
			switch(this.docState){
				case 'saved':this.docState = 'edited';break;
				case 'edited':this.docState = 'saved';break;
			}
		}
	}
})


var multiCompTrans = new Vue({
  el: '#multi-comp-trans',
  data: {
    view: 'v-a'
  },
  components: {
    'v-a': {
      template: '<div>Component A</div>'
    },
    'v-b': {
      template: '<div>Component B</div>'
    }
  }
})