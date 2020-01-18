!function(e,t){for(var n in t)e[n]=t[n]}(window,webpackJsonp([31],{"./common/static/xmodule/descriptors/js/001-091f58dd32678373423e4deae364e9dd.js":function(e,t,n){(function(e,t,n){(function(){(function(){"use strict";var r={}.hasOwnProperty,i=function(e,t){function n(){this.constructor=e}var i;for(i in t)r.call(t,i)&&(e[i]=t[i]);return n.prototype=t.prototype,e.prototype=new n,e.__super__=t.prototype,e};this.MarkdownEditingDescriptor=function(r){function o(n){var r=this;this.toggleCheatsheetVisibility=function(){return o.prototype.toggleCheatsheetVisibility.apply(r,arguments)},this.toggleCheatsheet=function(){return o.prototype.toggleCheatsheet.apply(r,arguments)},this.onToolbarButton=function(){return o.prototype.onToolbarButton.apply(r,arguments)},this.onShowXMLButton=function(){return o.prototype.onShowXMLButton.apply(r,arguments)},this.element=n,0!==e(".markdown-box",this.element).length?(this.markdown_editor=t.fromTextArea(e(".markdown-box",n)[0],{lineWrapping:!0,mode:null}),this.setCurrentEditor(this.markdown_editor),this.element.on("click",".xml-tab",this.onShowXMLButton),this.element.on("click",".format-buttons button",this.onToolbarButton),this.element.on("click",".cheatsheet-toggle",this.toggleCheatsheet),e(this.element.find(".xml-box")).hide()):this.createXMLEditor()}return i(o,r),o.multipleChoiceTemplate="( ) "+gettext("incorrect")+"\n( ) "+gettext("incorrect")+"\n(x) "+gettext("correct")+"\n",o.checkboxChoiceTemplate="[x] "+gettext("correct")+"\n[ ] incorrect\n[x] correct\n",o.stringInputTemplate="= "+gettext("answer")+"\n",o.numberInputTemplate="= "+gettext("answer")+" +- 0.001%\n",o.selectTemplate="[["+gettext("incorrect")+", ("+gettext("correct")+"), "+gettext("incorrect")+"]]\n",o.headerTemplate=gettext("Header")+"\n=====\n",o.explanationTemplate="[explanation]\n"+gettext("Short explanation")+"\n[explanation]\n",o.prototype.createXMLEditor=function(n){this.xml_editor=t.fromTextArea(e(".xml-box",this.element)[0],{mode:"xml",lineNumbers:!0,lineWrapping:!0}),n&&this.xml_editor.setValue(n),this.setCurrentEditor(this.xml_editor),e(this.xml_editor.getWrapperElement()).toggleClass("CodeMirror-advanced"),this.xml_editor.refresh()},o.prototype.onShowXMLButton=function(t){t.preventDefault(),this.cheatsheet&&this.cheatsheet.hasClass("shown")&&(this.cheatsheet.toggleClass("shown"),this.toggleCheatsheetVisibility()),this.confirmConversionToXml()&&(this.createXMLEditor(o.markdownToXml(this.markdown_editor.getValue())),this.xml_editor.setCursor(0),e(this.element.find(".editor-bar")).hide())},o.prototype.confirmConversionToXml=function(){return confirm(gettext("If you use the Advanced Editor, this problem will be converted to XML and you will not be able to return to the Simple Editor Interface.\n\nProceed to the Advanced Editor and convert this problem to XML?"))},o.prototype.onToolbarButton=function(t){var n,r;switch(t.preventDefault(),r=this.markdown_editor.getSelection(),n=null,e(t.currentTarget).attr("class")){case"multiple-choice-button":n=o.insertMultipleChoice(r);break;case"string-button":n=o.insertStringInput(r);break;case"number-button":n=o.insertNumberInput(r);break;case"checks-button":n=o.insertCheckboxChoice(r);break;case"dropdown-button":n=o.insertSelect(r);break;case"header-button":n=o.insertHeader(r);break;case"explanation-button":n=o.insertExplanation(r)}null!==n&&(this.markdown_editor.replaceSelection(n),this.markdown_editor.focus())},o.prototype.toggleCheatsheet=function(t){var n=this;return t.preventDefault(),e(this.markdown_editor.getWrapperElement()).find(".simple-editor-cheatsheet")[0]||(this.cheatsheet=e(e("#simple-editor-cheatsheet").html()),e(this.markdown_editor.getWrapperElement()).append(this.cheatsheet)),this.toggleCheatsheetVisibility(),setTimeout(function(){return n.cheatsheet.toggleClass("shown")},10)},o.prototype.toggleCheatsheetVisibility=function(){return e(".modal-content").toggleClass("cheatsheet-is-shown")},o.prototype.setCurrentEditor=function(t){return this.current_editor&&e(this.current_editor.getWrapperElement()).hide(),this.current_editor=t,e(this.current_editor.getWrapperElement()).show(),e(this.current_editor).focus()},o.prototype.save=function(){return this.element.off("click",".xml-tab",this.changeEditor),this.element.off("click",".format-buttons button",this.onToolbarButton),this.element.off("click",".cheatsheet-toggle",this.toggleCheatsheet),this.current_editor===this.markdown_editor?{data:o.markdownToXml(this.markdown_editor.getValue()),metadata:{markdown:this.markdown_editor.getValue()}}:{data:this.xml_editor.getValue(),nullout:["markdown"]}},o.insertMultipleChoice=function(e){return o.insertGenericChoice(e,"(",")",o.multipleChoiceTemplate)},o.insertCheckboxChoice=function(e){return o.insertGenericChoice(e,"[","]",o.checkboxChoiceTemplate)},o.insertGenericChoice=function(e,t,n,r){var i,o,s,c,l,a;if(e.length>0){for(i=e.replace(/\n+/g,"\n").replace(/\n$/,""),s=i.split("\n"),c="",l=0,a=s.length;l<a;l++)o=s[l],c+=t,/^\s*x\s+(\S)/i.test(o)?(o=o.replace(/^\s*x\s+(\S)/i,"$1"),c+="x"):c+=" ",c+=n+" "+o+"\n";return c}return r},o.insertStringInput=function(e){return o.insertGenericInput(e,"= ","",o.stringInputTemplate)},o.insertNumberInput=function(e){return o.insertGenericInput(e,"= ","",o.numberInputTemplate)},o.insertSelect=function(e){return o.insertGenericInput(e,"[[","]]",o.selectTemplate)},o.insertHeader=function(e){return o.insertGenericInput(e,"","\n====\n",o.headerTemplate)},o.insertExplanation=function(e){return o.insertGenericInput(e,"[explanation]\n","\n[explanation]",o.explanationTemplate)},o.insertGenericInput=function(e,t,n,r){return e.length>0?t+e+n:r},o.markdownToXml=function(t){var r,i,o,s,c=[];return s=function(t){var r,i,o,s,l,a,h,p,u,d,m,g=t,f=["optionresponse","multiplechoiceresponse","stringresponse","numericalresponse","choiceresponse"];for(g=g.replace(/\r\n/g,"\n"),g=g.replace(/(^.*?$)(?=\n\=\=+$)/gm,'<h3 class="hd hd-2 problem-header">$1</h3>'),g=g.replace(/\n^\=\=+$/gm,""),g=g.replace(/>>([^]+?)<</gm,function(e,t){var n=t.split("||"),r="<label>"+n[0]+"</label>\n";return 1!==n.length&&n[1]?r+"<description>"+n[1]+"</description>\n":r}),m="",g=g.replace(/(^\s*\|\|.*?\|\|\s*$\n?)+/gm,function(e){var t,n=e.split("\n");for(r=0;r<n.length;r+=1)(t=/\s*\|\|(.*?)\|\|/.exec(n[r]))&&(m+="  <hint>"+t[1].trim()+"</hint>\n");return""}),g=g.replace(/{{(.|\n)*?}}/gm,function(e){return e.replace(/\r?\n( |\t)*/g," ")}),d=function(e,t){var n,r=e,i=/\s*{{(.*?)}}/.exec(r),o="",s="",c=!1,l="";return i&&(r=r.replace(i[0],""),o=i[1].trim(),(n=/^(.*?)::/.exec(o))&&(o=o.replace(n[0],"").trim(),s=n[1].trim(),l=' label="'+s+'"')),t&&r.length>=2&&"("===r[0]&&")"===r[r.length-1]&&(r=r.substring(1,r.length-1),c=!0),{nothint:r,hint:o,label:s,parens:c,labelassign:l}},g=g.replace(/\[\[((.|\n)+?)\]\]/g,function(e,t){var n,i,o,s,c,l,a,h,p,u;if(-1===e.indexOf("\n")){for(i=t.split(/\,\s*/g),o='  <optioninput options="(',r=0;r<i.length;r+=1)o+="'"+i[r].replace(/(?:^|,)\s*\((.*?)\)\s*(?:$|,)/g,"$1")+"'"+(r<i.length-1?",":"");return o+=')" correct="',s=/(?:^|,)\s*\((.*?)\)\s*(?:$|,)/g.exec(t),s&&(o+=s[1]),"\n<optionresponse>\n"+(o+='">')+"</optioninput>\n</optionresponse>\n\n"}for(c=t.split("\n"),l="",r=0;r<c.length;r++)a=c[r].trim(),a.length>0&&(n=d(a,!0),h=' correct="'+(n.parens?"True":"False")+'"',p="",n.hint&&(u=n.label,u&&(u=' label="'+u+'"'),p=" <optionhint"+u+">"+n.hint+"</optionhint>"),l+="    <option"+h+">"+n.nothint+p+"</option>\n");return"\n<optionresponse>\n  <optioninput>\n"+l+"  </optioninput>\n</optionresponse>\n\n"}),g=g.replace(/(^\s*\(.{0,3}\).*?$\n*)+/gm,function(e){var t,n,i,o,s,c,l="",a=!1,h=e.split("\n");for(r=0;r<h.length;r++)h[r]=h[r].trim(),h[r].length>0&&(t=h[r].split(/^\s*\(.{0,3}\)\s*/)[1],n=/^\s*\((.{0,3})\)\s*/.exec(h[r])[1],i=/x/i.test(n),o="",/@/.test(n)&&(o=' fixed="true"'),/!/.test(n)&&(a=!0),s=d(t),s.hint&&(t=s.nothint,t=t+" <choicehint"+s.labelassign+">"+s.hint+"</choicehint>"),l+='    <choice correct="'+i+'"'+o+">"+t+"</choice>\n");return c="<multiplechoiceresponse>\n",c+=a?'  <choicegroup type="MultipleChoice" shuffle="true">\n':'  <choicegroup type="MultipleChoice">\n',c+=l,c+="  </choicegroup>\n",c+="</multiplechoiceresponse>\n\n"}),g=g.replace(/(^\s*((\[.?\])|({{.*?}})).*?$\n*)+/gm,function(e){var t,n,i,o,s,c,l,a,h,p="<choiceresponse>\n",u=e.split("\n");for(p+="  <checkboxgroup>\n",o="",r=0;r<u.length;r+=1)if(u[r].trim().length>0){if(i=/^\s*{{\s*\(\((.*?)\)\)(.*?)}}/.exec(u[r])){s=i[2],s=s.replace("&lf;","\n").trim(),o+='    <compoundhint value="'+i[1].trim()+'">'+s+"</compoundhint>\n";continue}t=u[r].split(/^\s*\[.?\]\s*/)[1],n=/^\s*\[x\]/i.test(u[r]),h="",c=d(t),c.hint&&(l="{"+c.hint+"}",a=/{\s*(s|selected):((.|\n)*?)}/i.exec(l),a&&(h+='\n      <choicehint selected="true">'+a[2].trim()+"</choicehint>"),a=/{\s*(u|unselected):((.|\n)*?)}/i.exec(l),a&&(h+='\n      <choicehint selected="false">'+a[2].trim()+"</choicehint>"),h&&(t=c.nothint)),p+='    <choice correct="'+n+'">'+t+h+"</choice>\n"}return p+=o,p+="  </checkboxgroup>\n",p+="</choiceresponse>\n\n"}),g=g.replace(/(^s?\=\s*(.*?$)(\n*(or|not)\=\s*(.*?$))*)+/gm,function(e,t){var i=t.split("\n"),o=function(e){return n.contains(["[","("],e[0])&&n.contains(["]",")"],e[e.length-1])},s=function(e){var t={},n=/(.*?)\+\-\s*(.*?$)/.exec(e);return n?(t.answer=n[1].replace(/\s+/g,""),t.default=n[2]):t.answer=e.replace(/\s+/g,""),t};return function(e){var t,n,i,c,l,a,h,p,u,m;if(t=e[0].replace(/^\=\s*/,""),isNaN(parseFloat(t))&&!o(t))return!1;for(l=d(t),a="",l.hint&&(t=l.nothint,a="  <correcthint"+l.labelassign+">"+l.hint+"</correcthint>\n"),o(t)?i='<numericalresponse answer="'+t+'">\n':(n=s(t),i='<numericalresponse answer="'+n.answer+'">\n',n.default&&(i+='  <responseparam type="tolerance" default="'+n.default+'" />\n')),c="",r=1;r<e.length;r++)if(p="",h=d(e[r]),u=/^or\=\s*(.*)/.exec(h.nothint)){if(m=/(.*?)\+\-\s*(.*?$)/.exec(u[1]),isNaN(parseFloat(u[1]))||o(u[1])||m)continue;h.hint&&(p="<correcthint"+h.labelassign+">"+h.hint+"</correcthint>"),c+='  <additional_answer answer="'+u[1]+'">',c+=p,c+="</additional_answer>\n"}return c&&(i+=c),i+="  <formulaequationinput />\n",i+=a,i+="</numericalresponse>\n\n"}(i)||function(e){var t,n,i,o,s,c;for(t=e.shift(),t=t.replace(/^s?\=\s*/,""),n=d(t),t=n.nothint,i=' type="ci"',"|"===t[0]&&(i=' type="ci regexp"',t=t.slice(1).trim()),o='<stringresponse answer="'+t+'"'+i+" >\n",n.hint&&(o+="  <correcthint"+n.labelassign+">"+n.hint+"</correcthint>\n"),r=0;r<e.length;r+=1)n=d(e[r]),c=/^not\=\s*(.*)/.exec(n.nothint),c?o+='  <stringequalhint answer="'+c[1]+'"'+n.labelassign+">"+n.hint+"</stringequalhint>\n":(s=/^or\=\s*(.*)/.exec(n.nothint))&&(o+='  <additional_answer answer="'+s[1]+'">',n.hint&&(o+="<correcthint"+n.labelassign+">"+n.hint+"</correcthint>"),o+="</additional_answer>\n");return o+='  <textline size="20"/>\n</stringresponse>\n\n'}(i)}),g=g.replace(/\[explanation\]\n?([^\]]*)\[\/?explanation\]/gim,function(e,t){return'<solution>\n<div class="detailed-solution">\n'+gettext("Explanation")+"\n\n"+t+"\n</div>\n</solution>"}),g=g.replace(/\[code\]\n?([^\]]*)\[\/?code\]/gim,function(e,t){return"<pre><code>"+t+"</code></pre>"}),i=g.split(/(\<\/?(?:script|pre|label|description).*?\>)/g),o=!0,r=0;r<i.length;r+=1)/\<(script|pre|label|description)/.test(i[r])&&(o=!1),o&&(i[r]=i[r].replace(/(^(?!\s*\<|$).*$)/gm,"<p>$1</p>")),/\<\/(script|pre|label|description)/.test(i[r])&&(o=!0);return g=i.join(""),g=g.replace(/\n\n\n/g,"\n"),m&&c.push(m),h=f.join(", "),a=e(e.parseXML("<prob>"+g+"</prob>")),l=a.find(h),1===l.length&&(p=l[0].firstElementChild,u=!0,n.each(a.find("prob").children(),function(e){if(l[0].nodeName===e.nodeName)return void(u=!1);u?l[0].insertBefore(e,p):l[0].appendChild(e)}),s=new XMLSerializer,g=s.serializeToString(l[0]),g=g.replace(/\sxmlns=['"].*?['"]/gi,""),g=g.replace(/(\<\/.*?\>)(\<.*?\>)/gi,"$1\n$2")),g=g.replace(/\sclass=\'qtitle\'/gi,"")},o=[],i=t.split(/\n\s*---\s*\n/g),n.each(i,function(e){e.trim().length>0&&o.push(s(e))}),r="",c.length&&(r="\n<demandhint>\n"+c.join("")+"</demandhint>"),"<problem>\n"+o.join("\n\n")+r+"\n</problem>"},o}(XModule.Descriptor)}).call(this)}).call(window)}).call(t,n(0),n("./common/static/js/vendor/codemirror-compressed.js"),n(1))},7:function(e,t,n){n("./common/static/xmodule/descriptors/js/000-58032517f54c5c1a704a908d850cbe64.js"),e.exports=n("./common/static/xmodule/descriptors/js/001-091f58dd32678373423e4deae364e9dd.js")}},[7]));