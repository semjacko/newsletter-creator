(this["webpackJsonpnewsletter-react"]=this["webpackJsonpnewsletter-react"]||[]).push([[0],{523:function(e,t,a){},526:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(41),c=a.n(i),s=a(13),l=a(540),r=a(537),o=a(541),d=a(7),h=a.n(d),j=a(115),u=a(116),b={sk:{lets_start:"Za\u010da\u0165",version:"verzia",images:"Obr\xe1zky",link_image:"Link pre obr\xe1zok",drop_images:"Vlo\u017ete obr\xe1zky",drag_n_drop:"Kliknite alebo Presu\u0148te obr\xe1zky sem",pick_width:"Zvolte \u0161\xedrku",paste_links:"Vlo\u017ete linky",final_settings:"Posledn\xe9 nastavenia",overview:"Kontrola",next:"\u010ealej",back:"Sp\xe4\u0165",save:"Ulo\u017ei\u0165",settings:"Nastavenia",title:"N\xe1zov",bg_color:"Farba pozadia",text_color:"Farba textu",images_uploading:"Vkladanie obr\xe1zkov",select_all_images:"Ozna\u010dte v\u0161etky obr\xe1zky, ktor\xe9 chcete pou\u017ei\u0165 a potiahnite ich do vyzna\u010denej oblasti.",images_have_to_be_sorted:"Obr\xe1zky musia by\u0165 zoraden\xe9 pod\u013ea ich n\xe1zvov.",all_possible_widths:"Tu m\xf4\u017ete vidie\u0165 v\u0161etky mo\u017en\xe9 \u0161\xedrky Newslettra.",widths_have_been_calculated:"\u0160\xedrky boli vypo\u010d\xedtan\xe9 na z\xe1klade obr\xe1zkov, ktor\xe9 ste vlo\u017eili v predch\xe1dzaj\xfacom kroku.",to_achieve_desired:"Na dosiahnutie po\u017eadovan\xe9ho v\xfdstupu musia by\u0165 obr\xe1zky zoraden\xe9 pod\u013ea ich n\xe1zvov.",copy_and_paste:"Skop\xedrujte a vlo\u017ete odkazy obr\xe1zkov.",if_you_paste_more:"Ak vlo\u017e\xedte viacero odkazov (oddelen\xfdch nov\xfdm riadkom alebo medzerou), vyplnia sa aj nasleduj\xface vstupy pre odkazy.",choose_title_of_newsletter:"Tu si m\xf4\u017ete zvoli\u0165 n\xe1zov Newslettra a tie\u017e aj pozadie a farbu textu v jeho hlavi\u010dke a p\xe4te.",you_can_check:"Teraz m\xf4\u017ete skontrolova\u0165 vytvoren\xfd Newsletter.",if_everything_is_okay:"Ak je v\u0161etko v poriadku, m\xf4\u017ete ho ulo\u017ei\u0165."},en:{lets_start:"Let's start",version:"version",images:"Images",link_image:"Link for image",drop_images:"Drop images",drag_n_drop:"Click or Drag files to this area",pick_width:"Pick width",paste_links:"Paste links",final_settings:"Final settings",overview:"Overview",next:"Next",back:"Back",save:"Save",settings:"Settings",title:"Title",bg_color:"Background color",text_color:"Text color",images_uploading:"Images uploading",select_all_images:"Select all images you want to use and drag and drop them to the dropzone.",images_have_to_be_sorted:"Images have to be sorted by their names.",all_possible_widths:"Here you can see all possible widths of the Newsletter.",widths_have_been_calculated:"Widths have been calculated based on the images you uploaded in the previous step.",to_achieve_desired:"To achieve the desired output images have to be sorted by their names.",copy_and_paste:"Copy and paste image links.",if_you_paste_more:"If you paste more links (separated by a newline or whitespace) they will by propagated to the following inputs.",choose_title_of_newsletter:"Here you can choose the title of the Newsletter and also the background color and the text color of its header and footer.",you_can_check:"Now you can check the created Newsletter.",if_everything_is_okay:"If everything is okay, you can save it."}},m=[{value:"sk",label:"Slovensky"},{value:"en",label:"English"}],p=a(538),g=a(531),x=a(543),f=a(277),v=a(2),O=function(e){return Object(v.jsx)("div",{style:e.style,children:Object(v.jsx)(g.a,{trigger:"hover",placement:"auto",speaker:Object(v.jsx)(x.a,{title:e.title,children:e.children}),children:Object(v.jsx)(f.a,{icon:"question-circle",size:"2x",style:{color:"#3498FF"}})})})},k=function(e){return new Promise((function(t,a){var n=new Image;n.onload=function(){return t(n)},n.onerror=a,n.name=e.name,n.src=window.URL.createObjectURL(e)}))},w=function(e){var t=e.onNext,a=e.language,i=Object(n.useRef)(null),c=function(){var e=Object(u.a)(h.a.mark((function e(a){var n,c,s,l;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],c=Object(j.a)(a),e.prev=2,c.s();case 4:if((s=c.n()).done){e.next=13;break}return l=s.value,e.t0=n,e.next=9,k(l.blobFile);case 9:e.t1=e.sent,e.t0.push.call(e.t0,e.t1);case 11:e.next=4;break;case 13:e.next=18;break;case 15:e.prev=15,e.t2=e.catch(2),c.e(e.t2);case 18:return e.prev=18,c.f(),e.finish(18);case 21:n.sort((function(e,t){return e.name.toLowerCase()<t.name.toLowerCase()?-1:1})),i.current.state.fileList=[],t(n);case 24:case"end":return e.stop()}}),e,null,[[2,15,18,21]])})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"container-workspace bg-light rounded-3 shadow d-flex flex-column position-relative",children:[Object(v.jsx)("div",{className:"h-80 d-flex justify-content-center align-items-center",children:Object(v.jsx)("h2",{children:b[a].images})}),Object(v.jsx)("div",{className:"h-560 d-flex justify-content-center align-items-center",children:Object(v.jsx)(p.a,{ref:i,draggable:!0,accept:"image/*",multiple:!0,fileListVisible:!1,shouldUpload:function(){return!1},onChange:c,children:Object(v.jsx)("div",{style:{lineHeight:"400px",width:800},children:b[a].drag_n_drop})})}),Object(v.jsxs)(O,{title:b[a].images_uploading,style:{position:"absolute",top:10,left:10},children:[Object(v.jsx)("p",{children:b[a].select_all_images}),Object(v.jsx)("p",{children:b[a].images_have_to_be_sorted}),Object(v.jsx)("img",{src:"./files/dragndrop.gif",alt:"drag and drop hint",style:{width:600,margin:20}})]})]})},y=a(123),_=function(e){var t=e.onNext,a=e.language;return Object(v.jsxs)("div",{className:"container-home bg-light rounded-3 shadow mw-50 d-flex flex-column",children:[Object(v.jsxs)("div",{className:"d-flex flex-column flex-fill justify-content-center align-items-center",children:[Object(v.jsx)("h2",{children:"Newsletter creator"}),Object(v.jsx)(y.a,{appearance:"link",size:"lg",onClick:t,className:"m-4",children:b[a].lets_start})]}),Object(v.jsx)("div",{className:"d-flex justify-content-end p-2",children:Object(v.jsxs)("span",{children:[b[a].version,": 1.1.0"]})})]})},N=a(542),z=a(534),C=a(544),S=function(){return Object(v.jsxs)("p",{style:{fontSize:12},children:["V pr\xedpade, \u017ee sa v\xe1m tento mail nezobrazuje spr\xe1vne, ",Object(v.jsx)("b",{children:"kliknite sem"}),"."]})},I=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("p",{style:{fontSize:12},children:"Tento email bol zaslan\xfd na v\xe1\u0161 email"}),Object(v.jsx)("p",{style:{fontSize:12},children:"Pre\u010do mi pri\u0161iel tento email? \xa0  Odhl\xe1si\u0165 z noviniek \xa0 Zmeni\u0165 nastavenia"})]})},L=function(e){var t=e.images,a=(e.links,e.width),n=e.backgroundColor,i=e.textColor,c=e.imageHighlights,s=e.showHeaderAndFooter,l=e.maxWidth,r=e.maxHeight;if(!a)return null;for(var o=[],d=0;d<t.length;){for(var h=0,j=[],u=(l-20)/a;h<a;)h+=t[d].width,j.push(Object(v.jsx)("div",{style:{position:"relative",width:t[d].width*u,height:t[d].height*u,background:"url(".concat(t[d].src,")"),backgroundSize:"cover"},children:c&&Object(v.jsx)("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",color:"#ff0ff0",fontWeight:"bold",border:"solid 1px"},children:d+1})},d)),d++;o.push(Object(v.jsx)("div",{style:{width:l-20,display:"flex"},children:j},d))}return Object(v.jsxs)("div",{className:"border",style:{marginTop:10,maxHeight:r,maxWidth:l,overflowY:"auto",overflowX:"hidden"},children:[s&&Object(v.jsx)("div",{style:{width:l-20,backgroundColor:n,color:i,display:"flex",alignItems:"center",justifyContent:"center",padding:20},children:Object(v.jsx)(S,{})}),o,s&&Object(v.jsx)("div",{style:{width:l-20,backgroundColor:n,color:i,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",padding:20},children:Object(v.jsx)(I,{})})]})},A=function(e){var t=e.images,a=e.widths,i=e.onNext,c=e.onBack,l=e.language,r=Object(n.useState)(a[0]),o=Object(s.a)(r,2),d=o[0],h=o[1];if(a.length<=0)return c(),null;var u,m=[],p=Object(j.a)(a);try{for(p.s();!(u=p.n()).done;){var g=u.value;m.push(Object(v.jsxs)(N.a,{value:g,children:[g,"px"]},g.toString()))}}catch(x){p.e(x)}finally{p.f()}return Object(v.jsxs)("div",{className:"container-workspace bg-light rounded-3 shadow d-flex flex-column position-relative",children:[Object(v.jsxs)("div",{className:"h-640 d-flex justify-content-center align-items-center",children:[Object(v.jsxs)("div",{className:"h-600 w-350 p-l-20 d-flex flex-column",children:[Object(v.jsx)("div",{className:"h-60 d-flex justify-content-center align-items-center",children:Object(v.jsx)("h3",{children:b[l].pick_width})}),Object(v.jsx)("div",{className:"h-540 overflow-auto",children:Object(v.jsx)(z.a,{className:"justify-content-center align-items-center d-flex flex-column",name:"radioList",appearance:"picker",defaultValue:a[0],onChange:function(e){h(e)},children:m})})]}),Object(v.jsx)("div",{className:"h-600 w-650 d-flex align-items-center justify-content-center",children:Object(v.jsx)(L,{images:t,imageHighlights:!0,width:d,maxWidth:600,maxHeight:600})})]}),Object(v.jsx)("div",{className:"h-60 d-flex justify-content-center align-items-center",children:Object(v.jsxs)(C.a,{children:[Object(v.jsx)(y.a,{appearance:"ghost",className:"w-350",onClick:c,children:b[l].back}),Object(v.jsx)(y.a,{appearance:"primary",className:"w-350",onClick:function(){return i(d)},children:b[l].next})]})}),Object(v.jsxs)(O,{title:b[l].pick_width,style:{position:"absolute",top:10,left:10},children:[Object(v.jsx)("p",{children:b[l].all_possible_widths}),Object(v.jsx)("p",{children:b[l].widths_have_been_calculated}),Object(v.jsx)("p",{children:b[l].to_achieve_desired})]})]})},T=a(276),H=a(535),B=a(539),P=function(e){for(var t=e.nInputs,a=e.defaultValues,i=e.setLinks,c=e.language,l=Object(n.useState)(a),r=Object(s.a)(l,2),o=r[0],d=r[1],h=[],j=function(e){h.push(Object(v.jsxs)(H.a,{className:"m-t-5",children:[Object(v.jsxs)(H.a.Addon,{children:["#",e+1]}),Object(v.jsx)(B.a,{value:o[e],placeholder:"".concat(b[c].link_image," #").concat(e+1),onChange:function(a){for(var n=Object(T.a)(o),c=a.split(/\s+/),s=0;s<c.length&&s+e<t;s++)n[e+s]=c[s].trim();d(n),i(n)}})]},e))},u=0;u<t;u++)j(u);return h},F=function(e){var t=e.images,a=e.defaultLinks,i=e.width,c=e.onNext,l=e.onBack,r=e.language,o=Object(n.useState)(a),d=Object(s.a)(o,2),h=d[0],j=d[1];return Object(v.jsxs)("div",{className:"container-workspace bg-light rounded-3 shadow d-flex flex-column position-relative",children:[Object(v.jsxs)("div",{className:"h-640 d-flex justify-content-center align-items-center",children:[Object(v.jsxs)("div",{className:"h-600 w-350 p-l-20 d-flex flex-column",children:[Object(v.jsx)("div",{className:"h-60 d-flex justify-content-center align-items-center",children:Object(v.jsx)("h3",{children:b[r].paste_links})}),Object(v.jsx)("div",{className:"h-540 overflow-auto",children:Object(v.jsx)(P,{nInputs:t.length,defaultValues:a,setLinks:j,language:r})})]}),Object(v.jsx)("div",{className:"h-600 w-650 d-flex align-items-center justify-content-center",children:Object(v.jsx)(L,{images:t,imageHighlights:!0,width:i,maxWidth:600,maxHeight:600})})]}),Object(v.jsx)("div",{className:"h-60 d-flex justify-content-center align-items-center",children:Object(v.jsxs)(C.a,{children:[Object(v.jsx)(y.a,{appearance:"ghost",className:"w-350",onClick:l,children:b[r].back}),Object(v.jsx)(y.a,{appearance:"primary",className:"w-350",onClick:function(){return c(h)},children:b[r].next})]})}),Object(v.jsxs)(O,{title:b[r].paste_links,style:{position:"absolute",top:10,left:10},children:[Object(v.jsx)("p",{children:b[r].copy_and_paste}),Object(v.jsx)("p",{children:b[r].if_you_paste_more}),Object(v.jsx)("img",{src:"./files/pastelinks.gif",alt:"links hint",style:{width:600,margin:20}})]})]})},E=a(545),V=a(536),U=function(e){var t=e.images,a=e.width,i=e.defaultTitle,c=e.defaultTextColor,l=e.defaultBackgroundColor,r=e.onNext,o=e.onBack,d=e.language,h=Object(n.useState)(i),j=Object(s.a)(h,2),u=j[0],m=j[1],p=Object(n.useState)(c),g=Object(s.a)(p,2),x=g[0],f=g[1],k=Object(n.useState)(l),w=Object(s.a)(k,2),_=w[0],N=w[1];return Object(v.jsxs)("div",{className:"container-workspace bg-light rounded-3 shadow d-flex flex-column position-relative",children:[Object(v.jsxs)("div",{className:"h-640 d-flex justify-content-center align-items-center",children:[Object(v.jsxs)("div",{className:"h-600 w-350 p-l-20 d-flex flex-column",children:[Object(v.jsx)("div",{className:"h-60 d-flex justify-content-center align-items-center",children:Object(v.jsx)("h3",{children:b[d].settings})}),Object(v.jsxs)("div",{className:"h-540 overflow-auto",children:[Object(v.jsx)(E.a,{className:"m-t-5",children:b[d].title}),Object(v.jsxs)(H.a,{children:[Object(v.jsx)(H.a.Addon,{children:b[d].title}),Object(v.jsx)(B.a,{value:u,onChange:function(e){return m(e)}})]}),Object(v.jsx)(E.a,{className:"m-t-5",children:b[d].bg_color}),Object(v.jsx)("div",{className:"d-flex justify-content-center",children:Object(v.jsx)(V.a,{disableAlpha:!0,onChange:function(e){var t=e.hex;return N(t)},color:_})}),Object(v.jsx)(E.a,{className:"m-t-5",children:b[d].text_color}),Object(v.jsx)("div",{className:"d-flex justify-content-center",children:Object(v.jsx)(V.a,{disableAlpha:!0,onChange:function(e){var t=e.hex;return f(t)},color:x})})]})]}),Object(v.jsx)("div",{className:"h-600 w-650 d-flex align-items-center justify-content-center",children:Object(v.jsx)(L,{images:t,width:a,showHeaderAndFooter:!0,backgroundColor:_,textColor:x,maxWidth:600,maxHeight:600})})]}),Object(v.jsx)("div",{className:"h-60 d-flex justify-content-center align-items-center",children:Object(v.jsxs)(C.a,{children:[Object(v.jsx)(y.a,{appearance:"ghost",className:"w-350",onClick:o,children:b[d].back}),Object(v.jsx)(y.a,{appearance:"primary",className:"w-350",onClick:function(){return r(u,x,_)},children:b[d].next})]})}),Object(v.jsx)(O,{title:b[d].settings,style:{position:"absolute",top:10,left:10},children:Object(v.jsx)("p",{children:b[d].choose_title_of_newsletter})})]})},W=function(e){var t=e.images,a=e.width,n=(e.links,e.textColor),i=e.backgroundColor,c=e.onSave,s=e.onBack,l=e.language;return Object(v.jsxs)("div",{className:"container-workspace bg-light rounded-3 shadow d-flex flex-column position-relative",children:[Object(v.jsx)("div",{className:"h-80 d-flex justify-content-center align-items-center",children:Object(v.jsx)("h2",{children:b[l].overview})}),Object(v.jsx)("div",{className:"h-560 d-flex justify-content-center align-items-center",children:Object(v.jsx)(L,{images:t,showHeaderAndFooter:!0,backgroundColor:i,textColor:n,width:a,maxWidth:700,maxHeight:550})}),Object(v.jsx)("div",{className:"h-60 d-flex justify-content-center align-items-center",children:Object(v.jsxs)(C.a,{children:[Object(v.jsx)(y.a,{appearance:"ghost",className:"w-350",onClick:s,children:b[l].back}),Object(v.jsx)(y.a,{appearance:"primary",className:"w-350",onClick:function(){return c()},children:b[l].save})]})}),Object(v.jsxs)(O,{title:b[l].overview,style:{position:"absolute",top:10,left:10},children:[Object(v.jsx)("p",{children:b[l].you_can_check}),Object(v.jsx)("p",{children:b[l].if_everything_is_okay})]})]})},D=a(268),R=a(485)(),Z=a(493),M=function(e,t){for(var a=0;a<t.length;){for(var n=0,i=a;i<t.length&&n<e;){if(n+=t[i].width,i>a&&t[i].height!==t[i-1].height)return!1;i++}if(a=i,n!==e)return!1}return!0},q=function(e){return new Promise((function(t,a){Z.getBinaryContent(e,(function(e,n){e?a(e):t(n)}))}))},J=function(){var e=Object(u.a)(h.a.mark((function e(t,a){var n,i,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:R.file("index.html",t),n=R.folder("images"),i=0;case 3:if(!(i<a.length)){e.next=11;break}return e.next=6,q(a[i].src);case 6:c=e.sent,n.file("image".concat(String(i+1).padStart(2,"0"),".jpg"),c,{binary:!0});case 8:i++,e.next=3;break;case 11:R.generateAsync({type:"blob"}).then((function(e){Object(D.saveAs)(e,"newsletter.zip")}));case 12:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();function K(){var e=Object(n.useState)(-1),t=Object(s.a)(e,2),i=t[0],c=t[1],d=Object(n.useState)([]),h=Object(s.a)(d,2),j=h[0],u=h[1],p=Object(n.useState)([]),g=Object(s.a)(p,2),x=g[0],f=g[1],O=Object(n.useState)(0),k=Object(s.a)(O,2),y=k[0],N=k[1],z=Object(n.useState)([]),C=Object(s.a)(z,2),S=C[0],I=C[1],L=Object(n.useState)("COOP Newsletter 1.1.2021"),T=Object(s.a)(L,2),H=T[0],B=T[1],P=Object(n.useState)("#000000"),E=Object(s.a)(P,2),V=E[0],D=E[1],R=Object(n.useState)("#ffffff"),Z=Object(s.a)(R,2),q=Z[0],K=Z[1],X=Object(n.useState)("en"),Y=Object(s.a)(X,2),G=Y[0],Q=Y[1],$=function(){c(i-1)};return Object(v.jsxs)("div",{className:"app",children:[Object(v.jsx)(r.a,{value:G,data:m,cleanable:!1,searchable:!1,onChange:function(e){Q(e)},appearance:"subtle",style:{position:"absolute",right:30,top:0},renderValue:function(e){return Object(v.jsx)("img",{src:"./files/".concat(e,".png"),height:30,alt:"".concat(e)})}}),-1===i?Object(v.jsx)(_,{onNext:function(){c(i+1)},language:G}):Object(v.jsxs)(o.a,{current:i,vertical:!0,className:"d-flex flex-column h-700 p-t-120 w-200",children:[Object(v.jsx)(o.a.Item,{title:b[G].drop_images}),Object(v.jsx)(o.a.Item,{title:b[G].pick_width}),Object(v.jsx)(o.a.Item,{title:b[G].paste_links}),Object(v.jsx)(o.a.Item,{title:b[G].final_settings}),Object(v.jsx)(o.a.Item,{title:b[G].overview})]}),0===i?Object(v.jsx)(w,{onNext:function(e){var t=function(e){for(var t=0,a=[],n=0;n<e.length;)t+=e[n].width,M(t,e)&&a.push(t),n++;return a}(e);t.length<=0?l.a.error("Error. Can't make a newsletter from these images. Make sure they are sorted alphabetically",8e3):(u(e),N(t),f(e.map((function(e){return""}))),c(i+1))},language:G}):1===i?Object(v.jsx)(A,{images:j,widths:y,onNext:function(e){I(e),c(i+1)},onBack:$,language:G}):2===i?Object(v.jsx)(F,{images:j,defaultLinks:x,width:S,onNext:function(e){f(e),c(i+1)},onBack:$,language:G}):3===i?Object(v.jsx)(U,{images:j,width:S,defaultTitle:H,defaultTextColor:V,defaultBackgroundColor:q,onNext:function(e,t,a){B(e),D(t),K(a),c(i+1)},onBack:$,language:G}):4===i?Object(v.jsx)(W,{images:j,width:S,links:x,title:H,textColor:V,backgroundColor:q,onSave:function(){var e=function(e,t,a,n,i,c){for(var s=e.length,l=0,r='<table role="presentation" cellSpacing="0" cellPadding="0" border="0" width="100%">';l<s;){r+='<tr><td><table cellSpacing="0" cellPadding="0" border="0"><tr>';var o=e[l].width;for(o>t&&l++;l<s&&o<=t;)r+="<td>",a[l]?r+='<a href="'.concat(a[l],'"><img src="images/image').concat(String(l+1).padStart(2,"0"),'.jpg" alt="" width=').concat(e[l].width,' style="width:100%; max-width:').concat(e[l].width,'px; height:auto; display:block;"></a>'):r+='<img src="images/image'.concat(String(l+1).padStart(2,"0"),'.jpg" alt="" width=').concat(e[l].width,' style="width:100%; max-width:').concat(e[l].width,'px; height:auto; display:block;">'),r+="</td>",++l<s&&(o+=e[l].width);r+="</tr></table></td></tr>"}return function(e,t,a,n){return'<!DOCTYPE html><html lang="sk">\n<head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta http-equiv="X-UA-Compatible" content="IE=edge">\n<meta name="x-apple-disable-message-reformatting"><meta name="format-detection" content="telephone=no,address=no,email=no,date=no,url=no"><title>'.concat(e,'</title>\n<style>html, body {margin: 0 auto !important;padding: 0 !important;height: 100% !important;width: 100% !important;}\ntable {border-spacing: 0 !important;border-collapse: collapse !important;table-layout: fixed !important;margin: 0 auto !important;}a {text-decoration: none;}\n@media only screen and (min-device-width: 320px) and (max-device-width: 374px) {u ~ div .email-container {min-width: 320px !important;}}\n@media only screen and (min-device-width: 375px) and (max-device-width: 413px) {u ~ div .email-container {min-width: 375px !important;}}\n@media only screen and (min-device-width: 414px) {u ~ div .email-container {min-width: 414px !important;}}</style></head>\n<body style="width:100%;margin:0;padding:0!important;background-color:').concat(a,';"><center aria-roledescription="email" lang="sk" style="width:100%;background-color:').concat(a,';">\n<table align="center" role="presentation" border="0" cellpadding="0" cellspacing="0" width="750" style="background-color:').concat(a,';">\n<tr><td style="text-align:center;font-family:arial;font-size:11px;background-color:').concat(a,";color:").concat(n,';">V pr\xedpade, \u017ee sa v\xe1m tento mail nezobrazuje spr\xe1vne, <a href="*|ARCHIVE|*" style="text-decoration:underline;color:#7080FF">kliknite sem</a>.\n</td></tr><tr><td>').concat(t,'</td></tr><tr><td align="center" valign="top" style="padding-top:20px;padding-bottom:20px;"><br/><br/><table border="0" cellpadding="0" cellspacing="0"><tr>\n<td align="center" valign="top" style="background-color:').concat(a,";color:").concat(n,';font-family:Helvetica,Arial,sans-serif;font-size:11px;line-height:150%;text-align:center;">\nTento email bol zaslan\xfd na <a href="mailto:*|EMAIL|*" target="_blank" style="color:#404040 !important;">*|EMAIL|*</a>\n<br/><a href="*|ABOUT_LIST|*" target="_blank" style="color:#404040 !important;"><em>Pre\u010do mi pri\u0161iel tento email?</em></a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="*|UNSUB|*" style="color:#404040 !important;">Odhl\xe1si\u0165 z noviniek</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="*|UPDATE_PROFILE|*" style="color:#404040 !important;">\nZmeni\u0165 nastavenia</a><br/>*|LIST:ADDRESSLINE|*<br/><br/></td></tr></table></td></tr></table></center></body></html>')}(n,r+="</table>",c,i)}(j,S,x,H,V,q),t=(0,a(494).html)(e);J(t,j)},onBack:$,language:G}):null]})}a(523),a(524),a(525);c.a.render(Object(v.jsx)(K,{}),document.getElementById("root"))}},[[526,1,2]]]);
//# sourceMappingURL=main.be35321e.chunk.js.map