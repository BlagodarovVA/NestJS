"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HhService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const top_page_model_1 = require("../top-page/top-page.model");
const hh_constants_1 = require("./hh.constants");
let HhService = class HhService {
    constructor(configService, httpService) {
        var _a;
        this.configService = configService;
        this.httpService = httpService;
        this.token = (_a = this.configService.get('HH_TOKEN')) !== null && _a !== void 0 ? _a : '';
    }
    async getData(text) {
        try {
            const { data } = await this.httpService.get(hh_constants_1.API_URL.vacancies, {
                params: {
                    text,
                    clusters: true
                },
                headers: {
                    'User-Agent': 'OwlTop/1.0 (antonlarichev@gmail.com)',
                    Authorization: 'Bearer ' + this.token
                }
            }).toPromise();
            return this.parseData(data);
        }
        catch (e) {
            common_1.Logger.error(e);
        }
    }
    parseData(data) {
        const salaryCluster = data.clusters.find(c => c.id == hh_constants_1.SALARY_CLUSTER_ID);
        if (!salaryCluster) {
            throw new Error(hh_constants_1.CLUSTER_FIND_ERROR);
        }
        const juniorSalary = this.getSalaryFromString(salaryCluster.items[1].name);
        const middleSalary = this.getSalaryFromString(salaryCluster.items[Math.ceil(salaryCluster.items.length / 2)].name);
        const seniorSalary = this.getSalaryFromString(salaryCluster.items[salaryCluster.items.length - 1].name);
        return {
            count: data.found,
            juniorSalary,
            middleSalary,
            seniorSalary,
            updatedAt: new Date()
        };
    }
    getSalaryFromString(s) {
        const numberRegExp = /(\d+)/g;
        const res = s.match(numberRegExp);
        if (!res) {
            return 0;
        }
        return Number(res[0]);
    }
};
HhService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        common_1.HttpService])
], HhService);
exports.HhService = HhService;
//# sourceMappingURL=hh.service.js.map