// Auto[Generating:V1]--->
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.

// Auto[Import]--->
import {Request, Response} from "express";
import {SourceType, ActionType, HierarchicalDataTable, HierarchicalDataRow, Input, DatabaseHelper} from './../helpers/DatabaseHelper.js';
import {ValidationInfo, ValidationHelper} from './../helpers/ValidationHelper.js';
import {RequestHelper} from './../helpers/RequestHelper.js';
import {RenderHelper} from './../helpers/RenderHelper.js';
import {DataTableSchema} from './../helpers/SchemaHelper.js';
import {Base} from './Base.js';

// <---Auto[Import]

// Import additional modules here:
// 
import {RelationalDatabaseClient} from '../helpers/ConnectionHelper.js';

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
  
  protected async get(data: Input[]): Promise<{[Identifier: string]: HierarchicalDataTable}> {
 		return new Promise((resolve, reject) => {
 		  if (this.request.session.uid) {
 		    RelationalDatabaseClient.query('SELECT * FROM User WHERE id = ?', [parseInt(this.request.session.uid)], (function(error, results, fields) {
          if (error) {
            resolve(null);
          } else if (results.length > 0) {
            resolve({
              User: {
       		      source: null,
       		      group: 'User',
       		      rows: [{
       		        keys: {},
         		      columns: {
         		        email: {
         		          name: 'email',
         		          value: results[0].email
         		        }
         		      },
         		      relations: {}
       		      }]
       		    }
            });
    			} else {
            resolve(null);
    		  }
    		}).bind(this));
 		  } else {
 		    resolve({
 		      User: {
   		      source: null,
   		      group: 'User',
   		      rows: [{
   		        keys: {},
     		      columns: {
     		        email: {
     		          name: 'email',
     		          value: 'ยังไม่ได้เข้าสู่ระบบ'
     		        }
     		      },
     		      relations: {}
   		      }]
 		      }
 		    });
 		  }
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
 		return '/';
  }
  
  // Auto[MergingBegin]--->  
  private initialize(request: Request): [ActionType, DataTableSchema, Input[]] {
  	let action: ActionType = RequestHelper.getAction(this.pageId, request);
  	let schema: DataTableSchema = RequestHelper.getSchema(this.pageId, request);
  	let data: Input[] = [];
  	let input: Input = null;
  	
	  // <---Auto[MergingBegin]
	  
	  // Auto[Merging]--->

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