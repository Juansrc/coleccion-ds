import{s as te,n as U,d as de,a as I,e as N}from"../chunks/scheduler.CrsDffe0.js";import{S as ae,i as le,e as x,l as H,s as q,f as y,n as w,o as M,k as u,h as L,v as B,j as _,p as T,A as ue,q as K,B as z,c as ne,a as oe,m as se,t as ce,b as ie,d as re,g as A}from"../chunks/index.DSWBlzAv.js";import{g as me,a as G}from"../chunks/spread.CgU5AtxT.js";import{P as fe}from"../chunks/Page.C_4kNF32.js";import{e as R,t as _e}from"../chunks/Footer.CwenAZJp.js";import{p as he}from"../chunks/metadata.CGnOlvaq.js";function J(d,e,i){const o=d.slice();return o[4]=e[i],o}function Q(d,e,i){const o=d.slice();return o[7]=e[i],o}function W(d,e,i){const o=d.slice();return o[10]=e[i],o}function X(d){let e,i=d[10]+"",o;return{c(){e=x("th"),o=H(i)},l(a){e=y(a,"TH",{});var t=w(e);o=M(t,i),t.forEach(u)},m(a,t){_(a,e,t),T(e,o)},p:U,d(a){a&&u(e)}}}function Y(d){let e,i=d[7]+"",o;return{c(){e=x("td"),o=H(i)},l(a){e=y(a,"TD",{});var t=w(e);o=M(t,i),t.forEach(u)},m(a,t){_(a,e,t),T(e,o)},p:U,d(a){a&&u(e)}}}function Z(d){let e,i,o=R(Object.values(d[4])),a=[];for(let t=0;t<o.length;t+=1)a[t]=Y(Q(d,o,t));return{c(){e=x("tr");for(let t=0;t<a.length;t+=1)a[t].c();i=q()},l(t){e=y(t,"TR",{});var r=w(e);for(let l=0;l<a.length;l+=1)a[l].l(r);i=L(r),r.forEach(u)},m(t,r){_(t,e,r);for(let l=0;l<a.length;l+=1)a[l]&&a[l].m(e,null);T(e,i)},p(t,r){if(r&2){o=R(Object.values(t[4]));let l;for(l=0;l<o.length;l+=1){const h=Q(t,o,l);a[l]?a[l].p(h,r):(a[l]=Y(h),a[l].c(),a[l].m(e,i))}for(;l<a.length;l+=1)a[l].d(1);a.length=o.length}},d(t){t&&u(e),z(a,t)}}}function pe(d){let e,i=d[0].metadataTable+"",o,a,t,r,l,h,p,m,k,v=d[0].download+"",$,S,P,E,j=R(Object.keys(d[1][0])),n=[];for(let s=0;s<j.length;s+=1)n[s]=X(W(d,j,s));let f=R(d[1]),b=[];for(let s=0;s<f.length;s+=1)b[s]=Z(J(d,f,s));return{c(){e=x("h2"),o=H(i),a=q(),t=x("div"),r=x("table"),l=x("tr");for(let s=0;s<n.length;s+=1)n[s].c();h=q();for(let s=0;s<b.length;s+=1)b[s].c();p=q(),m=x("div"),k=x("button"),$=H(v),S=H(" CSV"),this.h()},l(s){e=y(s,"H2",{});var g=w(e);o=M(g,i),g.forEach(u),a=L(s),t=y(s,"DIV",{class:!0});var c=w(t);r=y(c,"TABLE",{class:!0});var C=w(r);l=y(C,"TR",{});var V=w(l);for(let O=0;O<n.length;O+=1)n[O].l(V);V.forEach(u),h=L(C);for(let O=0;O<b.length;O+=1)b[O].l(C);C.forEach(u),c.forEach(u),p=L(s),m=y(s,"DIV",{class:!0});var F=w(m);k=y(F,"BUTTON",{class:!0});var D=w(k);$=M(D,v),S=M(D," CSV"),D.forEach(u),F.forEach(u),this.h()},h(){B(r,"class","metadata-table"),B(t,"class","metadata-table-container svelte-1akrh8d"),B(k,"class","default-button"),B(m,"class","button-container")},m(s,g){_(s,e,g),T(e,o),_(s,a,g),_(s,t,g),T(t,r),T(r,l);for(let c=0;c<n.length;c+=1)n[c]&&n[c].m(l,null);T(r,h);for(let c=0;c<b.length;c+=1)b[c]&&b[c].m(r,null);_(s,p,g),_(s,m,g),T(m,k),T(k,$),T(k,S),P||(E=ue(k,"click",d[2]),P=!0)},p(s,[g]){if(g&1&&i!==(i=s[0].metadataTable+"")&&K(o,i),g&2){j=R(Object.keys(s[1][0]));let c;for(c=0;c<j.length;c+=1){const C=W(s,j,c);n[c]?n[c].p(C,g):(n[c]=X(C),n[c].c(),n[c].m(l,null))}for(;c<n.length;c+=1)n[c].d(1);n.length=j.length}if(g&2){f=R(s[1]);let c;for(c=0;c<f.length;c+=1){const C=J(s,f,c);b[c]?b[c].p(C,g):(b[c]=Z(C),b[c].c(),b[c].m(r,null))}for(;c<b.length;c+=1)b[c].d(1);b.length=f.length}g&1&&v!==(v=s[0].download+"")&&K($,v)},i:U,o:U,d(s){s&&(u(e),u(a),u(t),u(p),u(m)),z(n,s),z(b,s),P=!1,E()}}}function be(d,e,i){let o;de(d,_e,l=>i(0,o=l));let{metadata:a=he}=e;const t=a.map(l=>{const h={};for(let[p,m]of Object.entries(l))/^_/.test(p)||(h[p]=m);return h});function r(){const l=",";let h=[Object.keys(t[0]).join(l)];for(let k of t)h.push(Object.values(k).map(v=>new RegExp(`${l}`).test(v)?`"${v}"`:v).join(l));h=h.join(`
`);const p=document.createElement("a"),m=new Blob([h],{type:"text/plain"});p.href=URL.createObjectURL(m),p.download="metadata.csv",p.click(),URL.revokeObjectURL(p.href)}return d.$$set=l=>{"metadata"in l&&i(3,a=l.metadata)},[o,t,r,a]}class ge extends ae{constructor(e){super(),le(this,e,be,pe,te,{metadata:3})}}function ve(d){let e,i="Metadatos",o,a,t=`Acá encontrarán los metadatos de la colección. Pueden descargarse y usarse libremente.
Los metadatos están ordenados de la siguiente manera. Los de tipo categórico como pid, label y autor detallan las imágenes y permiten que puedan organizarse. Pid debe escribirse únicamente con minúsculas y sin carácteres especiales como tildes, puntos o comas.
El autor puede ser o bien el nombre del creador de la imagen o la agencia que se encarga de distribuirla. Se escribe con espacios y mayúsculas.
Fecha se refiere a la publicación de la imagen o, dado el caso, a la fecha que acompaña a la imagen. Esto no es indicativo de la creación de la imagen per se.
Key word es tanto categórico	como ordinal, pues es un metadato organizativo y que da orden a la colección. Por medio de las palabras claves es posible buscar las imágenes o ordenarlas categóricamente. Se debe escribir únicamente con minúsculas.
Por último, fuente es el sitio web del cual se extrajo la imagen. Todos los links están activos a la fecha. Es un dato administrativo ya que sirve para ubicar los archivos más no da orden ni categoría a los mismos.`,r,l,h="Protocolo",p,m,k="Este es el protocolo que especifica la construcción de los datos de la colección:",v,$,S="<thead><tr><th>Dato</th> <th>Descripción</th> <th>Tipo</th></tr></thead> <tbody><tr><td>pid</td> <td>Identificador único. Solo minúsculas.</td> <td>categórico</td></tr> <tr><td>label</td> <td>Nombre de la imagen. Iniciales con mayúsculas</td> <td>categórico</td></tr> <tr><td>Autor</td> <td>Autor de la obra o agencia que la distribuye. Inciales con mayúsculas, incluir acentos</td> <td>categórico</td></tr> <tr><td>fecha</td> <td>Año aproximado de producción de la imagen o fecha de publicación.  Escrito en número completo (p.ej 1589)</td> <td>ordinal</td></tr> <tr><td>key word</td> <td>Palabra clave que describe el contenido de la imagen. Solo minúsculas</td> <td>categórico-ordinal</td></tr> <tr><td>fuente</td> <td>Sitio web donde se descargó la imagen. Solo URL activos.</td> <td>administrativo</td></tr></tbody>",P,E,j;return E=new ge({}),{c(){e=x("h1"),e.textContent=i,o=q(),a=x("p"),a.textContent=t,r=q(),l=x("h2"),l.textContent=h,p=q(),m=x("p"),m.textContent=k,v=q(),$=x("table"),$.innerHTML=S,P=q(),ne(E.$$.fragment)},l(n){e=y(n,"H1",{"data-svelte-h":!0}),A(e)!=="svelte-rtrtq6"&&(e.textContent=i),o=L(n),a=y(n,"P",{"data-svelte-h":!0}),A(a)!=="svelte-1pplh6l"&&(a.textContent=t),r=L(n),l=y(n,"H2",{"data-svelte-h":!0}),A(l)!=="svelte-1oups7d"&&(l.textContent=h),p=L(n),m=y(n,"P",{"data-svelte-h":!0}),A(m)!=="svelte-19wuz58"&&(m.textContent=k),v=L(n),$=y(n,"TABLE",{"data-svelte-h":!0}),A($)!=="svelte-1jaiy9z"&&($.innerHTML=S),P=L(n),oe(E.$$.fragment,n)},m(n,f){_(n,e,f),_(n,o,f),_(n,a,f),_(n,r,f),_(n,l,f),_(n,p,f),_(n,m,f),_(n,v,f),_(n,$,f),_(n,P,f),se(E,n,f),j=!0},p:U,i(n){j||(ce(E.$$.fragment,n),j=!0)},o(n){ie(E.$$.fragment,n),j=!1},d(n){n&&(u(e),u(o),u(a),u(r),u(l),u(p),u(m),u(v),u($),u(P)),re(E,n)}}}function xe(d){let e,i;const o=[d[0],ee];let a={$$slots:{default:[ve]},$$scope:{ctx:d}};for(let t=0;t<o.length;t+=1)a=I(a,o[t]);return e=new fe({props:a}),{c(){ne(e.$$.fragment)},l(t){oe(e.$$.fragment,t)},m(t,r){se(e,t,r),i=!0},p(t,[r]){const l=r&1?me(o,[r&1&&G(t[0]),r&0&&G(ee)]):{};r&2&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){i||(ce(e.$$.fragment,t),i=!0)},o(t){ie(e.$$.fragment,t),i=!1},d(t){re(e,t)}}}const ee={name:"metadata",layout:"page"};function ye(d,e,i){return d.$$set=o=>{i(0,e=I(I({},e),N(o)))},e=N(e),[e]}class we extends ae{constructor(e){super(),le(this,e,ye,xe,te,{})}}export{we as component};
