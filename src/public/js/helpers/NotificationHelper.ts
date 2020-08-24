// Auto[Generating:V1]--->
// PLEASE DO NOT MODIFY BECUASE YOUR CHANGES MAY BE LOST.

import {HierarchicalDataTable} from './DataManipulationHelper.js';
import {RequestHelper} from './RequestHelper.js';

const sockets = {};
const notificationInfos = {};
const bindedFunctions = {};
const retrieveButtons = {};

declare let window: any;

const NotificationHelper = {
	replaceRetrieveButtonForAutoRefresh: (button: HTMLElement, notation: string, retrieveInto: string) => {
		retrieveButtons[(notation || '') + (retrieveInto || '')] = button;
	},
  registerTableUpdates: (tables: {[Identifier: string]: HierarchicalDataTable}) => {
  	for (const tableName in tables) {
  		if (tables.hasOwnProperty(tableName)) {
  			const table = tables[tableName];
  			
  			if (table.notification) {
  				NotificationHelper.listenTableUpdates('https://' + window.location.hostname, table, table.notification);
  			}
  			
  			for (const row of table.rows) {
  				NotificationHelper.registerTableUpdates(row.relations);
  			}
  		}
  	}
  },
  unregisterTableUpdates: (tables: {[Identifier: string]: HierarchicalDataTable}) => {
  	for (const tableName in tables) {
  		if (tables.hasOwnProperty(tableName)) {
  			const table = tables[tableName];
  			
  			if (table.notification) {
  				NotificationHelper.unlistenTableUpdates('https://' + window.location.hostname, table, table.notification);
  			}
  			
  			for (const row of table.rows) {
  				NotificationHelper.unregisterTableUpdates(row.relations);
  			}
  		}
  	}
  },
  listenTableUpdates: (socketUrl: string, table: HierarchicalDataTable, identity: string) => {
  	if (!window.io) return;
  	
  	const notificationURI = `${socketUrl}\#${identity}`;
  	
  	if (notificationInfos[notificationURI] && notificationInfos[notificationURI].indexOf(table) != -1) return;
  	if (!sockets[socketUrl]) {
  		sockets[socketUrl] = window.io(socketUrl);
  		
			let firstTime = true;
			sockets[socketUrl].on('connection', (message: any) => {
				if (firstTime) {
					firstTime = false;
					return;
				}
				
				for (const key in retrieveButtons) {
					if (retrieveButtons.hasOwnProperty(key)) {
						const button = retrieveButtons[key];
						
						if (document.body.contains(button)) {
							button.click();
						}
					}
				}
				
				RequestHelper.get(window.location.href);
			});	
  	}
  	
  	notificationInfos[notificationURI] = notificationInfos[notificationURI] || [];
  	notificationInfos[notificationURI].push(table);
  	bindedFunctions[notificationURI] = {};
  	
  	const socket = sockets[socketUrl];
  	
  	socket.on('insert', bindedFunctions[notificationURI]['insert'] = (message: any) => {
  		if (message.id == identity) {
  			for (let result of message.results) {
          table.rows.push(result);
        }
        NotificationHelper.notifyTableUpdates(message);
  		}
    });
  	socket.on('delete', bindedFunctions[notificationURI]['delete'] = (message: any) => {
  		if (message.id == identity) {
  			for (let result of message.results) {
          let collection = table.rows.filter((row) => {
            for (let key in row.keys) {
              if (row.keys.hasOwnProperty(key)) {
                if (row.keys[key] != result.keys[key]) return false;
              }
            }
            return true;
          });
          for (let item of collection) {
          	let index = table.rows.indexOf(item);
          	table.rows.splice(index, 1);
          }
        }
        NotificationHelper.notifyTableUpdates(message);
  		}
    });
  	socket.on('update', bindedFunctions[notificationURI]['update'] = (message: any) => {
  		if (message.id == identity) {
        for (let result of message.results) {
        	let found = null;
        	
        	for (let row of table.rows) {
        		found = row;
        		for (let key in result.keys) {
              if (result.keys.hasOwnProperty(key)) {
                if (row.keys[key] != result.keys[key]) {
                  found = null;
                  break;
                }
              }
            }
          }
          
          if (found) {
          	for (let key in result.keys) {
              if (result.keys.hasOwnProperty(key)) {
                found.keys[key] = result.keys[key];
              }
            }
          	for (let key in result.columns) {
              if (result.columns.hasOwnProperty(key)) {
                found.columns[key] = result.columns[key];
              }
            }
          }
        }
        NotificationHelper.notifyTableUpdates(message);
  		}
    });
  	socket.on('upsert', bindedFunctions[notificationURI]['update'] = (message: any) => {
  		if (message.id == identity) {
        for (let result of message.results) {
        	let found = null;
        	
        	for (let row of table.rows) {
        		found = row;
        		for (let key in result.keys) {
              if (result.keys.hasOwnProperty(key)) {
                if (row.keys[key] != result.keys[key]) {
                  found = null;
                  break;
                }
              }
            }
          }
          
          if (found) {
          	for (let key in result.keys) {
              if (result.keys.hasOwnProperty(key)) {
                found.keys[key] = result.keys[key];
              }
            }
          	for (let key in result.columns) {
              if (result.columns.hasOwnProperty(key)) {
                found.columns[key] = result.columns[key];
              }
            }
          } else {
          	table.rows.push(result);
          }
        }
        NotificationHelper.notifyTableUpdates(message);
  		}
    });
  	socket.on('upsert', bindedFunctions[notificationURI]['update'] = (message: any) => {
  		if (message.id == identity) {
        for (let result of message.results) {
        	let found = null;
        	
        	for (let row of table.rows) {
        		found = row;
        		for (let key in result.keys) {
              if (result.keys.hasOwnProperty(key)) {
                if (row.keys[key] != result.keys[key]) {
                  found = null;
                  break;
                }
              }
            }
          }
          
          if (found) {
          	for (let key in result.keys) {
              if (result.keys.hasOwnProperty(key)) {
                found.keys[key] = result.keys[key];
              }
            }
          	for (let key in result.columns) {
              if (result.columns.hasOwnProperty(key)) {
                found.columns[key] = result.columns[key];
              }
            }
          } else {
          	table.rows.push(result);
          }
        }
        NotificationHelper.notifyTableUpdates(message);
  		}
    });
  },
  unlistenTableUpdates: (socketUrl: string, table: HierarchicalDataTable, identity: string) => {
  	if (!window.io) return;
  	
  	const notificationURI = `${socketUrl}\#${identity}`;
  	
  	if (!notificationInfos[notificationURI] || notificationInfos[notificationURI].indexOf(table) == -1) return;
  	if (!sockets[socketUrl]) return;
  	
  	const index = notificationInfos[notificationURI].indexOf(table);
  	notificationInfos[notificationURI].splice(index, 1);
  	
  	if (notificationInfos[notificationURI].length == 0) {
	  	const socket = sockets[socketUrl];
	  	
	  	socket.off('insert', bindedFunctions[notificationURI]['insert']);
	  	socket.off('delete', bindedFunctions[notificationURI]['delete']);
	  	socket.off('update', bindedFunctions[notificationURI]['update']);
	    
	  	delete notificationInfos[notificationURI];
	  	delete bindedFunctions[notificationURI];
	  }
  },
  notifyTableUpdates: (message) => {
  	const event = new CustomEvent('tableUpdated', {
			detail: message,
			cancelable: true
		});
		window.dispatchEvent(event);
  }
};

export {NotificationHelper};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECUASE YOUR CHANGES MAY BE LOST.