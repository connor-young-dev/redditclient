export const API_ROOT = 'https://www.reddit.com';

export const getSubredditsAPI = async () => {
    const response = await fetch(`${API_ROOT}/subreddits.json`);
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    const subreddits = await response.json();

    return subreddits;
};