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
import {ProjectConfigurationHelper} from "../../../../helpers/ProjectConfigurationHelper.js";

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
    return new Promise(async (resolve, reject) => {
      try {
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
      } catch(error) {
        reject(error);
      }
    });
  }
  
  protected async get(data: Input[]): Promise<{[Identifier: string]: HierarchicalDataTable}> {
    return new Promise(async (resolve, reject) => {
      try {
        if (!this.request.session || !this.request.session.uid) {
          this.response.redirect('/authentication');
        } else {
          let schemata = ProjectConfigurationHelper.getDataSchema();
          let inputs = RequestHelper.createInputs({
            'Store.oid': this.request.session.uid
          });
          let results = await DatabaseHelper.retrieve(inputs, schemata.tables['Store'], this.request.session);
          
          if (results['Store'].rows.length != 0) {
            this.response.redirect('/bidder/auction');
          }
        }
        
     	  resolve(null);
      } catch(error) {
        reject(error);
      }
    });
  }
  
  protected async post(data: Input[]): Promise<{[Identifier: string]: HierarchicalDataTable}> {
    return new Promise(async (resolve, reject) => {
      /* try {
        resolve(await super.post(data));
      } catch(error) {
        reject(error);
      } */
      reject(new Error("NotImplementedError"));
    });
  }
  
  protected async put(data: Input[]): Promise<{[Identifier: string]: HierarchicalDataTable}> {
    return new Promise(async (resolve, reject) => {
      /* try {
        resolve(await super.put(data));
      } catch(error) {
        reject(error);
      } */
      reject(new Error("NotImplementedError"));
    });
  }
  
  protected async delete(data: Input[]): Promise<{[Identifier: string]: HierarchicalDataTable}> {
    return new Promise(async (resolve, reject) => {
      /* try {
        resolve(await super.delete(data));
      } catch(error) {
        reject(error);
      } */
      reject(new Error("NotImplementedError"));
    });
  }
  
  protected async insert(data: Input[], schema: DataTableSchema): Promise<HierarchicalDataRow[]> {
    return new Promise(async (resolve, reject) => {
    	/* Uncomment to allow insert action of any button on the page. */
      /* try {
      	let options = RequestHelper.getOptions(this.pageId, this.request);
        resolve(await DatabaseHelper.insert(data, schema, options.crossRelationUpsert, this.request.session));
      } catch(error) {
        reject(error);
      } */
      reject(new Error("NotImplementedError"));
    });
  }
  
  protected async update(data: Input[], schema: DataTableSchema): Promise<HierarchicalDataRow[]> {
    return new Promise(async (resolve, reject) => {
    	/* Uncomment to allow update action of any button on the page. */
      /* try {
      	let options = RequestHelper.getOptions(this.pageId, this.request);
        resolve(await DatabaseHelper.update(data, schema, options.crossRelationUpsert, this.request.session));
      } catch(error) {
        reject(error);
      } */
      reject(new Error("NotImplementedError"));
    });
    return ;
  }
  
  protected async remove(data: Input[], schema: DataTableSchema): Promise<HierarchicalDataRow[]> {
    return new Promise(async (resolve, reject) => {
    	/* Uncomment to allow delete action of any button on the page. */
      /* try {
        resolve(await DatabaseHelper.delete(data, schema, this.request.session));
      } catch(error) {
        reject(error);
      } */
      reject(new Error("NotImplementedError"));
    });
  }
  
  protected async retrieve(data: Input[], schema: DataTableSchema): Promise<{[Identifier: string]: HierarchicalDataTable}> {
    return new Promise(async (resolve, reject) => {
    	/* Uncomment to allow retrieve action of any button on the page. */
      /* try {
        resolve(await DatabaseHelper.retrieve(data, schema, this.request.session));
      } catch(error) {
        reject(error);
      } */
      reject(new Error("NotImplementedError"));
    });
  }
  
  protected async navigate(data: Input[], schema: DataTableSchema): Promise<string> {
    return new Promise(async (resolve, reject) => {
      try {
        await DatabaseHelper.update(data, schema, true, this.request.session);
 		    
 		    resolve('/bidder/auction');
      } catch(error) {
        reject(error);
      }
    });
  }

  // Auto[MergingBegin]--->  
  private initialize(request: Request): [ActionType, DataTableSchema, Input[]] {
  	let schema: DataTableSchema = RequestHelper.getSchema(this.pageId, request);
  	let data: Input[] = [];
  	let input: Input = null;
  	
	  // <---Auto[MergingBegin]
	  
	  // Auto[Merging]--->
    RequestHelper.registerSubmit("ea2e6d53", "e6d44b49", "navigate", ["d66b23a4","e27d4c3b","8bcca5bc","3a931201","37473e1c","9d2bb91e","c085ee08","eca33837","e07e83cb","3a91a437","903420db","8ce0a253","72928a9c","d74e7c81"], {initClass: null, crossRelationUpsert: true});
		RequestHelper.registerInput('d66b23a4', "relational", "User.Store", "name");
		ValidationHelper.registerInput('d66b23a4', "Textbox 3", true, "กรุณาระบุชื่อร้านค้า");
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, 'd66b23a4' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Textbox 3 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('e27d4c3b', "relational", "User", "firstName");
		ValidationHelper.registerInput('e27d4c3b', "Textbox 1", true, "กรุณาระบุชื่อเจ้าของร้านค้า");
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, 'e27d4c3b' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Textbox 1 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('3a931201', "relational", "User", "lastName");
		ValidationHelper.registerInput('3a931201', "Textbox 2", true, "กรุณาระบุนามสกุลเจ้าของร้านค้า");
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '3a931201' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Textbox 2 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('8bcca5bc', "relational", "User", "contactNumber");
		ValidationHelper.registerInput('8bcca5bc', "Textbox 4", true, "กรุณาระบุเบอร์โทรศัพท์เจ้าของร้านค้า");
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '8bcca5bc' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Textbox 4 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('37473e1c', "relational", "User", "province");
		ValidationHelper.registerInput('37473e1c', "Textbox 14", true, "กรุณาระบุชื่อจังหวัด");
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '37473e1c' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Textbox 14 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('9d2bb91e', "relational", "User", "district");
		ValidationHelper.registerInput('9d2bb91e', "Textbox 12", true, "กรุณาระบุชื่ออำเภอ / แขวง");
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '9d2bb91e' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Textbox 12 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('c085ee08', "relational", "User", "subDistrict");
		ValidationHelper.registerInput('c085ee08', "Textbox 13", true, "กรุณาระบุชื่อตำบล / เขต");
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, 'c085ee08' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Textbox 13 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('eca33837', "relational", "User", "address");
		ValidationHelper.registerInput('eca33837', "Textbox 9", true, "กรุณาระบุบ้านเลขที่");
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, 'eca33837' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Textbox 9 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('3a91a437', "relational", "User", "lane");
		ValidationHelper.registerInput('3a91a437', "Textbox 10", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '3a91a437' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Textbox 10 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('e07e83cb', "relational", "User", "road");
		ValidationHelper.registerInput('e07e83cb', "Textbox 11", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, 'e07e83cb' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Textbox 11 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('903420db', "relational", "User", "postalCode");
		ValidationHelper.registerInput('903420db', "Textbox 15", true, "กรุณาระบุรหัสไปรษณีย์");
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '903420db' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Textbox 15 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('8ce0a253', "relational", "User", "id");
		ValidationHelper.registerInput('8ce0a253', "Hidden 1", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '8ce0a253' + ((i == -1) ? '' : '[' + i + ']'));
      if (input) input.value = request.session['uid'];
    
    // Override data parsing and manipulation of Hidden 1 here:
    // 
    if (input) input.value = this.request.session.uid;
    
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('72928a9c', "relational", "User.Store", "oid");
		ValidationHelper.registerInput('72928a9c', "Hidden 1", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '72928a9c' + ((i == -1) ? '' : '[' + i + ']'));
      if (input) input.value = request.session['uid'];
    
      // Override data parsing and manipulation of Hidden 1 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('d74e7c81', "relational", "User.Store", "sid");
		ValidationHelper.registerInput('d74e7c81', "Hidden 1", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, 'd74e7c81' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Hidden 1 here:
      // 
      
      if (input != null) data.push(input);
    }

	  // <---Auto[Merging]
	  
	  // Auto[MergingEnd]--->
	  
  	let action: ActionType = RequestHelper.getAction(this.pageId, request);
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