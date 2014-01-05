var task = {
	
	var content: null,
	var next: null,
	var options: []
}

var activity = {

	first: null,
	last: null,
	/*
	@private 
	@description Task Constructor | Object Factory

	*/
	createTask: function(content, nextTask){

		var task = Object.create('task')
		task.content = content;
		task.next = nextTask;

		return task;
	},

	/*
	@public 
	@description function to create a node add description (Doesn)
	*/

	add: function(content){

		if (!first){
			first = createTask(content,null);
			return true;	
		} 

		var current = first;
		
		while(current.next){
			
			current = current.next
		}

		current.next = createTask(content,null);

		last = current.next; // 
		
		return true;
	},


	/*
	@public
	@description retrieve task by index.
	*/
	getTask: function(index){



	},

	/*
	@public
	@description Iterator to retrieve elements in the list.
	*/

	iterator = {

		index: -1,

		hasNext: function(){ /* Check if has a next element || index minus lenght  */ },

		hasPrev: function(){ /*  Check if has prev elements || index greter than 1 */},

		current: function(){ /* return index task */ return getTask(index); },

		 next : function(){
	        if(this.hasNext()){
	        	this.index = this.index + 1; // set index plus one
	            return this.current();
	        } 
	        return false;
	    },

	    previous : function(){
	        if(this.hasPrevious()){
	            this.index = this.index - 1 // set index minus one
	            return this.current();
	        }
	        return false;
	    }
	
	}



}


