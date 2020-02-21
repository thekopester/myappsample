<header id="header">
	<div class="header-container"> <!-- flex parent -->
		<a href="#" class="dark-light-bttn dark"><i class="fa fa-sun-o" aria-hidden="true"></i><i class="fa fa-moon-o" aria-hidden="true"></i></a>
		<div class="header-brand">
			<a href="/" title="<%=TXT_DEALERSHIP_NAME%> is a <%=TXT_SEO_VEH_TYPES%> dealer in <%=TXT_SEO_LOCATION%>">
				<img alt="<%=TXT_DEALERSHIP_NAME%>" src="<%=TXT_DEALERSHIP_LOGO%>">
			</a>
		</div>
		<div class="header-contact">
			<div class="header-phone">
				<a class="header-phone__link" href="tel:<%=TXT_PHONE_LOCAL_NUM%>" title="Call <%=TXT_DEALERSHIP_NAME%>">
					<i class="fa fa-phone" aria-hidden="true"></i>
					<span><%=TXT_PHONE_LOCAL_NUM_2%></span>
				</a>
			</div>
			<div class="header-address">
				<span><%=TXT_DEALERSHIP_ADDRESS%></span>
				<span><%=TXT_DEALERSHIP_CITY%>, <abbr title="<%=TXT_DEALERSHIP_STATENAME%>" aria-label="<%=TXT_DEALERSHIP_STATENAME%>"><%=TXT_DEALERSHIP_STATE%></abbr> <%=TXT_DEALERSHIP_ZIPCODE%></span>
				<a class="header-address__link" href="/map-hours-directions-<%=TXT_SEF_URL_VEH_TYPES%>dealership--hours" title="Map, Directions, &amp; Hours for <%=TXT_DEALERSHIP_NAME%> in <%=TXT_SEO_LOCATION%>">
					<i class="fa fa-map-marker" aria-hidden="true"></i>
					<span>Map &amp; Hours</span>
				</a>
			</div>
			<div class="header-social">
				<ul class="social-block">
					<li>
						<a href="<%=TXT_SOCIAL_FACEBOOK%>" target="_blank" class="social-facebook" title="<%=TXT_DEALERSHIP_NAME%> on Facebook">
							<i class="fa fa-facebook" aria-hidden="true"></i>
							<span class="sr-only">Like <%=TXT_DEALERSHIP_NAME%> on Facebook! (opens in new window)</span>
						</a>
					</li>
					<li>
						<a href="<%=TXT_SOCIAL_TWITTER%>" target="_blank" class="social-twitter" title="<%=TXT_DEALERSHIP_NAME%> on Twitter">
							<i class="fa fa-twitter" aria-hidden="true"></i>
							<span class="sr-only">Follow <%=TXT_DEALERSHIP_NAME%> on Twitter! (opens in new window)</span>
						</a>
					</li>
					<li>
						<a href="<%=TXT_SOCIAL_INSTAGRAM%>" target="_blank" class="social-instagram" title="<%=TXT_DEALERSHIP_NAME%> on Instagram">
							<i class="fa fa-instagram" aria-hidden="true"></i>
							<span class="sr-only">Follow <%=TXT_DEALERSHIP_NAME%> on Instagram! (opens in new window)</span>
						</a>
					</li>
					<li>
						<a href="<%=TXT_SOCIAL_GOOGLE%>" target="_blank" class="social-google" title="<%=TXT_DEALERSHIP_NAME%> on Google+">
							<i class="fa fa-google-plus" aria-hidden="true"></i>
							<span class="sr-only">Follow <%=TXT_DEALERSHIP_NAME%> on Google Plus! (opens in new window)</span>
						</a>
					</li>
					<li>
						<a href="<%=TXT_SOCIAL_YOUTUBE%>" target="_blank" class="social-youtube" title="<%=TXT_DEALERSHIP_NAME%> on YouTube">
							<i class="fa fa-youtube" aria-hidden="true"></i>
							<span class="sr-only">Check out the <%=TXT_DEALERSHIP_NAME%> YouTube channel! (opens in new window)</span>
						</a>
					</li>
				</ul>
			</div>
			<div class="header-search">
				<div id="google_translate_element"></div>
			</div>
		</div>
	</div>
	<nav class="navbar" id="main-nav" role="navigation">
		<div class="navbar-header">
			<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
				<span class="sr-only">Toggle navigation</span>
				<span class="burger-bar"></span>
			</button>
		</div>
		<div class="navbar-collapse collapse">
			<ul class="nav navbar-nav">
				<li><a href="/" title="<%=TXT_DEALERSHIP_NAME%> Home">Home</a></li>
				<!--#include virtual="/includes/meganav-showroom-1.1.1.asp"-->
				<li class="dropdown">
					<a href="/inventory/v1/" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false" title="<%=TXT_SEO_VEH_TYPES%> for sale in <%=TXT_SEO_LOCATION%>">Showroom</a>
					<ul class="dropdown-menu" role="menu">
						<li><a href="/inventory/v1/" title="<%=TXT_SEO_VEH_TYPES%> for sale in <%=TXT_SEO_LOCATION%>">Showroom</a></li>
						<li><a href="/<%=TXT_SEF_URL_VEH_TYPES%>for-sale--xAllInventory" title="<%=TXT_SEO_VEH_TYPES%> for sale in <%=TXT_SEO_LOCATION%>">All Inventory</a></li>
						<li><a href="/new-<%=TXT_SEF_URL_VEH_TYPES%>for-sale--xNewInventory" title="New <%=TXT_SEO_VEH_TYPES%> for sale in <%=TXT_SEO_LOCATION%>">New Inventory</a></li>
						<li><a href="/used-<%=TXT_SEF_URL_VEH_TYPES%>for-sale--xPreOwnedInventory" title="Used <%=TXT_SEO_VEH_TYPES%> for sale in <%=TXT_SEO_LOCATION%>">Pre-Owned Inventory</a></li>
						<li><a href="/showroom/harley-davidson" title="Harley-Davidson&reg; Showroom in <%=TXT_SEO_LOCATION%>">Harley-Davidson&reg; Showroom</a></li>
						<li><a href="/price-quote-<%=TXT_SEF_URL_VEH_TYPES%>dealership--xget_quote" title="Get a Quote in <%=TXT_SEO_LOCATION%>">Get A Quote</a></li>
						<li><a href="/credit-financing-<%=TXT_SEF_URL_VEH_TYPES%>dealership--financing" title="Financing in <%=TXT_SEO_LOCATION%>">Finance</a></li>
						<li><a href="/trade-in-value-<%=TXT_SEF_URL_VEH_TYPES%>dealership--xtrade_value" title="Trade-In Value in <%=TXT_SEO_LOCATION%>">Value Your Trade</a></li>
						<li><a href="/test-ride-<%=TXT_SEF_URL_VEH_TYPES%>dealership--xsched_ride" title="Test Rides in <%=TXT_SEO_LOCATION%>">Schedule A Test Ride</a></li>
						<li><a href="/contact-email-<%=TXT_SEF_URL_VEH_TYPES%>dealership--xcontact" title="Contact <%=TXT_DEALERSHIP_NAME%> in <%=TXT_SEO_LOCATION%>">Contact Us</a></li>
					</ul>
				</li>
				<li class="dropdown">
					<a href="/service-repair-<%=TXT_SEF_URL_VEH_TYPES%>dealership--service" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false" title="Service in <%=TXT_SEO_LOCATION%>">Parts & Service </a>
					<ul class="dropdown-menu" role="menu">
						<li><a href="/service-repair-<%=TXT_SEF_URL_VEH_TYPES%>dealership--service" title="Service in <%=TXT_SEO_LOCATION%>">Service Department</a></li>
						<li><a href="/service-request-<%=TXT_SEF_URL_VEH_TYPES%>dealership--xservice_request" title="Service Appointments in <%=TXT_SEO_LOCATION%>">Service Appointments</a></li>
						<li><a href="/parts-<%=TXT_SEF_URL_VEH_TYPES%>dealership--parts" title="Parts in <%=TXT_SEO_LOCATION%>">Parts Department</a></li>
						<li><a href="/request-parts-<%=TXT_SEF_URL_VEH_TYPES%>dealership--xparts_request" title="Request Parts in <%=TXT_SEO_LOCATION%>">Parts Request</a></li>
					</ul>
				</li>
				<li class="dropdown">
					<a href="/check-out-my--projects" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false" title="<%=TXT_DEALERSHIP_NAME%> Projects in <%=TXT_SEO_LOCATION%>">Projects</a>
					<ul class="dropdown-menu" role="menu">
						<li><a href="/check-out-my--projects" title="<%=TXT_DEALERSHIP_NAME%> Projects in <%=TXT_SEO_LOCATION%>">Projects</a></li>
						<li><a href="/youtube-playlist--video-gallery" title="Video Gallery in <%=TXT_SEO_LOCATION%>">Video Gallery</a></li>
						<li><a href="/follow-instructions--newsletter-signup-doc" title="Instructions on Setting up Quick Newsletter Signup form">Quick Newsletter Signup Form</a></li>
						<li><a href="/how-to--mega-navs" title="Mega Nav Library Components">Mega Navs</a></li>
						<li><a href="/responsive--navbar-rebuild" title="Rebuilding of Dealer Spike's NavBar">NavBar Rebuild</a></li>
						<!-- <li><a href="/how-to--cta-buttons" title="CTA Buttons Library Components">CTA Buttons</a></li> -->
						<li><a href="/how-to--dealer-locator" title="Dealer Locator">Dealer Locator</a></li>
						<li><a href="/how-to--mymaps-example" title="Google MyMaps">Google MyMaps</a></li>
						<li><a href="/components--buttons" title="Buttons">Buttons</a></li>
					</ul>
				</li>
				<li class="dropdown">
					<a href="/events-calendar-<%=TXT_SEF_URL_VEH_TYPES%>dealership--xcalendar" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false" title="Events Calendar for <%=TXT_DEALERSHIP_NAME%> in <%=TXT_SEO_LOCATION%>">DS Site Pages</a>
					<ul class="dropdown-menu" role="menu">
						<li><a href="/events-calendar-<%=TXT_SEF_URL_VEH_TYPES%>dealership--xcalendar" title="Events Calendar for <%=TXT_DEALERSHIP_NAME%> in <%=TXT_SEO_LOCATION%>">Event Calendar</a></li>
						<li><a href="/events-calendar-<%=TXT_SEF_URL_VEH_TYPES%>dealership--xlistevents" title="Events Calendar for <%=TXT_DEALERSHIP_NAME%> in <%=TXT_SEO_LOCATION%>">Event Calendar List</a></li>
						<li><a href="/newsletter-mailing-list-<%=TXT_SEF_URL_VEH_TYPES%>dealership--xnewsletter" title="Join Our Mailing List in <%=TXT_SEO_LOCATION%>">Newsletter Signup</a></li>
						<li><a href="/reviews-testimonials-<%=TXT_SEF_URL_VEH_TYPES%>dealership--xtestimonials" title="Customer Reviews in <%=TXT_SEO_LOCATION%>">Read Testimonials</a></li>
						<li><a href="/submit-testimonial-reviews-<%=TXT_SEF_URL_VEH_TYPES%>dealership--xsurvey" title="Submit a Review in <%=TXT_SEO_LOCATION%>">Submit A Testimonial</a></li>
						<li><a href="<%=TXT_GALLERY_URL%>" target="_blank" title="Check Out Our Photos (opens in new window)">Photos</a></li>
						<li><a href="/map-hours-directions-<%=TXT_SEF_URL_VEH_TYPES%>dealership--hours" title="Map, Directions, &amp; Hours for <%=TXT_DEALERSHIP_NAME%> in <%=TXT_SEO_LOCATION%>">Map &amp; Hours</a></li>
						<li><a href="/staff-employees-<%=TXT_SEF_URL_VEH_TYPES%>dealership--xstaff" title="Our Team at <%=TXT_DEALERSHIP_NAME%> in <%=TXT_SEO_LOCATION%>">Meet Our Staff</a></li>
						<li><a href="/careers-jobs-employment-<%=TXT_SEF_URL_VEH_TYPES%>dealership--xcareers" title="Careers at <%=TXT_DEALERSHIP_NAME%> in <%=TXT_SEO_LOCATION%>">Employment</a></li>
						<li><a href="/contact-email-<%=TXT_SEF_URL_VEH_TYPES%>dealership--xcontact" title="Contact <%=TXT_DEALERSHIP_NAME%> in <%=TXT_SEO_LOCATION%>">Contact Us</a></li>
					</ul>
				</li>
			</ul>
		</div>
	</nav>

	<nav id="primary-site-nav" class="menu-nav" aria-label="Main Navigation Menu" aria-labelledby="">
		<div class="menu-nav__toggle">
			<button id="menuToggle" class="menu-btn collapsed" type="button" aria-label="Toggle Navigation Menu">
				<span class="sr-only">Toggle Navigation Menu</span>
				<span class="menu-btn__burger-bar"></span>
			</button>
		</div>
		<div class="menu-nav__row">
			<ul class="menu menu--primary" role="menubar" aria-label="Main Navigation Menu">
				<li role="none"><a href="/" role="menuitem" title="<%=TXT_DEALERSHIP_NAME%> Home">Home</a></li>
				<li class="menu__dropdown" role="none">
					<a href="/inventory/v1/" class="sub-menu--toggle" role="menuitem" aria-haspopup="true" aria-expanded="false" title="<%=TXT_SEO_VEH_TYPES%> for sale in <%=TXT_SEO_LOCATION%>">Showroom</a>
					<ul class="sub-menu" role="menu" aria-label="Sub Menu [Change label to define an accessible name for the submenu]">
						<li role="none"><a href="/inventory/v1/" role="menuitem" title="<%=TXT_SEO_VEH_TYPES%> for sale in <%=TXT_SEO_LOCATION%>">Showroom</a></li>
						<li class="menu__dropdown" role="none">
							<a href="/<%=TXT_SEF_URL_VEH_TYPES%>for-sale--xAllInventory" class="sub-menu--toggle" role="menuitem" aria-haspopup="true" aria-expanded="false" title="<%=TXT_SEO_VEH_TYPES%> for sale in <%=TXT_SEO_LOCATION%>">All Inventory</a>
							<ul class="sub-menu" role="menu" aria-label="Sub Menu [Change label to define an accessible name for the submenu]">
								<li role="none"><a href="/new-<%=TXT_SEF_URL_VEH_TYPES%>for-sale--xNewInventory" role="menuitem" title="New <%=TXT_SEO_VEH_TYPES%> for sale in <%=TXT_SEO_LOCATION%>">New Inventory</a></li>
								<li role="none"><a href="/used-<%=TXT_SEF_URL_VEH_TYPES%>for-sale--xPreOwnedInventory" role="menuitem" title="Used <%=TXT_SEO_VEH_TYPES%> for sale in <%=TXT_SEO_LOCATION%>">Pre-Owned Inventory</a></li>
							</ul>
						</li>
						<li role="none"><a href="/showroom/harley-davidson" role="menuitem" title="Harley-Davidson&reg; Showroom in <%=TXT_SEO_LOCATION%>">Harley-Davidson&reg; Showroom</a></li>
						<li role="none"><a href="/price-quote-<%=TXT_SEF_URL_VEH_TYPES%>dealership--xget_quote" role="menuitem" title="Get a Quote in <%=TXT_SEO_LOCATION%>">Get A Quote</a></li>
						<li role="none"><a href="/credit-financing-<%=TXT_SEF_URL_VEH_TYPES%>dealership--financing" role="menuitem" title="Financing in <%=TXT_SEO_LOCATION%>">Finance</a></li>
						<li role="none"><a href="/trade-in-value-<%=TXT_SEF_URL_VEH_TYPES%>dealership--xtrade_value" role="menuitem" title="Trade-In Value in <%=TXT_SEO_LOCATION%>">Value Your Trade</a></li>
						<li role="none"><a href="/test-ride-<%=TXT_SEF_URL_VEH_TYPES%>dealership--xsched_ride" role="menuitem" title="Test Rides in <%=TXT_SEO_LOCATION%>">Schedule A Test Ride</a></li>
						<li role="none"><a href="/contact-email-<%=TXT_SEF_URL_VEH_TYPES%>dealership--xcontact" role="menuitem" title="Contact <%=TXT_DEALERSHIP_NAME%> in <%=TXT_SEO_LOCATION%>">Contact Us</a></li>
					</ul>
				</li>
				<li class="menu__dropdown" role="none">
					<a href="/check-out-my--projects" class="sub-menu--toggle" role="menuitem" aria-haspopup="true" aria-expanded="false" title="<%=TXT_DEALERSHIP_NAME%> Projects in <%=TXT_SEO_LOCATION%>">Projects</a>
					<ul class="sub-menu" role="menu" aria-label="Sub Menu [Change label to define an accessible name for the submenu]">
						<li class="menu__dropdown" role="none">
							<a href="/check-out-my--projects" class="sub-menu--toggle" role="menuitem" aria-haspopup="true" aria-expanded="false" title="<%=TXT_DEALERSHIP_NAME%> Projects in <%=TXT_SEO_LOCATION%>">Projects</a>
							<ul class="sub-menu" role="menu" aria-label="Sub Menu [Change label to define an accessible name for the submenu]">
								<li role="none"><a href="/testing-pseudo-class--target-test" role="menuitem" title="CSS Pseudo-Class :target test">:Target Test</a></li>
								<li role="none"><a href="/youtube-playlist--video-gallery" role="menuitem" title="Video Gallery in <%=TXT_SEO_LOCATION%>">Video Gallery</a></li>
							</ul>
						</li>
						<li class="menu__dropdown" role="none">
							<a href="/responsive--navbar-rebuild" class="sub-menu--toggle" role="menuitem" aria-haspopup="true" aria-expanded="false" title="Rebuilding of Dealer Spike's NavBar">NavBar Rebuild</a>
							<ul class="sub-menu" role="menu" aria-label="Sub Menu [Change label to define an accessible name for the submenu]">
								<li role="none"><a href="/responsive--navbar-rebuild" role="menuitem" title="Rebuilding of Dealer Spike's NavBar">NavBar Rebuild</a></li>
								<li role="none"><a href="/how-to--mega-navs" role="menuitem" title="Mega Nav Library Components">Mega Navs</a></li>
							</ul>
						</li>
						<li role="none"><a href="/how-to--dealer-locator" role="menuitem" title="Dealer Locator">Dealer Locator</a></li>
					</ul>
				</li>
				<li class="menu__dropdown" role="none">
					<a href="/contact-email-<%=TXT_SEF_URL_VEH_TYPES%>dealership--xcontact" class="sub-menu--toggle" role="menuitem" aria-haspopup="true" aria-expanded="false" title="Contact <%=TXT_DEALERSHIP_NAME%> in <%=TXT_SEO_LOCATION%>">Documentation</a>
					<ul class="sub-menu" role="menu" aria-label="Sub Menu [Change label to define an accessible name for the submenu]">
						<li role="none"><a href="/follow-instructions--newsletter-signup-doc" role="menuitem" title="Instructions on Setting up Quick Newsletter Signup form">Quick Newsletter Signup Form</a></li>
						<li role="none"><a href="/instructions--menu-accessibility" role="menuitem" title="Instructions on Setting up Accessibility for Menu Navigation">Menu Nav Accessibility</a></li>
					</ul>
				</li>
				<li role="none"><a href="/contact-email-<%=TXT_SEF_URL_VEH_TYPES%>dealership--xcontact" role="menuitem" title="Contact <%=TXT_DEALERSHIP_NAME%> in <%=TXT_SEO_LOCATION%>">Contact Us</a></li>
			</ul>
		</div>
	</nav>
	<div class="vcard" id="vcard">
		<div class="fn org"><%=TXT_DEALERSHIP_NAME%></div>
		<div class="adr">
			<div class="street-address"><%=TXT_DEALERSHIP_ADDRESS%></div>
			<div> <span class="locality"><%=TXT_DEALERSHIP_CITY%></span>, <span class="region"><abbr class="region" title="<%=TXT_DEALERSHIP_STATENAME%>"><%=TXT_DEALERSHIP_STATE%></abbr></span> <span class="postal-code"><%=TXT_DEALERSHIP_ZIPCODE%></span></div>
			<div class="country-name"><%=TXT_DEALERSHIP_COUNTRY%></div>
		</div>
		<div>Phone: <span class="tel"><%=TXT_PHONE_NUM%></span></div>
		<div>Email: <span class="email"><%=TXT_DEALERSHIP_EMAIL_GENERAL%></span></div>
		<div>
			<span class="tel"><span class="type">Fax</span>:
			<span class="value"><%=TXT_PHONE_FAX_NUM%></span></span>
		</div>
	</div><!-- !.vcard -->
</header>


<% if lCase(strPage)="mega-navs" then %>

<script type="text/javascript">
$(document).ready(function(){
	$('#main').insertAfter("#header");
});
</script>
<!--#include virtual="/includes/mega-navs/mega-navs.asp"-->

<% end if %>
