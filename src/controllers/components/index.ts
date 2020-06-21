// Auto[Generating:V1]--->
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.

// Auto[Import]--->
import {Request, Response} from "express";
import {SourceType, ActionType, HierarchicalDataTable, HierarchicalDataRow, HierarchicalDataColumn, Input, DatabaseHelper} from '../helpers/DatabaseHelper.js';
import {ValidationInfo, ValidationHelper} from '../helpers/ValidationHelper.js';
import {RequestHelper} from '../helpers/RequestHelper.js';
import {RenderHelper} from '../helpers/RenderHelper.js';
import {Base} from './Base.js';

// <---Auto[Import]

// Import additional modules here:
//
import {RelationalDatabaseClient} from '../helpers/ConnectionHelper.js'

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
  columns: HierarchicalDataColumn[];
  relations: HierarchicalDataTable[];
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
	    let [action, data] = this.initialize(request);
	    this.perform(action, data);
   	} catch(error) {
	  	RenderHelper.error(this.response, error);
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
  
  protected async get(data: Input[]): Promise<HierarchicalDataTable[]> {
 		return new Promise((resolve, reject) => {
 		  if (this.request.session.uid) {
 		    RelationalDatabaseClient.query('SELECT * FROM User WHERE id = ?', [parseInt(this.request.session.uid)], (function(error, results, fields) {
          if (error) {
            resolve(null);
          } else if (results.length > 0) {
            resolve([{
     		      source: null,
     		      group: 'User',
     		      rows: [{
       		      columns: [{
       		        name: 'email',
       		        value: results[0].email
       		      }],
       		      relations: []
     		      }]
     		    }]);
    			} else {
            resolve(null);
    		  }
    		}).bind(this));
 		  } else {
 		    resolve([{
 		      source: null,
 		      group: 'User',
 		      rows: [{
   		      columns: [{
   		        name: 'email',
   		        value: 'ยังไม่ได้เข้าสู่ระบบ'
   		      }],
   		      relations: []
 		      }]
 		    }]);
 		  }
 		});
  }
  
  protected async post(data: Input[]): Promise<HierarchicalDataTable[]> {
 		return super.post(data);
  }
  
  protected async put(data: Input[]): Promise<HierarchicalDataTable[]> {
 		return super.put(data);
  }
  
  protected async delete(data: Input[]): Promise<HierarchicalDataTable[]> {
 		return super.delete(data);
  }
  
  protected async insert(data: Input[]): Promise<HierarchicalDataRow> {
 		return await DatabaseHelper.insert(data);
  }
  
  protected async update(data: Input[]): Promise<HierarchicalDataRow> {
 		return await DatabaseHelper.update(data);
  }
  
  protected async remove(data: Input[]): Promise<boolean> {
 		return await DatabaseHelper.delete(data);
  }
  
  protected async retrieve(data: Input[]): Promise<HierarchicalDataTable> {
 		return await DatabaseHelper.retrieve(data);
  }
  
  protected async navigate(data: Input[]): Promise<string> {
 		return '/';
  }
 	
  // Auto[MergingBegin]--->  
  private initialize(request: Request): [ActionType, Input[]] {
  	let action: ActionType = RequestHelper.getAction(request);
  	let data: Input[] = [];
  	let input: Input = null;
  	
	  // <---Auto[MergingBegin]
	  
	  // Auto[Merging]--->
		RequestHelper.registerInput('56aab5e4', undefined, undefined, undefined);
		ValidationHelper.registerInput('56aab5e4', "Select 1", false, undefined);
    input = RequestHelper.getInput(request, '56aab5e4');
    
    // Override data parsing and manipulation of Select 1 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('4c3d0546', undefined, undefined, undefined);
		ValidationHelper.registerInput('4c3d0546', "Select 2", false, undefined);
    input = RequestHelper.getInput(request, '4c3d0546');
    
    // Override data parsing and manipulation of Select 2 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('4e8e63a5', undefined, undefined, undefined);
		ValidationHelper.registerInput('4e8e63a5', "Textbox 1", false, undefined);
    input = RequestHelper.getInput(request, '4e8e63a5');
    
    // Override data parsing and manipulation of Textbox 1 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('e4480a5d', undefined, undefined, undefined);
		ValidationHelper.registerInput('e4480a5d', "Select 3", false, undefined);
    input = RequestHelper.getInput(request, 'e4480a5d');
    
    // Override data parsing and manipulation of Select 3 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('54e97a43', undefined, undefined, undefined);
		ValidationHelper.registerInput('54e97a43', "Textbox 2", false, undefined);
    input = RequestHelper.getInput(request, '54e97a43');
    
    // Override data parsing and manipulation of Textbox 2 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('c9099404', undefined, undefined, undefined);
		ValidationHelper.registerInput('c9099404', "Checkbox 1", false, undefined);
    input = RequestHelper.getInput(request, 'c9099404');
    
    // Override data parsing and manipulation of Checkbox 1 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('8d4d7ae1', undefined, undefined, undefined);
		ValidationHelper.registerInput('8d4d7ae1', "Checkbox 2", false, undefined);
    input = RequestHelper.getInput(request, '8d4d7ae1');
    
    // Override data parsing and manipulation of Checkbox 2 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('3e14ad68', undefined, undefined, undefined);
		ValidationHelper.registerInput('3e14ad68', "File 1", false, undefined);
    input = RequestHelper.getInput(request, '3e14ad68');
    
    // Override data parsing and manipulation of File 1 here:
    // 
    
    if (input != null) data.push(input);
	  // <---Auto[Merging]
	  
	  // Auto[MergingEnd]--->
	  
	  return [action, data];
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