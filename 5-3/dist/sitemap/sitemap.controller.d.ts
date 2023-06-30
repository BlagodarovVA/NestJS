import { ConfigService } from '@nestjs/config';
import { TopPageService } from 'src/top-page/top-page.service';
export declare class SitemapController {
    private readonly topPageService;
    private readonly configService;
    constructor(topPageService: TopPageService, configService: ConfigService);
    sitemap(host: any): Promise<string>;
}
