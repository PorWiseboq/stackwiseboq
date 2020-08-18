// Auto[Generating:V1]--->
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.

// Auto[Import]--->
import {Project, DeclarationHelper} from '../helpers/DeclarationHelper.js';
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
  disabled: boolean;
}

let DefaultProps = Object.assign({}, DefaultBaseProps, {
  
});
let DefaultState = Object.assign({}, DefaultBaseState, {
  disabled: false
});

// Auto[ClassBegin]--->
class FlowLayout_cbb338d5 extends Base {
  state: IState = null;
  protected static defaultProps: IProps = DefaultProps;
  
  constructor(props) {
    super(props);
    this.state = CodeHelper.clone(DefaultState);
    
    this.initialize();
  }
  
  register() {
    DataManipulationHelper.register("e6d44b49", "navigate", ["d66b23a4","e27d4c3b","8bcca5bc","3a931201","37473e1c","9d2bb91e","c085ee08","eca33837","e07e83cb","3a91a437","903420db","8ce0a253","72928a9c"], {initClass: null, submitCrossType: null});
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
  protected onButtonSubmitting_e6d44b49(event: Event) {

    // Handle the event of onButtonSubmitting (Button 1) here:
    // 
    this.setState({disabled: true});
    
  }

  protected onButtonSubmitted_e6d44b49(event: Event) {

    // Handle the event of onButtonSubmitted (Button 1) here:
    // 
    this.setState({disabled: false});
    
  }
  // <---Auto[Merging]
  
  // Auto[ClassEnd]--->
  protected render(): any {
    return pug `
      div(style=Object.assign({}, this.props.forward && this.props.forward.styles || {}) className="internal-fsb-element col-6 offset-3 " + (this.props.forward && this.props.forward.classes || '') internal-fsb-guid="cbb338d5")
        .container-fluid
          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
            .internal-fsb-element.col-12(internal-fsb-guid="91074151")
              .container-fluid
                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                  .internal-fsb-element.col-4.offset-0(style={'textAlign': 'right', 'paddingTop': '7px', 'paddingRight': '10px'} internal-fsb-guid="267cdd86")
                    | ชื่อร้านค้า
                  .internal-fsb-element.col-8.offset-0(style={padding: '0px'} internal-fsb-guid="d66b23a4")
                    input.form-control(style={'display': 'block', 'width': '100%'} type="text" required=true disabled=this.state.disabled)
            .internal-fsb-element.col-12(style={'marginTop': '10px'} internal-fsb-guid="d331c249")
              .container-fluid
                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                  .internal-fsb-element.col-4.offset-0(style={'paddingTop': '7px', 'paddingRight': '10px', 'textAlign': 'right'} internal-fsb-guid="b29e039a")
                    | ชื่อ (เจ้าของร้านค้า)
                  .internal-fsb-element.col-8.offset-0(style={padding: '0px'} internal-fsb-guid="e27d4c3b")
                    input.form-control(style={'display': 'block', 'width': '100%'} type="text" required=true disabled=this.state.disabled)
            .internal-fsb-element.col-12(style={'marginTop': '10px'} internal-fsb-guid="75a9d0dc")
              .container-fluid
                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                  .internal-fsb-element.col-4.offset-0(style={'textAlign': 'right', 'paddingTop': '7px', 'paddingRight': '10px'} internal-fsb-guid="7d617e5d")
                    | นามสกุล (เจ้าของร้านค้า)
                  .internal-fsb-element.col-8.offset-0(style={padding: '0px'} internal-fsb-guid="3a931201")
                    input.form-control(style={'display': 'block', 'width': '100%'} type="text" required=true disabled=this.state.disabled)
            .internal-fsb-element.col-12(style={'marginTop': '10px'} internal-fsb-guid="c7e794b0")
              .container-fluid
                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                  .internal-fsb-element.col-4.offset-0(style={'textAlign': 'right', 'paddingTop': '7px', 'paddingRight': '10px'} internal-fsb-guid="3a9447ea")
                    | เบอร์โทรศัพท์ (เจ้าของร้านค้า)
                  .internal-fsb-element.col-8.offset-0(style={padding: '0px'} internal-fsb-guid="8bcca5bc")
                    input.form-control(style={'display': 'block', 'width': '100%'} type="text" required=true disabled=this.state.disabled)
            .internal-fsb-element.col-12.offset-0(style={'marginTop': '10px'} internal-fsb-guid="3353b490")
              .container-fluid
                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                  .internal-fsb-element.col-12(internal-fsb-guid="8a053c9a")
                    .container-fluid
                      .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                        .internal-fsb-element.col-2.offset-0(style={'paddingTop': '7px', 'paddingRight': '10px', 'textAlign': 'right'} internal-fsb-guid="bee7e7b3")
                          | ที่อยู่:
                        .internal-fsb-element.col-2.offset-0(style={'textAlign': 'right', 'paddingTop': '7px', 'paddingRight': '10px'} internal-fsb-guid="aca398eb")
                          | จังหวัด
                        .internal-fsb-element.col-4.offset-0(style={padding: '0px'} internal-fsb-guid="37473e1c")
                          input.form-control(style={'display': 'block', 'width': '100%'} type="text" required=true disabled=this.state.disabled)
                  .internal-fsb-element.col-12(style={'marginTop': '10px'} internal-fsb-guid="4bb18449")
                    .container-fluid
                      .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                        .internal-fsb-element.col-4(style={'textAlign': 'right', 'paddingTop': '7px', 'paddingRight': '10px'} internal-fsb-guid="86ab6312")
                          | อำเภอ / แขวง
                        .internal-fsb-element.col-4.offset-0(style={padding: '0px'} internal-fsb-guid="9d2bb91e")
                          input.form-control(style={'display': 'block', 'width': '100%'} type="text" required=true disabled=this.state.disabled)
                  .internal-fsb-element.col-12(style={'marginTop': '10px'} internal-fsb-guid="9708548b")
                    .container-fluid
                      .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                        .internal-fsb-element.col-4(style={'textAlign': 'right', 'paddingTop': '7px', 'paddingRight': '10px'} internal-fsb-guid="d43d7ee8")
                          | ตำบล / เขต
                        .internal-fsb-element.col-4.offset-0(style={padding: '0px'} internal-fsb-guid="c085ee08")
                          input.form-control(style={'display': 'block', 'width': '100%'} type="text" required=true disabled=this.state.disabled)
                  .internal-fsb-element.col-12(style={'marginTop': '10px'} internal-fsb-guid="2bc69d3c")
                    .container-fluid
                      .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                        .internal-fsb-element.col-2.offset-2(style={'textAlign': 'right', 'paddingTop': '7px', 'paddingRight': '10px'} internal-fsb-guid="005dc3d9")
                          | บ้านเลขที่
                        .internal-fsb-element.col-2.offset-0(style={padding: '0px'} internal-fsb-guid="eca33837")
                          input.form-control(style={'display': 'block', 'width': '100%'} type="text" required=true disabled=this.state.disabled)
                        .internal-fsb-element.col-1.offset-0(style={'paddingTop': '7px', 'paddingRight': '10px', 'textAlign': 'right'} internal-fsb-guid="9476b17d")
                          | ซอย
                        .internal-fsb-element.col-2.offset-0(style={padding: '0px'} internal-fsb-guid="3a91a437")
                          input.form-control(style={'display': 'block', 'width': '100%'} type="text" disabled=this.state.disabled)
                        .internal-fsb-element.col-1.offset-0(style={'paddingTop': '7px', 'paddingRight': '10px', 'textAlign': 'right'} internal-fsb-guid="7c1d19a9")
                          | ถนน
                        .internal-fsb-element.col-2.offset-0(style={padding: '0px'} internal-fsb-guid="e07e83cb")
                          input.form-control(style={'display': 'block', 'width': '100%'} type="text" disabled=this.state.disabled)
                  .internal-fsb-element.col-12(style={'marginTop': '10px'} internal-fsb-guid="a2495b85")
                    .container-fluid
                      .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                        .internal-fsb-element.col-2.offset-2(style={'paddingTop': '7px', 'paddingRight': '10px', 'textAlign': 'right'} internal-fsb-guid="d1a3b49b")
                          | รหัสไปรษณีย์
                        .internal-fsb-element.col-4.offset-0(style={padding: '0px'} internal-fsb-guid="903420db")
                          input.form-control(style={'display': 'block', 'width': '100%'} type="text" required=true disabled=this.state.disabled)
            .internal-fsb-element.col-12(style={'paddingTop': '20px'} internal-fsb-guid="0816dd23")
              .container-fluid
                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                  Button.internal-fsb-element.internal-fsb-allow-cursor.col-4.offset-4.btn.btn-primary(type="button" onSubmitting=this.onButtonSubmitting_e6d44b49.bind(this) onSubmitted=this.onButtonSubmitted_e6d44b49.bind(this) disabled=this.state.disabled onClick=((event) => { window.internalFsbSubmit('e6d44b49', 'User', event, ((results) => { this.manipulate('e6d44b49', 'User', results); }).bind(this)); }).bind(this) internal-fsb-guid="e6d44b49")
                    .internal-fsb-element(internal-fsb-guid="e6d44b49-text")
                      | บันทึก
                  input.internal-fsb-element.col-12(type="hidden" value="123" internal-fsb-guid="8ce0a253")
                  input.internal-fsb-element.col-12(type="hidden" internal-fsb-guid="72928a9c")
    `
  }
}
DeclarationHelper.declare('Document', 'Controls.FlowLayout_cbb338d5', FlowLayout_cbb338d5);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.