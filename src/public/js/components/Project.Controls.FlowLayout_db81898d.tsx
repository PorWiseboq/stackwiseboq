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
  remainingTime: string;
}

let DefaultProps = Object.assign({}, DefaultBaseProps, {
  
});
let DefaultState = Object.assign({}, DefaultBaseState, {
  remainingTime: ''
});

// Auto[ClassBegin]--->
class FlowLayout_db81898d extends Base {
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
      this.refreshRemainingTime();
    }).bind(this), 1000);
    this.refreshRemainingTime();
  }
  
  protected componentDidMount(): void {
  	this.register();
  }
  
  protected componentWillUnmount(): void {
  }
  
  // Private function for remaining time
  //
  private refreshRemainingTime() {
    this.state.remainingTime = this.getLongRemainingTime(true);
    this.forceUpdate();
    
    if (this.state.remainingTime == 'การประมูลสิ้นสุดลงแล้ว') {
      window.location.href = '/buyer/auction/results';
    }
  }
  
  private getShortRemainingTime(): string {
    const createdAt = this.getDataFromNotation('Quote.createdAt');
    const hoursChecked = this.getDataFromNotation('Quote.hoursChecked');
    let auctionHours = (hoursChecked) ? parseInt(this.getDataFromNotation('Quote.hours')) : 24;
    
    if (isNaN(auctionHours)) auctionHours = 24;
    
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
  
  private getLongRemainingTime(fullmode: boolean=false): string {
    let remaining = this.getShortRemainingTime();
    if (fullmode) {
      if (remaining) {
        if (remaining == '00:00:00') {
          return 'การประมูลสิ้นสุดลงแล้ว';
        } else {
          const splited = remaining.split(':');
          return `กำลังประมูล.. รออีกประมาณ ${parseInt(splited[0])} ชั่วโมง ${parseInt(splited[1])} นาที ${parseInt(splited[2])} วินาที`;
        }
      } else {
        return '';
      }
    } else {
      return remaining;
    }
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
      div(style=Object.assign({'marginTop': '25px', 'position': 'relative'}, this.props.forward && this.props.forward.styles || {}), className="internal-fsb-element col-10 offset-1 " + (this.props.forward && this.props.forward.classes || ''), internal-fsb-guid="db81898d")
        .container-fluid
          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
            .internal-fsb-element.col-12.offset-0(dangerouslySetInnerHTML={__html: "<div class=\"loader\"></div><style type=\"text/css\">.loader,\n.loader:after {\n  border-radius: 50%;\n  width: 200px;\n  height: 200px;\n}\n.loader {\n  margin: 60px auto;\n  font-size: 10px;\n  position: relative;\n  text-indent: -9999em;\n  border-top: 1.1em solid rgba(0,199,253, 0.2);\n  border-right: 1.1em solid rgba(0,199,253, 0.2);\n  border-bottom: 1.1em solid rgba(0,199,253, 0.2);\n  border-left: 1.1em solid #00c7fd;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation: load8 1.1s infinite linear;\n  animation: load8 1.1s infinite linear;\n}\n@-webkit-keyframes load8 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@keyframes load8 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}</style> "}, internal-fsb-guid="bc39e158")
            .internal-fsb-element(style={'position': 'absolute', 'top': '0px', 'left': '0px', 'right': '0px'}, internal-fsb-guid="db6e5207")
              .container-fluid
                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                  .internal-fsb-element.offset-0(style={'textAlign': 'center', 'fontSize': '13px', 'color': 'rgba(22, 98, 250, 1)', 'marginLeft': '-80px', 'marginTop': '145px', 'left': '50%', 'width': '160px'}, internal-fsb-guid="1c20dd17")
                    div
                      | #{this.state.remainingTime}
    `
  }
}
DeclarationHelper.declare('Document', 'Controls.FlowLayout_db81898d', FlowLayout_db81898d);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.