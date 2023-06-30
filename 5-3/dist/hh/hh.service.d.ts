import { HttpService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HhData } from 'src/top-page/top-page.model';
export declare class HhService {
    private readonly configService;
    private readonly httpService;
    private token;
    constructor(configService: ConfigService, httpService: HttpService);
    getData(text: string): Promise<HhData | undefined>;
    private parseData;
    private getSalaryFromString;
}
