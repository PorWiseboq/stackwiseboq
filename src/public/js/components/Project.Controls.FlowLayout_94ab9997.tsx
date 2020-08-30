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
class FlowLayout_94ab9997 extends Base {
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
  
  private getListOfChangeMerchandise(slot: number, index: number): void {
    const listing = this.getDataFromNotation(`Quote[${slot}].Listing`, true);
    let substitutes = this.getDataFromNotation(`Quote[${slot}].Auction[${index}].Substitute`, true);
    
    substitutes = substitutes.filter(substitute => substitute.columns['type'] != 0 && substitute.columns['type'] != 3);
    let results = substitutes.map((substitute) => {
      const list = listing.filter(item => item.keys['lid'] == substitute.keys['lid'])[0];
      let composed = [];
      
      if (substitute.columns['title'] != list.columns['list']) {
        composed.push(`${substitute.columns['title']} (จากเดิม ${list.columns['title']})`);
      } else {
        composed.push(`${substitute.columns['title']}`);
      }
      if (substitute.columns['size'] != list.columns['size']) {
        composed.push(`ขนาด ${substitute.columns['size']} (จากเดิม ${list.columns['size']})`);
      }
      if (substitute.columns['quantity'] != list.columns['quantity']) {
        composed.push(`จำนวน ${substitute.columns['quantity']} (จากเดิม ${list.columns['quantity']})`);
      }
      
      return composed.join(' ');
    });
    
    return results.join(', ') || 'ไม่มี';
  }
  
  private getListOfUnavailableMerchandise(slot: number, index: number): void {
    const listing = this.getDataFromNotation(`Quote[${slot}].Listing`, true);
    let substitutes = this.getDataFromNotation(`Quote[${slot}].Auction[${index}].Substitute`, true);
    
    substitutes = substitutes.filter(substitute => substitute.columns['type'] == 3);
    let results = substitutes.map((substitute) => {
      return substitute.columns['title'];
    });
    
    return results.join(', ') || 'ไม่มี';
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
      div(style=Object.assign({'FsbInheritedPresets': '180079a2'}, this.props.forward && this.props.forward.styles || {}), className="internal-fsb-element col-10 offset-1 -fsb-preset-180079a2 " + (this.props.forward && this.props.forward.classes || ''), internal-fsb-guid="94ab9997")
        .container-fluid
          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
            .internal-fsb-element.-fsb-preset-7a279686.col-12.offset-0(style={'FsbInheritedPresets': '7a279686'}, internal-fsb-guid="d4338262")
              | ผลการประมูลราคาวัสดุก่อสร้าง
            .internal-fsb-element.col-12.-fsb-preset-4839e353(style={'FsbInheritedPresets': '4839e353'}, internal-fsb-guid="b864ab8e")
              | ข้างล่างนี้คือผลการประมูล กรุณาเลือกร้านค้าที่คุณพอใจมากที่สุด เพื่อชำระเงินในขั้นถัดไป
            .internal-fsb-element.col-6.offset-0.-fsb-preset-b6c9ad89(style={'FsbInheritedPresets': 'b6c9ad89', 'borderRightStyle': 'solid', 'borderRightColor': 'rgba(22, 98, 250, 1)', 'borderRightWidth': '1px'}, internal-fsb-guid="5037e0c4")
              .container-fluid
                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                  .internal-fsb-element.-fsb-preset-7a279686.col-12.offset-0(style={'FsbInheritedPresets': '7a279686', 'textAlign': 'center'}, internal-fsb-guid="28d79e4e")
                    | ร้านค้าที่เสนอครบ
                  .internal-fsb-element.col-12.-fsb-preset-4839e353(style={'FsbInheritedPresets': '4839e353', 'textAlign': 'center'}, internal-fsb-guid="9e116c4b")
                    | ครบทุกรายการสินค้าตามที่คุณได้ระบุไว้
                  each data, i in this.getDataFromNotation("Quote[0].Auction", true)
                    .internal-fsb-element.col-12(key="item_" + i, internal-fsb-guid="839d87a6")
                      .container-fluid
                        .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                          label.internal-fsb-element.col-12.offset-0(style={'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-guid="0a1d7749")
                            .container-fluid
                              .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                .internal-fsb-element.offset--10.-fsb-preset-b6c9ad89.col-2.offset-0(style={padding: '0px'}, internal-fsb-guid="bc041e39")
                                  input(style={'display': 'block', 'FsbInheritedPresets': 'b6c9ad89'}, type="radio")
                                .internal-fsb-element.-fsb-preset-b5cd72c0.col-10.offset-0(style={'FsbInheritedPresets': 'b5cd72c0'}, internal-fsb-guid="94372513")
                                  | ##{i + 1} #{this.getDataFromNotation('Quote[0].Auction[' + i + '].Store.name')}
                                .internal-fsb-element.col-10.offset-2.-fsb-preset-4839e353(style={'FsbInheritedPresets': '4839e353'}, internal-fsb-guid="d5ecb95b")
                                  | ตำบล#{this.getDataFromNotation('Quote[0].Auction[' + i + '].Store.User.subDistrict')} อำเภอ#{this.getDataFromNotation('Quote[0].Auction[' + i + '].Store.User.district')} #{this.getDataFromNotation('Quote[0].Auction[' + i + '].Store.User.province')}
                                .internal-fsb-element.-fsb-preset-b5cd72c0.col-10.offset-2(style={'FsbInheritedPresets': 'b5cd72c0', 'marginBottom': '5px'}, internal-fsb-guid="22bd4142")
                                  | ราคารวม #{this.getDataFromNotation('Quote[0].Auction[' + i + '].price')} บาท
                                .internal-fsb-element.-fsb-preset-8050ab15.col-10.offset-2(style={'FsbInheritedPresets': '8050ab15'}, internal-fsb-guid="89106a70")
                                  div
                                    | รายการสินค้าที่เปลี่ยน: #{this.getListOfChangeMerchandise(0, i)}
                                .internal-fsb-element.-fsb-preset-8050ab15.col-10.offset-2(style={'FsbInheritedPresets': '8050ab15', 'display': 'none'}, internal-fsb-guid="ec8c24ab")
                                  | โปรโมชั่นพิเศษ: คิดส่วนลดในครั้งถัดไป 12.5%
            .internal-fsb-element.col-6.offset-0.-fsb-preset-b6c9ad89(style={'FsbInheritedPresets': 'b6c9ad89', 'borderLeftStyle': 'solid', 'borderLeftColor': 'rgba(22, 98, 250, 1)', 'borderLeftWidth': '1px'}, internal-fsb-guid="35d94303")
              .container-fluid
                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                  .internal-fsb-element.col-12.-fsb-preset-7a279686(style={'FsbInheritedPresets': '7a279686', 'textAlign': 'center'}, internal-fsb-guid="32d5d986")
                    | ร้านค้าที่เสนอไม่ครบ
                  .internal-fsb-element.col-12.-fsb-preset-4839e353(style={'FsbInheritedPresets': '4839e353', 'textAlign': 'center'}, internal-fsb-guid="740014ae")
                    | มีเฉพาะบางรายการสินค้าตามที่คุณได้ระบุไว้
                  each data, i in this.getDataFromNotation("Quote[1].Auction", true)
                    .internal-fsb-element.col-12(key="item_" + i, internal-fsb-guid="33eb2aa3")
                      .container-fluid
                        .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                          label.internal-fsb-element.col-12(style={'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-guid="9db8b3b2")
                            .container-fluid
                              .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                .internal-fsb-element.-fsb-preset-b6c9ad89.col-2.offset-0(style={padding: '0px'}, internal-fsb-guid="1411ca4c")
                                  input(style={'display': 'block', 'FsbInheritedPresets': 'b6c9ad89'}, type="checkbox")
                                .internal-fsb-element.-fsb-preset-b5cd72c0.col-10.offset-0(style={'FsbInheritedPresets': 'b5cd72c0'}, internal-fsb-guid="60a42697")
                                  | ##{i + 1} #{this.getDataFromNotation('Quote[0].Auction[' + i + '].Store.name')}
                                .internal-fsb-element.col-10.offset-2.-fsb-preset-4839e353(style={'FsbInheritedPresets': '4839e353'}, internal-fsb-guid="9e41cae9")
                                  | ตำบล#{this.getDataFromNotation('Quote[0].Auction[' + i + '].Store.User.subDistrict')} อำเภอ#{this.getDataFromNotation('Quote[0].Auction[' + i + '].district')} #{this.getDataFromNotation('Quote[0].Auction[' + i + '].province')}
                                .internal-fsb-element.-fsb-preset-b5cd72c0.col-10.offset-2(style={'FsbInheritedPresets': 'b5cd72c0', 'marginBottom': '5px'}, internal-fsb-guid="9491a176")
                                  | ราคารวม #{this.getDataFromNotation('Quote[1].Auction[' + i + '].price')} บาท
                                .internal-fsb-element.-fsb-preset-8050ab15.col-10.offset-2(style={'FsbInheritedPresets': '8050ab15'}, internal-fsb-guid="a87a2cdb")
                                  | รายการสินค้าที่เปลี่ยน: #{this.getListOfChangeMerchandise(1, i)}
                                .internal-fsb-element.-fsb-preset-8050ab15.col-10.offset-2(style={'FsbInheritedPresets': '8050ab15'}, internal-fsb-guid="4d1e5aaa")
                                  | รายการสินค้าที่ไม่มี: #{this.getListOfUnavailableMerchandise(1, i)}
                                .internal-fsb-element.-fsb-preset-8050ab15.col-10.offset-2(style={'FsbInheritedPresets': '8050ab15', 'display': 'none'}, internal-fsb-guid="5123ace7")
                                  | โปรโมชั่นพิเศษ: คิดส่วนลดในครั้งถัดไป 10%
    `
  }
}
DeclarationHelper.declare('Document', 'Controls.FlowLayout_94ab9997', FlowLayout_94ab9997);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.