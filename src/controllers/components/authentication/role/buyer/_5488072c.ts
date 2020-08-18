// Auto[Generating:V1]--->
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.

// Auto[Import]--->
import {Request, Response} from "express";
import {SourceType, ActionType, HierarchicalDataTable, HierarchicalDataRow, Input, DatabaseHelper} from '../../../../helpers/DatabaseHelper.js';
import {ValidationInfo, ValidationHelper} from '../../../../helpers/ValidationHelper.js';
import {RequestHelper} from '../../../../helpers/RequestHelper.js';
import {RenderHelper} from '../../../../helpers/RenderHelper.js';
import {DataTableSchema} from '../../../../helpers/SchemaHelper.js';
import {Base} from '../../../Base.js';

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
 		return new Promise(async (resolve) => {
   		if (!this.request.session || !this.request.session.uid) {
        this.response.redirect('/authentication');
      }
      
   	  resolve(null);
    });
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
 		return new Promise(async (resolve, reject) => {
 		  try {
 		    await DatabaseHelper.update(data, schema);
 		    
 		    resolve('/buyer/auction');
 		  } catch(error) {
 		    reject(error);
 		  }
 		});
  }
 	
  // Auto[MergingBegin]--->  
  private initialize(request: Request): [ActionType, DataTableSchema, Input[]] {
  	let action: ActionType = RequestHelper.getAction(request);
  	let schema: DataTableSchema = RequestHelper.getSchema(request);
  	let data: Input[] = [];
  	let input: Input = null;
  	
	  // <---Auto[MergingBegin]
	  
	  // Auto[Merging]--->
    RequestHelper.registerSubmit("68130617", "navigate", ["ab3a1c6e","340b9ddb","30d60c48","bd78c5c4"], {initClass: null, crossRelationUpsert: false});
		RequestHelper.registerInput('ab3a1c6e', "relational", "User", "firstName");
		ValidationHelper.registerInput('ab3a1c6e', "Textbox 5", true, "กรุณาระบุชื่อ");
    for (let i=-1; i<1024; i++) {
      input = RequestHelper.getInput(request, 'ab3a1c6e' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Textbox 5 here:
      // 
      
      if (input != null) data.push(input);
      else if (i > -1) break;
    }
		RequestHelper.registerInput('340b9ddb', "relational", "User", "lastName");
		ValidationHelper.registerInput('340b9ddb', "Textbox 6", true, "กรุณาระบุนามสกุล");
    for (let i=-1; i<1024; i++) {
      input = RequestHelper.getInput(request, '340b9ddb' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Textbox 6 here:
      // 
      
      if (input != null) data.push(input);
      else if (i > -1) break;
    }
		RequestHelper.registerInput('30d60c48', "relational", "User", "contactNumber");
		ValidationHelper.registerInput('30d60c48', "Textbox 7", true, "กรุณาระบุหมายเลขโทรศัพท์");
    for (let i=-1; i<1024; i++) {
      input = RequestHelper.getInput(request, '30d60c48' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Textbox 7 here:
      // 
      
      if (input != null) data.push(input);
      else if (i > -1) break;
    }
		RequestHelper.registerInput('bd78c5c4', "relational", "User", "id");
		ValidationHelper.registerInput('bd78c5c4', "Hidden 2", false, undefined);
    for (let i=-1; i<1024; i++) {
      input = RequestHelper.getInput(request, 'bd78c5c4' + ((i == -1) ? '' : '[' + i + ']'));
    
    // Override data parsing and manipulation of Hidden 2 here:
    // 
    if (input) input.value = this.request.session.uid;
    
      if (input != null) data.push(input);
      else if (i > -1) break;
    }

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