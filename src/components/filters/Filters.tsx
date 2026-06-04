import { useDispatch } from "react-redux"
import { useAppSelector } from "../../reduxStateLogic/customSelector";
import { setNumObjectsOnPage } from "../../reduxStateLogic/filterSlice";

export const FilterNumProjectsOnPage = () => {
    const numProjectsOnPage = useAppSelector(state => state.filter.numProjectsOnPage);
    const dispatch = useDispatch();

    const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setNumObjectsOnPage(event.target.value))
    }

    return (
        <div>
            <select value={numProjectsOnPage} onChange={onChangeHandler}>
                <option value={"4"}>4</option>
                <option value={"8"}>8</option>
                <option value={"12"}>12</option>
            </select>
        </div>
    )
}