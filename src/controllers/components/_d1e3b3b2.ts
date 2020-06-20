// Auto[Generating:V1]--->
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.

// Auto[Import]--->
import {Request, Response} from "express";
import {SourceType, ActionType, HierarchicalDataTable, HierarchicalDataRow, HierarchicalDataColumn, Input, DatabaseHelper} from "../helpers/DatabaseHelper.js";
import {ValidationInfo, ValidationHelper} from "../helpers/ValidationHelper.js";
import {RequestHelper} from "../helpers/RequestHelper.js";
import {RenderHelper} from "../helpers/RenderHelper.js";
import {Base} from "./Base.js";

// <---Auto[Import]

// Import additional modules here:
// ABCDE

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
  relations: HierarchicalDataTable[];
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
  constructor(request: Request, response: Response) {
  	super(request, response);
  	
  	try {
	    const [action, data] = this.initialize(request);
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
  
  protected async insert(data: Input[]): Promise<HierarchicalDataRow> {
 		return await DatabaseHelper.insert(data);
  }
  
  protected async update(data: Input[]): Promise<HierarchicalDataRow> {
 		return await DatabaseHelper.update(data);
  }
  
  protected async delete(data: Input[]): Promise<boolean> {
 		return await DatabaseHelper.delete(data);
  }
  
  protected async retrieve(data: Input[]): Promise<HierarchicalDataTable> {
 		return await DatabaseHelper.retrieve(data);
  }
  
  protected async navigate(data: Input[]): Promise<string> {
 		return "/";
  }
 	
  // Auto[MergingBegin]--->  
  private initialize(request: Request): [ActionType, Input[]] {
  	const action: ActionType = RequestHelper.getAction(request);
  	const data: Input[] = [];
  	const input: Input = null;
  	
	  // <---Auto[MergingBegin]
	  
	  // Auto[Merging]--->
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