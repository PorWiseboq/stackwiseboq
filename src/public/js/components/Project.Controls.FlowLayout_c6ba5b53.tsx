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
  type: number;
  error: boolean;
  title: string;
  size: string;
  quantity: string;
  group: string;
}

let DefaultProps = Object.assign({}, DefaultBaseProps, {
  
});
let DefaultState = Object.assign({}, DefaultBaseState, {
  type: -1,
  title: "",
  size: "",
  quantity: ""
});

// Auto[ClassBegin]--->
class FlowLayout_c6ba5b53 extends Base {
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
    this.state.group = Math.random().toString();
    
    this.refresh(this.props);
  }
  
  protected componentWillReceiveProps(nextProps): void {
    if (nextProps.submitting) return;
    
    this.refresh(nextProps);
  }
  
  private refresh(props): void {
    const value = this.getDataFromNotation('Substitute.type', false);
    this.state.error = (value == null) ? false : (Math.min(value, props.type) !== value && value !== 3);
    this.state.type = (this.state.error || value == null) ? -1 : value;
    
    this.state.title = this.getDataFromNotation('Substitute.title', false) || "";
    this.state.size = this.getDataFromNotation('Substitute.size', false) || "";
    this.state.quantity = this.getDataFromNotation('Substitute.quantity', false) || "";
    
    this.forceUpdate();
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
  protected onRadioClick_1832b944(event: Event) {

    // Handle the event of onRadioClick (Radio 5) here:
    // 
    this.setState({type: 0});
    
  }

  protected onRadioClick_b91e2739(event: Event) {

    // Handle the event of onRadioClick (Radio 4) here:
    // 
    this.setState({type: 1});
    
  }

  protected onRadioClick_03aab0e5(event: Event) {

    // Handle the event of onRadioClick (Radio 3) here:
    // 
    this.setState({type: 2});
    
  }

  protected onRadioClick_957c1568(event: Event) {

    // Handle the event of onRadioClick (Radio 6) here:
    // 
    this.setState({type: 3});
    
  }

  protected onTextboxKeyUp_1382e4c9(event: Event) {

    // Handle the event of onTextboxKeyUp (Price) here:
    // 
    const element = EventHelper.getCurrentElement(event);
    const value = parseInt(element.value);
    
    let type = -1;
    if (ReactDOM.findDOMNode(this.refs.radType0).getAttribute('checked') == 'true') type = 0;
    else if (ReactDOM.findDOMNode(this.refs.radType1).getAttribute('checked') == 'true') type = 1;
    else if (ReactDOM.findDOMNode(this.refs.radType2).getAttribute('checked') == 'true') type = 2;
    else if (ReactDOM.findDOMNode(this.refs.radType3).getAttribute('checked') == 'true') type = 3;
    
    const title = (type == 1 || type == 2) ? ReactDOM.findDOMNode(this.refs.quantity).value : this.getDataFromNotation('quantity');
    const quantity =  parseInt(title);
    
    this.props.onpricechanged(value * quantity);
    
  }

  protected onTextboxChange_9c338431(event: Event) {

    // Handle the event of onTextboxChange (Name) here:
    // 
    const element = EventHelper.getCurrentElement(event);
    this.setState({title: element.value});
    
  }

  protected onTextboxChange_d913e6a1(event: Event) {

    // Handle the event of onTextboxChange (Size) here:
    // 
    const element = EventHelper.getCurrentElement(event);
    this.setState({size: element.value});
    
  }

  protected onTextboxChange_c22ec668(event: Event) {

    // Handle the event of onTextboxChange (Quantity) here:
    // 
    const element = EventHelper.getCurrentElement(event);
    this.setState({quantity: element.value});
    
  }
  // <---Auto[Merging]
  
  // Auto[ClassEnd]--->
  protected render(): any {
    return pug `
      div(style=Object.assign({background: (()=>{return (this.state.error) ? 'rgb(255, 172, 172)' : '';})(), borderTopColor: (()=>{return (this.state.error) ? 'rgb(255, 0, 0)' : '';})(), borderRightColor: (()=>{return (this.state.error) ? 'rgb(255, 0, 0)' : '';})(), borderBottomColor: (()=>{return (this.state.error) ? 'rgb(255, 0, 0)' : '';})(), borderLeftColor: (()=>{return (this.state.error) ? 'rgb(255, 0, 0)' : '';})()}, this.props.forward && this.props.forward.styles || {}), className="internal-fsb-element col-12 -fsb-self-c6ba5b53 " + (this.props.forward && this.props.forward.classes || ''), internal-fsb-guid="c6ba5b53")
        .container-fluid
          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
            .internal-fsb-element.col-4.offset-0.-fsb-self-65ec89d1(internal-fsb-guid="65ec89d1")
              .container-fluid
                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                  .internal-fsb-element.col-12(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("title"))}, internal-fsb-guid="a818c946")
                  .internal-fsb-element.col-12(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("size"))}, dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("size"))}, internal-fsb-guid="eccb7c51")
                  .internal-fsb-element.col-12(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("quantity"))}, dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("quantity"))}, dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("quantity"))}, internal-fsb-guid="0e3365eb")
            .internal-fsb-element.col-3.offset-0(internal-fsb-guid="e5e63918")
              .container-fluid
                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                  label.internal-fsb-element.col-12.offset-0(style={'paddingLeft': '0px', 'paddingRight': '0px', 'marginBottom': '3px'}, internal-fsb-guid="b42d4545")
                    .container-fluid
                      .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                        .internal-fsb-element.-fsb-preset-b6c9ad89.col-2.offset-0(style={padding: '0px'}, internal-fsb-guid="1832b944")
                          input(style={'display': 'block', 'paddingLeft': '0px', 'FsbInheritedPresets': 'b6c9ad89'}, ref="radType0", onClick=this.onRadioClick_1832b944.bind(this), type="radio", value="0", name=this.state.group, checked=this.state.type == 0, data-com.agilebits.onepassword.initial-value="0", disabled=this.props.submitting, defaultChecked=this.getDataFromNotation("Substitute.type") == '0')
                        .internal-fsb-element.-fsb-preset-b5cd72c0.col-10.offset-0(style={'FsbInheritedPresets': 'b5cd72c0'}, style={padding: '0px'}, internal-fsb-guid="1832b944", internal-fsb-guid="b80041d3")
                          | เจาะจง
                  label.internal-fsb-element.col-12.offset-0(style={'paddingLeft': '0px', 'paddingRight': '0px', 'marginBottom': '3px', display: (()=>{return (this.props.type >= 1) ? 'block' : 'none';})()}, internal-fsb-guid="eb192633")
                    .container-fluid
                      .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                        .internal-fsb-element.-fsb-preset-b6c9ad89.col-2.offset-0(style={padding: '0px'}, internal-fsb-guid="b91e2739")
                          input(style={'display': 'block', 'paddingLeft': '0px', 'FsbInheritedPresets': 'b6c9ad89'}, ref="radType1", onClick=this.onRadioClick_b91e2739.bind(this), type="radio", value="1", name=this.state.group, checked=this.state.type == 1, data-com.agilebits.onepassword.initial-value="1", disabled=this.props.submitting, defaultChecked=this.getDataFromNotation("Substitute.type") == '1')
                        .internal-fsb-element.-fsb-preset-b5cd72c0.col-10.offset-0(style={'FsbInheritedPresets': 'b5cd72c0'}, style={padding: '0px'}, internal-fsb-guid="b91e2739", internal-fsb-guid="58266972")
                          | เทียบเท่า
                  label.internal-fsb-element.col-12.offset-0(style={'paddingLeft': '0px', 'paddingRight': '0px', 'marginBottom': '3px', display: (()=>{return (this.props.type >= 2) ? 'block' : 'none';})()}, internal-fsb-guid="2cb33325")
                    .container-fluid
                      .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                        .internal-fsb-element.-fsb-preset-b6c9ad89.col-2.offset-0(style={padding: '0px'}, internal-fsb-guid="03aab0e5")
                          input(style={'display': 'block', 'paddingLeft': '0px', 'FsbInheritedPresets': 'b6c9ad89'}, ref="radType2", onClick=this.onRadioClick_03aab0e5.bind(this), type="radio", value="2", name=this.state.group, checked=this.state.type == 2, data-com.agilebits.onepassword.initial-value="2", disabled=this.props.submitting, defaultChecked=this.getDataFromNotation("Substitute.type") == '2')
                        .internal-fsb-element.-fsb-preset-b5cd72c0.col-10.offset-0(style={'FsbInheritedPresets': 'b5cd72c0'}, style={padding: '0px'}, internal-fsb-guid="03aab0e5", internal-fsb-guid="5c2b0578")
                          | ทดแทน
                  label.internal-fsb-element.col-12.offset-0(style={'paddingLeft': '0px', 'paddingRight': '0px', 'marginBottom': '3px'}, internal-fsb-guid="c1c5b10b")
                    .container-fluid
                      .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                        .internal-fsb-element.-fsb-preset-b6c9ad89.col-2.offset-0(style={padding: '0px'}, internal-fsb-guid="957c1568")
                          input(style={'display': 'block', 'FsbInheritedPresets': 'b6c9ad89'}, ref="radType3", onClick=this.onRadioClick_957c1568.bind(this), type="radio", value="3", name=this.state.group, checked=this.state.type == 3, data-com.agilebits.onepassword.initial-value="3", disabled=this.props.submitting, defaultChecked=this.getDataFromNotation("Substitute.type") == '3')
                        .internal-fsb-element.-fsb-preset-b5cd72c0.col-10.offset-0(style={'FsbInheritedPresets': 'b5cd72c0'}, style={padding: '0px'}, internal-fsb-guid="957c1568", internal-fsb-guid="a3b9410d")
                          | ไม่มี
                  .internal-fsb-element.col-12(style={'paddingLeft': '0px', 'paddingRight': '0px', display: (()=>{return (this.state.type == 0 || this.state.type == 1 || this.state.type == 2) ? 'block' : 'none';})()}, internal-fsb-guid="45b20175")
                    .container-fluid
                      .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                        .internal-fsb-element.col-7.offset-0(style={padding: '0px'}, internal-fsb-guid="1382e4c9")
                          input.form-control.form-control-sm(style={'display': 'block', 'width': '100%', 'fontSize': '12px'}, onKeyUp=this.onTextboxKeyUp_1382e4c9.bind(this), type="text", placeholder="ราคาต่อหน่วย", defaultValue=this.getDataFromNotation("Substitute.price"))
                        .internal-fsb-element.col-5.offset-0(style={'paddingTop': '4px', 'textAlign': 'left', 'paddingLeft': '5px', 'fontSize': '13px'}, style={padding: '0px'}, internal-fsb-guid="1382e4c9", internal-fsb-guid="530bacd3")
                          | บาท
            .internal-fsb-element.col-5.offset-0(style={display: (()=>{return (this.state.type == 1 || this.state.type == 2) ? 'block' : 'none';})()}, internal-fsb-guid="483390a6")
              .container-fluid
                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                  .internal-fsb-element.col-12.offset-0(style={padding: '0px'}, internal-fsb-guid="9c338431")
                    input.form-control.form-control-sm(style={'display': 'block', 'width': '100%', 'marginBottom': '5px', 'fontSize': '12px'}, onChange=this.onTextboxChange_9c338431.bind(this), type="text", placeholder="เปลี่ยนวัสดุเป็น", value=this.state.title, data-com.agilebits.onepassword.initial-value=this.state.title, disabled=this.props.submitting)
                  .internal-fsb-element.col-12.offset-0(style={padding: '0px'}, style={padding: '0px'}, internal-fsb-guid="9c338431", internal-fsb-guid="d913e6a1")
                    input.form-control.form-control-sm(style={'display': 'block', 'width': '100%', 'marginBottom': '5px', 'fontSize': '12px'}, onChange=this.onTextboxChange_d913e6a1.bind(this), type="text", placeholder="เปลี่ยนขนาดเป็น", value=this.state.size, data-com.agilebits.onepassword.initial-value=this.state.size, disabled=this.props.submitting)
                  .internal-fsb-element.col-12.offset-0(style={padding: '0px'}, style={padding: '0px'}, style={padding: '0px'}, internal-fsb-guid="9c338431", internal-fsb-guid="d913e6a1", internal-fsb-guid="c22ec668")
                    input.form-control.form-control-sm(style={'display': 'block', 'width': '100%', 'fontSize': '12px'}, ref="quantity", onChange=this.onTextboxChange_c22ec668.bind(this), type="text", placeholder="เปลี่ยนปริมาณเป็น", value=this.state.quantity, data-com.agilebits.onepassword.initial-value=this.state.quantity, disabled=this.props.submitting)
            input.internal-fsb-element.col-12(type="hidden", value=this.getDataFromNotation("lid"), internal-fsb-guid="ae7e2437")
    `
  }
}
DeclarationHelper.declare('Document', 'Controls.FlowLayout_c6ba5b53', FlowLayout_c6ba5b53);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.