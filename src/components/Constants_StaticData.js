//using dynamic data
//export const IMG_CDN_URL="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
export const logo="https://foodhouse.md/files/elfinder/logo-200x200-en.png"
export const IMG_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
export const FETCH_MENU_URL =
  "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=";

 // export const IMG_CDN_URL =
 // "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

// Image CDN URL for Restaurant Menu
export const ITEM_IMG_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";

// Swiggy API to get Restaurant data with corsproxy
export const swiggy_api_URL =
  "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING";

// Swiggy API to get Restaurant Menu data with corsproxy
export const swiggy_menu_api_URL =
  "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=";
  
  export const MENU_ITEM_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
export const RESTAURANT_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";

  //contain the menu link of each food restaurant
 /*export const restaurantMenuList={
    "Pizza Hut": "https://www.swiggy.com/menu/112782",
    "Govinda's Restaurant":"https://www.swiggy.com/restaurants/govindas-restaurant-raman-reti-vrindavan-mathura-518572",
  "Bharti Foods & Sweets": "https://www.swiggy.com/restaurants/bharti-foods-and-sweets-banke-bihari-colony-hanuman-bagh-mathura-541551",
  "Hira Sweets":"https://www.swiggy.com/restaurants/hira-sweets-chhatikara-vrindavan-locality-mathura-502306",
  "Dosa Plaza":"https://www.swiggy.com/restaurants/dosa-plaza-shankar-vihar-chowk-bazar-mathura-112708",
  "Prince Restaurant":"https://www.swiggy.com/restaurants/prince-restaurant-shankar-vihar-delhi-bypass-mathura-198652",
  "Vadilal Ice Creams":"https://www.swiggy.com/restaurants/vadilal-ice-creams-krishna-nagar-shankar-vihar-mathura-580164",
  "Giani's":"https://www.swiggy.com/restaurants/gianis-govind-nagar-shankar-vihar-mathura-112706",
  "Burger King":"https://www.swiggy.com/restaurants/burger-king-bhuteshwar-road-bsa-degree-college-mathura-570252",
  "Mittal Foods":"https://www.swiggy.com/restaurants/mittal-foods-saraswatikund-shankar-vihar-mathura-446389",
  "Babylon Restaurant":"https://www.swiggy.com/restaurants/babylon-restaurant-shankar-vihar-shri-krishna-janambhoomi-mathura-112000",
  "Pizza And Pizza":"https://www.swiggy.com/restaurants/pizza-and-pizza-vrindavan-locality-mathura-354398",
  "Agrawal Restaurant (Since 1969)":"https://www.swiggy.com/restaurants/agrawal-restaurant-since-1969-service-road-delhi-highway-mathura-510348",
  "Chaat Chaupati":"https://www.swiggy.com/restaurants/chaat-chaupati-chaitanya-vihar-premmandir-mathura-413040",
  "Y & Y Veg Grill":"https://www.swiggy.com/restaurants/y-and-y-veg-grill-omaxe-enternity-vrindavan-mathura-335628",
  "Shankar N Modi Bakers":"https://www.swiggy.com/restaurants/shankar-n-modi-bakers-zone-radha-nagar-krishna-nagar-mathura-355011",
  "Agrawal Bhojanalay":"https://www.swiggy.com/restaurants/agrawal-bhojanalay-shankar-vihar-new-busstand-mathura-112698",
  "Shyama shyam restaurant":"https://www.swiggy.com/restaurants/shyama-shyam-restaurant-chaitanya-vihar-vrindavan-locality-mathura-165445",
  
  }
  */
const restaurantList = [
    {
      "info": {
        "id": "713073",
        "name": "Chicago Pizza",
        "cloudinaryImageId": "847bf081531b0738eeabfa8eb8ef77e0",
        "locality": "Lalit grace plaza",
        "areaName": "bhuteswar road",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Fast Food",
          "Pizzas"
        ],
        "feeDetails": {
          "restaurantId": "713073",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 900
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 900
        },
        "parentId": "60277",
        "avgRatingString": "NEW",
        "sla": {
          "deliveryTime": 19,
          "serviceability": "SERVICEABLE",
          "slaString": "19 mins",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-09 01:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "ABOVE ₹1500",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-820feb03-e2b0-4423-b9eb-9d8f89f67431"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/chicago-pizza-lalit-grace-plaza-bhuteswar-road-mathura-713073",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "582769",
        "name": "Food Court",
        "cloudinaryImageId": "edof4hfsr4napgpdnjj4",
        "locality": "Dampier Nagar",
        "areaName": "Shankar_Vihar",
        "costForTwo": "₹100 for two",
        "cuisines": [
          "Indian"
        ],
        "avgRating": 3.9,
        "veg": true,
        "feeDetails": {
          "restaurantId": "582769",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 900
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 900
        },
        "parentId": "9659",
        "avgRatingString": "3.9",
        "totalRatingsString": "50+",
        "sla": {
          "deliveryTime": 28,
          "lastMileTravel": 0.5,
          "serviceability": "SERVICEABLE",
          "slaString": "28 mins",
          "lastMileTravelString": "0.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-08 22:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-820feb03-e2b0-4423-b9eb-9d8f89f67431"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/food-court-dampier-nagar-shankar-vihar-mathura-582769",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "726012",
        "name": "The Belgian Waffle Co.",
        "cloudinaryImageId": "2e42bde2a2229b2f21bccfc4b64ef7ca",
        "locality": "Bhuteswar Road",
        "areaName": "Dwarikapuri",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Waffle",
          "Desserts",
          "Ice Cream"
        ],
        "avgRating": 4.2,
        "veg": true,
        "feeDetails": {
          "restaurantId": "726012",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 900
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 900
        },
        "parentId": "2233",
        "avgRatingString": "4.2",
        "totalRatingsString": "10+",
        "sla": {
          "deliveryTime": 24,
          "lastMileTravel": 0.5,
          "serviceability": "SERVICEABLE",
          "slaString": "24 mins",
          "lastMileTravelString": "0.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-08 23:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-820feb03-e2b0-4423-b9eb-9d8f89f67431"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-bhuteswar-road-dwarikapuri-mathura-726012",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "676805",
        "name": "Hotel Taj",
        "cloudinaryImageId": "697f82a44ce19e4ef51c9c93dd38bdf3",
        "locality": "Sonkh Road",
        "areaName": "Shankar_Vihar",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "North Indian",
          "Seafood"
        ],
        "avgRating": 3.6,
        "feeDetails": {
          "restaurantId": "676805",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 900
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 900
        },
        "parentId": "20795",
        "avgRatingString": "3.6",
        "totalRatingsString": "50+",
        "sla": {
          "deliveryTime": 23,
          "lastMileTravel": 2.1,
          "serviceability": "SERVICEABLE",
          "slaString": "23 mins",
          "lastMileTravelString": "2.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-08 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-820feb03-e2b0-4423-b9eb-9d8f89f67431"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/hotel-taj-sonkh-road-shankar-vihar-mathura-676805",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "631701",
        "name": "Burger Buddy",
        "cloudinaryImageId": "kl6bxuddumlkordb8rt9",
        "locality": "Geeta Enclave",
        "areaName": "Shankar Vihar",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Burgers",
          "Snacks",
          "Beverages"
        ],
        "avgRating": 3.9,
        "veg": true,
        "feeDetails": {
          "restaurantId": "631701",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 900
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 900
        },
        "parentId": "51230",
        "avgRatingString": "3.9",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 1.2,
          "serviceability": "SERVICEABLE",
          "slaString": "21 mins",
          "lastMileTravelString": "1.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-08 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-820feb03-e2b0-4423-b9eb-9d8f89f67431"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/burger-buddy-geeta-enclave-shankar-vihar-mathura-631701",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "606344",
        "name": "Winni Cakes & More",
        "cloudinaryImageId": "w71vu4mnxqaye3mggtfr",
        "locality": "Govardhan Road\n",
        "areaName": "Shankar Vihar",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Bakery",
          "Desserts",
          "Fast Food"
        ],
        "avgRating": 4.1,
        "veg": true,
        "feeDetails": {
          "restaurantId": "606344",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 900
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 900
        },
        "parentId": "226144",
        "avgRatingString": "4.1",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 1.2,
          "serviceability": "SERVICEABLE",
          "slaString": "21 mins",
          "lastMileTravelString": "1.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-08 22:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-820feb03-e2b0-4423-b9eb-9d8f89f67431"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/winni-cakes-and-more-govardhan-road-shankar-vihar-mathura-606344",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "717197",
        "name": "Momo Shomo",
        "cloudinaryImageId": "578d0ab17d249663db3d714764db9faa",
        "locality": "Mansapuri",
        "areaName": "Shankar_Vihar",
        "costForTwo": "₹198 for two",
        "cuisines": [
          "Indian"
        ],
        "feeDetails": {
          "restaurantId": "717197",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 900
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 900
        },
        "parentId": "21859",
        "avgRatingString": "NEW",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 1,
          "serviceability": "SERVICEABLE",
          "slaString": "30 mins",
          "lastMileTravelString": "1.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-08 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-820feb03-e2b0-4423-b9eb-9d8f89f67431"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/momo-shomo-mansapuri-shankar-vihar-mathura-717197",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "585813",
        "name": "Cake House",
        "cloudinaryImageId": "bhxiidrnmbdbx11c8woh",
        "locality": "Krishna Nagar \n",
        "areaName": "Shankar Vihar",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Bakery",
          "Snacks"
        ],
        "avgRating": 3.5,
        "veg": true,
        "feeDetails": {
          "restaurantId": "585813",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 900
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 900
        },
        "parentId": "8539",
        "avgRatingString": "3.5",
        "totalRatingsString": "20+",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 1.8,
          "serviceability": "SERVICEABLE",
          "slaString": "21 mins",
          "lastMileTravelString": "1.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-08 21:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-820feb03-e2b0-4423-b9eb-9d8f89f67431"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/cake-house-krishna-nagar-shankar-vihar-mathura-585813",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "600497",
        "name": "VIP Pizza",
        "cloudinaryImageId": "a2efd0fd118fa46b6e5b194fe060460f",
        "areaName": "Mathura Locality",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Pizzas",
          "Chinese",
          "Fast Food",
          "Snacks",
          "Beverages"
        ],
        "avgRating": 2.2,
        "veg": true,
        "feeDetails": {
          "restaurantId": "600497",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 900
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 900
        },
        "parentId": "223889",
        "avgRatingString": "2.2",
        "totalRatingsString": "10+",
        "sla": {
          "deliveryTime": 27,
          "lastMileTravel": 1.1,
          "serviceability": "SERVICEABLE",
          "slaString": "27 mins",
          "lastMileTravelString": "1.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-09 01:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹40",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-820feb03-e2b0-4423-b9eb-9d8f89f67431"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/vip-pizza-mathura-locality-mathura-600497",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
  ];
  export default restaurantList;