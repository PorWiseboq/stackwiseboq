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
  
  protected async get(data: Input[]): Promise<{[Identifier: string]: HierarchicalDataTable}> {
 		if (this.request.params.id) {
 		  return await DatabaseHelper.retrieve([{
 		    target: SourceType.Relational,
        group: "Blog",
        name: "id",
        value: this.request.params.id,
        guid: null,
        validation: null
 		  }], null);
 		} else {
 		  return await DatabaseHelper.retrieve([{
 		    target: SourceType.Relational,
        group: "Blog",
        name: "id",
        value: 1,
        guid: null,
        validation: null
 		  }], null);
 		}
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
		RequestHelper.registerInput('d064b129', "relational", "Blog", "title");
		ValidationHelper.registerInput('d064b129', "Textbox 2", true, "ต้องมีหัวข้อเรื่อง");
    input = RequestHelper.getInput(request, 'd064b129');
    
    // Override data parsing and manipulation of Textbox 2 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('a0641238', "relational", "Blog", "body");
		ValidationHelper.registerInput('a0641238', "Textbox 1", true, "ต้องมีเนื้อหา");
    input = RequestHelper.getInput(request, 'a0641238');
    
    // Override data parsing and manipulation of Textbox 1 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('1d258b94', "relational", "Blog", "description");
		ValidationHelper.registerInput('1d258b94', "Textbox 3", true, "ต้องมีโดยย่อ");
    input = RequestHelper.getInput(request, '1d258b94');
    
    // Override data parsing and manipulation of Textbox 3 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('9ba2b637', "relational", "Blog", "keywords");
		ValidationHelper.registerInput('9ba2b637', "Textbox 1", true, "ต้องใช้คีย์เวิร์ด");
    input = RequestHelper.getInput(request, '9ba2b637');
    
    // Override data parsing and manipulation of Textbox 1 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('3dcb582a', "relational", "Blog", "image");
		ValidationHelper.registerInput('3dcb582a', "Textbox 3", false, undefined);
    input = RequestHelper.getInput(request, '3dcb582a');
    
    // Override data parsing and manipulation of Textbox 3 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('50cb1c1b', "relational", "Blog", "bid");
		ValidationHelper.registerInput('50cb1c1b', "Hidden 1", false, undefined);
    input = RequestHelper.getInput(request, '50cb1c1b');
    
    // Override data parsing and manipulation of Hidden 1 here:
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