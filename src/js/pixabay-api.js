export function getImges(query) {
    const baseUrl = `https://pixabay.com/api/`;
    const params = new URLSearchParams({
        key: '43018161-f974b102273f6260f6ed159b0',
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true",
    });
    const url = `${baseUrl}?${params}`;
  return fetch(url).then(res => res.json()).catch(err => {
      iziToast.error({
                    color: 'red',
                    message: `❌ Sorry, there was a mistake. Please try again!`,
                    position: 'topRight',
                });
    });
}

