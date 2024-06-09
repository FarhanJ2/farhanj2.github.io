const LastSong = () => {
    const clientId = import.meta.env.PUBLIC_SPOTIFY_CLIENT_ID?.toString() || '';
    const clientSecret = import.meta.env.PUBLIC_SPOTIFY_CLIENT_SECRET?.toString() || '';

    const getPlayingSong = (accessToken: string) => {
        fetch('https://api.spotify.com/v1/me/player/queue', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                client_id: clientId,
                client_secret: clientSecret,
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    const getToken = () => {
        const authString = btoa(`${clientId}:${clientSecret}`); // Combine client ID and client secret
        const formData = new URLSearchParams();
        formData.append('grant_type', 'client_credentials');
    
        return fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${authString}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'grant_type=client_credentials'
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.access_token)
            return data.access_token;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };
}

export default LastSong;