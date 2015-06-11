/*!CK:2784539962!*//*1428901041,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["MGcvG"]); }

__d("AYMTFlyout",["Event"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h={listen:function(i,j){g.listen(i,'click',j.show.bind(j));}};e.exports=h;},null);
__d("AYMTMultiTipLogger",["Event","AsyncRequest","XAYMTMultiTipAsyncClickController","XUISpinner.react","React","cx","$"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();var n={init:function(o,p,q,r,s){g.listen(o,'click',function(event){if(s!==null)k.render(k.createElement(j,{size:"large",className:"_5kvq"}),m(s));var t=i.getURIBuilder().setString('tip_id',p).setString('channel_id',q).setString('target',r).getURI();new h(t).send();});}};e.exports=n;},null);