//transpiled via Babel 7.5
// DS Survey Widget
// Created 8.21.19 by FED RC based on BlogWidget by SH and BKM
"use strict";

function _instanceof(t, e) {
    return null != e && "undefined" != typeof Symbol && e[Symbol.hasInstance] ? !!e[Symbol.hasInstance](t) : t instanceof e
}

function _classCallCheck(t, e) {
    if (!_instanceof(t, e)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(t, e) {
    for (var a = 0; a < e.length; a++) {
        var c = e[a];
        c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(t, c.key, c)
    }
}

function _createClass(t, e, a) {
    return e && _defineProperties(t.prototype, e), a && _defineProperties(t, a), t
}
var SurveyWidget = function() {
    function t(e) {
        var a = this;
        _classCallCheck(this, t), this.id = e.id, this.maxSurveys = e.maxSurveys, this.maxTestimonialCharacters = e.maxTestimonialCharacters, this.stars = e.stars, this.callback = e.callback, this.selectors = e.selectors, this.template = e.template, this.loadData().done(function(t) {
            0 === t.length ? $("#testimonial-widget").hide() : ($("#" + a.id + " .slider__content").html(a.template), a.populateData(a.selectors, t, a.maxTestimonialCharacters), $("#".concat(a.id, " .").concat(a.selectors.loading)).remove(), $("#".concat(a.id, " #").concat(a.selectors.surveyTemplateId)).remove()), e.callback && window[a.callback]
        })
    }
    return _createClass(t, [{
        key: "loadData",
        value: function() {
            return this.maxSurveys ? $.getJSON("/src/util/xxFeaturedSurveys.asp?amount=".concat(this.maxSurveys)) : $.getJSON("/src/util/xxFeaturedSurveys.asp")
        }
    }, {
        key: "populateData",
        value: function(t, e) {
            var a = this;
            e.reverse().map(function(e, c) {
                var s = $("#".concat(a.id, " #").concat(t.surveyTemplateId)).clone().attr("id", "survey-".concat(c));
                e.comments = a.truncateComments(e.comments, a.maxTestimonialCharacters), e.date = a.cleanDate(e.date), t.rating && $(".".concat(t.rating), s).text(e.rating + "/5"), t.date && $(".".concat(t.date), s).text(e.date), t.author && $(".".concat(t.author), s).text(e.name), t.location && $(".".concat(t.location), s).text(e.location), t.review && $(".".concat(t.review), s).html(e.comments), s.insertAfter("#".concat(t.surveyTemplateId)), a.countStars(e.rating, c)
            })
        }
      }, {
          key: "truncateComments",
          value: function(t, max) {
              var e = t;
              var eTrunc = e.substring(0,max);
              eTrunc = eTrunc.substring(0, eTrunc.lastIndexOf(" ")).trim() + '...';
              return (e.length < max) ? e : eTrunc;
          }
      }, {
        key: "cleanDate",
        value: function(t) {
            var e = t;
            var eNew = e.substr(4, 6);
            var eTrim = eNew.trim();
            return eTrim + ", " + e.substring(23, e.length)
        }
    }, {
        key: "countStars",
        value: function(t, e) {
            if (!0 !== this.stars) return !1 === this.stars ? ($("#survey-".concat(e, " .fa-star-o")).hide(), $("#survey-".concat(e, " .fa-star")).hide(), void console.log("No Stars")) : void 0;
            var a = '<i class="fa fa-star-o" aria-hidden="true"></i>';
            switch (t) {
                case 5:
                    $("#".concat(this.id, " #survey-").concat(e, " .fa-star-o")).hide();
                    break;
                case 4:
                    $("#".concat(this.id, " #survey-").concat(e, " #star5")).hide();
                    break;
                case 3:
                    $("#".concat(this.id, " #survey-").concat(e, " #star5")).hide(), $("#".concat(this.id, " #survey-").concat(e, " #star4")).hide(), $(a).insertBefore("#".concat(this.id, " #survey-").concat(e, " #star3"));
                    break;
                case 2:
                    $("#".concat(this.id, " #survey-").concat(e, " #star5")).hide(), $("#".concat(this.id, " #survey-").concat(e, " #star4")).hide(), $("#".concat(this.id, " #survey-").concat(e, " #star3")).hide(), $(a).insertBefore("#".concat(this.id, " #survey-").concat(e, " #star2")), $(a).insertBefore("#".concat(this.id, " #survey-").concat(e, " #star2"));
                    break;
                case 1:
                    $("#".concat(this.id, " #survey-").concat(e, " #star5")).hide(), $("#".concat(this.id, " #survey-").concat(e, " #star4")).hide(), $("#".concat(this.id, " #survey-").concat(e, " #star3")).hide(), $("#".concat(this.id, " #survey-").concat(e, " #star2")).hide(), $(a).insertBefore("#".concat(this.id, " #survey-").concat(e, " #star1")), $(a).insertBefore("#".concat(this.id, " #survey-").concat(e, " #star1")), $(a).insertBefore("#".concat(this.id, " #survey-").concat(e, " #star1"))
            }
        }
    }]), t
}();
