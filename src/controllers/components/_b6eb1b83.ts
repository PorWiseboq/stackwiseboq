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
import {SchemaHelper} from '../helpers/SchemaHelper.js';
import {ProjectConfigurationHelper} from '../helpers/ProjectConfigurationHelper.js';

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
 		if (this.request.session) {
 		  switch (this.request.session.role) {
 		    case 'buyer':
          this.response.redirect('/buyer/auction');
 		      break;
 		    case 'bidder':
          this.response.redirect('/buyer/bidder');
 		      break;
 		    default:
          this.response.redirect('/authentication/role');
 		      break;
 		  }
    } else {
      return super.get(data);
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
    data.push({
      target: SourceType.Relational,
      group: "User",
      name: "id",
      value: this.request.session.uid,
      guid: null,
      validation: null
    });
    
    let rows = await DatabaseHelper.update(data, schema);
    if (rows.length != 0) {
      switch (rows[0].columns['role'].value) {
        case "buyer":
          this.response.redirect('/buyer/auction');
          break;
        case "bidder":
          this.response.redirect('/bidder/auction');
          break;
        default:
          throw new Error("เกิดข้อผิดพลาดในระบบและไม่สามารถบันทึกข้อมูลได้ กรุณาลองดูใหม่อีกครั้ง");
      }
    } else {
      throw new Error("เกิดข้อผิดพลาดในระบบและไม่สามารถบันทึกข้อมูลได้ กรุณาลองดูใหม่");
    }
  }
 	
  // Auto[MergingBegin]--->  
  private initialize(request: Request): [ActionType, DataTableSchema, Input[]] {
  	let action: ActionType = RequestHelper.getAction(request);
  	let schema: DataTableSchema = RequestHelper.getSchema(request);
  	let data: Input[] = [];
  	let input: Input = null;
  	
	  // <---Auto[MergingBegin]
	  
	  // Auto[Merging]--->
		RequestHelper.registerInput('02987944', "relational", "User", "role");
		ValidationHelper.registerInput('02987944', "buyer", false, undefined);
    input = RequestHelper.getInput(request, '02987944');
    
    // Override data parsing and manipulation of buyer here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('899069eb', "relational", "User", "role");
		ValidationHelper.registerInput('899069eb', "bidder", false, undefined);
    input = RequestHelper.getInput(request, '899069eb');
    
    // Override data parsing and manipulation of bidder here:
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