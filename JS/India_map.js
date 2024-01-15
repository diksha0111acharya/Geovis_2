document.addEventListener("DOMContentLoaded", function() {

    const sidebarElement = document.querySelector('.sidebar');
    console.log(sidebarElement);
    // Create Map with India center coordinates
    const map = L.map('map', {
        center: [23, 83],
        zoom: 4.5,
        minZoom: 4.5
    });

    // Add a tile layer to the map
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Map data © <a href="https://www.esri.com/">Esri</a>',
    }).addTo(map);
    
    // Add state layers to the map
    const State_layers = L.geoJSON(IND, 
        {style: {
            fillColor: 'orange',
            fillOpacity: 0.4,
            color: 'black',
            weight: 0.7
        }}).addTo(map);  
    
    // Add event listeners to state layers 
    State_layers.eachLayer(function (layer) {
        layer.bindTooltip(layer.feature.properties.ST_NM, { permanent: false, direction: 'auto' });
        layer.on({
            mouseover: highlightState,
            mouseout: resetState,
            click: e => handleStateClick(e, layer, map)
        });
    });

    // Function to show state name on hover
    function highlightState(e) {
        var layer = e.target;
        // change style
        layer.setStyle({
            fillColor: 'red',
            fillOpacity: 0.7,
            color: 'black',
            weight: 1.5
        });
    }

    // function to reset after hover
    function resetState(e) {
        var layer = e.target;
        // Revert to originale
        layer.setStyle({
            fillColor: 'orange',
            fillOpacity: 0.4,
            color: 'black',
            weight: 0.7
        });
    }

    // zoom in-out
    function handleStateClick(e, layer, map) {
        const stateName = layer.feature.properties.ST_NM;
        map.fitBounds(e.target.getBounds());
        fetchPlacesByState(stateName);
    }

    // Set colours for categories
    function getCategoryColor(category) {
        // Define colors for each category
        var categoryColors = {
            'Natural Landscapes': 'green',
            'Coast and Beaches': 'blue',
            'Culture and Religion': 'red',
            'Lakes and Waterfalls': 'purple',
            'Wildlife and Safari': 'brown',
            'Heritage Sites': 'white'
        };

        return categoryColors[category] || 'gray'; // Default color for unknown category
    }
        
    // Clear the map of previously displayed places
    function clearMap() {
        map.eachLayer(function (layer) {
            if (layer instanceof L.Marker || layer instanceof L.CircleMarker) {
                map.removeLayer(layer);
            }
        });
    }

    // Maintain original circle marker size
    const originalMarkerSizes = {};

    // Display places by state
    function displayPlacesOnMap(places) {
        clearMap();
        places.forEach((place, index) => {
            const circleMarker = L.circleMarker(place.geometry.coordinates.reverse(), {
                radius: 5,
                fillColor: getCategoryColor(place.properties.Category),
                color: "#000",
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8
            }).bindPopup(place.properties.Places);

            // Attach place ID
            circleMarker.placeID = place.id;
            // Assign a unique ID to the circle marker based on the index
            const markerID = `circleMarker_${index}`;
            circleMarker._leaflet_id = `circleMarker_${index}`;

            // Store original marker size
            originalMarkerSizes[markerID] = circleMarker.getRadius();

            circleMarker.addTo(map);
            circleMarker.on('click', () => handleMapMarkerClick(place.id));
        });
    }

    // Function to reset marker sizes to original
    function resetMarkerSizes() {
        for (const markerID in originalMarkerSizes) {
            const marker = map._layers[markerID];
            if (marker) {
                marker.setRadius(originalMarkerSizes[markerID]);
            }
        }
    }

    // Add event listeners to each sidebar list item
    function addSidebarEventListeners(places) {
        const statePlacesList = document.getElementById('statePlacesList');

        places.forEach((place, index) => {
            const listItem = statePlacesList.children[index];

            listItem.addEventListener('click', function () {
                const placeID = place.id;
                const markerID = `circleMarker_${index}`;
                const marker = map._layers[markerID];
                // Find the corresponding image data from Image.js
                const imageData = imagesData.find(img => img.id === placeID);
    
                resetMarkerSizes(); // Reset marker sizes to original
                
                if (imageData) {
                    // Update the imagebar div with the image, description and to_get
                    const imagebar = document.querySelector('.imagebar');
                    imagebar.innerHTML = `
                        <h3>${place.properties.Places}</h3>
                        <img src="${imageData.imageURL}" alt="Selected Image" class="place-image">
                        <h3> Description </h3>
                        <div class="description">${imageData.description}</div>
                        <h3> Additional Information </h3>
                        <div class="to_get">${imageData.to_get}</div>
                    `;
                }

                if (marker) {
                    // Increase the size of the clicked circle marker
                    marker.setRadius(originalMarkerSizes[markerID] * 1.5); // Increase the size as desired
                    map.setView(marker.getLatLng(), 8); // Adjust the zoom level as needed
                    marker.openPopup();
                }

            });
        });
    }


    // Function to fetch places based on the selected state name
    function fetchPlacesByState(stateName) {
        const places = Categories_places.features.filter(place => place.properties.States === stateName);

        // Check if there are places to display
        if (places.length === 0) {
            clearSidebar(); // Clear the sidebar content
            clearImagebar(); // Clear the imagebar content
            hideSidebar(); // Hide the sidebar
            return;
        }
        console.log('Places fetched:', places);
        clearSidebar(); // Clear the sidebar content
        displayPlacesInSidebar(places); // Display new places
        displayPlacesOnMap(places);
        addSidebarEventListeners(places);
        addEventListenersForPlaces(places);
        showSidebar(); // Show the sidebar
    }

    // Function to clear sidebar content
    function clearSidebar() {
    var statePlacesList = document.getElementById('statePlacesList');
    statePlacesList.innerHTML = ''; // Clear the content    
    }
    // Function to clear the imagebar content
    function clearImagebar() {
        var imagebar = document.querySelector('.imagebar');
        imagebar.innerHTML = ''; // Clear the content    
    }
    // Display sidebar
     function showSidebar() {
        var sidebar = document.getElementById('sidebar');
        sidebar.style.display = 'block'; // Show the sidebar
    } 


    // hide sidebar
     function hideSidebar() {
        var sidebar = document.getElementById('sidebar');
        sidebar.style.display = 'none'; // Hide the sidebar
    } 

    // Link sidebar and places
    function displayPlacesInSidebar(places) {
        var statePlacesList = document.getElementById('statePlacesList');
        statePlacesList.innerHTML = '';

        // Sort the places alphabetically by place name
        places.sort((a, b) => a.properties.Places.localeCompare(b.properties.Places));

        places.forEach(place => {
            var listItem = document.createElement('li');
            var categoryColor = getCategoryColor(place.properties.Category);
            var categoryIndicator = document.createElement('span');
            categoryIndicator.classList.add('categoryColorIndicator');
            categoryIndicator.style.backgroundColor = categoryColor;
            
            listItem.appendChild(categoryIndicator);
            listItem.innerHTML += `${place.properties.Places} (${place.properties.Category})`;
            statePlacesList.appendChild(listItem);
        });
    }

    // Function to reset map view to initial zoom and center coordinates
    function resetMapView() {
        map.setView([23, 83], 4.5); // Set the view to India's center coordinates and initial zoom
    }

    // Add event listeners to legend categories
    const legendCategories = document.querySelectorAll('.legendCategory');
    legendCategories.forEach(category => {
        category.addEventListener('click', function() {
            const selectedCategory = this.dataset.category;
            filterPlacesByCategory(selectedCategory);
            updateSidebarTitle(selectedCategory);
            
            // Show when a legend category is clicked
            const legendPlaces = Categories_places.features.filter(place => place.properties.Category === selectedCategory);
            displayPlacesInSidebar(legendPlaces); // Display places in the sidebar

            // Add event listeners to legend places to show 
            addLegendPlacesEventListeners(legendPlaces);

        });
    });

    // Function to update the sidebar title based on the selected category
    function updateSidebarTitle(category) {
    const sidebarTitle = document.getElementById('selectedStateTitle');
    sidebarTitle.textContent = `Places of ${category}`;
    }
    // Find the existing legend box element
    const legendBox = document.getElementsByClassName('legendBox'); 
    
 // Loop through each legend box (in case there are multiple)
    for (const legendBox of legendBox) {
    // Apply the 'legendBox' class for positioning
    legendBox.classList.add('legendBox');

    // Append the legend box to the bottom left corner of the map container
    document.querySelector('.leaflet-bottom.leaflet-left').appendChild(legendBox);
    }

    // Function to adjust marker sizes for filtered places
    function adjustMarkerSizesForCategory(filteredPlaces) {
        resetMarkerSizes(); // Reset marker sizes to original
        
        // Increase the size of circle markers for the filtered category
        filteredPlaces.forEach((place, index) => {
            const markerID = `circleMarker_${index}`;
            const marker = map._layers[markerID];
            if (marker) {
                marker.setRadius(originalMarkerSizes[markerID] * 1.5); // Increase the size as desired
            }
        });
    }

    // Filter by categories
    function filterPlacesByCategory(category) {
        const places = Categories_places.features.filter(place => place.properties.Category === category);
    
        clearSidebar(); // Clear the sidebar content
        displayPlacesInSidebar(places); // Display new places
        displayPlacesOnMap(places); // Display places on the map
        addSidebarEventListeners(places);
        adjustMarkerSizesForCategory(places);// Adjust marker sizes for the filtered category
                    
        resetMapView(); // Zoom out to the initial view
        showSidebar(); // Show the sidebar
    }

    // Event listeners for map markers and sidebar items
    function addEventListenersForPlaces(places) {
        const sidebarListItems = document.getElementById('statePlacesList').children; 
        
        places.forEach((place, index) => {
            const placeID = place.id; // Use the ID from Categories_places.js

            // Add event listener for map marker click
            const markerID = `circleMarker_${index}`;
            const marker = map._layers[markerID];
            if (marker) {
                marker.on('click', () => {
                handleMapMarkerClick(placeID);
                showSidebar();
            });
            }    
            // Add event listener for sidebar list item click
            const sidebarListItem = sidebarListItems[index];
            sidebarListItem.addEventListener('click', () => {
                handleSidebarItemClick(placeID);
                showSidebar();
            });
        });
    }
    // Function to handle map marker click
    function handleMapMarkerClick(placeID) {
        console.log('Marker clicked:', placeID);

        const marker = map._layers[placeID];
        const place = Categories_places.features.find(place => place.id === placeID);
        console.log('Place data:', place);

        const imageData = imagesData.find(img => img.id === placeID);
        console.log('Image data:', imageData);

        resetMarkerSizes(); // Reset marker sizes to original

        if (imageData) {
            // Update the imagebar div with the image and to_get
            const imagebar = document.querySelector('.imagebar');
            imagebar.innerHTML = `
                <h3>${place.properties.Places}</h3>
                <img src="${imageData.imageURL}" alt="Selected Image" class="place-image">
                <h3> Description </h3>
                <div class="description">${imageData.description}</div>
                <h3> Additional Information </h3>
                <div class="to_get">${imageData.to_get}</div>
            `;
        }

        if (marker) {
            // Increase the size of the clicked circle marker
            marker.setRadius(originalMarkerSizes[placeID] * 1.5); // Increase the size as desired
            map.setView(marker.getLatLng(), 8); // Adjust the zoom level as needed
            marker.openPopup();
        }
    }

    // Add event listeners to each map marker
    function addEventListenersForMarkers() {
        place.features.forEach(place => {
            const placeID = place.id;
            const marker = map._layers[placeID];

            if (marker) {
                marker.on('click', () => handleMapMarkerClick(placeID));
            }
        });
    }addEventListenersForMarkers();
    
});

   