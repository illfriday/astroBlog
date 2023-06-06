"use strict";(self.webpackChunkheadless_blog=self.webpackChunkheadless_blog||[]).push([[1495],{30077:(b,p,t)=>{t.r(p),t.d(p,{default:()=>k});var e=t(67294),a=t(86896),d=t(81849),c=t(14087),m=t(185),Z=t(49066),h=t(11047),x=t(41580),E=t(75515),A=t(11276),f=t(74571),T=t(16364),y=t(29728),n=t(23293),u=t(45697),i=t.n(u),o=t(71997),g=t(48302),v=t(82562),s=t(47560);const R=o.ZP.a`
  color: ${({theme:r})=>r.colors.primary600};
`,C=({config:r})=>{const{formatMessage:l}=(0,a.Z)();return e.createElement(h.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(h.k,{direction:"column",alignItems:"stretch",gap:1},e.createElement(E.Z,{variant:"delta",as:"h2"},l({id:(0,s.Z)("Settings.email.plugin.title.config"),defaultMessage:"Configuration"})),e.createElement(E.Z,null,l({id:(0,s.Z)("Settings.email.plugin.text.configuration"),defaultMessage:"The plugin is configured through the {file} file, checkout this {link} for the documentation."},{file:"./config/plugins.js",link:e.createElement(R,{href:"https://docs.strapi.io/developer-docs/latest/plugins/email.html",target:"_blank",rel:"noopener noreferrer"},l({id:(0,s.Z)("link"),defaultMessage:"Link"}))}))),e.createElement(A.r,{gap:5},e.createElement(f.P,{col:6,s:12},e.createElement(T.o,{name:"shipper-email",label:l({id:(0,s.Z)("Settings.email.plugin.label.defaultFrom"),defaultMessage:"Default sender email"}),placeholder:l({id:(0,s.Z)("Settings.email.plugin.placeholder.defaultFrom"),defaultMessage:"ex: Strapi No-Reply '<'no-reply@strapi.io'>'"}),disabled:!0,onChange:()=>{},value:r.settings.defaultFrom})),e.createElement(f.P,{col:6,s:12},e.createElement(T.o,{name:"response-email",label:l({id:(0,s.Z)("Settings.email.plugin.label.defaultReplyTo"),defaultMessage:"Default response email"}),placeholder:l({id:(0,s.Z)("Settings.email.plugin.placeholder.defaultReplyTo"),defaultMessage:"ex: Strapi '<'example@strapi.io'>'"}),disabled:!0,onChange:()=>{},value:r.settings.defaultReplyTo})),e.createElement(f.P,{col:6,s:12},e.createElement(g.P,{name:"email-provider",label:l({id:(0,s.Z)("Settings.email.plugin.label.provider"),defaultMessage:"Email provider"}),disabled:!0,onChange:()=>{},value:r.provider},e.createElement(v.W,{value:r.provider},r.provider)))))};C.propTypes={config:i().shape({provider:i().string,settings:i().shape({defaultFrom:i().string,defaultReplyTo:i().string})}).isRequired};const L=C;var I=t(87561);const D=I.Ry().shape({email:I.Z_().email(d.I0.email).required(d.I0.required)});var V=t(61321);const w=async()=>{const{get:r}=(0,d.tg)(),{data:l}=await r("/email/settings");return l.config},z=async r=>{const{post:l}=(0,d.tg)();await l("/email/test",r)};var N=t(53979);const O=()=>{const{formatMessage:r}=(0,a.Z)();return e.createElement(e.Fragment,null,e.createElement(d.SL,{name:r({id:(0,s.Z)("Settings.email.plugin.title"),defaultMessage:"Configuration"})}),e.createElement(N.T,{id:"title",title:r({id:(0,s.Z)("Settings.email.plugin.title"),defaultMessage:"Configuration"}),subtitle:r({id:(0,s.Z)("Settings.email.plugin.subTitle"),defaultMessage:"Test the settings for the Email plugin"})}))},G=()=>e.createElement(d.O4,{permissions:V.Z.settings},e.createElement($,null)),$=()=>{const r=(0,d.lm)(),{formatMessage:l}=(0,a.Z)(),{lockApp:J,unlockApp:Q}=(0,d.o1)(),{notifyStatus:F}=(0,c.G)();(0,d.go)();const[P,X]=(0,e.useState)({}),[Y,H]=(0,e.useState)(!1),[W,j]=(0,e.useState)(!1),[S,K]=(0,e.useState)(""),[q,U]=(0,e.useState)(!1),[_,ee]=(0,e.useState)({provider:"",settings:{defaultFrom:"",defaultReplyTo:"",testAddress:""}});(0,e.useEffect)(()=>{H(!0),w().then(M=>{F(l({id:(0,s.Z)("Settings.email.plugin.notification.data.loaded"),defaultMessage:"Email settings data has been loaded"})),ee(M);const B=M?.settings?.testAddress;B&&K(B)}).catch(()=>r({type:"warning",message:l({id:(0,s.Z)("Settings.email.plugin.notification.config.error"),defaultMessage:"Failed to retrieve the email config"})})).finally(()=>H(!1))},[l,r,F]),(0,e.useEffect)(()=>{P.email&&document.querySelector("#test-address-input").focus()},[P]),(0,e.useEffect)(()=>{D.validate({email:S},{abortEarly:!1}).then(()=>U(!0)).catch(()=>U(!1))},[S]);const te=M=>{K(()=>M.target.value)},ae=async M=>{M.preventDefault();try{await D.validate({email:S},{abortEarly:!1}),j(!0),J(),z({to:S}).then(()=>{r({type:"success",message:l({id:(0,s.Z)("Settings.email.plugin.notification.test.success"),defaultMessage:"Email test succeeded, check the {to} mailbox"},{to:S})})}).catch(()=>{r({type:"warning",message:l({id:(0,s.Z)("Settings.email.plugin.notification.test.error"),defaultMessage:"Failed to send a test mail to {to}"},{to:S})})}).finally(()=>{j(!1),Q()})}catch(B){X((0,d.CJ)(B))}};return Y?e.createElement(m.o,{labelledBy:"title","aria-busy":"true"},e.createElement(O,null),e.createElement(Z.D,null,e.createElement(d.dO,null))):e.createElement(m.o,{labelledBy:"title","aria-busy":W},e.createElement(O,null),e.createElement(Z.D,null,e.createElement("form",{onSubmit:ae},e.createElement(h.k,{direction:"column",alignItems:"stretch",gap:7},e.createElement(x.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(L,{config:_})),e.createElement(x.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(h.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(E.Z,{variant:"delta",as:"h2"},l({id:(0,s.Z)("Settings.email.plugin.title.test"),defaultMessage:"Test email delivery"})),e.createElement(A.r,{gap:5,alignItems:"end"},e.createElement(f.P,{col:6,s:12},e.createElement(T.o,{id:"test-address-input",name:"test-address",onChange:te,label:l({id:(0,s.Z)("Settings.email.plugin.label.testAddress"),defaultMessage:"Recipient email"}),value:S,error:P.email?.id&&l({id:(0,s.Z)(`${P.email?.id}`),defaultMessage:"This is an invalid email"}),placeholder:l({id:(0,s.Z)("Settings.email.plugin.placeholder.testAddress"),defaultMessage:"ex: developer@example.com"})})),e.createElement(f.P,{col:7,s:12},e.createElement(y.z,{loading:W,disabled:!q,type:"submit",startIcon:e.createElement(n.Z,null)},l({id:(0,s.Z)("Settings.email.plugin.button.test-email"),defaultMessage:"Send test email"}))))))))))},k=G},49066:(b,p,t)=>{t.d(p,{D:()=>c});var e=t(67294),a=t(45697),d=t(41580);const c=({children:m})=>e.createElement(d.x,{paddingLeft:10,paddingRight:10},m);c.propTypes={children:a.node.isRequired}},53979:(b,p,t)=>{t.d(p,{T:()=>f});var e=t(67294),a=t(45697),d=t(71997),c=t(41580),m=t(11047);const Z=n=>{const u=(0,e.useRef)(null),[i,o]=(0,e.useState)(!0),g=([v])=>{o(v.isIntersecting)};return(0,e.useEffect)(()=>{const v=u.current,s=new IntersectionObserver(g,n);return v&&s.observe(u.current),()=>{v&&s.disconnect()}},[u,n]),[u,i]};var h=t(95355);const x=(n,u)=>{const i=(0,h.W)(u);(0,e.useLayoutEffect)(()=>{const o=new ResizeObserver(i);return Array.isArray(n)?n.forEach(g=>{g.current&&o.observe(g.current)}):n.current&&o.observe(n.current),()=>{o.disconnect()}},[n,i])};var E=t(75515);const A=()=>{const n=(0,e.useRef)(null),[u,i]=(0,e.useState)(null),[o,g]=Z({root:null,rootMargin:"0px",threshold:0});return x(o,()=>{o.current&&i(o.current.getBoundingClientRect())}),(0,e.useEffect)(()=>{n.current&&i(n.current.getBoundingClientRect())},[n]),{containerRef:o,isVisible:g,baseHeaderLayoutRef:n,headerSize:u}},f=n=>{const{containerRef:u,isVisible:i,baseHeaderLayoutRef:o,headerSize:g}=A();return e.createElement(e.Fragment,null,e.createElement("div",{style:{height:g?.height},ref:u},i&&e.createElement(y,{ref:o,...n})),!i&&e.createElement(y,{...n,sticky:!0,width:g?.width}))};f.displayName="HeaderLayout";const T=(0,d.ZP)(c.x)`
  width: ${n=>n.width}px;
`,y=e.forwardRef(({navigationAction:n,primaryAction:u,secondaryAction:i,subtitle:o,title:g,sticky:v,width:s,...R},C)=>{const L=typeof o=="string";return v?e.createElement(T,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:s,zIndex:4,"data-strapi-header-sticky":!0},e.createElement(m.k,{justifyContent:"space-between"},e.createElement(m.k,null,n&&e.createElement(c.x,{paddingRight:3},n),e.createElement(c.x,null,e.createElement(E.Z,{variant:"beta",as:"h1",...R},g),L?e.createElement(E.Z,{variant:"pi",textColor:"neutral600"},o):o),i?e.createElement(c.x,{paddingLeft:4},i):null),e.createElement(m.k,null,u?e.createElement(c.x,{paddingLeft:2},u):void 0))):e.createElement(c.x,{ref:C,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:n?6:8,background:"neutral100","data-strapi-header":!0},n?e.createElement(c.x,{paddingBottom:2},n):null,e.createElement(m.k,{justifyContent:"space-between"},e.createElement(m.k,{minWidth:0},e.createElement(E.Z,{as:"h1",variant:"alpha",...R},g),i?e.createElement(c.x,{paddingLeft:4},i):null),u),L?e.createElement(E.Z,{variant:"epsilon",textColor:"neutral600",as:"p"},o):o)});y.displayName="BaseHeaderLayout",y.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},y.propTypes={navigationAction:a.node,primaryAction:a.node,secondaryAction:a.node,sticky:a.bool,subtitle:a.oneOfType([a.string,a.node]),title:a.string.isRequired,width:a.number},f.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},f.propTypes={navigationAction:a.node,primaryAction:a.node,secondaryAction:a.node,subtitle:a.oneOfType([a.string,a.node]),title:a.string.isRequired}},185:(b,p,t)=>{t.d(p,{o:()=>m});var e=t(67294),a=t(45697),d=t(71997);const c=d.ZP.main`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,m=({labelledBy:Z,...h})=>{const x=Z||"main-content-title";return e.createElement(c,{"aria-labelledby":x,id:"main-content",tabIndex:-1,...h})};m.defaultProps={labelledBy:void 0},m.propTypes={labelledBy:a.string}},23293:(b,p,t)=>{t.d(p,{Z:()=>d});var e=t(85893);const a=c=>(0,e.jsxs)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...c,children:[(0,e.jsx)("path",{d:"M0 2.8A.8.8 0 0 1 .8 2h22.4a.8.8 0 0 1 .8.8v2.71a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2.8Z",fill:"#32324D"}),(0,e.jsx)("path",{d:"M1.922 7.991C.197 6.675 0 6.252 0 5.289h23.953c.305 1.363-1.594 2.506-2.297 3.125-1.953 1.363-6.253 4.36-7.828 5.45-1.575 1.09-3.031.455-3.562 0-2.063-1.41-6.62-4.557-8.344-5.873ZM22.8 18H1.2c-.663 0-1.2.471-1.2 1.053v1.894C0 21.529.537 22 1.2 22h21.6c.663 0 1.2-.471 1.2-1.053v-1.894c0-.582-.537-1.053-1.2-1.053Z",fill:"#32324D"}),(0,e.jsx)("path",{d:"M0 9.555v10.972h24V9.554c-2.633 1.95-8.367 6.113-9.96 7.166-1.595 1.052-3.352.438-4.032 0L0 9.555Z",fill:"#32324D"})]}),d=a}}]);
