(function(e){function a(a){for(var r,p,w=a[0],y=a[1],d=a[2],i=0,o=[];i<w.length;i++)p=w[i],Object.prototype.hasOwnProperty.call(n,p)&&n[p]&&o.push(n[p][0]),n[p]=0;for(r in y)Object.prototype.hasOwnProperty.call(y,r)&&(e[r]=y[r]);c&&c(a);while(o.length)o.shift()();return s.push.apply(s,d||[]),t()}function t(){for(var e,a=0;a<s.length;a++){for(var t=s[a],r=!0,w=1;w<t.length;w++){var y=t[w];0!==n[y]&&(r=!1)}r&&(s.splice(a--,1),e=p(p.s=t[0]))}return e}var r={},n={app:0},s=[];function p(a){if(r[a])return r[a].exports;var t=r[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,p),t.l=!0,t.exports}p.m=e,p.c=r,p.d=function(e,a,t){p.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},p.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},p.t=function(e,a){if(1&a&&(e=p(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(p.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var r in e)p.d(t,r,function(a){return e[a]}.bind(null,r));return t},p.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return p.d(a,"a",a),a},p.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},p.p="/";var w=window["webpackJsonp"]=window["webpackJsonp"]||[],y=w.push.bind(w);w.push=a,w=w.slice();for(var d=0;d<w.length;d++)a(w[d]);var c=y;s.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"034f":function(e,a,t){"use strict";var r=t("85ec"),n=t.n(r);n.a},"03d9":function(e){e.exports=JSON.parse('[{"name":"numeri e operazioni","code":"1"},{"name":"algebra","code":"2"},{"name":"radicali","code":"3"},{"name":"equazioni","code":"4"},{"name":"disequazioni","code":"5"},{"name":"logaritmi","code":"6"},{"name":"geometria analitica","code":"7"},{"name":"funzioni","code":"8"},{"name":"probabilità","code":"10"},{"name":"geometria elementare","code":"11"},{"name":"NO","code":"NO"}]')},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app"}},[t("div",{staticStyle:{float:"left","margin-left":"100px","margin-bottom":"100px"}},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],staticStyle:{display:"block","margin-bottom":"10px"},on:{change:[function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){var a="_value"in e?e._value:e.value;return a}));e.selected=a.target.multiple?t:t[0]},e.clear_answer]}},[t("option",{attrs:{disabled:"",value:""}},[e._v("Category")]),e._l(e.categories,(function(a){return t("option",{key:a.code,domProps:{value:a.code}},[e._v(e._s(a.name))])}))],2),e._l(e.filtered,(function(a){return t("div",{key:a.id,class:e.maybe_disabled[a.id],staticStyle:{"margin-bottom":"5px","text-align":"left"},style:e.maybe_last(a.id)},[t("span",{staticStyle:{"margin-right":"15px"}},[e._v(e._s(a.id))]),t("label",{attrs:{for:"a"}},[e._v("A")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.answer[a.id],expression:"answer[item.id]"}],staticStyle:{"margin-right":"10px"},attrs:{type:"radio",id:"a",value:"a"},domProps:{checked:e._q(e.answer[a.id],"a")},on:{change:[function(t){return e.$set(e.answer,a.id,"a")},function(t){return e.evaluate(a.id)}]}}),t("label",{attrs:{for:"b"}},[e._v("B")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.answer[a.id],expression:"answer[item.id]"}],staticStyle:{"margin-right":"10px"},attrs:{type:"radio",id:"b",value:"b"},domProps:{checked:e._q(e.answer[a.id],"b")},on:{change:[function(t){return e.$set(e.answer,a.id,"b")},function(t){return e.evaluate(a.id)}]}}),t("label",{attrs:{for:"c"}},[e._v("C")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.answer[a.id],expression:"answer[item.id]"}],staticStyle:{"margin-right":"10px"},attrs:{type:"radio",id:"c",value:"c"},domProps:{checked:e._q(e.answer[a.id],"c")},on:{change:[function(t){return e.$set(e.answer,a.id,"c")},function(t){return e.evaluate(a.id)}]}}),t("label",{attrs:{for:"d"}},[e._v("D")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.answer[a.id],expression:"answer[item.id]"}],staticStyle:{"margin-right":"10px"},attrs:{type:"radio",id:"d",value:"d"},domProps:{checked:e._q(e.answer[a.id],"d")},on:{change:[function(t){return e.$set(e.answer,a.id,"d")},function(t){return e.evaluate(a.id)}]}}),t("label",{attrs:{for:"e"}},[e._v("E")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.answer[a.id],expression:"answer[item.id]"}],staticStyle:{"margin-right":"30px"},attrs:{type:"radio",id:"e",value:"e"},domProps:{checked:e._q(e.answer[a.id],"e")},on:{change:[function(t){return e.$set(e.answer,a.id,"e")},function(t){return e.evaluate(a.id)}]}}),t("span",{style:e.answ_style(e.answer[a.id]===a.answer,e.answer[a.id])},[e._v(" "+e._s(e.answ_label(e.answer[a.id]===a.answer,e.answer[a.id]))+" ")]),e._v(" "+e._s(e.storage[a.id]?"("+"*".repeat(e.storage[a.id])+")":"")+" ")])}))],2)])},s=[],p=(t("4de4"),t("d81d"),t("b64b"),t("98f2")),w=t("03d9"),y={name:"App",computed:{filtered:function(){var e=this;return Object.keys(this.quiz).filter((function(a){return e.quiz[a].type===e.selected})).map((function(a){return{id:a,answer:e.quiz[a].answer}}))}},data:function(){return{answer:{},selected:void 0,categories:w,quiz:p,quiz_number:void 0,current_quiz:void 0,maybe_disabled:{},storage:void 0,last:void 0}},mounted:function(){"result"in window.localStorage||window.localStorage.setItem("result","{}"),"last"in window.localStorage||window.localStorage.setItem("last","{}"),this.storage=JSON.parse(window.localStorage.getItem("result")),this.last=JSON.parse(window.localStorage.getItem("last"))},methods:{maybe_last:function(e){return e===this.last[this.selected]?"border-style: solid; border-width: thin;":""},answ_label:function(e,a){return e?"OK":a?"NO":"....."},answ_style:function(e,a){return e?"color: green":a?"color: orange":"color: black"},clear_answer:function(){this.answer={}},evaluate:function(e){if(this.last[this.selected]=e,window.localStorage.setItem("last",JSON.stringify(this.last)),this.answer[e]!==this.quiz[e].answer){e in this.storage||(this.storage[e]=0),this.storage[e]++,window.localStorage.setItem("result",JSON.stringify(this.storage)),this.$set(this.maybe_disabled,e,"disabled"),this.maybe_disabled[e]="disabled";var a=this;setTimeout((function(){a.$set(a.maybe_disabled,e,"")}),15e3)}}}},d=y,c=(t("034f"),t("2877")),i=Object(c["a"])(d,n,s,!1,null,null,null),o=i.exports,l=t("2f62");r["a"].use(l["a"]);var b=new l["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({store:b,render:function(e){return e(o)}}).$mount("#app")},"85ec":function(e,a,t){},"98f2":function(e){e.exports=JSON.parse('{"1601":{"type":"1","answer":"e"},"1602":{"type":"5","answer":"a"},"1603":{"type":"6","answer":"c"},"1604":{"type":"8","answer":"a"},"1605":{"type":"8","answer":"b"},"1606":{"type":"6","answer":"e"},"1607":{"type":"8","answer":"c"},"1608":{"type":"8","answer":"d"},"1609":{"type":"8","answer":"e"},"1610":{"type":"8","answer":"b"},"1611":{"type":"6","answer":"e"},"1612":{"type":"6","answer":"c"},"1613":{"type":"8","answer":"b"},"1614":{"type":"2","answer":"c"},"1615":{"type":"5","answer":"b"},"1616":{"type":"11","answer":"d"},"1617":{"type":"8","answer":"a"},"1618":{"type":"1","answer":"c"},"1619":{"type":"10","answer":"c"},"1620":{"type":"2","answer":"e"},"1621":{"type":"8","answer":"c"},"1622":{"type":"2","answer":"b"},"1623":{"type":"8","answer":"a"},"1624":{"type":"1","answer":"c"},"1625":{"type":"8","answer":"d"},"1626":{"type":"6","answer":"c"},"1627":{"type":"6","answer":"d"},"1628":{"type":"5","answer":"c"},"1629":{"type":"1","answer":"b"},"1630":{"type":"6","answer":"c"},"1631":{"type":"11","answer":"a"},"1632":{"type":"4","answer":"b"},"1633":{"type":"6","answer":"b"},"1634":{"type":"NO","answer":"b"},"1635":{"type":"2","answer":"c"},"1636":{"type":"10","answer":"c"},"1637":{"type":"11","answer":"d"},"1638":{"type":"1","answer":"d"},"1639":{"type":"2","answer":"c"},"1640":{"type":"8","answer":"c"},"1641":{"type":"8","answer":"a"},"1642":{"type":"8","answer":"c"},"1643":{"type":"4","answer":"d"},"1644":{"type":"1","answer":"c"},"1645":{"type":"1","answer":"a"},"1646":{"type":"NO","answer":"d"},"1647":{"type":"NO","answer":"b"},"1648":{"type":"1","answer":"e"},"1649":{"type":"10","answer":"a"},"1650":{"type":"6","answer":"b"},"1651":{"type":"NO","answer":"c"},"1652":{"type":"NO","answer":"e"},"1653":{"type":"2","answer":"e"},"1654":{"type":"1","answer":"e"},"1655":{"type":"1","answer":"a"},"1656":{"type":"1","answer":"a"},"1657":{"type":"1","answer":"a"},"1658":{"type":"1","answer":"e"},"1659":{"type":"1","answer":"b"},"1660":{"type":"1","answer":"e"},"1661":{"type":"1","answer":"a"},"1662":{"type":"1","answer":"a"},"1663":{"type":"NO","answer":"c"},"1664":{"type":"7","answer":"d"},"1665":{"type":"10","answer":"d"},"1666":{"type":"5","answer":"b"},"1667":{"type":"NO","answer":"a"},"1668":{"type":"1","answer":"d"},"1669":{"type":"10","answer":"a"},"1670":{"type":"1","answer":"a"},"1671":{"type":"7","answer":"c"},"1672":{"type":"11","answer":"c"},"1673":{"type":"1","answer":"b"},"1674":{"type":"6","answer":"d"},"1675":{"type":"1","answer":"b"},"1676":{"type":"7","answer":"b"},"1677":{"type":"5","answer":"e"},"1678":{"type":"5","answer":"b"},"1679":{"type":"11","answer":"b"},"1680":{"type":"6","answer":"e"},"1681":{"type":"11","answer":"d"},"1682":{"type":"7","answer":"b"},"1683":{"type":"11","answer":"c"},"1684":{"type":"1","answer":"c"},"1685":{"type":"11","answer":"d"},"1686":{"type":"11","answer":"c"},"1687":{"type":"4","answer":"c"},"1688":{"type":"1","answer":"a"},"1689":{"type":"1","answer":"c"},"1690":{"type":"1","answer":"c"},"1691":{"type":"11","answer":"c"},"1692":{"type":"1","answer":"b"},"1693":{"type":"6","answer":"b"},"1694":{"type":"1","answer":"a"},"1695":{"type":"4","answer":"b"},"1696":{"type":"8","answer":"a"},"1697":{"type":"1","answer":"a"},"1698":{"type":"7","answer":"b"},"1699":{"type":"10","answer":"d"},"1700":{"type":"1","answer":"b"},"1701":{"type":"1","answer":"c"},"1702":{"type":"4","answer":"d"},"1703":{"type":"10","answer":"a"},"1704":{"type":"1","answer":"b"},"1705":{"type":"10","answer":"a"},"1706":{"type":"4","answer":"d"},"1707":{"type":"8","answer":"a"},"1708":{"type":"1","answer":"a"},"1709":{"type":"3","answer":"d"},"1710":{"type":"3","answer":"d"},"1711":{"type":"5","answer":"d"},"1712":{"type":"NO","answer":"c"},"1713":{"type":"11","answer":"c"},"1714":{"type":"1","answer":"a"},"1715":{"type":"1","answer":"d"},"1716":{"type":"1","answer":"c"},"1717":{"type":"3","answer":"b"},"1718":{"type":"4","answer":"d"},"1719":{"type":"5","answer":"d"},"1720":{"type":"6","answer":"d"},"1721":{"type":"11","answer":"c"},"1722":{"type":"1","answer":"d"},"1723":{"type":"7","answer":"c"},"1724":{"type":"11","answer":"a"},"1725":{"type":"NO","answer":"a"},"1726":{"type":"NO","answer":"a"},"1727":{"type":"1","answer":"c"},"1728":{"type":"11","answer":"a"},"1729":{"type":"6","answer":"a"},"1730":{"type":"11","answer":"c"},"1731":{"type":"1","answer":"c"},"1732":{"type":"2","answer":"a"},"1733":{"type":"11","answer":"c"},"1734":{"type":"NO","answer":"e"},"1735":{"type":"4","answer":"c"},"1736":{"type":"8","answer":"e"},"1737":{"type":"10","answer":"d"},"1738":{"type":"NO","answer":"c"},"1739":{"type":"NO","answer":"d"},"1740":{"type":"1","answer":"d"},"1741":{"type":"","answer":"d"},"1742":{"type":"","answer":"e"},"1743":{"type":"","answer":"a"},"1744":{"type":"","answer":"c"},"1745":{"type":"","answer":"c"},"1746":{"type":"","answer":"d"},"1747":{"type":"","answer":"d"},"1748":{"type":"","answer":"e"},"1749":{"type":"","answer":"b"},"1750":{"type":"","answer":"a"},"1751":{"type":"","answer":"a"},"1752":{"type":"","answer":"c"},"1753":{"type":"","answer":"c"},"1754":{"type":"","answer":"d"},"1755":{"type":"","answer":"d"},"1756":{"type":"","answer":"e"},"1757":{"type":"","answer":"c"},"1758":{"type":"","answer":"c"},"1759":{"type":"","answer":"e"},"1760":{"type":"","answer":"c"},"1761":{"type":"","answer":"c"},"1762":{"type":"","answer":"d"},"1763":{"type":"","answer":"e"},"1764":{"type":"","answer":"e"},"1765":{"type":"","answer":"e"},"1766":{"type":"","answer":"e"},"1767":{"type":"","answer":"a"},"1768":{"type":"","answer":"d"},"1769":{"type":"","answer":"d"},"1770":{"type":"","answer":"e"},"1771":{"type":"","answer":"d"},"1772":{"type":"","answer":"b"},"1773":{"type":"","answer":"a"},"1774":{"type":"","answer":"d"},"1775":{"type":"","answer":"a"},"1776":{"type":"","answer":"d"},"1777":{"type":"","answer":"c"},"1778":{"type":"","answer":"b"},"1779":{"type":"","answer":"b"},"1780":{"type":"","answer":"b"},"1781":{"type":"","answer":"d"},"1782":{"type":"","answer":"b"},"1783":{"type":"","answer":"d"},"1784":{"type":"","answer":"a"},"1785":{"type":"","answer":"d"},"1786":{"type":"","answer":"b"},"1787":{"type":"","answer":"b"},"1788":{"type":"","answer":"c"},"1789":{"type":"","answer":"b"},"1790":{"type":"","answer":"c"},"1791":{"type":"","answer":"d"},"1792":{"type":"","answer":"d"},"1793":{"type":"","answer":"e"},"1794":{"type":"","answer":"b"},"1795":{"type":"","answer":"e"},"1796":{"type":"","answer":"d"},"1797":{"type":"","answer":"d"},"1798":{"type":"","answer":"e"},"1799":{"type":"","answer":"b"},"1800":{"type":"","answer":"c"},"1801":{"type":"","answer":"a"},"1802":{"type":"","answer":"d"},"1803":{"type":"","answer":"d"},"1804":{"type":"","answer":"b"},"1805":{"type":"","answer":"b"},"1806":{"type":"","answer":"d"},"1807":{"type":"","answer":"c"},"1808":{"type":"","answer":"d"},"1809":{"type":"","answer":"d"},"1810":{"type":"","answer":"d"},"1811":{"type":"","answer":"a"},"1812":{"type":"","answer":"a"},"1813":{"type":"","answer":"b"},"1814":{"type":"","answer":"b"},"1815":{"type":"","answer":"d"},"1816":{"type":"","answer":"e"},"1817":{"type":"","answer":"d"},"1818":{"type":"","answer":"d"},"1819":{"type":"","answer":"a"},"1820":{"type":"","answer":"c"},"1821":{"type":"","answer":"a"},"1822":{"type":"","answer":"c"},"1823":{"type":"","answer":"e"},"1824":{"type":"","answer":"c"},"1825":{"type":"","answer":"c"},"1826":{"type":"","answer":"b"},"1827":{"type":"","answer":"e"},"1828":{"type":"","answer":"a"},"1829":{"type":"","answer":"c"},"1830":{"type":"","answer":"b"},"1831":{"type":"","answer":"e"},"1832":{"type":"","answer":"a"},"1833":{"type":"","answer":"a"},"1834":{"type":"","answer":"d"},"1835":{"type":"","answer":"a"},"1836":{"type":"","answer":"b"},"1837":{"type":"","answer":"e"},"1838":{"type":"","answer":"b"},"1839":{"type":"","answer":"a"},"1840":{"type":"","answer":"d"},"1841":{"type":"","answer":"d"},"1842":{"type":"","answer":"d"},"1843":{"type":"","answer":"b"},"1844":{"type":"","answer":"d"},"1845":{"type":"","answer":"d"},"1846":{"type":"","answer":"d"},"1847":{"type":"","answer":"b"},"1848":{"type":"","answer":"a"},"1849":{"type":"","answer":"e"},"1850":{"type":"","answer":"a"},"1851":{"type":"","answer":"d"},"1852":{"type":"","answer":"b"},"1853":{"type":"","answer":"b"},"1854":{"type":"","answer":"a"},"1855":{"type":"","answer":"b"},"1856":{"type":"","answer":"d"},"1857":{"type":"","answer":"a"},"1858":{"type":"","answer":"a"},"1859":{"type":"","answer":"c"},"1860":{"type":"","answer":"b"},"1861":{"type":"","answer":"c"},"1862":{"type":"","answer":"b"},"1863":{"type":"","answer":"b"},"1864":{"type":"","answer":"c"},"1865":{"type":"","answer":"b"},"1866":{"type":"","answer":"a"},"1867":{"type":"","answer":"a"},"1868":{"type":"","answer":"e"},"1869":{"type":"","answer":"c"},"1870":{"type":"","answer":"a"},"1871":{"type":"","answer":"c"},"1872":{"type":"","answer":"c"},"1873":{"type":"","answer":"b"},"1874":{"type":"","answer":"e"},"1875":{"type":"","answer":"d"},"1876":{"type":"","answer":"a"},"1877":{"type":"","answer":"b"},"1878":{"type":"","answer":"d"},"1879":{"type":"","answer":"b"},"1880":{"type":"","answer":"a"},"1881":{"type":"","answer":"c"},"1882":{"type":"","answer":"a"},"1883":{"type":"","answer":"b"},"1884":{"type":"","answer":"e"},"1885":{"type":"","answer":"b"},"1886":{"type":"","answer":"d"},"1887":{"type":"","answer":"e"},"1888":{"type":"","answer":"b"},"1889":{"type":"","answer":"d"},"1890":{"type":"","answer":"a"},"1891":{"type":"","answer":"a"},"1892":{"type":"","answer":"b"},"1893":{"type":"","answer":"a"},"1894":{"type":"","answer":"e"},"1895":{"type":"","answer":"a"},"1896":{"type":"","answer":"c"},"1897":{"type":"","answer":"a"},"1898":{"type":"","answer":"c"},"1899":{"type":"","answer":"a"},"1900":{"type":"","answer":"e"},"1901":{"type":"","answer":"d"},"1902":{"type":"","answer":"a"},"1903":{"type":"","answer":"d"},"1904":{"type":"","answer":"b"},"1905":{"type":"","answer":"b"},"1906":{"type":"","answer":"c"},"1907":{"type":"","answer":"a"},"1908":{"type":"","answer":"c"},"1909":{"type":"","answer":"c"},"1910":{"type":"","answer":"b"},"1911":{"type":"","answer":"c"},"1912":{"type":"","answer":"c"},"1913":{"type":"","answer":"b"},"1914":{"type":"","answer":"d"},"1915":{"type":"","answer":"c"},"1916":{"type":"","answer":"e"},"1917":{"type":"","answer":"d"},"1918":{"type":"","answer":"a"},"1919":{"type":"","answer":"c"},"1920":{"type":"","answer":"a"},"1921":{"type":"","answer":"b"},"1922":{"type":"","answer":"d"},"1923":{"type":"","answer":"c"},"1924":{"type":"","answer":"b"},"1925":{"type":"","answer":"d"},"1926":{"type":"","answer":"c"},"1927":{"type":"","answer":"d"},"1928":{"type":"","answer":"a"},"1929":{"type":"","answer":"e"},"1930":{"type":"","answer":"b"},"1931":{"type":"","answer":"d"},"1932":{"type":"","answer":"b"},"1933":{"type":"","answer":"a"},"1934":{"type":"","answer":"d"},"1935":{"type":"","answer":"b"},"1936":{"type":"","answer":"a"},"1937":{"type":"","answer":"d"},"1938":{"type":"","answer":"d"},"1939":{"type":"","answer":"a"},"1940":{"type":"","answer":"e"},"1941":{"type":"","answer":"b"},"1942":{"type":"","answer":"e"},"1943":{"type":"","answer":"a"},"1944":{"type":"","answer":"e"},"1945":{"type":"","answer":"d"},"1946":{"type":"","answer":"a"},"1947":{"type":"","answer":"a"},"1948":{"type":"","answer":"c"},"1949":{"type":"","answer":"b"},"1950":{"type":"","answer":"c"},"1951":{"type":"","answer":"a"},"1952":{"type":"","answer":"d"},"1953":{"type":"","answer":"c"},"1954":{"type":"","answer":"a"},"1955":{"type":"","answer":"a"},"1956":{"type":"","answer":"d"},"1957":{"type":"","answer":"b"},"1958":{"type":"","answer":"a"},"1959":{"type":"","answer":"d"},"1960":{"type":"","answer":"c"},"1961":{"type":"","answer":"c"},"1962":{"type":"","answer":"e"},"1963":{"type":"","answer":"c"},"1964":{"type":"","answer":"c"},"1965":{"type":"","answer":"c"},"1966":{"type":"","answer":"c"},"1967":{"type":"","answer":"c"},"1968":{"type":"","answer":"a"},"1969":{"type":"","answer":"c"},"1970":{"type":"","answer":"b"},"1971":{"type":"","answer":"c"},"1972":{"type":"","answer":"a"},"1973":{"type":"","answer":"b"},"1974":{"type":"","answer":"a"},"1975":{"type":"","answer":"a"},"1976":{"type":"","answer":"e"},"1977":{"type":"","answer":"c"},"1978":{"type":"","answer":"a"},"1979":{"type":"","answer":"d"},"1980":{"type":"","answer":"a"},"1981":{"type":"","answer":"c"},"1982":{"type":"","answer":"a"},"1983":{"type":"","answer":"b"},"1984":{"type":"","answer":"a"},"1985":{"type":"","answer":"b"},"1986":{"type":"","answer":"c"},"1987":{"type":"","answer":"a"},"1988":{"type":"","answer":"b"},"1989":{"type":"","answer":"c"},"1990":{"type":"","answer":"d"},"1991":{"type":"","answer":"b"},"1992":{"type":"","answer":"b"},"1993":{"type":"","answer":"c"},"1994":{"type":"","answer":"d"},"1995":{"type":"","answer":"b"},"1996":{"type":"","answer":"b"},"1997":{"type":"","answer":"d"},"1998":{"type":"","answer":"e"},"1999":{"type":"","answer":"d"},"2000":{"type":"","answer":"c"},"2001":{"type":"","answer":"a"},"2002":{"type":"","answer":"b"},"2003":{"type":"","answer":"a"},"2004":{"type":"","answer":"a"},"2005":{"type":"","answer":"c"},"2006":{"type":"","answer":"b"},"2007":{"type":"","answer":"a"},"2008":{"type":"","answer":"c"},"2009":{"type":"","answer":"a"},"2010":{"type":"","answer":"c"},"2011":{"type":"","answer":"a"},"2012":{"type":"","answer":"d"},"2013":{"type":"","answer":"c"},"2014":{"type":"","answer":"c"},"2015":{"type":"","answer":"c"},"2016":{"type":"","answer":"c"},"2017":{"type":"","answer":"e"},"2018":{"type":"","answer":"c"},"2019":{"type":"","answer":"d"},"2020":{"type":"","answer":"b"},"2021":{"type":"","answer":"b"},"2022":{"type":"","answer":"b"},"2023":{"type":"","answer":"b"},"2024":{"type":"","answer":"c"},"2025":{"type":"","answer":"c"},"2026":{"type":"","answer":"a"},"2027":{"type":"","answer":"d"},"2028":{"type":"","answer":"a"},"2029":{"type":"","answer":"b"},"2030":{"type":"","answer":"c"},"2031":{"type":"","answer":"c"},"2032":{"type":"","answer":"b"},"2033":{"type":"","answer":"a"},"2034":{"type":"","answer":"b"},"2035":{"type":"","answer":"d"},"2036":{"type":"","answer":"d"},"2037":{"type":"","answer":"e"},"2038":{"type":"","answer":"b"},"2039":{"type":"","answer":"b"},"2040":{"type":"","answer":"a"},"2041":{"type":"","answer":"d"},"2042":{"type":"","answer":"a"},"2043":{"type":"","answer":"a"},"2044":{"type":"","answer":"d"},"2045":{"type":"","answer":"d"},"2046":{"type":"","answer":"e"},"2047":{"type":"","answer":"c"},"2048":{"type":"","answer":"e"},"2049":{"type":"","answer":"c"},"2050":{"type":"","answer":"c"},"2051":{"type":"","answer":"d"},"2052":{"type":"","answer":"a"},"2053":{"type":"","answer":"b"},"2054":{"type":"","answer":"e"},"2055":{"type":"","answer":"e"},"2056":{"type":"","answer":"e"},"2057":{"type":"","answer":"d"},"2058":{"type":"","answer":"b"},"2059":{"type":"","answer":"c"},"2060":{"type":"","answer":"c"},"2061":{"type":"","answer":"c"},"2062":{"type":"","answer":"d"},"2063":{"type":"","answer":"b"},"2064":{"type":"","answer":"c"},"2065":{"type":"","answer":"a"},"2066":{"type":"","answer":"a"},"2067":{"type":"","answer":"c"},"2068":{"type":"","answer":"a"},"2069":{"type":"","answer":"d"},"2070":{"type":"","answer":"d"},"2071":{"type":"","answer":"c"},"2072":{"type":"","answer":"a"},"2073":{"type":"","answer":"a"},"2074":{"type":"","answer":"c"},"2075":{"type":"","answer":"a"},"2076":{"type":"","answer":"a"},"2077":{"type":"","answer":"e"},"2078":{"type":"","answer":"a"},"2079":{"type":"","answer":"a"},"2080":{"type":"","answer":"d"},"2081":{"type":"","answer":"d"},"2082":{"type":"","answer":"e"},"2083":{"type":"","answer":"a"},"2084":{"type":"","answer":"d"},"2085":{"type":"","answer":"e"},"2086":{"type":"","answer":"c"},"2087":{"type":"","answer":"a"},"2088":{"type":"","answer":"c"},"2089":{"type":"","answer":"c"},"2090":{"type":"","answer":"a"},"2091":{"type":"","answer":"b"},"2092":{"type":"","answer":"d"},"2093":{"type":"","answer":"b"},"2094":{"type":"","answer":"d"},"2095":{"type":"","answer":"a"},"2096":{"type":"","answer":"a"},"2097":{"type":"","answer":"d"},"2098":{"type":"","answer":"c"},"2099":{"type":"","answer":"e"},"2100":{"type":"","answer":"c"}}')}});
//# sourceMappingURL=app.ad1658c2.js.map