function LinkedList() {

  var Node = function(element) {
    this.element = element;
    this.next = null;
  }

  var length = 0;
  var head = null;
  
  //returns number of eles in LL
  this.size = function() {
    return length;
  }

//add ele to end of list
  this.append = function(element){
    var node = new Node(element);
    var current;
      if(head === null) {
        head = node;
      } else {
        current = head;
        //loop until we find last element
        while(current.next) {
          current = current.next;
        }
        //get last item and assign next to node to make link
        current.next = node;
      }
    length++;
  }


//removes ele from list given a position
  this.removeAt = function(position) {
   //check for out of bounds values
   if (position > -1 && position < length){
     var current = head;
     var previous;
     var index = 0;
     //remove first item
     if (position === 0){
      head = current.next;
      } else {
        while (index++ < position){
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
    length--;
    return current.element;
    } else {
      return null
    }
  }

  //insert at specified position
  this.insert = function(position, element){
    //check for out of bounds values
    if (position >= 0 && position <= length) {
      var node = new Node(element);
      var previous;
      var index = 0;

      if (position === 0) {
        node.next = current;
        head = node;
      } else {
        while (index++ < position){
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }
      length++
      return true;
    } else {
      return false;
    }
  }

//removes ele
  this.remove = function(element) {

  }


//returns index of element, or -1 if not found
  this.indexOf = function(element){

  }

//returns true if 0 elements, false if length > 0
  this.isEmpty = function() {

  }


// returns only stringed ele values
  this.toString = function() {

  }

  this.print = function() {

  }

}
