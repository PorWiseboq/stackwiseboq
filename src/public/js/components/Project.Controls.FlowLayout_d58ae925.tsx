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
  inserted: boolean;
}

let DefaultProps = Object.assign({}, DefaultBaseProps, {
  
});
let DefaultState = Object.assign({}, DefaultBaseState, {
  inserted: false
});

// Auto[ClassBegin]--->
class FlowLayout_d58ae925 extends Base {
  state: IState = null;
  protected static defaultProps: IProps = DefaultProps;
  
  constructor(props) {
    super(props);
    this.state = CodeHelper.clone(DefaultState);
    
    this.initialize();
  }
  
  register() {
    DataManipulationHelper.register("c3c4e405", "navigate", ["d064b129","a0641238","1d258b94","9ba2b637","3dcb582a"], {initClass: null, submitCrossType: null, enabledRealTimeUpdate: false, retrieveInto: null});
    DataManipulationHelper.register("2258be6b", "update", ["d064b129","a0641238","1d258b94","9ba2b637","3dcb582a","50cb1c1b"], {initClass: null, submitCrossType: null, enabledRealTimeUpdate: false, retrieveInto: null});
  }
  // <---Auto[ClassBegin]
  
  // Declare class variables and functions here:
  //
  protected initialize(): void {
    this.state.inserted = (this.props.data != null);
  }
  
  protected componentDidMount(): void {
    this.register(); 
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
      div(style=Object.assign({'paddingLeft': '0px', 'paddingRight': '0px', 'marginTop': '15px'}, this.props.forward && this.props.forward.styles || {}), className="internal-fsb-element col-10 offset-1 " + (this.props.forward && this.props.forward.classes || ''), internal-fsb-guid="d58ae925")
        .container-fluid
          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
            .internal-fsb-element.col-9.offset-0(style={'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-guid="3537bdb3")
              .container-fluid
                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                  .internal-fsb-element.col-2.offset-0(style={'paddingLeft': '0px'}, internal-fsb-guid="52c488ce")
                    | ชื่อเรื่อง
                  .internal-fsb-element.col-10.offset-0(style={padding: '0px'}, internal-fsb-guid="d064b129")
                    input.form-control(style={'display': 'block', 'width': '100%', 'marginBottom': '10px'}, maxlength="50", type="text", required=true, defaultValue=this.getDataFromNotation("Blog.title"))
                  .internal-fsb-element.col-2.offset-0(style={'paddingLeft': '0px'}, internal-fsb-guid="5b62d3ee")
                    | เนื้อหา
                  .internal-fsb-element.col-10.offset-0(style={padding: '0px'}, internal-fsb-guid="a0641238")
                    textarea.form-control(style={'display': 'block', 'width': '100%', 'height': '50vh', 'marginBottom': '10px'}, type="text", required=true, defaultValue=this.getDataFromNotation("Blog.body"))
                  .internal-fsb-element.col-2.offset-0(style={'paddingLeft': '0px'}, internal-fsb-guid="a8690a58")
                    | โดยย่อ
                  .internal-fsb-element.col-10.offset-0(style={padding: '0px'}, internal-fsb-guid="1d258b94")
                    textarea.form-control(style={'display': 'block', 'width': '100%', 'marginBottom': '10px'}, maxlength="165", type="text", rows="2", required=true, defaultValue=this.getDataFromNotation("Blog.description"))
                  .internal-fsb-element.col-2.offset-0(style={'paddingLeft': '0px'}, internal-fsb-guid="556126e6")
                    | คีย์เวิร์ด
                  .internal-fsb-element.col-10.offset-0(style={padding: '0px'}, internal-fsb-guid="9ba2b637")
                    input.form-control(style={'display': 'block', 'width': '100%', 'marginBottom': '10px'}, type="text", placeholder="", required=true, defaultValue=this.getDataFromNotation("Blog.keywords"))
                  .internal-fsb-element.col-2.offset-0(style={'paddingLeft': '0px'}, internal-fsb-guid="76b0ad64")
                    | ที่อยู่ของรูปภาพ
                  .internal-fsb-element.col-10.offset-0(style={padding: '0px'}, internal-fsb-guid="3dcb582a")
                    input.form-control(style={'display': 'block', 'width': '100%', 'marginBottom': '10px'}, type="text", defaultValue=this.getDataFromNotation("Blog.image"))
                  Button.internal-fsb-element.internal-fsb-allow-cursor.btn.btn-primary.col-4.offset-5(style={'marginTop': '10px', display: (()=>{return (this.state.inserted) ? 'none' : 'block';})()}, onClick=((event) => { window.internalFsbSubmit('c3c4e405', 'Blog', event, ((results) => { this.manipulate('c3c4e405', 'Blog', results); }).bind(this)); }).bind(this), type="button", internal-fsb-guid="c3c4e405")
                    .internal-fsb-element(internal-fsb-guid="c3c4e405-text")
                      | สร้าง
                  Button.internal-fsb-element.internal-fsb-allow-cursor.btn.btn-primary.col-4.offset-5(style={'marginTop': '10px', display: (()=>{return (this.state.inserted) ? 'block' : 'none';})()}, onClick=((event) => { window.internalFsbSubmit('2258be6b', 'Blog', event, ((results) => { this.manipulate('2258be6b', 'Blog', results); }).bind(this)); }).bind(this), type="button", internal-fsb-guid="2258be6b")
                    .internal-fsb-element(internal-fsb-guid="2258be6b-text")
                      | อัพเดต
                  input.internal-fsb-element.col-12(ref="bid", type="hidden", value=this.getDataFromNotation("Blog.bid"), internal-fsb-guid="50cb1c1b")
            .internal-fsb-element.offset--1.col-3.offset-0(style={'minHeight': '617px'}, internal-fsb-guid="0a8bed8a")
              | Code พิเศษ
              div
                | # Title
              div
                | ## Heading
              div
                | ### Subheading
              div
                | 1. Ordered List
              div
                | - Unordered List
              div
                |     1. Nested List
              div
                |         - Nested List
              div
                | ** Bold **
              div
                | * Italic *
              div
                | _ Italic _
              div
                | ~~ Strikethrough ~~
              div
                | *** Bold + Italic ***
              div
                | > Quote
              div
                | [Link Title](https://)
              div
                | [Image Title](https://)
              div
                | ParagraphA 
              div
                br
              div
                span(style={'fontFamily': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"', 'fontSize': '1rem'})
                  | ParagraphB LineA
                br
              div
                span(style={'fontFamily': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"', 'fontSize': '1rem'})
                  | ParagraphB LineB
    `
  }
}
DeclarationHelper.declare('Document', 'Controls.FlowLayout_d58ae925', FlowLayout_d58ae925);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.