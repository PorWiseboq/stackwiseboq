// Auto[Generating:V1]--->
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.

// Auto[Import]--->
import {Project as $Project, DeclarationHelper} from '../helpers/DeclarationHelper.js';
import {CodeHelper} from '../helpers/CodeHelper.js';
import {EventHelper} from '../helpers/EventHelper.js';
import {HTMLHelper} from '../helpers/HTMLHelper.js';
import {IBaseProps, IBaseState, DefaultBaseProps, DefaultBaseState, Button as $Button, Base} from './Base.js';
// <---Auto[Import]

// Import additional modules here:
//

// Auto[Declare]--->

declare let React: any;
declare let ReactDOM: any;
declare let window: any;
declare let DataManipulationHelper: any;
declare let pug: any;

let Button = $Button;
let Project = $Project;

// <---Auto[Declare]

// Declare private static variables here:
//

// Auto[Interface]--->
interface IAutoBaseProps extends IBaseProps {
  forward: {classes: String, styles: any};
}
interface IAutoBaseState extends IBaseState {
}
// <---Auto[Interface]

// Declare or extend interfaces here:
//
interface IProps extends IAutoBaseProps {
  
}
interface IState extends IAutoBaseState { 
}

let DefaultProps = Object.assign({}, DefaultBaseProps, {
  
});
let DefaultState = Object.assign({}, DefaultBaseState, {
  
});

// Auto[ClassBegin]--->
class FlowLayout_2d5ecc43 extends Base {
  state: IState = null;
  protected static defaultProps: IProps = DefaultProps;
  
  constructor(props) {
    super(props);
    this.state = CodeHelper.clone(DefaultState);
    
    this.initialize();
  }
  
  register() {

  }
  // <---Auto[ClassBegin]
  
  // Declare class variables and functions here:
  //
  protected initialize(): void {
    window.setInterval((() => {
      this.forceUpdate();
    }).bind(this), 1000);
  }
  
  protected componentDidMount(): void {
  	this.register();
  }
  
  protected componentWillUnmount(): void {
  }
  
  private getRemainingTime(): string {
    if (this.props.cancel) return 'หมดเวลา';
    
    const createdAt = this.props.begin;
    const auctionHours = this.props.auctionhours + this.props.showinghours;
    
    if (isNaN(auctionHours)) return 'ไม่มี'
    
    const remaining = Math.max(0, new Date(createdAt).getTime() + auctionHours * 60 * 60 * 1000 - new Date().getTime());
    let seconds = remaining / 1000;
    let minutes = seconds / 60;
    let hours = minutes / 60;
    
    seconds = Math.floor(seconds) % 60;
    minutes = Math.floor(minutes) % 60;
    hours = Math.floor(hours);
    
    let _seconds = '';
    let _minutes = '';
    let _hours = '';
    
    if (seconds < 10) _seconds = '0' + seconds;
    else _seconds = seconds.toString();
    
    if (minutes < 10) _minutes = '0' + minutes;
    else _minutes = minutes.toString();
    
    if (hours < 10) _hours = '0' + hours;
    else _hours = hours.toString();
    
    return `${_hours}:${_minutes}:${_seconds}`;
  }
  
  // Providing data array base on dot notation:
  // 
  protected getDataFromNotation(notation: string, inArray: boolean=false): any {
    return super.getDataFromNotation(notation, inArray);
  }
  
  // Auto[Merging]--->
  // <---Auto[Merging]
  
  // Auto[ClassEnd]--->
  protected render(): any {
    return pug `
      div(style=Object.assign({'paddingLeft': '0px', 'paddingRight': '0px'}, this.props.forward && this.props.forward.styles || {}), className="internal-fsb-element col-12 " + (this.props.forward && this.props.forward.classes || ''), internal-fsb-guid="2d5ecc43")
        .container-fluid
          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
            .internal-fsb-element.col-12(style={'paddingLeft': '0px', 'paddingRight': '0px', 'textAlign': 'center', 'marginTop': '7px'}, internal-fsb-guid="56307895")
              | #{this.getRemainingTime()}
    `
  }
}
DeclarationHelper.declare('Document', 'Controls.FlowLayout_2d5ecc43', FlowLayout_2d5ecc43);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.