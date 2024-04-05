const createNode = function(value, next=null, index=null){
    return {
        value, 
        next, 
        index
    }
} 



const createList = function(){
    let head = null; 
    let lenght = 0;
    const tail = null;
    
    const append = function( node ){
        if(this.lenght == 0){
            //define head
            this.head = node;
            this.lenght++;
            node.index = this.lenght;
            return;
        }
        if(this.lenght === 1){
            //define head.next to node and now tail point to node
            this.head.next = node;
            this.tail = node;
            this.lenght++;
            node.index = this.lenght;
            return;
        }
        //the element.next in tail now apunt to node, and refresh tail to point to node
        this.tail.next = node;
        this.tail = node; 
        this.lenght++;      
        
        node.index = this.lenght;
    }

    const prepend = function( node ){
        if(this.lenght == 0){
            //define head
            this.head = node;
            this.lenght++;
            node.index = this.lenght;
            return;
        }
        if(this.lenght === 1){
            //define head.next to node and now tail point to node
            this.head.next = node;
            this.tail = node;
            this.lenght++;
            node.index = this.lenght;
            return;
        } 
        
        //at this point we have to do the same that we do whit tail but in head instead 
        node.next = this.head;
        this.head = node; 
        
        this.lenght++;
        node.index = lenght 

    }


    const checkValues = function( node ){
        this.head.next = node;
    }

    const size = ()=> {
        return this.lenght;
    }

    const getHead = ()=> {
        return this.head;
    } 

    const getTail = ()=>{
        return this.tail;
    }

    //since here, we need to traversal the linked list

    const at = function(index){
        currentElement = this.head;
        prevElement = currentElement;
        while(currentElement.index < index || currentElement !== null){
            if(currentElement.index === index){
                return currentElement; 
            }
            prevElement = currentElement;
            currentElement = currentElement.next;
        }

    }


    const pop = function(){
        let lastIndex = this.lenght; 
        let currentElement = this.head; 
        let prevElement = currentElement; 

        while(currentElement.index <= lastIndex){
            if(currentElement.index === lastIndex){
                prevElement.next = null; 
                this.tail = prevElement;
                this.lenght--;
                break;
            }
            prevElement = currentElement;
            currentElement = currentElement.next; 

        }

    }

    const contains = function(value){
        let currentElement = this.head; 
        while(currentElement !== null){
            if(currentElement.value === value){
                return true;
            }
            currentElement = currentElement.next;
        }
        if (currentElement === null) return false;
    }

    const find = function(value){
        let currentElement = this.head; 
        while(currentElement !== null){
            if(currentElement.value === value){
                return currentElement.index;
            }
            currentElement = currentElement.next;
        } 
        return null;
    }
    

    const toString = function(){
        let listToString = ""; 
        let currentElement = this.head;
        while(currentElement !== null){
            listToString += `(${currentElement.value}) -> `; 


            currentElement = currentElement.next;
        }

        listToString+= 'NULL';

        return listToString;

    }


    const insertAt = function(value, index){
        let currentElement = this.head;
        let prevElement = currentElement;

        

        let newNode = createNode(value);

        while(currentElement.index <= index){
            prevElement = currentElement;
            currentElement = currentElement.next; 

            if(currentElement.index === index){
                
                prevElement.next = newNode; 
                newNode.index = currentElement.index;
                newNode.next = currentElement;
                newNode.next.index = currentElement.index + 1;
                this.lenght++;

            }
        }

    }


    const removeAt = function(index){
        let currentElement = this.head;
        let prevElement = currentElement;


        while(currentElement.index <= index){
            prevElement = currentElement;
            currentElement = currentElement.next; 

            if(currentElement.index === index){
                
                prevElement.next = currentElement.next; 
                this.lenght--;

            }
        }
    }

    const newList = {head, lenght, tail, append, prepend, size, getHead, getTail, at, pop, contains, find, toString, insertAt, removeAt}
    
    return newList
}

/*
let myList = createList() 
let myNode = createNode("Val 1") 
let mySecondNode = createNode("Val 2") 
let myThirdNode = createNode("Val 3") 
myList.append(myNode)
myList.append(mySecondNode)
myList.append(myThirdNode)
*/