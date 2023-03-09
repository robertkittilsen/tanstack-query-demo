import axios from "axios";

export async function fetcher(url: string) {
    const { data } = await axios.get(url);
    return data;
}
