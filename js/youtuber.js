'use strict';
var _typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(a) {
        return typeof a
    } : function(a) {
        return a && 'function' == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? 'symbol' : typeof a
    },
    _createClass = function() {
        function a(b, c) {
            for (var g, f = 0; f < c.length; f++) g = c[f], g.enumerable = g.enumerable || !1, g.configurable = !0, 'value' in g && (g.writable = !0), Object.defineProperty(b, g.key, g)
        }
        return function(b, c, f) {
            return c && a(b.prototype, c), f && a(b, f), b
        }
    }();

function _classCallCheck(a, b) {
    if (!(a instanceof b)) throw new TypeError('Cannot call a class as a function')
}
var YouTuber = function() {
    function a(b) {
        if (_classCallCheck(this, a), this.tokenLists = {}, this.videoGroupLists = {}, this.videoLists = {}, this.currentVideoList = [], this.videoListsData = [], this.durationData = [], this.events = {}, this.events.thumbEvent = this.thumbEvent.bind(this), this.events.pageEvent = this.pageEvent.bind(this), this.videoCount = 0, this.currentIndex = 0, this.currentPage = 1, this.options = b, !this.options.resultsPerPage && 'video' != this.options.type) return console.error('YouTuber Error: No results per page option was provided.'), !1;
        if ('video' === this.options.type) {
            if (!this.options.video) return console.error('YouTuber Error: No video ID was provided.'), !1;
        } else if ('videos' === this.options.type) {
            if (!this.options.videos) return console.error('YouTuber Error: No videos were provided.'), !1;
        } else if ('playlist' !== this.options.type) {
            if ('channel' !== this.options.type) return console.error('YouTuber Error: No type option was provided.'), !1;
            if (!this.options.channel) return console.error('YouTuber Error: No channel ID was provided.'), !1
        } else if (!this.options.playlist) return console.error('YouTuber Error: No playlist ID was provided.'), !1;
        a.isApiReady ? this.initYTPlayer() : a.apiReadyQueue.push(this)
    }
    return _createClass(a, [{
        key: 'get',
        value: function get(b) {
            return new Promise(function(c, f) {
                var g = new XMLHttpRequest;
                g.open('GET', b), g.onload = function() {
                    200 == g.status ? c(g.response) : f(Error(g.statusText))
                }, g.onerror = function() {
                    f(Error('Network Error: Request could not be fulfilled.'))
                }, g.send()
            })
        }
    }, {
        key: 'initYTPlayer',
        value: function initYTPlayer() {
            var b = document.querySelector('#' + this.options.wrapperId);
            if (!b) return console.error('YouTuber Error: No wrapper ID option was provided.'), !1;
            if (this.options.titleTag) this.createMarkup(b);
            else return console.error('YouTuber Error: No title tag option was provided.'), !1;
            if (this.options.playerId) this.playerVars = {
                id: this.options.playerId ? this.options.playerId : null,
                autoplay: this.options.autoPlay ? 1 : 0,
                controls: this.options.showControls ? 1 : 0,
                modestbranding: this.options.removeBranding ? 1 : 0,
                rel: this.options.showRel ? 1 : 0,
                showinfo: this.options.showInfo ? 1 : 0,
                loop: this.options.loopVideo ? 1 : 0
            };
            else return console.error('YouTuber Error: No player ID option was provided.'), !1;
            'video' === this.options.type || 'videos' === this.options.type ? this.getVideoData() : 'playlist' === this.options.type ? this.getPlaylistData() : 'channel' === this.options.type && this.getChannelListId()
        }
    }, {
        key: 'createPlayer',
        value: function createPlayer() {
            'video' === this.options.type ? this.ytPlayer = new YT.Player(this.playerVars.id, {
                videoId: this.options.video,
                playerVars: this.playerVars,
                events: {
                    onReady: this.onPlayerReady.bind(this),
                    onPlaybackQualityChange: this.onPlayerPlaybackQualityChange.bind(this),
                    onPlaybackRateChange: this.onPlayerPlaybackRateChange.bind(this),
                    onStateChange: this.onPlayerStateChange.bind(this),
                    onVolumeChange: this.onPlayerVolumeChange.bind(this),
                    onError: this.onPlayerError.bind(this)
                }
            }) : 'videos' === this.options.type ? this.ytPlayer = new YT.Player(this.playerVars.id, {
                videoId: this.videoListsData[1].items[0].id,
                playerVars: this.playerVars,
                events: {
                    onReady: this.onPlayerReady.bind(this),
                    onPlaybackQualityChange: this.onPlayerPlaybackQualityChange.bind(this),
                    onPlaybackRateChange: this.onPlayerPlaybackRateChange.bind(this),
                    onStateChange: this.onPlayerStateChange.bind(this),
                    onVolumeChange: this.onPlayerVolumeChange.bind(this),
                    onError: this.onPlayerError.bind(this)
                }
            }) : 'playlist' === this.options.type || 'channel' === this.options.type ? this.ytPlayer = new YT.Player(this.playerVars.id, {
                videoId: this.videoListsData[1].items[0].snippet.resourceId.videoId,
                playerVars: this.playerVars,
                events: {
                    onReady: this.onPlayerReady.bind(this),
                    onPlaybackQualityChange: this.onPlayerPlaybackQualityChange.bind(this),
                    onPlaybackRateChange: this.onPlayerPlaybackRateChange.bind(this),
                    onStateChange: this.onPlayerStateChange.bind(this),
                    onVolumeChange: this.onPlayerVolumeChange.bind(this),
                    onError: this.onPlayerError.bind(this)
                }
            }) : console.warn('YouTuber Error: No type was found.')
        }
    }, {
        key: 'getVideoData',
        value: function getVideoData(b) {
            if (this.changingVideos = !0, this.changingPages = !0, 'video' === this.options.type) {
                var c = '/default.asp?page=xxYouTubeAPI&type=videos&maxResults=' + this.options.resultsPerPage + '&videos=' + this.options.videos,
                    f = this;
                this.get(c).then(function(p) {
                    f.currentData = JSON.parse(p);
                    var q = f.currentPage,
                        r = f.options.resultsPerPage;
                    f.videoLists[q] = f.options.videos, f.tokenLists[q] = [f.currentData.prevPageToken, f.currentData.nextPageToken], f.ytPlayer || f.createPlayer(), f.changingPages = !1, f.changingVideos = !1
                })
            } else {
                var g = document.querySelector('#' + this.options.wrapperId + ' .yt-gallery'),
                    h = this.currentPage;
                if (!!g.querySelector('.gallery.page-' + this.currentPage)) this.generateThumbnails(this.videoLists[h]), this.updateCurrentPage(), b && (this.loadVideoById(this.videoLists[h][this.currentIndex % this.options.resultsPerPage]), this.updateCurrentVideo(), this.updateTitle()), this.changingPages = !1, this.changingVideos = !1;
                else if (1 === this.currentPage) {
                    for (var j = this.options.videos, k = this.options.resultsPerPage, l = 0, m = [], n = 0; n < j.length; n++) 0 == n % k && 0 != n && (l++, this.videoLists[l] = m, m = []), m.push(j[n]), n === j.length - 1 && (l++, this.videoLists[l] = m, m = []);
                    this.currentVideoList = j;
                    for (var o = '/default.asp?page=xxYouTubeAPI&type=videos&maxResults=' + this.options.resultsPerPage, n = 0; n < Object.keys(this.videoLists).length; n++) this.videoGroupLists[n] = o + '&videos=' + this.videoLists[n + 1];
                    var f = this;
                    this.get(this.videoGroupLists[0]).then(function(p) {
                        f.currentData = JSON.parse(p), f.videoListsData[1] = f.currentData, f.ytPlayer || f.createPlayer(), f.changingPages = !1, f.changingVideos = !1
                    })
                } else {
                    var f = this;
                    this.get(this.videoGroupLists[h - 1]).then(function(p) {
                        f.currentData = JSON.parse(p), f.videoListsData[h] = f.currentData, f.generateThumbnails(f.videoLists[h]), f.paginationChanging || (b && (f.loadVideoById(f.videoLists[h][f.currentIndex % f.options.resultsPerPage]), f.updateCurrentVideo(), f.updateTitle()), f.updateCurrentPage()), f.changingPages = !1, f.changingVideos = !1
                    })
                }
            }
        }
    }, {
        key: 'getPlaylistData',
        value: function getPlaylistData(b, c, f) {
            this.changingVideos = !0, this.changingPages = !0;
            var g = document.querySelector('#' + this.options.wrapperId + ' .yt-gallery');
            if (!g.querySelector('.gallery.page-' + this.currentPage)) {
                var h;
                b || c ? b ? h = '/default.asp?page=xxYouTubeAPI&type=playlist&maxResults=' + this.options.resultsPerPage + '&playlist=' + this.options.playlist + '&nextToken=' + b : c && (h = '/default.asp?page=xxYouTubeAPI&type=playlist&maxResults=' + this.options.resultsPerPage + '&playlist=' + this.options.playlist + '&prevToken=' + c) : h = '/default.asp?page=xxYouTubeAPI&type=playlist&maxResults=' + this.options.resultsPerPage + '&playlist=' + this.options.playlist;
                var j = this;
                this.get(h).then(function(l) {
                    j.currentData = JSON.parse(l), j.videoListsData[j.currentPage] = j.currentData;
                    var m = [];
                    if (0 < j.currentData.items.length)
                        for (var n = 0; n < j.currentData.items.length; n++) j.currentData.items[n].snippet.resourceId.videoId && m.push(j.currentData.items[n].snippet.resourceId.videoId);
                    else m = null;
                    var o = j.currentPage;
                    j.currentVideoList = j.currentVideoList.concat(m), j.videoLists[o] = m, j.tokenLists[o] = [j.currentData.prevPageToken, j.currentData.nextPageToken], j.ytPlayer || j.createPlayer(), (b || c) && (j.generateThumbnails(j.videoLists[o]), !j.paginationChanging && (f && (j.loadVideoById(j.videoLists[o][j.currentIndex % j.options.resultsPerPage]), j.updateCurrentVideo(), j.updateTitle()), j.updateCurrentPage())), j.changingPages = !1, j.changingVideos = !1
                })
            } else {
                var k = this.currentPage;
                this.generateThumbnails(this.videoLists[k]), this.updateCurrentPage(), f && (this.loadVideoById(this.videoLists[k][this.currentIndex % this.options.resultsPerPage]), this.updateCurrentVideo(), this.updateTitle()), this.changingPages = !1, this.changingVideos = !1
            }
        }
    }, {
        key: 'getChannelListId',
        value: function getChannelListId() {
            var b = '/default.asp?page=xxYouTubeAPI&type=channel&channel=' + this.options.channel,
                c = this;
            this.get(b).then(function(f) {
                c.currentData = JSON.parse(f), c.options.playlist = c.currentData.items[0].contentDetails.relatedPlaylists.uploads, c.getPlaylistData()
            })
        }
    }, {
        key: 'getDurationData',
        value: function getDurationData(b) {
            var c = '/default.asp?page=xxYouTubeAPI&type=duration&maxResults=' + this.options.resultsPerPage + '&videos=' + b,
                f = this;
            this.get(c).then(function(g) {
                for (var h = JSON.parse(g), j = 0; j < h.items.length; j++) f.durationData.push(h.items[j]), j === h.items.length - 1 && f.updateDurations()
            })
        }
    }, {
        key: 'updateDurations',
        value: function updateDurations() {
            for (var b = this, c = 0; c < this.durationData.length; c++) 'undefined' != typeof b.thumbElems[c] && (b.thumbElems[c].querySelector('.card-content .card-content--specs .duration') || (b.thumbElems[c].querySelector('.card-content .card-content--specs').innerHTML += '<span class="duration">' + b.formatDuration(b.durationData[c].contentDetails.duration) + '</span>', b.showElem(b.thumbElems[c])))
        }
    }, {
        key: 'showElem',
        value: function showElem(b) {
            '1' != b.style.opacity && (b.style.opacity = '1'), 'visible' != b.style.visibility && (b.style.visibility = 'visible')
        }
    }, {
        key: 'onPlayerReady',
        value: function onPlayerReady() {
            this.options.loadCallback && 'function' == typeof this.options.loadCallback && this.options.loadCallback();
            var b = this.ytPlayer.getAvailablePlaybackRates();
            1 < b.length && (this.featuresPlaybackRate = !0), this.playerReady = !0, 'video' === this.options.type ? this.updateTitle() : (!this.paginationCreated && !this.options.infiniteScroll && this.createPagination(), this.generateThumbnails(this.videoLists[1]), this.updateCurrentVideo(), this.updateTitle())
        }
    }, {
        key: 'onPlayerPlaybackQualityChange',
        value: function onPlayerPlaybackQualityChange() {}
    }, {
        key: 'onPlayerPlaybackRateChange',
        value: function onPlayerPlaybackRateChange() {}
    }, {
        key: 'onPlayerStateChange',
        value: function onPlayerStateChange(b) {
            var c = ['ENDED', 'PLAYING', 'PAUSED', 'BUFFERING', '', 'CUED', 'UNSTARTED'],
                f = b.data;
            return -1 === f ? f = 6 : null, void 0 != _typeof(c[f]) && 5 === f && (this.changingVideos = !1), void 0 == _typeof(c[f]) || 6 !== f && 3 !== f, void 0 != _typeof(c[f]) && 0 === f && this.options.nextAfterEnd && ('videos' === this.options.type ? this.currentIndex !== this.currentVideoList.length - 1 && this.nextVideo() : this.currentIndex !== this.currentData.pageInfo.totalResults - 1 && this.nextVideo()), f === this.lastState || this.errorNumber ? !1 : void(this.lastState = c[f], this.options.eventsCallback && 'function' == typeof this.options.eventsCallback && this.options.eventsCallback(b))
        }
    }, {
        key: 'onPlayerVolumeChange',
        value: function onPlayerVolumeChange() {}
    }, {
        key: 'onPlayerError',
        value: function onPlayerError(b) {
            this.errorNumber || (this.errorNumber = b.data, this.error())
        }
    }, {
        key: 'error',
        value: function error() {
            var b = {
                    2: 0,
                    5: 1,
                    100: 2,
                    101: 3,
                    150: 3
                },
                c = [{
                    code: this.errorNumber,
                    message: 'The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.'
                }, {
                    code: this.errorNumber,
                    message: 'Error while trying to play the video.'
                }, {
                    code: this.errorNumber,
                    message: 'The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.'
                }, {
                    code: this.errorNumber,
                    message: 'The owner of the requested video does not allow it to be played in embedded players, or the video is private.'
                }, {
                    code: this.errorNumber,
                    message: 'YouTube API unknown error (' + this.errorNumber + ')'
                }];
            b[this.errorNumber] ? console.warn(c[b[this.errorNumber]]) : console.warn(c[4])
        }
    }, {
        key: 'createMarkup',
        value: function createMarkup(b) {
            var c = document.createElement(this.options.titleTag);
            c.setAttribute('class', this.options.playerId + '-title'), c.innerText = 'Loading title...';
            var f = document.createElement('div');
            f.setAttribute('class', 'inner-video-wrapper');
            var g = document.createElement('div');
            if (g.setAttribute('id', this.options.playerId), g.setAttribute('class', 'youtuber-video'), f.append(g), b.setAttribute('class', this.options.playerId), b.append(f), b.append(c), 'video' != this.options.type) {
                var h = document.createElement('div');
                h.setAttribute('class', 'pagination');
                var i = document.createElement('ul');
                h.append(i);
                var j = document.createElement('h2');
                j.setAttribute('class', 'yt-gallery-title'), j.innerText = 'All Videos';
                var k = document.createElement('div');
                k.setAttribute('class', 'yt-gallery');
                var l = document.createElement('div');
                if (l.setAttribute('class', 'yt-loading'), l.style.opacity = '0', l.style.visibility = 'hidden', l.style.display = 'none', k.append(l), b.append(h), b.append(j), b.append(k), this.options.infiniteScroll) {
                    var m = document.createElement('div');
                    m.setAttribute('class', 'more-btn-wrapper');
                    var n = document.createElement('div');
                    n.setAttribute('class', 'more-btn-inner');
                    var o = document.createElement('button');
                    o.setAttribute('class', 'infinite-scroll load-more-btn'), o.innerHTML = '<i class="fa fa-ellipsis-h"></i><span>Load More</span>', o.addEventListener('click', function() {
                        this.debounce(this.nextPage(), 250)
                    }.bind(this));
                    m.append(n);
                    n.append(o);
                    var t = document.createElement('button');
                    t.setAttribute('class', 'infinite-scroll back-to-top-btn'), t.innerHTML = '<i class="fa fa-arrow-up">&nbsp;</i>', t.style.opacity = '0', t.style.visibility = 'hidden', t.addEventListener('click', this.debounce(function() {
                        this.scrollToTop()
                    }.bind(this), 100)), window.addEventListener('scroll', this.throttle(function() {
                        this.checkPageScroll()
                    }.bind(this), 500)), b.append(m), b.append(t)
                }
            }
        }
    }, {
        key: 'checkPageScroll',
        value: function checkPageScroll() {
            var b = document.querySelector('#' + this.options.wrapperId);
            100 < document.body.scrollTop || 100 < document.documentElement.scrollTop ? (b.querySelector('.infinite-scroll.back-to-top-btn').style.opacity = '100', b.querySelector('.infinite-scroll.back-to-top-btn').style.visibility = 'visible') : (b.querySelector('.infinite-scroll.back-to-top-btn').style.opacity = '0', b.querySelector('.infinite-scroll.back-to-top-btn').style.visibility = 'hidden')
        }
    }, {
        key: 'scrollToTop',
        value: function scrollToTop() {
            var b = document.querySelector('#' + this.options.wrapperId);
            document.body.scrollTop = b.offsetTop, document.documentElement.scrollTop = b.offsetTop
        }
    }, {
        key: 'generateThumbnails',
        value: function generateThumbnails(b) {
            if (b && 'video' != this.options.type) {
                var c = document.querySelector('#' + this.options.wrapperId + ' .yt-gallery'),
                    f = c.querySelectorAll('.gallery');
                if (!c.querySelector('.gallery.page-' + this.currentPage)) {
                    var g = document.createElement('ul');
                    g.setAttribute('class', 'gallery page-' + this.currentPage);
                    for (var h = 0; h < b.length; h++) this.videoCount++, g.innerHTML += this.videoListsData[this.currentPage].items[h].contentDetails && this.videoListsData[this.currentPage].items[h].contentDetails.duration ? '<li style="opacity:0; visibility:hidden;" class="video-thumb gallery-item" data-id="' + b[h] + '"data-index="' + (this.videoCount - 1) + '"><div class="card-wrapper"><div class="card"><div class="card-header"><img src="https://img.youtube.com/vi/' + b[h] + '/mqdefault.jpg" /></div><div class="card-content"><h4 class="title">' + this.videoListsData[this.currentPage].items[h].snippet.title.substring(0,60) + '</h4><div class="card-content--specs"><span class="duration">' + this.formatDuration(this.videoListsData[this.currentPage].items[h].contentDetails.duration) + '</span><span class="creation">Published ' + this.formatDate(this.videoListsData[this.currentPage].items[h].snippet.publishedAt) + '</span></div><div class="description">' + this.videoListsData[this.currentPage].items[h].snippet.description.substring(0,300) + '&hellip;</div></div></div></div></li>' : '<li style="opacity:0; visibility:hidden;" class="video-thumb gallery-item" data-id="' + b[h] + '"data-index="' + (this.videoCount - 1) + '"><div class="card-wrapper"><div class="card"><div class="card-header"><img src="https://img.youtube.com/vi/' + b[h] + '/mqdefault.jpg" /></div><div class="card-content"><h4 class="title">' + this.videoListsData[this.currentPage].items[h].snippet.title.substring(0,60) + '</h4><div class="card-content--specs"><span class="creation">Published ' + this.formatDate(this.videoListsData[this.currentPage].items[h].snippet.publishedAt) + '</span></div><div class="description">' + this.videoListsData[this.currentPage].items[h].snippet.description.substring(0,300) + '&hellip;</div></div></div></div></li>';
                    1 == this.currentPage || this.options.infiniteScroll || (g.style.opacity = '0', g.style.visibility = 'hidden', g.style.display = 'none'), c.append(g), this.attachThumbnailEvents(), this.attachPaginationEvents(), this.updateCurrentPage(), this.getDurationData(this.videoLists[this.currentPage])
                } else this.updateCurrentPage()
            } else console.warn('YouTuber Error: No thumbnails could be generated. (One video, or no video list found)')
        }
    }, {
        key: 'thumbEvent',
        value: function thumbEvent(b) {
            var c = this.findParentNode(b.target, 'li');
            if (c.classList.value && -1 < c.classList.value.indexOf('active')) return !1;
            var f = parseInt(c.getAttribute('data-index')),
                g = c.getAttribute('data-id');
            this.loadVideoById(g), this.currentIndex = f, this.updateCurrentVideo(), this.updateTitle(), this.updateButtonStatus()
        }
    }, {
        key: 'attachThumbnailEvents',
        value: function attachThumbnailEvents() {
            this.thumbElems = document.querySelectorAll('#' + this.options.wrapperId + ' .gallery-item');
            for (var b = 0; b < this.thumbElems.length; b++) this.thumbElems[b].removeEventListener('click', this.events.thumbEvent, !1), this.thumbElems[b].addEventListener('click', this.events.thumbEvent)
        }
    }, {
        key: 'pageEvent',
        value: function pageEvent(b) {
            var c = this.findParentNode(b.target, 'li');
            if (c.classList.value && -1 < c.classList.value.indexOf('active')) return !1;
            var f = c.getAttribute('data-index');
            f != this.currentPage && (this.paginationChanging ? console.warn('YouTuber Error: Pagination is already changing.') : (this.goToPage(f), this.updateActivePage(f)))
        }
    }, {
        key: 'attachPaginationEvents',
        value: function attachPaginationEvents() {
            this.pageElems = document.querySelectorAll('#' + this.options.wrapperId + ' .pagination ul li button');
            for (var b = 0; b < this.pageElems.length; b++) this.pageElems[b].removeEventListener('click', this.events.pageEvent, !1), this.pageElems[b].addEventListener('click', this.events.pageEvent)
        }
    }, {
        key: 'goToPage',
        value: function goToPage(b) {
            var c = this;
            this.paginationChanging = !0, this.prevPageIndex = this.currentPage, this.goToPageIndex = parseInt(b);
            var f = setInterval(function() {
                var g = document.querySelector('#' + c.options.wrapperId + ' .yt-gallery'),
                    h = g.querySelectorAll('.gallery'),
                    j = document.querySelector('#' + c.options.wrapperId + ' .yt-loading');
                if (b == c.currentPage) c.paginationChanging = !1, c.updateCurrentPage(), clearInterval(f);
                else if (!c.changingPages)
                    if (!g.querySelector('.gallery.page-' + b)) c.nextPage();
                    else if (h[b - 1]) {
                    c.currentPage = parseInt(b), '1' != h[b - 1].style.opacity && (h[b - 1].style.opacity = '1'), 'visible' != h[b - 1].style.visibility && (h[b - 1].style.visibility = 'visible'), 'block' != h[b - 1].style.display && (h[b - 1].style.display = 'flex');
                    for (var k = 0; k < h.length; k++) k !== b - 1 && ('0' != h[k].style.opacity && (h[k].style.opacity = '0'), 'visibility' != h[k].style.visibility && (h[k].style.visibility = 'visibility'), 'none' != h[k].style.display && (h[k].style.display = 'none'))
                } else {
                    for (var k = 0; k < c.pageElems.length; k++) c.pageElems[k].parentNode.classList.remove('active');
                    c.pageElems[b - 1].parentNode.classList.add('active'), c.currentPage > b ? c.prevPage() : c.currentPage < b && c.nextPage()
                }
            }, 50)
        }
    }, {
        key: 'updateTitle',
        value: function updateTitle() {
            var b = document.querySelector(this.options.titleTag + '.' + this.options.playerId + '-title');
            if ('video' != this.options.type) {
                var c = Math.ceil(this.currentIndex / this.options.resultsPerPage);
                0 === c && (c = 1), this.videoListsData[c].items[this.currentIndex % this.options.resultsPerPage].snippet.title ? b.innerText = this.videoListsData[c].items[this.currentIndex % this.options.resultsPerPage].snippet.title : console.warn('YouTuber Error: No video title was found.')
            } else b.innerText = this.ytPlayer.getVideoData().title
        }
    }, {
        key: 'updateCurrentVideo',
        value: function updateCurrentVideo() {
            for (var b = this.thumbElems, c = 0; c < b.length; c++) b[c].classList.remove('active');
            'undefined' != typeof b[this.currentIndex] && b[this.currentIndex].classList.add('active')
        }
    }, {
        key: 'updateCurrentPage',
        value: function updateCurrentPage() {
            if (!this.options.infiniteScroll) {
                this.galleryElems = document.querySelectorAll('#' + this.options.wrapperId + ' .yt-gallery .gallery');
                var b = document.querySelector('#' + this.options.wrapperId + ' .yt-gallery .yt-loading');
                this.goToPageIndex || (this.goToPageIndex = 1);
                var c = this;
                if (!!this.paginationChanging) this.galleryElems[this.prevPageIndex - 1].style.opacity = '0.5', '1' != b.style.opacity && (b.style.opacity = '1'), 'visible' != b.style.visibility && (b.style.visibility = 'visible'), 'block' != b.style.display && (b.style.display = 'block');
                else if (this.goToPageIndex === this.goToPageIndex && this.galleryElems[this.currentPage - 1] && 0 < this.galleryElems[this.currentPage - 1].innerHTML.length) {
                    '1' != this.galleryElems[this.goToPageIndex - 1].style.opacity && (this.galleryElems[this.goToPageIndex - 1].style.opacity = '1'), 'visibile' != this.galleryElems[this.goToPageIndex - 1].style.visibility && (this.galleryElems[this.goToPageIndex - 1].style.visibility = 'visible'), 'block' != this.galleryElems[this.goToPageIndex - 1].style.display && (this.galleryElems[this.goToPageIndex - 1].style.display = 'flex');
                    for (var f = 0; f < this.galleryElems.length; f++) f !== this.goToPageIndex - 1 && ('0' != c.galleryElems[f].style.opacity && (c.galleryElems[f].style.opacity = '0'), 'hidden' != c.galleryElems[f].style.visibility && (c.galleryElems[f].style.visibility = 'hidden'), 'none' != c.galleryElems[f].style.display && (c.galleryElems[f].style.display = 'none'));
                    '0' != b.style.opacity && (b.style.opacity = '0'), 'hidden' != b.style.visibility && (b.style.visibility = 'hidden'), 'none' != b.style.display && (b.style.display = 'none')
                }
            } else
                for (var c = this, f = 0; f < this.thumbElems.length; f++) c.showElem(c.thumbElems[f]);
            this.updateButtonStatus()
        }
    }, {
        key: 'updateActivePage',
        value: function updateActivePage(b) {
            if (!this.options.infiniteScroll) {
                for (var c = b ? b : this.currentPage, f = 0; f < this.pageElems.length; f++) this.pageElems[f].parentNode.classList.remove('active');
                this.pageElems[c - 1].parentNode.classList.add('active'), this.updateButtonStatus()
            }
        }
    }, {
        key: 'createPagination',
        value: function createPagination() {
            var b = document.querySelector('#' + this.options.wrapperId + ' .pagination ul');
            if (0 < !b.querySelectorAll('li').length) {
                this.pageCount = 'videos' === this.options.type ? Math.ceil(this.currentVideoList.length / this.options.resultsPerPage) : Math.ceil(this.currentData.pageInfo.totalResults / this.options.resultsPerPage);
                for (var f, c = 0; c < this.pageCount; c++) f = c + 1, b.innerHTML += 0 === c ? '<li class="page-' + f + ' active" data-index="' + f + '"><button>' + f + '</button></li>' : '<li class="page-' + f + '" data-index="' + f + '"><button>' + f + '</button></li>'
            }
            this.paginationCreated = !0
        }
    }, {
        key: 'updateButtonStatus',
        value: function updateButtonStatus() {
            var b = document.querySelector('#' + this.options.wrapperId),
                c = b.querySelector('.infinite-scroll.load-more-btn');
            'videos' === this.options.type ? (this.options.infiniteScroll && Math.ceil(this.currentVideoList.length / this.options.resultsPerPage) === this.currentPage && (c.disabled = !0), this.options.nextPageBtn && document.querySelector(this.options.nextPageBtn) && (Math.ceil(this.currentVideoList.length / this.options.resultsPerPage) === this.currentPage ? document.querySelector(this.options.nextPageBtn).disabled = !0 : document.querySelector(this.options.nextPageBtn).disabled = !1), this.options.prevPageBtn && document.querySelector(this.options.prevPageBtn) && (1 === this.currentPage ? document.querySelector(this.options.prevPageBtn).disabled = !0 : document.querySelector(this.options.prevPageBtn).disabled = !1), this.options.nextVidBtn && document.querySelector(this.options.nextVidBtn) && (this.currentIndex === this.currentVideoList.length - 1 ? document.querySelector(this.options.nextVidBtn).disabled = !0 : document.querySelector(this.options.nextVidBtn).disabled = !1), this.options.prevVidBtn && document.querySelector(this.options.prevVidBtn) && (0 === this.currentIndex ? document.querySelector(this.options.prevVidBtn).disabled = !0 : document.querySelector(this.options.prevVidBtn).disabled = !1)) : (this.options.infiniteScroll && Math.ceil(this.videoListsData[1].pageInfo.totalResults / this.options.resultsPerPage) === this.currentPage && (c.disabled = !0), this.options.nextPageBtn && document.querySelector(this.options.nextPageBtn) && (Math.ceil(this.videoListsData[1].pageInfo.totalResults / this.options.resultsPerPage) === this.currentPage ? document.querySelector(this.options.nextPageBtn).disabled = !0 : document.querySelector(this.options.nextPageBtn).disabled = !1), this.options.prevPageBtn && document.querySelector(this.options.prevPageBtn) && (1 === this.currentPage ? document.querySelector(this.options.prevPageBtn).disabled = !0 : document.querySelector(this.options.prevPageBtn).disabled = !1), this.options.nextVidBtn && document.querySelector(this.options.nextVidBtn) && (this.currentIndex === this.currentData.pageInfo.totalResults - 1 ? document.querySelector(this.options.nextVidBtn).disabled = !0 : document.querySelector(this.options.nextVidBtn).disabled = !1), this.options.prevVidBtn && document.querySelector(this.options.prevVidBtn) && (0 === this.currentIndex ? document.querySelector(this.options.prevVidBtn).disabled = !0 : document.querySelector(this.options.prevVidBtn).disabled = !1))
        }
    }, {
        key: 'formatDate',
        value: function formatDate(b) {
            var c = new Date(b);
            return c.toLocaleDateString()
        }
    }, {
        key: 'formatDuration',
        value: function formatDuration(b) {
          var containsMinutes = b.indexOf('M');
          if(containsMinutes>-1) {
            var c = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/,
                f = 0,
                g = 0,
                h = 0,
                j = '';
            if (c.test(b)) {
                  var k = c.exec(b);
                  return k[1] && (f = +k[1]), k[2] && (g = +k[2]), k[3] && (h = +k[3]), 0 < f && (j += f + ':'), 0 < g && (j += g + ':'), 0 < h && (10 > h ? j += '0' + h : j += h), j
              }
          } else {
            var newDuration = b.replace('PT','0:').replace('S','');
            return newDuration
          }
        }
    }, {
        key: 'findParentNode',
        value: function findParentNode(b, c) {
            1 === (c = c.split('.')).length ? c.push(null) : !c[0] && (c[0] = null);
            do
                if ((!c[0] || c[0].toLowerCase() == b.nodeName.toLowerCase()) && (!c[1] || new RegExp('( |^)(' + c[1] + ')( |$)').test(b.className))) break;
            while (b = b.parentNode);
            return b
        }
    }, {
        key: 'debounce',
        value: function debounce(b, c, f) {
            var g;
            return function() {
                var h = this,
                    j = arguments,
                    l = f && !g;
                clearTimeout(g), g = setTimeout(function k() {
                    g = null, f || b.apply(h, j)
                }, c), l && b.apply(h, j)
            }
        }
    }, {
        key: 'throttle',
        value: function throttle(b, c, f) {
            c || (c = 250);
            var g, h;
            return function() {
                var j = f || this,
                    k = +new Date,
                    l = arguments;
                g && k < g + c ? (clearTimeout(h), h = setTimeout(function() {
                    g = k, b.apply(j, l)
                }, c)) : (g = k, b.apply(j, l))
            }
        }
    }, {
        key: 'loadVideoById',
        value: function loadVideoById(b) {
            if (this.ytPlayer) {
                this.ytPlayer.loadVideoById({
                    videoId: b
                })
            }
        }
    }, {
        key: 'cueVideoById',
        value: function cueVideoById(b) {
            if (this.ytPlayer) {
                this.ytPlayer.cueVideoById({
                    videoId: b
                })
            }
        }
    }, {
        key: 'loadPlaylist',
        value: function loadPlaylist(b) {
            if (this.ytPlayer) {
                this.ytPlayer.loadPlaylist({
                    listType: 'playlist',
                    list: b
                })
            }
        }
    }, {
        key: 'cuePlaylist',
        value: function cuePlaylist(b) {
            if (this.ytPlayer) {
                this.ytPlayer.cuePlaylist({
                    listType: 'playlist',
                    list: b
                })
            }
        }
    }, {
        key: 'playVideoAt',
        value: function playVideoAt(b) {
            this.ytPlayer && this.ytPlayer.playVideoAt(b)
        }
    }, {
        key: 'seekTo',
        value: function seekTo(b) {
            this.ytPlayer && this.ytPlayer.seekTo(b)
        }
    }, {
        key: 'play',
        value: function play() {
            this.ytPlayer && this.ytPlayer.playVideo()
        }
    }, {
        key: 'pause',
        value: function pause() {
            this.ytPlayer && this.ytPlayer.pauseVideo()
        }
    }, {
        key: 'stop',
        value: function stop() {
            this.ytPlayer && this.ytPlayer.stopVideo()
        }
    }, {
        key: 'next',
        value: function next() {
            this.ytPlayer && this.ytPlayer.nextVideo()
        }
    }, {
        key: 'prev',
        value: function prev() {
            this.ytPlayer && this.ytPlayer.previousVideo()
        }
    }, {
        key: 'mute',
        value: function mute() {
            this.ytPlayer && this.ytPlayer.mute()
        }
    }, {
        key: 'unMute',
        value: function unMute() {
            this.ytPlayer && this.ytPlayer.unMute()
        }
    }, {
        key: 'setVolume',
        value: function setVolume(b) {
            this.ytPlayer && this.ytPlayer.setVolume(b)
        }
    }, {
        key: 'setPlaybackRate',
        value: function setPlaybackRate(b) {
            this.ytPlayer && this.ytPlayer.setPlaybackRate(b)
        }
    }, {
        key: 'getVolume',
        value: function getVolume() {
            if (this.ytPlayer) return this.ytPlayer.getVolume()
        }
    }, {
        key: 'setSize',
        value: function setSize(b, c) {
            this.ytPlayer && this.ytPlayer.setSize(b, c)
        }
    }, {
        key: 'getPlaybackRate',
        value: function getPlaybackRate() {
            if (this.ytPlayer) return this.ytPlayer.getPlaybackRate()
        }
    }, {
        key: 'getAvailablePlaybackRates',
        value: function getAvailablePlaybackRates() {
            if (this.ytPlayer) return this.ytPlayer.getAvailablePlaybackRates()
        }
    }, {
        key: 'setLoop',
        value: function setLoop(b) {
            this.ytPlayer && this.ytPlayer.setLoop(b)
        }
    }, {
        key: 'setShuffle',
        value: function setShuffle(b) {
            this.ytPlayer && this.ytPlayer.setShuffle(b)
        }
    }, {
        key: 'getVideoLoadedFraction',
        value: function getVideoLoadedFraction() {
            if (this.ytPlayer) return this.ytPlayer.getVideoLoadedFraction()
        }
    }, {
        key: 'getPlayerState',
        value: function getPlayerState() {
            if (this.ytPlayer) return this.ytPlayer.getPlayerState()
        }
    }, {
        key: 'getCurrentTime',
        value: function getCurrentTime() {
            if (this.ytPlayer) return this.ytPlayer.getCurrentTime()
        }
    }, {
        key: 'getPlaybackQuality',
        value: function getPlaybackQuality() {
            if (this.ytPlayer) return this.ytPlayer.getPlaybackQuality()
        }
    }, {
        key: 'setPlaybackQuality',
        value: function setPlaybackQuality(b) {
            this.ytPlayer && this.ytPlayer.setPlaybackQuality(b)
        }
    }, {
        key: 'getAvailableQualityLevels',
        value: function getAvailableQualityLevels() {
            if (this.ytPlayer) return this.ytPlayer.getAvailableQualityLevels()
        }
    }, {
        key: 'getDuration',
        value: function getDuration() {
            if (this.ytPlayer) return this.ytPlayer.getDuration()
        }
    }, {
        key: 'getVideoUrl',
        value: function getVideoUrl() {
            if (this.ytPlayer) return this.ytPlayer.getVideoUrl()
        }
    }, {
        key: 'getVideoEmbedCode',
        value: function getVideoEmbedCode() {
            if (this.ytPlayer) return this.ytPlayer.getVideoEmbedCode()
        }
    }, {
        key: 'getPlaylist',
        value: function getPlaylist() {
            if (this.ytPlayer) return this.ytPlayer.getPlaylist()
        }
    }, {
        key: 'getPlaylistIndex',
        value: function getPlaylistIndex() {
            if (this.ytPlayer) return this.ytPlayer.getPlaylistIndex()
        }
    }, {
        key: 'addEvent',
        value: function addEvent(b, c) {
            this.ytPlayer && this.ytPlayer.addEventListener(b, c)
        }
    }, {
        key: 'removeEvent',
        value: function removeEvent(b, c) {
            this.ytPlayer && this.ytPlayer.removeEventListener(b, c)
        }
    }, {
        key: 'nextPage',
        value: function nextPage(b) {
            if (!this.changingPages) {
                if ('videos' === this.options.type) this.prevPageIndex = this.currentPage, this.currentPage++, this.goToPageIndex = this.currentPage, b ? this.getVideoData(!0) : this.getVideoData(!1);
                else {
                    if (this.tokenLists[this.currentPage][1]) var c = this.tokenLists[this.currentPage][1];
                    else return console.warn('YouTuber Error: No token was found.'), !1;
                    this.prevPageIndex = this.currentPage, this.currentPage++, this.goToPageIndex = this.currentPage, 'video' === this.options.type || ('playlist' === this.options.type || 'channel' === this.options.type) && (b ? this.getPlaylistData(c, null, !0) : this.getPlaylistData(c, null, !1))
                }
                this.paginationChanging || this.updateActivePage(this.currentPage)
            } else console.warn('YouTuber Error: Could not change page while page is already changing.')
        }
    }, {
        key: 'nextVideo',
        value: function nextVideo() {
            this.changingVideos ? console.warn('YouTuber Error: Could not change video while video is already changing.') : this.ytPlayer && (this.currentIndex === this.options.resultsPerPage * this.currentPage - 1 ? (this.currentIndex++, this.nextPage(!0)) : !this.paginationChanging && (this.currentIndex++, this.loadVideoById(this.currentVideoList[this.currentIndex]), this.updateCurrentVideo(), this.updateTitle(), this.updateActivePage(this.currentPage), this.updateButtonStatus()))
        }
    }, {
        key: 'prevPage',
        value: function prevPage(b) {
            if (!this.changingPages) {
                if ('videos' === this.options.type) this.prevPageIndex = this.currentPage, this.currentPage--, this.goToPageIndex = this.currentPage, b ? this.getVideoData(!0) : this.getVideoData(!1);
                else {
                    if (this.tokenLists[this.currentPage][0]) var c = this.tokenLists[this.currentPage][0];
                    else return console.warn('YouTuber Error: No token was found.'), !1;
                    this.prevPageIndex = this.currentPage, this.currentPage--, this.goToPageIndex = this.currentPage, 'video' === this.options.type || ('playlist' === this.options.type || 'channel' === this.options.type) && (b ? this.getPlaylistData(null, c, !0) : this.getPlaylistData(null, c, !1))
                }
                this.paginationChanging || this.updateActivePage(this.currentPage)
            } else console.warn('YouTuber Error: Could not change page while page is already changing.')
        }
    }, {
        key: 'prevVideo',
        value: function prevVideo() {
            this.changingPages ? console.warn('YouTuber Error: Could not change video while video is already changing.') : this.ytPlayer && (this.currentIndex === this.options.resultsPerPage * (this.currentPage - 1) ? (this.currentIndex--, this.prevPage(!0)) : !this.paginationChanging && (this.currentIndex--, this.loadVideoById(this.currentVideoList[this.currentIndex]), this.updateCurrentVideo(), this.updateTitle(), this.updateActivePage(this.currentPage), this.updateButtonStatus()))
        }
    }]), a
}();

function apiLoaded() {
    YT.ready(function() {
        YouTuber.isApiReady = !0;
        for (var a = 0; a < YouTuber.apiReadyQueue.length; ++a) YouTuber.apiReadyQueue[a].initYTPlayer()
    })
}

function loadScript(a, b) {
    var c = !1,
        f = document.createElement('script'),
        g = document.getElementsByTagName('script')[0];
    g.parentNode.insertBefore(f, g), f.onload = function() {
        c || (c = !0, 'function' == typeof b && b())
    }, f.onreadystatechange = function() {
        c || 'complete' !== this.readyState && 'loaded' !== this.readyState || (c = !0, 'function' == typeof b && b())
    }, f.src = a
}
YouTuber.apiReadyQueue = [], 'undefined' != typeof document && 'undefined' == typeof YT && loadScript('https://www.youtube.com/iframe_api', apiLoaded),
    function(a) {
        a.forEach(function(b) {
            b.hasOwnProperty('append') || Object.defineProperty(b, 'append', {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                value: function() {
                    var f = Array.prototype.slice.call(arguments),
                        g = document.createDocumentFragment();
                    f.forEach(function(h) {
                        var j = h instanceof Node;
                        g.appendChild(j ? h : document.createTextNode(h + ''))
                    }), this.appendChild(g)
                }
            })
        })
    }([Element.prototype, Document.prototype, DocumentFragment.prototype]);
