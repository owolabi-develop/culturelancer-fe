import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export interface IState {
  name: string;
  state_code: string;
}

interface ICountries {
  iso2: string;
  iso3: string;
  name: string;
  states: IState[];
}

const useCountries = () => {
  const [countries, setCountries] = useState<ICountries[]>([]);

  const getAll = async () => {
    const res = await fetch(
      "https://countriesnow.space/api/v0.1/countries/states"
    );
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    getAll().then((data) => setCountries(data.data));
  }, []);

  const getCountryStates = (country: string): IState[] => {
    return countries.find((c) => c.name === country)?.states || [];
  };

  const query = useQuery<ICountries>({
    queryKey: ["countries"],
    queryFn: getAll,
  });
  return { ...query, countries, getCountryStates };
};

export default useCountries;
