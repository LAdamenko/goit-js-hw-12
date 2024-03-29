import axios from 'axios';

export async function getImges(query) {
    const url = `https://pixabay.com/api/`;
    const params = {
        key: '43018161-f974b102273f6260f6ed159b0',
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true",
    };
    try {
        const res = await axios.get(url, { params });
        return res.data;
    } catch (err) {
        iziToast.error({
                    color: 'red',
                    message: `❌ Sorry, there was a mistake. Please try again!`,
                    position: 'topRight',
                });
    }
}

