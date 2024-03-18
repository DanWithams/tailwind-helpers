import {twMerge} from "tailwind-merge";

export function mergeTwClasses(...classLists) {
    return twMerge(...classLists).split(' ');
}

