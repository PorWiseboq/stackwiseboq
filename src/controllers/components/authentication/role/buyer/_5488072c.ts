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
  Upsert,
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
  notification?: string;
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
 		
 		if (!this.request.session || !this.request.session.uid || this.request.session.role != 'buyer') {
      this.response.redirect('/authentication');
      throw new Error('Wrong Authentication');
    }
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
        let schemata = ProjectConfigurationHelper.getDataSchema();
        let inputs = RequestHelper.createInputs({
          'User.id': this.request.session.uid
        });
        let results = await DatabaseHelper.retrieve(inputs, schemata.tables['User'], this.request.session);
        
        if (results['User'].rows[0].columns['firstName'] && results['User'].rows[0].columns['lastName']) {
          this.response.redirect('/buyer/auction');
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
      reject(new Error("Not Implemented Error"));
    });
  }
  
  protected async put(data: Input[]): Promise<{[Identifier: string]: HierarchicalDataTable}> {
    return new Promise(async (resolve, reject) => {
      /* try {
        resolve(await super.put(data));
      } catch(error) {
        reject(error);
      } */
      reject(new Error("Not Implemented Error"));
    });
  }
  
  protected async delete(data: Input[]): Promise<{[Identifier: string]: HierarchicalDataTable}> {
    return new Promise(async (resolve, reject) => {
      /* try {
        resolve(await super.delete(data));
      } catch(error) {
        reject(error);
      } */
      reject(new Error("Not Implemented Error"));
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
      reject(new Error("Not Implemented Error"));
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
      reject(new Error("Not Implemented Error"));
    });
  }
  
  protected async upsert(data: Input[], schema: DataTableSchema): Promise<HierarchicalDataRow[]> {
    return new Promise(async (resolve, reject) => {
    	/* Uncomment to allow update action of any button on the page. */
      /* try {
        resolve(await DatabaseHelper.upsert(data, schema, this.request.session));
      } catch(error) {
        reject(error);
      } */
      reject(new Error("Not Implemented Error"));
    });
  }
  
  protected async remove(data: Input[], schema: DataTableSchema): Promise<HierarchicalDataRow[]> {
    return new Promise(async (resolve, reject) => {
    	/* Uncomment to allow delete action of any button on the page. */
      /* try {
        resolve(await DatabaseHelper.delete(data, schema, this.request.session));
      } catch(error) {
        reject(error);
      } */
      reject(new Error("Not Implemented Error"));
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
      reject(new Error("Not Implemented Error"));
    });
  }
  
  protected async navigate(data: Input[], schema: DataTableSchema): Promise<string> {
 		return new Promise(async (resolve, reject) => {
 		  try {
 		    await DatabaseHelper.update(data, schema, true, this.request.session);
 		    
 		    resolve('/buyer/auction');
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
    RequestHelper.registerSubmit("5488072c", "68130617", "navigate", ["ab3a1c6e","340b9ddb","30d60c48","bd78c5c4"], {initClass: null, crossRelationUpsert: false, enabledRealTimeUpdate: false});
		RequestHelper.registerInput('ab3a1c6e', "relational", "User", "firstName");
		ValidationHelper.registerInput('ab3a1c6e', "Textbox 5", true, "กรุณาระบุชื่อ");
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, 'ab3a1c6e' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Textbox 5 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('340b9ddb', "relational", "User", "lastName");
		ValidationHelper.registerInput('340b9ddb', "Textbox 6", true, "กรุณาระบุนามสกุล");
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '340b9ddb' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Textbox 6 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('30d60c48', "relational", "User", "contactNumber");
		ValidationHelper.registerInput('30d60c48', "Textbox 7", true, "กรุณาระบุเบอร์โทรศัพท์ส่วนตัว");
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '30d60c48' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Textbox 7 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('d0730a53', "relational", "User", "taxerName");
		ValidationHelper.registerInput('d0730a53', "Textbox 1", true, "กรุณาระบุชื่อนิติบุคคล / บุคคลธรรมดา");
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, 'd0730a53' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Textbox 1 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('49cd4587', "relational", "User", "taxerBranch");
		ValidationHelper.registerInput('49cd4587', "Textbox 2", true, "กรุณาระบุสาขา");
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '49cd4587' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Textbox 2 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('93258c7d', "relational", "User", "taxerID");
		ValidationHelper.registerInput('93258c7d', "Textbox 3", true, "กรุณาระบุหมายเลขประจำตัวผู้เสียภาษี");
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '93258c7d' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Textbox 3 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('6b3ded89', "relational", "User", "province");
		ValidationHelper.registerInput('6b3ded89', "Textbox 5", true, "กรุณาระบุจังหวัด");
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '6b3ded89' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Textbox 5 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('5daed5dd', "relational", "User", "district");
		ValidationHelper.registerInput('5daed5dd', "Textbox 6", true, "กรุณาระบุอำเภอ / แขวง");
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '5daed5dd' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Textbox 6 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('a1a014e1', "relational", "User", "subDistrict");
		ValidationHelper.registerInput('a1a014e1', "Textbox 7", true, "กรุณาระบุตำบล / เขต");
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, 'a1a014e1' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Textbox 7 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('5412d45d', "relational", "User", "address");
		ValidationHelper.registerInput('5412d45d', "Textbox 8", true, "กรุณาระบุบ้านเลขที่ / ตึก / อาคาร");
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '5412d45d' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Textbox 8 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('6a438452', "relational", "User", "lane");
		ValidationHelper.registerInput('6a438452', "Textbox 10", false, "");
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '6a438452' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Textbox 10 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('74ccd157', "relational", "User", "road");
		ValidationHelper.registerInput('74ccd157', "Textbox 11", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '74ccd157' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Textbox 11 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('547e2875', "relational", "User", "postalCode");
		ValidationHelper.registerInput('547e2875', "Textbox 9", true, "กรุณาระบุรหัสไปรษณีย์");
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '547e2875' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Textbox 9 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('6217437d', "relational", "User", "taxerContactNumber");
		ValidationHelper.registerInput('6217437d', "Textbox 4", true, "กรุณาระบุเบอร์โทรศัพท์สำหรับติดต่อ");
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '6217437d' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Textbox 4 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('bd78c5c4', "relational", "User", "id");
		ValidationHelper.registerInput('bd78c5c4', "Hidden 2", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, 'bd78c5c4' + ((i == -1) ? '' : '[' + i + ']'));
    
    // Override data parsing and manipulation of Hidden 2 here:
    // 
    if (input) input.value = this.request.session.uid;
    
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