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
 		return new Promise(async (resolve, reject) => {
 		  try {
 		    let quoteData = [{
   		    target: SourceType.Relational,
          group: 'Quote',
          name: 'qid',
          value: 951,
          guid: null,
          validation: null
     		}];
     		let listingData = [{
   		    target: SourceType.Relational,
          group: 'Listing',
          name: 'qid',
          value: 951,
          guid: null,
          validation: null
   		  }];
 		    
 		    let quote = SchemaHelper.getDataTableSchemaFromNotation('Quote', ProjectConfigurationHelper.getDataSchema());
 		    let listing = SchemaHelper.getDataTableSchemaFromNotation('Listing', ProjectConfigurationHelper.getDataSchema());
 		    
 		    let results = Object.assign({}, await DatabaseHelper.retrieve(quoteData, quote), await DatabaseHelper.retrieve(listingData, listing));
 		    
 		    resolve(results);
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
 		return '/';
  }
 	
  // Auto[MergingBegin]--->  
  private initialize(request: Request): [ActionType, DataTableSchema, Input[]] {
  	let action: ActionType = RequestHelper.getAction(request);
  	let schema: DataTableSchema = RequestHelper.getSchema(request);
  	let data: Input[] = [];
  	let input: Input = null;
  	
	  // <---Auto[MergingBegin]
	  
	  // Auto[Merging]--->
		RequestHelper.registerInput('1ae8405a', "relational", "Quote", "status");
		ValidationHelper.registerInput('1ae8405a', "Hidden 1", false, undefined);
    input = RequestHelper.getInput(request, '1ae8405a');
    
    // Override data parsing and manipulation of Hidden 1 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('4cade2e7', "relational", "Quote", "status");
		ValidationHelper.registerInput('4cade2e7', "Hidden 2", false, undefined);
    input = RequestHelper.getInput(request, '4cade2e7');
    
    // Override data parsing and manipulation of Hidden 2 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('d24ed774', "relational", "Quote", "status");
		ValidationHelper.registerInput('d24ed774', "Hidden 3", false, undefined);
    input = RequestHelper.getInput(request, 'd24ed774');
    
    // Override data parsing and manipulation of Hidden 3 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('d1920261', "relational", "Quote", "status");
		ValidationHelper.registerInput('d1920261', "Hidden 4", false, undefined);
    input = RequestHelper.getInput(request, 'd1920261');
    
    // Override data parsing and manipulation of Hidden 4 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('31c75169', "relational", "Listing", "qid");
		ValidationHelper.registerInput('31c75169', "Hidden 5", false, undefined);
    input = RequestHelper.getInput(request, '31c75169');
    
    // Override data parsing and manipulation of Hidden 5 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('72aecc3a', "relational", "Listing", "qid");
		ValidationHelper.registerInput('72aecc3a', "Hidden 6", false, undefined);
    input = RequestHelper.getInput(request, '72aecc3a');
    
    // Override data parsing and manipulation of Hidden 6 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('e8656190', "relational", "Listing", "qid");
		ValidationHelper.registerInput('e8656190', "Hidden 7", false, undefined);
    input = RequestHelper.getInput(request, 'e8656190');
    
    // Override data parsing and manipulation of Hidden 7 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('95270ad9', "relational", "Listing", "qid");
		ValidationHelper.registerInput('95270ad9', "Hidden 8", false, undefined);
    input = RequestHelper.getInput(request, '95270ad9');
    
    // Override data parsing and manipulation of Hidden 8 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('1832b944', "relational", "Auction.Substitute", "type");
		ValidationHelper.registerInput('1832b944', "Radio 5", false, undefined);
    input = RequestHelper.getInput(request, '1832b944');
    
    // Override data parsing and manipulation of Radio 5 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('b91e2739', "relational", "Auction.Substitute", "type");
		ValidationHelper.registerInput('b91e2739', "Radio 4", false, undefined);
    input = RequestHelper.getInput(request, 'b91e2739');
    
    // Override data parsing and manipulation of Radio 4 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('03aab0e5', "relational", "Auction.Substitute", "type");
		ValidationHelper.registerInput('03aab0e5', "Radio 3", false, undefined);
    input = RequestHelper.getInput(request, '03aab0e5');
    
    // Override data parsing and manipulation of Radio 3 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('957c1568', "relational", "Auction.Substitute", "type");
		ValidationHelper.registerInput('957c1568', "Radio 6", false, undefined);
    input = RequestHelper.getInput(request, '957c1568');
    
    // Override data parsing and manipulation of Radio 6 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('9c338431', "relational", "Auction.Substitute", "title");
		ValidationHelper.registerInput('9c338431', "Name", false, undefined);
    input = RequestHelper.getInput(request, '9c338431');
    
    // Override data parsing and manipulation of Name here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('d913e6a1', "relational", "Auction.Substitute", "size");
		ValidationHelper.registerInput('d913e6a1', "Size", false, undefined);
    input = RequestHelper.getInput(request, 'd913e6a1');
    
    // Override data parsing and manipulation of Size here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('c22ec668', "relational", "Auction.Substitute", "quantity");
		ValidationHelper.registerInput('c22ec668', "Quantity", false, undefined);
    input = RequestHelper.getInput(request, 'c22ec668');
    
    // Override data parsing and manipulation of Quantity here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('ae7e2437', "relational", "Auction.Substitute", "lid");
		ValidationHelper.registerInput('ae7e2437', "Hidden 3", false, undefined);
    input = RequestHelper.getInput(request, 'ae7e2437');
    
    // Override data parsing and manipulation of Hidden 3 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('c03d6613', "relational", "Auction", "price");
		ValidationHelper.registerInput('c03d6613', "Textbox 5", false, undefined);
    input = RequestHelper.getInput(request, 'c03d6613');
    
    // Override data parsing and manipulation of Textbox 5 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('d30aa93b', "relational", "Auction", "sid");
		ValidationHelper.registerInput('d30aa93b', "Hidden 1", false, undefined);
    input = RequestHelper.getInput(request, 'd30aa93b');
    
    // Override data parsing and manipulation of Hidden 1 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('a5b102c4', "relational", "Auction", "qid");
		ValidationHelper.registerInput('a5b102c4', "Hidden 2", false, undefined);
    input = RequestHelper.getInput(request, 'a5b102c4');
    
    // Override data parsing and manipulation of Hidden 2 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('1382e4c9', "relational", "Substitute", "price");
		ValidationHelper.registerInput('1382e4c9', "Price", false, undefined);
    input = RequestHelper.getInput(request, '1382e4c9');
    
    // Override data parsing and manipulation of Price here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('e68b9c07', "relational", "Auction", "deliverCost");
		ValidationHelper.registerInput('e68b9c07', "Textbox 3", false, undefined);
    input = RequestHelper.getInput(request, 'e68b9c07');
    
    // Override data parsing and manipulation of Textbox 3 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('dde4302b', "relational", "Auction", "discount");
		ValidationHelper.registerInput('dde4302b', "Textbox 2", false, undefined);
    input = RequestHelper.getInput(request, 'dde4302b');
    
    // Override data parsing and manipulation of Textbox 2 here:
    // 
    
    if (input != null) data.push(input);

    RequestHelper.registerSubmit("108bb2b9", null, [], {initClass: null, submitCrossType: null});
    RequestHelper.registerSubmit("4a579143", "retrieve", ["1ae8405a"], {initClass: null, submitCrossType: null});
    RequestHelper.registerSubmit("c05b11c1", "retrieve", ["4cade2e7"], {initClass: null, submitCrossType: null});
    RequestHelper.registerSubmit("833e4eb9", "retrieve", ["d24ed774"], {initClass: null, submitCrossType: null});
    RequestHelper.registerSubmit("e9c9b721", "retrieve", ["d1920261"], {initClass: null, submitCrossType: null});
    RequestHelper.registerSubmit("e76846ad", "retrieve", ["31c75169"], {initClass: null, submitCrossType: null});
    RequestHelper.registerSubmit("802159d0", "retrieve", ["72aecc3a"], {initClass: null, submitCrossType: null});
    RequestHelper.registerSubmit("8cbc5b17", "retrieve", ["e8656190"], {initClass: null, submitCrossType: null});
    RequestHelper.registerSubmit("323ba37c", "retrieve", ["95270ad9"], {initClass: null, submitCrossType: null});
    RequestHelper.registerSubmit("9868a6d5", "insert", ["1832b944","b91e2739","03aab0e5","957c1568","9c338431","c22ec668","d913e6a1","c03d6613","d30aa93b","ae7e2437","a5b102c4"], {initClass: null, submitCrossType: "upsert"});
    RequestHelper.registerSubmit("d3e31c36", null, [], {initClass: null, submitCrossType: null});	  // <---Auto[Merging]
	  
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