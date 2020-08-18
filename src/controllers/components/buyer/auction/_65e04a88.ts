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
import {DataManipulationHelper} from '../helpers/DataManipulationHelper.js';

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
 		
 		let hoursChecked = false;
 		let deliverChecked = false;
 		let pickup = false;
 		
 		for (const item of data) {
        switch (item.validation.name) {
            case 'hoursChecked':
                if (item.value == 'true') {
                    hoursChecked = true;
                }
                break;
            case 'deliverChecked':
                if (item.value == 'true') {
                    deliverChecked = true;
                }
                break;
            case 'pickup':
                if (item.value == '1') {
                    pickup = true;
                }
                break;
        }
    }
 		
 		for (const item of data) {
        switch (item.validation.name) {
            case 'Hours':
                if (hoursChecked) {
                    if (!item.value) {
                        throw new Error("กรุณาระบุจำนวนชั่วโมง");
                    } else if (item.value && !item.value.match(/^[0-9]+$/)) {
                        throw new Error("กรุณาระบุจำนวนชั่วโมงเป็นตัวเลข");
                    } else if (parseInt(item.value) < 24) {
                        throw new Error("กรุณาระบุจำนวนชั่วโมงไม่ต่ำกว่า 24 ชั่วโมง");
                    } else if (parseInt(item.value) > 168) {
                        throw new Error("กรุณาระบุจำนวนชั่วโมงไม่มากไปกว่า 168 ชั่วโมง");
                    }
                }
                break;
            case 'DeliverAt':
                if (deliverChecked) {
                    if (!item.value) {
                        throw new Error("กรุณาระบุวันที่ต้องใช้สินค้า");
                    } else if (item.value && !item.value.match(/^([0-2][0-9]|3[0-1])(0[0-9]|1[0-2])(25[0-9][0-9])$/)) {
                        throw new Error("กรุณาระบุวันที่ให้ถูกต้อง (ddmmyyyy เช่น 15102563)");
                    } else {
                        let matched = item.value.match(/^([0-2][0-9]|3[0-1])(0[0-9]|1[0-2])(25[0-9][0-9])$/);
                        let day = parseInt(matched[1]);
                        let month = parseInt(matched[2]);
                        let year = parseInt(matched[3]) - 543;
                        
                        item.value = `${year}-${month}-${day}`;
                        
                        if (new Date(item.value) < new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)) {
                          throw new Error("กรุณาระบุวันที่ต้องใช้สินค้าหลังจากวันนี้หนึ่งสัปดาห์");
                        }
                    }
                }
                break;
            case 'Number':
                if (item.value && !item.value.match(/^(\+[0-9]+)?([0-9]{9,10})$/)) {
                    throw new Error("กรุณาระบุหมายเลขโทรศัพท์ให้ถูกต้อง");
                }
                break;
            case 'Address':
                if (!pickup && !item.value) {
                    throw new Error("กรุณาระบุที่อยู่สำหรับจัดส่งสินค้า");
                }
                break;
        }
    }
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
 		return new Promise(async (resolve, reject) => {
 		  try {
     		if (this.request.session && this.request.session.uid) {
     		  data = [{
     		    target: SourceType.Relational,
            group: 'Quote',
            name: 'uid',
            value: parseInt(this.request.session.uid),
            guid: null,
            validation: null
     		  },{
     		    target: SourceType.Relational,
            group: 'Quote',
            name: 'filled',
            value: null,
            guid: null,
            validation: null
     		  }];
     		  let datasetA = await DatabaseHelper.retrieve(data, null);
     		  
     		  if (datasetA['Quote'].rows.length != 0) {
  	   		  if (!isNaN(datasetA['Quote'].rows[0].columns['deliverAt'])) {
  	   		    let date = new Date(datasetA['Quote'].rows[0].columns['deliverAt']);
  	   		    
  	   		    var mm = date.getMonth() + 1;
  	          var dd = date.getDate();
  	          var yyyy = date.getFullYear() + 543;
  	          
  	   		    datasetA['Quote'].rows[0].columns['deliverAt'] = `${dd < 10 ? '0' : ''}${dd}${mm < 10 ? '0' : ''}${mm}${yyyy}`;
  	   		  } else {
  	   		    datasetA['Quote'].rows[0].columns['deliverAt'] = null;
  	   		  }
  	 		    if (datasetA['Quote'].rows[0].columns['hours'] == '0') {
  	 		      datasetA['Quote'].rows[0].columns['hours'] = null;
  	 		    }
  	 		  }
     		  
     		  let datasetB;
     		  if (DataManipulationHelper.getDataFromNotation('Quote.qid', datasetA)) {
       		  data = [{
       		    target: SourceType.Relational,
              group: 'Listing',
              name: 'qid',
              value: DataManipulationHelper.getDataFromNotation('Quote.qid', datasetA),
              guid: null,
              validation: null
       		  }];
       		  datasetB = await DatabaseHelper.retrieve(data, null);
     		  } else {
     		    datasetB = {};
     		  }
     		  
     		  resolve(Object.assign({}, datasetA, datasetB));
     		} else {
     		  this.response.redirect('/authentication');
     		}
 		  } catch(error) {
 		    reject(error);
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
    return new Promise(async (resolve, reject) => {
      try {
   		  await DatabaseHelper.update(data, schema);
   		  resolve('/buyer/auction/waiting');
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
    RequestHelper.registerSubmit("9ce000e1", "insert", ["5a972a57","607d8ee2","5752cb4d","2acce16d"], {initClass: null, crossRelationUpsert: false});
    RequestHelper.registerSubmit("1bc39a2b", "update", ["5a972a57","607d8ee2","5d34dc3b","5752cb4d"], {initClass: null, crossRelationUpsert: false});
    RequestHelper.registerSubmit("d910ad00", "delete", ["41bdc9b3"], {initClass: null, crossRelationUpsert: false});
    RequestHelper.registerSubmit("05179431", "insert", ["54e20435","31894d87","b2321320","eda631c1"], {initClass: null, crossRelationUpsert: false});
    RequestHelper.registerSubmit("1bb72b1a", null, [], {initClass: null, crossRelationUpsert: false});
    RequestHelper.registerSubmit("011ad9dc", null, [], {initClass: null, crossRelationUpsert: false});
    RequestHelper.registerSubmit("88297439", null, [], {initClass: null, crossRelationUpsert: false});
    RequestHelper.registerSubmit("67c431d0", "update", ["b6c9ad89","a0b78888","cc34eced","9036c707"], {initClass: null, crossRelationUpsert: false});
    RequestHelper.registerSubmit("a7592071", null, [], {initClass: null, crossRelationUpsert: false});
    RequestHelper.registerSubmit("0e75306a", "navigate", ["33408187","230ab296","babc9e30","9200d56a","12403b79","c3daa46d","0606ea02","4a397863","147c9060"], {initClass: null, crossRelationUpsert: false});
		RequestHelper.registerInput('5a972a57', "relational", "Quote", "title");
		ValidationHelper.registerInput('5a972a57', "Textbox 4", true, "คุณต้องตั้งชื่อรายการ");
    for (let i=-1; i<1024; i++) {
      input = RequestHelper.getInput(request, '5a972a57' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Textbox 4 here:
      // 
      
      if (input != null) data.push(input);
      else if (i > -1) break;
    }
		RequestHelper.registerInput('607d8ee2', "relational", "Quote", "description");
		ValidationHelper.registerInput('607d8ee2', "Textbox 5", false, undefined);
    for (let i=-1; i<1024; i++) {
      input = RequestHelper.getInput(request, '607d8ee2' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Textbox 5 here:
      // 
      
      if (input != null) data.push(input);
      else if (i > -1) break;
    }
		RequestHelper.registerInput('5d34dc3b', "relational", "Quote", "qid");
		ValidationHelper.registerInput('5d34dc3b', "Hidden 1", false, undefined);
    for (let i=-1; i<1024; i++) {
      input = RequestHelper.getInput(request, '5d34dc3b' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Hidden 1 here:
      // 
      
      if (input != null) data.push(input);
      else if (i > -1) break;
    }
		RequestHelper.registerInput('5752cb4d', "relational", "Quote", "uid");
		ValidationHelper.registerInput('5752cb4d', "Hidden 2", false, undefined);
    for (let i=-1; i<1024; i++) {
      input = RequestHelper.getInput(request, '5752cb4d' + ((i == -1) ? '' : '[' + i + ']'));
    
    // Override data parsing and manipulation of Hidden 2 here:
    // 
    if (input) input.value = parseInt(this.request.session.uid);
    
      if (input != null) data.push(input);
      else if (i > -1) break;
    }
		RequestHelper.registerInput('2acce16d', "relational", "Quote", "status");
		ValidationHelper.registerInput('2acce16d', "Hidden 1", false, undefined);
    for (let i=-1; i<1024; i++) {
      input = RequestHelper.getInput(request, '2acce16d' + ((i == -1) ? '' : '[' + i + ']'));
    
    // Override data parsing and manipulation of Hidden 1 here:
    // 
    if (input) input.value = '0';
    
      if (input != null) data.push(input);
      else if (i > -1) break;
    }
		RequestHelper.registerInput('41bdc9b3', "relational", "Listing", "lid");
		ValidationHelper.registerInput('41bdc9b3', "Hidden 1", false, undefined);
    for (let i=-1; i<1024; i++) {
      input = RequestHelper.getInput(request, '41bdc9b3' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Hidden 1 here:
      // 
      
      if (input != null) data.push(input);
      else if (i > -1) break;
    }
		RequestHelper.registerInput('2ce10e8e', "relational", "Listing", "title");
		ValidationHelper.registerInput('2ce10e8e', "Textbox 1", false, undefined);
    for (let i=-1; i<1024; i++) {
      input = RequestHelper.getInput(request, '2ce10e8e' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Textbox 1 here:
      // 
      
      if (input != null) data.push(input);
      else if (i > -1) break;
    }
		RequestHelper.registerInput('0d2c5b71', "relational", "Listing", "size");
		ValidationHelper.registerInput('0d2c5b71', "Textbox 2", false, undefined);
    for (let i=-1; i<1024; i++) {
      input = RequestHelper.getInput(request, '0d2c5b71' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Textbox 2 here:
      // 
      
      if (input != null) data.push(input);
      else if (i > -1) break;
    }
		RequestHelper.registerInput('1cabb5c5', "relational", "Listing", "quantity");
		ValidationHelper.registerInput('1cabb5c5', "Textbox 3", false, undefined);
    for (let i=-1; i<1024; i++) {
      input = RequestHelper.getInput(request, '1cabb5c5' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Textbox 3 here:
      // 
      
      if (input != null) data.push(input);
      else if (i > -1) break;
    }
		RequestHelper.registerInput('eda631c1', "relational", "Listing", "qid");
		ValidationHelper.registerInput('eda631c1', "Hidden 1", false, undefined);
    for (let i=-1; i<1024; i++) {
      input = RequestHelper.getInput(request, 'eda631c1' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Hidden 1 here:
      // 
      
      if (input != null) data.push(input);
      else if (i > -1) break;
    }
		RequestHelper.registerInput('54e20435', "relational", "Listing", "title");
		ValidationHelper.registerInput('54e20435', "Textbox 1", true, "คุณต้องระบุชื่อวัสดุ");
    for (let i=-1; i<1024; i++) {
      input = RequestHelper.getInput(request, '54e20435' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Textbox 1 here:
      // 
      
      if (input != null) data.push(input);
      else if (i > -1) break;
    }
		RequestHelper.registerInput('31894d87', "relational", "Listing", "size");
		ValidationHelper.registerInput('31894d87', "Textbox 2", true, "คุณต้องระบุขนาด");
    for (let i=-1; i<1024; i++) {
      input = RequestHelper.getInput(request, '31894d87' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Textbox 2 here:
      // 
      
      if (input != null) data.push(input);
      else if (i > -1) break;
    }
		RequestHelper.registerInput('b2321320', "relational", "Listing", "quantity");
		ValidationHelper.registerInput('b2321320', "Textbox 3", true, "คุณต้องระบุจำนวน");
    for (let i=-1; i<1024; i++) {
      input = RequestHelper.getInput(request, 'b2321320' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Textbox 3 here:
      // 
      
      if (input != null) data.push(input);
      else if (i > -1) break;
    }
		RequestHelper.registerInput('b6c9ad89', "relational", "Quote", "substitute");
		ValidationHelper.registerInput('b6c9ad89', "Radio 3", true, "คุณต้องเลือกวิธีในกรณีที่หาวัสดุดังกล่าวไม่ได้");
    for (let i=-1; i<1024; i++) {
      input = RequestHelper.getInput(request, 'b6c9ad89' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Radio 3 here:
      // 
      
      if (input != null) data.push(input);
      else if (i > -1) break;
    }
		RequestHelper.registerInput('a0b78888', "relational", "Quote", "substitute");
		ValidationHelper.registerInput('a0b78888', "Radio 4", true, "คุณต้องเลือกวิธีในกรณีที่หาวัสดุดังกล่าวไม่ได้");
    for (let i=-1; i<1024; i++) {
      input = RequestHelper.getInput(request, 'a0b78888' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Radio 4 here:
      // 
      
      if (input != null) data.push(input);
      else if (i > -1) break;
    }
		RequestHelper.registerInput('cc34eced', "relational", "Quote", "substitute");
		ValidationHelper.registerInput('cc34eced', "Radio 5", true, "คุณต้องเลือกวิธีในกรณีที่หาวัสดุดังกล่าวไม่ได้");
    for (let i=-1; i<1024; i++) {
      input = RequestHelper.getInput(request, 'cc34eced' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Radio 5 here:
      // 
      
      if (input != null) data.push(input);
      else if (i > -1) break;
    }
		RequestHelper.registerInput('9036c707', "relational", "Quote", "qid");
		ValidationHelper.registerInput('9036c707', "Hidden 1", false, undefined);
    for (let i=-1; i<1024; i++) {
      input = RequestHelper.getInput(request, '9036c707' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Hidden 1 here:
      // 
      
      if (input != null) data.push(input);
      else if (i > -1) break;
    }
		RequestHelper.registerInput('33408187', "relational", "Quote", "hoursChecked");
		ValidationHelper.registerInput('33408187', "hoursChecked", false, undefined);
    for (let i=-1; i<1024; i++) {
      input = RequestHelper.getInput(request, '33408187' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of hoursChecked here:
      // 
      
      if (input != null) data.push(input);
      else if (i > -1) break;
    }
		RequestHelper.registerInput('230ab296', "relational", "Quote", "hours");
		ValidationHelper.registerInput('230ab296', "Hours", false, undefined);
    for (let i=-1; i<1024; i++) {
      input = RequestHelper.getInput(request, '230ab296' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Hours here:
      // 
      
      if (input != null) data.push(input);
      else if (i > -1) break;
    }
		RequestHelper.registerInput('babc9e30', "relational", "Quote", "deliverChecked");
		ValidationHelper.registerInput('babc9e30', "deliverChecked", false, undefined);
    for (let i=-1; i<1024; i++) {
      input = RequestHelper.getInput(request, 'babc9e30' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of deliverChecked here:
      // 
      
      if (input != null) data.push(input);
      else if (i > -1) break;
    }
		RequestHelper.registerInput('9200d56a', "relational", "Quote", "deliverAt");
		ValidationHelper.registerInput('9200d56a', "DeliverAt", false, undefined);
    for (let i=-1; i<1024; i++) {
      input = RequestHelper.getInput(request, '9200d56a' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of DeliverAt here:
      // 
      
      if (input != null) data.push(input);
      else if (i > -1) break;
    }
		RequestHelper.registerInput('12403b79', "relational", "Quote", "pickup");
		ValidationHelper.registerInput('12403b79', "pickup", true, "คุณต้องเลือกวิธีในการรับสินค้า");
    for (let i=-1; i<1024; i++) {
      input = RequestHelper.getInput(request, '12403b79' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of pickup here:
      // 
      
      if (input != null) data.push(input);
      else if (i > -1) break;
    }
		RequestHelper.registerInput('c3daa46d', "relational", "Quote", "number");
		ValidationHelper.registerInput('c3daa46d', "Number", true, "คุณจำเป็นต้องระบุหมายเลขโทรศัพท์");
    for (let i=-1; i<1024; i++) {
      input = RequestHelper.getInput(request, 'c3daa46d' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Number here:
      // 
      
      if (input != null) data.push(input);
      else if (i > -1) break;
    }
		RequestHelper.registerInput('0606ea02', "relational", "Quote", "pickup");
		ValidationHelper.registerInput('0606ea02', "pickup", true, "คุณต้องเลือกวิธีในการรับสินค้า");
    for (let i=-1; i<1024; i++) {
      input = RequestHelper.getInput(request, '0606ea02' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of pickup here:
      // 
      
      if (input != null) data.push(input);
      else if (i > -1) break;
    }
		RequestHelper.registerInput('4a397863', "relational", "Quote", "address");
		ValidationHelper.registerInput('4a397863', "Address", false, undefined);
    for (let i=-1; i<1024; i++) {
      input = RequestHelper.getInput(request, '4a397863' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Address here:
      // 
      
      if (input != null) data.push(input);
      else if (i > -1) break;
    }
		RequestHelper.registerInput('147c9060', "relational", "Quote", "qid");
		ValidationHelper.registerInput('147c9060', "Hidden 2", false, undefined);
    for (let i=-1; i<1024; i++) {
      input = RequestHelper.getInput(request, '147c9060' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Hidden 2 here:
      // 
      
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