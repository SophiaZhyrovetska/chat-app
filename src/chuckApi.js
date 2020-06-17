export const fetchData = async () => {
    try {
        const response = await fetch("https://api.chucknorris.io/jokes/random?category=dev");
        return await response.json();
    } catch (e) {
        console.log(e);
    }
}
