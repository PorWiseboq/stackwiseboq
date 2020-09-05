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
declare let $: any;

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
class Rectangle_a8055802 extends Base {
  state: IState = null;
  protected static defaultProps: IProps = DefaultProps;
  
  constructor(props) {
    super(props);
    this.state = CodeHelper.clone(DefaultState);
    
    this.initialize();
  }
  
  register() {
    DataManipulationHelper.register("a403abac", "insert", ["4522d52e","a4147a38","d09070d8"], {initClass: null, submitCrossType: null, enabledRealTimeUpdate: false, retrieveInto: null});
  }
  // <---Auto[ClassBegin]
  
  // Declare class variables and functions here:
  //
  protected initialize(): void {
  }
  
  protected componentDidMount(): void {
  	this.register();
  	this.scrollToBottom(true);
  }
  
  protected componentWillUnmount(): void {
  }
  
  protected componentDidUpdate(prevProps, prevState) {
    this.scrollToBottom();
  }
  
  private scrollToBottom(force: boolean=false): void {
    const container = ReactDOM.findDOMNode(this.refs.scroll);
    if (force || container.scrollTop + 50 > container.scrollHeight - container.offsetHeight) {
      $(container).animate({scrollTop: container.scrollHeight - container.offsetHeight}, 500);
    }
  }
  
  // Providing data array base on dot notation:
  // 
  protected getDataFromNotation(notation: string, inArray: boolean=false): any {
    return super.getDataFromNotation(notation, inArray);
  }
  
  // Auto[Merging]--->
  protected onButtonSuccess_a403abac(event: Event) {

    // Handle the event of onButtonSuccess (Button 4) here:
    // 
    ReactDOM.findDOMNode(this.refs.chatInput).value = '';
    this.scrollToBottom(true);
    
  }
  // <---Auto[Merging]
  
  // Auto[ClassEnd]--->
  protected render(): any {
    return pug `
      div(style=Object.assign({'width': '100vw', 'height': '100vh', 'display': 'flex', 'flexDirection': 'column', 'WebkitFlexDirection': 'column', 'MsFlexDirection': 'column'}, this.props.forward && this.props.forward.styles || {}), className="internal-fsb-element internal-fsb-allow-cursor " + (this.props.forward && this.props.forward.classes || ''), internal-fsb-guid="a8055802")
        .internal-fsb-element(style={'flexGrow': '1', 'WebkitFlexGrow': '1', 'overflowY': 'auto', 'MsOverflowY': 'auto'}, ref="scroll", internal-fsb-guid="41dc9cbd")
          .internal-fsb-element.col-12(style={'textAlign': 'center', 'color': 'rgba(128, 128, 128, 1)', 'marginTop': '7px', 'marginBottom': '7px', 'fontSize': '13px'}, internal-fsb-guid="8d6713e1")
            | ไม่มีข้อความถัดจากนี้
          each data, i in this.getDataFromNotation("Quote.Auction.Message", true)
            .internal-fsb-element.col-12(style={'fontSize': '12px', 'paddingRight': '15px', 'paddingBottom': '7px', 'paddingLeft': '15px'}, key="item_" + i, internal-fsb-guid="56e4cc4e")
              .container-fluid
                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                  .internal-fsb-element.internal-fsb-allow-cursor.col-10(style={'paddingLeft': '0px', 'paddingRight': '0px', 'display': (()=>{return (this.getDataFromNotation("Quote.Auction.Message[" + i + "].type") == 0) ? 'flex' : 'none';})() || 'flex'}, internal-fsb-guid="2a02217c")
                    .internal-fsb-element(style={'background': 'rgba(214, 237, 255, 1)', 'paddingTop': '5px', 'paddingBottom': '5px', 'paddingLeft': '7px', 'paddingRight': '7px', 'borderRadius': '5px 5px 5px 5px', 'WebkitBorderRadius': '5px 5px 5px 5px', 'fontSize': '13px'}, dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote.Auction.Message[" + i + "].message"))}, internal-fsb-guid="9b681ceb")
                  .internal-fsb-element.col-10.offset-2(style={'paddingLeft': '0px', 'paddingRight': '0px', 'display': (()=>{return (this.getDataFromNotation("Quote.Auction.Message[" + i + "].type") == 1) ? 'flex' : 'none';})() || 'flex', 'flexDirection': 'row-reverse', 'WebkitFlexDirection': 'row-reverse', 'MsFlexDirection': 'row-reverse'}, internal-fsb-guid="702a908d")
                    .internal-fsb-element(style={'background': 'rgba(237, 237, 237, 1)', 'paddingTop': '5px', 'paddingBottom': '5px', 'paddingLeft': '7px', 'paddingRight': '7px', 'borderRadius': '5px 5px 5px 5px', 'WebkitBorderRadius': '5px 5px 5px 5px', 'textAlign': 'right', 'fontSize': '13px'}, dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote.Auction.Message[" + i + "].message"))}, internal-fsb-guid="d1e0142d")
        .internal-fsb-element.col-12(style={'borderTopStyle': 'solid', 'borderTopColor': 'rgba(212, 212, 212, 1)', 'borderTopWidth': '1px', 'flexGrow': '0', 'WebkitFlexGrow': '0', 'flexShrink': '0', 'WebkitFlexShrink': '0', 'flexBasis': '20px', 'WebkitFlexBasis': '20px', 'paddingTop': '8px', 'paddingBottom': '8px', 'paddingLeft': '5px', 'paddingRight': '5px'}, internal-fsb-guid="91922b60")
          .container-fluid
            .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
              .internal-fsb-element.col-12(style={'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-guid="be5e6825")
                .container-fluid
                  .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                    .internal-fsb-element.col-9.col-sm-10.col-md-11(style={padding: '0px'}, internal-fsb-guid="4522d52e")
                      input.form-control.form-control-sm(style={'display': 'block', 'width': '100%'}, ref="chatInput", type="text", required=true, placeholder="ข้อความ")
                    input.internal-fsb-element.col-12(type="hidden", value="1", internal-fsb-guid="d09070d8")
                    input.internal-fsb-element.col-12(type="hidden", required=true, value=this.getDataFromNotation("Quote.Auction.aid"), internal-fsb-guid="a4147a38")
                    Button.internal-fsb-element.internal-fsb-allow-cursor.col-3.col-sm-2.col-md-1.btn.btn-primary.btn-sm(onClick=((event) => { window.internalFsbSubmit('a403abac', 'Message', event, ((results) => { this.manipulate('a403abac', 'Message', results); }).bind(this)); }).bind(this), type="button", onSuccess=this.onButtonSuccess_a403abac.bind(this), internal-fsb-guid="a403abac")
                      .internal-fsb-element(internal-fsb-guid="a403abac-text")
                        | ส่ง
    `
  }
}
DeclarationHelper.declare('Document', 'Controls.Rectangle_a8055802', Rectangle_a8055802);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.