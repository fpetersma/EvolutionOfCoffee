/*!CK:2701312683!*//*1433822577,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["0647u"]); }

__d("XAYMTPanelSaveSettingsController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/ads\/growth\/aymt\/homepage_panel\/save_settings\/",{time_range:{type:"Enum",enumType:1},ad_account_id:{type:"Int"},promoted_object:{type:"Int"},collapsed:{type:"Int"},dismiss_nux:{type:"Bool",defaultValue:false},flash_insights_dismiss_nux:{type:"Bool",defaultValue:false},refresh_panel:{type:"Bool",defaultValue:false}});},null);
__d("AdvertiserHomePagelet",["AsyncRequest","DOM","URI","XAYMTPanelSaveSettingsController","$"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();var l={init:function(m,n){var o=j.getURIBuilder().setBool('refresh_panel',true).getURI();o.addQueryData(i.getRequestURI().getQueryData());new g().setURI(o).setStatusElement(n).setErrorHandler(function(p){h.setContent(k('pagelet_advertiser_panel'),'');}).send();}};e.exports=l;},null);
__d("BookmarkPopoverMenu.react",["Arbiter","Link.react","MenuSeparator.react","PopoverMenu.react","React","ReactXUIMenu","cx","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){b.__markCompiled&&b.__markCompiled();'use strict';var o=l.Item,p=k.createClass({displayName:"BookmarkPopoverMenu",render:function(){var q=this._renderMenuContent();if(q.length===0)return null;var r=k.createElement(l,null,q),s=n._("Edit"),t=(k.createElement(h,{href:"#",title:s,"aria-label":s,onClick:this.props.loadPopupModules,className:"_1wc5 _26tg accessible_elem"}));return (k.createElement("div",{className:"buttonWrap"},k.createElement(j,{ref:"popovermenu",className:"uiSideNavEditButton",menu:r},t)));},_renderMenuContent:function(){var q=this.props,r=q.model.editmenu,s=q.model.pinned,t=q.navSection,u=t.props.id==='pinnedNav',v=[];if(r.favoriteOption){var w=s?r.favoriteOption.title.unfavorite:r.favoriteOption.title.favorite;v.push(k.createElement(o,{onclick:this._toggleFavorite,key:"menu_favorite"},w));}if(u&&r.rearrangeOption)v.push(k.createElement(o,{onclick:this._toggleEditMode,key:"menu_edit"},r.rearrangeOption.title));if(r.hideOption)v.push(this._renderAjaxMenuItem(r.hideOption,'menu_hide_option'));if(r.editOption)v.push(this._renderAjaxMenuItem(r.editOption,'menu_edit_option'));if(r.deleteOption){if(v.length!==0)v.push(k.createElement(i,{key:"menu_sep"}));v.push(this._renderAjaxMenuItem(r.deleteOption,'menu_delete_option'));}return v;},_renderAjaxMenuItem:function(q,r){return (k.createElement(o,{href:q.href,ajaxify:q.ajaxify,rel:q.rel,key:r},q.title));},_toggleFavorite:function(){g.inform('LeftNavController/toggleFavorite',this.props.model.id);},_toggleEditMode:function(){g.inform('LeftNavDragController/toggleEditMode',{section:this.props.navSection});}});e.exports=p;},null);
__d("LeftNavItemClassicDraggableContainer.react",["React"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();'use strict';var h=g,i=h.PropTypes,j=g.createClass({displayName:"LeftNavItemClassicDraggableContainer",propTypes:{itemID:i.oneOfType([i.string,i.number]).isRequired,section:i.object.isRequired,draggableBound:i.object,ItemDraggableBehavior:i.func},render:function(){return (g.createElement("div",{"data-itemid":this.props.itemID},this.props.children));},componentDidMount:function(){var k=this.props,l=k.section,m=k.itemID,n=k.draggableBound,o=k.ItemDraggableBehavior;if(o&&!this.draggable)this.draggable=new o(g.findDOMNode(this),l,m,n);},componentWillUnmount:function(){this.draggable.destroy();this.draggable=null;}});e.exports=j;},null);
__d("LeftNavItem.react",["Arbiter","DOMContainer.react","Image.react","LeftNavItemClassicDraggableContainer.react","PagesHighlanderGating","React","URI","XUIButton.react","XUISpinner.react","cx","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){b.__markCompiled&&b.__markCompiled();'use strict';var r='\u00A0',s='\u00B7',t=l.createElement("span",{className:"_upa"}),u=l.createElement(o,{className:"uiSideNavSpinner"}),v=l.createClass({displayName:"LeftNavItem",getInitialState:function(){return this._getStateFromProps(this.props);},componentWillReceiveProps:function(w){this.setState(this._getStateFromProps(w));},_getStateFromProps:function(w){var x=w.model,y=w.section.props.id,z=x.count>0,aa=y==='pinnedNav'&&x.sortable,ba=y==='bookmarksSeeAllEntSection',ca=x.keys.some(function(ga){return ga===w.selectedKey;}),da=x.keys.some(function(ga){return ga===w.loadingKey;}),ea=aa&&w.inEditMode,fa=y==='foldNav'||y==='aboveFoldNav';return {hasCount:z,hasSortableItems:aa,inSeeAllSection:ba,isSelected:ca,isLoading:da,isSorting:ea,useShortList:fa};},render:function(){var w=this.props.model,x=this.state;return (l.createElement("li",{key:w.id,className:(("clearfix")+(' '+"sideNavItem")+(' '+"stat_elem")+(x.isSelected?' '+"selectedItem":'')+(x.isLoading?' '+"_5afd":'')),"data-sortable":x.isSorting?w.sortable:null,id:"navItem_"+w.id},this._renderSortableWrapper(this._renderBookmarkContent())));},_renderBookmarkContent:function(){var w=this.props.model,x=this.props.section,y=this.state,z=(l.createElement("a",{key:"link","data-testid":'left_nav_item_'+w.link.title,className:(("_5afe")+(y.hasSortableItems?' '+"sortableItem":'')),"data-gt":w.datagt,title:w.link.title,rel:w.link.rel,href:w.link.href,ajaxify:w.link.ajaxify,draggable:"false",onClick:function(){return g.inform('LeftNavController/setItemCount',{item:w,count:0});}},this._renderRightFloat(w),this._renderIcon(w.image),l.createElement("div",{className:(("linkWrap")+(y.hasCount?' '+"hasCount":'')+(!y.hasCount?' '+"noCount":''))},w.name,y.inSeeAllSection?this._renderCounter(w.count):null)));return [w.auxcontent?l.createElement(h,{key:"auxpopover"},w.auxcontent):null,this._renderMenuHolder(w,x,this.props.loadPopupModules),this._renderLinkWrapper(z,w)];},_renderMenuHolder:function(w,x,y){var z=this.props.PopupMenu;if(this.state.useShortList||!z)return null;return (l.createElement(z,{key:"popover",navSection:x,model:w,loadPopupModules:y}));},_renderIcon:function(w){return (l.createElement("span",{className:"imgWrap"},l.createElement(i,{src:w,height:"16",width:"16",draggable:"false",alt:""})));},_renderCounter:function(w){if(!this.state.hasCount)return null;return (l.createElement("span",{className:(("countValue")+(' '+"_5aff"))},w<=20?w:'20+'));},_renderRightFloat:function(w){var x=this.state;if(x.inSeeAllSection)return null;var y=x.hasCount&&!x.isSorting;if(x.isLoading||y||x.isSorting)return (l.createElement("div",{className:"rfloat"},x.isLoading?u:null,y?this._renderCounter(w.count):null,x.isSorting?t:null));return null;},_renderSubtitle:function(w){if(!w)return null;return (l.createElement("div",{className:"_1xmt"},r+r+s+r+r,l.createElement(h,null,w)));},_renderLoginButton:function(w){if(w.type!=='type_page'||k.isHighlanderDeprecated)return null;var x=new m(w.link.href),y=new m("?ref=hl");y.setDomain(x.getDomain());y.setProtocol(x.getProtocol());y.setPath(x.getPath());return (l.createElement("form",{action:"/menu/identity_switch",method:"post",rel:"async"},l.createElement("input",{type:"hidden",name:"user_id",value:w.id}),l.createElement("input",{type:"hidden",name:"url",value:y.toString()}),l.createElement(n,{className:"_85u",use:"confirm",label:q._("Log in")})));},_renderSortableWrapper:function(w){if(!this.state.isSorting)return w;return (l.createElement(j,{itemID:this.props.model.id,section:this.props.section,draggableBound:this.props.draggableBound,ItemDraggableBehavior:this.props.ItemDraggableBehavior},w));},_renderLinkWrapper:function(w,x){var y=null,z=null;if(this.state.inSeeAllSection){y=this._renderSubtitle(x.subtitle);z=this._renderLoginButton(x);}if(!y&&!z)return w;return (l.createElement("div",{key:"link",className:"clearfix"},w,y,z));}});e.exports=v;},null);
__d("LeftNavItemPlaceholder.react",["React","cx"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();'use strict';var i=g.createClass({displayName:"LeftNavItemPlaceholder",render:function(){return (g.createElement("li",{className:"sideNavItem stat_elem"},g.createElement("a",{className:"_5afe clearfix sortableItem"})));}});e.exports=i;},null);
__d("LeftNavSection.react",["Arbiter","Bootloader","InlineBlock.react","LeftNavItem.react","LeftNavItemPlaceholder.react","LeftRight.react","Link.react","React","cx","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){b.__markCompiled&&b.__markCompiled();'use strict';var q=n.createClass({displayName:"LeftNavSection",getInitialState:function(){return {inEditMode:false,draggableBound:null,placeholderIdx:-1};},render:function(){var r=this,s=this.props,t=s.selectedKey,u=s.loadingKey,v=s.loadPopupModules,w=s.model,x=s.ItemDraggableBehavior,y=s.PopupMenu,z=w.items,aa=this.state,ba=aa.inEditMode,ca=aa.draggableBound;if(z.length===0)return null;var da=z.map(function(ha){return (n.createElement(j,{key:ha.id,model:ha,section:r,selectedKey:t,loadingKey:u,inEditMode:ba,draggableBound:ca,loadPopupModules:v,ItemDraggableBehavior:x,PopupMenu:y}));});if(this.state.placeholderIdx>=0)da.splice(this.state.placeholderIdx,0,n.createElement(k,{key:"itemplaceholder",ref:"placeholder"}));var ea=(("_bui")+(this._isPinnedSection()?' '+"droppableNav":'')+(!this._isPinnedSection()?' '+"nonDroppableNav":'')+(' '+"_3-8w")+(!ba?' '+"_3-96":'')),fa=this._isPinnedSection()?n.createElement("div",{className:"_3hge stat_elem"},n.createElement(m,{className:"navEditDone",ref:"Donelink",onClick:function(){h.loadModules(["LeftNavDragController"],function(){g.inform('LeftNavDragController/toggleEditMode',{section:r});});}},n.createElement("span",{className:"_3hgf"},p._("Done")))):null,ga={nav_items_count:z.length.toString(),nav_section:this.props.id.toString(),bm_sec:this.props.id.toString()};return (n.createElement("div",{id:this.props.id,className:"homeSideNav","data-ft":w.dataft,ref:"sectionBody"},this._renderHeader(),n.createElement("ul",{className:ea,"data-gt":JSON.stringify(ga),"data-ft":w.dataft},da),fa));},componentDidUpdate:function(r,s){if(this.state.inEditMode)n.findDOMNode(this.refs.Donelink).focus();},_renderHeader:function(){var r=this.props.model,s;if(r.title){var t=r.seeallhref?n.createElement(m,{href:r.seeallhref},n.createElement(l,null,n.createElement("span",{className:"sectionDragHandle"},r.title),r.remainingcount?n.createElement(i,{className:"_3-91"},n.createElement("div",{className:"_1cwg _5ol3"},r.seealltext)):null)):n.createElement("span",{className:"sectionDragHandle"},r.title);s=n.createElement("h4",{className:"navHeader"},t);}else s=null;return s;},_isPinnedSection:function(){return this.props.id==='pinnedNav';}});e.exports=q;},null);
__d("LeftNavSectionPlaceholder.react",["React","cx"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();'use strict';var i=g.createClass({displayName:"LeftNavSectionPlaceholder",render:function(){var j={height:this.props.height+'px',width:this.props.width+'px'};return (g.createElement("div",{className:"homeSideNav",style:j},g.createElement("ul",{className:"_bui"})));}});e.exports=i;},null);
__d("LeftNavContainer.react",["BookmarkPopoverMenu.react","Bootloader","LeftNavSection.react","LeftNavSectionPlaceholder.react","React","emptyFunction","invariant"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();'use strict';function n(p){p.setState({loadPopupModules:l});h.loadModules(["LeftNavDragController","LeftNavItemDraggableBehavior"],function(q,r){q.subscribe();p.setState({DragController:q,ItemDraggableBehavior:r});});}var o=k.createClass({displayName:"LeftNavContainer",getDefaultProps:function(){return {showSections:true};},getInitialState:function(){return {placeholderIdx:-1,placeholderWidth:0,placeholderHeight:0,loadPopupModules:function(){return n(this);}.bind(this),DragController:null,ItemDraggableBehavior:null};},componentDidMount:function(){var p=this.state.DragController;if(p)p.subscribe();},componentWillUnmount:function(){var p=this.state.DragController;if(p)p.unsubscribe();},render:function(){var p=this.props.model,q=k.createElement(i,{selectedKey:p.selectedKey,loadingKey:p.loadingKey,model:p.pinnedSection,key:"pinnedNav",id:"pinnedNav",ref:"pinnedNav",loadPopupModules:this.state.loadPopupModules,ItemDraggableBehavior:this.state.ItemDraggableBehavior,PopupMenu:g}),r=p.sections,s;if(this.props.showSections)s=r.map(function(t){return k.createElement(i,{selectedKey:p.selectedKey,loadingKey:p.loadingKey,model:t,key:t.id,id:t.id,loadPopupModules:this.state.loadPopupModules,ItemDraggableBehavior:this.state.ItemDraggableBehavior,PopupMenu:g});}.bind(this));if(this.state.placeholderIdx>-1)s.splice(this.state.placeholderIdx,0,k.createElement(j,{key:"placeholder",width:this.state.placeholderWidth,height:this.state.placeholderHeight}));return (k.createElement("div",null,q,s));},getPinnedSection:function(){var p=this.refs.pinnedNav;m(p);return p;}});e.exports=o;},null);
__d("LeftNavController",["Arbiter","AsyncRequest","ChannelConstants","LeftNavConfig","ModulePerformanceGating","NavigationMessage","React","Run","SubscriptionsHandler","URI","copyProperties","CSS","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){b.__markCompiled&&b.__markCompiled();'use strict';var t,u,v=null,w,x=null,y,z,aa={init:function(db,eb){w=db;u=eb;var fb=j,gb=fb.Container;y=new o();y.addSubscriptions(g.subscribe('LeftNavController/toggleFavorite',pa),g.subscribe('LeftNavController/updatePinnedSection',qa),g.subscribe('LeftNavController/setItemCount',function(jb,kb){var lb=kb.item,mb=kb.count;return ea(lb,mb);}),g.subscribe(i.getArbiterType('nav_update_counts'),fa),g.subscribeOnce('AsyncLayout/initialized',function(){return z=true;}),g.subscribe(l.NAVIGATION_ITEM_REMOVED,ga),g.subscribe(l.NAVIGATION_COMPLETED,ma),g.subscribe(l.NAVIGATION_FAILED,na),g.subscribe(l.NAVIGATION_COUNT_UPDATE,oa),g.subscribe(l.NAVIGATION_SELECT,la),g.subscribe('LeftNavController/updateSectionOrder',ra),g.subscribe('LeftNavDragController/toggleEditMode',function(){return r.toggleClass(w,"_2ryg");}));var hb=ya(u.selectedKey);if(hb)hb.count=0;var ib=function(jb){t=m.render(m.createElement(gb,{model:u,showSections:jb}),w);};if(k.js_module_defer_left_nav_section_bookmarks){ib(false);n.onAfterLoad(function(){ib(true);});}else ib(true);n.onLeave(this.uninstall.bind(this));},uninstall:function(){z=false;y.release();if(t.componentWillUnmount)t.componentWillUnmount();},initAdditionalItems:function(db){v=db.items;},initPageTransitions:function(db){db.registerHandler(function(eb){return z&&ha(eb);},6);},mountSeeAllPayload:function(db){x=db;}};function ba(){t.forceUpdate();}function ca(db){u.loadingKey=null;u.selectedKey=db||u.defaultKey;ba();}function da(db){u.loadingKey=db;ba();}function ea(db,eb){db.count=eb;ba();}function fa(db,eb){var fb=eb.obj,gb=fb.items;gb.forEach(function(hb){var ib=ya(hb.key);if(ib)ib.count=ib.count+hb.count;});ba();}function ga(db,eb){var fb;function gb(ib,jb){return ib.keys.some(function(kb){return kb===jb;});}for(var hb=0;hb<u.sections.length;hb++){fb=bb(u.sections[hb].items,function(ib){return gb(ib,eb);});if(fb)break;}bb(u.pinnedSection.items,function(ib){return gb(ib,eb);});ba();}function ha(db){var eb=za(db);return eb&&eb.endpoint&&ia(eb,db);}function ia(db,eb){da(db.keys[0]);ea(db,0);ka(db.endpoint,q(ja(db,eb),eb.getQueryData()));return true;}function ja(db,eb){var fb={};fb.sidecol=true;fb.path=eb.getPath();var gb=ab(db.keys);gb=gb.text?gb.text:gb.numeric;fb.sk=gb;fb.key=gb;return fb;}function ka(db,eb){eb.endpoint=db;g.inform(l.NAVIGATION_BEGIN,{useAjaxPipe:true,params:eb});}function la(db,eb){var fb=eb.sk;if(eb.asLoading){da(fb);}else ca(fb);}function ma(db,eb){var fb=u.loadingKey;ca(fb);}function na(db,eb){da(null);}function oa(db,eb){var fb=ya(eb&&eb.key);if(fb)ea(fb,eb.hide?0:fb.count+eb.count);}function pa(db,eb){var fb=va(eb),gb=u.pinnedSection;if(!fb){if(!x)return;fb=x.find(function(kb){return kb.id===eb;});if(!fb)return;fb=q({},fb);fb.pinned=true;gb.items.push(fb);new h().setURI('/ajax/bookmark/add/').setData({id:fb.keys[0]}).send();}else{var hb=ua(fb);if(wa(eb)){fb.pinned=false;var ib=gb.items.findIndex(function(kb){return kb.id===fb.id;});if(ib>=0){gb.items.splice(ib,1);if(hb)hb.items.unshift(fb);new h().setURI('/ajax/bookmark/delete/').setData({id:fb.keys[0]}).send();}}else{fb.pinned=true;if(hb){var jb=hb.items.findIndex(function(kb){return kb.id===fb.id;});if(jb>=0){hb.items.splice(jb,1);gb.items.push(fb);new h().setURI('/ajax/bookmark/add/').setData({id:fb.keys[0]}).send();}}}}ba();}function qa(db,eb){var fb=eb.idOrder,gb=u.pinnedSection,hb=gb.items.filter(function(jb){return !jb.sortable;});fb.forEach(function(jb){var kb=gb.items.find(function(mb){return mb.id===jb;});if(kb){hb.push(kb);}else if(kb=va(jb)){var lb=ua(kb);bb(lb.items,function(mb){return mb.id===kb.id;});hb.push(kb);kb.pinned=true;}});gb.items=hb;var ib=hb.map(function(jb){return jb.keys[0];});new h().setURI('/ajax/bookmark/edit/').setData({ids:ib}).send();ba();}function ra(db,eb){var fb=eb.idOrder,gb=u.sections;u.sections=fb.reduce(function(hb,ib){var jb=gb.find(function(kb){return kb.id===ib;});if(jb)hb.push(jb);return hb;},[]);new h().setURI('/bookmark/section/edit/').setData({nav_section_names:fb}).send();ba();}function sa(db){var eb=p.getRequestURI();return ((db.getDomain()===eb.getDomain())&&(db.getPath()==='/'||db.getPath()==='/home.php'));}function ta(db){if(db==='pinnedNav'){return u.pinnedSection;}else return (u.sections.filter(function(eb){return eb.id===db;})[0]);}function ua(db){return ta(cb[db.type]);}function va(db){db=db.toString();return xa(function(eb){return eb.id?eb.id.toString()===db:null;});}function wa(db){db=db.toString();var eb=ta('pinnedNav');return eb.items.some(function(fb){return fb.id.toString()===db;});}function xa(db){var eb;for(var fb=0;fb<u.sections.length;fb++){eb=u.sections[fb].items.find(db);if(eb)return eb;}if(v){eb=v.find(db);if(eb)return eb;}return u.pinnedSection.items.find(db)||(u.foldSection&&u.foldSection.items.find(db));}function ya(db){return xa(function(eb){return eb.keys.some(function(fb){return fb===db;});});}function za(db){var eb=db.getQueryData().sk;if(eb){return ya(eb);}else if(sa(db)){return ya(u.defaultKey);}else return xa(function(fb){return fb.path&&fb.path.some(function(gb){if(typeof gb==='object'&&gb.regex)return db.getPath().match(gb.regex);return gb===db.getPath();});});}function ab(db){var eb=/^(app|group|fl)_/,fb={};for(var gb=0;gb<db.length;gb++){var hb=eb.test(db[gb]);if(hb&&!fb.numeric){fb.numeric=db[gb];}else if(!hb&&!fb.text)fb.text=db[gb];if(fb.numeric&&fb.text)break;}return fb;}function bb(db,eb){for(var fb=0;fb<db.length;fb++)if(eb(db[fb])){var gb=db[fb];db.splice(fb,1);return gb;}return (void 0);}var cb={favorites:'pinnedNav',profiles:'pinnedNav',company:'companyNav',apps:'appsNav',groups:'groupsNav',pages:'pagesNav',lists:'listsNav',interests:'interestsNav',connect_apps:'connectNav',type_user:'pinnedNav',type_group:'groupsNav',type_group_tool:'groupsNav',type_company:'companyNav',type_page:'pagesNav',type_friend_list:'listsNav',type_interest_list:'interestsNav',type_non_canvas_app:'appsNav',type_facebook_app:'appsNav',type_canvas_app_game:'appsNav',type_canvas_app_non_game:'appsNav',type_curated_feed:'interestsNav',type_game_tool:'appsNav',type_page_tool:'pagesNav',type_pinnable_page_tool:'pagesNav',type_developer:'developerNav',type_developer_tool:'developerNav'};e.exports=aa;},null);
__d("XEventImpressionLoggerAsyncController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/events\/{eventid}\/ajax\/impression\/",{eventid:{type:"Int",required:true},acontext:{type:"StringToStringMap",required:true}});},null);
__d("EventImpressionLogger",["Arbiter","AsyncRequest","OnVisible","Scroll","XEventImpressionLoggerAsyncController","copyProperties"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();function m(n,o){"use strict";this.elem=n;this.options=o;this.initListeners();this.listener=new i(this.elem,this.$EventImpressionLogger0.bind(this),true,0);}m.prototype.initListeners=function(){"use strict";var n=this.options;this.$EventImpressionLogger1=!n.start_signal;if(n.start_signal)g.subscribe(n.start_signal,function(o,p){this.$EventImpressionLogger2=p;this.$EventImpressionLogger1=true;if(this.$EventImpressionLogger2){this.$EventImpressionLogger0();}else if(!this.logged){this.listener.reset();this.listener.checkBuffer();}}.bind(this));if(n.stop_signal)g.subscribe(n.stop_signal,function(){this.$EventImpressionLogger2=null;this.$EventImpressionLogger1=false;}.bind(this));if(n.check_signal)g.subscribe(n.check_signal,function(o,p){this.$EventImpressionLogger2=p;if(this.$EventImpressionLogger2){this.$EventImpressionLogger0();}else if(!this.logged){this.listener.reset();this.listener.checkBuffer();}}.bind(this));};m.prototype.$EventImpressionLogger0=function(){"use strict";var n=this.options;if(!this.$EventImpressionLogger1)return;if(this.logged)return;if(!document.documentElement.contains(this.elem))return;if(this.$EventImpressionLogger2&&this.$EventImpressionLogger2.rect){var o=this.elem.getBoundingClientRect(),p=this.$EventImpressionLogger2.rect,q=0;if(j.getTop(this.$EventImpressionLogger2))q=j.getTop(this.$EventImpressionLogger2);if(p.left&&p.left>o.left)return;if(p.right&&p.right<o.right)return;if(p.top&&p.top>o.top-q)return;if(p.bottom&&p.bottom<o.bottom-q)return;}this.logged=true;var r=k.getURIBuilder().setInt('eventid',n.event_id).setStringToStringMap('acontext',n.action_context).getURI();new h(r).send();};l(m,{init:function(n,o){return new m(n,o);}});e.exports=m;},null);