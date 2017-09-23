
function Stack() {
  //props go here
  var items = [];

  //add to end/top of stack
  this.push = function(element) {
    items.push(element);
  }

  //remove items from the stack (LIFO)
  this.pop = function(){
    items.pop();
  }

  //helper method to see last item added to our stack
  this.peek = function(){
    return items[items.length - 1]
  }

  //checks to see if stack is 0
  this.isEmpty = function(){
    return items.length == 0
  }

  //checks size of our stack
  this.size = function(){
    return items.length;
  }

  //clear our stack
  this.clear = function(){
    items = [];
  }

  //print contents
  this.print = function(){
    console.log(items.toString())
  }
}
