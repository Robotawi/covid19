(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{380:function(t){t.exports=JSON.parse('{"data":{"認定こども園":8,"北播磨総合医療センター":5,"宝塚第一病院":8,"仁恵病院":14,"グリーンアルス関係":53,"介護保険通所事業所":7,"ライブ関係":13,"海外渡航関係":24,"その他":33,"行動歴調査中":36,"特定できず":6},"last_update":"2020-04-06T00:00:00+09:00"}')},471:function(t,e,r){"use strict";r.r(e);var c=r(340),n=r(341),o=r(342),d=r(380),h=r(343),m=r(347),l=r(355),f=r(349),$=r(350),y=r(352),k=r(348),C=r(351),_=r(320),w={components:{ConfirmedCasesDetailsCard:m.a,ConfirmedCasesNumberCard:l.a,ConfirmedCasesAttributesCard:f.a,TestedNumberCard:$.a,PatientsByAge:y.a,PatientsByClusters:k.a,PatientsAndSickbeds:C.a},data:function(){var title,t;switch(this.$route.params.card){case"details-of-confirmed-cases":title=this.$t("検査陽性者の状況"),t=n.last_update;break;case"number-of-confirmed-cases":title=this.$t("陽性患者数"),t=c.last_update;break;case"attributes-of-confirmed-cases":title=this.$t("陽性患者の属性"),t=c.last_update;break;case"number-of-tested":title=this.$t("検査実施件数"),t=n.last_update;break;case"patients-by-age":title=this.$t("年代別陽性患者数"),t=o.last_update;break;case"patients-by-clusters":title=this.$t("クラスター別陽性患者数"),t=d.last_update;break;case"patients-and-sickbeds":title=this.$t("入院患者数と残り病床数"),t=h.last_update}var data={title:title,updatedTimeStr:Object(_.a)(t)};return data},head:function(){var t="https://stop-covid19-hyogo.org",e=(new Date).getTime(),r="ja"===this.$i18n.locale?"".concat(t,"/ogp/").concat(this.$route.params.card,".png?t=").concat(e):"".concat(t,"/ogp/").concat(this.$i18n.locale,"/").concat(this.$route.params.card,".png?t=").concat(e),c="".concat(this.$t("当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、有志のクリエイターが開設したものです。公式情報ではないことをご了承ください。"));return{title:this.title,meta:[{hid:"og:url",property:"og:url",content:t+this.$route.path+"/"},{hid:"og:title",property:"og:title",content:this.title+" | "+this.$t("兵庫県非公式")+" "+this.$t("新型コロナウイルス")+this.$t("まとめサイト")},{hid:"description",name:"description",content:c},{hid:"og:description",property:"og:description",content:c},{hid:"og:image",property:"og:image",content:r},{hid:"twitter:image",name:"twitter:image",content:r}]}}},v=r(8),component=Object(v.a)(w,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",["details-of-confirmed-cases"==this.$route.params.card?e("confirmed-cases-details-card"):"number-of-confirmed-cases"==this.$route.params.card?e("confirmed-cases-number-card"):"attributes-of-confirmed-cases"==this.$route.params.card?e("confirmed-cases-attributes-card"):"number-of-tested"==this.$route.params.card?e("tested-number-card"):"patients-by-age"==this.$route.params.card?e("patients-by-age"):"patients-by-clusters"==this.$route.params.card?e("patients-by-clusters"):"patients-and-sickbeds"==this.$route.params.card?e("patients-and-sickbeds"):this._e()],1)}),[],!1,null,null,null);e.default=component.exports}}]);