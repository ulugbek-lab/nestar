import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

import { ViewGroup } from '../../enums/view.enum';
import * as mongoose from 'mongoose';

@InputType()
export class ViewInput {
	@IsNotEmpty()
	@Field(() => ViewGroup)
	memberId: mongoose.ObjectId;

	@IsNotEmpty()
	@Field(() => String)
	viewRefId: mongoose.ObjectId;

	@IsNotEmpty()
	@Field(() => ViewGroup)
	viewGroup: ViewGroup;
}
