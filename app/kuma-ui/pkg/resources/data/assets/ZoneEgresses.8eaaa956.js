import{_ as I,T as F,U as Z,P as B,K as h,V as K,X as N,n as O,h as m,e as n,w as t,r as s,o as i,b as y,p as _,i as c,t as b,F as E,k as f,f as R}from"./index.f2463021.js";import{S as V,a as U}from"./SubscriptionHeader.a69b1f1e.js";import{g as H}from"./tableDataUtils.233f95a0.js";import{D as q}from"./DataOverview.e6547ee7.js";import{E as W}from"./EntityURLControl.210b712d.js";import{F as P}from"./FrameSkeleton.2e66f46d.js";import{T as X}from"./TabsWidget.817a2fd6.js";import{L as G}from"./LabelList.c9504cac.js";import{E as M}from"./EnvoyData.2847ea67.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang.79e60fc9.js";import"./ErrorBlock.6b7b6a0a.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang.92dd8129.js";import"./CodeBlock.f31221ad.js";const j={name:"ZoneEgresses",components:{EnvoyData:M,FrameSkeleton:P,DataOverview:q,TabsWidget:X,LabelList:G,AccordionList:F,AccordionItem:Z,SubscriptionDetails:V,SubscriptionHeader:U,EntityURLControl:W},data(){return{isLoading:!0,isEmpty:!1,hasError:!1,empty_state:{title:"No Data",message:"There are no Zone Egresses present."},tableData:{headers:[{key:"actions",hideLabel:!0},{label:"Status",key:"status"},{label:"Name",key:"name"}],data:[]},tabs:[{hash:"#overview",title:"Overview"},{hash:"#insights",title:"Zone Egress Insights"},{hash:"#xds-configuration",title:"XDS Configuration"},{hash:"#envoy-stats",title:"Stats"},{hash:"#envoy-clusters",title:"Clusters"}],entity:{},rawData:[],pageSize:B,next:null,subscriptionsReversed:[]}},watch:{$route(){this.isLoading=!0,this.isEmpty=!1,this.hasError=!1,this.init()}},beforeMount(){this.init()},methods:{init(){this.loadData()},tableAction(r){const o=r;this.getEntity(o)},async loadData(r="0"){this.isLoading=!0,this.isEmpty=!1;const o=this.$route.query.ns||null;try{const{data:a,next:p}=await H({getAllEntities:h.getAllZoneEgressOverviews.bind(h),getSingleEntity:h.getZoneEgressOverview.bind(h),size:this.pageSize,offset:r,query:o});this.next=p,a.length?(this.isEmpty=!1,this.rawData=a,this.getEntity({name:a[0].name}),this.tableData.data=a.map(e=>{const{zoneEgressInsight:u={}}=e;return{...e,...K(u)}})):(this.tableData.data=[],this.isEmpty=!0)}catch(a){this.hasError=!0,this.isEmpty=!0,console.error(a)}finally{this.isLoading=!1}},getEntity(r){const o=["type","name"],a=this.rawData.find(e=>e.name===r.name),p=N(a,"zoneEgressInsight.subscriptions",[]);this.subscriptionsReversed=Array.from(p).reverse(),this.entity=O(a,o)}}},J={class:"zoneegresses"},Q=c("span",{class:"custom-control-icon"}," \u2190 ",-1),Y=R(" View All "),$={key:0};function ee(r,o,a,p,e,u){const v=s("KButton"),D=s("DataOverview"),L=s("EntityURLControl"),S=s("LabelList"),w=s("SubscriptionHeader"),z=s("SubscriptionDetails"),A=s("AccordionItem"),k=s("AccordionList"),x=s("KCard"),g=s("EnvoyData"),C=s("TabsWidget"),T=s("FrameSkeleton");return i(),m("div",J,[n(T,null,{default:t(()=>[n(D,{"page-size":e.pageSize,"has-error":e.hasError,"is-loading":e.isLoading,"empty-state":e.empty_state,"table-data":e.tableData,"table-data-is-empty":e.isEmpty,next:e.next,onTableAction:u.tableAction,onLoadData:o[0]||(o[0]=l=>u.loadData(l))},{additionalControls:t(()=>[r.$route.query.ns?(i(),y(v,{key:0,class:"back-button",appearance:"primary",to:{name:"zoneegresses"}},{default:t(()=>[Q,Y]),_:1})):_("",!0)]),_:1},8,["page-size","has-error","is-loading","empty-state","table-data","table-data-is-empty","next","onTableAction"]),e.isEmpty===!1?(i(),y(C,{key:0,"has-error":e.hasError,"is-loading":e.isLoading,tabs:e.tabs,"initial-tab-override":"overview"},{tabHeader:t(()=>[c("div",null,[c("h3",null," Zone Egress: "+b(e.entity.name),1)]),c("div",null,[n(L,{name:e.entity.name},null,8,["name"])])]),overview:t(()=>[n(S,null,{default:t(()=>[c("div",null,[c("ul",null,[(i(!0),m(E,null,f(e.entity,(l,d)=>(i(),m("li",{key:d},[l?(i(),m("h4",$,b(d),1)):_("",!0),c("p",null,b(l),1)]))),128))])])]),_:1})]),insights:t(()=>[n(x,{"border-variant":"noBorder"},{body:t(()=>[n(k,{"initially-open":0},{default:t(()=>[(i(!0),m(E,null,f(e.subscriptionsReversed,(l,d)=>(i(),y(A,{key:d},{"accordion-header":t(()=>[n(w,{details:l},null,8,["details"])]),"accordion-content":t(()=>[n(z,{details:l,"is-discovery-subscription":""},null,8,["details"])]),_:2},1024))),128))]),_:1})]),_:1})]),"xds-configuration":t(()=>[n(g,{"data-path":"xds","zone-egress-name":e.entity.name},null,8,["zone-egress-name"])]),"envoy-stats":t(()=>[n(g,{"data-path":"stats","zone-egress-name":e.entity.name},null,8,["zone-egress-name"])]),"envoy-clusters":t(()=>[n(g,{"data-path":"clusters","zone-egress-name":e.entity.name},null,8,["zone-egress-name"])]),_:1},8,["has-error","is-loading","tabs"])):_("",!0)]),_:1})])}const he=I(j,[["render",ee]]);export{he as default};