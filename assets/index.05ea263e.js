import{A as a}from"./AppType.d0f8da8a.js";import{C as p}from"./index.b178c8d9.js";import{I as i}from"./index.deaa662f.js";import{u as e,a as l,_ as o,b as t,c,d as n}from"./utils.a0011fda.js";import{_ as s}from"./IconSfc.d1e88af2.js";import{r as h,d as r,o as C,c as d,h as f,w as u,k as m,f as k,l as _,t as y}from"./vendor.bac705d4.js";import"./components.fc1d8498.js";import"./shared.6d6b25a1.js";import"./elements.f945da86.js";const{add:g,use:S,pack:b,packs:w,merge:R}=e(),j=a=>{c(a),S(a)};l("zh-CN",o),l("en-US",t),g("zh-CN",{chipType:"纸片类型",defaultChip:"默认纸片",primaryChip:"主要纸片",infoChip:"信息纸片",successChip:"成功纸片",warningChip:"警告纸片",dangerChip:"危险纸片",simpleChip:"简单纸片",nonRoundChip:"非圆角纸片",chipSize:"纸片尺寸",largeChip:"大纸片",normalChip:"常规纸片",smallChip:"小纸片",miniChip:"迷你纸片",blockChip:"块级纸片",canCloseChip:"可关闭纸片",customCloseIcon:"自定义关闭图标",customColor:"自定义颜色",chip:"纸片",addSlot:"添加插槽",leftSlot:"左侧插槽",rightSlot:"右侧插槽",leftAndRightSlot:"左右两侧插槽"}),g("en-US",{chipType:"Chip Type",defaultChip:"Default Chip",primaryChip:"Primary Chip",infoChip:"Info Chip",successChip:"Success Chip",warningChip:"Warning Chip",dangerChip:"Danger Chip",simpleChip:"Simple Chip",nonRoundChip:"Non Round Chip",chipSize:"Chip Size",largeChip:"Large Chip",normalChip:"Normal Chip",smallChip:"Small Chip",miniChip:"Mini Chip",blockChip:"Block Chip",canCloseChip:"Can Close Chip",customCloseIcon:"Custom Close Icon",customColor:"Custom Color",chip:"Chip",addSlot:"Add Slot",leftSlot:"Left Slot",rightSlot:"Right Slot",leftAndRightSlot:"Left And Right Slot"});const v={name:"ChipExample",components:{[p.name]:p,[i.name]:i,AppType:a},setup(){const a=h(!0),p=h(!0);return n(j),{show:a,show1:p,pack:b}}},z={class:"example"};var x=s(v,[["render",function(a,p,i,e,l,o){const t=r("app-type"),c=r("var-chip"),n=r("var-icon");return C(),d("div",z,[f(t,null,{default:u((()=>[_(y(e.pack.chipType),1)])),_:1}),f(c,{type:"primary"},{default:u((()=>[_(y(e.pack.primaryChip),1)])),_:1}),f(c,{type:"success"},{default:u((()=>[_(y(e.pack.successChip),1)])),_:1}),f(c,{type:"danger"},{default:u((()=>[_(y(e.pack.dangerChip),1)])),_:1}),f(c,{type:"warning"},{default:u((()=>[_(y(e.pack.warningChip),1)])),_:1}),f(c,{type:"info"},{default:u((()=>[_(y(e.pack.infoChip),1)])),_:1}),f(c,null,{default:u((()=>[_(y(e.pack.defaultChip),1)])),_:1}),f(t,null,{default:u((()=>[_(y(e.pack.simpleChip),1)])),_:1}),f(c,{plain:"",type:"primary"},{default:u((()=>[_(y(e.pack.simpleChip),1)])),_:1}),f(t,null,{default:u((()=>[_(y(e.pack.nonRoundChip),1)])),_:1}),f(c,{round:!1,type:"primary"},{default:u((()=>[_(y(e.pack.nonRoundChip),1)])),_:1}),f(t,null,{default:u((()=>[_(y(e.pack.chipSize),1)])),_:1}),f(c,{size:"large"},{default:u((()=>[_(y(e.pack.largeChip),1)])),_:1}),f(c,null,{default:u((()=>[_(y(e.pack.normalChip),1)])),_:1}),f(c,{size:"small"},{default:u((()=>[_(y(e.pack.smallChip),1)])),_:1}),f(c,{size:"mini"},{default:u((()=>[_(y(e.pack.miniChip),1)])),_:1}),f(t,null,{default:u((()=>[_(y(e.pack.blockChip),1)])),_:1}),f(c,{type:"primary",block:""},{default:u((()=>[_(y(e.pack.blockChip),1)])),_:1}),f(t,null,{default:u((()=>[_(y(e.pack.canCloseChip),1)])),_:1}),e.show?(C(),m(c,{key:0,closable:"",onClose:p[0]||(p[0]=a=>e.show=!1)},{default:u((()=>[_(y(e.pack.canCloseChip),1)])),_:1})):k("v-if",!0),e.show1?(C(),m(c,{key:1,closable:"","icon-name":"delete",onClose:p[1]||(p[1]=a=>e.show1=!1)},{default:u((()=>[_(y(e.pack.customCloseIcon),1)])),_:1})):k("v-if",!0),f(t,null,{default:u((()=>[_(y(e.pack.customColor),1)])),_:1}),f(c,{color:"#009688","text-color":"#fff"},{default:u((()=>[_(y(e.pack.chip),1)])),_:1}),f(c,{color:"#009688",plain:""},{default:u((()=>[_(y(e.pack.chip),1)])),_:1}),f(c,{color:"#faecd8","text-color":"#e6a23c",plain:""},{default:u((()=>[_(y(e.pack.chip),1)])),_:1}),f(c,{color:"#faecd8","text-color":"#e6a23c"},{default:u((()=>[_(y(e.pack.chip),1)])),_:1}),f(t,null,{default:u((()=>[_(y(e.pack.addSlot),1)])),_:1}),f(c,{type:"primary",plain:""},{left:u((()=>[f(n,{name:"star"})])),default:u((()=>[_(y(e.pack.leftSlot)+" ",1)])),_:1}),f(c,{type:"primary",plain:""},{right:u((()=>[f(n,{name:"fire"})])),default:u((()=>[_(y(e.pack.rightSlot)+" ",1)])),_:1}),f(c,{type:"primary",plain:""},{left:u((()=>[f(n,{name:"account-circle"})])),right:u((()=>[f(n,{name:"cake-variant"})])),default:u((()=>[_(y(e.pack.leftAndRightSlot)+" ",1)])),_:1})])}],["__scopeId","data-v-e4df337e"]]);export{x as default};
