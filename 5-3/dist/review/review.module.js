"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewModule = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const telegram_module_1 = require("../telegram/telegram.module");
const review_controller_1 = require("./review.controller");
const review_model_1 = require("./review.model");
const review_service_1 = require("./review.service");
let ReviewModule = class ReviewModule {
};
ReviewModule = __decorate([
    common_1.Module({
        controllers: [review_controller_1.ReviewController],
        imports: [
            nestjs_typegoose_1.TypegooseModule.forFeature([
                {
                    typegooseClass: review_model_1.ReviewModel,
                    schemaOptions: {
                        collection: 'Review'
                    }
                }
            ]),
            telegram_module_1.TelegramModule
        ],
        providers: [review_service_1.ReviewService]
    })
], ReviewModule);
exports.ReviewModule = ReviewModule;
//# sourceMappingURL=review.module.js.map