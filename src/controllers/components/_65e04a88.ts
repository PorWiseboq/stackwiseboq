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
                        let month = parseInt(matched[2]) - 1;
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
     		  
     		  data = [{
     		    target: SourceType.Relational,
            group: 'Listing',
            name: 'qid',
            value: DataManipulationHelper.getDataFromNotation('Quote.qid', datasetA),
            guid: null,
            validation: null
     		  }];
     		  let datasetB = await DatabaseHelper.retrieve(data, null);
     		  
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