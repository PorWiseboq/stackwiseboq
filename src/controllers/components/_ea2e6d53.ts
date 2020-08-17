// Auto[Generating:V1]--->
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.

// Auto[Import]--->
import {Request, Response} from "express";
import {SourceType, ActionType, HierarchicalDataTable, HierarchicalDataRow, Input, DatabaseHelper} from "../helpers/DatabaseHelper.js";
import {ValidationInfo, ValidationHelper} from "../helpers/ValidationHelper.js";
import {RequestHelper} from "../helpers/RequestHelper.js";
import {RenderHelper} from "../helpers/RenderHelper.js";
import {DataTableSchema} from "../helpers/SchemaHelper.js";
import {Base} from "./Base.js";

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
	    const [action, schema, data] = this.initialize(request);
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
        this.response.redirect("/authentication");
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
 		    
 		    resolve("/bidder/auction");
 		  } catch(error) {
 		    reject(error);
 		  }
 		});
  }
 	
  // Auto[MergingBegin]--->  
  private initialize(request: Request): [ActionType, DataTableSchema, Input[]] {
  	const action: ActionType = RequestHelper.getAction(request);
  	const schema: DataTableSchema = RequestHelper.getSchema(request);
  	const data: Input[] = [];
  	let input: Input = null;
  	
	  // <---Auto[MergingBegin]
	  
	  // Auto[Merging]--->
    RequestHelper.registerSubmit("e6d44b49", "navigate", ["d66b23a4","e27d4c3b","8bcca5bc","3a931201","37473e1c","9d2bb91e","c085ee08","eca33837","e07e83cb","3a91a437","903420db","8ce0a253"], {initClass: null, crossRelationUpsert: false});
		RequestHelper.registerInput("d66b23a4", "relational", "User.Store", "name");
		ValidationHelper.registerInput("d66b23a4", "Textbox 3", true, "กรุณาระบุชื่อร้านค้า");
    for (let i=-1; i<1024; i++) {
      input = RequestHelper.getInput(request, "d66b23a4" + ((i == -1) ? "" : "[" + i + "]"));
    
      // Override data parsing and manipulation of Textbox 3 here:
      // 
      
      if (input != null) data.push(input);
      else if (i > -1) break;
    }
		RequestHelper.registerInput("e27d4c3b", "relational", "User", "firstName");
		ValidationHelper.registerInput("e27d4c3b", "Textbox 1", true, "กรุณาระบุชื่อเจ้าของร้านค้า");
    for (let i=-1; i<1024; i++) {
      input = RequestHelper.getInput(request, "e27d4c3b" + ((i == -1) ? "" : "[" + i + "]"));
    
      // Override data parsing and manipulation of Textbox 1 here:
      // 
      
      if (input != null) data.push(input);
      else if (i > -1) break;
    }
		RequestHelper.registerInput("3a931201", "relational", "User", "lastName");
		ValidationHelper.registerInput("3a931201", "Textbox 2", true, "กรุณาระบุนามสกุลเจ้าของร้านค้า");
    for (let i=-1; i<1024; i++) {
      input = RequestHelper.getInput(request, "3a931201" + ((i == -1) ? "" : "[" + i + "]"));
    
      // Override data parsing and manipulation of Textbox 2 here:
      // 
      
      if (input != null) data.push(input);
      else if (i > -1) break;
    }
		RequestHelper.registerInput("8bcca5bc", "relational", "User", "contactNumber");
		ValidationHelper.registerInput("8bcca5bc", "Textbox 4", true, "กรุณาระบุเบอร์โทรศัพท์เจ้าของร้านค้า");
    for (let i=-1; i<1024; i++) {
      input = RequestHelper.getInput(request, "8bcca5bc" + ((i == -1) ? "" : "[" + i + "]"));
    
      // Override data parsing and manipulation of Textbox 4 here:
      // 
      
      if (input != null) data.push(input);
      else if (i > -1) break;
    }
		RequestHelper.registerInput("37473e1c", "relational", "User", "province");
		ValidationHelper.registerInput("37473e1c", "Textbox 14", true, "กรุณาระบุชื่อจังหวัด");
    for (let i=-1; i<1024; i++) {
      input = RequestHelper.getInput(request, "37473e1c" + ((i == -1) ? "" : "[" + i + "]"));
    
      // Override data parsing and manipulation of Textbox 14 here:
      // 
      
      if (input != null) data.push(input);
      else if (i > -1) break;
    }
		RequestHelper.registerInput("9d2bb91e", "relational", "User", "district");
		ValidationHelper.registerInput("9d2bb91e", "Textbox 12", true, "กรุณาระบุชื่ออำเภอ / แขวง");
    for (let i=-1; i<1024; i++) {
      input = RequestHelper.getInput(request, "9d2bb91e" + ((i == -1) ? "" : "[" + i + "]"));
    
      // Override data parsing and manipulation of Textbox 12 here:
      // 
      
      if (input != null) data.push(input);
      else if (i > -1) break;
    }
		RequestHelper.registerInput("c085ee08", "relational", "User", "subDistrict");
		ValidationHelper.registerInput("c085ee08", "Textbox 13", true, "กรุณาระบุชื่อตำบล / เขต");
    for (let i=-1; i<1024; i++) {
      input = RequestHelper.getInput(request, "c085ee08" + ((i == -1) ? "" : "[" + i + "]"));
    
      // Override data parsing and manipulation of Textbox 13 here:
      // 
      
      if (input != null) data.push(input);
      else if (i > -1) break;
    }
		RequestHelper.registerInput("eca33837", "relational", "User", "address");
		ValidationHelper.registerInput("eca33837", "Textbox 9", true, "กรุณาระบุบ้านเลขที่");
    for (let i=-1; i<1024; i++) {
      input = RequestHelper.getInput(request, "eca33837" + ((i == -1) ? "" : "[" + i + "]"));
    
      // Override data parsing and manipulation of Textbox 9 here:
      // 
      
      if (input != null) data.push(input);
      else if (i > -1) break;
    }
		RequestHelper.registerInput("3a91a437", "relational", "User", "lane");
		ValidationHelper.registerInput("3a91a437", "Textbox 10", false, undefined);
    for (let i=-1; i<1024; i++) {
      input = RequestHelper.getInput(request, "3a91a437" + ((i == -1) ? "" : "[" + i + "]"));
    
      // Override data parsing and manipulation of Textbox 10 here:
      // 
      
      if (input != null) data.push(input);
      else if (i > -1) break;
    }
		RequestHelper.registerInput("e07e83cb", "relational", "User", "road");
		ValidationHelper.registerInput("e07e83cb", "Textbox 11", false, undefined);
    for (let i=-1; i<1024; i++) {
      input = RequestHelper.getInput(request, "e07e83cb" + ((i == -1) ? "" : "[" + i + "]"));
    
      // Override data parsing and manipulation of Textbox 11 here:
      // 
      
      if (input != null) data.push(input);
      else if (i > -1) break;
    }
		RequestHelper.registerInput("903420db", "relational", "User", "postalCode");
		ValidationHelper.registerInput("903420db", "Textbox 15", true, "กรุณาระบุรหัสไปรษณีย์");
    for (let i=-1; i<1024; i++) {
      input = RequestHelper.getInput(request, "903420db" + ((i == -1) ? "" : "[" + i + "]"));
    
      // Override data parsing and manipulation of Textbox 15 here:
      // 
      
      if (input != null) data.push(input);
      else if (i > -1) break;
    }
		RequestHelper.registerInput("8ce0a253", "relational", "User", "id");
		ValidationHelper.registerInput("8ce0a253", "Hidden 1", false, undefined);
    for (let i=-1; i<1024; i++) {
      input = RequestHelper.getInput(request, "8ce0a253" + ((i == -1) ? "" : "[" + i + "]"));
    
    // Override data parsing and manipulation of Hidden 1 here:
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