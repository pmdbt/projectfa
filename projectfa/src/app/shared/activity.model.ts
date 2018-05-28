export interface IActivity {
    id: number;
    name: string;
    date: Date;
    comments?: string;
    dataFrom?: string;
    gpxData: string;
}
