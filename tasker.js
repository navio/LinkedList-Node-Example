var task = {
	
	var content: null,
	var next: null,
	var options: []
}

var activity = {


	
	first: null,  // First Task in the activity || Array to make it multiplehead.a
	
	last: null,  // Last Task = Completness &pointer. The last element is discovered by pointer to null object.
	
	lenght: 0,
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

	add: function(content, index){

		// Missing validation.


		if (!first){ 
			first = createTask(content,null);
			return lenght++;	
		} 

		var cIndex = 1
		var current = first;
		
		while(current.next){

			if( cIndex == index ) break;
			
			current = current.next
			cIndex++

		}

		current.next = createTask(content,current.next); // Add old next, to new element.

		last = current.next; // 

		return lenght++;
	},


	/*
	@public
	@description retrieve task by index.
	*/
	get: function(index){

		if( index > lenght || index < 1 ) return false; 

		var cIndex = 1
		var current = first;
		
		while(current.next){

			if( cIndex == index ) break;
			
			current = current.next
			cIndex++

		}

		return current;

	},
	
	/*
	@public
	@description delete element from list	.
	*/

	delete: function(index){

		if( index > lenght || index < 1 ) return false; 

		var cIndex = 1
		var current = first;

		if(index == 1 ) first = current.next;
 
		while(current.next){

			if( cIndex + 1 == index  ){  // to erase 2 and linke 3 to 1 

				nextElement = current.next
				current.next = nextElement.next;
				return current;
			
			} 

			current = current.next
			cIndex++

		}

		return false;


	},

	/*
	@public
	@description Iterator to retrieve elements in the list.
	*/

	iterator = {

		index: 0,

		hasNext: function(){ return index < lenght; /* Check if has a next element || index minus lenght  */ },

		hasPrev: function(){ return index > 1; /*  Check if has prev elements || index greter than 1 */},

		current: function(){ /* return index task */ return get(index); },

		 next : function(){
	        if(this.hasNext()){
	        	this.index = this.index + 1; // set index plus one
	            return this.current();
	        } 
	        return false;
	    },

	    previous: function(){
	        if(this.hasPrevious()){
	            this.index = this.index - 1 // set index minus one
	            return this.current();
	        }
	        return false;
	    },

	    moveTo: function(tindex){

	    	if( tindex > lenght || tindex < 1 ) return false; 
	    	
	    	index = tIndex;
	    	
	    	return  index;
	    }
	
	}



}


