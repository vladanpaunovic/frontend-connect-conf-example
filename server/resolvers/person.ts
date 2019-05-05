import { Resolver } from ".";
import { Person } from "../schema";
import cleanPerson from "./cleaners/cleanPerson";

const person: Resolver<Person> = async (_, { id }, { API, showAds }) => {
    const { data, status } = await API.get(`people/${id}/`);

    if (status !== 200) {
        throw new Error("Failed fetching the api");
    }

    return cleanPerson({ ...data, showAds });
};

export default person;
