class PriorityQueue{
    constructor(){
    this.values =[];
    }
    enqueue(val, priority){
    this.values.push({val:val,priority});
    this.sort()
    };
    dequeue(){
    return this.values.shift().val;
    }
    isEmpty(){
        return this.values.length==0
    }
    
    front(){
        
        return this.values[0].val
    
    }
    
    
    sort(){
    this.values.sort((a,b) => a.priority -b.priority);
    };
    }
    
    const pq=new PriorityQueue();
    class WeightGraph{
        constructor(){
            this.adjlist=new Map();
        }
    Addvert(ver){
      
            this.adjlist.set(ver,[])
        
    }
    AddEdgeandWeight(var1,var2,weight){
     
        this.adjlist.get(var1).push({target:var2,wt:weight})
    
       
    }
    
    print(){
      
     let keys=this.adjlist.keys();
    
     for(let key of keys){
        document.write(key,'->',this.adjlist.get(key))
     }
        document.write("1")
    }
    
    
    dijkstra(source){
    
    
            let dist={}
            
            for(let ver of this.adjlist.keys()){
                dist[ver]=Infinity;
            }

            document.write(dist)
    
            dist[source]=0
    
            pq.enqueue(source,0)
    
            while(!pq.isEmpty()){
    
                let source=pq.dequeue();
                
                let sourceAdj=this.adjlist.get(source);
                 document.write(sourceAdj)
                for(let curr of sourceAdj){
    
                    if(dist[curr.target]>dist[source]+curr.wt){
                        dist[curr.target]==dist[source]+curr.wt;
                        pq.enqueue(curr.target,dist[curr.target])
                    }
    
               
                }
            }
            return dist
    
    }
    
    
    }
    
    let g=new WeightGraph();
    g.Addvert('A')
    g.Addvert('B')
    g.Addvert('C')
    g.Addvert('D')
    g.Addvert('E')
    
    g.AddEdgeandWeight('A','B',10)
    g.AddEdgeandWeight('A','C',3)
    g.AddEdgeandWeight('B','C',1)
    g.AddEdgeandWeight('C','B',4)
    g.AddEdgeandWeight('B','D',2)
    g.AddEdgeandWeight('D','E',7)
    g.AddEdgeandWeight('E','D',9)
    g.AddEdgeandWeight('C','E',2)
    g.AddEdgeandWeight('C','D',8)
    g.print()