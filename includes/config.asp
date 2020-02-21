<!--#include virtual="/src/includes/v3Defaults.asp" -->
<%
V7_CONFIG_SHOW_PRICE_ALWAYS = true
V7_CONFIG_ENABLE_PRICE_DIFFERENCE_CLEARANCE = true
CONFIG_PLATFORM_MAJOR_VERSION = 7
V7_CONFIG_ENABLE_PRICE_DIFFERENCE_CUSTOM = true
V7_CONFIG_SHOW_RETAIL_PRICE_CUSTOM = true
INVENTORY_MANAGER_VERSION = 7
V7_CONFIG_ENABLE_PRICE_DIFFERENCE = true
V7_CONFIG_STRIKETHROUGH_RETAIL_LOWER_PRICE_EXISTS = true
V7_CONFIG_SHOW_RETAIL_PRICE_NEW = true
V7_CONFIG_SHOW_RETAIL_PRICE_CLEARANCE = true
V7_CONFIG_ENABLE_PRICE_DIFFERENCE_USED = true
V7_CONFIG_ENABLE_PRICE_DIFFERENCE_NEW = true
V7_CONFIG_SHOW_RETAIL_PRICE_USED = true
V7_INVENTORY_ENABLED = true
CONFIG_PLATFORM_MINOR_VERSION = 1
CONFIG_MAIN_VERSION = 7
DEALER_SUPPORTS_SECURE_PROTOCOL = True


TXT_DEALERSHIP_NAME				= "Beard Development"
TXT_DEALERSHIP_TITLE			= "Beard Development - We Create Customized Experiences For Your Beard"
TXT_DEALERSHIP_ABBRNAME			= "kopydev"
TXT_DEALERSHIP_SHORTNAME		= "kopydev"
TXT_DEALERSHIP_URL				= "http://www.dealerspike.com/"
TXT_DEALERSHIP_EMAIL_DOMAIN		= "dealerspike.com"
DOMAIN_DEFAULT_EMAIL_PASSWORD	= ""

TXT_DEALERSHIP_DESCRIPTION		= "We Create Customized Experiences For Your Beard. Digital Marketing. Video Production. Branding. Services: Branding, Website Design And Development, Digital Marketing - SEO, PPC, Social."
TXT_DEALERSHIP_KEYWORDS			= "Beard Development"

TXT_IMG_PATH					= "/images/kopydev-"

TXT_UNIT_TAX_TEXT = "Payments include fees/taxes/freight" 'Monthly Payment Tax Label Configuration option

' dstCYCLE, dstRV, dstMARINE, dstAUTO, dstAgriculture, dstCOMMERCIAL, dstHEAVYTRUCK
' TXT_DEALERSHIP_TYPE  = dstAUTO
TXT_DEALERSHIP_MULTI_TYPE = dstCYCLE + dstMARINE + dstRV + dstAgriculture

TXT_DEALERSHIP_CATTYPES_APPEND = "Blower,Chainsaw,Generator,Lawn Mower,Pressure Washer"

'For pre-populating SEF links on header/footer/index:
'Link Title Text, ex. "Lake Oswego, OR", "Eastern Ontario", "Sandusky &amp; Richmond, MI"
TXT_SEO_LOCATION        = "Wilsonville, OR"
'Link Title Text, ex. "Harley-Davidson&reg; Motorcycles", "ATVs, UTVs, &amp; Motorcycles"
TXT_SEO_VEH_TYPES       = "Website Development"
'SEF links, ex. "harley-davidson-", "atvs-utvs-motorcycles-"
TXT_SEF_URL_VEH_TYPES   = "website-development-"

'Comma separated list of pages that can be editted by the dealer admin
'Enable Ability to Add New Pages AND Edit any page
'CONFIG_DEALER_PAGES_EDIT	= "*"
CONFIG_DEALER_PAGES_EDIT	= "*"
CONFIG_DEALER_SNIPPITS_EDIT = "Content1"
CONFIG_ENABLE_INLINE_EDITING = True
ENABLE_SITE_ADMINISTRATION = True
CONFIG_ENABLE_INLINE_EDITING_BY_DEALER = True

'enabled dealer logo to show on xinventory print detail pages
TXT_DEALERSHIP_LOGO = "/images/kopydev-logo.png"

'Enable xinvmanager
SAT_ENABLE_INVMANAGER 					= True

' enable showroom
' TXT_DEALERSHIP_SHOWROOM_ID		= "6708"

'V1
CONFIG_SHOWROOMDETAILS_V0_REDIRECT_TO_V1TRIM = 301
CONFIG_SHOWROOMV0_DISABLE_WITH_RESPONSE = 410
CONFIG_SHOWROOMV1_LISTPAGES_DEFAULT_YEAR = "current"

' Enable H-D Showroom
CONFIG_HD_SHOWROOM_ENABLE = True

'Admin tools enabled
SAT_ENABLE_ECOMMERCE					= False
SAT_ENABLE_GALLERY						= False
SAT_ENABLE_FEATURED_BIKE				= True
SAT_ENABLE_CUSTOM_BIKE					= False
SAT_ENABLE_YOUTUBE						= True
SAT_ENABLE_ECOMMERCE_PROVIDER			= ECOMMERCE_PROVIDER_ZNODE
SAT_ENABLE_CRAIGS						= False
SAT_ENABLE_SURVEY						= True
SAT_ENABLE_STAFF		                = True
SAT_ENABLE_CLEARANCE_BUTTON				= True
SAT_ENABLE_NEW_INVLIST_FILTERS			= True

' Enable Featured Testimonial Surveys
CONFIG_ENABLE_SURVEY_FEATURED = True

SAT_ENABLE_JSON_FIELDS = True ' enable custom inventory fields

' Getting Custom Fields to show on xinventory detail pages
' TXT_VEHICLE_HIGHLIGHTS_CSV = TXT_VEHICLE_HIGHLIGHTS_CSV & ",Drivetrain"

CONFIG_BIKEINFO_GETFINANCED_ACTIVE		= True
CONFIG_BIKEINFO_SCHEDULE_RIDE_ACTIVE	= True
CONFIG_FINANCING_HDAPPLICATION_ACTIVE	= True
'CONFIG_BIKEINFO_GETFINANCED_LINK =

'Only enable for dealers using a VIN not HIN or SER
CONFIG_VINCHECK_ACTIVE = False

CONFIG_SLIDESHOW_VERSION				= 3
CONFIG_EVENT_INCLUDE_JQUERY				= False
CONFIG_CRAIGSLIST_VERSION               = 3

CALENDAR_VERSION = "SQL"
'xlistevents styles
CONFIG_LISTEVENTS_VERSION               = 2
EVENT_DETAIL_SIZE                       = "880x880"
TXT_DEALERSHIP_CALENDAR = "kopyscalendar"

TXT_SHOWROOM_SHOULD_SHOW_PREOWNED_INVENTORY_LINK 	= True
TXT_SHOWROOM_SHOULD_SHOW_NEW_INVENTORY_LINK 		= True
TXT_CONFIG_SHOWROOM_LIGHTDARK						= "light"

ENABLE_INVENTORY_DETAIL_MODALS 	= True
INV_TEXTBUTTONS_CSS_FILE 		= "darkNav"
MODAL_BACKGROUND_COLOR_SELECTOR = ""

DOMAIN_DEFAULT_EMAIL_PASSWORD = ""

TXT_PHONE_NUM			    = "800-555-5555"
TXT_PHONE_LOCAL_NUM_2	    = "555-555-TELL"
TXT_PHONE_LOCAL_NUM		    = "555-555-5555"
TXT_PHONE_FAX_NUM		    = "555-555-FAXX"
TXT_USEDBIKES_PATH		    = ""
TXT_UPLOAD_IMAGES_FOLDER	= ""
TXT_SLIDESHOW_PATH		    = ""
TXT_SLIDESHOW_WEBFOLDER		= ""

TXT_DEALERSHIP_STATENAME    = "Oregon"
TXT_DEALERSHIP_STATE		= "OR"
TXT_DEALERSHIP_CITY			= "Wilsonville"
TXT_DEALERSHIP_ZIPCODE		= "97070"
TXT_DEALERSHIP_ADDRESS		= "26600 SW Parkway Ave"
TXT_DEALERSHIP_ADDRESS_2		= "Bldg 60 Suite 400"
TXT_DEALERSHIP_COUNTRY      = "US"
TXT_DEALERSHIP_AREAS		= "Portland, Salem, Beaverton, Hillsboro"

TXT_SOCIAL_FACEBOOK         = "/--xcomingsoon"
TXT_SOCIAL_TWITTER          = "/--xcomingsoon"
TXT_SOCIAL_YOUTUBE          = "/--xcomingsoon"
TXT_SOCIAL_INSTAGRAM        = "/--xcomingsoon"
TXT_SOCIAL_PINTEREST        = "/--xcomingsoon"
TXT_SOCIAL_GOOGLE           = "/--xcomingsoon"

TXT_SERVICEREQUEST_LNK_HEADER 	= True	'override = service_request_header
TXT_GETQUOTE_LNK_HEADER 		= True  'override = getquote_header

DEALERSHIP_DEBUG = True

'v6 Forms Pages
'to add custom forms, uncomment the below and add them, comma spaced, in place of "example-form-name"
'TXT_DEALERSPIKE_FORM_TEMPLATES = TXT_DEALERSPIKE_FORM_TEMPLATES & ",example-form-name"

'v6 Custom Internal Pages
TXT_DEALERSPIKE_CUSTOM_TEMPLATES = "animations,buttons,component-testimonials-dynamic,cta-buttons,dealer-locator,mega-navs,menu-accessibility,mymaps-example,navbar-rebuild,newsletter-signup-doc,projects,support-youtuber,target-test,video-gallery,youtuber-test"

'Inventory variables
INVENTORY_DETAIL_VERSION = 2
ENABLE_INVENTORY_DETAIL_MODALS = True
CONFIG_INVLIST_BIKES_PER_PAGE = 20
CONFIG_PAYMENT_CALCULATOR = True
CONFIG_SHIPPING_CALCULATOR = True
'CONFIG_INVENTORY_LIST_VERSION = "DS1RVLayout"
CONFIG_INVENTORY_LIST_VERSION = "DS1PowersportsLayout"

CONFIG_SHOW_ALL_PRICE = True
CONFIG_ENABLE_NADA_RETAIL_PRICE_CLEARANCE_COLUMN = True

CONFIG_DEALER_HAS_RENTALS = True
SAT_ENABLE_INV_SHOW_YEAR = False
SAT_ENABLE_INV_SHOW_MODEL = False
SAT_ENABLE_INV_SHOW_MAKE = False
SAT_ENABLE_INV_SHOW_BRAND = False

ENABLE_RESPONSIVE_LAYOUT =True

CONFIG_ENABLED_META_USERS_CSV = ""

CONFIG_ENABLE_DAYLIGHT_SAVINGS = True

CONFIG_DATETIME_OFFSET = 0 'PST
'CONFIG_DATETIME_OFFSET = 1    'MST
'CONFIG_DATETIME_OFFSET = 2    'CST
'CONFIG_DATETIME_OFFSET = 3    'EST

CONFIG_DEALER_PAGES_SECURE  = "parts"
CONFIG_DEALER_PAGES_SECURE_USERID     = "partsid"
CONFIG_DEALER_PAGES_SECURE_PASSWORD     = "partspassword"

CONFIG_DEALER_PAGES_SECURE2  = "service"
CONFIG_DEALER_PAGES_SECURE_USERID2     = "serviceid"
CONFIG_DEALER_PAGES_SECURE_PASSWORD2     = "servicepassword"

%>

<!--#include virtual="/includes/config/settings.inc" -->
<!--#include virtual="/src/shared-stdlib.asp" -->
