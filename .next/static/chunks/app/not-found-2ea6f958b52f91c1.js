(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9160],{3440:function(t,e,r){Promise.resolve().then(r.bind(r,959))},959:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return v}});var i=r(7437);r(2265);var n=r(7648),o=r(3146),a=r(5656),p=r(6387),x=r(4013),l=r(9084);let s=(0,o.F4)`
    0% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
    100% { transform: translateY(0px) rotate(0deg); }
`,c=(0,o.F4)`
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
`,f=(0,o.F4)`
    0% { transform: translateY(0) rotate(0deg); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: translateY(-1000%) rotate(720deg); opacity: 0; }
`,d=(0,l.Z)("svg")`
    animation: ${s} 6s ease-in-out infinite;
    filter: drop-shadow(0 0 15px rgba(0, 255, 249, 0.5));
`,h=(0,l.Z)(a.Z)`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
`,u=(0,l.Z)(a.Z)`
  position: absolute;
  width: 10px;
  height: 10px;
  background: ${t=>t.color};
  border-radius: 50%;
  animation: ${f} ${t=>t.duration}s linear infinite;
  animation-delay: ${t=>t.delay}s;
  left: ${t=>t.left}%;
`,m=(0,l.Z)(p.Z)`
  position: relative;
  text-shadow: 0 0 20px rgba(255, 0, 193, 0.5);
  
  &:before,
  &:after {
    content: '404';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &:before {
    left: 2px;
    text-shadow: -2px 0 #ff00c1;
    clip: rect(24px, 550px, 90px, 0);
    animation: glitch-anim 3s infinite linear alternate-reverse;
  }

  &:after {
    left: -2px;
    text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
    clip: rect(85px, 550px, 140px, 0);
    animation: glitch-anim 2s infinite linear alternate-reverse;
  }

  @keyframes glitch-anim {
    0% { clip: rect(134px, 9999px, 52px, 0); }
    5% { clip: rect(22px, 9999px, 147px, 0); }
    10% { clip: rect(55px, 9999px, 89px, 0); }
    15% { clip: rect(111px, 9999px, 8px, 0); }
    20% { clip: rect(133px, 9999px, 96px, 0); }
    25% { clip: rect(0px, 9999px, 13px, 0); }
    30% { clip: rect(36px, 9999px, 138px, 0); }
    35% { clip: rect(61px, 9999px, 30px, 0); }
    40% { clip: rect(128px, 9999px, 74px, 0); }
    45% { clip: rect(109px, 9999px, 90px, 0); }
    50% { clip: rect(27px, 9999px, 128px, 0); }
    55% { clip: rect(24px, 9999px, 84px, 0); }
    60% { clip: rect(73px, 9999px, 50px, 0); }
    65% { clip: rect(140px, 9999px, 144px, 0); }
    70% { clip: rect(142px, 9999px, 21px, 0); }
    75% { clip: rect(39px, 9999px, 124px, 0); }
    80% { clip: rect(6px, 9999px, 85px, 0); }
    85% { clip: rect(87px, 9999px, 82px, 0); }
    90% { clip: rect(6px, 9999px, 128px, 0); }
    95% { clip: rect(10px, 9999px, 86px, 0); }
    100% { clip: rect(104px, 9999px, 138px, 0); }
  }
`,g=(0,l.Z)(x.Z)`
  position: relative;
  overflow: hidden;
  background: linear-gradient(90deg, transparent, rgba(0, 255, 249, 0.2), transparent);
  background-size: 200% 100%;
  animation: ${c} 3s infinite;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(0, 255, 249, 0.5);
  }
`;var b=()=>{let t=Array.from({length:20}).map((t,e)=>({left:100*Math.random(),delay:2*Math.random(),duration:3+2*Math.random(),color:e%2==0?"#ff00c1":"#00fff9"}));return(0,i.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"100vh",textAlign:"center",backgroundColor:"#0a0a0a",color:"#fff",overflow:"hidden",position:"relative"},children:[(0,i.jsx)(h,{children:t.map((t,e)=>(0,i.jsx)(u,{left:t.left,delay:t.delay,duration:t.duration,color:t.color},e))}),(0,i.jsxs)(d,{width:"300",height:"300",viewBox:"0 0 200 200",children:[(0,i.jsx)("defs",{children:(0,i.jsxs)("linearGradient",{id:"gradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[(0,i.jsx)("stop",{offset:"0%",stopColor:"#3f51b5"}),(0,i.jsx)("stop",{offset:"50%",stopColor:"#ff00c1"}),(0,i.jsx)("stop",{offset:"100%",stopColor:"#00fff9"})]})}),(0,i.jsx)("circle",{cx:"100",cy:"100",r:"90",fill:"none",stroke:"url(#gradient)",strokeWidth:"10"}),(0,i.jsx)("path",{d:"M60,100 Q100,40 140,100 T220,100",fill:"none",stroke:"#ff00c1",strokeWidth:"5",children:(0,i.jsx)("animate",{attributeName:"d",dur:"3s",repeatCount:"indefinite",values:"M60,100 Q100,40 140,100 T220,100; M60,100 Q100,60 140,100 T220,100; M60,100 Q100,40 140,100 T220,100"})}),(0,i.jsx)("path",{d:"M60,100 Q100,160 140,100 T220,100",fill:"none",stroke:"#00fff9",strokeWidth:"5",children:(0,i.jsx)("animate",{attributeName:"d",dur:"3s",repeatCount:"indefinite",values:"M60,100 Q100,160 140,100 T220,100; M60,100 Q100,140 140,100 T220,100; M60,100 Q100,160 140,100 T220,100"})})]}),(0,i.jsx)(m,{variant:"h1",sx:{fontSize:{xs:"5rem",sm:"8rem"},fontWeight:"bold",marginBottom:2,fontFamily:'"Orbitron", sans-serif'},children:"404"}),(0,i.jsx)(p.Z,{variant:"h4",sx:{marginBottom:2,color:"#00fff9",textShadow:"0 0 10px rgba(0, 255, 249, 0.5)",fontFamily:'"Orbitron", sans-serif'},children:"اوه! صفحه مورد نظر یافت نشد"}),(0,i.jsx)(p.Z,{variant:"body1",sx:{marginBottom:4,maxWidth:"600px",color:"#ccc",px:2},children:"متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد یا حذف شده است. لطفاً مطمئن شوید که آدرس را درست وارد کرده‌اید یا به صفحه اصلی بازگردید."}),(0,i.jsx)(g,{component:n.default,href:"/",variant:"outlined",sx:{color:"#00fff9",borderColor:"#00fff9",padding:"10px 30px",fontSize:"1.1rem",zIndex:1,"&:hover":{backgroundColor:"rgba(0, 255, 249, 0.1)",borderColor:"#00fff9"}},children:"بازگشت به صفحه اصلی"})]})};function v(){return(0,i.jsx)(b,{})}},5656:function(t,e,r){"use strict";r.d(e,{Z:function(){return l}});var i=r(8636),n=r(6063),o=r(7107),a=r(2166);let p=(0,r(4143).Z)("MuiBox",["root"]),x=(0,o.Z)();var l=(0,i.Z)({themeId:a.Z,defaultTheme:x,defaultClassName:p.root,generateClassName:n.Z.generate})},9084:function(t,e,r){"use strict";let i=(0,r(825).ZP)();e.Z=i}},function(t){t.O(0,[5040,2276,4013,7648,2971,2117,1744],function(){return t(t.s=3440)}),_N_E=t.O()}]);