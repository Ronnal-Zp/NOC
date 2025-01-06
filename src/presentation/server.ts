import { CheckService } from '../domain/use-cases/checks/check-service';
import { CronService } from './cron/cron-service';

export class Server {
    
    public static start() {
        console.log('Server started...');
        const url = 'http://localhost:3000';

        const job = CronService.createJob('*/3 * * * * *', () => {
            new CheckService(
                () => console.log(`Service ${url} is OK`),
                (error) => console.error('Error: ', error)
            ).execute( url );
        });
    }

}
