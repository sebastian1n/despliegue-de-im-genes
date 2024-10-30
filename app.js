const apiKey = '46798291-b06baa0127044b6b0938f837e';

async function searchImages() {
    const query = document.getElementById('searchQuery').value;
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(query)}&per_page=5&image_type=photo&pretty=true`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        displayImages(data.hits);
    } catch (error) {
        console.error("Error fetching images:", error);
    }
}

function displayImages(images) {
    const imagesContainer = document.getElementById('images');
    imagesContainer.innerHTML = '';

    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.webformatURL;
        imgElement.alt = image.tags;
        imagesContainer.appendChild(imgElement);
    });
}