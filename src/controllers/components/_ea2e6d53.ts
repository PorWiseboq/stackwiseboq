// Auto[Generating:V1]--->
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.

// Auto[Import]--->
import {Request, Response} from "express";
import {SourceType, ActionType, HierarchicalDataTable, HierarchicalDataRow, Input, DatabaseHelper} from '../helpers/DatabaseHelper.js';
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
  keys: {[Identifier: string]: any};
  columns: {[Identifier: string]: any};
  relations: {[Identifier: string]: HierarchicalDataTable};
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
		RequestHelper.registerInput('d66b23a4', undefined, undefined, undefined);
		ValidationHelper.registerInput('d66b23a4', "Textbox 3", false, undefined);
    input = RequestHelper.getInput(request, 'd66b23a4');
    
    // Override data parsing and manipulation of Textbox 3 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('e27d4c3b', undefined, undefined, undefined);
		ValidationHelper.registerInput('e27d4c3b', "Textbox 1", false, undefined);
    input = RequestHelper.getInput(request, 'e27d4c3b');
    
    // Override data parsing and manipulation of Textbox 1 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('3a931201', undefined, undefined, undefined);
		ValidationHelper.registerInput('3a931201', "Textbox 2", false, undefined);
    input = RequestHelper.getInput(request, '3a931201');
    
    // Override data parsing and manipulation of Textbox 2 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('8bcca5bc', undefined, undefined, undefined);
		ValidationHelper.registerInput('8bcca5bc', "Textbox 4", false, undefined);
    input = RequestHelper.getInput(request, '8bcca5bc');
    
    // Override data parsing and manipulation of Textbox 4 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('37473e1c', undefined, undefined, undefined);
		ValidationHelper.registerInput('37473e1c', "Textbox 14", false, undefined);
    input = RequestHelper.getInput(request, '37473e1c');
    
    // Override data parsing and manipulation of Textbox 14 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('9d2bb91e', undefined, undefined, undefined);
		ValidationHelper.registerInput('9d2bb91e', "Textbox 12", false, undefined);
    input = RequestHelper.getInput(request, '9d2bb91e');
    
    // Override data parsing and manipulation of Textbox 12 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('c085ee08', undefined, undefined, undefined);
		ValidationHelper.registerInput('c085ee08', "Textbox 13", false, undefined);
    input = RequestHelper.getInput(request, 'c085ee08');
    
    // Override data parsing and manipulation of Textbox 13 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('eca33837', undefined, undefined, undefined);
		ValidationHelper.registerInput('eca33837', "Textbox 9", false, undefined);
    input = RequestHelper.getInput(request, 'eca33837');
    
    // Override data parsing and manipulation of Textbox 9 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('3a91a437', undefined, undefined, undefined);
		ValidationHelper.registerInput('3a91a437', "Textbox 10", false, undefined);
    input = RequestHelper.getInput(request, '3a91a437');
    
    // Override data parsing and manipulation of Textbox 10 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('e07e83cb', undefined, undefined, undefined);
		ValidationHelper.registerInput('e07e83cb', "Textbox 11", false, undefined);
    input = RequestHelper.getInput(request, 'e07e83cb');
    
    // Override data parsing and manipulation of Textbox 11 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('903420db', undefined, undefined, undefined);
		ValidationHelper.registerInput('903420db', "Textbox 15", false, undefined);
    input = RequestHelper.getInput(request, '903420db');
    
    // Override data parsing and manipulation of Textbox 15 here:
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