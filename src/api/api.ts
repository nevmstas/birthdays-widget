import axios from "axios";
import { FetchUsersProps } from "../redux/birthdaysReducer";

export const DEV_ENDPOINT = "https://birthday-api.anromsocial.com";

export const getBirthdaysByDate = async ({ dateFrom, dateTo }: FetchUsersProps) => {
  return await axios.get(
    `${DEV_ENDPOINT}/api/birthdays?dateFrom=${dateFrom}&dateTo=${dateTo}`
  );
};
