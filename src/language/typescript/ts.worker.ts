/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as edworker from 'novel-editor-core/esm/vs/editor/editor.worker';
import { ICreateData, create } from './tsWorker';
import { worker } from '../../fillers/novel-editor-core';

self.onmessage = () => {
	// ignore the first message
	edworker.initialize((ctx: worker.IWorkerContext, createData: ICreateData) => {
		return create(ctx, createData);
	});
};

export { create } from './tsWorker';
