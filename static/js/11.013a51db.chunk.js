(this["webpackJsonplikeswap-frontend"]=this["webpackJsonplikeswap-frontend"]||[]).push([[11],{680:function(n,e,t){"use strict";var r=t(60),c=t(16),a=(t(0),t(5));function i(){var n=Object(r.a)(["\n  width: 100%;\n  background: none;\n  border: 0;\n  color: ",";\n  font-size: 18px;\n  flex: 1;\n  height: 56px;\n  margin: 0;\n  padding: 0;\n  outline: none;\n"]);return i=function(){return n},n}function o(){var n=Object(r.a)(["\n  align-items: center;\n  background-color: ",";\n  border-radius: ",";\n  display: flex;\n  height: 72px;\n  padding: 0 ","px;\n"]);return o=function(){return n},n}var s=a.e.div(o(),(function(n){return n.theme.colors.input}),(function(n){return n.theme.radii.default}),(function(n){return n.theme.spacing[3]})),u=a.e.input(i(),(function(n){return n.theme.colors.primary}));e.a=function(n){var e=n.endAdornment,t=n.onChange,r=n.placeholder,a=n.startAdornment,i=n.value;return Object(c.jsxs)(s,{children:[!!a&&a,Object(c.jsx)(u,{placeholder:r,value:i,onChange:t}),!!e&&e]})}},681:function(n,e,t){"use strict";t.d(e,"c",(function(){return O})),t.d(e,"b",(function(){return p}));var r=t(4),c=t.n(r),a=t(12),i=t(27),o=t(0),s=t(11),u=t.n(s),l=t(68),d=t(181),j=t(54),b=t(682),f=t(31),h=t(132),O=function(){var n=Object(h.a)().slowRefresh,e=Object(o.useState)(),t=Object(i.a)(e,2),r=t[0],s=t[1];return Object(o.useEffect)((function(){function n(){return(n=Object(a.a)(c.a.mark((function n(){var e,t;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=Object(j.a)(d,Object(f.a)()),n.next=3,e.methods.totalSupply().call();case 3:t=n.sent,s(new u.a(t));case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[n]),r},p=function(n){var e=Object(o.useState)(new u.a(0)),t=Object(i.a)(e,2),r=t[0],s=t[1],l=Object(h.a)().slowRefresh;return Object(o.useEffect)((function(){(function(){var n=Object(a.a)(c.a.mark((function n(){var e,t;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=Object(j.a)(d,Object(f.a)()),n.next=3,e.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();case 3:t=n.sent,s(new u.a(t));case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[n,l]),r};e.a=function(n){var e=Object(o.useState)(new u.a(0)),t=Object(i.a)(e,2),r=t[0],s=t[1],d=Object(l.m)(),j=d.account,f=d.ethereum,O=Object(h.a)().fastRefresh;return Object(o.useEffect)((function(){j&&f&&function(){var e=Object(a.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.c)(f,n,j);case 2:t=e.sent,s(new u.a(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[j,f,n,O]),r}},685:function(n,e,t){"use strict";t.d(e,"a",(function(){return b})),t.d(e,"c",(function(){return f})),t.d(e,"b",(function(){return h}));var r=t(4),c=t.n(r),a=t(12),i=t(0),o=t(68),s=t(684),u=t(47),l=t(92),d=t(678),j=t(676),b=function(n){var e=Object(u.b)(),t=Object(o.m)().account,r=Object(j.f)();return{onApprove:Object(i.useCallback)(Object(a.a)(c.a.mark((function a(){var i;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(d.a)(n,r,t);case 3:return i=c.sent,e(Object(l.a)(t)),c.abrupt("return",i);case 8:return c.prev=8,c.t0=c.catch(0),c.abrupt("return",!1);case 11:case"end":return c.stop()}}),a,null,[[0,8]])}))),[t,e,n,r])}},f=function(){var n=Object(o.m)().account,e=Object(j.a)(),t=Object(j.d)();return{onApprove:Object(i.useCallback)(Object(a.a)(c.a.mark((function r(){var a;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(d.a)(e,t,n);case 3:return a=r.sent,r.abrupt("return",a);case 7:return r.prev=7,r.t0=r.catch(0),r.abrupt("return",!1);case 10:case"end":return r.stop()}}),r,null,[[0,7]])}))),[n,e,t])}},h=function(n,e){var t=Object(o.m)().account;return Object(i.useCallback)(Object(a.a)(c.a.mark((function r(){var a;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,n.methods.approve(e,s.ethers.constants.MaxUint256).send({from:t});case 3:return a=r.sent,r.abrupt("return",a);case 7:return r.prev=7,r.t0=r.catch(0),r.abrupt("return",!1);case 10:case"end":return r.stop()}}),r,null,[[0,7]])}))),[t,e,n])}},695:function(n,e,t){"use strict";t.d(e,"a",(function(){return c})),t.d(e,"b",(function(){return a}));var r=t(692);r.a.config({EXPONENTIAL_AT:1e3,DECIMAL_PLACES:80});new r.a(1);var c=new r.a(10512e3),a=3},697:function(n,e,t){"use strict";var r=3600,c=86400,a=2629800,i=31557600;e.a=function(n){var e=n,t={years:0,months:0,days:0,hours:0,minutes:0,seconds:0};return e>=i&&(t.years=Math.floor(e/i),e-=t.years*i),e>=a&&(t.months=Math.floor(e/a),e-=t.months*a),e>=c&&(t.days=Math.floor(e/c),e-=t.days*c),e>=r&&(t.hours=Math.floor(e/r),e-=t.hours*r),e>=60&&(t.minutes=Math.floor(e/60),e-=60*t.minutes),t.seconds=e,t}},698:function(n,e,t){"use strict";t.d(e,"b",(function(){return b})),t.d(e,"a",(function(){return f}));var r=t(4),c=t.n(r),a=t(12),i=t(27),o=t(0),s=t(11),u=t.n(s),l=t(68),d=t(676),j=t(682),b=function(){var n=Object(o.useState)(new u.a(0)),e=Object(i.a)(n,2),t=e[0],r=e[1],s=Object(l.m)().account,b=Object(d.d)(),f=Object(d.a)();return Object(o.useEffect)((function(){var n=function(){var n=Object(a.a)(c.a.mark((function n(){var e;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(j.a)(f,b,s);case 2:e=n.sent,r(new u.a(e));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();s&&f&&f&&n();var e=setInterval(n,1e4);return function(){return clearInterval(e)}}),[s,f,b]),t},f=function(n,e,t){var r=Object(l.m)().account,s=Object(o.useState)(null),d=Object(i.a)(s,2),j=d[0],b=d[1];return Object(o.useEffect)((function(){(function(){var t=Object(a.a)(c.a.mark((function t(){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.methods.allowance(r,e).call();case 3:a=t.sent,b(new u.a(a)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),b(null);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}})()()}),[r,e,n,t]),j}},798:function(n,e,t){"use strict";t.r(e);var r=t(16),c=t(0),a=t(29),i=t(182),o=t(60),s=t(5),u=t(74),l=t(50);function d(){var n=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 39px;\n"]);return d=function(){return n},n}var j=s.e.div(d()),b=function(){var n=Object(a.g)(),e=n.url,t=n.isExact;return Object(r.jsx)(j,{children:Object(r.jsxs)(l.e,{activeIndex:t?0:1,size:"sm",variant:"subtle",children:[Object(r.jsx)(l.f,{as:u.b,to:"".concat(e),children:"Next IFO"}),Object(r.jsx)(l.f,{as:u.b,to:"".concat(e,"/history"),children:"Past IFOs"})]})})},f=t(675);function h(){var n=Object(o.a)(["\n  background-image: linear-gradient(180deg, #53dee9 0%, #1fc7d4 100%);\n  padding-bottom: 40px;\n  padding-top: 40px;\n  margin-bottom: 32px;\n"]);return h=function(){return n},n}function O(){var n=Object(o.a)(["\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n"]);return O=function(){return n},n}function p(){var n=Object(o.a)(["\n  color: ",";\n  margin-bottom: 24px;\n"]);return p=function(){return n},n}var x=Object(s.e)(l.p).attrs({as:"h1",size:"xl"})(p(),(function(n){return n.theme.colors.secondary})),m=Object(s.e)(l.G)(O()),v=s.e.div(h()),g=function(){var n=Object(f.a)();return Object(r.jsx)(v,{children:Object(r.jsxs)(i.a,{children:[Object(r.jsx)(x,{children:n(500,"IFO: Initial Farm Offerings")}),Object(r.jsx)(m,{children:n(502,"Buy new tokens with a brand new token sale model.")})]})})},w=t(688),k=t(4),y=t.n(k),S=t(12),A=t(27),C=t(68),E=t(11),B=t.n(E),I=t(695),L=t(306),G=function(){return Object(c.useContext)(L.a)},T=t(676),U=t(679);function D(){var n=Object(o.a)(["\n  color: ",";\n  font-size: 14px;\n  text-align: right;\n"]);return D=function(){return n},n}function F(){var n=Object(o.a)(["\n  margin-bottom: 4px;\n  text-align: right;\n"]);return F=function(){return n},n}function z(){var n=Object(o.a)(["\n  & > div {\n    flex: 1;\n  }\n"]);return z=function(){return n},n}var N=Object(s.e)(l.o)(z()),M=Object(s.e)(l.p).attrs({as:"h3",size:"lg"})(F()),P=Object(s.e)(l.G)(D(),(function(n){return n.theme.colors.textSubtle})),W=function(n){var e=n.ifoId,t=n.name,c=n.subTitle;return Object(r.jsxs)(N,{mb:"24px",alignItems:"center",children:[Object(r.jsx)("img",{src:"/images/ifos/".concat(e,".svg"),alt:e,width:"64px",height:"64px"}),Object(r.jsxs)("div",{children:[Object(r.jsx)(M,{children:t}),Object(r.jsx)(P,{children:c})]})]})};function R(){var n=Object(o.a)(["\n  margin-bottom: 16px;\n"]);return R=function(){return n},n}var _=s.e.div(R()),K=function(n){var e=n.progress;return Object(r.jsx)(_,{children:Object(r.jsx)(l.B,{primaryStep:e})})};function H(){var n=Object(o.a)(["\n  color: ",";\n  display: ",";\n"]);return H=function(){return n},n}function Y(){var n=Object(o.a)(["\n  background: transparent;\n  border: none;\n  color: ",";\n  cursor: pointer;\n  display: block;\n  font-weight: 600;\n  outline: 0;\n  padding: 24px 16px;\n  width: 100%;\n"]);return Y=function(){return n},n}function q(){var n=Object(o.a)(["\n  background-color: ",";\n  height: 1px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 90%;\n"]);return q=function(){return n},n}function J(){var n=Object(o.a)(["\n  margin-top: 24px;\n  margin-bottom: 24px;\n"]);return J=function(){return n},n}var Q=s.e.div(J()),V=s.e.div(q(),(function(n){return n.theme.colors.borderColor})),X=s.e.button(Y(),(function(n){return n.theme.colors.primary})),Z=Object(s.e)(l.G)(H(),(function(n){return n.theme.colors.textSubtle}),(function(n){return n.isOpen?"block":"none"})),$=function(n){var e=n.defaultIsOpen,t=void 0===e||e,a=n.description,i=Object(c.useState)(t),o=Object(A.a)(i,2),s=o[0],u=o[1],l=Object(f.a)();return Object(r.jsxs)(Q,{children:[Object(r.jsx)(V,{}),Object(r.jsx)(X,{onClick:function(){return u(!s)},children:l(999,s?"Hide":"Show")}),Object(r.jsx)(Z,{isOpen:s,children:a})]})};function nn(){var n=Object(o.a)(["\n  flex: 1;\n"]);return nn=function(){return n},n}function en(){var n=Object(o.a)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n"]);return en=function(){return n},n}function tn(){var n=Object(o.a)(["\n  margin-bottom: 24px;\n"]);return tn=function(){return n},n}var rn=s.e.div(tn()),cn=s.e.div(en(),(function(n){return n.theme.colors.secondary})),an=Object(s.e)(l.G)(nn()),on=function(n){var e=n.launchDate,t=n.launchTime,c=n.saleAmount,a=n.raiseAmount,i=n.cakeToBurn,o=n.projectSiteUrl,s=n.raisingAmount,u=n.totalAmount,d=Object(f.a)();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(rn,{children:[Object(r.jsxs)(cn,{children:[Object(r.jsx)(an,{children:d(582,"Launch Time")}),Object(r.jsxs)(l.G,{children:[e,",",Object(r.jsx)(l.t,{href:"https://www.timeanddate.com/worldclock/singapore/singapore",target:"blank",rel:"noopener noreferrer",ml:"4px",style:{display:"inline"},children:t})]})]}),Object(r.jsxs)(cn,{children:[Object(r.jsx)(an,{children:d(584,"For Sale")}),Object(r.jsx)(l.G,{children:c})]}),Object(r.jsxs)(cn,{children:[Object(r.jsx)(an,{children:d(999,"To raise (USD)")}),Object(r.jsx)(l.G,{children:a})]}),Object(r.jsxs)(cn,{children:[Object(r.jsx)(an,{children:d(586,"CAKE to burn (USD)")}),Object(r.jsx)(l.G,{children:i})]}),Object(r.jsxs)(cn,{children:[Object(r.jsx)(an,{children:d(999,"Total raised (% of target)")}),Object(r.jsx)(l.G,{children:"".concat(u.div(s).times(100).toFixed(2),"%")})]})]}),Object(r.jsx)(l.u,{href:o,style:{margin:"auto"},children:d(412,"View project site")})]})},sn=t(697);function un(){var n=Object(o.a)(["\n  color: ",";\n  font-size: 20px;\n  font-weight: 600;\n  text-align: center;\n"]);return un=function(){return n},n}function ln(){var n=Object(o.a)(["\n  align-items: center;\n  display: flex;\n  height: 24px;\n  justify-content: center;\n  margin-bottom: 24px;\n"]);return ln=function(){return n},n}var dn=s.e.div(ln()),jn=s.e.div(un(),(function(n){return n.theme.colors.secondary})),bn=function(n){var e=n.isLoading,t=n.status,c=n.secondsUntilStart,a=n.secondsUntilEnd,i=n.block,o=Object(f.a)(),s="coming_soon"===t?c:a,u=Object(sn.a)(s),d="coming_soon"===t?"start":"finish";return e?Object(r.jsx)(dn,{children:o(656,"Loading...")}):s<=0?Object(r.jsx)(dn,{children:Object(r.jsx)(l.G,{bold:!0,children:o(999,"Finished!")})}):Object(r.jsxs)(dn,{children:[Object(r.jsx)(jn,{children:"".concat(u.days,"d, ").concat(u.hours,"h, ").concat(u.minutes,"m until ").concat(d)}),Object(r.jsx)(l.t,{href:"https://bscscan.com/block/countdown/".concat(i),target:"blank",rel:"noopener noreferrer",ml:"8px",children:"(blocks)"})]})},fn=t(698),hn=t(685),On=t(677);function pn(){var n=Object(o.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: solid 1px;\n  border-radius: ",";\n  border-color: ",";\n  padding-left: 16px;\n"]);return pn=function(){return n},n}var xn=s.e.div(pn(),(function(n){return n.theme.radii.default}),(function(n){return n.theme.colors.borderColor})),mn=function(n){var e=n.value,t=n.label,c=n.buttonLabel,a=n.onClick,i=n.disabled,o=void 0!==i&&i;return Object(r.jsxs)("div",{children:[t&&Object(r.jsx)(l.G,{fontSize:"14px",color:"textSubtle",children:t}),Object(r.jsxs)(xn,{children:[Object(r.jsx)(l.G,{bold:!0,fontSize:"20px",children:e}),Object(r.jsx)(l.d,{onClick:a,disabled:o,children:c})]})]})},vn=t(680);function gn(){var n=Object(o.a)(["\n  color: ",";\n  font-weight: 700;\n"]);return gn=function(){return n},n}function wn(){var n=Object(o.a)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n"]);return wn=function(){return n},n}function kn(){var n=Object(o.a)(["\n  align-items: center;\n  display: flex;\n"]);return kn=function(){return n},n}function yn(){var n=Object(o.a)(["\n  width: ","px;\n"]);return yn=function(){return n},n}var Sn=s.e.div(yn(),(function(n){return n.theme.spacing[3]})),An=s.e.div(kn()),Cn=s.e.div(wn(),(function(n){return n.theme.colors.primary})),En=s.e.span(gn(),(function(n){return n.theme.colors.primary})),Bn=function(n){var e=n.max,t=n.symbol,c=n.onChange,a=n.onSelectMax,i=n.value,o=Object(f.a)();return Object(r.jsxs)("div",{children:[Object(r.jsx)(vn.a,{endAdornment:Object(r.jsxs)(An,{children:[Object(r.jsx)(En,{children:t}),Object(r.jsx)(Sn,{}),Object(r.jsx)("div",{children:Object(r.jsx)(l.d,{size:"sm",onClick:a,children:o(452,"Max")})})]}),onChange:c,placeholder:"0",value:i}),Object(r.jsx)(Cn,{children:o(454,"".concat(e.toLocaleString()," ").concat(t," Available"))})]})},In=t(681),Ln=function(n){var e=n.currency,t=n.contract,a=n.currencyAddress,i=n.onDismiss,o=Object(c.useState)(""),s=Object(A.a)(o,2),u=s[0],d=s[1],j=Object(c.useState)(!1),b=Object(A.a)(j,2),f=b[0],h=b[1],O=Object(C.m)().account,p=Object(On.b)(Object(In.a)(a));return Object(r.jsxs)(l.y,{title:"Contribute ".concat(e),onDismiss:i,children:[Object(r.jsx)(Bn,{value:u,onChange:function(n){return d(n.currentTarget.value)},symbol:e,max:p,onSelectMax:function(){return d(p.toString())}}),Object(r.jsxs)(l.o,{justifyContent:"space-between",mb:"24px",children:[Object(r.jsx)(l.d,{fullWidth:!0,variant:"secondary",onClick:i,mr:"8px",children:"Cancel"}),Object(r.jsx)(l.d,{fullWidth:!0,disabled:f,onClick:Object(S.a)(y.a.mark((function n(){return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return h(!0),n.next=3,t.methods.deposit(new B.a(u).times(new B.a(10).pow(18)).toString()).send({from:O});case 3:h(!1),i();case 5:case"end":return n.stop()}}),n)}))),children:"Confirm"})]}),Object(r.jsx)(l.u,{href:"https://likeswap.github.io/dex/#/add/ETH/0x4a162e9a102d2195c1c4bf3bd319ad25a895ccaf",style:{margin:"auto"},children:"Get ".concat(e)})]})},Gn=function(n){var e=n.address,t=n.currency,a=n.currencyAddress,i=n.contract,o=n.status,s=n.raisingAmount,u=n.tokenDecimals,d=Object(c.useState)(!1),j=Object(A.a)(d,2),b=j[0],f=j[1],h=Object(c.useState)(new B.a(0)),O=Object(A.a)(h,2),p=O[0],x=O[1],m=Object(c.useState)({amount:0,claimed:!1}),v=Object(A.a)(m,2),g=v[0],w=v[1],k=Object(C.m)().account,E=Object(T.b)(a),I=Object(fn.a)(E,e,b),L=Object(hn.b)(E,e),G=Object(l.O)(Object(r.jsx)(Ln,{currency:t,contract:i,currencyAddress:a})),U=Object(A.a)(G,1)[0];if(Object(c.useEffect)((function(){k&&function(){var n=Object(S.a)(y.a.mark((function n(){var e,t;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=B.a,n.next=3,i.methods.getOfferingAmount(k).call();case 3:return n.t1=n.sent,e=new n.t0(n.t1),n.next=7,i.methods.userInfo(k).call();case 7:t=n.sent,w(t),x(e);case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()()}),[k,i.methods,b]),null===I)return null;var D=function(){var n=Object(S.a)(y.a.mark((function n(){return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return f(!0),n.next=3,i.methods.harvest().send({from:k});case 3:f(!1);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),F="finished"===o,z=new B.a(g.amount).div(s).times(100);return I<=0?Object(r.jsx)(l.d,{fullWidth:!0,disabled:b||F,onClick:Object(S.a)(y.a.mark((function n(){return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,f(!0),n.next=4,L();case 4:f(!1),n.next=11;break;case 7:n.prev=7,n.t0=n.catch(0),f(!1),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,7]])}))),children:"Approve"}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(mn,{disabled:b||g.claimed,buttonLabel:F?"Claim":"Contribute",label:F?"Your tokens to claim":"Your contribution (".concat(t,")"),value:F?g.claimed?"Claimed":Object(On.a)(p,u).toFixed(4):Object(On.a)(new B.a(g.amount)).toFixed(4),onClick:F?D:U}),Object(r.jsx)(l.G,{fontSize:"14px",color:"textSubtle",children:F?"You'll be refunded any excess tokens when you claim":"".concat(z.toFixed(5),"% of total")})]})};function Tn(){var n=Object(o.a)(["\n  background-image: ",";\n  background-repeat: no-repeat;\n  background-size: contain;\n  padding-top: 112px;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 437px;\n  width: 100%;\n"]);return Tn=function(){return n},n}var Un=Object(s.e)(l.h)(Tn(),(function(n){var e=n.ifoId;return"url('/images/ifos/".concat(e,"-bg.svg')")})),Dn=function(n,e,t){return n<e?"coming_soon":n>=e&&n<=t?"live":n>t?"finished":null},Fn=function(n){var e=n.ifo,t=e.id,a=e.address,i=e.name,o=e.subTitle,s=e.description,u=e.launchDate,d=e.launchTime,j=e.saleAmount,b=e.raiseAmount,h=e.cakeToBurn,O=e.projectSiteUrl,p=e.currency,x=e.currencyAddress,m=e.tokenDecimals,v=e.releaseBlockNumber,g=Object(c.useState)({isLoading:!0,status:null,blocksRemaining:0,secondsUntilStart:0,progress:0,secondsUntilEnd:0,raisingAmount:new B.a(0),totalAmount:new B.a(0),startBlockNum:0,endBlockNum:0}),w=Object(A.a)(g,2),k=w[0],E=w[1],L=Object(C.m)().account,D=Object(T.c)(a),F=G(),z=Object(f.a)(),N=function(n,e){return"coming_soon"===n?Object(r.jsx)(l.k,{variantColor:"textDisabled",text:e(999,"Coming Soon")}):"live"===n?Object(r.jsx)(l.k,{variantColor:"primary",text:e(999,"LIVE NOW!")}):null}(k.status,z);Object(c.useEffect)((function(){(function(){var n=Object(S.a)(y.a.mark((function n(){var e,t,r,c,a,i,o,s,u,l,d,j;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([D.methods.startBlock().call(),D.methods.endBlock().call(),D.methods.raisingAmount().call(),D.methods.totalAmount().call()]);case 2:e=n.sent,t=Object(A.a)(e,4),r=t[0],c=t[1],a=t[2],i=t[3],o=parseInt(r,10),s=parseInt(c,10),u=Dn(F,o,s),l=s-o,j=F>o?(F-o)/l*100:(F-v)/(o-v)*100,E({isLoading:!1,secondsUntilEnd:(d=s-F)*I.b,secondsUntilStart:(o-F)*I.b,raisingAmount:new B.a(a),totalAmount:new B.a(i),status:u,progress:j,blocksRemaining:d,startBlockNum:o,endBlockNum:s});case 15:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[F,D,v,E]);var M="live"===k.status,P="finished"===k.status;return Object(r.jsx)(Un,{ifoId:t,ribbon:N,isActive:M,children:Object(r.jsxs)(l.i,{children:[Object(r.jsx)(W,{ifoId:t,name:i,subTitle:o}),Object(r.jsx)(K,{progress:k.progress}),Object(r.jsx)(bn,{isLoading:k.isLoading,status:k.status,secondsUntilStart:k.secondsUntilStart,secondsUntilEnd:k.secondsUntilEnd,block:M||P?k.endBlockNum:k.startBlockNum}),!L&&Object(r.jsx)(U.a,{fullWidth:!0}),(M||P)&&Object(r.jsx)(Gn,{address:a,currency:p,currencyAddress:x,contract:D,status:k.status,raisingAmount:k.raisingAmount,tokenDecimals:m}),Object(r.jsx)($,{description:s}),Object(r.jsx)(on,{launchDate:u,launchTime:d,saleAmount:j,raiseAmount:b,cakeToBurn:h,projectSiteUrl:O,raisingAmount:k.raisingAmount,totalAmount:k.totalAmount})]})})};function zn(){var n=Object(o.a)(["\n  color: ",";\n  margin-bottom: 16px;\n"]);return zn=function(){return n},n}var Nn=Object(s.e)(l.p).attrs({size:"lg"})(zn(),(function(n){return n.theme.colors.secondary}));function Mn(){var n=Object(o.a)(["\n  border-top: 2px solid ",";\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 32px;\n  padding-bottom: 40px;\n  padding-top: 40px;\n\n  "," {\n    grid-template-columns: ",";\n  }\n"]);return Mn=function(){return n},n}var Pn=s.e.div(Mn(),(function(n){return n.theme.colors.textSubtle}),(function(n){return n.theme.mediaQueries.md}),(function(n){var e=n.isSingle;return"repeat(".concat(e?1:2,", 1fr)")}));Pn.defaultProps={isSingle:!1};var Wn=Pn;function Rn(){var n=Object(o.a)(["\n  color: ",";\n  margin-bottom: 16px;\n\n  & > li {\n    line-height: 1.4;\n    margin-bottom: 8px;\n  }\n"]);return Rn=function(){return n},n}function _n(){var n=Object(o.a)(["\n  border-top: 2px solid ",";\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 32px;\n  margin: 0 auto;\n  padding: 32px 0;\n\n  "," {\n    grid-template-columns: 1fr 1fr;\n  }\n"]);return _n=function(){return n},n}var Kn=Object(s.e)(l.b)(_n(),(function(n){return n.theme.colors.textSubtle}),(function(n){return n.theme.mediaQueries.sm})),Hn=s.e.ul(Rn(),(function(n){return n.theme.colors.text})),Yn=w.b.find((function(n){return n.isActive})),qn=function(){var n=Object(f.a)();return Object(r.jsxs)("div",{children:[Object(r.jsx)(Wn,{isSingle:!0,children:Object(r.jsx)(Fn,{ifo:Yn})}),Object(r.jsxs)(Kn,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)(Nn,{as:"h2",children:n(592,"How to take part")}),Object(r.jsxs)(l.p,{mb:"16px",children:[n(594,"Before Sale"),":"]}),Object(r.jsxs)(Hn,{children:[Object(r.jsx)("li",{children:n(596,"Buy LIKE and BNB tokens")}),Object(r.jsx)("li",{children:n(598,"Get LIKE-BNB LP tokens by adding LIKE and BNB liquidity")})]}),Object(r.jsxs)(l.o,{mb:"16px",children:[Object(r.jsx)(l.u,{href:"https://likeswap.github.io/dex/#/swap",mr:"16px",children:n(999,"Buy Like")}),Object(r.jsx)(l.u,{href:"https://likeswap.github.io/dex/#/add/ETH/0x4a162e9a102d2195c1c4bf3bd319ad25a895ccaf",children:n(999,"Get LP tokens")})]}),Object(r.jsxs)(l.p,{mb:"16px",children:[n(600,"During Sale"),":"]}),Object(r.jsx)(Hn,{children:Object(r.jsx)("li",{children:n(602,"While the sale is live, commit your LIKE-LP tokens to buy the IFO tokens")})}),Object(r.jsxs)(l.p,{mb:"16px",children:[n(604,"After Sale"),":"]}),Object(r.jsxs)(Hn,{children:[Object(r.jsx)("li",{children:n(606,"Claim the tokens you bought, along with any unspent funds.")}),Object(r.jsx)("li",{children:n(608,"Done!")})]}),Object(r.jsx)(l.G,{as:"div",pt:"16px",children:Object(r.jsx)(l.d,{as:"a",variant:"secondary",href:"https://docs.likeswap.org/core-products/ifo-initial-farm-offering",children:n(610,"Read more")})})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)(l.r,{src:"/images/ifo-bunny.svg",alt:"ifo bunny",width:436,height:406,responsive:!0}),Object(r.jsxs)("div",{children:[Object(r.jsx)(Nn,{as:"h2",children:n(512,"Want to launch your own IFO?")}),Object(r.jsx)(l.G,{mb:3,children:n(514,"Launch your project with LikeSwap, Binance Smart Chain\u2019s most-used AMM project and liquidity provider, to bring your token directly to the most active and rapidly growing community on BSC.")}),Object(r.jsx)(l.d,{as:"a",href:"https://docs.likeswap.org/viewform",external:!0,children:n(516,"Apply to launch")})]})]})]})]})},Jn=w.b.filter((function(n){return!n.isActive})),Qn=function(){return Object(r.jsx)(Wn,{children:Jn.map((function(n){return Object(r.jsx)(Fn,{ifo:n},n.id)}))})};e.default=function(){var n=Object(a.g)().path;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(g,{}),Object(r.jsxs)(i.a,{children:[Object(r.jsx)(b,{}),Object(r.jsx)(a.a,{exact:!0,path:"".concat(n),children:Object(r.jsx)(qn,{})}),Object(r.jsx)(a.a,{path:"".concat(n,"/history"),children:Object(r.jsx)(Qn,{})})]})]})}}}]);
//# sourceMappingURL=11.013a51db.chunk.js.map