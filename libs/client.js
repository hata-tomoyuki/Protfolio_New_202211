import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: "vdbwr609rs",
    apiKey: process.env.API_KEY,
});
