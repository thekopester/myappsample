<!-- JSON-LD Schema -->
<script type="application/ld+json">
{
	"@context": "http://www.schema.org",
	"@type": "AutomotiveBusiness",
	"url": "<%=TXT_DEALERSHIP_URL%>",
	"name": "<%=TXT_DEALERSHIP_NAME%>",
	"description": "<%=TXT_DEALERSHIP_DESCRIPTION%>",
	"logo": "<%=TXT_DEALERSHIP_URL%><%=TXT_DEALERSHIP_LOGO%>",
    "email": "<%=TXT_DEALERSHIP_EMAIL_GENERAL%>",
	"telephone": "+1 <%=TXT_PHONE_LOCAL_NUM%>",
	"faxNumber": "<%=TXT_PHONE_FAX_NUM%>",
    "address": {
        "@type" : "PostalAddress",
        "streetAddress" : "<%=TXT_DEALERSHIP_ADDRESS%>",
        "addressLocality" : "<%=TXT_DEALERSHIP_CITY%>",
        "addressRegion" : "<%=TXT_DEALERSHIP_STATE%>",
        "postalCode" : "<%=TXT_DEALERSHIP_ZIPCODE%>",
        "addressCountry": "<%=TXT_DEALERSHIP_COUNTRY%>"
    },
    "sameAs" : [
        "<%=TXT_SOCIAL_FACEBOOK%>",
        "<%=TXT_SOCIAL_TWITTER%>",
        "<%=TXT_SOCIAL_YOUTUBE%>",
        "<%=TXT_SOCIAL_INSTAGRAM%>",
        "<%=TXT_SOCIAL_PINTEREST%>",
        "<%=TXT_SOCIAL_GOOGLE%>"
    ],
    "openingHoursSpecification": [
		{
			"@type": "OpeningHoursSpecification",
			"dayOfWeek": [
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday"
			],
			"opens": "00:00",
			"closes": "00:00"
		},
		{
			"@type": "OpeningHoursSpecification",
			"dayOfWeek": [
				"Saturday"
			],
			"opens": "00:00",
			"closes": "00:00"
		}
    ]
    // ,"location": [
    //     { // 1st Location: leave this with default variables
    //         "@type":"AutomotiveBusiness",
    //         "name": "<%=TXT_DEALERSHIP_NAME%>",
    //         "telephone": "+1 <%=TXT_PHONE_LOCAL_NUM%>",
    //         "faxNumber": "<%=TXT_PHONE_FAX_NUM%>",
    //         "address": {
    //             "@type" : "PostalAddress",
    //             "streetAddress" : "<%=TXT_DEALERSHIP_ADDRESS%>",
    //             "addressLocality" : "<%=TXT_DEALERSHIP_CITY%>",
    //             "addressRegion" : "<%=TXT_DEALERSHIP_STATE%>",
    //             "postalCode" : "<%=TXT_DEALERSHIP_ZIPCODE%>",
    //             "addressCountry": "<%=TXT_DEALERSHIP_COUNTRY%>"
    //         },
	// 		"openingHoursSpecification": [
	// 	        {
	// 	        	"@type": "OpeningHoursSpecification",
	// 	        	"dayOfWeek": [
	// 		            "Monday",
	// 		            "Tuesday",
	// 		            "Wednesday",
	// 		            "Thursday",
	// 		            "Friday"
	// 		        ],
	// 	        	"opens": "00:00",
	// 	        	"closes": "00:00"
	// 	        },
	// 	        {
	// 	        	"@type": "OpeningHoursSpecification",
	// 	        	"dayOfWeek": [
	// 	            	"Saturday"
	// 	        	],
	// 	        	"opens": "00:00",
	// 	        	"closes": "00:00"
	// 	        }
	// 	    ]
    //     },
    //     { // 2nd Location
    //         "@type":"AutomotiveBusiness",
    //         "name": "<%=TXT_DEALERSHIP_NAME%>",
    //         "telephone": "+1 <%=TXT_PHONE_LOCAL_NUM%>",
    //         "faxNumber": "<%=TXT_PHONE_FAX_NUM%>",
    //         "address": {
    //             "@type" : "PostalAddress",
    //             "streetAddress" : "<%=TXT_DEALERSHIP_ADDRESS%>",
    //             "addressLocality" : "<%=TXT_DEALERSHIP_CITY%>",
    //             "addressRegion" : "<%=TXT_DEALERSHIP_STATE%>",
    //             "postalCode" : "<%=TXT_DEALERSHIP_ZIPCODE%>",
    //             "addressCountry": "<%=TXT_DEALERSHIP_COUNTRY%>"
    //         },
	// 		"openingHoursSpecification": [
	// 			{
	// 				"@type": "OpeningHoursSpecification",
	// 				"dayOfWeek": [
	// 					"Monday",
	// 					"Tuesday",
	// 					"Wednesday",
	// 					"Thursday",
	// 					"Friday"
	// 				],
	// 				"opens": "00:00",
	// 				"closes": "00:00"
	// 			},
	// 			{
	// 				"@type": "OpeningHoursSpecification",
	// 				"dayOfWeek": [
	// 					"Saturday"
	// 				],
	// 				"opens": "00:00",
	// 				"closes": "00:00"
	// 			}
	// 	    ]
    //     }
    // ]
}
</script>
<!-- End JSON-LD Schema -->
