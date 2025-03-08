import s from "./Error.module.scss";
import { ErrorIcon } from "./ErrorIcon";

export const Error = () => {
  return (
    <div className={s.error}>
      <ErrorIcon />
      Ошибка: не удалось загрузить информацию
    </div>
  );
};
