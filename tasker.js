
var node = {
	
	content : null,
	next : null,
	options : []

}

var list = {

	first : null,  
	last: null,  
	length: 0,
	index: 0,
	
	/*
	@private 
	@description Task Constructor | Object Factory
	*/
	createNode: function(content, nextTask){

		var newTask = Object.create(node)

		newTask.content = content;
		newTask.next = nextTask;

		return newTask;
	},
	
	/*
	@private 
	@description Count elements  
	*/

	count: function(){

		var cIndex = 0
		var current = this.first;
		
		while(current.next){
	
			current = current.next
			cIndex++
		
		}

		this.last = current;
		this.length = cIndex;

		return cIndex; 

	},




	/*
	@public 
	@description function to create a node add description (Doesn)
	*/
	add: function(content, index){

		var that = this;

		if (!that.first){ 
			that.first = that.last = that.createNode(content,null);
			that.length = 1;
			return that.first;	
		} 

		if(index == null) index = 0; // basically to go to the last element.

		var cIndex = 1
		var current = that.first;
		
		while(current.next){

			if( cIndex == index ) break;
			
			current = current.next
			cIndex++

		}

		if ( typeof content == 'node') { // check if object and has element next

			if ( content.next == null ) content.next = elementToAttach; // if new element null attach previous element.

			current.next = content; // attach new content to current.next and for case on single node is complete.

			if ( elementToAttach != null ) that.add(elementToAttach, null);	// if element to attach to content is not null, then attach to last element.
		    		
			that.count(); // Recount Elements in case of increase the chain.
			
			return current;

		}

		current.next = that.createNode(content,current.next); // Add old next, to new element.
				
		that.count();

		return current;
		

	},


	/*
	@public
	@description retrieve task by index.
	*/
	get: function(index){

		if( index > this.length || index < 1 ) return false; 

		var cIndex = 1
		var current = this.first;
		
		while(current.next){

			if( cIndex == index ) break;
			
			current = current.next
			cIndex++

		}

		return current;

	},
	
	/*
	@public
	@param index, of task to be remove;
	@param all, boolean if true remove following tasks. 
	@description delete element from list.
	@return delete node
	*/
	
	delete: function(index, all){

		if( index > this.length || index < 1 ) return false; 

		var cIndex = 1
		var current = this.first;

		if(index == 1 ) this.first = current.next;
 
		while(current.next){

			if( cIndex + 1 == index  ){  // to erase 2 and link 3 to 1 

				nextElement = current.next
				
				current.next = nextElement.next;
				
				if(all) current.next = null;

				return nextElement;
			
			} 

			current = current.next
			
			cIndex--;

		}

		return false;


	},


	/*
	@private 
	@description check if more elements exist. 
	*/
	hasNext: function(){ return this.index < this.length;  }, // or has  return this.current().next == null ? true : false 

	/*
	@private 
	@description check if there are previous elements. 
	*/
	hasPrev: function(){ return this.index > 1; },

	
	/*
	@public
	@description Iterator current element
	*/
	current: function(){ return this.get(this.index); },


	/*
	@public
	@description Check if there are still element and return the next.
	*/
	next : function(){
        if(this.hasNext()){
        	this.index = this.index + 1; 
            return this.current();
        } 
        return false;
    },

    /*
	@public
	@description Check if there are element before the current element and return the 
	*/
    previous: function(){
        
        if(this.hasPrev()){
           
            this.index = this.index - 1; // set index minus one
            return this.current();
        
        }
        
        return false;
    },

    /*
	@public
	@description move index 
	*/
    moveTo: function(index){

    	if( index > this.length || index < 1 ) return false; 
    	
    	this.index = index;
    	
    	return this.index;
    }
	

}
