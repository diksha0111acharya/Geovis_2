const imagesData = [
    {
        id: 'place1',
        imageURL: 'Images/Arunachala.png',
        description: 'Arunachala Temple in Thiruvannamalai, Tamil Nadu, dedicated to Lord Shiva, is revered for its association with the sacred Arunachala Hill. The temple\'s architecture blends Dravidian and Chola styles, featuring a towering gopuram. Pilgrims undertake the Girivalam, a 14-kilometer circumambulation around the hill, seeking spiritual solace. The divine aura attracts devotees and tourists alike, with the best time to visit during the winter months, especially during the Karthigai Deepam festival in November or December.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Chennai, Tamil Nadu</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Chennai International Airport - 170 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Chennai - 200 Kilometers via NH 179B/NH32</li>
                <li><img src="icons/train.png" alt="Train Icon"> Thiruvannamalai Railway Station - Within Town Limits</li>
            </ul>
        `
    },
    {
        id: 'place2',
        imageURL: 'Images/Asirgarh_Fort.png',
        description: 'Asirgarh Fort, near Burhanpur in Madhya Pradesh, dates back to the 9th century and gained prominence in medieval times. Witnessing the rule of various dynasties, including the Mughals and Marathas, it showcases a blend of architectural styles. Explore its stone walls, gateways, and labyrinthine layout, reflecting its historical', 
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Bhopal, Madhya Pradesh</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Devi Ahilya Bai Holkar Airport, Indore - 172 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Indore - 165 Kilometers via Khandwa-Indore Rd</li>
                <li><img src="icons/train.png" alt="Train Icon"> Burhanpur Railway Station - 20 Kilometers</li>
            </ul>
        `
    },
    {
        id: 'place3',
        imageURL: 'Images/Athirappilly_Falls.png',
        description: 'Athirappilly Falls in Kerala, often likened to the "Niagara of India," is a majestic 80-foot waterfall on the Chalakudy River. A sought-after filming location, it\'s nestled in the Western Ghats, a UNESCO World Heritage Site, known for biodiversity. Best visited during the monsoon from June to September, the falls exhibit their fullest splendor, surrounded by lush greenery, though caution is needed due to slippery conditions.',
        to_get: `
           
            <ul>
                <li><img src="icons/unesco.png" alt="UNESCO Hertigae"> UNESCO Heritage site</li>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Thiruvananthapuram, Kerala</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Cochin International Airport - 45 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Kochi - 72 Kilometers via Kochi-Salem Hwy</li>
                <li><img src="icons/train.png" alt="Train Icon"> Chalakudy Railway Station - 30 Kilometers</li>
            </ul>
        `
    },
    {
        id: 'place4',
        imageURL: 'Images/Badi_Lake.png',
        description: 'Badi Lake, also known as Badi Talab or Jiyan Sagar, is a serene artificial lake on the outskirts of Udaipur. Surrounded by lush greenery and the Aravalli Hills, it provides a tranquil atmosphere for visitors interested in unwinding, photography, or picnicking. Built in the late 17th century by Maharana Raj Singh I, the lake has historical significance, addressing water scarcity in the region and supplying water to Udaipur. The best time to visit is during the winter months (October to March) for pleasant weather and outdoor activities, while the monsoon season (July to September) brings lush greenery but heavy rainfall.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Jaipur, Rajasthan</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Maharana Pratap Airport, Udaipur - 30 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Udaipur - 12 Kilometers via Badi Lake Rd</li>
                <li><img src="icons/train.png" alt="Train Icon"> Udaipur Railway Station - 10 Kilometers</li>
            </ul>
        `
    },
    {
        id: 'place5',
        imageURL: 'Images/Baneshwar_Temple.png',
        description: 'Baneshwar Temple in Bhor, Maharashtra, dedicated to Lord Shiva, stands out for its unique architecture and intricate sculptures. The temple provides a serene setting for introspection and reverence. Best time to visit: October to March, when the weather is pleasant for exploration. Summers can be hot, and monsoons (June to September) may bring heavy rainfall, affecting travel plans.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Mumbai, Maharashtra</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Pune International Airport - 50 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Pune - 36 Kilometers via NH 48</li>
                <li><img src="icons/train.png" alt="Train Icon"> Pune Railway Station - 40 Kilometers</li>
            </ul>
        `
    },
    {
        id: 'place6',
        imageURL: 'Images/Barachukki_Falls.png',
        description: 'Barachukki Falls, near Shivanasamudra, Karnataka, is a striking pair of waterfalls formed by the Kaveri River. Barachukki is wider, while Gaganachukki is taller. Visitors can enjoy both segments from different viewpoints and engage in activities like trekking and nature photography. Best visited from September to February for pleasant weather, although the monsoon season (June to August) showcases the falls',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Bengaluru, Karnataka</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Kempegowda International Airport, Bengaluru - 180 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Bengaluru - 137 Kilometers via Bengaluru - Mysuru Expy</li>
                <li><img src="icons/train.png" alt="Train Icon"> Maddur Railway Station - 60 Kilometers</li>
            </ul>
        `
    },
    {
        id: 'place7',
        imageURL: 'Images/Bawangaja.png',
        description: 'Bawangaja in Madhya Pradesh is a revered Jain pilgrimage site known for its 84-foot statue of Lord Rishabhanatha, carved from a single granite rock. A significant destination for Jain devotees, it offers intricate craftsmanship and a spiritual atmosphere. The serene surroundings enhance the pilgrimage experience, making it ideal to visit during the winter months (October to February) for pleasant weather and outdoor exploration. Monsoon season (June to September) is less advisable due to heavy rainfall.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Bhopal, Madhya Pradesh</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Devi Ahilya Bai Holkar Airport, Indore - 215 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Indore - 200 Kilometers via NH 347B and NH52</li>
                <li><img src="icons/train.png" alt="Train Icon"> Barwani Railway Station - 40 Kilometers</li>
            </ul>
        `
    },
    {
        id: 'place8',
        imageURL: 'Images/Bhaja_Caves.png',
        description: 'Bhaja Caves near Pune, Maharashtra, dating back to the 2nd century BCE, feature 18 rock-cut caves showcasing Buddhist monastic architecture. Noteworthy for intricately carved chaitya halls and viharas, these caves also house exquisite sculptures and inscriptions. Serving as meditation centers, some caves contain stupas and carvings of Buddhist deities. Cave 12 stands out with its grand chaitya hall and stupa. Surrounded by lush greenery, Bhaja Caves offer a serene escape with historical significance. The best time to visit is from October to March for pleasant weather. Monsoons (June to September) can make the terrain challenging.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Pune, Maharashtra</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Pune Airport - 60 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Pune - 60 Kilometers via NH 48 and Mumbai - Pune Hwy</li>
                <li><img src="icons/train.png" alt="Train Icon"> Lonavala Railway Station - 15 Kilometers</li>
            </ul>
        `
    },
    {
        id: 'place9',
        imageURL: 'Images/Bishnupur.png',
        description: 'Bishnupur, the "Temple Town" in West Bengal, is renowned for its terracotta temples, a legacy of the Malla dynasty\'s patronage. Notable structures like Rasmancha, Jor Bangla, and Madan Mohan showcase intricate terracotta artwork depicting Hindu mythology. The town is also famous for Baluchari sarees. Visit during the pleasant winter months (October to March) to explore its rich heritage, avoiding the monsoon season (June to September).',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Kolkata, West Bengal</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Netaji Subhas Chandra Bose International Airport, Kolkata - 140 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Kolkata - 142 Kilometers via SH2</li>
                <li><img src="icons/train.png" alt="Train Icon"> Bishnupur Station - Within Town Limits</li>
            </ul>
        `
    },
    {
        id: 'place10',
        imageURL: 'Images/Black_Taj_Mahal.png',
        description: 'The Black Taj Mahal, or "Rauza," in Burhanpur, Madhya Pradesh, is a semi-finished cenotaph meant to mirror the Taj Mahal in Agra. Constructed during the Mughal era, it features unique black stone architecture, distinct from the white marble Taj Mahal. The monument remains incomplete, sparking historical intrigue and legends. Visit during October to March for pleasant weather.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Bhopal, Madhya Pradesh</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Devi Ahilya Bai Holkar Airport, Indore - 190 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Indore - 181 Kilometers via Indore-Icchapur Hwy</li>
                <li><img src="icons/train.png" alt="Train Icon"> Burhanpur Railway Station - Within Town Limits</li>
            </ul>
        `
    },
    {
        id: 'place11',
        imageURL: 'Images/Borra_Caves.png',
        description: 'Borra Caves, located in Andhra Pradesh\'s Ananthagiri Hills, are a marvel known for unique stalactite and stalagmite formations formed over millions of years. The caves offer a mesmerizing, otherworldly environment. Apart from geological wonders, they hold religious significance, featuring a Shiva Lingam. Explore chambers like Simhadwara and Gupha Nilimbinga with guided tours to learn about history and folklore. The best time to visit is during the cool and pleasant winter months, from October to March, while monsoons and summers may pose challenges for exploration.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Amravati, Andhra Pradesh</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Visakhapatnam Airport - 90 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Visakhapatnam - 90 Kilometers via Araku-Visakhapatnam Rd</li>
                <li><img src="icons/train.png" alt="Train Icon"> Borra Guhalu Railway Station - 1 Kilometer</li>
            </ul>
        `
    },
    {
        id: 'place12',
        imageURL: 'Images/Butterfly_Beach.png',
        description: 'Butterfly Beach in Goa, a serene and secluded gem, is named for its occasional butterfly sightings. With pristine shores, clear waters, and lush greenery, it\'s a haven for nature lovers and photographers. The beach, known for its tranquility, is best visited from October to March, avoiding the monsoon season for calm seas and pleasant weather',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Panaji, Goa</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Dabolim Airport, Goa - 60 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Panaji - 69 Kilometers via NH 66 and Panvel-Kanyakumari Hwy</li>
                <li><img src="icons/train.png" alt="Train Icon"> Margao Railway Station - 35 Kilometers</li>
            </ul>
        `
    },
    {
        id: 'place13',
        imageURL: 'Images/Buxa_Tiger_Reserve.png',
        description: 'Buxa Tiger Reserve in West Bengal, part of the Eastern Himalayas, is a biodiversity hotspot known for its lush forests and diverse wildlife, including endangered species like the Royal Bengal Tiger and red panda. Declared a tiger reserve in 1983, it covers approximately 760 square kilometers and offers opportunities for guided wildlife safaris and trekking, such as the Buxa Fort trek, providing panoramic views. With over 300 bird species, it\'s a paradise for birdwatchers. The best time to visit is during the winter months from November to February for pleasant weather and wildlife sightings.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Kolkata, West Bengal</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Bagdogra Airport - 170 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Siliguri - 157 Kilometers via NH 27</li>
                <li><img src="icons/train.png" alt="Train Icon"> Alipurduar Junction - 15 Kilometers</li>            
            </ul>
        `
    },
    {
        id: 'place14',
        imageURL: 'Images/Chitrakote_Falls.png',
        description: 'Chitrakote Falls in Chhattisgarh, India, is known as the "Niagara Falls of India." Formed by the Indravati River, it\'s a horseshoe-shaped cascade, stretching 300 meters wide and dropping 30 meters during the monsoon. Best visited from July to October for its majestic display. Exercise caution during the monsoon. The falls offer a tranquil retreat and are surrounded by tribal villages and other waterfalls.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Raipur, Chhattisgarh</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Swami Vivekananda Airport, Raipur - 300 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Raipur - 292 Kilometers via NH 30</li>
                <li><img src="icons/train.png" alt="Train Icon"> Jagdalpur Railway Station - 35 Kilometers</li>                      
            </ul>
        `
    },
    {
        id: 'place15',
        imageURL: 'Images/Chittorgarh_Fort.png',
        description: 'Chittorgarh Fort in Rajasthan is a historic marvel symbolizing Rajput valor. Once the capital of Mewar, it boasts tales of legendary warriors and a blend of Rajput and Mughal architectural styles. Key structures include the Vijay Stambh and Kirti Stambh. Beyond its historical importance, the fort is culturally significant with pilgrimage sites like the Kalika Mata Temple. Visit during October to March for ideal weather.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Jaipur, Rajasthan</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Maharana Pratap Airport, Udaipur - 100 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Jaipur - 316 Kilometers via NH 48</li>
                <li><img src="icons/train.png" alt="Train Icon"> Chittorgarh Railway Station - Within Town Limits</li>                          
            </ul>
        `
    },
    {
        id: 'place16',
        imageURL: 'Images/Chunchi_Falls.png',
        description: 'Chunchi Falls in Karnataka is a tranquil oasis surrounded by lush greenery and rocky terrain. Known for its natural beauty, the falls offer a serene escape for picnics and relaxation. Adventure seekers can explore trekking opportunities in the rocky surroundings. Best visited during the monsoon (June to September), exercise caution due to slippery rocks and strong water currents.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Bengaluru, Karnataka</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Kempegowda International Airport, Bengaluru - 131 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Bengaluru - 90 Kilometers via NH948</li>
                <li><img src="icons/train.png" alt="Train Icon"> KSR Bengaluru Station - 90 Kilometers</li>                                  
            </ul>
        `
    },
    {
        id: 'place17',
        imageURL: 'Images/Daman_Quarry_Lake.png',
        description: 'Daman Quarry Lake, near Gujarat, is an off-beat gem with teal blue water from limestone quarrying, popular for pre-wedding photoshoots. Explore historical sites like Fort of St. Jerome and enjoy Devka and Jampore Beaches. Avoid swimming due to alkaline water. Visit in pleasant winters (October to March) and catch the Daman Festival in February for a cultural experience.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Daman, Daman and Diu</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Chhatrapati Shivaji Maharaj Airport, Mumbai - 172 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Mumbai - 179 Kilometers via NH 48</li>
                <li><img src="icons/train.png" alt="Train Icon"> Vapi Railway Station - 12 Kilometers</li>                                             
            </ul>
        `
    },
    {
        id: 'place18',
        imageURL: 'Images/Dawki_River.png',
        description: 'Dawki, a charming town in Meghalaya, is celebrated for its crystal-clear waters and stunning natural surroundings. The Dawki River\'s transparency attracts boating and kayaking enthusiasts, creating a mesmerizing experience. The iconic suspension bridge provides panoramic views, making it a favorite spot for photography. Nestled amid lush green hills, Dawki offers a tranquil environment, making it an ideal destination for nature lovers. The best time to visit is during the winter months (October to March) for pleasant weather and enjoyable water activities, while the monsoon season (June to September) brings challenges due to increased river water levels.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Shillong, Meghalaya</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Gopinath Bordoloi Airport, Guwahati - 170 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Shillong - 80 Kilometers via NH206</li>
                <li><img src="icons/train.png" alt="Train Icon"> Guwahati Railway Station - 170 Kilometers</li>                                             
            </ul>
        `
    },
    {
        id: 'place19',
        imageURL: 'Images/Dirang.png',
        description: 'Dirang, a picturesque town in Arunachal Pradesh, captivates with its stunning landscapes, lush green valleys, and cultural richness. The Dirang River flows through, enhancing the natural charm. Fruit orchards and attractions like Dirang Dzong and Sangti Valley add to its visual appeal. Dirang also houses Buddhist monasteries, providing spiritual and cultural significance. The best times to visit are spring and autumn, from March to June and September to November, for pleasant weather and clear skies. Winters can be extremely cold, so it\'s advisable to avoid December to February.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Itanagar, Arunachal Pradesh</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Salonibari Airport, Tezpur - 140 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Tezpur - 192 Kilometers via NH13 and Chariduar-Tawang Rd</li>
                <li><img src="icons/train.png" alt="Train Icon"> Rangapara North Junction - 120 Kilometers</li>                                                    
            </ul>
        `
    },
    {
        id: 'place20',
        imageURL: 'Images/Double_Living_Root_Bridge.png',
        description: 'Discover the magical world of Meghalaya\'s living Root bridges, partially natural and man-made wonders nestled in dense forests. The journey unveils breathtaking landscapes and mesmerizing trails, leading to a two-tiered living bridge developed over 15 years. The surrounding village reflects environmental reverence, creating a magical ambiance with waterfalls, natural pools, vibrant butterflies, and echoes of ancient wisdom. Optimal visits occur during the post-monsoon and winter months (October to February) for dry and pleasant weather.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Shillong, Meghalaya</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Gopinath Bordoloi International Airport, Guwahati - 175 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Shillong - 63 Kilometers, via SH-3</li>
                <li><img src="icons/train.png" alt="Train Icon"> Guwahati Station - 154 Kilometers</li>                                                            
            </ul>
        `
    },
    {
        id: 'place21',
        imageURL: 'Images/Dudhwa_National_Park.png',
        description: 'Dudhwa National Park in Uttar Pradesh boasts rich biodiversity, including the Indian one-horned rhinoceros and Bengal tiger. Its varied landscape of grasslands, wetlands, and dense forests provides an ideal habitat. Visitors can get up close to wildlife through jeep and elephant safaris, enjoying sightings of both megafauna and diverse bird species. The Dudhwa Tiger Reserve offers tiger-spotting opportunities. The best time to visit is from November to May, with pleasant weather and increased wildlife activity. The park is closed during the monsoon season (June to October) due to heavy rainfall.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Lucknow, Uttar Pradesh</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Lucknow Airport - 245 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Lucknow - 215 Kilometers via NH 30 and SH 90</li>
                <li><img src="icons/train.png" alt="Train Icon"> Dudhwa Railway Station - Within Park Limits</li>                                                     
            </ul>
        `
    },
    {
        id: 'place22',
        imageURL: 'Images/Gorumara_National_Park.png',
        description: 'Gorumara National Park in West Bengal spans 79.99 sq km in the Eastern Himalayan foothills, boasting diverse landscapes from lush forests to expansive grasslands. Home to varied flora and fauna, including Asian elephants, Indian rhinoceroses, and a plethora of bird species, the park is a haven for wildlife enthusiasts. Jungle safaris, led by park authorities, provide immersive experiences, allowing visitors to observe the park\'s rich biodiversity.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Kolkata, West Bengal</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Bagdogra Airport - 75 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Siliguri - 70 Kilometers via Gajol Doba Rd</li>
                <li><img src="icons/train.png" alt="Train Icon"> New Jalpaiguri Railway Station - 70 Kilometers</li>                                     
            </ul>
        `
    },
    {
        id: 'place23',
        imageURL: 'Images/Gurez_Valley.png',
        description: 'Gurez Valley, nestled at an average altitude of 8,000 feet, is a hidden gem surrounded by snow-capped mountains. With diverse wildlife, including the Himalayan brown bear and snow leopard, the valley offers unique vistas and natural beauty. The Kishanganga River flows through, adding to its charm. Gurez is a surreal fairyland with intensely blue skies, vibrant green pine trees, and a river that changes from turquoise to silver. The best time to visit is during summer and early autumn, from late May to September, offering favorable weather for exploring the stunning landscapes.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Srinagar, Jammu & Kashmir</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Srinagar Airport - 123 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Srinagar - 123 Kilometers, via Jammu-Srinagar Highway</li>
                <li><img src="icons/train.png" alt="Train Icon"> Srinagar Station - 123 Kilometers</li>                    
            </ul>
        `
    },
    {
        id: 'place24',
        imageURL: 'Images/Hampi.png',
        description: 'Hampi, Karnataka, the former capital of the Vijayanagara Empire, is an archaeological gem with stunning temples and monuments showcasing Hindu and Islamic architecture. Notable sites include the Virupaksha Temple, Vittala Temple, Hazara Rama Temple, and Lotus Mahal. Virupaksha Temple, dedicated to Lord Shiva, features vibrant ceremonies and an annual chariot festival. Highlights also include the Hazara Rama Temple, Achyutaraya Temple, and trekking to Matanga Hill for panoramic views. The best time to visit is during winter (October to March) for pleasant weather.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Bengaluru, Karnataka</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Vidyanagar Airport - 40 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Hospet - 13 Kilometers via SH 49 and Hampi Rd</li>
                <li><img src="icons/train.png" alt="Train Icon"> Hospet Junction - 14 Kilometers</li>                                                    
            </ul>
        `
    },
    {
        id: 'place25',
        imageURL: 'Images/Hirekolale_Lake.png',
        description: 'Hirekolale Lake, nestled amidst green mountains in Chikmagalur, is a scenic delight for travelers. The beauty intensifies during sunset, creating a magical atmosphere. The drive to the lake offers a picturesque setting in the Western Ghats. A haven for photography lovers, it"s an ideal spot for sunrise and offers exceptional views of Mullayanagiri Hills. The best time to visit is from September to February, post-monsoon and winter, when the weather is cool, pleasant, and the landscape is lush and green.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Bengaluru, Karnataka</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Mangaluru International Airport - 166 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Bengaluru - 252 Kilometers, via NH75 Highway</li>
                <li><img src="icons/train.png" alt="Train Icon"> Chikmagalur Station - 12.5 Kilometers</li>                                                   
            </ul>
        `
    },
    {
        id: 'place26',
        imageURL: 'Images/Jibhi.png',
        description: 'Jibhi, in Himachal Pradesh\'s Banjar Valley, is a serene nature retreat known for its pristine beauty, trekking trails, and the Tirthan River. Less crowded, it\'s ideal for those seeking tranquility. Accommodations include cozy homestays, offering an authentic Himachali experience. Serving as a gateway to trekking routes, Jibhi is perfect for outdoor enthusiasts, with popular destinations like Jalori Pass. Best times to visit are spring, summer, and autumn.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Shimla, Himachal Pradesh</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Bhuntar Airport, Kullu - 60 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Manali - 101 Kilometers via NH 3 and NH305</li>
                <li><img src="icons/train.png" alt="Train Icon"> Shimla Railway Station - 150 Kilometers</li>                                                      
            </ul>
        `
    },
    {
        id: 'place27',
        imageURL: 'Images/Kalo_Dungar.png',
        description: 'Kalo Dungar, or "Black Hill," stands tall in Gujarat\'s Kutch region, offering panoramic views of the Rann of Kutch and the desert. Named for its dark volcanic rocks, it provides a unique insight into local Kutchi culture in the nearby village of Dhordho. Known for enchanting sunsets, the best time to visit is during the cool winter months from October to March, avoiding scorching summers and monsoon-related road challenges.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Gandhinagar, Gujarat</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Bhuj Airport - 87 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Bhuj - 90 Kilometers via GJ SH 45</li>
                <li><img src="icons/train.png" alt="Train Icon"> Bhuj Railway Station - 86 Kilometers</li>                                                    
            </ul>
        `
    },
    {
        id: 'place28',
        imageURL: 'Images/Karwar.png',
        description: 'Karwar, a coastal town in Karnataka, is known for its beautiful beach with soft golden sands, clear blue waters, and swaying palm trees. Surrounded by the Western Ghats and the Arabian Sea, the beach offers breathtaking views. Activities like swimming, snorkeling, and boat rides are available, and the nearby Kali River provides opportunities for boating and kayaking. With a tranquil ambiance, stunning sunsets, and a soothing sound of waves, Karwar is an ideal spot for relaxation. Best visited during the winter months (October to March) for pleasant weather.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Bengaluru, Karnataka</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Dabolim Airport, Goa - 90 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Panaji - 97 Kilometers via NH 66</li>
                <li><img src="icons/train.png" alt="Train Icon"> Karwar Railway Station - Within Town Limits</li>                                                      
            </ul>
        `
    },
    {
        id: 'place29',
        imageURL: 'Images/Kaziranga_National_Park.png',
        description: 'Kaziranga National Park in Assam is renowned for its Indian one-horned rhinoceros population. A UNESCO World Heritage Site, the park\'s diverse habitats house tigers, elephants, wild water buffaloes, and various bird species. Jeep and elephant safaris provide thrilling wildlife encounters, while observation towers offer strategic viewpoints. The best time to visit is during the winter months from November to April, with December to February being the peak tourist season for optimal wildlife viewing.',
        to_get: `
           
            <ul>
                <li><img src="icons/unesco.png" alt="UNESCO Hertigae"> UNESCO Heritage site</li>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Dispur, Assam</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Gopinath Bordoloi International Airport, Guwahati - 182 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Guwahati - 163 Kilometers via NH 27</li>
                <li><img src="icons/train.png" alt="Train Icon"> Furkating Junction - 75 Kilometers</li>                                                   
            </ul>
        `
    },
    {
        id: 'place30',
        imageURL: 'Images/Koteshwar.png',
        description: 'Koteshwar Mahadev Temple in Gujarat, dedicated to Lord Shiva, offers spiritual solace with its religious and historical significance. Situated on a cliff overlooking the Arabian Sea, the temple\'s simple yet elegant architecture and serene ambiance attract devotees. Best time to visit: October to March. Avoid summer heat and monsoon rains.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Gandhinagar, Gujarat</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Bhuj Airport - 158 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Bhuj - 157 Kilometers via NH 754K</li>
                <li><img src="icons/train.png" alt="Train Icon"> Bhuj Railway Station - 157 Kilometers</li>                                                  
            </ul>
        `
    },
    {
        id: 'place31',
        imageURL: 'Images/Kumarakom.png',
        description: 'Kumarakom, a serene backwater village in Kerala, is famous for its enchanting waterways explored through houseboat cruises. The Kumarakom Bird Sanctuary and Nehru Trophy Boat Race are major attractions. The village also offers Ayurvedic rejuvenation in wellness centers. The ideal time to visit is during the pleasant winter months from October to February.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Thiruvananthapuram, Kerala</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Cochin International Airport - 85 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Kottayam - 16 Kilometers via Kottayam-Kumarakom Rd</li>
                <li><img src="icons/train.png" alt="Train Icon"> Kottayam Railway Station - 16 Kilometers</li>                                                     
            </ul>
        `
    },
    {
        id: 'place32',
        imageURL: 'Images/Kunzum_Pass.png',
        description: 'Kunzum Pass, a high-altitude mountain pass in Himachal Pradesh, stands at 4,590 meters (15,060 feet) above sea level, connecting Kullu Valley with Lahaul Valley. Offering stunning views of the Kunzum Range and surrounding snow-capped peaks, the pass is a haven for nature and photography enthusiasts. Its rugged terrain and proximity to Spiti Valley make it a starting point for high-altitude adventures. The pass is accessible from June to September, with mild weather, while winter months bring snowfall and inaccessibility from October to May.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Shimla, Himachal Pradesh</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Bhuntar Airport, Kullu - 230 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Manali - 107 Kilometers via NH 505 and NH 3</li>
                <li><img src="icons/train.png" alt="Train Icon"> Not Connected by Railways</li>                                                      
            </ul>
        `
    },
    {
        id: 'place33',
        imageURL: 'Images/Kurseong.png',
        description: 'Kurseong, a charming hill station in the Eastern Himalayas of West Bengal, is renowned for its tea gardens, lush landscapes, and serene ambiance. Surrounded by verdant forests and Himalayan mountains, it features tea estates, orchids, and mist-covered hills, making it a haven for nature lovers. Notable attractions include Dow Hill, Victoria Boys" School, Deer Park, and Eagle"s Crag, offering trekking trails for adventure enthusiasts. The best time to visit is during the spring and summer months for pleasant weather. Monsoons bring heavy rainfall, and winters can be cold.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Kolkata, West Bengal</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Bagdogra Airport - 50 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Darjeeling - 30 Kilometers via NH 110</li>
                <li><img src="icons/train.png" alt="Train Icon"> Kurseong Railway Station - Within Town Limits</li>                                                     
            </ul>
        `
    },
    {
        id: 'place34',
        imageURL: 'Images/Lakhpat.png',
        description: 'Lakhpat, in Gujarat\'s Kutch district, is a historic town with a rich past as a trade center. Surrounded by massive fortified walls and the imposing Lakhpat Fort, the town now abandoned, exudes a hauntingly beautiful ambiance. Located in the vast Rann of Kutch desert, it offers breathtaking views, especially during sunrise and sunset. Best visited in winter (October to March) for a comfortable exploration, with November to February being popular due to the Rann Utsav cultural festival.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Gandhinagar, Gujarat</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Bhuj Airport - 140 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Bhuj - 135 Kilometers via NH 754K</li>
                <li><img src="icons/train.png" alt="Train Icon"> Bhuj Railway Station - 135 Kilometers</li>                                                  
            </ul>
        `
    },
    {
        id: 'place35',
        imageURL: 'Images/Lothal.png',
        description: 'Lothal, in Gujarat, stands as a remarkable site of the ancient Indus Valley Civilization, dating back to around 3700 BCE. Noteworthy features include the well-preserved acropolis, lower town, and a remarkable tidal dock – one of the world\'s earliest. Providing insights into urban planning and trade, Lothal\'s dockyard facilitated maritime commerce in beads and pottery. The best time to explore this archaeological marvel is during the comfortable winter months, from October to March.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Gandhinagar, Gujarat</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Sardar Vallabhbhai Patel Airport, Ahmedabad - 85 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Ahmedabad - 76 Kilometers via NH 47</li>
                <li><img src="icons/train.png" alt="Train Icon"> Sanand Railway Station - 71 Kilometers</li>                                                  
            </ul>
        `
    },
    {
        id: 'place36',
        imageURL: 'Images/Madhugiri_Fort.png',
        description: 'Madhugiri Fort, situated in Karnataka\'s Tumkur district, stands as Asia\'s largest monolithic fort, showcasing impressive architecture on a monolithic hill. Characterized by steep rock walls, gateways, and fortifications from various periods, the fort holds a rich history dating back to the 17th century. Trekking to the summit offers thrilling views of the countryside, with the best time to visit being the winter and post-monsoon months for cooler weather. Summers can be hot, and monsoons may pose slippery conditions.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Bengaluru, Karnataka</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Kempegowda International Airport, Bengaluru - 100 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Bengaluru - 107 Kilometers via SH 3 and NH 48</li>
                <li><img src="icons/train.png" alt="Train Icon"> Tumkur Railway Station - 43 Kilometers</li>                                                    
            </ul>
        `
    },
    {
        id: 'place37',
        imageURL: 'Images/Mandarmani_Beach.png',
        description: 'Mandarmani Beach, on the Bay of Bengal, is famed for its serene ambiance and sandy shores. Enjoy breathtaking sunsets, water sports, and a visit to the Fishing Harbor. Indulge in exceptional seafood at local eateries. Best time to visit is from October to March for pleasant weather, avoiding heavy monsoon rains from June to September. Mandarmani is an ideal destination for a peaceful getaway.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Kolkata, West Bengal</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Netaji Subhas Chandra Bose International Airport, Kolkata - 140 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Kolkata - 177 Kilometers via NH 116B and NH16</li>
                <li><img src="icons/train.png" alt="Train Icon"> Contai Station - 16 Kilometers</li>                                                     
            </ul>
        `
    },
    {
        id: 'place38',
        imageURL: 'Images/Mandav.png',
        description: 'Mandu, in Madhya Pradesh, is a historical marvel known for structures like Jahaz Mahal and Hindola Mahal. The site reflects a blend of Afghan and Indian architecture, showcasing its medieval past. Romantic legends, such as that of Baz Bahadur and Rani Roopmati, add mystique to the ambiance. Panoramic views from the Malwa plateau enhance the experience, especially during the post-monsoon season from October to March, making it an ideal time to explore the historical and architectural wonders.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Bhopal, Madhya Pradesh</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Devi Ahilya Bai Holkar Airport, Indore - 100 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Indore - 95 Kilometers via Indore - Dhar Rd</li>
                <li><img src="icons/train.png" alt="Train Icon"> Indore Junction - 95 Kilometers</li>                                                    
            </ul>
        `
    },
    {
        id: 'place39',
        imageURL: 'Images/Mandvi_Beach.png',
        description: 'Mandvi Beach in Gujarat offers serene golden shores along the Arabian Sea, providing a tranquil environment for relaxation and water activities. Highlights include the historic Vijay Vilas Palace, known for its Rajput architecture, and the traditional shipbuilding industry crafting wooden dhows for trade and fishing. The best time to visit is from October to March for pleasant weather.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Gandhinagar, Gujarat</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Bhuj Airport - 63 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Bhuj - 58 Kilometers via Mandvi-Bhuj Hwy</li>
                <li><img src="icons/train.png" alt="Train Icon"> Mandvi Railway Station - Within Town Limits</li>                                                     
            </ul>
        `
    },
    {
        id: 'place40',
        imageURL: 'Images/Marine_National_Park.png',
        description: 'Marine National Park in Gujarat, India\'s first marine sanctuary along the Gulf of Kutch, boasts rich biodiversity with coral reefs and mangrove forests. Recognized as a Ramsar Wetland site, it\'s crucial for marine conservation and serves as a breeding ground for various species. Best time to visit: November to February. Avoid monsoon season due to heavy rainfall.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Gandhinagar, Gujarat</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Jamnagar Airport - 138 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Jamnagar - 142 Kilometers via GJ SH 6 and NH 151A</li>
                <li><img src="icons/train.png" alt="Train Icon"> Dwarka Railway Station - 30 Kilometers</li>                                                     
            </ul>
        `
    },
    {
        id: 'place41',
        imageURL: 'Images/Medak_Cathedral.png',
        description: 'The Medak Cathedral in Telangana is a splendid example of Gothic Revival architecture, built between 1914 and 1924. Its towering spires, intricate stained glass, and expansive dimensions make it one of India\'s largest churches. Serving as the Methodist Church\'s Indian headquarters, it holds historical significance. Best time to visit: October to February, with pleasant weather for exploration. Monsoons (June to September) may impact travel plans due to heavy rainfall.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Hyderabad, Telangana</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Rajiv Gandhi International Airport, Hyderabad - 120 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Hyderabad - 96 Kilometers via NH 44</li>
                <li><img src="icons/train.png" alt="Train Icon"> Medak Railway Station - Within Town Limits</li>                                                    
            </ul>
        `
    },
    {
        id: 'place42',
        imageURL: 'Images/Mineral_Museum.png',
        description: 'The Gargoti Mineral Museum in Malegaon, Maharashtra, is a captivating treasure trove showcasing over 10,000 rare minerals, crystals, and gemstones from around the world. The museum offers a dazzling display of colors, intricate crystal structures, and diverse specimens, including amethyst geodes, quartz crystals, tourmaline, and sapphires. It provides an enriching educational experience with informative explanations about the minerals and their geological significance. Open year-round, the best time to visit is during the cooler and more comfortable months from October to March.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Mumbai, Maharashtra</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Nashik Airport - 40 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Nashik - 30 Kilometers via Nashik - Pune Rd</li>
                <li><img src="icons/train.png" alt="Train Icon"> Nashik Railway Station - 30 Kilometers</li>                                                   
            </ul>
        `
    },
    {
        id: 'place43',
        imageURL: 'Images/Mulki_Temple.png',
        description: 'Venkataramana Temple in Mulki, Karnataka, is a prominent Hindu temple dedicated to Lord Venkataramana. Showcasing traditional South Indian architecture with a striking gopuram adorned with intricate sculptures, the temple offers a spiritual atmosphere, drawing devotees and visitors year-round. The serene ambiance and intricate craftsmanship make it a destination for those seeking spiritual retreats and a glimpse into Hindu architectural heritage.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Bengaluru, Karnataka</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Mangalore International Airport - 24 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Mangalore - 27 Kilometers via NH66</li>
                <li><img src="icons/train.png" alt="Train Icon"> Mangalore Central Railway Station - 30 Kilometers</li>                                                     
            </ul>
        `
    },
    {
        id: 'place44',
        imageURL: 'Images/Naliya_Jain_Temple.png',
        description: 'Naliya Jain Temple, in Gujarat\'s Kutch district, is a magnificent Jain complex with 16 Nagara-style spires and 14 pavilions. Renowned for intricate carvings, especially on the idol of Chandraprabhu, it was built in 1840. A cultural hub in the Abdasa panchtirthi, the temple\'s grandeur and cultural significance make it a must-visit. Best time: October to March, coinciding with the Rann Festival for a cultural experience. Summers are hot, and monsoons can affect accessibility.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Gandhinagar, Gujarat</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Bhuj Airport - 90 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Bhuj - 93 Kilometers via Bhuj-Naliya Hwy</li>
                <li><img src="icons/train.png" alt="Train Icon"> Naliya Railway Station - Within Town Limits</li>                                                     
            </ul>
        `
    },
    {
        id: 'place45',
        imageURL: 'Images/Narasimha_Swamy_Temple.png',
        description: 'The Narasimha Swamy Temple in Mangalagiri, Andhra Pradesh, is a sacred Hindu shrine dedicated to Lord Narasimha, showcasing distinctive Dravidian architecture. It holds immense religious significance, attracting devotees seeking blessings. The temple\'s famous "Panakala Narasimha Swamy Vratam" festival involves a unique jaggery water offering. Visit during the pleasant winter months (October to February) for an enriching cultural experience.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Amaravati, Andhra Pradesh</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Vijayawada International Airport - 30 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Vijayawada - 20 Kilometers via NH16</li>
                <li><img src="icons/train.png" alt="Train Icon"> Vijayawada Railway Station - 20 Kilometers</li>                                                
            </ul>
        `
    },
    {
        id: 'place46',
        imageURL: 'Images/Neemrana_Fort.png',
        description: 'Neemrana Fort Palace, a historic heritage hotel in Rajasthan, showcases a seamless blend of Rajput and Mughal architecture. Dating back to the 15th century, this regal fort-turned-hotel offers luxurious accommodations with a rich history. Guests can relive the past in heritage rooms and suites adorned with period furniture. The fort\'s captivating facades and courtyards provide insights into the opulent lifestyles of Rajput nobility. Once a key trading post and royal residence, Neemrana Fort Palace invites visitors to experience its grandeur. The ideal time to visit is from October to March, offering a pleasant climate for exploration and enjoyment of the fort\'s facilities.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Jaipur, Rajasthan</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Indira Gandhi International Airport, Delhi - 125 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> New Delhi - 117 Kilometers via NH 48</li>
                <li><img src="icons/train.png" alt="Train Icon"> Neemrana Railway Station - Within Town Limits</li>                                                      
            </ul>
        `
    },
    {
        id: 'place47',
        imageURL: 'Images/Neora_Valley.png',
        description: 'Neora Valley National Park in West Bengal, nestled in the Eastern Himalayas, is a biodiverse wilderness celebrated for its rich flora and fauna. Home to rare species like the red panda and clouded leopard, the park features gushing streams, waterfalls, and majestic Himalayan peaks, including Kanchenjunga. Visitors can enjoy the untouched beauty of the Himalayan wilderness, whether interested in wildlife, trekking, or tranquility. The best time to visit is during the spring and autumn months, from March to June and September to December, avoiding the monsoon season for better trekking conditions.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Kolkata, West Bengal</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Bagdogra Airport, Siliguri - 75 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Kalimpong - 36 Kilometers via Rishi Rd</li>
                <li><img src="icons/train.png" alt="Train Icon"> New Jalpaiguri Railway Station - 75 Kilometers</li>                                                      
            </ul>
        `
    },
    {
        id: 'place48',
        imageURL: 'Images/Nubra.png',
        description: 'Nubra Valley, nestled between the Karakoram and Ladakh ranges, is a high-altitude desert renowned for its striking landscapes and unique experiences. Visitors can enjoy camel rides, explore ancient monasteries, and soak in hot springs. Crossing the Khardung La Pass, one of the world\'s highest motorable passes, reveals breathtaking vistas. Enriched by cultural diversity, the valley offers interactions with Ladakhis, Tibetans, and Muslims. The best time to visit is from May to September when the weather is mild. Winters are extremely cold and snowy, rendering the valley inaccessible.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Leh, Ladakh</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Leh Kushok Bakula Rimpochee Airport - 120 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Leh - 100 Kilometers via Khardung La Rd</li>
                <li><img src="icons/train.png" alt="Train Icon"> Not Connected via Railways</li>                                                     
            </ul>
        `
    },
    {
        id: 'place49',
        imageURL: 'Images/Orchha.png',
        description: 'The Orchha Fort Complex in Madhya Pradesh, India, is a majestic ensemble showcasing the architectural brilliance of the Bundela dynasty. The centerpiece is the towering Raj Mahal, a 17th-century palace with exquisite frescoes and a blend of Mughal and Rajput styles. Built to commemorate Emperor Jahangir\'s visit, it offers stunning views of Orchha, adorned with scenes from Indian mythology. The best time to visit is during the winter months (October to March) for pleasant weather.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Bhopal, Madhya Pradesh</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Jhansi Airport - 20 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Jhansi - 16 Kilometers via NH539</li>
                <li><img src="icons/train.png" alt="Train Icon"> Jhansi Railway Station - 15 Kilometers</li>                                                    
            </ul>
        `
    },
    {
        id: 'place50',
        imageURL: 'Images/Pachmarhi.png',
        description: 'Pachmarhi, known as the "Queen of Satpura" in Madhya Pradesh, is a sought-after hill station celebrated for its natural beauty, dense forests, waterfalls, and diverse flora and fauna. Key attractions include Dhoopgarh, Bee Falls, Jatashankar Caves, and Satpura National Park. The town offers a quintessential hill station experience with colonial-era architecture, a pleasant climate, and vibrant local markets. The best time to visit is from September to March, offering ideal weather for outdoor activities and sightseeing.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Bhopal, Madhya Pradesh</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Raja Bhoj Airport, Bhopal - 195 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Bhopal - 210 Kilometers via Gouharganj Rd</li>
                <li><img src="icons/train.png" alt="Train Icon"> Pipariya Railway Station - 50 Kilometers</li>                                                 
            </ul>
        `
    },
    {
        id: 'place51',
        imageURL: 'Images/Pangong_Lake.png',
        description: 'Pangong Lake, or Pangong Tso, is a mesmerizing high-altitude lake in Ladakh, known for its surreal landscape at 4,350 meters above sea level. The lake, stretching 134 kilometers, is surrounded by barren mountains, offering a stark contrast to its deep blue waters. Visitors can engage in activities like camping and trekking, and the best time to visit is during the summer months from May to September. Winters may restrict access due to heavy snowfall.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Leh, Ladakh</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Leh Kushok Bakula Rimpochee Airport - 225 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Leh - 225 Kilometers via Pangong Lake Rd</li>
                <li><img src="icons/train.png" alt="Train Icon"> Not Connected by Railways</li>                                              
            </ul>
        `
    },
    {
        id: 'place52',
        imageURL: 'Images/Pichavaram_Forest.png',
        description: 'Pichavaram Mangrove Forest in Tamil Nadu is a vital wetland with dense vegetation and intricate waterways, crucial for coastal protection. Boat tours offer a serene exploration, and the site is an ecotourism hotspot with sustainable practices. Visit during November to February for pleasant weather. Monsoon season from June to September is not recommended.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Chennai, Tamil Nadu</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Chennai International Airport - 235 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Chennai - 243 Kilometers via NH32</li>
                <li><img src="icons/train.png" alt="Train Icon"> Chidambaram Railway Station - 70 Kilometers</li>                                               
            </ul>
        `
    },
    {
        id: 'place53',
        imageURL: 'Images/Pingleshwar_Beach.png',
        description: 'Pingleshwar Beach, in Gujarat\'s Kutch district, is a serene coastal haven with soft golden sands and calm Arabian Sea waters. Named after the Shri Pingleshwar Temple, dedicated to Lord Shiva, it provides a tranquil atmosphere and spiritual touch. The beach\'s picturesque setting is perfect for relaxation, beachcombing, and birdwatching, especially during sunrise and sunset. Best visited in the winter months (October to March) for pleasant weather and a peaceful beach experience.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Gandhinagar, Gujarat</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Bhuj Airport - 101 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Bhuj - 96 Kilometers via Naliya-Kothara-Bhuj Hwy</li>
                <li><img src="icons/train.png" alt="Train Icon"> Bhuj Railway Station - 96 Kilometers</li>                                              
            </ul>
        `
    },
    {
        id: 'place54',
        imageURL: 'Images/Querim_Beach.png',
        description: 'Querim Beach, or Keri Beach, in northern Goa, is a serene and less-explored coastal retreat, offering tranquility away from the bustling crowds. With a pristine shoreline, clear waters, and picturesque sunsets, it provides a quiet escape. Ideal for those seeking a peaceful getaway, the best time to visit is during the mild winter months from November to February, while the monsoon season from June to September is best avoided',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Panaji, Goa</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Dabolim Airport - 60 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Mapusa - 35 Kilometers via NH 66</li>
                <li><img src="icons/train.png" alt="Train Icon"> Pernem Railway Station - 15 Kilometers</li>                                              
            </ul>
        `
    },
    {
        id: 'place55',
        imageURL: 'Images/Rajgir.png',
        description: 'Rajgir in Bihar, India, is rich in cultural and religious heritage. Gridhakuta Peak, where Buddha delivered sermons, offers breathtaking views. The Vishwa Shanti Stupa, symbolizing world peace, is serene for meditation. Son Bhandar Caves, dating back to the 3rd or 4th century CE, hold Jain significance. Visit from October to March for pleasant weather; summers can be hot, and the monsoon season brings heavy rainfall.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Patna, Bihar</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Gaya Airport - 70 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Patna - 92 Kilometers via NH 431</li>
                <li><img src="icons/train.png" alt="Train Icon"> Rajgir Railway Station - Within Town Limits</li>                                                 
            </ul>
        `
    },
    {
        id: 'place56',
        imageURL: 'Images/Ranakpur.png',
        description: 'Ranakpur Temple, or Chaumukha Temple, in Rajasthan, is a revered Jain temple dedicated to Lord Adinath. Renowned for its intricate marble carvings, the temple features over 1,444 uniquely carved pillars depicting mythological scenes. The play of light creates a mesmerizing effect. The facade boasts ornate spires and floral designs. With a tranquil ambiance, the temple is ideal for meditation. The best time to visit is during the winter months (October to March) for a pleasant exploration of its spiritual and architectural richness.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Jaipur, Rajasthan</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Maharana Pratap Airport, Udaipur - 90 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Udaipur - 94 Kilometers via RJ SH 32 and NH 27</li>
                <li><img src="icons/train.png" alt="Train Icon"> Falna Railway Station - 30 Kilometers</li>                             
            </ul>
        `
    },
    {
        id: 'place57',
        imageURL: 'Images/Ranthambore.png',
        description: 'Ranthambore National Park in Rajasthan, spanning 1,334 sq km, is celebrated for its rich biodiversity and historical significance. Once a royal hunting ground, it now serves as a protected area and a prominent tiger reserve. The park\'s rugged terrain offers safari drives, providing a chance to witness Bengal tigers, leopards, sloth bears, and diverse bird species. Ranthambore\'s landscape features dense forests, rolling hills, and historic structures, including the 10th-century Ranthambore Fort, making it a unique blend of wildlife and historical heritage.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Jaipur, Rajasthan</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Jaipur International Airport - 160 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Jaipur - 164 Kilometers via NH52</li>
                <li><img src="icons/train.png" alt="Train Icon"> Sawai Madhopur Railway Station - 10 Kilometers</li>                                              
            </ul>
        `
    },
    {
        id: 'place58',
        imageURL: 'Images/Reverse_Waterfall.png',
        description: 'Naneghat Reverse Waterfall, in the Western Ghats, exhibits a unique phenomenon during the monsoon (June-September). Strong winds push rainwater upward, creating a captivating reverse waterfall illusion. Historically significant as an ancient trade route, Naneghat offers lush green surroundings and draws nature enthusiasts. Best visited during the monsoon, travelers should check weather conditions for accessibility in heavy rain.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Mumbai, Maharashtra</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Chhatrapati Shivaji Maharaj International Airport, Mumbai - 171 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Mumbai - 163 Kilometers via NH61</li>
                <li><img src="icons/train.png" alt="Train Icon"> Kalyan Junction - 100 Kilometers</li>                                                
            </ul>
        `
    },
    {
        id: 'place59',
        imageURL: 'Images/Rewalsar.png',
        description: 'Rewalsar, a sacred town in Himachal Pradesh, is revered by Hindus, Buddhists, and Sikhs. The heart of the town is the miraculous Rewalsar Lake, surrounded by shrines and monasteries. Known for its religious significance, Rewalsar houses Hindu temples, Buddhist monasteries, and a Sikh gurudwara. Guru Padmasambhava\'s abode adds to its spiritual importance. The town offers nature walks and hosts the vibrant Tsechu Festival. Visit during April to June and September to November for pleasant weather. Monsoons bring heavy rainfall, and winters can be cold.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Shimla, Himachal Pradesh</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Kullu Airport - 66 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Mandi - 23 Kilometers via Mandi-Rewalsar Rd</li>
                <li><img src="icons/train.png" alt="Train Icon"> Kiratpur Sahib Railway Station - 102 Kilometers</li>                                               
            </ul>
        `
    },
    {
        id: 'place60',
        imageURL: 'Images/Sainj_Valley.png',
        description: 'Sainj Valley in Himachal Pradesh is a pristine destination celebrated for its lush landscapes, meandering rivers, and snow-capped peaks. A paradise for nature enthusiasts, it\'s part of the UNESCO World Heritage Site, the Great Himalayan National Park, offering rich biodiversity. Best visited from April to October, the valley provides a pleasant climate for outdoor activities, with summer and post-monsoon months being ideal. Monsoon season, from July to September, should be avoided due to heavy rainfall.',
        to_get: `
           
            <ul>
                <li><img src="icons/unesco.png" alt="UNESCO Hertigae"> UNESCO Heritage site</li>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Shimla, Himachal Pradesh</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Bhuntar Airport, Kullu - 50 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Shimla - 178 Kilometers via NH 205</li>
                <li><img src="icons/train.png" alt="Train Icon"> Joginder Nagar Railway Station - 150 Kilometers</li>                                             
            </ul>
        `
    },
    {
        id: 'place61',
        imageURL: 'Images/Surya_Lanka_Beach.png',
        description: 'Suryalanka Beach in Andhra Pradesh is known for its pristine shores, calm waters, and spectacular sunsets. The long stretch of golden sands invites relaxation and beach activities, including safe swimming. Visitors can enjoy water sports like jet skiing and parasailing and relish delicious seafood offered by local vendors. The best time to visit is from November to February for mild weather, while the monsoon season should be avoided.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Amravati, Andhra Pradesh</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Vijayawada Airport - 108 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Vijayawada - 93 Kilometers via NH16 and Guntur Chirala Rd</li>
                <li><img src="icons/train.png" alt="Train Icon"> Bapatla Railway Station - 8 Kilometers</li>                                              
            </ul>
        `
    },
    {
        id: 'place62',
        imageURL: 'Images/Swaraj_Dweep.png',
        description: 'Swaraj Dweep, formerly Havelock Island, is a renowned Andaman and Nicobar Islands destination known for stunning beaches, clear turquoise waters, and vibrant marine life. Radhanagar Beach is recognized as one of Asia\'s best. The island offers a tropical paradise, ideal for water sports like snorkeling, scuba diving, kayaking, and swimming with elephants. Vibrant coral reefs attract underwater exploration. Best visit time is November to April for pleasant weather, while monsoon season (May to September) is less suitable due to heavy rainfall and rough seas.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Port Blair, Andaman & Nicobar Island</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Veer Savarkar International Airport, Port Blair - 2 Hrs by Ferry</li>
                <li><img src="icons/car.png" alt="Car Icon"> Port Blair - 2 Hrs by Ferry</li>
                <li><img src="icons/train.png" alt="Train Icon"> Not Connected via Railways</li>                                               
            </ul>
        `
    },
    {
        id: 'place63',
        imageURL: 'Images/Tamhini_Ghat.png',
        description: 'Tamhini Ghat, nestled in Maharashtra\'s Western Ghats, is a mesmerizing mountain pass celebrated for its lush greenery and waterfalls. Popular during monsoon, the drive through misty valleys is surreal. The region offers treks to forts like Sudhagad, boasting panoramic views and a moderate climate. Rich biodiversity and bird species make it a birdwatcher\'s paradise. The scenic route presents breathtaking views, making Tamhini Ghat a hidden gem for nature lovers and adventure seekers.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Mumbai, Maharashtra</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Pune Airport - 61 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Pune - 53 Kilometers via NH 753F</li>
                <li><img src="icons/train.png" alt="Train Icon"> Pune Railway Station - 53 Kilometers</li>                                                 
            </ul>
        `
    },
    {
        id: 'place64',
        imageURL: 'Images/Triund.png',
        description: 'Triund, near Dharamshala in Himachal Pradesh, is a renowned trekking destination with captivating landscapes. The trek from McLeodganj leads through dense forests and lush meadows, providing panoramic views of the snow-capped Dhauladhar Range. Trekkers enjoy mesmerizing sunsets and sunrises, with the option to camp under the starry night sky for a tranquil Himalayan experience. The best times to visit are spring, summer, and autumn, while monsoon months are not recommended due to slippery trails.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Shimla, Himachal Pradesh</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Kangra Airport - 20 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Pathankot - 93 Kilometers via NH 154</li>
                <li><img src="icons/train.png" alt="Train Icon"> Pathankot Railway Station - 90 Kilometers</li>                                              
            </ul>
        `
    },
    {
        id: 'place65',
        imageURL: 'Images/Unakoti_Rock_Carvings.png',
        description: 'Unakoti in Tripura, known as the "Angkor Wat of the North-East," is a captivating site with ancient rock carvings dating back to the 7th to 9th centuries CE. Nestled in the lush Jampui Hills, it combines history, travel, and folklore, attracting art enthusiasts and pilgrims. Legends tie the origin of Unakoti to a sculptor named Kallu Kumhar, adding mystique. The best time to visit is from October to March for cool and pleasant weather, while the monsoon season should be avoided.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Agartala, Tripura</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Maharaja Bir Bikram Airport, Agartala - 148 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Agartala - 143 Kilometers, via Kamalpur - Khowai Rd</li>
                <li><img src="icons/train.png" alt="Train Icon"> Dharmanagar Station - 19 Kilometers</li>                                               
            </ul>
        `
    },
    {
        id: 'place66',
        imageURL: 'Images/Virasat_e_Khalsa.png',
        description: 'Virasat-e-Khalsa in Anandpur Sahib, Punjab, is a modern architectural marvel dedicated to showcasing Sikh history and heritage. Designed by Moshe Safdie, the museum\'s unique blend of traditional and modern elements creates a visually stunning atmosphere. Open year-round, it features informative exhibits, artifacts, and multimedia presentations that offer a comprehensive understanding of Sikh history and culture. The complex comes alive during Sikh festivals, such as Vaisakhi, with cultural performances and celebrations.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Chandigarh, Punjab</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Shaheed Bhagat Singh Airport, Chandigarh - 88 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Chandigarh - 132 Kilometers via Malerkotla Rd and NH205</li>
                <li><img src="icons/train.png" alt="Train Icon"> Anandpur Sahib Railway Station - Within Town Limits</li>                                                 
            </ul>
        `
    },
    {
        id: 'place67',
        imageURL: 'Images/Wei_Sawdong_Falls.png',
        description: 'Wei Sawdong Falls, located in Meghalaya, India, is a captivating natural wonder with three-tier cascades amid the lush rainforest. Known for its crystal-clear waters and unique limestone formations, the falls provide a serene retreat. The surrounding biodiversity and pristine wilderness make it a haven for nature enthusiasts. Visiting during the monsoon season (June to September) offers the most impressive views, but caution is advised due to challenging road conditions.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Shillong, Meghalaya</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Gopinath Bordoloi International Airport, Guwahati - 166 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Shillong - 53 Kilometers via SH5</li>
                <li><img src="icons/train.png" alt="Train Icon"> Guwahati Railway Station - 170 Kilometers</li>                                               
            </ul>
        `
    },
    {
        id: 'place68',
        imageURL: 'Images/Yana_Caves.png',
        description: 'Yana Caves in Karnataka boast unique limestone formations, Bhairaveshwara Shikhara and Mohini Shikhara, shaped over millions of years. With religious significance for Hindus and Jains, the caves feature a shrine dedicated to Lord Shiva and Jain temples. The lush green surroundings provide a picturesque backdrop for trekking, attracting adventure enthusiasts. The best time to visit is post-monsoon, from October to March, for pleasant weather and ideal trekking conditions. Monsoons, from June to September, bring heavy rainfall, making trails slippery and hazardous.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Bengaluru, Karnataka</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Hubli Airport - 140 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Sirsi - 38 Kilometers via Mattighatta Rd</li>
                <li><img src="icons/train.png" alt="Train Icon"> Kumta Railway Station - 20 Kilometers</li>                                               
            </ul>
        `
    },
    {
        id: 'place69',
        imageURL: 'Images/Yarada_Beach.png',
        description: 'Yarada Beach in Visakhapatnam is a romantic and soothing destination, offering panoramic views and privacy. It\'s an ideal spot for various activities, including sun-soaking, family picnics, and bike rides. Surrounded by hills on three sides and the Bay of Bengal on the fourth, the drive to the beach is scenic. Visit during the winter and early spring months (October to March) for pleasant weather. Monsoon season (June to September) may bring heavy rains, so it\'s advisable to avoid beach visits during this period.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Amaravati, Andhra Pradesh</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Visakhapatnam Airport - 23 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Visakhapatnam - 16 Kilometers, via Gangavaram - Yarada Rd</li>
                <li><img src="icons/train.png" alt="Train Icon"> Visakhapatnam Station - 18 Kilometers</li>                                               
            </ul>
        `
    },
    {
        id: 'place70',
        imageURL: 'Images/Yercaud.png',
        description: 'Yercaud, the "Jewel of the South," is a serene hill station in Tamil Nadu known for its pleasant climate and lush landscapes. With dense forests, coffee plantations, and vibrant flora, it\'s a haven for nature lovers. Yercaud Lake offers boating amid serene beauty, and the hills provide opportunities for trekking and birdwatching. The post-monsoon to winter months, from October to June, is the best time to visit, offering cool and pleasant weather. Monsoons, from July to September, bring heavy rainfall and potential travel disruptions.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Chennai, Tamil Nadu</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Salem Airport - 45 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Salem - 30 Kilometers via SH 188</li>
                <li><img src="icons/train.png" alt="Train Icon"> Salem Junction - 30 Kilometers</li>                                               
            </ul>
        `
    },
    {
        id: 'place71',
        imageURL: 'Images/Zanskar.png',
        description: 'Zanskar, in Ladakh, is a remote valley celebrated for its rugged landscapes, ancient monasteries, and vibrant Tibetan Buddhist culture. Best visited from June to September for milder weather and accessibility, the region offers festivals like Losar and Gustor, providing cultural insights. It\'s a haven for adventure seekers with opportunities for trekking, river rafting, and mountaineering. In winter, heavy snowfall makes exploration challenging, but the unique Chadar Trek on the frozen Zanskar River is a highlight for adventurous travelers.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Leh, Ladakh</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Leh Kushok Bakula Rimpochee Airport - 460 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Leh - 463 Kilometers via NH301 and NH1</li>
                <li><img src="icons/train.png" alt="Train Icon"> Jammu Tawi Railway Station - 700 Kilometers</li>                                              
            </ul>
        `
    },
    {
        id: 'place72',
        imageURL: 'Images/Ziro_Valley.png',
        description: 'Ziro Valley in Arunachal Pradesh is known for its rolling green hills, unique Apatani tribe culture, and tranquil ambiance. Ideal for trekking and cultural exploration, the valley offers a blend of natural beauty and distinctive traditions, including facial tattoos. Ziro provides an offbeat escape, allowing travelers to immerse themselves in the serene Eastern Himalayan surroundings. The best time to visit is from March to October, avoiding the monsoon season for optimal exploration.',
        to_get: `
           
            <ul>
                <li><img src="icons/capital.png" alt="Location City Icon"> State & Capital - Itanagar, Arunachal Pradesh</li>
                <li><img src="icons/flight.png" alt="Flight Icon"> Lilabari Airport - 145 Kilometers</li>
                <li><img src="icons/car.png" alt="Car Icon"> Itanagar - 104 Kilometers via NH 13</li>
                <li><img src="icons/train.png" alt="Train Icon"> Naharlagun Railway Station - 135 Kilometers</li>                                             
            </ul>
        `
    },


];