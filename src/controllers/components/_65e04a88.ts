// Auto[Generating:V1]--->
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.

// Auto[Import]--->
import {Request, Response} from "express";
import {SourceType, ActionType, HierarchicalDataTable, HierarchicalDataRow, HierarchicalDataColumn, Input, DatabaseHelper} from '../helpers/DatabaseHelper.js';
import {ValidationInfo, ValidationHelper} from '../helpers/ValidationHelper.js';
import {RequestHelper} from '../helpers/RequestHelper.js';
import {RenderHelper} from '../helpers/RenderHelper.js';
import {DataTableSchema} from '../helpers/SchemaHelper.js';
import {Base} from './Base.js';

// <---Auto[Import]

// Import additional modules here:
//

// Auto[Declare]--->
/*enum SourceType {
  Relational,
  PrioritizedWorker,
  Document,
  VolatileMemory
}
enum ActionType {
  Insert,
  Update,
  Delete,
  Retrieve,
  Popup,
  Navigate
}
enum ValidationInfo {
  name: string;
  required: boolean;
  customMessage: string;
}*/
// <---Auto[Declare]

// Declare private static variables here:
//

// Auto[Interface]--->
/*interface HierarchicalDataTable {
	source: SourceType;
	group: string;
  rows: HierarchicalDataRow[];
}
interface HierarchicalDataRow {
  keys: {[Identifier: string]: HierarchicalDataColumn};
  columns: {[Identifier: string]: HierarchicalDataColumn};
  relations: {[Identifier: string]: HierarchicalDataTable};
}
interface HierarchicalDataColumn {
	name: string;
  value: any;
}
interface Input {
  target: SourceType;
  group: string;
  name: string;
  value: any;
  guid: string;
  validation: ValidationInfo;
}*/
// <---Auto[Interface]

// Declare or extend interfaces here:
//

// Auto[ClassBegin]--->
class Controller extends Base {
  constructor(request: Request, response: Response, template: string) {
  	super(request, response, template);
  	try {
	    let [action, schema, data] = this.initialize(request);
	    this.perform(action, schema, data);
   	} catch(error) {
	  	RenderHelper.error(response, error);
	  }
  }
  // <---Auto[ClassBegin]
  
  // Declare class variables and functions here:
  //
  protected validate(data: Input[]): void {
  	// The message of thrown error will be the validation message.
  	//
 		ValidationHelper.validate(data);
  }
  
  protected async accessories(data: Input[]): Promise<any> {
 	  return new Promise((resolve) => {
 	    resolve({
 		    title: null,
 		    description: null,
 		    keywords: null,
 		    language: null,
 		    contentType: null,
 		    revisitAfter: null,
 		    robots: null,
 		    linkUrl: null,
 		    imageUrl: null,
 		    itemType: null,
 		    contentLocale: null
 		  });
 	  });
  }
  
  protected async get(data: Input[]): Promise<{[Identifier: string]: HierarchicalDataTable}> {
 		return super.get(data);
  }
  
  protected async post(data: Input[]): Promise<{[Identifier: string]: HierarchicalDataTable}> {
 		return super.post(data);
  }
  
  protected async put(data: Input[]): Promise<{[Identifier: string]: HierarchicalDataTable}> {
 		return super.put(data);
  }
  
  protected async delete(data: Input[]): Promise<{[Identifier: string]: HierarchicalDataTable}> {
 		return super.delete(data);
  }
  
  protected async insert(data: Input[], schema: DataTableSchema): Promise<HierarchicalDataRow[]> {
 		return await DatabaseHelper.insert(data, schema);
  }
  
  protected async update(data: Input[], schema: DataTableSchema): Promise<HierarchicalDataRow[]> {
 		return await DatabaseHelper.update(data, schema);
  }
  
  protected async remove(data: Input[], schema: DataTableSchema): Promise<HierarchicalDataRow[]> {
 		return await DatabaseHelper.delete(data, schema);
  }
  
  protected async retrieve(data: Input[], schema: DataTableSchema): Promise<{[Identifier: string]: HierarchicalDataTable}> {
 		return await DatabaseHelper.retrieve(data, schema);
  }
  
  protected async navigate(data: Input[], schema: DataTableSchema): Promise<string> {
 		return '/';
  }
 	
  // Auto[MergingBegin]--->  
  private initialize(request: Request): [ActionType, DataTableSchema, Input[]] {
  	let action: ActionType = RequestHelper.getAction(request);
  	let schema: DataTableSchema = RequestHelper.getSchema(request);
  	let data: Input[] = [];
  	let input: Input = null;
  	
	  // <---Auto[MergingBegin]
	  
	  // Auto[Merging]--->
		RequestHelper.registerInput('5a972a57', undefined, undefined, undefined);
		ValidationHelper.registerInput('5a972a57', "Textbox 4", false, undefined);
    input = RequestHelper.getInput(request, '5a972a57');
    
    // Override data parsing and manipulation of Textbox 4 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('607d8ee2', undefined, undefined, undefined);
		ValidationHelper.registerInput('607d8ee2', "Textbox 5", false, undefined);
    input = RequestHelper.getInput(request, '607d8ee2');
    
    // Override data parsing and manipulation of Textbox 5 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('54e20435', undefined, undefined, undefined);
		ValidationHelper.registerInput('54e20435', "Textbox 1", false, undefined);
    input = RequestHelper.getInput(request, '54e20435');
    
    // Override data parsing and manipulation of Textbox 1 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('31894d87', undefined, undefined, undefined);
		ValidationHelper.registerInput('31894d87', "Textbox 2", false, undefined);
    input = RequestHelper.getInput(request, '31894d87');
    
    // Override data parsing and manipulation of Textbox 2 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('b2321320', undefined, undefined, undefined);
		ValidationHelper.registerInput('b2321320', "Textbox 3", false, undefined);
    input = RequestHelper.getInput(request, 'b2321320');
    
    // Override data parsing and manipulation of Textbox 3 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('b6c9ad89', undefined, undefined, undefined);
		ValidationHelper.registerInput('b6c9ad89', "Radio 3", false, undefined);
    input = RequestHelper.getInput(request, 'b6c9ad89');
    
    // Override data parsing and manipulation of Radio 3 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('a0b78888', undefined, undefined, undefined);
		ValidationHelper.registerInput('a0b78888', "Radio 4", false, undefined);
    input = RequestHelper.getInput(request, 'a0b78888');
    
    // Override data parsing and manipulation of Radio 4 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('cc34eced', undefined, undefined, undefined);
		ValidationHelper.registerInput('cc34eced', "Radio 5", false, undefined);
    input = RequestHelper.getInput(request, 'cc34eced');
    
    // Override data parsing and manipulation of Radio 5 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('33408187', undefined, undefined, undefined);
		ValidationHelper.registerInput('33408187', "Checkbox 1", false, undefined);
    input = RequestHelper.getInput(request, '33408187');
    
    // Override data parsing and manipulation of Checkbox 1 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('230ab296', undefined, undefined, undefined);
		ValidationHelper.registerInput('230ab296', "Textbox 6", false, undefined);
    input = RequestHelper.getInput(request, '230ab296');
    
    // Override data parsing and manipulation of Textbox 6 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('babc9e30', undefined, undefined, undefined);
		ValidationHelper.registerInput('babc9e30', "Checkbox 2", false, undefined);
    input = RequestHelper.getInput(request, 'babc9e30');
    
    // Override data parsing and manipulation of Checkbox 2 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('9200d56a', undefined, undefined, undefined);
		ValidationHelper.registerInput('9200d56a', "Textbox 7", false, undefined);
    input = RequestHelper.getInput(request, '9200d56a');
    
    // Override data parsing and manipulation of Textbox 7 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('12403b79', undefined, undefined, undefined);
		ValidationHelper.registerInput('12403b79', "Radio 5", false, undefined);
    input = RequestHelper.getInput(request, '12403b79');
    
    // Override data parsing and manipulation of Radio 5 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('c3daa46d', undefined, undefined, undefined);
		ValidationHelper.registerInput('c3daa46d', "Textbox 1", false, undefined);
    input = RequestHelper.getInput(request, 'c3daa46d');
    
    // Override data parsing and manipulation of Textbox 1 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('0606ea02', undefined, undefined, undefined);
		ValidationHelper.registerInput('0606ea02', "Radio 6", false, undefined);
    input = RequestHelper.getInput(request, '0606ea02');
    
    // Override data parsing and manipulation of Radio 6 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('4a397863', undefined, undefined, undefined);
		ValidationHelper.registerInput('4a397863', "Textbox 3", false, undefined);
    input = RequestHelper.getInput(request, '4a397863');
    
    // Override data parsing and manipulation of Textbox 3 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('915d8ec6', undefined, undefined, undefined);
		ValidationHelper.registerInput('915d8ec6', "Textbox 2", false, undefined);
    input = RequestHelper.getInput(request, '915d8ec6');
    
    // Override data parsing and manipulation of Textbox 2 here:
    // 
    
    if (input != null) data.push(input);
	  // <---Auto[Merging]
	  
	  // Auto[MergingEnd]--->
	  
	  return [action, schema, data];
	}
  // <---Auto[MergingEnd]
  
  // Auto[ClassEnd]--->
}
// <---Auto[ClassEnd]

// Export variables here:
//
export default Controller;

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.