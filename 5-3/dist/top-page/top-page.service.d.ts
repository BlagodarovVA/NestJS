import { ModelType } from '@typegoose/typegoose/lib/types';
import { CreateTopPageDto } from './dto/create-top-page.dto';
import { TopLevelCategory, TopPageModel } from './top-page.model';
import { Types } from 'mongoose';
export declare class TopPageService {
    private readonly topPageModel;
    constructor(topPageModel: ModelType<TopPageModel>);
    create(dto: CreateTopPageDto): Promise<import("@typegoose/typegoose/lib/types").DocumentType<TopPageModel>>;
    findById(id: string): Promise<import("@typegoose/typegoose/lib/types").DocumentType<TopPageModel> | null>;
    findByAlias(alias: string): Promise<import("@typegoose/typegoose/lib/types").DocumentType<TopPageModel> | null>;
    findAll(): Promise<import("@typegoose/typegoose/lib/types").DocumentType<TopPageModel>[]>;
    findByCategory(firstCategory: TopLevelCategory): Promise<any>;
    findByText(text: string): Promise<import("@typegoose/typegoose/lib/types").DocumentType<TopPageModel>[]>;
    deleteById(id: string): Promise<import("@typegoose/typegoose/lib/types").DocumentType<TopPageModel> | null>;
    updateById(id: string | Types.ObjectId, dto: CreateTopPageDto): Promise<import("@typegoose/typegoose/lib/types").DocumentType<TopPageModel> | null>;
    findForHhUpdate(date: Date): Promise<import("@typegoose/typegoose/lib/types").DocumentType<TopPageModel>[]>;
}
