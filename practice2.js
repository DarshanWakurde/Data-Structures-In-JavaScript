class node{
    constructor(data){
      this.data=data;
      this.next=null;
    }
}

class linkedlist{
    constructor(data){
          this.head=null;
          this.size=0;
    }
    
    empty(){
        return this.size===0;
    }
    getsize(){
        return this.size;
    }
}

let l=new linkedlist();
document.write(l.empty());
document.write(l.getsize());