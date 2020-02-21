<!DOCTYPE html>
<html lang="en" data-platformversion="<%=CONFIG_MAIN_VERSION%>">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">

	<title><%=oCKEditor.getMetaData("meta-title", GetTitle())%></title>
	<%=getBaseHref()&vbCrLf%>
	<%oCKEditor.CanCreatePages(true)%>
	<%=oCKEditor.getMetaDataTag("meta-description",TXT_DEALERSHIP_DESCRIPTION)%>
	<%=oCKEditor.getMetaDataTag("meta-keywords",TXT_DEALERSHIP_KEYWORDS)%>
	<%=oCKEditor.getMetaDataTag("meta-copyright",TXT_DEALERSHIP_NAME & " " & TXT_DEALERSHIP_CITY & ", " & TXT_DEALERSHIP_STATENAME & ".  All Rights Reserved")%>
	<%=oCKEditor.getMetaDataTag("meta-author","Dealer Spike, http://www.dealerspike.com")%>
	<%=oCKEditor.getMetaDataTag("meta-city",TXT_DEALERSHIP_CITY)%>
	<%=oCKEditor.getMetaDataTag("meta-country",TXT_DEALERSHIP_COUNTRY)%>
	<%=oCKEditor.getMetaDataTag("meta-Distribution","Global")%>
	<%=oCKEditor.getMetaDataTag("meta-Rating","General")%>
	<%=oCKEditor.getMetaDataTag("meta-Robots","INDEX,FOLLOW")%>
	<%=getMetaDataTag("og:image")%>
	<%=strOGMeta%>
	<meta property="og:image" content="https://kopydev.clients.dealerspike.net/images/kopydev-header-graphic.jpg" />
	<meta property="og:image:width" content="440" />
	<meta property="og:image:height" content="300" />

	<link rel="publisher" href="<%=TXT_SOCIAL_GOOGLE%>" />
	<link rel="shortcut icon" href="/favicon.ico" />
	<link rel="icon" type="image/png" href="/favicon-32x32.png" />
	<link rel="apple-touch-icon" type="image/png" href="/favicon-114x114.png" />

	<!-- Site CSS & Fonts -->
	<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
	<link href="https://fonts.googleapis.com/css?family=Montserrat%7CRajdhani:500,700%7CRoboto" rel="stylesheet" />
	<link rel="stylesheet" href="https://cdn.iconmonstr.com/1.3.0/css/iconmonstr-iconic-font.min.css" />
	<link id="responsiveStyles" rel="stylesheet" type="text/css" href="/styles/styles.css" />
	<!-- <link rel="stylesheet" type="text/css" href="/styles/animate.css" /> -->

	<!-- Site Scripts -->
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" type="text/javascript"></script>
	<script src="https://code.jquery.com/jquery-migrate-1.2.1.min.js" type="text/javascript"></script>
   <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js" type="text/javascript"></script>

	<script>
      function isBreakpoint( alias ) {
         return $('.device-' + alias).is(':visible');
      }

		$(document).ready(function(){
         //beta aria-expanded fix 1/30/18
         //toggles aria-expanded in mobile views using built-in bootstrap function
         $(".dropdown").on("show.bs.dropdown", function(event){
            $(this).find('.dropdown-toggle').attr('aria-expanded', 'true');
         });
         $(".dropdown").on("hide.bs.dropdown", function(event){
            $(this).find('.dropdown-toggle').attr('aria-expanded', 'false');
         });

         if( isBreakpoint('md') || isBreakpoint('lg') || isBreakpoint('xl') ) {
            //toggles aria-expanded in desktop views when we hack it to open on hover
            $('.dropdown').hover(function() {
               $(this).addClass('open');
               $(this).find('.dropdown-toggle').attr('aria-expanded', 'true');
            },
            function() {
               $(this).removeClass('open');
               $(this).find('.dropdown-toggle').attr('aria-expanded', 'false');
            });
            $("[data-toggle='dropdown']").on("click", function(e){
               if((e.which == "1") && $(this).is(":hover") && !$(this).parents(".dropdown").hasClass("open")){
                  e.stopImmediatePropagation();
                  if ($(this).attr('target') !== "_blank" ) {
                     document.location=$(this).attr("href");
                  }
               }
            });
         }

			// makes href="tel:#"s valid for browsers
			$('a[href^="tel"]').each( function(){
				$(this).attr('href', 'tel:' + $(this).attr('href').replace(/\D+/g,""));
			});

			// hide link titles on hover
			var ttext;
			$(".navbar-nav a").hover(function(){
				ttext = $(this).attr('title');
				$(this).removeAttr('title');
			},
			function(){
				$(this).attr('title', ttext);
			});
			// hide slideshow titles on hover
			var slideshowTitle;
			$('.ds-slide').hover(function(){
				slideshowTitle = $(this).attr('title');
				$(this).removeAttr('title');
			},
			function(){
				$(this).attr('title', slideshowTitle);
			});
			// prevents footer collapse animation on viewports when the
			// collapse element is already forced open
			$('footer [data-toggle="collapse"]').on('click', function(e){
				if ($('footer .collapse:not(.in)').is(':visible')) {
					e.preventDefault();
					e.stopPropagation();
				} else {
					return true;
				}
			});

			// script to pull forms into content/index pages
			$("[data-DSP-on]").each( function_Data_DSP_On );
			$("[data-form]").each(function(){
				$(this).load($(this).attr("data-form"));
			})

		});
	</script>

	<!--  IE8/9 stylesheet to fix max selector issue -->
	<!--[if lt IE 10]>
		<link rel="stylesheet" type="text/css" href="/styles/styles-ie-old.css" />
	<![endif]-->
	<!-- HTML5 shim and Respond.js - IE8 support of HTML5 elements and media queries -->
	<!--[if lt IE 9]>
		<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js" type="text/javascript"></script>
		<script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js" type="text/javascript"></script>
	<![endif]-->
	<script type="text/javascript">
		$(document).ready(function(){
			if( $('.carousel-promo').length ) {
				$('.carousel-promo').DSCarousel();
			}
		});
	</script>

	<!--#include file="head-analytics.asp" -->
	<!--#include file="schema.asp" -->

	<!--#include virtual="/src/includes/v5/coreHeaderEnd.asp"	-->
