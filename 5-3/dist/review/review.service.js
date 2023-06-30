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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const review_model_1 = require("./review.model");
let ReviewService = class ReviewService {
    constructor(reviewModel) {
        this.reviewModel = reviewModel;
    }
    async create(dto) {
        return this.reviewModel.create(dto);
    }
    async delete(id) {
        return this.reviewModel.findByIdAndDelete(id).exec();
    }
    async findByProductId(productId) {
        return this.reviewModel.find({ productId: mongoose_1.Types.ObjectId(productId) }).exec();
    }
    async deleteByProductId(productId) {
        return this.reviewModel.deleteMany({ productId: mongoose_1.Types.ObjectId(productId) }).exec();
    }
};
ReviewService = __decorate([
    common_1.Injectable(),
    __param(0, nestjs_typegoose_1.InjectModel(review_model_1.ReviewModel)),
    __metadata("design:paramtypes", [Object])
], ReviewService);
exports.ReviewService = ReviewService;
//# sourceMappingURL=review.service.js.map