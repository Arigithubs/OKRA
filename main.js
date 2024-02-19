 // Function to show information about a specific strain
 function showInfo(strainName, imageSrc, description, benefits) {
    // Get the modal elements
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
    
    // Set the modal content
    modalTitle.textContent = strainName;
    modalImage.src = imageSrc;
    modalDescription.textContent = `${description}\n\n${benefits}`;
    
    // Show the modal
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Close the modal when the close button is clicked
const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', closeModal);

// Search functionality
const searchBar = document.getElementById('search-bar');
searchBar.addEventListener('input', function() {
    const searchValue = searchBar.value.toLowerCase();
    const sections = document.querySelectorAll('section');
    
    sections.forEach(function(section) {
        const strainName = section.querySelector('h2').textContent.toLowerCase();
        const effects = section.querySelector('p:nth-of-type(1)').textContent.toLowerCase();
        const benefits = section.querySelector('p:nth-of-type(2)').textContent.toLowerCase();
        
        if (strainName.includes(searchValue) || effects.includes(searchValue) || benefits.includes(searchValue)) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
});