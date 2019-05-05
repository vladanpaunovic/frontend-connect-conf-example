import { Person } from "../../schema";

const disinfectString = (value: string, fallback: string = ""): string => (value ? value.toString() : fallback);

// Data disinfection
export default (data: any): Person => {
    const { name, gender, mass, hair_color, skin_color, eye_color, birth_year } = data;

    if (!name) {
        throw new Error("Required filed name is not delivered by the API");
    }

    return {
        name,
        gender: disinfectString(gender, "not specified"),
        mass: disinfectString(mass),
        hairColor: disinfectString(hair_color),
        skinColor: disinfectString(skin_color),
        eyeColor: disinfectString(eye_color),
        birthYear: disinfectString(birth_year),
        showAds: data.showAds
    };
};
