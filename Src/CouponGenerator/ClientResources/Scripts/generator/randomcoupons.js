define([

// Dojo
    "dojo/dom-construct",
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/html",
    "dojo/on",

// Dijit
    "dijit/_TemplatedMixin",
    "dijit/_WidgetBase",

//CMS 
    "epi-cms/_ContentContextMixin",

//Resources
    "dojo/text!coupon/generator/templates/randominputs.html"
], function (

// Doj
    domConstruct,
    declare,
    lang,
    html,
    on,

// Dijit
    _TemplatedMixin,
    _WidgetBase,

//CMS
    _ContentContextMixin,

//Resources
    template
) {
    return declare([_WidgetBase, _TemplatedMixin, _ContentContextMixin], {
        templateString: template,
        //filter: null,
        //dijitForms: null,
        //checkedItems: null,

        constructor: function () {
            //this.dijitForms = [];
            //this.checkedItems = [];
        },
        _onButtonClick: function () {
            var chars = this.anChars.value;
            var tokenLength = this.anLength.value;
            var totalToken = this.anNoOfCoupons.value;           
            var randomstring = '';
            for (var j = 0; j < totalToken; j++) {
                randomstring += "<div  style='padding: 5px;'>" + this.anPrefix.value;
                for (var i = 0; i < tokenLength; i++) {
                    var rnum = Math.floor(Math.random() * chars.length);
                    randomstring += chars.substring(rnum, rnum + 1);
                }
                randomstring += this.anPostfix.value;
                randomstring += "</div>";
            }
            html.set(this.coupon_random_results, randomstring);
            //this.coupon_random_results.text(chars);
        }

    });
});
