import { Resolver } from ".";
import { Person } from "../schema";

const person: Resolver<Person> = async (_, { id }, { client, secrets }) => {
    const { data } = await client.get(`people/${id}/`);
    if (!data) {
        throw new Error("Failed API fetching.");
    }

    const { name, gender, mass, hair_color, skin_color, eye_color, birth_year } = data;

    return {
        name,
        gender,
        mass,
        hairColor: hair_color,
        skinColor: skin_color,
        eyeColor: eye_color,
        birthYear: birth_year,
        showAds: secrets.showAds
    };
};

export default person;
