import { Injectable } from '@nestjs/common';
import { format } from 'date-fns';
import { path } from 'app-root-path';
import { ensureDir, writeFile } from 'fs-extra';
import { FileElementResponse } from './dto/file-response-element.response';
import * as sharp from 'sharp';
import { MFile } from './mfile.class';

@Injectable()
export class FilesService {

	async saveFiles(files: MFile[]): Promise<FileElementResponse[]> {
		const dateFolder = format(new Date(), 'yyy-MM-dd');
		const uploadFolder = `${path}/uploads/${dateFolder}`;
		await ensureDir(uploadFolder);
		const res: FileElementResponse[] = [];

		for(const file of files ) {
			await writeFile(`${uploadFolder}/${file.originalname}`, file.buffer);
			res.push({url: `${dateFolder}/${file.originalname}`, name: file.originalname});
		}
		return res;
	}

	convertToWebP(file: Buffer): Promise<Buffer> {
		return sharp(file)
					.webp()
					.toBuffer();
	}

}
