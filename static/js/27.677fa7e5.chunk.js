(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[27],{120:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=n(81),r=n(144),c=n(0),i=function(t){var e=Object(c.useState)(null),n=Object(a.a)(e,2),i=n[0],o=n[1];return Object(c.useEffect)((function(){var e=t.current,n=new r.a((function(t,e){t.forEach((function(t,e){o(t.contentRect)}))}));return n.observe(e),function(){n.unobserve(e)}}),[t]),i}},243:function(t,e,n){"use strict";n.r(e);var a=n(81),r=n(7),c=n(120),i=n(31),o=n(82),s=n.n(o),u=n(134),l=n(172),f=n(171),m=n(110),d=n(118),b=n(233),h=n(121),j=n(176),O=n(133),v=function(t){var e=function(){for(var t,e=O.b;t=e.sourceEvent;)e=t;return e}();return e.changedTouches&&(e=e.changedTouches[0]),function(t,e){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var a=n.createSVGPoint();return a.x=e.clientX,a.y=e.clientY,[(a=a.matrixTransform(t.getScreenCTM().inverse())).x,a.y]}var r=t.getBoundingClientRect();return[e.clientX-r.left-t.clientLeft,e.clientY-r.top-t.clientTop]}(t,e)},g=n(215),p=n(239),x=n(220),k=(n(105),n(85)),y=n.n(k),E=n(0),M=n.n(E),N=n(251),T=15,w=35,A=25,C=25;e.default=M.a.memo((function(t){var e=t.timeseries,n=t.dates,o=t.chartType,O=t.isUniform,k=t.isLog,y=Object(N.a)().t,R=Object(E.useRef)([]),S=Object(E.useRef)(),L=Object(c.a)(S),Y=Object(E.useState)(),H=Object(a.a)(Y,2),P=H[0],U=H[1];Object(E.useEffect)((function(){U(n[n.length-1])}),[n]);var V=Object(E.useCallback)((function(){var t=n.length,e=(L||S.current.getBoundingClientRect()).width-w-C;return Math.min(4,e/(1.25*t))}),[n.length,L]);Object(E.useEffect)((function(){var t=n.length,a=L||S.current.getBoundingClientRect(),c=a.width,s=a.height,y=c-w,E=s-A,M=V(),N=Object(b.a)().clamp(!0).domain(t?[Object(i.k)(n[0]),Object(i.k)(n[t-1])]:[]).range([C,y]),Y=c<480?4:7,H=function(t){return t.attr("class","x-axis").call(Object(m.a)(N).ticks(Y).tickFormat((function(t){return Object(i.c)(t,"dd MMM")})))},P=function(t,e){t.attr("class","x-axis2").call(Object(m.a)(N).tickValues([]).tickSize(0)).select(".domain").style("transform","translateY(".concat(e(0),"px)")),e(0)!==E?t.select(".domain").attr("opacity",.4):t.select(".domain").attr("opacity",0)},B=function(t,e){return t.attr("class","y-axis").call(Object(m.b)(e).ticks(4).tickFormat((function(t){return Object(i.e)(t,"short")})).tickPadding(4))},F=Object(u.a)(n,(function(t){return Object(i.h)(e[t],o,"active")})),G=Object(l.a)(n,(function(t){return Math.max(Object(i.h)(e[t],o,"confirmed"),Object(i.h)(e[t],o,"recovered"),Object(i.h)(e[t],o,"deceased"))})),X=Object(h.a)().clamp(!0).domain([F,Math.max(1,1.2*G)]).nice(4).range([E,T]),I=Object(j.a)().clamp(!0).domain([Math.max(1,F),Math.max(10,1.2*G)]).nice(4).range([E,T]);function J(){var t=v(this)[0],e=N.invert(t);if(!isNaN(e)){var a=(0,Object(f.a)((function(t){return Object(i.k)(t)})).left)(n,e,1),r=n[a-1],c=n[a];U(e-Object(i.k)(r)<Object(i.k)(c)-e?r:c)}}function z(){U(n[t-1])}R.current.forEach((function(a,c){var s=Object(g.a)(a),f=s.transition().duration(r.b),m=r.A[c],b=function(t){return O&&"total"===o&&k&&"tested"!==t?I:O&&"tested"!==t?X:"total"===o&&k?Object(j.a)().clamp(!0).domain([Math.max(1,Object(u.a)(n,(function(n){return Object(i.h)(e[n],o,t)}))),Math.max(10,1.2*Object(l.a)(n,(function(n){return Object(i.h)(e[n],o,t)})))]).nice(4).range([E,T]):Object(h.a)().clamp(!0).domain([1.1*Math.min(0,Object(u.a)(n,(function(n){return Object(i.h)(e[n],o,t)}))),Math.max(1,1.2*Object(l.a)(n,(function(n){return Object(i.h)(e[n],o,t)})))]).nice(4).range([E,T])}(m),v=r.t[m].color;if(s.select(".x-axis").style("transform","translateY(".concat(E,"px)")).transition(f).call(H),s.select(".x-axis2").transition(f).call(P,b),s.select(".y-axis").style("transform","translateX(".concat(y,"px)")).transition(f).call(B,b),s.selectAll("circle").data(n,(function(t){return t})).join((function(t){return t.append("circle").attr("fill",v).attr("stroke",v).attr("cy",E).attr("cx",(function(t){return N(Object(i.k)(t))})).attr("r",M/2)})).transition(f).attr("cx",(function(t){return N(Object(i.k)(t))})).attr("cy",(function(t){return b(Object(i.h)(e[t],o,m))})),"total"===o){s.selectAll(".stem").transition(f).attr("y1",b(0)).attr("y2",b(0)).remove();var w,A=Object(p.a)().curve(x.a).x((function(t){return N(Object(i.k)(t))})).y((function(t){return b(Object(i.h)(e[t],o,m))}));s.selectAll(".trend").data(t?[n]:[]).join((function(t){return t.append("path").attr("class","trend").attr("fill","none").attr("stroke",v+"50").attr("stroke-width",4).attr("d",A).attr("stroke-dasharray",(function(){return w=this.getTotalLength()})).call((function(t){return t.attr("stroke-dashoffset",w).transition(f).attr("stroke-dashoffset",0)}))}),(function(t){return t.attr("stroke-dasharray",null).transition(f).attrTween("d",(function(t){var e=Object(g.a)(this).attr("d"),n=A(t);return Object(d.interpolatePath)(e,n)}))}))}else s.selectAll(".trend").remove(),s.selectAll(".stem").data(n,(function(t){return t})).join((function(t){return t.append("line").attr("class","stem").attr("stroke-width",M).attr("x1",(function(t){return N(Object(i.k)(t))})).attr("y1",E).attr("x2",(function(t){return N(Object(i.k)(t))})).attr("y2",E)})).transition(f).attr("stroke-width",M).attr("x1",(function(t){return N(Object(i.k)(t))})).attr("y1",b(0)).attr("x2",(function(t){return N(Object(i.k)(t))})).attr("y2",(function(t){return b(Object(i.h)(e[t],o,m))}));s.selectAll("*").attr("pointer-events","none"),s.on("mousemove",J).on("touchmove",J).on("mouseout",z).on("touchend",z)}))}),[o,L,V,O,k,e,n]),Object(E.useEffect)((function(){var t=V();R.current.forEach((function(e){Object(g.a)(e).selectAll("circle").attr("r",(function(e){return e===P?t:t/2}))}))}),[P,V]);var B=Object(E.useCallback)((function(t){if(P){var a=Object(i.h)(null===e||void 0===e?void 0:e[P],o,t),r=n[n.findIndex((function(t){return t===P}))-1];return a-Object(i.h)(null===e||void 0===e?void 0:e[r],o,t)}}),[e,n,P,o]),F=Object(E.useMemo)((function(){var t=[];return[0,0,0,0,0].map((function(e,n){return t.push({animationDelay:"".concat(250*n,"ms")}),null})),t}),[]);return M.a.createElement(M.a.Fragment,null,M.a.createElement("div",{className:"Timeseries"},r.A.map((function(t,n){var a=B(t,n),c=r.t[t];return M.a.createElement("div",{key:t,className:s()("svg-parent fadeInUp","is-".concat(t)),ref:S,style:F[n]},P&&M.a.createElement("div",{className:s()("stats","is-".concat(t))},M.a.createElement("h5",{className:"title"},y(Object(i.a)(c.displayName))),M.a.createElement("h5",{className:"title"},Object(i.c)(P,"dd MMMM")),M.a.createElement("div",{className:"stats-bottom"},M.a.createElement("h2",null,Object(i.e)(Object(i.h)(null===e||void 0===e?void 0:e[P],o,t),"short"!==c.format?c.format:"int",t)),M.a.createElement("h6",null,"".concat(a>0?"+":"").concat(Object(i.e)(a,"short"!==c.format?c.format:"int",t))))),M.a.createElement("svg",{ref:function(t){R.current[n]=t},preserveAspectRatio:"xMidYMid meet"},M.a.createElement("g",{className:"x-axis"}),M.a.createElement("g",{className:"x-axis2"}),M.a.createElement("g",{className:"y-axis"})))}))))}),(function(t,e){return!!y()(e.chartType,t.chartType)&&(!!y()(e.isUniform,t.isUniform)&&(!!y()(e.isLog,t.isLog)&&(!!y()(e.regionHighlighted.stateCode,t.regionHighlighted.stateCode)&&(!!y()(e.regionHighlighted.districtName,t.regionHighlighted.districtName)&&!!y()(e.dates,t.dates)))))}))}}]);
//# sourceMappingURL=27.677fa7e5.chunk.js.map