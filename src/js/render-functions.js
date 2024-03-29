function imgTemplate(data) {
    const {
    webformatURL,
    largeImageURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  } = data;
    return `<li class="gallery-item">
	<a class="gallery-link" href="${largeImageURL}">
		<img
            src="${webformatURL}"
            alt="${tags}"
            width="360"
            height="200"
            class="gallery-img"
        />
        <ul class="gallery-description">
        <li class="gallery-description-item"><h3>Likes</h3><p>${likes}</p></li>
        <li class="gallery-description-item"><h3>Views</h3><p>${views}</p></li>
        <li class="gallery-description-item"><h3>Comments</h3><p>${comments}</p></li>
        <li class="gallery-description-item"><h3>Downloads</h3><p>${downloads}</p></li>
     </ul>
	</a>
</li>`;
}

export function imagesTemplate(arr) {
  return arr.map(imgTemplate).join('');
}