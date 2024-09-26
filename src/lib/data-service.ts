export async function getCountries() {
    try {
        const fetchUrl = await fetch(
            "https://restcountries.com/v3.1/all?fields=name",
        );

        if (!fetchUrl.ok)
            throw new Error(`${fetchUrl.status}, ${fetchUrl.statusText}`);

        const countries = await fetchUrl.json();

        return countries;
    } catch (error) {
        console.log(error);
    }
}
