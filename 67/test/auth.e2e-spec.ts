import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { disconnect } from 'mongoose';
import { AuthDto } from 'src/auth/dto/auth.dto';

const loginDto: AuthDto = {
	login: 'a2@.e.by',
	password: '123'
}

describe('AuthController (e2e)', () => {
	let app: INestApplication;

	beforeEach(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule],
		}).compile();

		app = moduleFixture.createNestApplication();
		await app.init();

	});

	it('/auth/login (POST) - login success', async () => {
		return request(app.getHttpServer())
			.post('/auth/login')
			.send(loginDto)
			.expect(200)
			.then(({ body }: request.Response) => {
				expect(body.access_token).toBeDefined();
			});
	});

	it('/auth/login (POST) - login fail', () => {
		return request(app.getHttpServer())
			.post('/auth/login')
			.send({...loginDto, login: 'a111@.e.by'})
			.expect(401, {
        message: 'Пользователь с таким email не найден',
        error: 'Unauthorized',
        statusCode: 401
			});
	});

	it('/auth/login (POST) - password fail', () => {
		return request(app.getHttpServer())
			.post('/auth/login')
			.send({...loginDto, password: '111'})
			.expect(401, {
        message: 'Пароль введен не правильно',
        error: 'Unauthorized',
        statusCode: 401
			});
	});

	afterAll(() => {
		disconnect();
	});

});
