
type SuccessCallback = () => void;
type ErrorCallback = (error: string) => void;

export class CheckService  {

    constructor(
        private readonly successCallback: SuccessCallback,
        private readonly errorCallback: ErrorCallback
    ) { }

    public async execute(url: string): Promise<boolean> {

        try {
            const req = await fetch(url);

            if( !req.ok ) {
                throw new Error(`Error on service ${url}`);
            }

        } catch (error) {
            if (error instanceof Error) {
                this.errorCallback(error.message);
            } else {
                this.errorCallback('Error unknown');
            }

            return false;
        }

        this.successCallback();
        return true;
    }

}
