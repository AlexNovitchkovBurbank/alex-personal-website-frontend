import { useSelector, type TypedUseSelectorHook } from "react-redux";
import type { RootState } from "./filterStore";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;