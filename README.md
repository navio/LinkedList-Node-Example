#TaskerJS

##Overview


The purpose of this code is to provide a data strcuture with endless growing capabilities (linked list), easy to iterate, and rehusable to suit the needs of composing activities. 

## Requirements

* Add as many elements as you need.
* Read thru the whole list
* Add an element before or after any other element.
* Remove any element of the index
* Modify content of any element
* Index Searchable
* Multi Headed
* Optional Directions [To other elements or activities]

##Functions
 
* Add (content, index || null)
* Iterator
	* Next
	* Previous
	* Current
* Get(index)
* Paths(index)


###Add Task
A task can be any JS object from text, JSON, function or a reference to another task or activity.

		myActivity.add('This is my new element');
		
		myActivity.add({
						 title:"My Activity",
						 description:"How I do it?",
						 alternativeTask:otherTask.first
						 });
						 
		myActivity.add(function(){ alert("Execute Me")}); 

