(globalThis["webpackChunkwesharelab_web"]=globalThis["webpackChunkwesharelab_web"]||[]).push([[173],{3004:(e,t,s)=>{"use strict";s.d(t,{Z:()=>c});var o=s(9981),l=s.n(o),n=s(4328);s(1249);const i=l().create({timeout:1e4,maxContentLength:4e3});i.interceptors.request.use((e=>(localStorage.getItem("accessToken")&&(e.headers.Authorization=localStorage.getItem("accessToken")),e.withCredentials=!1,e)),(e=>{n.Z.create({message:e.message}),Promise.reject(e)})),i.interceptors.response.use((e=>{console.log("一切正常");const t=e.data;return"[]"===t?[]:t}),(async e=>{if(console.log("出现错误"),console.log(e),401===e.response.status){console.log("出现授权错误"),n.Z.create({message:"Token is invalid or expired"});let e={data:401};return e}return Promise.reject(e)}),(e=>{}));const a=i,r="http://demo.wesharetechnology.com:8000/lab/",c={login:async e=>await a.post(`${r}login`,e,{headers:{"Content-Type":"application/json"}}).then((e=>e)).catch((e=>e)),verifyAccessToken:async e=>await a.post(`${r}api/token/verify/`,e,{}).then((e=>e)).catch((e=>e)),refreshAccessToken:async e=>await a.post(`${r}api/token/refresh/`,e,{}).then((e=>e)).catch((e=>e)),register:async e=>await a.post(`${r}register`,e,{headers:{"Content-Type":"application/json"}}).then((e=>e)).catch((e=>e)),getsummary:async e=>await a.get(`${r}summary`,{params:e},{headers:{"Content-Type":"application/json"}}).then((e=>e)).catch((e=>e)),getvessel:async e=>await a.get(`${r}vessel`,{data:e},{headers:{"Content-Type":"application/json"}}).then((e=>e)).catch((e=>e)),getxtray:async e=>await a.get(`${r}xtray`,{data:e},{headers:{"Content-Type":"application/json"}}).then((e=>e)).catch((e=>e)),getnotice:async()=>await a.get(`${r}notice`,{}).then((e=>e)).catch((e=>e)),addvessel:async e=>await a.post(`${r}vessel`,e,{headers:{"Content-Type":"application/json"}}).then((e=>e)).catch((e=>e)),getpeople:async()=>await a.get(`${r}people`,{}).then((e=>e)).catch((e=>e)),getnotes:async e=>await a.get(`${r}note?user_id=`+e.user_id,{headers:{"Content-Type":"application/json"}}).then((e=>e)).catch((e=>e)),deletenote:async e=>await a["delete"](`${r}note?noteid=`+e.noteid,{headers:{"Content-Type":"application/json"}}).then((e=>e)).catch((e=>e)),newnote:async e=>await a.post(`${r}note`,e,{headers:{"Content-Type":"application/json"}}).then((e=>e)).catch((e=>e)),updatenote:async e=>await a.put(`${r}note?noteid=`+e.noteid,e,{headers:{"Content-Type":"application/json"}}).then((e=>e)).catch((e=>e)),vesselActionHistory:async e=>await a.get(`${r}vessel/`+e+"/action/",{}).then((e=>e)).catch((e=>e)),getTemporarySecretKey:async()=>await a.get("127.0.0.0:8181/index/").then((e=>e)).catch((e=>e))}},6132:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>qe});var o=s(9835),l=s(6970),n=s(1957);const i=e=>((0,o.dD)("data-v-1a47eb64"),e=e(),(0,o.Cn)(),e),a={class:"q-pa-md q-col-gutter-y-md"},r={class:"q-col-gutter-sm row justify-between"},c={class:"col-lg-12 col-md-12 col-xs-12"},d={class:"text-h5 text-weight-bold"},u={class:"q-col-gutter-sm row justify-between"},g=i((()=>(0,o._)("span",{class:"text-weight-bold"},"Name: ",-1))),m={style:{"white-space":"nowrap"}},h=i((()=>(0,o._)("span",{class:"text-weight-bold"},"ID: ",-1))),p={class:"text-weight-bold"},f=(0,o.Uk)("Title: "),_={key:0},w={key:1},y=i((()=>(0,o._)("div",null,[(0,o._)("span",{class:"text-weight-bold"},"Status: "),(0,o.Uk)("active")],-1))),k={class:"q-pa-md q-col-gutter-y-md"},x={class:"q-pa-md q-col-gutter-y-md"},v={class:"q-pa-md q-col-gutter-y-md"},q=i((()=>(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("div",{class:"q-pa-md text-h5 text-weight-bold"}," Images ")]),(0,o._)("tr",null,[(0,o._)("th",{class:"text-left"},"Pictures"),(0,o._)("th",{class:"text-left"},"Name"),(0,o._)("th",{class:"text-left"},"Action")])],-1))),I={class:"text-left"},b=["src"],S={class:"text-left"},C={class:"text-left"},U={class:"q-pa-md q-col-gutter-y-md"},D=i((()=>(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("div",{class:"q-pa-md text-h5 text-weight-bold"}," Files ")]),(0,o._)("tr",null,[(0,o._)("th",{class:"text-left"},"Names"),(0,o._)("th",{class:"text-left"},"Type"),(0,o._)("th",{class:"text-left"},"Action")])],-1))),K={class:"text-left"},T={class:"text-left"},O={class:"text-left"},B={class:"q-pa-md q-col-gutter-y-md"},Z={key:0,id:"wrapper"},E={class:"addImage-btn commonOfAddImage mb_10"},F={key:0,class:"common2"},W=["src"],L=(0,o.Uk)(" Del Image "),A=(0,o.Uk)(" Add To Image List "),j={key:0,class:"q-pa-md"},N=(0,o.Uk)(" ADD Image "),z=(0,o.Uk)(" Cancel "),J=(0,o.Uk)(" ADD Excel "),Q=(0,o.Uk)(" Cancel "),P={class:"q-pa-md q-col-gutter-y-md",style:{float:"right"}};function V(e,t,s,i,V,G){const R=(0,o.up)("q-card"),M=(0,o.up)("q-input"),H=(0,o.up)("v-md-editor"),Y=(0,o.up)("q-btn"),$=(0,o.up)("q-item-section"),X=(0,o.up)("q-item"),ee=(0,o.up)("q-list"),te=(0,o.up)("q-menu"),se=(0,o.up)("q-markup-table"),oe=(0,o.up)("q-file"),le=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",a,[(0,o._)("div",r,[(0,o._)("div",c,[(0,o.Wm)(R,{class:"q-pa-sm",bordered:""},{default:(0,o.w5)((()=>[(0,o._)("div",d,(0,l.zw)(V.user_info.username),1),(0,o._)("div",u,[(0,o._)("div",null,[g,(0,o._)("span",m,(0,l.zw)(V.user_info.username),1)]),(0,o._)("div",null,[h,(0,o.Uk)((0,l.zw)(V.user_info.user_id),1)]),(0,o._)("div",null,[(0,o._)("span",p,[f,V.user_info.is_superuser?((0,o.wg)(),(0,o.iD)("div",_,"Admin")):((0,o.wg)(),(0,o.iD)("div",w,"General"))])]),y])])),_:1})])])]),(0,o._)("div",k,[(0,o.Wm)(R,{class:"q-pa-sm",bordered:""},{default:(0,o.w5)((()=>[(0,o.Wm)(M,{borderless:"",modelValue:V.title,"onUpdate:modelValue":t[0]||(t[0]=e=>V.title=e),label:"Title"},null,8,["modelValue"])])),_:1})]),(0,o._)("div",x,[(0,o.Wm)(H,{modelValue:V.content,"onUpdate:modelValue":t[1]||(t[1]=e=>V.content=e),placeholder:"content",height:"350px","disabled-menus":[]},null,8,["modelValue"])]),(0,o._)("div",v,[(0,o.Wm)(se,null,{default:(0,o.w5)((()=>[q,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(V.arrOfImg,((e,t)=>((0,o.wg)(),(0,o.iD)("tr",{key:t},[(0,o._)("td",I,[(0,o._)("img",{src:e.url,class:"image_list"},null,8,b)]),(0,o._)("td",S,(0,l.zw)(this.arrOfImg[t].url.split(/[:/.]/)[6]),1),(0,o._)("td",C,[(0,o.Wm)(Y,{flat:"",color:"primary",icon:"more_horiz"},{default:(0,o.w5)((()=>[(0,o.Wm)(te,null,{default:(0,o.w5)((()=>[(0,o.Wm)(ee,null,{default:(0,o.w5)((()=>[(0,o.wy)(((0,o.wg)(),(0,o.j4)(X,{clickable:""},{default:(0,o.w5)((()=>[(0,o.Wm)($,null,{default:(0,o.w5)((()=>[(0,o.Wm)(Y,{color:"primary",label:"Add To Content",onClick:t=>G.addImageToContent(e)},null,8,["onClick"])])),_:2},1024)])),_:2},1024)),[[le]]),(0,o.wy)(((0,o.wg)(),(0,o.j4)(X,{clickable:""},{default:(0,o.w5)((()=>[(0,o.Wm)($,null,{default:(0,o.w5)((()=>[(0,o.Wm)(Y,{color:"red",label:"Delete",onClick:e=>G.DeleteImage(V.arrOfImg[t].url,t)},null,8,["onClick"])])),_:2},1024)])),_:2},1024)),[[le]])])),_:2},1024)])),_:2},1024)])),_:2},1024)])])))),128))])])),_:1})]),(0,o._)("div",U,[(0,o.Wm)(se,null,{default:(0,o.w5)((()=>[D,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(V.arrOfFile,((e,t)=>((0,o.wg)(),(0,o.iD)("tr",{key:t},[(0,o._)("td",K,(0,l.zw)(e.split(/[./]/)[0]),1),(0,o._)("td",T,(0,l.zw)(e.split(/[./]/)[1]),1),(0,o._)("td",O,[(0,o.Wm)(Y,{flat:"",color:"primary",icon:"more_horiz"},{default:(0,o.w5)((()=>[(0,o.Wm)(te,null,{default:(0,o.w5)((()=>[(0,o.Wm)(ee,null,{default:(0,o.w5)((()=>[(0,o.wy)(((0,o.wg)(),(0,o.j4)(X,{clickable:""},{default:(0,o.w5)((()=>[(0,o.Wm)($,null,{default:(0,o.w5)((()=>[(0,o.Wm)(Y,{color:"red",label:"Delete",onClick:s=>G.DeleteFile(e,t)},null,8,["onClick"])])),_:2},1024)])),_:2},1024)),[[le]])])),_:2},1024)])),_:2},1024)])),_:2},1024)])])))),128))])])),_:1})]),(0,o._)("div",B,[(0,o._)("div",null,[V.isShowImg?((0,o.wg)(),(0,o.iD)("div",Z,[(0,o._)("div",E,[(0,o._)("input",{type:"file",ref:"ipt",onChange:t[2]||(t[2]=(...e)=>G.addImg&&G.addImg(...e)),accept:".jpg, .png, .jpeg"},null,544)]),V.isShowImg?((0,o.wg)(),(0,o.iD)("div",F,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(V.src,((e,t)=>(0,o.wy)(((0,o.wg)(),(0,o.iD)("div",{class:"img-list-item mb_10",key:t},[(0,o._)("img",{src:e,class:"common"},null,8,W)])),[[n.F8,e]]))),128))])):(0,o.kq)("",!0)])):(0,o.kq)("",!0),V.isShowImg?((0,o.wg)(),(0,o.j4)(Y,{key:1,color:"primary",onClick:G.forkImage,style:{"margin-top":"16px"}},{default:(0,o.w5)((()=>[L])),_:1},8,["onClick"])):(0,o.kq)("",!0),V.isShowImg?((0,o.wg)(),(0,o.j4)(Y,{key:2,color:"primary",onClick:G.uploadImages,style:{"margin-left":"16px","margin-top":"16px"}},{default:(0,o.w5)((()=>[A])),_:1},8,["onClick"])):(0,o.kq)("",!0)]),V.isShowExcel?((0,o.wg)(),(0,o.iD)("div",j,[(0,o.Wm)(oe,{"model-value":V.srcOfExcels,"onUpdate:modelValue":G.updateExcels,accept:".csv, .xlsx",label:"Pick Excels",filled:"",counter:"","counter-label":G.counterLabelFn,"max-files":"20","max-file-size":"5242880",onRejected:G.onRejected,multiple:"",append:"",clearable:"",style:{"max-width":"300px"}},{after:(0,o.w5)((()=>[(0,o.Wm)(Y,{color:"primary",dense:"",icon:"cloud_upload",round:"",onClick:G.uploadExcels},null,8,["onClick"])])),_:1},8,["model-value","onUpdate:modelValue","counter-label","onRejected"])])):(0,o.kq)("",!0),V.isShow?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(Y,{key:1,color:"primary",id:"uploadImgButton",onClick:G.showUploadImg},{default:(0,o.w5)((()=>[N])),_:1},8,["onClick"])),V.isShowImg?((0,o.wg)(),(0,o.j4)(Y,{key:2,color:"primary",style:{"margin-top":"16px"},id:"cancelLoadImgButton",onClick:G.showUploadImg},{default:(0,o.w5)((()=>[z])),_:1},8,["onClick"])):(0,o.kq)("",!0),V.isShow?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(Y,{key:3,color:"primary",style:{"margin-left":"16px"},id:"uploadExcelButton",onClick:G.showUploadExcel},{default:(0,o.w5)((()=>[J])),_:1},8,["onClick"])),V.isShowExcel?((0,o.wg)(),(0,o.j4)(Y,{key:4,color:"primary",id:"cancelLoadExcelButton",onClick:G.showUploadExcel},{default:(0,o.w5)((()=>[Q])),_:1},8,["onClick"])):(0,o.kq)("",!0)]),(0,o._)("div",P,[(0,o.Wm)(Y,{color:"primary",label:"Back",style:{"margin-right":"12px"},onClick:G.backToProfile},null,8,["onClick"]),(0,o.Wm)(Y,{color:"primary",label:"Save",onClick:G.saveOrUpdate},null,8,["onClick"])])],64)}s(9665);var G=s(3004),R=s(4636),M=s.n(R),H=s(854),Y=s.n(H),$=s(1004),X=s(638),ee=s.n(X),te=s(7262),se=s.n(te),oe=s(499);s(9981);let le=new(se())({getAuthorization:function(e,t){var s="http://127.0.0.1:8181/image/cred/",o=new XMLHttpRequest;console.log("start authorization"),o.open("GET",s,!0),o.onload=function(e){try{var s=JSON.parse(e.target.responseText),o=s.credentials;console.log(s),console.log(o)}catch(e){console.log("error!!!")}if(!s||!o)return console.error("credentials invalid");t({TmpSecretId:o.tmpSecretId,TmpSecretKey:o.tmpSecretKey,SecurityToken:o.sessionToken,StartTime:s.startTime,ExpiredTime:s.expiredTime})},o.send()}}),ne=new(se())({getAuthorization:function(e,t){var s="http://127.0.0.1:8181/file/cred/",o=new XMLHttpRequest;console.log("start authorization"),o.open("GET",s,!0),o.onload=function(e){try{var s=JSON.parse(e.target.responseText),o=s.credentials;console.log(s),console.log(o)}catch(e){console.log("error!!!")}if(!s||!o)return console.error("credentials invalid");t({TmpSecretId:o.tmpSecretId,TmpSecretKey:o.tmpSecretKey,SecurityToken:o.sessionToken,StartTime:s.startTime,ExpiredTime:s.expiredTime})},o.send()}});M().use(Y(),{Prism:ee()}),M().lang.use("en-US",$.Z);const ie=(0,n.ri)();ie.use(M()),ie.use(M());const ae={name:"AddNote",data(){return{user_info:{},user_id:this.$route.params.user_id,note_id:this.$route.params.note_id,people:void 0,title:this.$route.params.title,content:this.$route.params.content,notes:Object,isShow:!1,isShowImg:!1,isShowExcel:!1,newContent:"",src:[],srcOfFiles:[],keysOfImg:[],arrOfImgUrl:[],imageDownloadUrl:[],srcOfExcels:null,srcOfExcel:[],keysOfFiles:[],fileDownloadUrl:[],arrOfImg:[{url:s(5901)},{url:s(678)},{url:s(6288)}],arrOfFile:["test.xlsx","test2.xlsx","test4.csv","test3.xlsx"]}},methods:{backToProfile(){this.$router.push({name:"Profile",params:{user_id:this.user_id}})},saveOrUpdate(){"true"==this.$route.params.isNew?this.saveNote():this.updateNote()},showUploadImg(){this.isShowImg=!this.isShowImg,this.isShowExcel=!1,this.isShow=!this.isShow},showUploadExcel(){this.isShowExcel=!this.isShowExcel,this.isShowImg=!1,this.isShow=!this.isShow},addImg(e){if(this.src.length>=20)return void this.$q.notify("at most 20 images");let t=this,s=e.target.files[0];const o=s.size/1024/1024;if(o>=5)return void this.$q.notify("at most 5MB for each");if(this.srcOfFiles.push(s),!e||!window.FileReader)return;let l=new FileReader;l.readAsDataURL(s),l.onload=e=>{console.log("this is the base64 code of the image: \n",e.target.result)},l.onloadend=function(){t.src.push(this.result),console.log(t.src),t.isShow=!0}},forkImage(){this.srcOfFiles.pop(),this.src.pop(),0==this.src.length&&console.log("no images now")},addImageToContent(e){this.content=this.content+"<br>![Description]("+e.url+")"},generateImageDownloadUrl(){let e=this;for(let t=0;t<this.keysOfImg.length;t++)le.getObjectUrl({Bucket:"noteimage-1301771668",Region:"ap-hongkong",Key:e.keysOfImg[t],Sign:!0},(function(s,o){if(s)return console.log(s);var l=o.Url;let n=e.keysOfImg[t].split(/[/]/)[1];var i=l+(l.indexOf("?")>-1?"&":"?")+"response-content-disposition=attachment;filename="+n;e.imageDownloadUrl[t]=i}))},uploadImages(){let e=this;for(let t=0;t<this.srcOfFiles.length;t++){let s=this.srcOfFiles[t],o="note"+this.note_id+"/";le.uploadFile({Bucket:"noteimage-1301771668",Region:"ap-hongkong",Key:o+s.name,Body:s,SliceSize:5242880,onProgress:function(e){console.log(JSON.stringify(e))}},(function(t,s){t?(console.log("上传失败",t),e.$q.notify("fail to upload the image(s)")):(console.log("上传成功"),e.$q.notify("succeed uploading the image(s)"),e.refreshKeysOfImg())}))}},DeleteImage(e,t){this.arrOfImg.splice(t,1)},refreshImageUrl(){console.log("start refreshing image url"),console.log(this.keysOfImg);for(let e=0;e<this.keysOfImg.length;e++)this.arrOfImgUrl[e]="http://noteimage-1301771668.cos.ap-hongkong.myqcloud.com/"+this.keysOfImg[e];this.generateImageDownloadUrl()},refreshKeysOfImg(){console.log("start refreshing keys of images");let e="note"+this.note_id+"/",t=this;le.getBucket({Bucket:"noteimage-1301771668",Region:"ap-hongkong",Prefix:e,onProgress:function(e){console.log(JSON.stringify(e))}},(function(e,s){if(e)console.log("error");else{let e=[];if(console.log(s.Contents),0!=s.Contents.length){let o=s.Contents[0].Key,l=o.split(/[/]/),n=o.split(/[/]/).length;if(console.log("len = "+n),console.log(l[0]),console.log(l[1]),""!=l[1])for(let t=0;t<s.Contents.length;t++)e[t]=s.Contents[t].Key;else for(let t=1;t<s.Contents.length;t++)e[t-1]=s.Contents[t].Key;console.log("Keys of images are followed"),console.log((0,oe.IU)(e)),t.keysOfImg=e}}t.refreshImageUrl()}))},updateExcels(e){null!=e?(this.srcOfExcels=e,console.log(this.srcOfExcels)):this.srcOfExcels=null},counterLabelFn({totalSize:e,filesNumber:t,maxFiles:s}){return`${t} files of ${s} | ${e}`},onRejected(e){this.$q.notify({type:"negative",message:"At most 5MB for each file"})},uploadExcels(){let e=this,t="note"+this.note_id+"/";for(let s=0;s<this.srcOfExcels.length;s++){let o=this.srcOfExcels[s];ne.uploadFile({Bucket:"noteexcel-1301771668",Region:"ap-hongkong",Key:t+o.name,Body:o,SliceSize:5242880,onProgress:function(e){console.log(JSON.stringify(e))}},(function(t,o){t?console.log("上传失败",t):(console.log("上传成功"),s==e.srcOfExcels.length-1&&e.refreshKeysOfFiles())}))}},refreshKeysOfFiles(){console.log("start refreshing keys of files");let e="note"+this.note_id+"/";if(1==this.user_id||2==this.user_id||3==this.user_id){const t=e+"test.xlsx",s=e+"test2.xlsx",o=e+"test4.csv";this.keysOfFiles=[t,s,o],this.fileDownloadUrl=["http://noteexcel-1301771668.cos.ap-hongkong.myqcloud.com/note1/test.xlsx?q-sign-algorithm=sha1&q-ak=AKIDGKTUA0WzoGecHFJKfhS6_jBBVydKLl8h2yAQzVWSB11WgxMPc9hb3D1O95Ua4_qq&q-sign-time=1691377974;1691379774&q-key-time=1691377974;1691379774&q-header-list=host&q-url-param-list=&q-signature=9616dcb922d2fcea58069a7f0a97663fc8e0bee7&x-cos-security-token=d3Hal3rV3W741LRBh28AtwW5by4NztEa89d4608a8f868a8fa0e76fa4b130f6b2Dv2g_7Ncsl1x7XJlsht3s88fSnjJdC88-d2jB9vK0Dm4hu148yFrwkZw-5kEBkNG17N-CUMOFvuq7ZvqzR1jL1g0rpohgzLbG0LoavSe_oDSDiS4g0swDWdgFx5IAta-KR01oM15T9AEKmp5Qye3muCJgUIR7nANDXBB0vU4G3G13FVxmVVT0FP33M4EB3PLJJ1nmLCmG14NlCaxZst6SKYmmd0sCxYh7JlgEaYta82Lf-63LAuAsnwlw2-lW0451SddiCBdIxDjpefL0Jdu06FCZOkgJl2o4SlAEuRvJgao5UQ0cawty12Pq6ZS2DBr5pY6NqnHFl9EcAVuRzY60twHCrQQwzHwRJrezCbPG1TQnqe54icGgs2oE183HEo5LQGYKVe3FNedVKpBk17ySWQlNu-1-wIVI9EnRfn1z_W5ZNiKtcX8-ZIZmDmdWqEwfs-v1kUe56XyN2wQxv1F7wn8I7ogZnzDmD6os4ZDrvLMe6Lh3KlK9woi5zKcUWJzDaji2d66_5gWN4QE9rMM9yOV31E_UgLkk2fP5vu9Ble31Jlld3tevycAEoTz_pjKos0XtIvSmZcyerP82HdfhTpTJZNb2wkhiBh3qbTSAUL_kd-MgZIZQ898-BdXg1sb24u_KqQ8anJsxWjh5rupB1K2lrWFDZe_k6OX4ddmZ0BKPYd2pJITc8UaOHWMBeF4LP3pQ0Yonk7TGjZAZq0LNBq09mF_1_ZgaUbremhOHYyueIlIw4XeGPU9OKIJMdr1&response-content-disposition=attachment;filename=test.xlsx","http://noteexcel-1301771668.cos.ap-hongkong.myqcloud.com/note1/test2.xlsx?q-sign-algorithm=sha1&q-ak=AKIDGKTUA0WzoGecHFJKfhS6_jBBVydKLl8h2yAQzVWSB11WgxMPc9hb3D1O95Ua4_qq&q-sign-time=1691377974;1691379774&q-key-time=1691377974;1691379774&q-header-list=host&q-url-param-list=&q-signature=5f450b17c8c0fbab86e33aa6ae4b7659511ab348&x-cos-security-token=d3Hal3rV3W741LRBh28AtwW5by4NztEa89d4608a8f868a8fa0e76fa4b130f6b2Dv2g_7Ncsl1x7XJlsht3s88fSnjJdC88-d2jB9vK0Dm4hu148yFrwkZw-5kEBkNG17N-CUMOFvuq7ZvqzR1jL1g0rpohgzLbG0LoavSe_oDSDiS4g0swDWdgFx5IAta-KR01oM15T9AEKmp5Qye3muCJgUIR7nANDXBB0vU4G3G13FVxmVVT0FP33M4EB3PLJJ1nmLCmG14NlCaxZst6SKYmmd0sCxYh7JlgEaYta82Lf-63LAuAsnwlw2-lW0451SddiCBdIxDjpefL0Jdu06FCZOkgJl2o4SlAEuRvJgao5UQ0cawty12Pq6ZS2DBr5pY6NqnHFl9EcAVuRzY60twHCrQQwzHwRJrezCbPG1TQnqe54icGgs2oE183HEo5LQGYKVe3FNedVKpBk17ySWQlNu-1-wIVI9EnRfn1z_W5ZNiKtcX8-ZIZmDmdWqEwfs-v1kUe56XyN2wQxv1F7wn8I7ogZnzDmD6os4ZDrvLMe6Lh3KlK9woi5zKcUWJzDaji2d66_5gWN4QE9rMM9yOV31E_UgLkk2fP5vu9Ble31Jlld3tevycAEoTz_pjKos0XtIvSmZcyerP82HdfhTpTJZNb2wkhiBh3qbTSAUL_kd-MgZIZQ898-BdXg1sb24u_KqQ8anJsxWjh5rupB1K2lrWFDZe_k6OX4ddmZ0BKPYd2pJITc8UaOHWMBeF4LP3pQ0Yonk7TGjZAZq0LNBq09mF_1_ZgaUbremhOHYyueIlIw4XeGPU9OKIJMdr1&response-content-disposition=attachment;filename=test2.xlsx","http://noteexcel-1301771668.cos.ap-hongkong.myqcloud.com/note1/test4.csv?q-sign-algorithm=sha1&q-ak=AKIDGKTUA0WzoGecHFJKfhS6_jBBVydKLl8h2yAQzVWSB11WgxMPc9hb3D1O95Ua4_qq&q-sign-time=1691377974;1691379774&q-key-time=1691377974;1691379774&q-header-list=host&q-url-param-list=&q-signature=ee2cb9fc6514a1e3404ade34622794e7af97d95f&x-cos-security-token=d3Hal3rV3W741LRBh28AtwW5by4NztEa89d4608a8f868a8fa0e76fa4b130f6b2Dv2g_7Ncsl1x7XJlsht3s88fSnjJdC88-d2jB9vK0Dm4hu148yFrwkZw-5kEBkNG17N-CUMOFvuq7ZvqzR1jL1g0rpohgzLbG0LoavSe_oDSDiS4g0swDWdgFx5IAta-KR01oM15T9AEKmp5Qye3muCJgUIR7nANDXBB0vU4G3G13FVxmVVT0FP33M4EB3PLJJ1nmLCmG14NlCaxZst6SKYmmd0sCxYh7JlgEaYta82Lf-63LAuAsnwlw2-lW0451SddiCBdIxDjpefL0Jdu06FCZOkgJl2o4SlAEuRvJgao5UQ0cawty12Pq6ZS2DBr5pY6NqnHFl9EcAVuRzY60twHCrQQwzHwRJrezCbPG1TQnqe54icGgs2oE183HEo5LQGYKVe3FNedVKpBk17ySWQlNu-1-wIVI9EnRfn1z_W5ZNiKtcX8-ZIZmDmdWqEwfs-v1kUe56XyN2wQxv1F7wn8I7ogZnzDmD6os4ZDrvLMe6Lh3KlK9woi5zKcUWJzDaji2d66_5gWN4QE9rMM9yOV31E_UgLkk2fP5vu9Ble31Jlld3tevycAEoTz_pjKos0XtIvSmZcyerP82HdfhTpTJZNb2wkhiBh3qbTSAUL_kd-MgZIZQ898-BdXg1sb24u_KqQ8anJsxWjh5rupB1K2lrWFDZe_k6OX4ddmZ0BKPYd2pJITc8UaOHWMBeF4LP3pQ0Yonk7TGjZAZq0LNBq09mF_1_ZgaUbremhOHYyueIlIw4XeGPU9OKIJMdr1&response-content-disposition=attachment;filename=test4.csv"]}else{let t=this;ne.getBucket({Bucket:"noteexcel-1301771668",Region:"ap-hongkong",Prefix:e,onProgress:function(e){console.log(JSON.stringify(e))}},(function(e,s){if(e)console.log("error");else{let e=[];if(console.log(s.Contents),0!=s.Contents.length){let o=s.Contents[0].Key,l=o.split(/[/]/),n=o.split(/[/]/).length;if(console.log("len = "+n),console.log(l[0]),console.log(l[1]),""!=l[1])for(let t=0;t<s.Contents.length;t++)e[t]=s.Contents[t].Key;else for(let t=1;t<s.Contents.length;t++)e[t-1]=s.Contents[t].Key;console.log("Keys of files are followed"),console.log((0,oe.IU)(e)),t.keysOfFiles=e,t.generateFileDownloadUrl()}}}))}},DeleteFile(e,t){this.arrOfFile.splice(t,1)},generateFileDownloadUrl(){let e=this;for(let t=0;t<this.keysOfFiles.length;t++)ne.getObjectUrl({Bucket:"noteexcel-1301771668",Region:"ap-hongkong",Key:e.keysOfFiles[t],Sign:!0},(function(s,o){if(s)return console.log(s);var l=o.Url;let n=e.keysOfFiles[t].split(/[/]/)[1];var i=l+(l.indexOf("?")>-1?"&":"?")+"response-content-disposition=attachment;filename="+n;e.fileDownloadUrl[t]=i}))},async saveNote(){""!=this.title?(console.log("create a new note"),await G.Z.newnote({user_id:this.user_id,Title:this.title,Content:this.content}),this.backToProfile()):this.$q.notify("A title can not be empty")},async updateNote(){console.log("update note"),await G.Z.updatenote({noteid:this.note_id,Title:this.title,Content:this.content}),this.backToProfile()},async fetchUser(){const e={code:200,message:"Get all user information",data:[{user_id:1,username:"weshare",is_superuser:!0,is_active:!0},{user_id:2,username:"Nathan",is_superuser:!0,is_active:!0},{user_id:3,username:"kong",is_superuser:!0,is_active:!0},{user_id:4,username:"zhaoying",is_superuser:!1,is_active:!0},{user_id:5,username:"chenyapeng",is_superuser:!1,is_active:!0},{user_id:6,username:"Ray_LIU",is_superuser:!1,is_active:!0},{user_id:7,username:"Ryan_LAU",is_superuser:!0,is_active:!0},{user_id:9,username:"Samuel_LAW",is_superuser:!0,is_active:!0},{user_id:10,username:"Josef",is_superuser:!0,is_active:!0},{user_id:11,username:"Yiran_WU",is_superuser:!0,is_active:!0},{user_id:12,username:"Amber_Li",is_superuser:!0,is_active:!0},{user_id:13,username:"mbasif",is_superuser:!1,is_active:!0},{user_id:14,username:"wzhangbx",is_superuser:!1,is_active:!0},{user_id:15,username:"Sun",is_superuser:!1,is_active:!0},{user_id:16,username:"Kenji_SHUM",is_superuser:!1,is_active:!0},{user_id:17,username:"haha",is_superuser:!1,is_active:!0},{user_id:18,username:"Joe_LU",is_superuser:!0,is_active:!0},{user_id:19,username:"Yiqi_AN",is_superuser:!0,is_active:!0},{user_id:20,username:"张如山",is_superuser:!1,is_active:!0}]};this.people=e.data,this.user_info=this.people[this.user_id-1],console.log(this.user_info)}},components:{VMdEditor:M()},created(){console.log("create"),this.fetchUser()},mounted(){}};var re=s(1639),ce=s(4458),de=s(3119),ue=s(6933),ge=s(9379),me=s(6362),he=s(3246),pe=s(490),fe=s(1233),_e=s(3837),we=s(6602),ye=s(2146),ke=s(9984),xe=s.n(ke);const ve=(0,re.Z)(ae,[["render",V],["__scopeId","data-v-1a47eb64"]]),qe=ve;xe()(ae,"components",{QCard:ce.Z,QInput:de.Z,QMarkupTable:ue.Z,QBtn:ge.Z,QMenu:me.Z,QList:he.Z,QItem:pe.Z,QItemSection:fe.Z,QFile:_e.Z,QHeader:we.Z}),xe()(ae,"directives",{ClosePopup:ye.Z})},678:(e,t,s)=>{e.exports=s.p+"img/Chikorita.5ecde2c9.png"},6288:(e,t,s)=>{e.exports=s.p+"img/Eevee.fe2d644f.png"},5901:(e,t,s)=>{e.exports=s.p+"img/Grimer.86a6aeee.png"}}]);