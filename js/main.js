var App = angular.module('app',["ngRoute"]);



App.run(["$rootScope", "$location", "$anchorScroll", "$window", "$interval", "$log", function($rootScope, $location, $anchorScroll, $window, $interval, $log){

	var share = function(a, s, i, e, t, n) {

	    function l() {
	        window.share = window.share || {};
	        var a = angular.element('[data-toggle="only.share"]');
	        angular.forEach(a, function(a, s) {
	            var i = angular.element(a);
	            if (!i.data("inited")) {
	                var e = i.attr("id") && !window.share[e] ? i.attr("id") : i.attr("id", "share" + s).attr("id"),
	                    t = i.data("yasharelink") ? i.data("yasharelink") : window.location.href;
	                /^(http|\/\/)/.test(t) || (t = window.location.protocol.concat("//", window.location.hostname, t)), n.log(t);
	                var l = i.data("yasharetitle") ? i.data("yasharetitle") : null,
	                    c = i.data("yasharedescription") ? i.data("yasharedescription") : null,
	                    r = i.data("yasharetype") ? i.data("yasharetype") : "small",
	                    d = i.data("yasharetheme") ? i.data("yasharetheme") : "counter",
	                    o = i.data("yasharequickservices") ? i.data("yasharequickservices").split(",") : ["vkontakte", "facebook", "twitter"];
	                i.data("inited", !0), window.share[e] = new Ya.share({
	                    element: e,
	                    link: t,
	                    title: l,
	                    description: c,
	                    theme: d,
	                    elementStyle: {
	                        type: r,
	                        quickServices: o
	                    },
	                    onready: function() {}
	                })
	            }
	        })
	    }
	    a.shareInit = function() {
	        l(), angular.forEach(angular.element(".social_txt .wrap"), function(a) {
	            var s = angular.element(a);
	            "0" == s.text() && s.text("+1")
	        }), $(window).load(function() {
	            angular.forEach(angular.element(".social_txt .wrap"), function(a) {
	                var s = angular.element(a),
	                    i = 0;
	                angular.forEach(s.find(".b-share-counter"), function(a) {
	                    i += parseInt(0 | angular.element(a).text())
	                }), s.siblings(".social_txt").find(".wrap").text(i || "+1")
	            })
	        })
	    }, t(function() {
	        l()
	    }, 1e3), $("body").on("click", ".social", function() {
	        var a = $(this).find(".social_txt").hide(),
	            s = a.siblings(".social_btns");
	        s.show().find(".b-share-btn__wrap").hide().show(500)
	    });
	};


	share($rootScope, $location, $anchorScroll, $window, $interval, $log);

}]);