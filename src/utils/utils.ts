import data from "../data.json";

export type dataUserType = Record<string, Record<string, string>>;

export type responseType = Record<string, dataUserType>;

export const dataClients: responseType = data;

export const limit = 10;


export const getNameClient = (name: string) => {
  const nameArray = name.split(' ');

  if (nameArray.length >= 2) {
    return `${nameArray[0]} ${nameArray[1][0]}.`;
  }

  return name;
}


export const getClientsArray = (dataUser: dataUserType, lang: string) => {
  const result = Object.entries(dataUser)
    .map(([id, data]) => ({lang, id, name: data.name, review: data.review, date: data.date}));
    return result;
}