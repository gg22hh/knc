import s from "./RefreshButton.module.scss";
import { RefreshIcon } from "./RefreshButtonIcon";
import clsx from "clsx";
import { useAppDispatch, useAppSelector } from "../../../app/store";
import { getMatches, selectMatchesState } from "../../../app/store/slices/Matches";

export const RefreshButton = () => {
  const dispatch = useAppDispatch()
  const { isLoading } = useAppSelector(selectMatchesState)

  const handleButtonClick = () => {
    dispatch(getMatches())
  } 
  return (
    <button className={s.button} onClick={() => handleButtonClick()}>
      Обновить{" "}
      <span className={clsx(s.icon, { [s.loading]: isLoading })} ><RefreshIcon /></span>
    </button>
  );
};
