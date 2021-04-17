import { User } from "../redux/birthdaysReducer";

export const getDataDto = (data: Date) => {
  console.log(data)
  return `${
    data.getDate().toString().length === 1 ? "0" : ""
  }${data.getDate()}.${data.getMonth().toString().length === 1 ? "0" : ""}${
    data.getMonth() + 1
  }`;
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getParseDate = (datestr: string) => {
  const date = new Date(datestr);
  console.log(date)
  return `${date.getDate()} ${months[date.getMonth()]}`
};

export const sortByNameFunc = (a: User, b: User) =>{
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  return 0;
}
