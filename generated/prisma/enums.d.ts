export declare const ProfileVisibility: {
    readonly public: "public";
    readonly private: "private";
};
export type ProfileVisibility = (typeof ProfileVisibility)[keyof typeof ProfileVisibility];
export declare const PetEnergyLevel: {
    readonly low: "low";
    readonly moderate: "moderate";
    readonly high: "high";
};
export type PetEnergyLevel = (typeof PetEnergyLevel)[keyof typeof PetEnergyLevel];
export declare const PetSpecies: {
    readonly dog: "dog";
    readonly cat: "cat";
    readonly bird: "bird";
    readonly other: "other";
};
export type PetSpecies = (typeof PetSpecies)[keyof typeof PetSpecies];
export declare const PetSize: {
    readonly small: "small";
    readonly medium: "medium";
    readonly large: "large";
};
export type PetSize = (typeof PetSize)[keyof typeof PetSize];
export declare const PetGender: {
    readonly male: "male";
    readonly female: "female";
};
export type PetGender = (typeof PetGender)[keyof typeof PetGender];
export declare const PetMediaType: {
    readonly image: "image";
    readonly video: "video";
};
export type PetMediaType = (typeof PetMediaType)[keyof typeof PetMediaType];
