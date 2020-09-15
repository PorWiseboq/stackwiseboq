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
class FlowLayout_d2d6431e extends Base {
  state: IState = null;
  protected static defaultProps: IProps = DefaultProps;
  
  constructor(props) {
    super(props);
    this.state = CodeHelper.clone(DefaultState);
    
    this.initialize();
  }
  
  register() {
    DataManipulationHelper.register("d5ac1d26", "update", ["3a2356dd","6dc254be","aa6eb86d","52651cce","a1ee24b3","d39b258a","620ea154","ebe3854c","52da5356","26e1ae39","731935a5"], {initClass: null, submitCrossType: null, enabledRealTimeUpdate: false, retrieveInto: null});
    DataManipulationHelper.register("76310279", "navigate", ["132cd171","00745396"], {initClass: null, submitCrossType: null, enabledRealTimeUpdate: false, retrieveInto: null});
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
  protected onButtonSuccess_d5ac1d26(event: Event) {

    // Handle the event of onButtonSuccess (Button 1) here:
    // 
    alert('บันทึกแล้ว');
    
  }

  protected onButtonSubmitting_76310279(event: Event) {

    // Handle the event of onButtonSubmitting (Button 2) here:
    // 
    if (!confirm('คุณแน่ใจหรือยังว่าพร้อมที่จะปิดงานนี้')) {
      return EventHelper.cancel(event);
    }
    
  }

  protected onButtonSuccess_76310279(event: Event) {

    // Handle the event of onButtonSuccess (Button 2) here:
    // 
    alert('ปิดงานเสร็จแล้ว');
    
  }
  // <---Auto[Merging]
  
  // Auto[ClassEnd]--->
  protected render(): any {
    return pug `
      div(style=Object.assign({'marginTop': '30px', 'fontSize': '13px'}, this.props.forward && this.props.forward.styles || {}), className="internal-fsb-element col-12 offset-0 " + (this.props.forward && this.props.forward.classes || ''), internal-fsb-guid="d2d6431e")
        .container-fluid
          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
            each data, i in this.getDataFromNotation("Quote", true)
              .internal-fsb-element.col-12(style={'marginBottom': '30px', 'borderBottomStyle': 'none', 'borderBottomColor': 'rgba(184, 184, 184, 1)', 'paddingLeft': '0px', 'paddingRight': '0px'}, key="item_" + i, internal-fsb-guid="902975e1")
                .container-fluid
                  .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                    .internal-fsb-element.col-2.offset-0(style={'textAlign': 'right', 'fontWeight': 'bold'}, internal-fsb-guid="d54358d0")
                      | ชื่อโครงการ
                    .internal-fsb-element.col-10.offset-0(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].title"))}, internal-fsb-guid="e4dbc285")
                    .internal-fsb-element.col-2.offset-0(style={'textAlign': 'right', 'fontWeight': 'bold'}, internal-fsb-guid="33162851")
                      | รายละเอียด
                    .internal-fsb-element.col-10.offset-0(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].description"))}, internal-fsb-guid="b5278c27")
                    .internal-fsb-element.col-2.offset-0(style={'fontWeight': 'bold', 'textAlign': 'right'}, internal-fsb-guid="5292953d")
                      | สร้างขึ้นโดย
                    .internal-fsb-element.col-1.offset-0.-fsb-preset-77d2cecb(style={'FsbInheritedPresets': '77d2cecb'}, internal-fsb-guid="84ccd383")
                      | ชื่อ
                    .internal-fsb-element.col-1.offset-0.-fsb-preset-77d2cecb(style={'FsbInheritedPresets': '77d2cecb'}, internal-fsb-guid="b553218b")
                      | นามสกุล
                    .internal-fsb-element.col-2.offset-0.-fsb-preset-77d2cecb(style={'FsbInheritedPresets': '77d2cecb'}, internal-fsb-guid="515b2a5b")
                      | เบอร์โทรศัพท์ทั่วไป
                    .internal-fsb-element.col-2.offset-0.-fsb-preset-77d2cecb(style={'FsbInheritedPresets': '77d2cecb'}, internal-fsb-guid="9886a52b")
                      | เบอร์โทรศัพท์ผู้เสียภาษี
                    .internal-fsb-element.col-4.offset-0.-fsb-preset-77d2cecb(style={'FsbInheritedPresets': '77d2cecb'}, internal-fsb-guid="ee733c00")
                      | ที่อยู่อีเมล์
                    .internal-fsb-element.col-1.offset-2(style={'minHeight': '25px'}, dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].User.firstName"))}, internal-fsb-guid="cdbeabc5")
                    .internal-fsb-element.col-1.offset-0(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].User.lastName"))}, internal-fsb-guid="a9b815bd")
                    .internal-fsb-element.col-2.offset-0(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].User.contactNumber"))}, internal-fsb-guid="64380520")
                    .internal-fsb-element.col-2.offset-0(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].User.taxerContactNumber"))}, internal-fsb-guid="a41b6097")
                    .internal-fsb-element.col-4.offset-0(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].User.email"))}, internal-fsb-guid="05673426")
                    .internal-fsb-element.col-2.offset-2.-fsb-preset-77d2cecb(style={'FsbInheritedPresets': '77d2cecb'}, internal-fsb-guid="b2087418")
                      | ชื่อผู้เสียภาษี
                    .internal-fsb-element.col-2.offset-0.-fsb-preset-77d2cecb(style={'FsbInheritedPresets': '77d2cecb'}, internal-fsb-guid="1c0888a6")
                      | สาขา
                    .internal-fsb-element.col-6.offset-0.-fsb-preset-77d2cecb(style={'FsbInheritedPresets': '77d2cecb'}, internal-fsb-guid="c2a826ad")
                      | เลขผู้เสียภาษี
                    .internal-fsb-element.col-2.offset-2(style={'minHeight': '25px'}, dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].taxerName"))}, internal-fsb-guid="7640a783")
                    .internal-fsb-element.col-2.offset-0(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].taxerBranch"))}, internal-fsb-guid="98288346")
                    .internal-fsb-element.col-6.offset-0(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].taxerID"))}, internal-fsb-guid="a255e6e4")
                    .internal-fsb-element.col-1.offset-2.-fsb-preset-77d2cecb(style={'FsbInheritedPresets': '77d2cecb'}, internal-fsb-guid="3526c900")
                      | ที่อยู่ผู้เสียภาษี
                    .internal-fsb-element.col-1.offset-0.-fsb-preset-77d2cecb(style={'FsbInheritedPresets': '77d2cecb'}, internal-fsb-guid="3b889c1a")
                      | ซอย
                    .internal-fsb-element.col-1.offset-0.-fsb-preset-77d2cecb(style={'FsbInheritedPresets': '77d2cecb'}, internal-fsb-guid="2a5396d1")
                      | ถนน
                    .internal-fsb-element.col-1.offset-0.-fsb-preset-77d2cecb(style={'FsbInheritedPresets': '77d2cecb'}, internal-fsb-guid="a065117d")
                      | ตำบล / เขต
                    .internal-fsb-element.col-1.offset-0.-fsb-preset-77d2cecb(style={'FsbInheritedPresets': '77d2cecb'}, internal-fsb-guid="c389d20e")
                      | อำเภอ / แขวง
                    .internal-fsb-element.col-1.offset-0.-fsb-preset-77d2cecb(style={'FsbInheritedPresets': '77d2cecb'}, internal-fsb-guid="c436965d")
                      | จังหวัด
                    .internal-fsb-element.col-4.offset-0.-fsb-preset-77d2cecb(style={'FsbInheritedPresets': '77d2cecb'}, internal-fsb-guid="aaa997da")
                      | รหัสไปรษณีย์
                    .internal-fsb-element.col-1.offset-2(style={'minHeight': '25px'}, dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].address"))}, internal-fsb-guid="a62493e8")
                    .internal-fsb-element.col-1.offset-0(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].lane"))}, internal-fsb-guid="6c88c720")
                    .internal-fsb-element.col-1.offset-0(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].road"))}, internal-fsb-guid="04ea381a")
                    .internal-fsb-element.col-1.offset-0(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].subDistrict"))}, internal-fsb-guid="8c36ba75")
                    .internal-fsb-element.col-1.offset-0(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].district"))}, internal-fsb-guid="39b07d46")
                    .internal-fsb-element.col-1.offset-0(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].province"))}, internal-fsb-guid="9d7d19d1")
                    .internal-fsb-element.col-4.offset-0(internal-fsb-guid="2222c1c2")
                      | #{this.getDataFromNotation('Quote['+i+'].User.postalCode')}
                    .internal-fsb-element.col-2.offset-0(style={'textAlign': 'right', 'fontWeight': 'bold'}, internal-fsb-guid="e2d0a904")
                      | ที่อยู่สำหรับจัดส่ง
                    .internal-fsb-element.col-1.offset-0.-fsb-self-77d2cecb(internal-fsb-guid="77d2cecb")
                      | ไปรับเอง
                    .internal-fsb-element.col-1.offset-0.-fsb-preset-77d2cecb(style={'FsbInheritedPresets': '77d2cecb'}, internal-fsb-guid="a21c540b")
                      | มีกำหนด
                    .internal-fsb-element.col-1.offset-0.-fsb-preset-77d2cecb(style={'FsbInheritedPresets': '77d2cecb'}, internal-fsb-guid="721162e5")
                      | กำหนดภายในวันที่
                    .internal-fsb-element.col-3.offset-0.-fsb-preset-77d2cecb(style={'FsbInheritedPresets': '77d2cecb'}, internal-fsb-guid="1cd16e32")
                      | สถานที่ส่ง
                    .internal-fsb-element.col-4.offset-0.-fsb-preset-77d2cecb(style={'FsbInheritedPresets': '77d2cecb'}, internal-fsb-guid="57e4c3bb")
                      | ติดต่อยังเบอร์โทรศัพท์
                    .internal-fsb-element.col-1.offset-2(style={'minHeight': '25px'}, internal-fsb-guid="080a816a")
                      | #{this.getDataFromNotation('Quote['+i+'].pickup')}
                    .internal-fsb-element.col-1.offset-0(internal-fsb-guid="7e3b1b3c")
                      | #{this.getDataFromNotation('Quote['+i+'].deliverChecked')}
                    .internal-fsb-element.col-1.offset-0(style={textDecorationLine: (()=>{return (this.getDataFromNotation('Quote['+i+'].deliverChecked') == 1) ? 'line-through' : '';})()}, dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].deliverAt"))}, internal-fsb-guid="a5de7eec")
                    .internal-fsb-element.col-3.offset-0(style={textDecorationLine: (()=>{return (this.getDataFromNotation('Quote['+i+'].pickup') == 1) ? 'line-through' : '';})()}, dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].address"))}, internal-fsb-guid="c5c43b99")
                    .internal-fsb-element.col-2.offset-0(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].number"))}, internal-fsb-guid="1d483dd8")
                    .internal-fsb-element.col-2.offset-0(internal-fsb-guid="70946b51")
                      .container-fluid
                        .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                          .internal-fsb-element.col-12(style={'fontSize': '10px'}, internal-fsb-guid="d6a1466d")
                            div
                              | ไปรับเอง / มีกำหนด
                            div
                              | 0 = ไม่ใช่
                            div
                              | 1 = ใช่
                    .internal-fsb-element.col-9.offset-1.-fsb-self-93c1d2a1(internal-fsb-guid="93c1d2a1")
                      | รายการวัสดุ
                    .internal-fsb-element.col-9.offset-1.-fsb-self-692a7269(internal-fsb-guid="692a7269")
                      .container-fluid
                        .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                          .internal-fsb-element.-fsb-preset-8d0a83d8.col-1.offset-0(style={'FsbInheritedPresets': '8d0a83d8'}, internal-fsb-guid="09918342")
                            | #
                          .internal-fsb-element.col-1.offset-0.-fsb-preset-8d0a83d8(style={'textAlign': 'center', 'FsbInheritedPresets': '8d0a83d8', 'paddingLeft': '2px', 'paddingRight': '2px'}, internal-fsb-guid="4eb60b84")
                            | ประเภท
                          .internal-fsb-element.-fsb-preset-8d0a83d8.col-4.offset-0(style={'textAlign': 'center', 'FsbInheritedPresets': '8d0a83d8'}, internal-fsb-guid="85e83b64")
                            | ชื่อ
                          .internal-fsb-element.col-2.offset-0.-fsb-preset-8d0a83d8(style={'textAlign': 'center', 'FsbInheritedPresets': '8d0a83d8'}, internal-fsb-guid="83b5e323")
                            | ปริมาณ
                          .internal-fsb-element.col-2.offset-0.-fsb-preset-8d0a83d8(style={'textAlign': 'center', 'FsbInheritedPresets': '8d0a83d8'}, internal-fsb-guid="b3117217")
                            | หน่วย
                          .internal-fsb-element.col-2.offset-0.-fsb-preset-8d0a83d8(style={'textAlign': 'center', 'FsbInheritedPresets': '8d0a83d8'}, internal-fsb-guid="46b52271")
                            | หมายเหตุ
                    each data, j in this.getDataFromNotation("Quote[" + i + "].Listing", true)
                      .internal-fsb-element.col-9.offset-1.-fsb-self-e1eca1c8(key="item_" + j, internal-fsb-guid="e1eca1c8")
                        .container-fluid
                          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                            .internal-fsb-element.col-1.offset-0.-fsb-preset-8d0a83d8(style={'FsbInheritedPresets': '8d0a83d8'}, internal-fsb-guid="ad5606be")
                              | #{this.getDataFromNotation('Quote['+i+'].Listing['+j+'].lid')}
                            .internal-fsb-element.col-1.offset-0.-fsb-self-8d0a83d8(internal-fsb-guid="8d0a83d8")
                              | #{this.getDataFromNotation('Quote['+i+'].Listing['+j+'].substitute')}
                            .internal-fsb-element.col-4.offset-0(style={'borderLeftColor': 'rgba(69, 69, 69, 1)', 'borderLeftStyle': 'solid', 'borderBottomStyle': 'solid', 'borderBottomColor': 'rgba(69, 69, 69, 1)', 'borderLeftWidth': '1px', 'borderBottomWidth': '1px'}, dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].Listing[" + j + "].title"))}, internal-fsb-guid="be4558d8")
                            .internal-fsb-element.col-2.offset-0(style={'borderLeftColor': 'rgba(69, 69, 69, 1)', 'borderLeftStyle': 'solid', 'borderBottomStyle': 'solid', 'borderBottomColor': 'rgba(69, 69, 69, 1)', 'borderLeftWidth': '1px', 'borderBottomWidth': '1px', 'textAlign': 'center'}, internal-fsb-guid="93dc28b2")
                              | #{this.getDataFromNotation('Quote['+i+'].Listing['+j+'].quantity')}
                            .internal-fsb-element.col-2.offset-0(style={'borderTopColor': 'rgba(69, 69, 69, 1)', 'borderLeftStyle': 'solid', 'borderLeftColor': 'rgba(69, 69, 69, 1)', 'borderBottomStyle': 'solid', 'borderBottomColor': 'rgba(69, 69, 69, 1)', 'borderRightColor': 'rgba(69, 69, 69, 1)', 'borderLeftWidth': '1px', 'borderBottomWidth': '1px', 'borderRightWidth': '1px', 'textAlign': 'center'}, dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].Listing[" + j + "].unit"))}, internal-fsb-guid="cee6162b")
                            .internal-fsb-element.col-2.offset-0.-fsb-preset-8d0a83d8(style={'FsbInheritedPresets': '8d0a83d8'}, dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].Listing[" + j + "].note"))}, internal-fsb-guid="946e8d84")
                    .internal-fsb-element.col-2.offset-0(internal-fsb-guid="4c52e68e")
                      .container-fluid
                        .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                          .internal-fsb-element.col-12(style={'fontSize': '10px'}, internal-fsb-guid="726754d0")
                            | ประเภท
                            div
                              | 0 = เจาะจง 
                            div
                              | 1 = เทียบเท่า
                            div
                              | 2 = ทดแทน
                    each data, j in this.getDataFromNotation("Quote[" + i + "].Auction", true)
                      .internal-fsb-element.col-12(style={'paddingLeft': '0px', 'paddingRight': '0px'}, key="item_" + j, internal-fsb-guid="7d4eb9c6")
                        .container-fluid
                          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                            .internal-fsb-element.internal-fsb-allow-cursor.col-10.offset-1(style={'marginTop': '15px', 'borderTopStyle': 'dashed', 'borderTopColor': 'rgba(184, 184, 184, 1)', 'borderTopWidth': '1px'}, internal-fsb-guid="07258a9b")
                            .internal-fsb-element.col-10.offset-1(style={'marginBottom': '15px', 'textAlign': 'center', 'color': 'rgba(184, 184, 184, 1)', 'fontSize': '10px'}, internal-fsb-guid="73b4bee4")
                              | ประมูลโดย #{this.getDataFromNotation('Quote['+i+'].Auction['+j+'].Store.name')} สร้าง #{this.getDataFromNotation('Quote['+i+'].Auction['+j+'].createdAt')} แก้ไข #{this.getDataFromNotation('Quote['+i+'].Auction['+j+'].updatedAt')}
                            .internal-fsb-element.col-2.offset-0(style={'fontWeight': 'bold', 'textAlign': 'right'}, internal-fsb-guid="7a6344dc")
                              | ประมูลโดย
                            .internal-fsb-element.-fsb-preset-77d2cecb.col-2.offset-0(style={'FsbInheritedPresets': '77d2cecb'}, internal-fsb-guid="e4a06c31")
                              | ชื่อ
                            .internal-fsb-element.-fsb-preset-77d2cecb.col-2.offset-0(style={'FsbInheritedPresets': '77d2cecb'}, internal-fsb-guid="0d29e357")
                              | เบอร์โทรศัพท์ทั่วไป
                            .internal-fsb-element.-fsb-preset-77d2cecb.col-2.offset-0(style={'FsbInheritedPresets': '77d2cecb'}, internal-fsb-guid="88c46d73")
                              | เบอร์โทรศัพท์ผู้เสียภาษี
                            .internal-fsb-element.col-4.offset-0.-fsb-preset-77d2cecb(style={'FsbInheritedPresets': '77d2cecb'}, internal-fsb-guid="95d96294")
                              | ที่อยู่อีเมล์
                            .internal-fsb-element.col-2.offset-2(style={'minHeight': '25px'}, dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].Auction[" + j + "].Store.name"))}, internal-fsb-guid="e4b4b486")
                            .internal-fsb-element.col-2.offset-0(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].Auction[" + j + "].Store.User.contactNumber"))}, internal-fsb-guid="9e0a5431")
                            .internal-fsb-element.col-2.offset-0(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].Auction[" + j + "].Store.User.taxerContactNumber"))}, internal-fsb-guid="49e497ea")
                            .internal-fsb-element.col-4.offset-0(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].Auction[" + j + "].Store.User.email"))}, internal-fsb-guid="558c91e7")
                            .internal-fsb-element.col-1.offset-2.-fsb-preset-77d2cecb(style={'FsbInheritedPresets': '77d2cecb'}, internal-fsb-guid="8b359c14")
                              | ที่อยู่ร้านค้า
                            .internal-fsb-element.col-1.offset-0.-fsb-preset-77d2cecb(style={'FsbInheritedPresets': '77d2cecb'}, internal-fsb-guid="91574e12")
                              | ซอย
                            .internal-fsb-element.col-1.offset-0.-fsb-preset-77d2cecb(style={'FsbInheritedPresets': '77d2cecb'}, internal-fsb-guid="39477b35")
                              | ถนน
                            .internal-fsb-element.col-1.offset-0.-fsb-preset-77d2cecb(style={'FsbInheritedPresets': '77d2cecb'}, internal-fsb-guid="b045809a")
                              | ตำบล / เขต
                            .internal-fsb-element.col-1.offset-0.-fsb-preset-77d2cecb(style={'FsbInheritedPresets': '77d2cecb'}, internal-fsb-guid="9511c137")
                              | อำเภอ / แขวง
                            .internal-fsb-element.col-1.offset-0.-fsb-preset-77d2cecb(style={'FsbInheritedPresets': '77d2cecb'}, internal-fsb-guid="a699e016")
                              | จังหวัด
                            .internal-fsb-element.col-4.offset-0.-fsb-preset-77d2cecb(style={'FsbInheritedPresets': '77d2cecb'}, internal-fsb-guid="a051e7e8")
                              | รหัสไปรษณีย์
                            .internal-fsb-element.col-1.offset-2(style={'minHeight': '25px'}, dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].Auction[" + j + "].Store.User.address"))}, internal-fsb-guid="b30bd1aa")
                            .internal-fsb-element.col-1.offset-0(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].Auction[" + j + "].Store.User.lane"))}, internal-fsb-guid="7c38ac64")
                            .internal-fsb-element.col-1.offset-0(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].Auction[" + j + "].Store.User.road"))}, internal-fsb-guid="a6807a2a")
                            .internal-fsb-element.col-1.offset-0(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].Auction[" + j + "].Store.User.subDistrict"))}, internal-fsb-guid="50db79e3")
                            .internal-fsb-element.col-1.offset-0(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].Auction[" + j + "].Store.User.district"))}, internal-fsb-guid="670926a7")
                            .internal-fsb-element.col-1.offset-0(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].Auction[" + j + "].Store.User.province"))}, internal-fsb-guid="1539474d")
                            .internal-fsb-element.col-4.offset-0(internal-fsb-guid="9c51cc5e")
                              | #{this.getDataFromNotation('Quote['+i+'].Auction['+j+'].Store.User.postalCode')}
                            .internal-fsb-element.-fsb-preset-93c1d2a1.col-9.offset-1(style={'fontWeight': 'bold', 'paddingTop': '5px', 'paddingBottom': '5px', 'borderBottomWidth': '1px', 'borderBottomColor': 'rgba(69, 69, 69, 1)', 'borderBottomStyle': 'solid', 'FsbInheritedPresets': '93c1d2a1'}, internal-fsb-guid="eeecb473")
                              | รายการวัสดุ
                            .internal-fsb-element.col-9.offset-1.-fsb-preset-692a7269(style={'FsbInheritedPresets': '692a7269'}, internal-fsb-guid="49ed86cd")
                              .container-fluid
                                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                  .internal-fsb-element.col-1.-fsb-preset-8d0a83d8(style={'FsbInheritedPresets': '8d0a83d8'}, internal-fsb-guid="87d3ec19")
                                    | #
                                  .internal-fsb-element.col-1.offset-0.-fsb-preset-8d0a83d8(style={'textAlign': 'center', 'FsbInheritedPresets': '8d0a83d8', 'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-guid="9d73dab4")
                                    | ประเภท
                                  .internal-fsb-element.offset-0.-fsb-preset-8d0a83d8.col-4(style={'textAlign': 'center', 'FsbInheritedPresets': '8d0a83d8'}, internal-fsb-guid="bdecba32")
                                    | ชื่อ
                                  .internal-fsb-element.col-2.offset-0.-fsb-preset-8d0a83d8(style={'textAlign': 'center', 'FsbInheritedPresets': '8d0a83d8'}, internal-fsb-guid="d64d6830")
                                    | ปริมาณ
                                  .internal-fsb-element.col-2.offset-0.-fsb-preset-8d0a83d8(style={'textAlign': 'center', 'FsbInheritedPresets': '8d0a83d8'}, internal-fsb-guid="85bad855")
                                    | หน่วย
                                  .internal-fsb-element.col-2.offset-0.-fsb-preset-8d0a83d8(style={'textAlign': 'center', 'FsbInheritedPresets': '8d0a83d8'}, internal-fsb-guid="754383d6")
                                    | ราคาต่อหน่วย
                            each data, k in this.getDataFromNotation("Quote[" + i + "].Auction[" + j + "].Substitute", true)
                              .internal-fsb-element.col-9.offset-1.-fsb-preset-e1eca1c8(style={'paddingLeft': '0px', 'paddingRight': '0px', 'FsbInheritedPresets': 'e1eca1c8'}, key="item_" + k, internal-fsb-guid="5b477135")
                                .container-fluid
                                  .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                    .internal-fsb-element.col-1.-fsb-preset-8d0a83d8(style={'FsbInheritedPresets': '8d0a83d8'}, internal-fsb-guid="984463eb")
                                      | #{this.getDataFromNotation('Quote['+i+'].Auction['+j+'].Substitute['+k+'].lid')}
                                    .internal-fsb-element.col-1.offset-0.-fsb-preset-8d0a83d8(style={'FsbInheritedPresets': '8d0a83d8'}, internal-fsb-guid="0a7052b6")
                                      | #{this.getDataFromNotation('Quote['+i+'].Auction['+j+'].Substitute['+k+'].type')}
                                    .internal-fsb-element.offset-0.-fsb-preset-8d0a83d8.col-4(style={'FsbInheritedPresets': '8d0a83d8', textDecorationLine: (()=>{return ([0,3].indexOf(this.getDataFromNotation('Quote['+i+'].Auction['+j+'].Substitute['+k+'].type')) != -1) ? 'line-through' : '';})()}, dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].Auction[" + j + "].Substitute[" + k + "].title"))}, internal-fsb-guid="e5107496")
                                    .internal-fsb-element.col-2.offset-0.-fsb-preset-8d0a83d8(style={'FsbInheritedPresets': '8d0a83d8', textDecorationLine: (()=>{return ([0,3].indexOf(this.getDataFromNotation('Quote['+i+'].Auction['+j+'].Substitute['+k+'].type')) != -1) ? 'line-through' : '';})()}, internal-fsb-guid="49ac23b6")
                                      | #{this.getDataFromNotation('Quote['+i+'].Auction['+j+'].Substitute['+k+'].quantity')}
                                    .internal-fsb-element.col-2.offset-0.-fsb-preset-8d0a83d8(style={'FsbInheritedPresets': '8d0a83d8', textDecorationLine: (()=>{return ([0,3].indexOf(this.getDataFromNotation('Quote['+i+'].Auction['+j+'].Substitute['+k+'].type')) != -1) ? 'line-through' : '';})()}, dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].Auction[" + j + "].Substitute[" + k + "].unit"))}, internal-fsb-guid="514d7609")
                                    .internal-fsb-element.col-2.offset-0.-fsb-preset-8d0a83d8(style={'FsbInheritedPresets': '8d0a83d8', textDecorationLine: (()=>{return ([0,3].indexOf(this.getDataFromNotation('Quote['+i+'].Auction['+j+'].Substitute['+k+'].type')) != -1) ? 'line-through' : '';})()}, internal-fsb-guid="b7a81420")
                                      | #{this.getDataFromNotation('Quote['+i+'].Auction['+j+'].Substitute['+k+'].price')}
                            .internal-fsb-element.col-2.offset-0(internal-fsb-guid="b30cc596")
                              .container-fluid
                                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                  .internal-fsb-element.col-12(style={'fontSize': '10px'}, internal-fsb-guid="8c5aac12")
                                    | ประเภท
                                    div
                                      | 0 = เจาะจง 
                                    div
                                      | 1 = เทียบเท่า
                                    div
                                      | 2 = ทดแทน
                                    div
                                      | 3 = ไม่มี
                            .internal-fsb-element.col-2.offset-1(style={'fontWeight': 'bold', 'textAlign': 'right'}, internal-fsb-guid="7d08489d")
                              | ค่าขนส่ง
                            .internal-fsb-element.col-9.offset-0(internal-fsb-guid="9bc0864d")
                              | #{this.getDataFromNotation('Quote['+i+'].Auction['+j+'].deliverCost')}
                            .internal-fsb-element.col-2.offset-1(style={'textAlign': 'right', 'fontWeight': 'bold'}, internal-fsb-guid="d511a7cb")
                              | ส่วนลด
                            .internal-fsb-element.col-9.offset-0(internal-fsb-guid="3cd7da7a")
                              | #{this.getDataFromNotation('Quote['+i+'].Auction['+j+'].discount')}
                            .internal-fsb-element.col-2.offset-1(style={'fontWeight': 'bold', 'textAlign': 'right'}, internal-fsb-guid="c8d660a1")
                              | ราคารวมภาษี
                            .internal-fsb-element.col-9.offset-0(internal-fsb-guid="068e6701")
                              | #{this.getDataFromNotation('Quote['+i+'].Auction['+j+'].price')}
                            .internal-fsb-element.col-2.offset-1(style={'textAlign': 'right', 'fontWeight': 'bold'}, internal-fsb-guid="5b49c684")
                              | ลูกค้าโอนเงินจาก
                            .internal-fsb-element.col-2.offset-0.-fsb-preset-77d2cecb(style={'FsbInheritedPresets': '77d2cecb'}, internal-fsb-guid="7a9cd00c")
                              | ชื่อสาขา
                            .internal-fsb-element.col-2.offset-0.-fsb-preset-77d2cecb(style={'FsbInheritedPresets': '77d2cecb', 'paddingLeft': '10px'}, internal-fsb-guid="0ad34e38")
                              | ชื่อผู้โอน
                            .internal-fsb-element.col-5.offset-0.-fsb-preset-77d2cecb(style={'FsbInheritedPresets': '77d2cecb', 'paddingLeft': '5px'}, internal-fsb-guid="a01e34ca")
                              | เมื่อ [ddmmyyyy hhmm]
                            .internal-fsb-element.col-2.offset-3(style={'minHeight': '25px'}, dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].Auction[" + j + "].Payment.Transfer.origin"))}, internal-fsb-guid="de98b783")
                            .internal-fsb-element.col-2.offset-0(style={'paddingLeft': '10px'}, dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].Auction[" + j + "].Payment.Transfer.transferrer"))}, internal-fsb-guid="29e6a728")
                            .internal-fsb-element.col-5.offset-0(style={'paddingLeft': '5px'}, dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].Auction[" + j + "].Payment.Transfer.time"))}, internal-fsb-guid="3173e1e1")
                            .internal-fsb-element.col-2.offset-1(style={'fontWeight': 'bold', 'textAlign': 'right', 'FsbInheritedPresets': ''}, internal-fsb-guid="9eb887a2")
                              | โอนเงินให้ร้านค้า
                            .internal-fsb-element.col-4.offset-0(style={'paddingRight': '0px'}, internal-fsb-guid="d61c0e9d")
                              .container-fluid
                                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                  .internal-fsb-element.-fsb-preset-77d2cecb.col-6.offset-0(style={'FsbInheritedPresets': '77d2cecb', 'paddingLeft': '0px'}, internal-fsb-guid="5923638c")
                                    | ชื่อสาขา
                                  .internal-fsb-element.-fsb-preset-77d2cecb.col-6.offset-0(style={'FsbInheritedPresets': '77d2cecb', 'paddingLeft': '0px'}, internal-fsb-guid="a0d9a1c7")
                                    | ชื่อผู้โอน
                                  .internal-fsb-element.col-6.offset-0(style={padding: '0px'}, internal-fsb-guid="3a2356dd")
                                    input.form-control.form-control-sm(style={'display': 'block', 'width': '100%'}, type="text", defaultValue=this.getDataFromNotation("Quote[" + i + "].Auction[" + j + "].Payment.Transfer.forwardingOrigin"))
                                  .internal-fsb-element.col-6.offset-0(style={padding: '0px'}, internal-fsb-guid="6dc254be")
                                    input.form-control.form-control-sm(style={'display': 'block', 'width': '100%'}, type="text", defaultValue=this.getDataFromNotation("Quote[" + i + "].Auction[" + j + "].Payment.Transfer.forwardingTransferrer"))
                                  .internal-fsb-element.-fsb-preset-77d2cecb.col-6.offset-0(style={'FsbInheritedPresets': '77d2cecb', 'paddingLeft': '0px', 'marginTop': '14px'}, internal-fsb-guid="6b64b5a3")
                                    | เมื่อ [ddmmyyyy hhmm]
                                  .internal-fsb-element.-fsb-preset-77d2cecb.col-6.offset-0(style={'FsbInheritedPresets': '77d2cecb', 'paddingLeft': '0px', 'marginTop': '14px'}, internal-fsb-guid="06c90700")
                                    | จำนวน
                                  .internal-fsb-element.col-6.offset-0(style={padding: '0px'}, internal-fsb-guid="aa6eb86d")
                                    input.form-control.form-control-sm(style={'display': 'block', 'width': '100%'}, type="text", defaultValue=this.getDataFromNotation("Quote[" + i + "].Auction[" + j + "].Payment.Transfer.forwardingTime"))
                                  .internal-fsb-element.col-6.offset-0(style={padding: '0px'}, internal-fsb-guid="52651cce")
                                    input.form-control.form-control-sm(style={'display': 'block', 'width': '100%'}, type="text", defaultValue=this.getDataFromNotation("Quote[" + i + "].Auction[" + j + "].Payment.Transfer.forwardingAmount"))
                            .internal-fsb-element.col-3.offset-0(style={'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-guid="e7520986")
                              .container-fluid
                                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                  .internal-fsb-element.-fsb-preset-77d2cecb.col-12.offset-0(style={'FsbInheritedPresets': '77d2cecb', 'paddingLeft': '0px'}, internal-fsb-guid="3dad43b0")
                                    | หมายเหตุ
                                  .internal-fsb-element.col-12.offset-0(style={padding: '0px'}, internal-fsb-guid="a1ee24b3")
                                    textarea.form-control.form-control-sm(style={'display': 'block', 'width': '100%'}, type="text", rows="4", defaultValue=this.getDataFromNotation("Quote[" + i + "].Auction[" + j + "].Payment.Transfer.forwardingNote"))
                            .internal-fsb-element.col-2(internal-fsb-guid="5609d3ca")
                              .container-fluid
                                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                  .internal-fsb-element.col-12.offset-0(style={'fontSize': '10px'}, internal-fsb-guid="4156799c")
                                    | สถานะ
                                    div
                                      | 0 = n/a
                                    div
                                      | 1 = ลูกค้าโอนแล้ว
                                    div
                                      | 2 = ตรวจแล้วว่าโอน
                                    div
                                      | 3 = โอนให้ร้านแล้ว
                            .internal-fsb-element.col-3.offset-0(style={'FsbInheritedPresets': '', 'textAlign': 'right', 'fontWeight': 'bold', 'marginTop': '10px'}, internal-fsb-guid="0310185a")
                              | สถานะ
                            .internal-fsb-element.col-9.offset-0(style={'textAlign': 'left', 'marginTop': '10px'}, internal-fsb-guid="5e6711ad")
                              | #{this.getDataFromNotation('Quote['+i+'].Auction['+j+'].Payment.Transfer.status')}
                            .internal-fsb-element.col-2.offset-1(style={'textAlign': 'right', 'fontWeight': 'bold', 'paddingTop': '9px'}, internal-fsb-guid="b17313d6")
                              | เปลี่ยนสถานะ
                            label.internal-fsb-element.col-2.offset-0(style={'paddingLeft': '0px', 'marginTop': '10px'}, internal-fsb-guid="2ec2645a")
                              .container-fluid
                                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                  .internal-fsb-element.col-1.offset-1(style={padding: '0px'}, internal-fsb-guid="d39b258a")
                                    input(style={'display': 'block', 'marginTop': '2px'}, type="radio", name=i + ':' + j, value="0", defaultChecked=this.getDataFromNotation("Quote[" + i + "].Auction[" + j + "].Payment.Transfer.status") == '0')
                                  .internal-fsb-element.col-10(internal-fsb-guid="b526dbe5")
                                    | ไม่มีรายการ
                            label.internal-fsb-element.col-2.offset-0(style={'paddingLeft': '0px', 'marginTop': '10px'}, internal-fsb-guid="911206ee")
                              .container-fluid
                                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                  .internal-fsb-element.col-1.offset-1(style={padding: '0px'}, internal-fsb-guid="52da5356")
                                    input(style={'display': 'block', 'marginTop': '2px'}, type="radio", name=i + ':' + j, value="1", defaultChecked=this.getDataFromNotation("Quote[" + i + "].Auction[" + j + "].Payment.Transfer.status") == '1')
                                  .internal-fsb-element.offset-0.col-10(internal-fsb-guid="d00a39b6")
                                    | ลูกค้าโอนแล้ว
                            label.internal-fsb-element.col-2.offset-0(style={'paddingLeft': '0px', 'marginTop': '10px'}, internal-fsb-guid="cb5786d8")
                              .container-fluid
                                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                  .internal-fsb-element.col-1.offset-1(style={padding: '0px'}, internal-fsb-guid="620ea154")
                                    input(style={'display': 'block', 'marginTop': '2px'}, type="radio", name=i + ':' + j, value="2", defaultChecked=this.getDataFromNotation("Quote[" + i + "].Auction[" + j + "].Payment.Transfer.status") == '2')
                                  .internal-fsb-element.col-10(internal-fsb-guid="929893e5")
                                    | ตรวจแล้วว่าโอน
                            label.internal-fsb-element.col-2.offset-0(style={'paddingLeft': '0px', 'marginTop': '10px'}, internal-fsb-guid="aa620501")
                              .container-fluid
                                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                  .internal-fsb-element.col-1.offset-1(style={padding: '0px'}, internal-fsb-guid="26e1ae39")
                                    input(style={'display': 'block', 'marginTop': '2px'}, type="radio", name=i + ':' + j, value="3", defaultChecked=this.getDataFromNotation("Quote[" + i + "].Auction[" + j + "].Payment.Transfer.status") == '3')
                                  .internal-fsb-element.col-10(internal-fsb-guid="97ae9783")
                                    | โอนให้ร้านแล้ว
                            .internal-fsb-element.col-2.offset-1(style={'textAlign': 'right', 'fontWeight': 'bold', 'paddingTop': '5px'}, internal-fsb-guid="2b9505c9")
                              | แจ้งเบอร์โทรศัพท์ลูกค้า
                            .internal-fsb-element.col-4.offset-0(style={'paddingRight': '0px'}, internal-fsb-guid="5071eee9")
                              .container-fluid
                                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                  .internal-fsb-element.col-12.offset-0(style={padding: '0px'}, internal-fsb-guid="731935a5")
                                    input.form-control.form-control-sm(style={'display': 'block', 'width': '100%'}, type="text", placeholder="", defaultValue=this.getDataFromNotation("Quote[" + i + "].Auction[" + j + "].Payment.Transfer.number"))
                            .internal-fsb-element.col-5.offset-0(style={'fontSize': '10px', 'paddingTop': '8px'}, internal-fsb-guid="3b262002")
                              | ส่วนนี้ร้านค้าต้องทราบหลังจากได้รับเงินแล้ว
                            .internal-fsb-element.col-4.offset-3(internal-fsb-guid="86681b46")
                              .container-fluid.d-print-none
                                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                  input.internal-fsb-element.col-12(type="hidden", value=this.getDataFromNotation("Quote[" + i + "].Auction[" + j + "].Payment.Transfer.aid"), internal-fsb-guid="ebe3854c")
                                  Button.internal-fsb-element.internal-fsb-allow-cursor.offset--8.btn-primary.btn-sm.col-12(style={'marginRight': '15px', 'marginTop': '10px', 'fontSize': '13px'}, onClick=((event) => { window.internalFsbSubmit('d5ac1d26', 'Quote', event, ((results) => { this.manipulate('d5ac1d26', 'Quote', results); }).bind(this)); }).bind(this), type="button", onSuccess=this.onButtonSuccess_d5ac1d26.bind(this), internal-fsb-guid="d5ac1d26")
                                    .internal-fsb-element(internal-fsb-guid="d5ac1d26-text")
                                      | บันทึก
                    .internal-fsb-element.col-4.offset-3(internal-fsb-guid="1c9a70e0")
                      .container-fluid.d-print-none
                        .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                          Button.internal-fsb-element.internal-fsb-allow-cursor.btn-danger.btn-sm.col-12(style={'marginTop': '10px', 'fontSize': '13px'}, onClick=((event) => { window.internalFsbSubmit('76310279', 'Quote', event, ((results) => { this.manipulate('76310279', 'Quote', results); }).bind(this)); }).bind(this), type="button", onSuccess=this.onButtonSuccess_76310279.bind(this), onSubmitting=this.onButtonSubmitting_76310279.bind(this), internal-fsb-guid="76310279")
                            .internal-fsb-element(internal-fsb-guid="76310279-text")
                              | ปิดงาน
                            input.internal-fsb-element(type="hidden", value=this.getDataFromNotation("Quote[" + i + "].qid"), internal-fsb-guid="132cd171")
                            input.internal-fsb-element.col-12(type="hidden", value="true", internal-fsb-guid="00745396")
                          .internal-fsb-element.col-12(style={'marginTop': '10px', 'fontSize': '10px', 'color': 'rgba(184, 184, 184, 1)', 'textAlign': 'center'}, internal-fsb-guid="bc6dd531")
                            | กรุณาตรวจเช็คความเรียบร้อยก่อนปิดงาน
                    .internal-fsb-element.col-12(style={'color': 'rgba(184, 184, 184, 1)', 'fontSize': '10px', 'textAlign': 'center', 'marginTop': '20px', 'borderTopColor': 'rgba(184, 184, 184, 1)', 'borderTopWidth': '1px', 'borderBottomStyle': 'dashed', 'borderBottomColor': 'rgba(184, 184, 184, 1)', 'borderBottomWidth': '1px'}, internal-fsb-guid="768b1e89")
                      | จบข้อมูลงานประมูล #{this.getDataFromNotation('Quote['+i+'].title')} สร้าง #{this.getDataFromNotation('Quote['+i+'].createdAt')} แก้ไข #{this.getDataFromNotation('Quote['+i+'].updatedAt')}
    `
  }
}
DeclarationHelper.declare('Document', 'Controls.FlowLayout_d2d6431e', FlowLayout_d2d6431e);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.