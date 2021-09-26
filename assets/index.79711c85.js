var e=Object.defineProperty,o=Object.defineProperties,t=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,l=(o,t,a)=>t in o?e(o,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[t]=a;import{P as r}from"./index.e42de5fc.js";import{B as c}from"./index.9a216741.js";import{S as n}from"./index.16611b15.js";import{A as i}from"./AppType.d0f8da8a.js";import{c as d}from"./index.623f4af7.js";import{u,a as y,_ as m,b as f,c as b,d as v,w as k}from"./utils.a0011fda.js";import{_ as h}from"./IconSfc.d1e88af2.js";import{p as w,G as P,a2 as _,d as C,o as S,c as j,h as x,w as g,F as O,l as U,t as A,a as I}from"./vendor.bac705d4.js";import"./lock.f9d85b9f.js";import"./zIndex.779be491.js";import"./components.fc1d8498.js";import"./shared.6d6b25a1.js";import"./index.6e8a3cbb.js";import"./index.deaa662f.js";import"./elements.f945da86.js";const{add:F,use:z,pack:E,packs:B,merge:H}=u(),N=e=>{b(e),z(e)};y("zh-CN",m),y("en-US",f),F("zh-CN",{popupPosition:"弹出位置",centerPopup:"居中弹出",belowPopup:"下方弹出",abovePopup:"上方弹出",leftPopup:"左侧弹出",rightPopup:"右侧弹出",overlayStyle:"遮罩层样式",overlayClass:"遮罩层class",overlayStyles:"遮罩层style",event:"注册事件",text:"素胚勾勒出青花笔锋浓转淡, 瓶身描绘的牡丹一如你初妆, 冉冉檀香透过窗心事我了然, 宣纸上走笔至此搁一半。"}),F("en-US",{popupPosition:"Popup Position",centerPopup:"Center Popup",belowPopup:"Below Popup",abovePopup:"Above Popup",leftPopup:"Left Popup",rightPopup:"Right Popup",overlayStyle:"Overlay Style",overlayClass:"Overlay Class",overlayStyles:"Overlay Styles",event:"Event",text:"As he came into the window. It was the sound of a crescendo. He came into her apartment. He left the bloodstains on the carpet."});const T={name:"PopupExample",components:{[r.name]:r,[c.name]:c,AppType:i},setup(){const e=w({center:!1,top:!1,bottom:!1,left:!1,right:!1,overlayClass:!1,overlayStyle:!1,event:!1});v(N);const r=d.touchmoveForbid;return k((e=>{"pc"===e&&(d.touchmoveForbid=!1)})),P((()=>{d.touchmoveForbid=r})),c=((e,o)=>{for(var t in o||(o={}))s.call(o,t)&&l(e,t,o[t]);if(a)for(var t of a(o))p.call(o,t)&&l(e,t,o[t]);return e})({pack:E},_(e)),o(c,t({Snackbar:n}));var c}},D={class:"block"},G={class:"block"},L={class:"block"},R={class:"block"},q={class:"block"},J={class:"block"},K={class:"block"},M={class:"block"};var Q=h(T,[["render",function(e,o,t,a,s,p){const l=C("app-type"),r=C("var-button"),c=C("var-popup");return S(),j(O,null,[x(l,null,{default:g((()=>[U(A(a.pack.popupPosition),1)])),_:1}),x(r,{class:"mt-10",type:"primary",block:"",onClick:o[0]||(o[0]=o=>e.center=!0)},{default:g((()=>[U(A(a.pack.centerPopup),1)])),_:1}),x(r,{class:"mt-10",type:"primary",block:"",onClick:o[1]||(o[1]=o=>e.bottom=!0)},{default:g((()=>[U(A(a.pack.belowPopup),1)])),_:1}),x(r,{class:"mt-10",type:"primary",block:"",onClick:o[2]||(o[2]=o=>e.top=!0)},{default:g((()=>[U(A(a.pack.abovePopup),1)])),_:1}),x(r,{class:"mt-10",type:"primary",block:"",onClick:o[3]||(o[3]=o=>e.left=!0)},{default:g((()=>[U(A(a.pack.leftPopup),1)])),_:1}),x(r,{class:"mt-10",type:"primary",block:"",onClick:o[4]||(o[4]=o=>e.right=!0)},{default:g((()=>[U(A(a.pack.rightPopup),1)])),_:1}),x(c,{show:e.center,"onUpdate:show":o[5]||(o[5]=o=>e.center=o)},{default:g((()=>[I("div",D,A(a.pack.text),1)])),_:1},8,["show"]),x(c,{position:"bottom",show:e.bottom,"onUpdate:show":o[6]||(o[6]=o=>e.bottom=o)},{default:g((()=>[I("div",G,A(a.pack.text),1)])),_:1},8,["show"]),x(c,{position:"top",show:e.top,"onUpdate:show":o[7]||(o[7]=o=>e.top=o)},{default:g((()=>[I("div",L,A(a.pack.text),1)])),_:1},8,["show"]),x(c,{position:"left",show:e.left,"onUpdate:show":o[8]||(o[8]=o=>e.left=o)},{default:g((()=>[I("div",R,A(a.pack.text),1)])),_:1},8,["show"]),x(c,{position:"right",show:e.right,"onUpdate:show":o[9]||(o[9]=o=>e.right=o)},{default:g((()=>[I("div",q,A(a.pack.text),1)])),_:1},8,["show"]),x(l,null,{default:g((()=>[U(A(a.pack.overlayStyle),1)])),_:1}),x(r,{class:"mt-10",type:"primary",block:"",onClick:o[10]||(o[10]=o=>e.overlayClass=!0)},{default:g((()=>[U(A(a.pack.overlayClass),1)])),_:1}),x(c,{"overlay-class":"custom-overlay",show:e.overlayClass,"onUpdate:show":o[11]||(o[11]=o=>e.overlayClass=o)},{default:g((()=>[I("div",J,A(a.pack.text),1)])),_:1},8,["show"]),x(r,{class:"mt-10",type:"primary",block:"",onClick:o[12]||(o[12]=o=>e.overlayStyle=!0)},{default:g((()=>[U(A(a.pack.overlayStyles),1)])),_:1}),x(c,{"overlay-style":{backgroundColor:"rgba(0, 0, 0, 0.3)"},show:e.overlayStyle,"onUpdate:show":o[13]||(o[13]=o=>e.overlayStyle=o)},{default:g((()=>[I("div",K,A(a.pack.text),1)])),_:1},8,["overlay-style","show"]),x(l,null,{default:g((()=>[U(A(a.pack.event),1)])),_:1}),x(r,{class:"mt-10",type:"primary",block:"",onClick:o[14]||(o[14]=o=>e.event=!0)},{default:g((()=>[U(A(a.pack.event),1)])),_:1}),x(c,{show:e.event,"onUpdate:show":o[15]||(o[15]=o=>e.event=o),onOpen:o[16]||(o[16]=()=>a.Snackbar.info("open")),onOpened:o[17]||(o[17]=()=>a.Snackbar.success("opened")),onClose:o[18]||(o[18]=()=>a.Snackbar.warning("close")),onClosed:o[19]||(o[19]=()=>a.Snackbar.error("closed"))},{default:g((()=>[I("div",M,A(a.pack.text),1)])),_:1},8,["show"])],64)}],["__scopeId","data-v-3231fc7c"]]);export{Q as default};
