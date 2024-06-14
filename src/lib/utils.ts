import { FilterTypeExtended } from "@/pages/protected/search/result";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { filtersOptionsStatic } from "./general";
import * as xlsx from "xlsx";
import { saveAs } from "file-saver";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const saveFiltersToLocalStorage = (filters: FilterTypeExtended[]) => {
  localStorage.setItem("espFilters", JSON.stringify(filters));
};

export const getFiltersFromLocalStorage = (): FilterTypeExtended[] => {
  const filters = localStorage.getItem("espFilters");
  const parsed = JSON.parse(filters ?? "[]");
  return parsed;
};
