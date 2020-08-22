// Auto[Generating:V1]--->
// PLEASE DO NOT MODIFY BECUASE YOUR CHANGES MAY BE LOST.

import {CodeHelper} from '../helpers/CodeHelper.js';
import {NotificationHelper} from '../helpers/NotificationHelper.js';
import {Project, DeclarationHelper} from '../helpers/DeclarationHelper.js';
import {HierarchicalDataTable, HierarchicalDataRow} from '../helpers/DataManipulationHelper.js';

declare let React: any;
declare let ReactDOM: any;
declare let DataManipulationHelper: any;

interface IBaseProps {
	row: HierarchicalDataRow;
	data: {[Identifier: string]: HierarchicalDataTable};
}

interface IBaseState {
	data: {[Identifier: string]: HierarchicalDataTable};
}

let DefaultBaseProps: any = {
	row: null,
	data: null
};
let DefaultBaseState: any = {
	data: null
};

const controls: any = [];
const update = (data: any) => {
  for (let control of controls) {
    try {
      control.update(data);
    } catch { /* void */ }
  }
};

class Base extends React.Component {
  constructor(props) {
    super(props);
    controls.push(this);
    
    if (props.data) {
    	NotificationHelper.registerTableUpdates(props.data);
    }
    
    window.addEventListener('tableUpdated', (() => {
    	this.forceUpdate();
    }).bind(this));
  }
  
  public update(data: any) {
  	const previous = this.state.data || this.props.data || {};
  	const next = Object.assign({}, previous, data || {})
  	
  	const deregistering = {};
  	for (let key in previous) {
  		if (next.hasOwnProperty(key)) {
  			deregistering[key] = previous[key];
  		}
  	}
  	
  	NotificationHelper.unregisterTableUpdates(deregistering);
  	if (data) {
  		NotificationHelper.registerTableUpdates(data);
  	}
  	
    this.setState({
      data: next
    });
  }
  
  protected getDataFromNotation(notation: string, inArray: boolean=false): any {
    if (!notation) {
      console.error("There was an error processing hierarchical data on client side (notation isn't a string).");
      return [];
    }
    
    if (this.props.row) {
    	return DataManipulationHelper.getDataFromNotation(notation, this.props.row, inArray);
    } else if (this.state.data) {
    	return DataManipulationHelper.getDataFromNotation(notation, this.state.data, inArray);
    } else if (this.props.data) {
    	return DataManipulationHelper.getDataFromNotation(notation, this.props.data, inArray);
    } else {
      return [''];
    }
  }
  
  public manipulate(guid: string, notation: string, results: any) {
    let data = this.getDataFromNotation(notation);
    let {action, options} = DataManipulationHelper.getInfo(guid);
    
    if (data == null) return;
    
    switch (action) {
      case 'insert':
        for (let result of results) {
          data.push(result);
        }
        break;
      case 'update':
        for (let result of results) {
        	let found = null;
        		
        	for (let row of data) {
        		for (let key in result.keys) {
              if (result.keys.hasOwnProperty(key)) {
                if (row.keys[key] != result.keys[key]) {
                  found = row;
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
        break;
      case 'upsert':
        for (let result of results) {
        	let found = null;
        	
        	for (let row of data) {
        		for (let key in result.keys) {
              if (result.keys.hasOwnProperty(key)) {
                if (row.keys[key] != result.keys[key]) {
                  found = row;
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
          	data.push(result);
          }
        }
        break;
      case 'delete':
        for (let result of results) {
          let collection = data.filter((row) => {
            for (let key in row.keys) {
              if (row.keys.hasOwnProperty(key)) {
                if (row.keys[key] != result.keys[key]) return false;
              }
            }
            return true;
          });
          for (let item of collection) {
          	let index = data.indexOf(item);
          	data.splice(index, 1);
          }
        }
        break;
      case 'retrieve':
        this.update(results);
        break;
      case 'popup':
        let container = document.createElement('div');
        ReactDOM.render(React.createElement(DeclarationHelper.get(options.initClass), {data: results}, null), container);
        document.body.appendChild(container.firstChild);
        break;
      case 'navigate':
        /* handled */
        break;
    }
    
    this.forceUpdate();
  }
  
  protected render() { }
}

DeclarationHelper.declare('Site', 'Components.Base', Base);

class Button extends React.Component {
	constructor(props) {
    super(props);
  }
  
  componentDidMount() {
  	let button = ReactDOM.findDOMNode(this.refs.button);
  	
  	if (this.props.onSubmitting) {
  		button.addEventListener('submitting', this.props.onSubmitting, false);
  	}
  	if (this.props.onSubmitted) {
  		button.addEventListener('submitted', this.props.onSubmitted, false);
  	}
  	if (this.props.onFailed) {
  		button.addEventListener('failed', this.props.onFailed, false);
  	}
  	if (this.props.onSuccess) {
  		button.addEventListener('success', this.props.onSuccess, false);
  	}
  }
  
  protected render(): any {
    return (
      <button ref="button" {...this.props}></button>
    )
  }
}

export {IBaseProps, IBaseState, DefaultBaseProps, DefaultBaseState, Button, Base};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECUASE YOUR CHANGES MAY BE LOST.
