
// Backdrop
const getBackdrop = document.getElementById('backdrop');

// Modals
const addMovieModal = document.getElementById('add-modal');
const deleteMovieModal = document.getElementById('delete-modal');

// Buttons
const addMovieButton = document.querySelector('header button');
const confirmAddMovieButton = addMovieModal.querySelector('.btn--success');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
let confirmDeleteMovieButton = deleteMovieModal.querySelector('.btn--danger');
const cancelDeleteMovieButton = deleteMovieModal.querySelector('.btn--passive');

// Inputs
const userInputs = addMovieModal.querySelectorAll('input');

// Input text
const entryTextSection = document.getElementById('entry-text');

// https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/150px-Unofficial_JavaScript_logo_2.svg.png

const movies = [];

const showMovieModal = () => {
    addMovieModal.classList.add('visible');
    toggleBackdrop();
};

const hideMovieModal = () => {
    addMovieModal.classList.remove('visible');
    toggleBackdrop();
};

const showDeleteMovieModal = () => {
    deleteMovieModal.classList.add('visible');
    toggleBackdrop();
};

const hideDeleteMovieModal = () => {
    deleteMovieModal.classList.remove('visible');
    toggleBackdrop();
};

const toggleBackdrop = () => {
    getBackdrop.classList.toggle('visible');
};

const clearMovieInput = () => {
    for (const userInput of userInputs) {
        userInput.value = '';
    }
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
        <div class="movie-element__image">
            <img src="${imageUrl}" alt="${title}">
        </div>  
        <div class="movie-element__info">
            <h2>${title}</h2>
            <p>${rating}/5 stars</p>
        </div>
    `;
    newMovieElement.addEventListener('click', startDeleteMovieHandler.bind(null, id));
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieElement);
};

const deleteMovie = (movieId) => {
    let movieIndex = movies.findIndex(movie => movie.id === movieId);
    movies.splice(movieIndex, 1);
    const listRoot = document.getElementById('movie-list');
    listRoot.removeChild(listRoot.children[movieIndex]);    
};

// Remove the default card that is displayed when the page loads
const updateUI = () => {
    if (movies.length === 0) {
        entryTextSection.style.display = 'block';
    } else {
        entryTextSection.style.display = 'none';
    }
};

// Click handlers
const backdropClickHandler = () => {
    clearMovieInput();
    hideMovieModal();
    hideDeleteMovieModal();
    toggleBackdrop();
};

const addMovieClickHandler = () => {
    const movieTitleValue = userInputs[0].value;
    const movieImageUrlValue = userInputs[1].value;
    const movieRatingValue = userInputs[2].value;

    if (movieTitleValue.trim() === '' || movieImageUrlValue.trim() === '' || movieRatingValue.trim() === '' || +movieRatingValue < 1 || +movieRatingValue > 5) {
        alert('Please enter valid values (rating between 1 and 5).');
        return;
    }

    const newMovie = {
        id: Math.random().toString(),
        title: movieTitleValue,
        image: movieImageUrlValue,
        rating: movieRatingValue
    };

    movies.push(newMovie);

    clearMovieInput();
    hideMovieModal();
    renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
    updateUI();
};

const cancelAddMovieHandler = () => {
    hideMovieModal();
    clearMovieInput();
};

const startDeleteMovieHandler = (movieId) => {
    cancelDeleteMovieButton.removeEventListener('click', cancelDeleteMovieHandler);    
    cancelDeleteMovieButton.addEventListener('click', cancelDeleteMovieHandler);

    // If you have multiple items that need to be deleted, this will replace the actual element with the new one
    // and also add a new event listener to the new element, so that you do not have multiple event listeners.
    confirmDeleteMovieButton.replaceWith(confirmDeleteMovieButton.cloneNode(true));
    confirmDeleteMovieButton = deleteMovieModal.querySelector('.btn--danger');
    confirmDeleteMovieButton.addEventListener('click', confirmDeleteMovieHandler.bind(null, movieId));
    showDeleteMovieModal();
};

const cancelDeleteMovieHandler = () => {
    hideDeleteMovieModal();
};

const confirmDeleteMovieHandler = movieId => {
    deleteMovie(movieId);
    hideDeleteMovieModal();
    updateUI();
};

getBackdrop.addEventListener('click', backdropClickHandler);

addMovieButton.addEventListener('click', showMovieModal);
confirmAddMovieButton.addEventListener('click', addMovieClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);