declare let Vue: any;

interface vm {
    text: number;
    getResult: boolean;
}

let IVm = new Vue({
    el: ".wrapper",
    data: {
        text: "",
        getResult: false
    },
    methods: {
        fenquecy(str:any){
			//处理文档
			
			var strArr=str.split(" ");
			var reg=/,|\.|\?|!|:|;|\r\"\"/g;
			var result=[];
			var str=null;

			//a[]:临时存放 b[]:存放所有的单词 c[]:存放所有单词出现次数 e[]:存放排序后的前十个
			var a=[];
			var b=[];
			var c=[];
			var e=[];
			var d=new Object();

			for(var i=0;i<strArr.length;i++)
			{
				str=strArr[i].replace(reg,'').toLowerCase();
				result.push(str);
			}
			console.log("总共有"+result.length+"个单词");
			//console.log(result);

			d.put=function(key,value)
			{
				d[key]=value;
			}
			for(var i=0;i<result.length;i++)
			{
				if(d[result[i]]==null)
				{
					d.put(result[i],1);
				}else{
					d[result[i]]++;
				}
			}
			//console.log(d);
			//b[]
			for(var i=0;i<result.length;i++)
			{
			    var v = result[i];
			    if(a[v]==null)
			    {
			    	a[v]=0;
			    	b.push(v);
			    }
			}
			//c[]
			for(var i=0;i<b.length;i++)
			{
				c.push(d[b[i]]);
			}
			c.sort(function(a,b){return b-a;});
			//e[]
			for(var j=0;j<10;j++)
			{
				//e.push(c[j]);
				for(var i=0;i<b.length;i++)
				{
					if(d[b[i]]==c[j])
					{
						e.push("Top"+(j+1)+":"+b[i]+"  次数:"+c[j]);
					}
				}
				console.log(e[j]);
			}
        },
        analyze(){
            this.fenquecy(this.text);        
        }
    },
    created() {
        let that: vm = this;
        console.log("通了");
    }
})