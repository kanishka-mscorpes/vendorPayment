import { SelectOptionType } from "@/lib/general";
import { ReactNode } from "react";
import * as z from "zod";

export interface ResponseType {
  data: null | any;
  message: string | null;
  success: true;
}

export interface LoggedInUserType {
  company: string;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  middleName: string;
  mobile: string;
  token: string;
  type: string;
  isAdmin: boolean;
}

export interface FilterType {
  id: number;
  filter: string;
  values: SelectOptionType[];
  icon?: React.ReactNode;
  iconString?: string;
  iconSize?: number;
}

export interface resultType {
  index: string;
  department: string;
  designation: string;
  code: string;
  firstName: string;
  lastName: string;
  midduleName: string;
  gender: string;
  dob: string;
  phone: string;
  email: string;
  empCode: string;
}

export const SelectOptionsSchema = z.object({
  text: z.string(),
  value: z.string(),
});

export interface DialogPropType {
  show: boolean;
  hide: () => void;
}

export interface InternalRouteType {
  label: string;
  route: string;
  icon?: ReactNode;
  root?: string;
}

export interface InvitationType {
  id: string;
  subject: string;
  message: string;
  name: string;
  email?: string;
  sentDate: string;
  mode: "whatsapp" | "email";
}

export interface SingleDetailType {
  label: string;
  value?: string;
  loading?: boolean;
  direction?: "horizontal" | "vertical";
  spacing?: number | string;
  mutedValue?: boolean;
  icon?: ReactNode;
}
