import {
    ScheduledEvent,
    Context,
    Handler
} from 'aws-lambda';

export const handler: Handler = async (event : ScheduledEvent, context: Context) => {
    console.log(new Date());
}