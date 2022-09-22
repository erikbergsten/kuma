import{_ as D,r as a,o as l,b as L,w as o,d as r,e as _,K as p,f as u,h as n,i as q,v as B,F as I,j as P,t as d,P as F,m as K,k as z,l as w,s as v,n as g,p as H}from"./index.2f6d90b0.js";import{g as M}from"./tableDataUtils.f37d211d.js";import{D as U}from"./DataOverview.cd1778b1.js";import{E as R}from"./EntityURLControl.97461fef.js";import{F as Y}from"./FrameSkeleton.ef3c14b1.js";import{L as C}from"./LabelList.27a15810.js";import{T as O}from"./TabsWidget.37f6a0c6.js";import{Y as W}from"./YamlView.25baae1a.js";import"./ErrorBlock.65239dfd.js";import"./CodeBlock.45d0fc63.js";import"./index.58caa11d.js";const G={name:"DocumentationLink",props:{href:{type:String,required:!0}}},j=_(" Documentation ");function Z(s,e,m,f,t,i){const y=a("KIcon"),c=a("KButton");return l(),L(c,{class:"docs-link",appearance:"outline",size:"small",target:"_blank",to:m.href},{icon:o(()=>[r(y,{icon:"externalLink"})]),default:o(()=>[j]),_:1},8,["to"])}const J=D(G,[["render",Z],["__scopeId","data-v-4d49910f"]]),Q={name:"PolicyConnections",components:{LabelList:C},props:{mesh:{type:String,required:!0},policyType:{type:String,required:!0},policyName:{type:String,required:!0}},data(){return{hasDataplanes:!1,isLoading:!0,hasError:!1,dataplanes:[],searchInput:""}},computed:{filteredDataplanes(){const s=this.searchInput.toLowerCase();return this.dataplanes.filter(({dataplane:{name:e}})=>e.toLowerCase().includes(s))}},watch:{policyName(){this.fetchPolicyConntections()}},mounted(){this.fetchPolicyConntections()},methods:{async fetchPolicyConntections(){this.hasError=!1,this.isLoading=!0;try{const{items:s,total:e}=await p.getPolicyConnections({mesh:this.mesh,policyType:this.policyType,policyName:this.policyName});this.hasDataplanes=e>0,this.dataplanes=s}catch{this.hasError=!0}finally{this.isLoading=!1}}}},X=n("h4",null,"Dataplanes",-1);function $(s,e,m,f,t,i){const y=a("router-link"),c=a("LabelList");return l(),u("div",null,[r(c,{"has-error":t.hasError,"is-loading":t.isLoading,"is-empty":!t.hasDataplanes},{default:o(()=>[n("ul",null,[n("li",null,[X,q(n("input",{id:"dataplane-search","onUpdate:modelValue":e[0]||(e[0]=h=>t.searchInput=h),type:"text",class:"k-input mb-4",placeholder:"Filter by name",required:""},null,512),[[B,t.searchInput]]),(l(!0),u(I,null,P(i.filteredDataplanes,(h,E)=>(l(),u("p",{key:E,class:"my-1","data-testid":"dataplane-name"},[r(y,{to:{name:"data-plane-list-view",query:{ns:h.dataplane.name},params:{mesh:h.dataplane.mesh}}},{default:o(()=>[_(d(h.dataplane.name),1)]),_:2},1032,["to"])]))),128))])])]),_:1},8,["has-error","is-loading","is-empty"])])}const tt=D(Q,[["render",$]]),et={name:"PolicyView",components:{DataOverview:U,DocumentationLink:J,EntityURLControl:R,FrameSkeleton:Y,LabelList:C,PolicyConnections:tt,TabsWidget:O,YamlView:W},props:{policyPath:{type:String,required:!0}},data(){return{isLoading:!0,isEmpty:!1,error:null,entityIsLoading:!0,entityIsEmpty:!1,entityHasError:!1,tableDataIsEmpty:!1,tableData:{headers:[{key:"actions",hideLabel:!0},{label:"Name",key:"name"},{label:"Mesh",key:"mesh"},{label:"Type",key:"type"}],data:[]},tabs:[{hash:"#overview",title:"Overview"},{hash:"#affected-dpps",title:"Affected DPPs"},{hash:"#yaml",title:"YAML"}],entity:{},rawEntity:{},pageSize:F,next:null}},computed:{...K({policiesByPath:s=>s.policiesByPath}),...z({kumaDocsVersion:"config/getKumaDocsVersion"}),policy(){return this.policiesByPath[this.policyPath]},docsURL(){return`https://kuma.io/docs/${this.kumaDocsVersion}/policies/${this.policy.path}/`}},watch:{$route(){this.isLoading=!0,this.isEmpty=!1,this.entityIsLoading=!0,this.entityIsEmpty=!1,this.entityHasError=!1,this.tableDataIsEmpty=!1,this.error=null,this.loadData()}},beforeMount(){this.loadData()},methods:{async loadData(s="0"){this.isLoading=!0,this.error=null;const e=this.$route.query.ns||null,m=this.$route.params.mesh||null,f=this.policy.path;try{const{data:t,next:i}=await M({getSingleEntity:p.getSinglePolicyEntity.bind(p),getAllEntitiesFromPath:p.getAllPolicyEntities.bind(p),getAllEntitiesFromMesh:p.getAllPolicyEntitiesFromMesh.bind(p),path:f,mesh:m,query:e,size:this.pageSize,offset:s});if(this.next=i,t.length){this.tableData.data=t,this.tableDataIsEmpty=!1,this.isEmpty=!1;const y=["type","name","mesh"],c=t[0];this.entity=w(c,y),this.rawEntity=v(c)}else this.tableData.data=[],this.tableDataIsEmpty=!0,this.isEmpty=!0,this.entityIsEmpty=!0}catch(t){this.error=t,this.isEmpty=!0}finally{this.isLoading=!1,this.entityIsLoading=!1}},getEntity(s){if(this.entityIsLoading=!0,this.entityIsEmpty=!1,this.entityHasError=!1,s)return p.getSinglePolicyEntity({mesh:s.mesh,path:this.policy.path,name:s.name}).then(e=>{if(e){const m=["type","name","mesh"];this.entity=w(e,m),this.rawEntity=v(e)}else this.entity={},this.entityIsEmpty=!0}).catch(e=>{this.entityHasError=!0,console.error(e)}).finally(()=>{setTimeout(()=>{this.entityIsLoading=!1},"500")});setTimeout(()=>{this.entityIsEmpty=!0,this.entityIsLoading=!1},"500")}}},st={key:0,class:"mb-4"},it=n("p",null,[n("strong",null,"Warning"),_(" This policy is experimental. If you encountered any problem please open an "),n("a",{href:"https://github.com/kumahq/kuma/issues/new/choose",target:"_blank",rel:"noopener noreferrer"},"issue")],-1),nt=_(" > "),at=n("span",{class:"custom-control-icon"}," \u2190 ",-1),ot=_(" View All "),rt={"data-testid":"policy-single-entity"},lt={"data-testid":"policy-overview-tab"};function ct(s,e,m,f,t,i){const y=a("DocumentationLink"),c=a("KAlert"),h=a("KButton"),E=a("DataOverview"),T=a("EntityURLControl"),x=a("LabelList"),S=a("PolicyConnections"),V=a("YamlView"),A=a("TabsWidget"),N=a("FrameSkeleton");return i.policy?(l(),u("div",{key:0,class:H(["relative",i.policy.path])},[r(y,{href:i.docsURL,"data-testid":"policy-documentation-link"},null,8,["href"]),i.policy.isExperimental?(l(),u("div",st,[r(c,{appearance:"warning"},{alertMessage:o(()=>[it]),_:1})])):g("",!0),r(N,null,{default:o(()=>[r(E,{"page-size":t.pageSize,"has-error":t.error!==null,error:t.error,"is-loading":t.isLoading,"empty-state":{title:"No Data",message:`There are no ${i.policy.pluralDisplayName} present.`},"table-data":t.tableData,"table-data-is-empty":t.tableDataIsEmpty,next:t.next,onTableAction:i.getEntity,onLoadData:e[0]||(e[0]=b=>i.loadData(b))},{additionalControls:o(()=>[s.$route.query.ns?(l(),L(h,{key:0,class:"back-button",appearance:"primary",to:{name:i.policy.path}},{default:o(()=>[at,ot]),_:1},8,["to"])):g("",!0)]),default:o(()=>[nt]),_:1},8,["page-size","has-error","error","is-loading","empty-state","table-data","table-data-is-empty","next","onTableAction"]),t.isEmpty===!1?(l(),L(A,{key:0,"has-error":t.error!==null,error:t.error,"is-loading":t.isLoading,tabs:t.tabs,"initial-tab-override":"overview"},{tabHeader:o(()=>[n("div",null,[n("h3",rt,d(i.policy.singularDisplayName)+": "+d(t.entity.name),1)]),n("div",null,[r(T,{name:t.entity.name,mesh:t.entity.mesh},null,8,["name","mesh"])])]),overview:o(()=>[r(x,{"has-error":t.entityHasError,"is-loading":t.entityIsLoading,"is-empty":t.entityIsEmpty},{default:o(()=>[n("div",lt,[n("ul",null,[(l(!0),u(I,null,P(t.entity,(b,k)=>(l(),u("li",{key:k},[n("h4",null,d(k),1),n("p",null,d(b),1)]))),128))])])]),_:1},8,["has-error","is-loading","is-empty"])]),"affected-dpps":o(()=>[r(S,{mesh:t.rawEntity.mesh,"policy-name":t.rawEntity.name,"policy-type":i.policy.path},null,8,["mesh","policy-name","policy-type"])]),yaml:o(()=>[r(V,{lang:"yaml","has-error":t.entityHasError,"is-loading":t.entityIsLoading,"is-empty":t.entityIsEmpty,content:t.rawEntity},null,8,["has-error","is-loading","is-empty","content"])]),_:1},8,["has-error","error","is-loading","tabs"])):g("",!0)]),_:1})],2)):g("",!0)}const Lt=D(et,[["render",ct]]);export{Lt as default};