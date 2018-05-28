import { IActivity } from './activity.model';

export const SAVED_ACTIVITIES: IActivity[] = [
    {
        'id': 1,
        'name': 'test',
        'date': new Date('05/26/2017'),
        'comments': 'testing comments',
        'gpxData': '../../assets/stations.geojson'
    }
];
