import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiList = () => {
  const sample = {
    "Products": [
        {
            "name": "Black sequin cropped blazer",
            "prodid": "773694",
            "promotionImage": "c20150310-ONLINE-EXCLUSIVE-ICON-resp-resp",
            "mediaIcon": "c20150310-ONLINE-EXCLUSIVE-ICON-resp-resp",
            "colour": "Black",
            "sizes": "6,8,10,12,14,16,18",
            "altImage": "https://images.riverisland.com/is/image/RiverIsland/black-sequin-cropped-blazer_773694_rollover",
            "dateSort": 140,
            "allImages": [
                "https://images.riverisland.com/is/image/RiverIsland/black-sequin-cropped-blazer_773694_main",
                "https://images.riverisland.com/is/image/RiverIsland/black-sequin-cropped-blazer_773694_rollover",
                "https://images.riverisland.com/is/image/RiverIsland/black-sequin-cropped-blazer_773694_back",
                "https://images.riverisland.com/is/image/RiverIsland/black-sequin-cropped-blazer_773694_alt1",
                "https://images.riverisland.com/is/image/RiverIsland/black-sequin-cropped-blazer_773694_alt2"
            ],
            "swatches": [],
            "trackingCategoriesInfo": {
                "categories": [
                    "women",
                    "Coats & Jackets",
                    "Blazers"
                ]
            },
            "isNewArrival": false,
            "isTrending": true,
            "hasPriceRange": false,
            "cost": "70",
            "wascost": "",
            "costEUR": "94",
            "wascostEUR": "",
            "costWER": "94",
            "wascostWER": "",
            "costUSD": "130",
            "wascostUSD": "",
            "costAUD": "140",
            "wascostAUD": "",
            "costSEK": "979",
            "wascostSEK": "",
            "costWEK": "979",
            "wascostWEK": "",
            "category": "Coats & Jackets",
            "fit": "Main Collection",
            "design": "Plain",
            "collections": "Clothing"
        },
        {
            "name": "Black sequin wide leg trousers",
            "prodid": "773695",
            "promotionImage": "c20150310-ONLINE-EXCLUSIVE-ICON-resp-resp",
            "mediaIcon": "c20150310-ONLINE-EXCLUSIVE-ICON-resp-resp",
            "colour": "Black",
            "sizes": "6,8,10,12,14,16,18",
            "altImage": "https://images.riverisland.com/is/image/RiverIsland/black-sequin-wide-leg-trousers_773695_rollover",
            "dateSort": 121,
            "allImages": [
                "https://images.riverisland.com/is/image/RiverIsland/black-sequin-wide-leg-trousers_773695_main",
                "https://images.riverisland.com/is/image/RiverIsland/black-sequin-wide-leg-trousers_773695_rollover",
                "https://images.riverisland.com/is/image/RiverIsland/black-sequin-wide-leg-trousers_773695_back",
                "https://images.riverisland.com/is/image/RiverIsland/black-sequin-wide-leg-trousers_773695_alt1",
                "https://images.riverisland.com/is/image/RiverIsland/black-sequin-wide-leg-trousers_773695_alt2"
            ],
            "swatches": [],
            "trackingCategoriesInfo": {
                "categories": [
                    "women",
                    "Trousers",
                    "Wide Leg Trousers"
                ]
            },
            "isNewArrival": false,
            "isTrending": true,
            "hasPriceRange": false,
            "cost": "55",
            "wascost": "",
            "costEUR": "73",
            "wascostEUR": "",
            "costWER": "73",
            "wascostWER": "",
            "costUSD": "102",
            "wascostUSD": "",
            "costAUD": "110",
            "wascostAUD": "",
            "costSEK": "779",
            "wascostSEK": "",
            "costWEK": "779",
            "wascostWEK": "",
            "category": "Trousers",
            "fit": "Main Collection",
            "design": "Plain",
            "collections": "Clothing"
        },
        {
            "name": "Beige ribbed tie front jumper dress",
            "prodid": "775728",
            "promotionImage": "",
            "mediaIcon": "",
            "colour": "Beige",
            "sizes": "6,8,10,12,14,16,18",
            "altImage": "https://images.riverisland.com/is/image/RiverIsland/beige-ribbed-tie-front-jumper-dress_775728_rollover",
            "dateSort": 0,
            "allImages": [
                "https://images.riverisland.com/is/image/RiverIsland/beige-ribbed-tie-front-jumper-dress_775728_main",
                "https://images.riverisland.com/is/image/RiverIsland/beige-ribbed-tie-front-jumper-dress_775728_rollover",
                "https://images.riverisland.com/is/image/RiverIsland/beige-ribbed-tie-front-jumper-dress_775728_back",
                "https://images.riverisland.com/is/image/RiverIsland/beige-ribbed-tie-front-jumper-dress_775728_alt1",
                "https://images.riverisland.com/is/image/RiverIsland/beige-ribbed-tie-front-jumper-dress_775728_alt2"
            ],
            "swatches": [
                {
                    "productId": "775728",
                    "image": "https://images.riverisland.com/is/image/RiverIsland/beige-ribbed-tie-front-jumper-dress_775728_swatch"
                },
                {
                    "productId": "775730",
                    "image": "https://images.riverisland.com/is/image/RiverIsland/775730_swatch"
                },
                {
                    "productId": "775729",
                    "image": "https://images.riverisland.com/is/image/RiverIsland/775729_swatch"
                }
            ],
            "trackingCategoriesInfo": {
                "categories": [
                    "women",
                    "Dresses",
                    "Jumper Dresses"
                ]
            },
            "isNewArrival": false,
            "isTrending": false,
            "hasPriceRange": false,
            "cost": "38",
            "wascost": "",
            "costEUR": "51",
            "wascostEUR": "",
            "costWER": "51",
            "wascostWER": "",
            "costUSD": "71",
            "wascostUSD": "",
            "costAUD": "76",
            "wascostAUD": "",
            "costSEK": "549",
            "wascostSEK": "",
            "costWEK": "549",
            "wascostWEK": "",
            "category": "Dresses,Knitwear",
            "fit": "Main Collection",
            "design": "Plain",
            "collections": "Clothing"
        }
    ]
}
  const [data, setProducts] = useState(null)

  const getProducts = async () => {
    // const productList = await axios.get('https://static-r2.ristack-3.nn4maws.net/v1/plp/en_gb/2506/products.json', {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Headers': 'X-Requested-With'
    //   }
    // });
    // setProducts(productList.data);
    setProducts(sample);
    console.log('sample: '+JSON.stringify(data))
   };
 
  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div>
        <h1>ApiList</h1>
        {/* <div><p>{data}</p></div> */}
        <p>{data.Products.map(product => <div>{product.name}</div>)}</p>
    </div>
  );
};

export default ApiList;
