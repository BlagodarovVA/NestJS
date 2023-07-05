import { Injectable } from '@nestjs/common';
import { ReviewModel } from './review.model';
import type { DocumentType, ModelType } from '@typegoose/typegoose/lib/types';
import { CreeateReviewDto } from './dto/create-review.dto';
import { Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ReviewService {
	constructor(
		@InjectModel(ReviewModel.name) private readonly reviewModel: ModelType<ReviewModel>,
	) {}

	async create(dto: CreeateReviewDto): Promise<DocumentType<ReviewModel>> {
		return this.reviewModel.create(dto);
	}

	async delete(id: string): Promise<DocumentType<ReviewModel> | null> {
		return this.reviewModel.findByIdAndDelete(id).exec();
	}

	async findByProductId(productId: string): Promise<DocumentType<ReviewModel>[]> {
		return this.reviewModel.find({ productId: new Types.ObjectId(productId) }).exec();
	}

	async deleteByProductId(productId: string) {
		return this.reviewModel.deleteMany({ productId: new Types.ObjectId(productId) }).exec();
	}
}
