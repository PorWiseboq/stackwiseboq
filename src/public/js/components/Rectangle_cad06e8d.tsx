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
enum QuoteType {
  AUCTIONING,
  OFFERING,
  CHATTING,
  PAID
}

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
  quoteType: QuoteType;
  selectedIndex: number;
}

let DefaultProps = Object.assign({}, DefaultBaseProps, {
  
});
let DefaultState = Object.assign({}, DefaultBaseState, {
  quoteType: QuoteType.AUCTIONING,
  selectedIndex: 0
});

// Auto[ClassBegin]--->
class Rectangle_cad06e8d extends Base {
  state: IState = null;
  protected static defaultProps: IProps = DefaultProps;
  
  constructor(props) {
    super(props);
    this.state = CodeHelper.clone(DefaultState);
    
    this.initialize();
  }
  
  register() {
    DataManipulationHelper.register("4a579143", "retrieve", ["1ae8405a"], {initClass: null});
    DataManipulationHelper.register("c05b11c1", "retrieve", ["4cade2e7"], {initClass: null});
    DataManipulationHelper.register("833e4eb9", "retrieve", ["d24ed774"], {initClass: null});
    DataManipulationHelper.register("e9c9b721", "retrieve", ["d1920261"], {initClass: null});
    DataManipulationHelper.register("e76846ad", "retrieve", ["31c75169"], {initClass: null});
    DataManipulationHelper.register("802159d0", "retrieve", ["72aecc3a"], {initClass: null});
    DataManipulationHelper.register("8cbc5b17", "retrieve", ["e8656190"], {initClass: null});
    DataManipulationHelper.register("323ba37c", "retrieve", ["95270ad9"], {initClass: null});
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
    notation = notation.replace('#{i}', this.state.selectedIndex);
    
    return super.getDataFromNotation(notation, inArray);
  }
  
  private getDisplayOf(quoteType: QuoteType, active: boolean) {
    if (active) return (this.state.quoteType === quoteType) ? 'block' : 'none';
    else return (this.state.quoteType === quoteType) ? 'none' : 'block';
  }
  
  // Auto[Merging]--->
  protected onButtonSuccess_4a579143(event: Event) {

    // Handle the event of onButtonSuccess (Button 1) here:
    // 
    this.setState({quoteType: QuoteType.AUCTIONING});
    
  }

  protected onButtonSuccess_c05b11c1(event: Event) {

    // Handle the event of onButtonSuccess (Button 2) here:
    // 
    this.setState({quoteType: QuoteType.OFFERING});
    
  }

  protected onButtonSuccess_833e4eb9(event: Event) {

    // Handle the event of onButtonSuccess (Button 3) here:
    // 
    this.setState({quoteType: QuoteType.CHATTING});
    
  }

  protected onButtonSuccess_e9c9b721(event: Event) {

    // Handle the event of onButtonSuccess (Button 4) here:
    // 
    this.setState({quoteType: QuoteType.PAID});
    
  }

  protected onButtonSuccess_e76846ad(event: Event) {

    // Handle the event of onButtonSuccess (Button 5) here:
    // 
    let element = EventHelper.getOriginalElement(event);
    this.setState({
      selectedIndex: parseInt(element.getAttribute('data-index'))
    });
    
  }

  protected onButtonSuccess_802159d0(event: Event) {

    // Handle the event of onButtonSuccess (Button 6) here:
    // 
    let element = EventHelper.getOriginalElement(event);
    this.setState({
      selectedIndex: parseInt(element.getAttribute('data-index'))
    });
    
  }

  protected onButtonSuccess_8cbc5b17(event: Event) {

    // Handle the event of onButtonSuccess (Button 7) here:
    // 
    let element = EventHelper.getOriginalElement(event);
    this.setState({
      selectedIndex: parseInt(element.getAttribute('data-index'))
    });
    
  }

  protected onButtonSuccess_323ba37c(event: Event) {

    // Handle the event of onButtonSuccess (Button 8) here:
    // 
    let element = EventHelper.getOriginalElement(event);
    this.setState({
      selectedIndex: parseInt(element.getAttribute('data-index'))
    });
    
  }
  // <---Auto[Merging]
  
  // Auto[ClassEnd]--->
  protected render(): any {
    return pug `
      div(style=Object.assign({'flexDirection': 'column', 'WebkitFlexDirection': 'column', 'MsFlexDirection': 'column', 'height': '100vh', 'display': 'flex', 'background': 'linear-gradient(15deg, rgba(153, 24, 245, 1) 0%, rgba(22, 98, 250, 1) 100%)', 'FsbBackgroundType': 'linear', 'paddingLeft': '0px', 'paddingRight': '0px', 'paddingTop': '0px', 'paddingBottom': '0px'}, this.props.forward && this.props.forward.styles || {}) className="internal-fsb-element internal-fsb-allow-cursor col-12 " + (this.props.forward && this.props.forward.classes || '') internal-fsb-guid="cad06e8d")
        .internal-fsb-element(style={'background': 'rgba(255, 255, 255, 0)', 'color': 'rgba(255, 255, 255, 1)'} internal-fsb-guid="6a56a9be")
          .container-fluid
            .row.internal-fsb-strict-layout.internal-fsb-allow-cursor(style={'display': 'block'})
              .internal-fsb-element.offset-0(style={'fontSize': '24px', 'marginTop': '10px', 'marginLeft': '10px', 'marginBottom': '10px', 'float': 'left'} internal-fsb-guid="c6200677")
                | WiseBOQ
              Button.internal-fsb-element.internal-fsb-allow-cursor.btn.btn-primary(style={'paddingLeft': '15px', 'paddingRight': '15px', 'float': 'right', 'fontSize': '14px', 'marginTop': '10px', 'marginRight': '10px'} type="button" internal-fsb-guid="108bb2b9")
                .internal-fsb-element(internal-fsb-guid="108bb2b9-text")
                  | ออกจากระบบ
        .internal-fsb-element.internal-fsb-allow-cursor(style={'background': 'rgba(255, 255, 255, 0)', 'flexGrow': '1', 'WebkitFlexGrow': '1', 'width': '100%'} internal-fsb-guid="a30c3884")
          .internal-fsb-element.internal-fsb-allow-cursor(style={'display': 'table', 'height': '100%', 'width': '100%'} internal-fsb-guid="9b826999")
            .internal-fsb-element.internal-fsb-allow-cursor(style={'display': 'table-row', 'height': '100%'} internal-fsb-guid="e2254eb7")
              .internal-fsb-element.internal-fsb-allow-cursor(style={'borderRightColor': 'rgba(255, 255, 255, 1)', 'background': 'rgba(255, 255, 255, 0)', 'color': 'rgba(255, 255, 255, 1.0)', 'overflowY': 'auto', 'MsOverflowY': 'auto', 'display': 'table-cell', 'verticalAlign': 'top', 'width': '1px'} internal-fsb-guid="712e9de1")
                .internal-fsb-element(style={'fontSize': '11px', 'flexShrink': '1', 'WebkitFlexShrink': '1', 'cursor': 'default'} internal-fsb-guid="74e4253b")
                  .container-fluid
                    .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                      .internal-fsb-element.col-12(style={'marginBottom': '10px', 'marginTop': '10px', 'paddingLeft': '5px', 'paddingRight': '5px'} internal-fsb-guid="ca80140b")
                        .container-fluid
                          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                            Button.internal-fsb-element.internal-fsb-allow-cursor(style={'background': 'rgba(255, 255, 255, 0)', 'borderTopStyle': 'none', 'borderLeftStyle': 'none', 'borderRightStyle': 'none', 'borderBottomStyle': 'none', 'paddingTop': '5px', 'paddingLeft': '5px', 'paddingRight': '5px', 'paddingBottom': '5px', display: (()=>{return this.getDisplayOf(QuoteType.AUCTIONING, false);})()} type="button" onSuccess=this.onButtonSuccess_4a579143.bind(this) onClick=((event) => { window.internalFsbSubmit('4a579143', 'Quote', event, ((results) => { this.manipulate('4a579143', 'Quote', results); }).bind(this)); }).bind(this) internal-fsb-guid="4a579143")
                              .internal-fsb-element(style={padding: '0px'} internal-fsb-guid="04b90b11")
                                img(style={'display': 'block', 'opacity': '0.5', 'WebkitOpacity': '0.5', 'width': '40px', 'height': '40px', 'cursor': 'pointer'} src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/bid-inactive.png")
                            input.internal-fsb-element(type="hidden" value="0" internal-fsb-guid="1ae8405a")
                            .internal-fsb-element.col-12(style={'textAlign': 'center', 'paddingLeft': '0px', 'paddingRight': '0px', 'color': 'rgba(255, 255, 255, 0.45)', display: (()=>{return this.getDisplayOf(QuoteType.AUCTIONING, false);})()} internal-fsb-guid="9a91246d")
                              | เคาะประมูล
                            .internal-fsb-element.col-12(style={display: (()=>{return this.getDisplayOf(QuoteType.AUCTIONING, true);})(), padding: '0px'} internal-fsb-guid="42b3dc9b")
                              img(style={'display': 'block', 'width': '40px', 'height': '40px', 'marginTop': '5px', 'borderRightWidth': '5px', 'marginLeft': '5px', 'marginBottom': '5px'} src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/bid-active.png")
                            .internal-fsb-element.col-12(style={'textAlign': 'center', 'paddingLeft': '0px', 'paddingRight': '0px', display: (()=>{return this.getDisplayOf(QuoteType.AUCTIONING, true);})()} internal-fsb-guid="51315831")
                              | เคาะประมูล
                      .internal-fsb-element.col-12(style={'marginBottom': '10px', 'paddingLeft': '5px', 'paddingRight': '5px'} internal-fsb-guid="7b54582d")
                        .container-fluid
                          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                            Button.internal-fsb-element.internal-fsb-allow-cursor(style={'background': 'rgba(255, 255, 255, 0)', 'borderTopStyle': 'none', 'borderLeftStyle': 'none', 'borderRightStyle': 'none', 'borderBottomStyle': 'none', 'paddingTop': '5px', 'paddingLeft': '5px', 'paddingRight': '5px', 'paddingBottom': '5px', display: (()=>{return this.getDisplayOf(QuoteType.OFFERING, false);})()} type="button" onSuccess=this.onButtonSuccess_c05b11c1.bind(this) onClick=((event) => { window.internalFsbSubmit('c05b11c1', 'Quote', event, ((results) => { this.manipulate('c05b11c1', 'Quote', results); }).bind(this)); }).bind(this) internal-fsb-guid="c05b11c1")
                              .internal-fsb-element(style={padding: '0px'} internal-fsb-guid="b6ec8d55")
                                img(style={'display': 'block', 'width': '40px', 'opacity': '0.5', 'WebkitOpacity': '0.5', 'height': '40px', 'cursor': 'pointer'} src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/bidded-inactive.png")
                            input.internal-fsb-element(type="hidden" value="1" internal-fsb-guid="4cade2e7")
                            .internal-fsb-element.col-12(style={'textAlign': 'center', 'paddingLeft': '0px', 'paddingRight': '0px', 'color': 'rgba(255, 255, 255, 0.45)', display: (()=>{return this.getDisplayOf(QuoteType.OFFERING, false);})()} internal-fsb-guid="ac1a1bce")
                              | ประมูลผ่าน
                            .internal-fsb-element.col-12(style={display: (()=>{return this.getDisplayOf(QuoteType.OFFERING, true);})(), padding: '0px'} internal-fsb-guid="40ada351")
                              img(style={'display': 'block', 'width': '40px', 'height': '40px', 'marginTop': '5px', 'marginLeft': '5px', 'marginRight': '5px', 'marginBottom': '5px'} src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/bidded-active.png")
                            .internal-fsb-element.col-12(style={'textAlign': 'center', 'paddingLeft': '0px', 'paddingRight': '0px', display: (()=>{return this.getDisplayOf(QuoteType.OFFERING, true);})()} internal-fsb-guid="936e036b")
                              | ประมูลผ่าน
                      .internal-fsb-element.col-12(style={'marginBottom': '10px', 'paddingLeft': '5px', 'paddingRight': '5px'} internal-fsb-guid="12a672c3")
                        .container-fluid
                          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                            Button.internal-fsb-element.internal-fsb-allow-cursor(style={'background': 'rgba(255, 255, 255, 0)', 'borderTopStyle': 'none', 'borderLeftStyle': 'none', 'borderRightStyle': 'none', 'borderBottomStyle': 'none', 'paddingTop': '5px', 'paddingLeft': '5px', 'paddingRight': '5px', 'paddingBottom': '5px', display: (()=>{return this.getDisplayOf(QuoteType.CHATTING, false);})()} type="button" onSuccess=this.onButtonSuccess_833e4eb9.bind(this) onClick=((event) => { window.internalFsbSubmit('833e4eb9', 'Quote', event, ((results) => { this.manipulate('833e4eb9', 'Quote', results); }).bind(this)); }).bind(this) internal-fsb-guid="833e4eb9")
                              .internal-fsb-element(style={padding: '0px'} internal-fsb-guid="4bac7ab7")
                                img(style={'display': 'block', 'width': '40px', 'opacity': '0.5', 'WebkitOpacity': '0.5', 'height': '40px', 'cursor': 'pointer'} src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/chat-inactive.png")
                            input.internal-fsb-element(type="hidden" value="2" internal-fsb-guid="d24ed774")
                            .internal-fsb-element.col-12(style={'textAlign': 'center', 'paddingLeft': '0px', 'paddingRight': '0px', 'color': 'rgba(255, 255, 255, 0.45)', display: (()=>{return this.getDisplayOf(QuoteType.CHATTING, false);})()} internal-fsb-guid="8a12a919")
                              | คุยกับลูกค้า
                            .internal-fsb-element.col-12(style={display: (()=>{return this.getDisplayOf(QuoteType.CHATTING, true);})(), padding: '0px'} internal-fsb-guid="7eb8a313")
                              img(style={'display': 'block', 'width': '40px', 'height': '40px', 'marginTop': '5px', 'marginRight': '5px', 'marginBottom': '5px', 'marginLeft': '5px'} src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/chat-active.png")
                            .internal-fsb-element.col-12(style={'textAlign': 'center', 'paddingLeft': '0px', 'paddingRight': '0px', display: (()=>{return this.getDisplayOf(QuoteType.CHATTING, true);})()} internal-fsb-guid="579741b7")
                              | คุยกับลูกค้า
                      .internal-fsb-element.col-12(style={'paddingLeft': '5px', 'paddingRight': '5px'} internal-fsb-guid="9a5131da")
                        .container-fluid
                          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                            Button.internal-fsb-element.internal-fsb-allow-cursor(style={'background': 'rgba(255, 255, 255, 0)', 'borderTopStyle': 'none', 'borderLeftStyle': 'none', 'borderRightStyle': 'none', 'borderBottomStyle': 'none', 'paddingTop': '5px', 'paddingLeft': '5px', 'paddingRight': '5px', 'paddingBottom': '5px', display: (()=>{return this.getDisplayOf(QuoteType.PAID, false);})()} type="button" onSuccess=this.onButtonSuccess_e9c9b721.bind(this) onClick=((event) => { window.internalFsbSubmit('e9c9b721', 'Quote', event, ((results) => { this.manipulate('e9c9b721', 'Quote', results); }).bind(this)); }).bind(this) internal-fsb-guid="e9c9b721")
                              .internal-fsb-element(style={padding: '0px'} internal-fsb-guid="6b7e8340")
                                img(style={'display': 'block', 'width': '40px', 'height': '40px', 'opacity': '0.5', 'WebkitOpacity': '0.5', 'cursor': 'pointer'} src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/sold-inactive.png")
                            input.internal-fsb-element(type="hidden" value="3" internal-fsb-guid="d1920261")
                            .internal-fsb-element.col-12(style={'textAlign': 'center', 'color': 'rgba(255, 255, 255, 0.45)', 'paddingLeft': '0px', 'paddingRight': '0px', display: (()=>{return this.getDisplayOf(QuoteType.PAID, false);})()} internal-fsb-guid="83e40405")
                              | จ่ายเงินแล้ว
                            .internal-fsb-element.col-12.offset-0(style={display: (()=>{return this.getDisplayOf(QuoteType.PAID, true);})(), padding: '0px'} internal-fsb-guid="86510a55")
                              img(style={'display': 'block', 'width': '40px', 'height': '40px', 'marginTop': '5px', 'marginRight': '5px', 'marginBottom': '5px', 'marginLeft': '5px'} src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/sold-active.png")
                            .internal-fsb-element.col-12(style={'textAlign': 'center', 'paddingLeft': '0px', 'paddingRight': '0px', display: (()=>{return this.getDisplayOf(QuoteType.PAID, true);})()} internal-fsb-guid="b4775a3d")
                              | จ่ายเงินแล้ว
              .internal-fsb-element.internal-fsb-allow-cursor(style={'borderRightColor': 'rgba(22, 98, 250, 1)', 'background': 'rgba(255, 255, 255, 1)', 'display': 'table-cell'} internal-fsb-guid="3e557242")
                .internal-fsb-element(style={'width': '100%', 'height': '100%', 'display': 'flex', 'top': '0px', 'left': '0px', 'flexDirection': 'column', 'WebkitFlexDirection': 'column', 'MsFlexDirection': 'column', 'borderBottomColor': 'rgba(22, 98, 250, 1)'} internal-fsb-guid="b3410868")
                  .internal-fsb-element(style={'borderBottomStyle': 'solid', 'borderBottomColor': 'rgba(22, 98, 250, 1)', 'borderBottomWidth': '2px', 'paddingTop': '10px', 'paddingBottom': '10px'} internal-fsb-guid="4069ed4d")
                    .container-fluid
                      .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                        .internal-fsb-element.col-12(style={display: (()=>{return this.getDisplayOf(QuoteType.AUCTIONING, true);})()} internal-fsb-guid="88db4eda")
                          .container-fluid
                            .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                              .internal-fsb-element.col-1.offset-0(style={padding: '0px'} internal-fsb-guid="34a98650")
                                img(style={'display': 'block', 'width': '100%'} src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/bid-active.png")
                              .internal-fsb-element.col-11.offset-0(internal-fsb-guid="5775d3be")
                                .container-fluid
                                  .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                    .internal-fsb-element.col-12.-fsb-preset-7a279686(style={'textAlign': 'left', 'FsbInheritedPresets': '7a279686'} internal-fsb-guid="2434192c")
                                      | เคาะประมูล
                                    .internal-fsb-element.col-12.-fsb-preset-4839e353(style={'FsbInheritedPresets': '4839e353', 'textAlign': 'left'} internal-fsb-guid="49d55ce2")
                                      | หน้านี้จะแสดงงานประมูลวัสดุก่อสร้างทั้งหมดที่คุณสามารถเคาะราคาได้
                        .internal-fsb-element.col-12(style={display: (()=>{return this.getDisplayOf(QuoteType.OFFERING, true);})()} internal-fsb-guid="0d656c9d")
                          .container-fluid
                            .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                              .internal-fsb-element.col-1.offset-0(style={padding: '0px'} internal-fsb-guid="44d05cb6")
                                img(style={'display': 'block', 'width': '100%'} src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/bidded-active.png")
                              .internal-fsb-element.col-11.offset-0(internal-fsb-guid="945cdc26")
                                .container-fluid
                                  .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                    .internal-fsb-element.col-12.-fsb-preset-7a279686(style={'textAlign': 'left', 'FsbInheritedPresets': '7a279686'} internal-fsb-guid="cad0c464")
                                      | ประมูลผ่าน
                                    .internal-fsb-element.col-12.-fsb-preset-4839e353(style={'FsbInheritedPresets': '4839e353', 'textAlign': 'left'} internal-fsb-guid="4bb72418")
                                      | งานประมูลราคาวัสดุก่อสร้างซึ่งผ่านงานประมูลที่รอลูกค้าเลือกซื้อ กรุณาระบุราคาของแต่ละรายการภายใน 24 ชั่วโมง
                        .internal-fsb-element.col-12(style={display: (()=>{return this.getDisplayOf(QuoteType.CHATTING, true);})()} internal-fsb-guid="ba43b015")
                          .container-fluid
                            .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                              .internal-fsb-element.offset--1.col-1.offset-0(style={padding: '0px'} internal-fsb-guid="694bb341")
                                img(style={'display': 'block', 'width': '100%'} src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/chat-active.png")
                              .internal-fsb-element.col-11.offset-0(internal-fsb-guid="6daabaa5")
                                .container-fluid
                                  .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                    .internal-fsb-element.col-12.-fsb-preset-7a279686(style={'textAlign': 'left', 'FsbInheritedPresets': '7a279686'} internal-fsb-guid="53985b74")
                                      | คุยกับลูกค้า
                                    .internal-fsb-element.col-12.-fsb-preset-4839e353(style={'FsbInheritedPresets': '4839e353', 'textAlign': 'left'} internal-fsb-guid="9a4086b9")
                                      | ระบบปฏิสัมพันธ์กับลูกค้าผ่านการพูดคุยกันผ่านข้อความเพื่อตอบคำถามก่อนที่ลูกค้าจะตัดสินใจซื้อ
                        .internal-fsb-element.col-12(style={display: (()=>{return this.getDisplayOf(QuoteType.PAID, true);})()} internal-fsb-guid="2d35d6ec")
                          .container-fluid
                            .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                              .internal-fsb-element.col-1.offset-0(style={padding: '0px'} internal-fsb-guid="83bea00c")
                                img(style={'display': 'block', 'width': '100%'} src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/sold-active.png")
                              .internal-fsb-element.col-11.offset-0(internal-fsb-guid="3231834e")
                                .container-fluid
                                  .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                    .internal-fsb-element.-fsb-preset-7a279686.col-12.offset-0(style={'FsbInheritedPresets': '7a279686'} internal-fsb-guid="05491a78")
                                      | จ่ายเงินแล้ว
                                    .internal-fsb-element.-fsb-preset-4839e353.col-12.offset-0(style={'FsbInheritedPresets': '4839e353'} internal-fsb-guid="8d41bdab")
                                      | งานประมูลราคาวัสดุก่อสร้างที่ลูกค้าจ่ายเงินเรียบร้อยแล้วและรอทาง WiseBOQ โอนเงินไปให้ร้านค้าเพื่อทำการจัดส่งสินค้าต่อไป
                  .internal-fsb-element.internal-fsb-allow-cursor(style={'background': 'rgba(255, 255, 255, 1)', 'flexGrow': '1', 'WebkitFlexGrow': '1'} internal-fsb-guid="ddec7e5c")
                    .internal-fsb-element.internal-fsb-allow-cursor(style={'display': 'table', 'height': '100%', 'width': '100%'} internal-fsb-guid="71616aa2")
                      .internal-fsb-element.internal-fsb-allow-cursor(style={'display': 'table-row'} internal-fsb-guid="2dbce05c")
                        .internal-fsb-element.internal-fsb-allow-cursor(style={'display': 'table-cell', 'borderRightWidth': '2px', 'width': '200px', 'borderRightStyle': 'solid', 'borderRightColor': 'rgba(22, 98, 250, 1)', 'position': 'relative'} internal-fsb-guid="03a20d7c")
                          .internal-fsb-element.internal-fsb-allow-cursor(style={'borderRightColor': 'rgba(22, 98, 250, 1)', 'overflowX': 'hidden', 'MsOverflowX': 'hidden', 'overflowY': 'auto', 'MsOverflowY': 'auto', 'position': 'absolute', 'top': '0px', 'left': '0px', 'bottom': '0px', 'right': '0px', 'paddingTop': '5px', 'paddingLeft': '5px', 'paddingRight': '5px'} internal-fsb-guid="394c4745")
                            .internal-fsb-element(style={display: (()=>{return this.getDisplayOf(QuoteType.AUCTIONING, true);})()} internal-fsb-guid="c3d853d0")
                              .container-fluid
                                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                  each data, i in this.getDataFromNotation("Quote", true)
                                    Button.internal-fsb-element.internal-fsb-allow-cursor.-fsb-self-e76846ad(style={background: (()=>{return (this.state.selectedIndex == i) ? '#007BFF' : '';})(), color: (()=>{return (this.state.selectedIndex == i) ? '#FFFFFF' : '';})()} key="item_" + i type="button" data-index=i + '' onSuccess=this.onButtonSuccess_e76846ad.bind(this) onClick=((event) => { window.internalFsbSubmit('e76846ad', 'Listing', event, ((results) => { this.manipulate('e76846ad', 'Listing', results); }).bind(this)); }).bind(this) internal-fsb-guid="e76846ad")
                                      input.internal-fsb-element.col-12(type="hidden" value=this.getDataFromNotation("Quote[" + i + "].qid") internal-fsb-guid="31c75169")
                                      .internal-fsb-element.-fsb-self-5a671a7d(style={'background': 'rgba(214, 237, 255, 0)', 'borderTopColor': 'rgba(77, 195, 250, 1)', 'borderLeftColor': 'rgba(77, 195, 250, 1)', 'borderRightColor': 'rgba(77, 195, 250, 1)', 'borderBottomColor': 'rgba(77, 195, 250, 1)', 'FsbReusableName': '', 'FsbReusableId': '5a671a7d', 'FsbInheritedPresets': ''} internal-fsb-guid="5a671a7d")
                                        .container-fluid
                                          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                            .internal-fsb-element.col-12.-fsb-self-49a6327a(style={color: (()=>{return (this.state.selectedIndex == i) ? '#FFFFFF' : '';})()} dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].title"))} internal-fsb-guid="49a6327a")
                                            .internal-fsb-element.col-7.offset-0.-fsb-self-4aee31ab(style={color: (()=>{return (this.state.selectedIndex == i) ? '#FFFFFF' : '';})()} internal-fsb-guid="4aee31ab")
                                              | อันดับที่ 5 / 10
                                            .internal-fsb-element.col-5.offset-0.-fsb-self-3bec5885(internal-fsb-guid="3bec5885")
                                              | เสนอครบ
                            .internal-fsb-element.col-12(style={'paddingLeft': '0px', 'paddingRight': '0px', display: (()=>{return this.getDisplayOf(QuoteType.OFFERING, true);})()} internal-fsb-guid="24d70384")
                              .container-fluid
                                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                  each data, i in this.getDataFromNotation("Quote", true)
                                    Button.internal-fsb-element.internal-fsb-allow-cursor.-fsb-preset-e76846ad(style={'FsbInheritedPresets': 'e76846ad', background: (()=>{return (this.state.selectedIndex == i) ? '#007BFF' : '';})(), color: (()=>{return (this.state.selectedIndex == i) ? '#FFFFFF' : '';})()} key="item_" + i type="button" onSuccess=this.onButtonSuccess_802159d0.bind(this) onClick=((event) => { window.internalFsbSubmit('802159d0', 'Listing', event, ((results) => { this.manipulate('802159d0', 'Listing', results); }).bind(this)); }).bind(this) internal-fsb-guid="802159d0")
                                      input.internal-fsb-element.col-12(type="hidden" value=this.getDataFromNotation("Quote[" + i + "].qid") internal-fsb-guid="72aecc3a")
                                      .internal-fsb-element(style={'FsbInheritedPresets': '', 'background': 'rgba(214, 237, 255, 0)'} internal-fsb-guid="704100b7")
                                        .container-fluid
                                          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                            .internal-fsb-element.col-12.-fsb-preset-49a6327a(style={'FsbInheritedPresets': '49a6327a', color: (()=>{return (this.state.selectedIndex == i) ? '#FFFFFF' : '';})()} dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].title"))} internal-fsb-guid="53d42bea")
                                            .internal-fsb-element.-fsb-preset-4aee31ab.col-7(style={'FsbInheritedPresets': '4aee31ab', color: (()=>{return (this.state.selectedIndex == i) ? '#FFFFFF' : '';})()} internal-fsb-guid="3945ba95")
                                              | อันดับที่ 2 / 10
                                            .internal-fsb-element.-fsb-preset-3bec5885.col-5(style={'FsbInheritedPresets': '3bec5885'} internal-fsb-guid="c78396c8")
                                              | เสนอไม่ครบ
                            .internal-fsb-element.col-12(style={'paddingLeft': '0px', 'paddingRight': '0px', display: (()=>{return this.getDisplayOf(QuoteType.CHATTING, true);})()} internal-fsb-guid="0250cb01")
                              .container-fluid
                                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                  each data, i in this.getDataFromNotation("Quote", true)
                                    Button.internal-fsb-element.internal-fsb-allow-cursor.-fsb-preset-e76846ad(style={'FsbInheritedPresets': 'e76846ad', background: (()=>{return (this.state.selectedIndex == i) ? '#007BFF' : '';})(), color: (()=>{return (this.state.selectedIndex == i) ? '#FFFFFF' : '';})()} key="item_" + i type="button" onSuccess=this.onButtonSuccess_8cbc5b17.bind(this) onClick=((event) => { window.internalFsbSubmit('8cbc5b17', 'Listing', event, ((results) => { this.manipulate('8cbc5b17', 'Listing', results); }).bind(this)); }).bind(this) internal-fsb-guid="8cbc5b17")
                                      input.internal-fsb-element.col-12(type="hidden" value=this.getDataFromNotation("Quote[" + i + "].qid") internal-fsb-guid="e8656190")
                                      .internal-fsb-element(style={'background': (()=>{return (this.state.selectedIndex == i) ? '#007bf' : '';})() || 'rgba(214, 237, 255, 0)'} internal-fsb-guid="1e5c65cc")
                                        .container-fluid
                                          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                            .internal-fsb-element.col-12.-fsb-preset-49a6327a(style={'FsbInheritedPresets': '49a6327a', color: (()=>{return (this.state.selectedIndex == i) ? '#FFFFFF' : '';})()} dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].title"))} internal-fsb-guid="32663907")
                                            .internal-fsb-element.-fsb-preset-4aee31ab.col-7(style={'FsbInheritedPresets': '4aee31ab', color: (()=>{return (this.state.selectedIndex == i) ? '#FFFFFF' : '';})()} internal-fsb-guid="211827b2")
                                              | 150,000 บาท
                                            .internal-fsb-element.-fsb-preset-3bec5885.col-5(style={'FsbInheritedPresets': '3bec5885'} internal-fsb-guid="0e8e4701")
                                              | ข้อความใหม่
                            .internal-fsb-element.col-12(style={'paddingLeft': '0px', 'paddingRight': '0px', display: (()=>{return this.getDisplayOf(QuoteType.PAID, true);})()} internal-fsb-guid="a1595e85")
                              .container-fluid
                                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                  each data, i in this.getDataFromNotation("Quote", true)
                                    Button.internal-fsb-element.internal-fsb-allow-cursor.-fsb-preset-e76846ad(style={'FsbInheritedPresets': 'e76846ad', background: (()=>{return (this.state.selectedIndex == i) ? '#007BFF' : '';})(), color: (()=>{return (this.state.selectedIndex == i) ? '#FFFFFF' : '';})()} key="item_" + i type="button" onSuccess=this.onButtonSuccess_323ba37c.bind(this) onClick=((event) => { window.internalFsbSubmit('323ba37c', 'Listing', event, ((results) => { this.manipulate('323ba37c', 'Listing', results); }).bind(this)); }).bind(this) internal-fsb-guid="323ba37c")
                                      input.internal-fsb-element.col-12(type="hidden" value=this.getDataFromNotation("Quote[" + i + "].qid") internal-fsb-guid="95270ad9")
                                      .internal-fsb-element(style={'FsbInheritedPresets': '', 'background': (()=>{return (this.state.selectedIndex == i) ? '#007bf' : '';})() || 'rgba(214, 237, 255, 0)'} internal-fsb-guid="6bdca277")
                                        .container-fluid
                                          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                            .internal-fsb-element.col-12.-fsb-preset-49a6327a(style={'FsbInheritedPresets': '49a6327a', color: (()=>{return (this.state.selectedIndex == i) ? '#FFFFFF' : '';})()} dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].title"))} internal-fsb-guid="1c822d56")
                                            .internal-fsb-element.-fsb-preset-4aee31ab.col-7(style={'FsbInheritedPresets': '4aee31ab', color: (()=>{return (this.state.selectedIndex == i) ? '#FFFFFF' : '';})()} internal-fsb-guid="39506c79")
                                              | 55,000 บาท
                                            .internal-fsb-element.-fsb-preset-3bec5885.col-5(style={'FsbInheritedPresets': '3bec5885'} internal-fsb-guid="9ec45baa")
                                              | บัตรเครดิต
                        .internal-fsb-element.internal-fsb-allow-cursor(style={'display': 'table-cell', 'position': 'relative'} internal-fsb-guid="154b7137")
                          .internal-fsb-element.internal-fsb-allow-cursor(style={'overflowX': 'hidden', 'MsOverflowX': 'hidden', 'overflowY': 'auto', 'MsOverflowY': 'auto', 'position': 'absolute', 'left': '0px', 'top': '0px', 'right': '0px', 'bottom': '0px', 'paddingTop': '5px', 'paddingBottom': '5px'} internal-fsb-guid="ed65b978")
                            .internal-fsb-element(style={display: (()=>{return this.getDisplayOf(QuoteType.AUCTIONING, true);})()} internal-fsb-guid="ae9a328e")
                              .container-fluid
                                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                  .internal-fsb-element.col-12(internal-fsb-guid="64a6ac8c")
                                    .container-fluid
                                      .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                        .internal-fsb-element.col-12.-fsb-preset-7a279686(style={'FsbInheritedPresets': '7a279686', 'paddingLeft': '0px', 'paddingRight': '0px'} dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[#{i}].title"))} internal-fsb-guid="8c2aa238")
                                        .internal-fsb-element.col-12.-fsb-preset-4839e353(style={'FsbInheritedPresets': '4839e353', 'paddingLeft': '0px', 'paddingRight': '0px'} dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[#{i}].description"))} internal-fsb-guid="7484ac1e")
                                        .internal-fsb-element.col-12.-fsb-self-1715aae1(internal-fsb-guid="1715aae1")
                                          | ตอนนี้คุณอยู่อันดับที่ 5 จาก 10 อันดับที่ลูกค้าสามารถเห็นได้ในกลุ่มที่เสนอครบ
                                        each data, i in this.getDataFromNotation("Listing", true)
                                          .internal-fsb-element.col-12.-fsb-self-c6ba5b53(key="item_" + i internal-fsb-guid="c6ba5b53")
                                            .container-fluid
                                              .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                                .internal-fsb-element.col-4.offset-0.-fsb-self-65ec89d1(internal-fsb-guid="65ec89d1")
                                                  .container-fluid
                                                    .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                                      .internal-fsb-element.col-12(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Listing[" + i + "].title"))} internal-fsb-guid="a818c946")
                                                      .internal-fsb-element.col-12(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Listing[" + i + "].size"))} internal-fsb-guid="eccb7c51")
                                                      .internal-fsb-element.col-12(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Listing[" + i + "].quantity"))} internal-fsb-guid="0e3365eb")
                                                .internal-fsb-element.col-3.offset-0(internal-fsb-guid="e5e63918")
                                                  .container-fluid
                                                    .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                                      label.internal-fsb-element.col-12.offset-0(style={'paddingLeft': '0px', 'paddingRight': '0px', 'marginBottom': '3px'} internal-fsb-guid="b42d4545")
                                                        .container-fluid
                                                          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                                            .internal-fsb-element.-fsb-preset-b6c9ad89.col-2.offset-0(style={padding: '0px'} internal-fsb-guid="1832b944")
                                                              input(style={'display': 'block', 'paddingLeft': '0px', 'FsbInheritedPresets': 'b6c9ad89'} type="radio" value="0" name="group" + i)
                                                            .internal-fsb-element.-fsb-preset-b5cd72c0.col-10.offset-0(style={'FsbInheritedPresets': 'b5cd72c0'} internal-fsb-guid="b80041d3")
                                                              | เจาะจง
                                                      label.internal-fsb-element.col-12.offset-0(style={'paddingLeft': '0px', 'paddingRight': '0px', 'marginBottom': '3px'} internal-fsb-guid="eb192633")
                                                        .container-fluid
                                                          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                                            .internal-fsb-element.-fsb-preset-b6c9ad89.col-2.offset-0(style={padding: '0px'} internal-fsb-guid="b91e2739")
                                                              input(style={'display': 'block', 'paddingLeft': '0px', 'FsbInheritedPresets': 'b6c9ad89'} type="radio" value="1" name="group" + i)
                                                            .internal-fsb-element.-fsb-preset-b5cd72c0.col-10.offset-0(style={'FsbInheritedPresets': 'b5cd72c0'} internal-fsb-guid="58266972")
                                                              | เทียบเท่า
                                                      label.internal-fsb-element.col-12.offset-0(style={'paddingLeft': '0px', 'paddingRight': '0px', 'marginBottom': '3px'} internal-fsb-guid="2cb33325")
                                                        .container-fluid
                                                          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                                            .internal-fsb-element.-fsb-preset-b6c9ad89.col-2.offset-0(style={padding: '0px'} internal-fsb-guid="03aab0e5")
                                                              input(style={'display': 'block', 'paddingLeft': '0px', 'FsbInheritedPresets': 'b6c9ad89'} type="radio" value="2" name="group" + i)
                                                            .internal-fsb-element.-fsb-preset-b5cd72c0.col-10.offset-0(style={'FsbInheritedPresets': 'b5cd72c0'} internal-fsb-guid="5c2b0578")
                                                              | ทดแทน
                                                      label.internal-fsb-element.col-12.offset-0(style={'paddingLeft': '0px', 'paddingRight': '0px', 'marginBottom': '3px'} internal-fsb-guid="c1c5b10b")
                                                        .container-fluid
                                                          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                                            .internal-fsb-element.-fsb-preset-b6c9ad89.col-2.offset-0(style={padding: '0px'} internal-fsb-guid="957c1568")
                                                              input(style={'display': 'block', 'FsbInheritedPresets': 'b6c9ad89'} type="radio" value="3" name="group" + i)
                                                            .internal-fsb-element.-fsb-preset-b5cd72c0.col-10.offset-0(style={'FsbInheritedPresets': 'b5cd72c0'} internal-fsb-guid="a3b9410d")
                                                              | ไม่มี
                                                .internal-fsb-element.col-5.offset-0(internal-fsb-guid="483390a6")
                                                  .container-fluid
                                                    .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                                      .internal-fsb-element.col-12.offset-0(style={padding: '0px'} internal-fsb-guid="9c338431")
                                                        input.form-control.form-control-sm(style={'display': 'block', 'width': '100%', 'marginBottom': '5px', 'fontSize': '12px'} type="text" placeholder="เปลี่ยนวัสดุเป็น")
                                                      .internal-fsb-element.col-12.offset-0(style={padding: '0px'} internal-fsb-guid="d913e6a1")
                                                        input.form-control.form-control-sm(style={'display': 'block', 'width': '100%', 'marginBottom': '5px', 'fontSize': '12px'} type="text" placeholder="เปลี่ยนขนาดเป็น")
                                                      .internal-fsb-element.col-12.offset-0(style={padding: '0px'} internal-fsb-guid="c22ec668")
                                                        input.form-control.form-control-sm(style={'display': 'block', 'width': '100%', 'fontSize': '12px'} type="text" placeholder="เปลี่ยนปริมาณเป็น")
                                        .internal-fsb-element.col-12.-fsb-preset-1715aae1(style={'FsbInheritedPresets': '1715aae1'} internal-fsb-guid="da4a5daa")
                                          | เสนอราคาใหม่ที่ราคา
                                        .internal-fsb-element.col-6.offset-3(style={padding: '0px'} internal-fsb-guid="c03d6613")
                                          input.form-control.form-control-sm(style={'display': 'block', 'width': '100%'} type="text" placeholder="ราคารวมทั้งหมด")
                                        .internal-fsb-element.col-2.offset-0(internal-fsb-guid="2b06dab6")
                                          | บาท
                                        Button.internal-fsb-element.internal-fsb-allow-cursor.btn.btn-primary.btn-sm.col-4.offset-4(style={'marginTop': '10px', 'marginBottom': '10px'} type="button" internal-fsb-guid="9868a6d5")
                                          .internal-fsb-element(internal-fsb-guid="9868a6d5-text")
                                            | เคาะ
                            .internal-fsb-element(style={display: (()=>{return this.getDisplayOf(QuoteType.OFFERING, true);})()} internal-fsb-guid="51201e78")
                              .container-fluid
                                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                  .internal-fsb-element.col-12(internal-fsb-guid="7b15e8a1")
                                    .container-fluid
                                      .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                        .internal-fsb-element.col-12.-fsb-preset-7a279686(style={'FsbInheritedPresets': '7a279686', 'paddingLeft': '0px', 'paddingRight': '0px'} dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote.title"))} internal-fsb-guid="c7226b52")
                                        .internal-fsb-element.col-12.-fsb-preset-4839e353(style={'FsbInheritedPresets': '4839e353', 'paddingLeft': '0px', 'paddingRight': '0px'} dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote.description"))} internal-fsb-guid="39ca61d5")
                                        .internal-fsb-element.col-12.-fsb-preset-1715aae1(style={'FsbInheritedPresets': '1715aae1'} internal-fsb-guid="e1b315be")
                                          | คุณอยู่อันดับที่ 2 จาก 10 อันดับที่ลูกค้าสามารถเห็นได้ในกลุ่มที่เสนอไม่ครบ
                                        each data, i in this.getDataFromNotation("Listing", true)
                                          .internal-fsb-element.col-12.-fsb-preset-c6ba5b53(style={'FsbInheritedPresets': 'c6ba5b53', 'background': 'rgba(217, 217, 217, 1)', 'borderLeftColor': 'rgba(128, 128, 128, 1)', 'borderRightColor': 'rgba(128, 128, 128, 1)', 'borderTopColor': 'rgba(128, 128, 128, 1)', 'borderBottomColor': 'rgba(128, 128, 128, 1)'} key="item_" + i internal-fsb-guid="ce9a10c5")
                                            .container-fluid
                                              .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                                .internal-fsb-element.col-4.offset-0.-fsb-preset-65ec89d1(style={'FsbInheritedPresets': '65ec89d1'} internal-fsb-guid="19ce03e8")
                                                  .container-fluid
                                                    .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                                      .internal-fsb-element.col-12(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Listing[" + i + "].title"))} internal-fsb-guid="07673d1a")
                                                      .internal-fsb-element.col-12(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Listing[" + i + "].size"))} internal-fsb-guid="19d0b023")
                                                      .internal-fsb-element.col-12(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Listing[" + i + "].quantity"))} internal-fsb-guid="bd0d3bad")
                                                .internal-fsb-element.-fsb-preset-65ec89d1.col-3.offset-0(style={'FsbInheritedPresets': '65ec89d1'} internal-fsb-guid="9ecd9ed0")
                                                  .container-fluid
                                                    .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                                      .internal-fsb-element.col-12(style={'fontWeight': 'bold', 'marginBottom': '5px'} internal-fsb-guid="00758360")
                                                        | สินค้าเทียบเคียง: ทดแทน
                                                      .internal-fsb-element.col-7.offset-0(style={padding: '0px'} internal-fsb-guid="1382e4c9")
                                                        input.form-control.form-control-sm(style={'display': 'block', 'width': '100%', 'fontSize': '12px'} type="text" placeholder="ราคาต่อหน่วย")
                                                      .internal-fsb-element.col-5.offset-0(style={'paddingTop': '4px', 'textAlign': 'left', 'paddingLeft': '5px'} internal-fsb-guid="530bacd3")
                                                        | บาท
                                                .internal-fsb-element.col-5.offset-0.-fsb-preset-65ec89d1(style={'FsbInheritedPresets': '65ec89d1'} internal-fsb-guid="176a4c29")
                                                  .container-fluid
                                                    .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                                      .internal-fsb-element.col-12(style={'fontWeight': 'bold', 'marginBottom': '5px'} internal-fsb-guid="b840c1c0")
                                                        | เปลี่ยนวัสดุเป็น:
                                                      .internal-fsb-element.col-12(internal-fsb-guid="8656cea5")
                                                        | ชื่อวัสดุใหม่
                                                      .internal-fsb-element.col-12(internal-fsb-guid="ed22bc9a")
                                                        | ขนาดใหม่
                                                      .internal-fsb-element.col-12(internal-fsb-guid="a9a3406a")
                                                        | ปริมาณใหม่
                                  .internal-fsb-element.col-12.-fsb-preset-1715aae1(style={'FsbInheritedPresets': '1715aae1'} internal-fsb-guid="53e2a8cc")
                                    | กรุณาระบุราคาต่อหน่วยทั้งหมดเพื่อคำนวณส่วนลด
                                  .internal-fsb-element.col-6.offset-3(style={padding: '0px'} internal-fsb-guid="e68b9c07")
                                    input.form-control.form-control-sm(style={'display': 'block', 'width': '100%', 'marginBottom': '5px'} type="text" placeholder="ค่าขนส่ง (ถ้ามี)")
                                  .internal-fsb-element.col-2.offset-0(style={'marginBottom': '5px'} internal-fsb-guid="95c77e1a")
                                    | บาท
                                  .internal-fsb-element.col-6.offset-3(style={padding: '0px'} internal-fsb-guid="dde4302b")
                                    input.form-control.form-control-sm(style={'display': 'block', 'width': '100%'} type="text" placeholder="ส่วนลด" disabled=true)
                                  .internal-fsb-element.col-2.offset-0(internal-fsb-guid="3c910e36")
                                    | บาท
                                  .internal-fsb-element.-fsb-preset-1715aae1.col-12.offset-0(style={'FsbInheritedPresets': '1715aae1'} internal-fsb-guid="5428078e")
                                    | คุณเสนอราคาที่ 125,000 บาท
                                  Button.internal-fsb-element.internal-fsb-allow-cursor.col-4.offset-4.btn.btn-danger.btn-sm(style={'marginTop': '10px', 'marginBottom': '10px'} type="button" internal-fsb-guid="d3e31c36")
                                    .internal-fsb-element(internal-fsb-guid="d3e31c36-text")
                                      | ยกเลิก
                            .internal-fsb-element(style={display: (()=>{return this.getDisplayOf(QuoteType.CHATTING, true);})()} internal-fsb-guid="76cdd2cd")
                              .container-fluid
                                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                  .internal-fsb-element.col-12(internal-fsb-guid="7958b83c")
                                    | ABCD
                            .internal-fsb-element(style={display: (()=>{return this.getDisplayOf(QuoteType.PAID, true);})()} internal-fsb-guid="3318b254")
                              .container-fluid
                                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                  .internal-fsb-element.col-12(internal-fsb-guid="a34ccc8e")
                                    | ABCD
    `
  }
}
DeclarationHelper.declare('Document', 'Controls.Rectangle_cad06e8d', Rectangle_cad06e8d);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.