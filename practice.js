class node{
    constructor(value){
         this.value=value;
         this.next=null;
    }
}

class linklikst{
    constructor(){
        this.head=null
        this.size=0
    }
   isEmpty() {
    return this.size==0;  
  }

  getSize(){
    return this.size;
  }
   add(value){
    const nod=new node(value)
    if(this.isEmpty()){
        this.head=node;
    }
    else{
        node.next=this.head;
        this.head=node;
    }
    this.size++;
   }
   print(){
    if(this.isEmpty()){
        document.write("-------list is empty");
    }
    else{
       let curr=this.head;
       let listValue=`` 
       while(curr!=null){
  listValue+=`${curr.data}`
       }
       console.log(listValue," ")
    }
   }

}

const list=new linklikst();
document.write("       list  is empty_:",list.isEmpty());
document.write("-------list is size_:",list.getSize())
list.print();
list.add(10)
list.add(20)
list.add(30)
list.print();