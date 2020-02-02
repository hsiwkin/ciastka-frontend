import * as moment from "moment";

export interface IOffer {
  _id: string;
  imageUrl: string;
  title: string;
  description: string;
  extendedDescription: string;
  updatedAt: moment.Moment;
  location: [number, number];
}
