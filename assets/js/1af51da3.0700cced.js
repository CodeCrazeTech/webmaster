"use strict";(self.webpackChunkdocs_with_docusaurus=self.webpackChunkdocs_with_docusaurus||[]).push([[929],{5797:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>o});var i=s(4848),r=s(8453);const c={sidebar_position:11},l="How to run Admin Panel?",t={id:"AdminPanel/setup",title:"How to run Admin Panel?",description:"Prerequisites:",source:"@site/docs/AdminPanel/setup.md",sourceDirName:"AdminPanel",slug:"/AdminPanel/setup",permalink:"/webmaster/docs/AdminPanel/setup",draft:!1,unlisted:!1,editUrl:"https://themeforest.net/user/codecrazetech/docs/AdminPanel/setup.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Admin Panel",permalink:"/webmaster/docs/category/admin-panel"},next:{title:"What's new?",permalink:"/webmaster/docs/update"}},d={},o=[{value:"Prerequisites:",id:"prerequisites",level:2},{value:"Running the Frontend:",id:"running-the-frontend",level:2},{value:"Frontend Customization (Local Machine):",id:"frontend-customization-local-machine",level:2},{value:"Running the Backend(Local Machine):",id:"running-the-backendlocal-machine",level:2},{value:"Backend Customization (Local Machine):",id:"backend-customization-local-machine",level:2}];function a(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"how-to-run-admin-panel",children:"How to run Admin Panel?"}),"\n",(0,i.jsx)(e.h2,{id:"prerequisites",children:"Prerequisites:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Python 3.6+"}),"\n",(0,i.jsx)(e.li,{children:"Node.js and npm (or yarn)"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"running-the-frontend",children:"Running the Frontend:"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Open this project any IDE (Ex.vscode)"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Navigate to project directory:"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"cd .\\dashboard\\"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Install dependencies:"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"npm install"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Start the React development server:"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"npm run dev"})}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"installation process",src:s(5667).A+"",width:"1920",height:"1020"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["Frontend should now be running at ",(0,i.jsx)(e.a,{href:"http://localhost:5173/",children:"http://localhost:5173/"})]}),"\n",(0,i.jsx)(e.h2,{id:"frontend-customization-local-machine",children:"Frontend Customization (Local Machine):"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Go to ",(0,i.jsx)(e.code,{children:"dashboard->src->utils->axios.jsx "})," and give your local url for development ",(0,i.jsx)(e.code,{children:"API_DOMAIN"})]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"installation process 1",src:s(8682).A+"",width:"1920",height:"1020"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"running-the-backendlocal-machine",children:"Running the Backend(Local Machine):"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Open this project any IDE (Ex.vscode)"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Navigate to project directory:"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:" cd .\\server\\"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Create a virtual environment and activate it:"}),"\r\n",(0,i.jsx)(e.strong,{children:"For Windows"})]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"python -m venv venv"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"venv\\Scripts\\activate"})}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"For Linux"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"python3 -m venv venv"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"source venv/bin/activate"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Install dependencies:"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"pip install -r requirements.txt"})}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"backend installation process 1",src:s(3349).A+"",width:"1920",height:"1020"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Run migrations:"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"python manage.py migrate"})}),"\n",(0,i.jsxs)(e.li,{children:["For linux ",(0,i.jsx)(e.code,{children:"python3 manage.py migrate"})]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"backend installation process db migrations",src:s(1550).A+"",width:"1920",height:"1020"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Create a superuser (accessing Django admin):"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"python manage.py createsuperuser"})}),"\n",(0,i.jsxs)(e.li,{children:["For linux ",(0,i.jsx)(e.code,{children:"python3 manage.py createsuperuser"})]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"backend installation process superuser",src:s(4567).A+"",width:"1920",height:"1020"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Run the Django development server:"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"python manage.py runserver"})}),"\n",(0,i.jsxs)(e.li,{children:["For linux ",(0,i.jsx)(e.code,{children:"python3 manage.py runserver"})]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"backend installation process superuser",src:s(9400).A+"",width:"1920",height:"1020"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["Your Django backend should now be running at ",(0,i.jsx)(e.a,{href:"http://127.0.0.1:8000/",children:"http://127.0.0.1:8000/"}),"."]}),"\n",(0,i.jsx)(e.h2,{id:"backend-customization-local-machine",children:"Backend Customization (Local Machine):"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["First download json from firebase than rename json as ",(0,i.jsx)(e.code,{children:"service-account.json"})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Replace project ",(0,i.jsx)(e.code,{children:"service-account.json"})," with your ",(0,i.jsx)(e.code,{children:"service-account.json"})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Go to your ",(0,i.jsx)(e.code,{children:"service-account.json"})," and copy ",(0,i.jsx)(e.code,{children:"project_id"})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Than go to ",(0,i.jsx)(e.code,{children:"server->.eVar->.env "})," and replace the ",(0,i.jsx)(e.code,{children:"project_id"})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["For development you need to set ",(0,i.jsx)(e.code,{children:"debug=True"})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"For host by yourself please replace hostname what you want to"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"backend customization",src:s(7665).A+"",width:"1920",height:"1020"})}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},3349:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/installation-1-037599a15e177cd15d8c51996a798959.png"},1550:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/installation-2-d314f19c2b89a34f614da72080be020c.png"},4567:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/installation-3-4f1314e02b01ae33bbfab220bb944f06.png"},9400:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/installation-4-9c3fd8246ce511600a7d147e549932be.png"},7665:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/installation-5-0555a9a110538c4803be74020f176ed4.png"},8682:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/installation-6-f60553b34e2c018c35302978a27f8efe.png"},5667:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/installation-63138df6314a0ec8c0d86122a6db3f2b.png"},8453:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>t});var i=s(6540);const r={},c=i.createContext(r);function l(n){const e=i.useContext(c);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),i.createElement(c.Provider,{value:e},n.children)}}}]);