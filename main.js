 // GitHub Copilot: Develop a feature to compare different cannabis strains side-by-side. Users should be able to select two or more strains and see a comparative analysis based on effects, benefits, and THC/CBD content. Implement this feature as an interactive component in the UI.

// Function to compare strains
function compareStrains() {
    // Get the selected strains
    const selectedStrains = document.querySelectorAll('.selected');
    
    // If there are less than two strains selected, show an error message
    if (selectedStrains.length < 2) {
        alert('Please select at least two strains to compare.');
        return;
    }
    
    // Get the modal elements
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
    
    // Set the modal content
    modalTitle.textContent = 'Comparative Analysis';
    modalImage.src = '';
    modalDescription.textContent = '';
    
    // Show the modal
    modal.style.display = 'block';
}

// Function to select a strain
function selectStrain(strainName) {
    const strain = document.getElementById(strainName);
    strain.classList.toggle('selected');
}

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