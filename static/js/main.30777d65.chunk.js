(this["webpackJsonpinvestice-byt"]=this["webpackJsonpinvestice-byt"]||[]).push([[0],{36:function(e,t,a){e.exports=a(48)},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(17),m=a.n(r),o=(a(41),a(12)),c=a(13),s=a(16),u=a(15),i=a(51),p=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(i.a,{fluid:!0,className:"header"},l.a.createElement("div",{className:"header-part1"},"Investi\u010dn\xed nemovitost"),l.a.createElement("div",{className:"header-part2"},"orienta\u010dn\xed kalkula\u010dka"))}}]),a}(n.Component),d=a(8),v=a(25),E=a(60),g=a(58),h=a(52),y=a(32),b=a(53),f=a(54),k=function(e){return l.a.createElement(g.a.Control.Feedback,{className:"custom-control",type:"invalid"},e.text)},x=function(e){var t=Object(v.a)({mode:"onSubmit"}),a=t.register,r=t.handleSubmit,m=t.formState,o=t.setValue,c=t.getValues,s=t.errors,u=t.clearErrors,p=e.mortgageEnabled,x=e.useDefaultFormInput,I=e.defaultFormInput,M=Object(n.useState)(),P=Object(d.a)(M,2),N=P[0],V=P[1],j=Object(n.useState)(!1),D=Object(d.a)(j,2),R=D[0],O=D[1],S=/^[0-9]*$/,H=/^[0-9]*.?[0-9]*$/;return l.a.createElement("div",null,l.a.createElement(i.a,{fluid:!0,className:"disclaimer-strip"},l.a.createElement(E.a.Link,{className:"text-reset linkClass",href:"#",onClick:function(){return O(!R)}},R?"Skr\xfdt":"Zobrazit"," vysv\u011btlivky a popis v\xfdpo\u010dtu")),l.a.createElement(i.a,{className:"inputs"},l.a.createElement("div",{className:"row justify-content-center"},R?l.a.createElement(E.a,{variant:"danger",className:"disclaimer-text"},l.a.createElement(E.a.Heading,null,"Vysv\u011btlivky"),"Nemovitost",l.a.createElement("ul",null,l.a.createElement("li",null,"Vlastn\xed investice (VI) - finance z vlastn\xed kapsy. Sou\u010det vlastn\xed investice a v\xfd\u0161e hypot\xe9ky odpov\xedd\xe1 cen\u011b nemovitosti."),l.a.createElement("li",null,"Po\u010d\xe1te\u010dn\xed investice (PI) - n\xe1klady na po\u010d\xe1te\u010dn\xed rekonstrukci nemovitosti. Nap\u0159. rekonstrukce kuchyn\u011b, koupelny nebo nov\xe1 podlaha."),l.a.createElement("li",null,"M\u011bs\xed\u010dn\xed n\xe1jem (MN) - n\xe1jemn\xe9 po\u017eadovan\xe9 po n\xe1jemn\xedkovi."),l.a.createElement("li",null,"M\u011bs\xed\u010dn\xed v\xfddaje v procentech k n\xe1jmu (MV) - m\u011bs\xed\u010dn\xed v\xfddaje na da\u0148 z nemovitosti, poji\u0161t\u011bn\xed nemovitosti, apod."),l.a.createElement("li",null,"Po\u010det m\u011bs\xedc\u016f v roce, kdy nebude nemovitost pronajata (PM) - v\xfdpadek p\u0159\xedjm\u016f z n\xe1jmu v p\u0159\xedpad\u011b, kdy z\u016fst\xe1v\xe1 nemovitost nepronajata. Nap\u0159. p\u0159i hled\xe1n\xed nov\xe9ho n\xe1jemn\xedka, apod."),l.a.createElement("li",null,"Fond na intern\xed opravy (ro\u010dn\u011b) (FO) - finance na opravy nemovitosti b\u011bhem doby investice. Nap\u0159. p\u0159i rekonstrukci kuchyn\u011b \u010di jin\xfdch nezbytn\xfdch oprav\xe1ch.")),"Hypot\xe9ka",l.a.createElement("ul",null,l.a.createElement("li",null,"V\xfd\u0161e (VH) - v\xfd\u0161e hypot\xe9ky. Sou\u010det v\xfd\u0161e hypot\xe9ky a vlastn\xed investice odpov\xedd\xe1 cen\u011b nemovitosti."),l.a.createElement("li",null,"Doba spl\xe1cen\xed v cel\xfdch letech (DH) - d\xe9lka hypot\xe9ky."),l.a.createElement("li",null,"\xdarok p.a. (UH) - ro\u010dn\xed \xfarok hypot\xe9ky.")),"V\xfdhled",l.a.createElement("ul",null,l.a.createElement("li",null,"N\xe1rust/pokles hodnoty nemovitosti za dobu investice v procentech (HN) - \xfaprava v\xfdpo\u010dtu v\xfdnosu investice o spekulativn\xed n\xe1rust \u010di pokles hodnoty nemovitosti za dobu investice.")),l.a.createElement(E.a.Heading,null,"Popis v\xfdpo\u010dtu"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u010cist\xfd m\u011bs\xed\u010dn\xed p\u0159\xedjem z n\xe1jmu (CM) = (MN x (12 - PM) - FO - MN x (12 - PM) x MV - (MN x (12 - PM) - MN x (12 - PM) x MV - FO - 24840) x 0.15) / 12; (0.15 = 15% = da\u0148 z p\u0159\xedjmu; 12 = po\u010det m\u011bs\xedc\u016f v roce; 24840 K\u010d = sleva na dani na poplatn\xedka (2020))."),l.a.createElement("li",null,"M\u011bs\xed\u010dn\xed spl\xe1tka hypot\xe9ky (MH) = VH x (1 + UH/12)"," ",l.a.createElement("sup",null,"DH x 12")," x ((UH/12) / ((1 + UH/12)"," ",l.a.createElement("sup",null,"DH x 12")," - 1)); (12 = po\u010det m\u011bs\xedc\u016f v roce)."),l.a.createElement("li",null,"M\u011bs\xed\u010dn\xed doplatek na hypot\xe9ku = M\u011bs\xed\u010dn\xed spl\xe1tka hypot\xe9ky - \u010cist\xfd m\u011bs\xed\u010dn\xed p\u0159\xedjem z n\xe1jmu."),l.a.createElement("li",null,"\u010cist\xfd v\xfdnos investice p.a. = ((CM x 12 x DI + (VH + VI) - MH x 12 x DH - PI - VI) / (MH x 12 x DH + PI + VI) / DI) x 100; (12 = po\u010det m\u011bs\xedc\u016f v roce; DI = d\xe9lka investice v letech)"),l.a.createElement("li",null,"\u010cist\xfd v\xfdnos investice p.a. se zapo\u010dten\xedm n\xe1rustu/poklesu hodnoty investice = ((CM x 12 x DI + (VH + VI) x (1 + HN) - MH x 12 x DH - PI - VI) / (MH x 12 x DH + PI + VI) / DI) x 100; (12 = po\u010det m\u011bs\xedc\u016f v roce; DI = d\xe9lka investice v letech)"))):"",";",l.a.createElement(g.a,{className:"form",onSubmit:r((function(t){e.onSubmit(t)})),noValidate:!0},l.a.createElement("div",{className:"inputForm-header"},l.a.createElement("h4",null,"Nemovitost")),l.a.createElement(g.a.Group,{as:h.a},l.a.createElement(g.a.Label,{column:!0,sm:8},"Vlastn\xed investice"),l.a.createElement(y.a,{sm:4},l.a.createElement(b.a,null,l.a.createElement(g.a.Control,{type:"number",placeholder:I.propertyInvestment,name:"propertyInvestment",ref:a({required:!0,min:1e5,max:2e7,pattern:S}),defaultValue:x?I.propertyInvestment:""}),l.a.createElement(b.a.Append,null,l.a.createElement(b.a.Text,null,"K\u010d")),s.propertyInvestment?l.a.createElement(k,{text:"100 000 - 20 000 000 K\u010d"}):""))),l.a.createElement(g.a.Group,{as:h.a},l.a.createElement(g.a.Label,{column:!0,sm:8},"Po\u010d\xe1te\u010dn\xed investice"),l.a.createElement(y.a,{sm:4},l.a.createElement(b.a,null,l.a.createElement(g.a.Control,{type:"number",placeholder:I.initialMaintenence,name:"initialMaintenence",ref:a({required:!0,min:0,max:2e6,pattern:S}),defaultValue:x?I.initialMaintenence:""}),l.a.createElement(b.a.Append,null,l.a.createElement(b.a.Text,null,"K\u010d")),s.initialMaintenence?l.a.createElement(k,{text:"0 - 2 000 000 K\u010d"}):""))),l.a.createElement(g.a.Group,{as:h.a},l.a.createElement(g.a.Label,{column:!0,sm:8},"M\u011bs\xed\u010dn\xed n\xe1jem"),l.a.createElement(y.a,{sm:4},l.a.createElement(b.a,null,l.a.createElement(g.a.Control,{type:"number",placeholder:I.monthlyRent,name:"monthlyRent",ref:a({required:!0,min:1e3,max:1e5,pattern:S}),defaultValue:x?I.monthlyRent:""}),l.a.createElement(b.a.Append,null,l.a.createElement(b.a.Text,null,"K\u010d")),s.monthlyRent?l.a.createElement(k,{text:"1000 - 100 000 K\u010d"}):""))),l.a.createElement(g.a.Group,{as:h.a},l.a.createElement(g.a.Label,{column:!0,sm:8},"M\u011bs\xed\u010dn\xed v\xfddaje v procentech k n\xe1jmu"),l.a.createElement(y.a,{sm:4},l.a.createElement(b.a,null,l.a.createElement(g.a.Control,{type:"number",placeholder:I.monthlyExpenses,name:"monthlyExpenses",ref:a({required:!0,min:0,max:30,pattern:S}),defaultValue:x?I.monthlyExpenses:""}),l.a.createElement(b.a.Append,null,l.a.createElement(b.a.Text,null,"%")),s.monthlyExpenses?l.a.createElement(k,{text:"0 - 30 %"}):""))),l.a.createElement(g.a.Group,{as:h.a},l.a.createElement(g.a.Label,{column:!0,sm:8},"Po\u010det m\u011bs\xedc\u016f v roce, kdy nebude nemovitost pronajata"),l.a.createElement(y.a,{sm:4},l.a.createElement(g.a.Control,{type:"number",placeholder:I.emptyMonths,name:"emptyMonths",ref:a({required:!0,min:0,max:6,maxLength:4,pattern:H}),defaultValue:x?I.emptyMonths:""}),s.emptyMonths?l.a.createElement(k,{text:"0.00 - 6.00"}):"")),l.a.createElement(g.a.Group,{as:h.a},l.a.createElement(g.a.Label,{column:!0,sm:8},"Fond na intern\xed opravy (ro\u010dn\u011b)"),l.a.createElement(y.a,{sm:4},l.a.createElement(b.a,null,l.a.createElement(g.a.Control,{type:"number",placeholder:I.homeMaintenance,name:"homeMaintenance",ref:a({required:!0,min:0,max:5e4,pattern:S}),defaultValue:x?I.homeMaintenance:""}),l.a.createElement(b.a.Append,null,l.a.createElement(b.a.Text,null,"K\u010d")),s.homeMaintenance?l.a.createElement(k,{text:"0 - 50 000 K\u010d"}):""))),l.a.createElement("div",{className:"inputForm-header"},l.a.createElement("h4",null,"Hypot\xe9ka"," ",l.a.createElement(g.a.Check,{inline:!0,type:"checkbox",name:"mortgage",checked:p,ref:a,onChange:function(t){t.target.checked?(o("mortgageValue",N.mortgageValue),o("mortgagePeriod",N.mortgagePeriod),o("mortgageInterest",N.mortgageInterest)):(V(c(["mortgageValue","mortgagePeriod","mortgageInterest"])),u(["mortgageValue","mortgagePeriod","mortgageInterest"]),o("mortgageValue",""),o("mortgagePeriod",""),o("mortgageInterest","")),e.toggleMortgage(t)}}))),l.a.createElement(g.a.Group,{as:h.a},l.a.createElement(g.a.Label,{column:!0,sm:8},"V\xfd\u0161e"),l.a.createElement(y.a,{sm:4},l.a.createElement(b.a,null,l.a.createElement(g.a.Control,{type:"number",placeholder:p?I.mortgageValue:"",name:"mortgageValue",ref:a({required:p,min:1e5,max:2e7,pattern:S}),disabled:!p,defaultValue:x?I.mortgageValue:""}),l.a.createElement(b.a.Append,null,l.a.createElement(b.a.Text,null,"K\u010d")),s.mortgageValue&&p?l.a.createElement(k,{text:"100 000 - 20 000 000 K\u010d"}):""))),l.a.createElement(g.a.Group,{as:h.a},l.a.createElement(g.a.Label,{column:!0,sm:8},"Doba spl\xe1cen\xed v cel\xfdch letech"),l.a.createElement(y.a,{sm:4},l.a.createElement(g.a.Control,{type:"number",placeholder:p?I.mortgagePeriod:"",name:"mortgagePeriod",ref:a({required:p,min:2,max:35,pattern:S}),readOnly:!p,disabled:!p,defaultValue:x?I.mortgagePeriod:""}),s.mortgagePeriod&&p?l.a.createElement(k,{text:"2 - 35 let"}):"")),l.a.createElement(g.a.Group,{as:h.a},l.a.createElement(g.a.Label,{column:!0,sm:8},"\xdarok p.a."),l.a.createElement(y.a,{sm:4},l.a.createElement(b.a,null,l.a.createElement(g.a.Control,{type:"number",placeholder:p?I.mortgageInterest:"",name:"mortgageInterest",ref:a({required:p,min:.1,max:10,maxLength:4,pattern:H}),readOnly:!p,disabled:!p,defaultValue:x?I.mortgageInterest:""}),l.a.createElement(b.a.Append,null,l.a.createElement(b.a.Text,null,"%")),s.mortgageInterest&&p?l.a.createElement(k,{text:"0.10 - 10.00 %"}):""))),l.a.createElement("div",{className:"button-send"},l.a.createElement(f.a,{variant:"info",type:"submit",disabled:m.isSubmitting},"Vypo\u010d\xedtat"))))))},I=a(59),M=a(61),P=a(57),N=function(e){var t=e.rowData.map((function(e,t){return l.a.createElement("td",{key:t,className:"align-middle "+(0===t?"table-cell-bold":"")},e,"%")}));return l.a.createElement("tr",{key:e.monthlyRent,className:"table-cell-center "+(e.bold?" table-cell-bold":"")},l.a.createElement("td",{className:"table-cell-center align-middle"},e.monthlyRent,"\xa0K\u010d"),t)},V=function(e){var t=e.tableData.map((function(t,a){return l.a.createElement(N,{key:e.monthlyRent[a],rowData:t,monthlyRent:e.monthlyRent[a],bold:2===a})}));return l.a.createElement("tbody",null,t)},j=function(e){var t=e.headerData.map((function(e,t){return l.a.createElement("th",{key:t},e)}));return l.a.createElement("thead",null,l.a.createElement("tr",{className:"table-cell-center align-middle table-cell-bold"},l.a.createElement("th",null),t))},D=a(55),R=a(56),O=function(e){return l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"\u010cist\xfd v\xfdnos investice p.a.:"),e.isValueDevelopmentIncluded?" (se zapo\u010dten\xedm zm\u011bny hodnoty investice)":"",l.a.createElement("br",null),l.a.createElement("div",{className:"d-none d-sm-block"},"M\u011bs\xed\u010dn\xed n\xe1jem ",l.a.createElement(D.a,{className:"align-text-middle"})," / D\xe9lka investice v letech"," ",l.a.createElement(R.a,{className:"align-text-middle"})),l.a.createElement("div",{className:"d-sm-none d-block"},"D\xe9lka investice v letech"," ",l.a.createElement(R.a,{className:"align-text-middle"}),l.a.createElement("br",null)," M\u011bs\xed\u010dn\xed n\xe1jem"," ",l.a.createElement(D.a,{className:"align-text-middle"})))))},S=function(e){var t=e.tablesData,a=t.monthlyMortgagePayment,n=t.monthlyNetRevenue,r=t.mortgagePeriod,m=[{description:"\u010cist\xfd m\u011bs\xed\u010dn\xed p\u0159\xedjem z n\xe1jmu: ",value:n+" K\u010d"}],o=[{description:"M\u011bs\xed\u010dn\xed spl\xe1tka hypot\xe9ky: ",value:a+" K\u010d po dobu "+r+" let"},{description:"M\u011bs\xed\u010dn\xed doplatek na hypot\xe9ku: ",value:a-n+" K\u010d po dobu "+r+" let"}];0!==r&&(m=m.concat(o));var c=m.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",{className:"align-middle"},e.description),l.a.createElement("td",{className:"align-middle"},e.value))}));return l.a.createElement("tbody",null,c)},H=function(e){var t=e.tablesData.rentInvestmentPeriodTable;return l.a.createElement("div",null,l.a.createElement(P.a,{responsive:!0},l.a.createElement(S,{tablesData:e.tablesData})),l.a.createElement(P.a,{responsive:!0,className:"resultsTableDescription"},l.a.createElement(O,{isValueDevelopmentIncluded:!1})),l.a.createElement(P.a,{bordered:!0,striped:!0,hover:!0,responsive:!0},l.a.createElement(j,{headerData:t.investmentPeriod}),l.a.createElement(V,{tableData:t.data,monthlyRent:t.monthlyRent})))},C=function(e){var t=e.tablesData.rentInvestmentPeriodTable;return l.a.createElement("div",null,l.a.createElement(P.a,{responsive:!0,className:"resultsTableDescription"},l.a.createElement(O,{isValueDevelopmentIncluded:!0})),l.a.createElement(P.a,{bordered:!0,striped:!0,hover:!0,responsive:!0},l.a.createElement(j,{headerData:t.investmentPeriod}),l.a.createElement(V,{tableData:t.data,monthlyRent:t.monthlyRent})))},F=function(e){var t=Object(v.a)({mode:"onSubmit"}),a=t.register,n=t.handleSubmit,r=t.formState,m=t.errors;return l.a.createElement("div",null,l.a.createElement(i.a,{className:"inputs"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement(g.a,{className:"form",onSubmit:n((function(t){e.prospectOnSubmit(t.valueDevelopment/100)})),noValidate:!0},l.a.createElement(g.a.Group,{as:h.a},l.a.createElement(g.a.Label,{column:!0,sm:8},"N\xe1rust/pokles hodnoty nemovitosti za dobu investice v procentech"),l.a.createElement(y.a,{sm:4},l.a.createElement(b.a,null,l.a.createElement(g.a.Control,{type:"number",name:"valueDevelopment",ref:a({required:!0,min:-100,max:100,pattern:/^-?[0-9]+$/}),defaultValue:""}),l.a.createElement(b.a.Append,null,l.a.createElement(b.a.Text,null,"%")),m.valueDevelopment?l.a.createElement(k,{text:"-100 - 100 %"}):""))),l.a.createElement("div",{className:"button-send"},l.a.createElement(f.a,{variant:"info",type:"submit",disabled:r.isSubmitting},"Vypo\u010d\xedtat v\xfdhled"))))))},K=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=0!==Object.keys(this.props.results).length,t=0!==Object.keys(this.props.resultsProspect).length;return l.a.createElement(i.a,{className:"results",ref:this.tableRef},l.a.createElement("div",{className:"justify-content-center"},l.a.createElement(I.a,{className:"resultsCard",activeKey:e?"result":""},l.a.createElement(M.a,null,l.a.createElement(I.a.Toggle,{as:M.a.Header,eventKey:"result"},l.a.createElement("b",null,"V\xfdsledek")),l.a.createElement(I.a.Collapse,{eventKey:"result"},l.a.createElement(M.a.Body,null,e?l.a.createElement(H,{tablesData:this.props.results}):"")))),l.a.createElement(I.a,{className:"resultsCard",activeKey:e?"prospect":""},l.a.createElement(M.a,null,l.a.createElement(I.a.Toggle,{as:M.a.Header,eventKey:"prospect"},l.a.createElement("b",null,"V\xfdhled")),l.a.createElement(I.a.Collapse,{eventKey:"prospect"},l.a.createElement(M.a.Body,null,e?l.a.createElement("div",null,l.a.createElement(F,{prospectOnSubmit:this.props.prospectOnSubmit}),t?l.a.createElement(C,{tablesData:this.props.resultsProspect}):""):""))))))}}]),a}(n.Component),T=(a(46),a(47),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this)).state={formInputData:{},results:{},resultsProspect:{},mortgageEnabled:!0},n.useDefaultFormInput=!1,n.defaultFormInput={propertyInvestment:6e5,initialMaintenence:1e5,monthlyRent:11e3,monthlyExpenses:30,emptyMonths:1,homeMaintenance:5e3,mortgageValue:24e5,mortgagePeriod:20,mortgageInterest:2.28},n.toggleMortgage=function(e){n.setState({mortgageEnabled:e.target.checked})},n.onSubmit=function(e){var t=n.computeInvestmentResults(e);n.setState({formInputData:e,results:t,resultsProspect:{}})},n.prospectOnSubmit=function(e){var t=n.computeInvestmentResults(n.state.formInputData,e);n.setState({resultsProspect:t})},n.computeInvestmentResults=function(e,t){var a={};return e.mortgage?a.monthlyMortgagePayment=n.computeMonthlyMortgagePayment(e):(e.mortgageValue=0,e.mortgagePeriod=0,e.mortgageInterest=0,a.monthlyMortgagePayment=0),a.monthlyNetRevenue=n.computeMonthlyNetRevenue(e),a.rentInvestmentPeriodTable=n.getRentInvestmentPeriodTable(e,a.monthlyMortgagePayment,t),a.mortgagePeriod=e.mortgagePeriod,n.roundResults(a),a},n.computeMonthlyMortgagePayment=function(e){var t=parseFloat(e.mortgageInterest)/100/12,a=12*parseInt(e.mortgagePeriod,10);return parseInt(e.mortgageValue,10)*Math.pow(1+t,a)*(t/(Math.pow(1+t,a)-1))},n.computeMonthlyNetRevenue=function(e,t){void 0===t&&(t=parseInt(e.monthlyRent,10));var a=parseFloat(e.emptyMonths,10),n=parseInt(e.homeMaintenance,10),l=parseInt(e.monthlyExpenses,10)/100;return(t*(12-a)-n-t*(12-a)*l-.15*(t*(12-a)-t*(12-a)*l-n-24840))/12},n.getRentInvestmentPeriodTable=function(e,t,a){for(var l=parseInt(e.mortgagePeriod,10),r={data:[],monthlyRent:[],investmentPeriod:[]},m=new Set,o=parseInt(e.monthlyRent,10)+1e3,c=parseInt(e.monthlyRent,10)-1e3;c<=o;c+=500){var s=[];r.monthlyRent.push(c);var u=n.computeMonthlyNetRevenue(e,c);if(l%5!==0){var i=n.computeYearlyProfitInPercentage(e,t,u,void 0,a);s.push(Number(i).toFixed(2)),m.add(l)}for(var p=0===l?5:5*Math.ceil(l/5);p<=50;p+=5){m.add(p);var d=n.computeYearlyProfitInPercentage(e,t,u,p,a);s.push(Number(d).toFixed(2))}r.data.push(s)}return r.investmentPeriod=Array.from(m),r},n.computeYearlyProfitInPercentage=function(e,t,a,n,l){void 0===n&&(n=e.mortgagePeriod),l=void 0===l?0:parseFloat(l,10);var r=parseInt(e.initialMaintenence,10),m=parseInt(e.propertyInvestment,10),o=parseInt(e.mortgagePeriod,10);return(12*a*n+(parseInt(e.mortgageValue,10)+m)*(1+l)-12*t*o-r-m)/(12*t*o+r+m)/n*100},n.roundResults=function(e){return e.monthlyMortgagePayment=Number(e.monthlyMortgagePayment).toFixed(),e.monthlyNetRevenue=Number(e.monthlyNetRevenue).toFixed(),e},n.scrollToTable=function(){return window.scrollTo(0,n.tableRef.current.offsetTop)},n.tableRef=l.a.createRef(),n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.results,a=e.mortgageEnabled,n=e.resultsProspect;return l.a.createElement("div",null,l.a.createElement(p,null),l.a.createElement(x,{onSubmit:this.onSubmit,toggleMortgage:this.toggleMortgage,mortgageEnabled:a,defaultFormInput:this.defaultFormInput,useDefaultFormInput:this.useDefaultFormInput}),l.a.createElement("div",{ref:this.tableRef},l.a.createElement(K,{prospectOnSubmit:this.prospectOnSubmit,results:t,resultsProspect:n})))}}]),a}(n.Component));m.a.render(l.a.createElement(T,null),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.30777d65.chunk.js.map