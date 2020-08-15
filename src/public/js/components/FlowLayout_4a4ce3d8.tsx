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
class FlowLayout_4a4ce3d8 extends Base {
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
  }
  
  protected componentDidMount(): void {
  	this.register();
  }
  
  protected componentWillUnmount(): void {
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
      div(style=Object.assign({'float': 'left', 'paddingBottom': '10px'}, this.props.forward && this.props.forward.styles || {}) className="internal-fsb-element " + (this.props.forward && this.props.forward.classes || '') internal-fsb-guid="4a4ce3d8")
        .container-fluid
          .row.internal-fsb-strict-layout
            .internal-fsb-inheriting-element(style={'width': '210px'})
              .container-fluid
                .row.internal-fsb-strict-layout
                  .col-6.offset-0.internal-fsb-inheriting-element(style={'textAlign': 'center', 'fontFamily': 'Roboto', 'color': 'rgba(22, 98, 250, 1)', 'fontSize': '24px', 'fontWeight': '400'})
                    | Wise
                  .col-6.offset-0.internal-fsb-inheriting-element(style={'textAlign': 'center', 'color': 'rgba(255, 255, 255, 1)', 'fontFamily': 'Roboto', 'fontSize': '24px', 'fontWeight': '400', 'background': 'rgba(22, 98, 250, 1)', 'borderRadius': '5px 5px 5px 5px', 'WebkitBorderRadius': '5px 5px 5px 5px'})
                    | BOQ
                  .col-12.internal-fsb-inheriting-element(style={'paddingLeft': '5px', 'paddingRight': '5px', 'fontFamily': 'Roboto', 'fontSize': '13px', 'textAlign': 'center', 'paddingTop': '5px'})
                    | สืบราคา-สั่งซื้อ วัสดุก่อสร้างออนไลน์
    `
  }
}
DeclarationHelper.declare('Site', 'Controls.FlowLayout_4a4ce3d8', FlowLayout_4a4ce3d8);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.