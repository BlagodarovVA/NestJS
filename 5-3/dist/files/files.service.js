"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesService = void 0;
const common_1 = require("@nestjs/common");
const date_fns_1 = require("date-fns");
const app_root_path_1 = require("app-root-path");
const fs_extra_1 = require("fs-extra");
const sharp = require("sharp");
let FilesService = class FilesService {
    async saveFiles(files) {
        const dateFolder = date_fns_1.format(new Date(), 'yyyy-MM-dd');
        const uploadFolder = `${app_root_path_1.path}/uploads/${dateFolder}`;
        await fs_extra_1.ensureDir(uploadFolder);
        const res = [];
        for (const file of files) {
            await fs_extra_1.writeFile(`${uploadFolder}/${file.originalname}`, file.buffer);
            res.push({ url: `/uploads/${dateFolder}/${file.originalname}`, name: file.originalname });
        }
        return res;
    }
    convertToWebP(file) {
        return sharp(file)
            .webp()
            .toBuffer();
    }
};
FilesService = __decorate([
    common_1.Injectable()
], FilesService);
exports.FilesService = FilesService;
//# sourceMappingURL=files.service.js.map