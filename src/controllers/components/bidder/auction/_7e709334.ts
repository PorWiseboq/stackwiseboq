// Auto[Generating:V1]--->
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.

// Auto[Import]--->
import {Request, Response} from "express";
import {SourceType, ActionType, HierarchicalDataTable, HierarchicalDataRow, Input, DatabaseHelper} from '../../../helpers/DatabaseHelper.js';
import {ValidationInfo, ValidationHelper} from '../../../helpers/ValidationHelper.js';
import {RequestHelper} from '../../../helpers/RequestHelper.js';
import {RenderHelper} from '../../../helpers/RenderHelper.js';
import {DataTableSchema} from '../../../helpers/SchemaHelper.js';
import {Base} from '../../Base.js';

// <---Auto[Import]

// Import additional modules here:
// 
import {SchemaHelper} from '../../../helpers/SchemaHelper.js';
import {ProjectConfigurationHelper} from '../../../helpers/ProjectConfigurationHelper.js';

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
          
          if (results['Store'].rows.length == 0) {
            this.response.redirect('/authentication/role/bidder');
          } else {
            this.request.session.sid = results['Store'].rows[0].keys['sid'];
            this.request.session.save(async () => {
    				  let quoteData = RequestHelper.createInputs({
       		      'Quote.status': 1,
       		      'Quote.Auction.qid': null,
       		      'Quote.Auction.sid': this.request.session.sid,
       		      'Quote.Auction.Substitute.aid': null
       		    });
       		    let quote = SchemaHelper.getDataTableSchemaFromNotation('Quote', ProjectConfigurationHelper.getDataSchema());
       		    let quoteDataset = await DatabaseHelper.retrieve(quoteData, quote, this.request.session, true);
       		    
       		    let listingData = RequestHelper.createInputs({
       		      'Listing.qid': (quoteData['Quote'].rows.length == 0) ? null : quoteData['Quote'].rows[0].keys['qid']
       		    });
       		    let listing = SchemaHelper.getDataTableSchemaFromNotation('Listing', ProjectConfigurationHelper.getDataSchema());
       		    let listingDataset = await DatabaseHelper.retrieve(listingData, listing, this.request.session, true);
       		    
       		    if (quoteData['Quote'].rows.length != 0) {
       		      quoteData['Quote'].rows[0].relations['Listing'] = listingDataset['Listing'];
       		    }
     		      resolve(quoteDataset);
    			  });
          }
        }
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
      /*try {
      	let options = RequestHelper.getOptions(this.pageId, this.request);
        resolve(await DatabaseHelper.insert(data, schema, options.crossRelationUpsert, this.request.session));
      } catch(error) {
        reject(error);
      }*/
      reject(new Error("Not Implemented Error"));
    });
  }
  
  protected async update(data: Input[], schema: DataTableSchema): Promise<HierarchicalDataRow[]> {
    return new Promise(async (resolve, reject) => {
    	try {
      	let options = RequestHelper.getOptions(this.pageId, this.request);
        resolve(await DatabaseHelper.update(data, schema, options.crossRelationUpsert, this.request.session));
      } catch(error) {
        reject(error);
      }
    });
  }
  
  protected async upsert(data: Input[], schema: DataTableSchema): Promise<HierarchicalDataRow[]> {
    return new Promise(async (resolve, reject) => {
    	try {
        resolve(await DatabaseHelper.upsert(data, schema, this.request.session));
      } catch(error) {
        reject(error);
      }
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
    	try {
        let options = RequestHelper.getOptions(this.pageId, this.request);
        
        if (schema.group == 'Quote') {
          let quoteData = await DatabaseHelper.retrieve(data, schema, this.request.session, options.enabledRealTimeUpdate);
          
          let listingData = RequestHelper.createInputs({
   		      'Listing.qid': (quoteData['Quote'].rows.length == 0) ? null : quoteData['Quote'].rows[0].keys['qid']
   		    });
   		    let listing = SchemaHelper.getDataTableSchemaFromNotation('Listing', ProjectConfigurationHelper.getDataSchema());
   		    let listingDataset = await DatabaseHelper.retrieve(listingData, listing, this.request.session, true);
   		    
   		    if (quoteData['Quote'].rows.length != 0) {
   		      quoteData['Quote'].rows[0].relations['Listing'] = listingDataset['Listing'];
   		    }
          
          resolve(quoteData);
        } else {
          resolve(await DatabaseHelper.retrieve(data, schema, this.request.session, options.enabledRealTimeUpdate));
        }
      } catch(error) {
        reject(error);
      }
    });
  }
  
  protected async navigate(data: Input[], schema: DataTableSchema): Promise<string> {
    return new Promise(async (resolve, reject) => {
    	/* Uncomment to allow navigate action of any button on the page. */
      /* try {
        resolve('/');
      } catch(error) {
        reject(error);
      } */
      reject(new Error("Not Implemented Error"));
    });
  }
  
  // Auto[MergingBegin]--->  
  private initialize(request: Request): [ActionType, DataTableSchema, Input[]] {
  	let schema: DataTableSchema = RequestHelper.getSchema(this.pageId, request);
  	let data: Input[] = [];
  	let input: Input = null;
  	
	  // <---Auto[MergingBegin]
	  
	  // Auto[Merging]--->
    RequestHelper.registerSubmit("7e709334", "108bb2b9", null, [], {initClass: null, crossRelationUpsert: false, enabledRealTimeUpdate: false});
    RequestHelper.registerSubmit("7e709334", "4a579143", "retrieve", ["1ae8405a","0856c24b","1921d1d6","747dbd6e","b7956268"], {initClass: null, crossRelationUpsert: false, enabledRealTimeUpdate: true});
    RequestHelper.registerSubmit("7e709334", "c05b11c1", "retrieve", ["4cade2e7","93ab7a0b","4c781bd8","23ea1ac1","3d0c6a9e"], {initClass: null, crossRelationUpsert: false, enabledRealTimeUpdate: true});
    RequestHelper.registerSubmit("7e709334", "833e4eb9", "retrieve", ["d24ed774","6d57beb9","80a8e675","2e3b6ded","005ec895"], {initClass: null, crossRelationUpsert: false, enabledRealTimeUpdate: true});
    RequestHelper.registerSubmit("7e709334", "e9c9b721", "retrieve", ["d1920261","c192b978","7a572ba4","783a0919","aa14b104"], {initClass: null, crossRelationUpsert: false, enabledRealTimeUpdate: true});
    RequestHelper.registerSubmit("7e709334", "e76846ad", "retrieve", ["31c75169"], {initClass: null, crossRelationUpsert: false, enabledRealTimeUpdate: false});
    RequestHelper.registerSubmit("7e709334", "802159d0", "retrieve", ["72aecc3a"], {initClass: null, crossRelationUpsert: false, enabledRealTimeUpdate: false});
    RequestHelper.registerSubmit("7e709334", "8cbc5b17", "retrieve", ["e8656190"], {initClass: null, crossRelationUpsert: false, enabledRealTimeUpdate: false});
    RequestHelper.registerSubmit("7e709334", "323ba37c", "retrieve", ["95270ad9"], {initClass: null, crossRelationUpsert: false, enabledRealTimeUpdate: false});
    RequestHelper.registerSubmit("7e709334", "9868a6d5", "upsert", ["1832b944","b91e2739","03aab0e5","957c1568","9c338431","c22ec668","d913e6a1","c03d6613","d30aa93b","ae7e2437","a5b102c4"], {initClass: null, crossRelationUpsert: true, enabledRealTimeUpdate: false});
    RequestHelper.registerSubmit("7e709334", "d3e31c36", null, [], {initClass: null, crossRelationUpsert: false, enabledRealTimeUpdate: false});
		RequestHelper.registerInput('1ae8405a', "relational", "Quote", "status");
		ValidationHelper.registerInput('1ae8405a', "Hidden 1", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '1ae8405a' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Hidden 1 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('1921d1d6', "relational", "Quote.Auction", "qid");
		ValidationHelper.registerInput('1921d1d6', "Hidden 5", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '1921d1d6' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Hidden 5 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('b7956268', "relational", "Quote.Auction", "sid");
		ValidationHelper.registerInput('b7956268', "Hidden 13", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, 'b7956268' + ((i == -1) ? '' : '[' + i + ']'));
      if (input) input.value = request.session['sid'];
    
      // Override data parsing and manipulation of Hidden 13 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('747dbd6e', "relational", "Quote.Auction.Substitute", "aid");
		ValidationHelper.registerInput('747dbd6e', "Hidden 6", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '747dbd6e' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Hidden 6 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('4cade2e7', "relational", "Quote", "status");
		ValidationHelper.registerInput('4cade2e7', "Hidden 2", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '4cade2e7' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Hidden 2 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('4c781bd8', "relational", "Quote.Auction", "qid");
		ValidationHelper.registerInput('4c781bd8', "Hidden 7", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '4c781bd8' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Hidden 7 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('3d0c6a9e', "relational", "Quote.Auction", "sid");
		ValidationHelper.registerInput('3d0c6a9e', "Hidden 14", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '3d0c6a9e' + ((i == -1) ? '' : '[' + i + ']'));
      if (input) input.value = request.session['sid'];
    
      // Override data parsing and manipulation of Hidden 14 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('23ea1ac1', "relational", "Quote.Auction.Substitute", "aid");
		ValidationHelper.registerInput('23ea1ac1', "Hidden 8", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '23ea1ac1' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Hidden 8 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('d24ed774', "relational", "Quote", "status");
		ValidationHelper.registerInput('d24ed774', "Hidden 3", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, 'd24ed774' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Hidden 3 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('80a8e675', "relational", "Quote.Auction", "qid");
		ValidationHelper.registerInput('80a8e675', "Hidden 9", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '80a8e675' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Hidden 9 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('005ec895', "relational", "Quote.Auction", "sid");
		ValidationHelper.registerInput('005ec895', "Hidden 15", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '005ec895' + ((i == -1) ? '' : '[' + i + ']'));
      if (input) input.value = request.session['sid'];
    
      // Override data parsing and manipulation of Hidden 15 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('2e3b6ded', "relational", "Quote.Auction.Substitute", "aid");
		ValidationHelper.registerInput('2e3b6ded', "Hidden 10", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '2e3b6ded' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Hidden 10 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('d1920261', "relational", "Quote", "status");
		ValidationHelper.registerInput('d1920261', "Hidden 4", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, 'd1920261' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Hidden 4 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('7a572ba4', "relational", "Quote.Auction", "qid");
		ValidationHelper.registerInput('7a572ba4', "Hidden 11", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '7a572ba4' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Hidden 11 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('aa14b104', "relational", "Quote.Auction", "sid");
		ValidationHelper.registerInput('aa14b104', "Hidden 16", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, 'aa14b104' + ((i == -1) ? '' : '[' + i + ']'));
      if (input) input.value = request.session['sid'];
    
      // Override data parsing and manipulation of Hidden 16 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('783a0919', "relational", "Quote.Auction.Substitute", "aid");
		ValidationHelper.registerInput('783a0919', "Hidden 12", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '783a0919' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Hidden 12 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('31c75169', "relational", "Listing", "qid");
		ValidationHelper.registerInput('31c75169', "Hidden 5", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '31c75169' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Hidden 5 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('72aecc3a', "relational", "Listing", "qid");
		ValidationHelper.registerInput('72aecc3a', "Hidden 6", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '72aecc3a' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Hidden 6 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('e8656190', "relational", "Listing", "qid");
		ValidationHelper.registerInput('e8656190', "Hidden 7", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, 'e8656190' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Hidden 7 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('95270ad9', "relational", "Listing", "qid");
		ValidationHelper.registerInput('95270ad9', "Hidden 8", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '95270ad9' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Hidden 8 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('1832b944', "relational", "Auction.Substitute", "type");
		ValidationHelper.registerInput('1832b944', "Radio 5", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '1832b944' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Radio 5 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('b91e2739', "relational", "Auction.Substitute", "type");
		ValidationHelper.registerInput('b91e2739', "Radio 4", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, 'b91e2739' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Radio 4 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('03aab0e5', "relational", "Auction.Substitute", "type");
		ValidationHelper.registerInput('03aab0e5', "Radio 3", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '03aab0e5' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Radio 3 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('957c1568', "relational", "Auction.Substitute", "type");
		ValidationHelper.registerInput('957c1568', "Radio 6", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '957c1568' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Radio 6 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('9c338431', "relational", "Auction.Substitute", "title");
		ValidationHelper.registerInput('9c338431', "Name", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '9c338431' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Name here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('d913e6a1', "relational", "Auction.Substitute", "size");
		ValidationHelper.registerInput('d913e6a1', "Size", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, 'd913e6a1' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Size here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('c22ec668', "relational", "Auction.Substitute", "quantity");
		ValidationHelper.registerInput('c22ec668', "Quantity", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, 'c22ec668' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Quantity here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('ae7e2437', "relational", "Auction.Substitute", "lid");
		ValidationHelper.registerInput('ae7e2437', "Hidden 3", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, 'ae7e2437' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Hidden 3 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('c03d6613', "relational", "Auction", "price");
		ValidationHelper.registerInput('c03d6613', "Textbox 5", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, 'c03d6613' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Textbox 5 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('d30aa93b', "relational", "Auction", "sid");
		ValidationHelper.registerInput('d30aa93b', "Hidden 1", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, 'd30aa93b' + ((i == -1) ? '' : '[' + i + ']'));
      if (input) input.value = request.session['sid'];
    
      // Override data parsing and manipulation of Hidden 1 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('a5b102c4', "relational", "Auction", "qid");
		ValidationHelper.registerInput('a5b102c4', "Hidden 2", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, 'a5b102c4' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Hidden 2 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('1382e4c9', "relational", "Substitute", "price");
		ValidationHelper.registerInput('1382e4c9', "Price", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '1382e4c9' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Price here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('e68b9c07', "relational", "Auction", "deliverCost");
		ValidationHelper.registerInput('e68b9c07', "Textbox 3", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, 'e68b9c07' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Textbox 3 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('dde4302b', "relational", "Auction", "discount");
		ValidationHelper.registerInput('dde4302b', "Textbox 2", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, 'dde4302b' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Textbox 2 here:
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