import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const UserEmail = createParamDecorator(
	(date: unknown, ctx: ExecutionContext) => {
		const request = ctx.switchToHttp().getRequest();
		return request.user;
	}
)