import { Alert } from "react-native";

export function FavoritesReducer(state: any = [], action: any) {
    console.log(action.payload);

    switch (action.type) {

        case "ADD_FAV":
            return [...state, action.payload]
            break;
        case "DELETE_FAV":
            let filtered = state.filter((e: string) => e != action.payload)
            return [...filtered]
        default:

            state
            break;
    }
}