/*! $AC$ PennController.newDropDown(name,text) Creates a new DropDown element $AC$$AC$ PennController.getDropDown(name) Retrieves an existing DropDown element $AC$$AC$ DropDown PElement.shuffle() Shuffles the options currently in the drop-down $AC$$AC$ DropDown PElement.select(option) Selects the specified option $AC$$AC$ DropDown PElement.wait() Wait until an option is selectd before proceeding $AC$$AC$ DropDown PElement.settings.add(options) Adds one or more options to the drop-down $AC$$AC$ DropDown PElement.settings.remove(option) Removes the specified option from the drop-down $AC$$AC$ DropDown PElement.test.selected(option) Checks that the specified option, or any if none specified, is selected $AC$ */!function(t){var e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=119)}({119:function(t,e){window.PennController._AddElementType("DropDown",function(t){this.immediate=function(e,i){void 0===i&&(i=e,this.id=t.utils.guidGenerator()),this.initialText=i,this.text=i},this.uponCreation=function(t){this.options=[],this.selections=[],this.change=(()=>{if(this.jQueryElement.attr("disabled"))return;let t=this.jQueryElement.find("option:selected").val(),e=0;for(let i=0;i<this.options.length;i++)this.options[i]==t&&(e=i);this.selections.push(["Selected",t,Date.now(),e])}),this.jQueryElement=$("<select>").append($("<option>").html(this.initialText).attr({value:this.initialText,selected:!0,disabled:!0,hidden:!0})).change(()=>this.change()),t()},this.value=function(){return this.text},this.end=function(){if(this.log)if(this.selections.length)if("string"==typeof this.log&&this.log.match(/^\W*first\W*$/i))t.controllers.running.save(this.type,this.id,...this.selections[0]);else if("string"==typeof this.log&&this.log.match(/^\W*all\W*$/i))for(let e=0;e<this.selections.length;e++)t.controllers.running.save(this.type,this.id,...this.selections[e]);else t.controllers.running.save(this.type,this.id,...this.selections[this.selections.length-1]);else t.controllers.running.save(this.type,this.id,"Selected",this.jQueryElement.find("option:selected").val(),"Never","Default")},this.actions={shuffle:function(t,e){if(e){let t=this.jQueryElement.find("option:selected");e=!!t.length&&t.val()}fisherYates(this.options),this.jQueryElement.empty(),this.jQueryElement.append($("<option>").html(this.initialText).attr({value:this.initialText,selected:!0,disabled:!0,hidden:!0}));for(let t=0;t<this.options.length;t++)this.jQueryElement.append($("<option>").html(this.options[t]).attr("value",this.options[t]));e&&this.jQueryElement.find("option[value='"+e+"']").attr("selected",!0),t()},select:function(t,e){this.options.indexOf(e)>-1?(this.jQueryElement.find("option").removeAttr("selected"),this.jQueryElement.find("option[value='"+e+"']").attr("selected",!0)):Number(e)>-1&&Number(e)<this.options.length&&(this.jQueryElement.find("option").removeAttr("selected"),this.jQueryElement.find("option[value='"+this.options[Number(e)]+"']").attr("selected",!0)),t()},wait:function(t,e){if("first"==e&&this.selections.length)t();else{let i=!1,n=this.change;this.change=(()=>{if(n.call(this),!i)if(e instanceof Object&&e._runPromises&&e.success){let n=this.disabled;this.jQueryElement.attr("disabled",!0),this.disabled="tmp",e._runPromises().then(e=>{"success"==e&&(i=!0,t()),"tmp"==this.disabled&&(this.disabled=n,this.jQueryElement.attr("disabled",n))})}else i=!0,t()})}}},this.settings={add:function(t,...e){for(let t=0;t<e.length;t++)e[t]=String(e[t]),this.options.indexOf(e[t])<0&&(this.options.push(e[t]),this.jQueryElement.append($("<option>").html(e[t]).attr("value",e[t])));t()},callback:function(t,...e){let i=this.change;this.change=async function(){let t=this.jQueryElement.attr("disabled");if(await i.apply(this),!t)for(let t=0;t<e.length;t++)e[t]._runPromises?await e[t]._runPromises():e[t]instanceof Function&&await e[t]()},t()},once:function(t){let e=this.change;this.change=(()=>{e.apply(this),this.jQueryElement.attr("disabled",!0),t()})},remove:function(t,e){let i=this.options.indexOf(e);i>-1&&(this.jQueryElement.find("option[value='"+e+"']").remove(),this.options.splice(i,1)),t()}},this.test={selected:function(t){let e=this.jQueryElement.find("option:selected");return!!this.selections.length&&(void 0===t||(t==e.val()||(Number(t)>-1&&Number(t)<this.options.length?e.val()==this.options[Number(t)]:void 0)))}}})}});