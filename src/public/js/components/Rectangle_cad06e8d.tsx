// Auto[Generating:V1]--->
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.

// Auto[Import]--->
import {Project, DeclarationHelper} from '../helpers/DeclarationHelper.js';
import {CodeHelper} from '../helpers/CodeHelper.js';
import {EventHelper} from '../helpers/EventHelper.js';
import {HTMLHelper} from '../helpers/HTMLHelper.js';
import {IBaseProps, IBaseState, DefaultBaseProps, DefaultBaseState, Base} from './Base.js';
// <---Auto[Import]

// Import additional modules here:
//
enum QuoteType {
  IN_CONTEST,
  OFFERING_CONSIDERATION,
  OFFERING_SUCCEEDED,
  OFFERING_FAILED,
  MISSING
}

// Auto[Declare]--->

declare let React: any;
declare let ReactDOM: any;
declare let window: any;
declare let DataManipulationHelper: any;

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
  quoteType: QuoteType
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
    return (
      <div className={"internal-fsb-element internal-fsb-allow-cursor col-12 " + (this.props.forward && this.props.forward.classes || '')} internal-fsb-guid="cad06e8d" style={Object.assign({'flexDirection': 'column', 'WebkitFlexDirection': 'column', 'MsFlexDirection': 'column', 'height': '100vh', 'display': 'flex', 'background': 'linear-gradient(15deg, rgba(153, 24, 245, 1) 0%, rgba(22, 98, 250, 1) 100%)', 'FsbBackgroundType': 'linear'}, this.props.forward && this.props.forward.styles || {})}>
        <div className="internal-fsb-element" internal-fsb-guid="6a56a9be" style={{'background': 'rgba(255, 255, 255, 0)', 'color': 'rgba(255, 255, 255, 1)'}}>
          <div className="container-fluid">
            <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor" style={{'display': 'block'}}>
              <div className="internal-fsb-element offset-0" internal-fsb-guid="c6200677" style={{'fontSize': '24px', 'marginTop': '10px', 'marginLeft': '10px', 'marginBottom': '10px', 'float': 'left'}}>
                WiseBOQ
              </div>
              <button className="internal-fsb-element internal-fsb-allow-cursor btn btn-primary" internal-fsb-guid="108bb2b9" style={{'paddingLeft': '15px', 'paddingRight': '15px', 'float': 'right', 'fontSize': '14px', 'marginTop': '10px', 'marginRight': '10px'}} type="button">
                <div className="internal-fsb-element" internal-fsb-guid="108bb2b9-text">
                  ออกจากระบบ
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="internal-fsb-element internal-fsb-allow-cursor" internal-fsb-guid="a30c3884" style={{'background': 'rgba(255, 255, 255, 0)', 'flexGrow': '1', 'WebkitFlexGrow': '1'}}>
          <div className="internal-fsb-element internal-fsb-allow-cursor" internal-fsb-guid="9b826999" style={{'display': 'table', 'height': '100%'}}>
            <div className="internal-fsb-element internal-fsb-allow-cursor" internal-fsb-guid="e2254eb7" style={{'display': 'table-row', 'height': '100%'}}>
              <div className="internal-fsb-element internal-fsb-allow-cursor" internal-fsb-guid="712e9de1" style={{'borderRightColor': 'rgba(255, 255, 255, 1)', 'background': 'rgba(255, 255, 255, 0)', 'color': 'rgba(255, 255, 255, 1.0)', 'overflowY': 'auto', 'MsOverflowY': 'auto', 'display': 'table-cell', 'verticalAlign': 'top', 'width': '1px'}}>
                <div className="internal-fsb-element" internal-fsb-guid="74e4253b" style={{'fontSize': '11px', 'flexShrink': '1', 'WebkitFlexShrink': '1'}}>
                  <div className="container-fluid">
                    <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                      <div className="internal-fsb-element col-12" internal-fsb-guid="ca80140b" style={{'marginBottom': '10px'}}>
                        <div className="container-fluid">
                          <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                            <div className="internal-fsb-element col-12" internal-fsb-guid="04b90b11" style={{'display': 'block', 'opacity': '0.5', 'WebkitOpacity': '0.5', 'width': '40px', 'height': '40px'}}>
                              <img style={{'display': 'block', 'opacity': '0.5', 'WebkitOpacity': '0.5', 'width': '40px', 'height': '40px'}} src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/bid-inactive.png" />
                            </div>
                            <div className="internal-fsb-element col-12" internal-fsb-guid="9a91246d" style={{'textAlign': 'center', 'paddingLeft': '0px', 'paddingRight': '0px', 'color': 'rgba(255, 255, 255, 0.45)'}}>
                              เคาะประมูล
                            </div>
                            <div className="internal-fsb-element col-12" internal-fsb-guid="42b3dc9b" style={{'display': 'block', 'width': '40px', 'height': '40px'}}>
                              <img style={{'display': 'block', 'width': '40px', 'height': '40px'}} src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/bid-active.png" />
                            </div>
                            <div className="internal-fsb-element col-12" internal-fsb-guid="51315831" style={{'textAlign': 'center', 'paddingLeft': '0px', 'paddingRight': '0px'}}>
                              เคาะประมูล
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="internal-fsb-element col-12" internal-fsb-guid="7b54582d" style={{'marginBottom': '10px'}}>
                        <div className="container-fluid">
                          <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                            <div className="internal-fsb-element col-12" internal-fsb-guid="b6ec8d55" style={{'display': 'block', 'width': '40px', 'opacity': '0.5', 'WebkitOpacity': '0.5', 'height': '40px'}}>
                              <img style={{'display': 'block', 'width': '40px', 'opacity': '0.5', 'WebkitOpacity': '0.5', 'height': '40px'}} src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/bidded-inactive.png" />
                            </div>
                            <div className="internal-fsb-element col-12" internal-fsb-guid="ac1a1bce" style={{'textAlign': 'center', 'paddingLeft': '0px', 'paddingRight': '0px', 'color': 'rgba(255, 255, 255, 0.45)'}}>
                              ประมูลผ่าน
                            </div>
                            <div className="internal-fsb-element col-12" internal-fsb-guid="40ada351" style={{'display': 'block', 'width': '40px', 'height': '40px'}}>
                              <img style={{'display': 'block', 'width': '40px', 'height': '40px'}} src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/bidded-active.png" />
                            </div>
                            <div className="internal-fsb-element col-12" internal-fsb-guid="936e036b" style={{'textAlign': 'center', 'paddingLeft': '0px', 'paddingRight': '0px'}}>
                              ประมูลผ่าน
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="internal-fsb-element col-12" internal-fsb-guid="12a672c3" style={{'marginBottom': '10px'}}>
                        <div className="container-fluid">
                          <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                            <div className="internal-fsb-element col-12" internal-fsb-guid="4bac7ab7" style={{'display': 'block', 'width': '40px', 'opacity': '0.5', 'WebkitOpacity': '0.5', 'height': '40px'}}>
                              <img style={{'display': 'block', 'width': '40px', 'opacity': '0.5', 'WebkitOpacity': '0.5', 'height': '40px'}} src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/chat-inactive.png" />
                            </div>
                            <div className="internal-fsb-element col-12" internal-fsb-guid="8a12a919" style={{'textAlign': 'center', 'paddingLeft': '0px', 'paddingRight': '0px', 'color': 'rgba(255, 255, 255, 0.45)'}}>
                              คุยกับลูกค้า
                            </div>
                            <div className="internal-fsb-element col-12" internal-fsb-guid="7eb8a313" style={{'display': 'block', 'width': '40px', 'height': '40px'}}>
                              <img style={{'display': 'block', 'width': '40px', 'height': '40px'}} src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/chat-active.png" />
                            </div>
                            <div className="internal-fsb-element col-12" internal-fsb-guid="579741b7" style={{'textAlign': 'center', 'paddingLeft': '0px', 'paddingRight': '0px'}}>
                              คุยกับลูกค้า
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="internal-fsb-element col-12" internal-fsb-guid="9a5131da">
                        <div className="container-fluid">
                          <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                            <div className="internal-fsb-element col-12 offset-0" internal-fsb-guid="6b7e8340" style={{'display': 'block', 'width': '40px', 'height': '40px', 'opacity': '0.5', 'WebkitOpacity': '0.5'}}>
                              <img style={{'display': 'block', 'width': '40px', 'height': '40px', 'opacity': '0.5', 'WebkitOpacity': '0.5'}} src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/sold-inactive.png" />
                            </div>
                            <div className="internal-fsb-element col-12" internal-fsb-guid="83e40405" style={{'textAlign': 'center', 'color': 'rgba(255, 255, 255, 0.45)', 'paddingLeft': '0px', 'paddingRight': '0px'}}>
                              จ่ายเงินแล้ว
                            </div>
                            <div className="internal-fsb-element col-12 offset-0" internal-fsb-guid="86510a55" style={{'display': 'block', 'width': '40px', 'height': '40px'}}>
                              <img style={{'display': 'block', 'width': '40px', 'height': '40px'}} src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/sold-active.png" />
                            </div>
                            <div className="internal-fsb-element col-12" internal-fsb-guid="b4775a3d" style={{'textAlign': 'center', 'paddingLeft': '0px', 'paddingRight': '0px'}}>
                              จ่ายเงินแล้ว
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="internal-fsb-element internal-fsb-allow-cursor" internal-fsb-guid="3e557242" style={{'borderRightColor': 'rgba(22, 98, 250, 1)', 'background': 'rgba(255, 255, 255, 1)', 'display': 'table-cell'}}>
                <div className="internal-fsb-element" internal-fsb-guid="b3410868" style={{'width': '100%', 'height': '100%', 'display': 'flex', 'top': '0px', 'left': '0px', 'flexDirection': 'column', 'WebkitFlexDirection': 'column', 'MsFlexDirection': 'column', 'borderBottomColor': 'rgba(22, 98, 250, 1)'}}>
                  <div className="internal-fsb-element" internal-fsb-guid="4069ed4d" style={{'borderBottomStyle': 'solid', 'borderBottomColor': 'rgba(22, 98, 250, 1)', 'borderBottomWidth': '2px'}}>
                    <div className="container-fluid">
                      <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                        <div className="internal-fsb-element col-12" internal-fsb-guid="88db4eda">
                          <div className="container-fluid">
                            <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                              <div className="internal-fsb-element col-1 offset-0" internal-fsb-guid="34a98650" style={{'display': 'block', 'width': '100%'}}>
                                <img style={{'display': 'block', 'width': '100%'}} src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/bid-active.png" />
                              </div>
                              <div className="internal-fsb-element col-11 offset-0" internal-fsb-guid="5775d3be">
                                <div className="container-fluid">
                                  <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                                    <div className="internal-fsb-element col-12 -fsb-preset-7a279686" internal-fsb-guid="2434192c" style={{'textAlign': 'left', 'FsbInheritedPresets': '7a279686'}}>
                                      เคาะประมูล
                                    </div>
                                    <div className="internal-fsb-element col-12 -fsb-preset-4839e353" internal-fsb-guid="49d55ce2" style={{'FsbInheritedPresets': '4839e353', 'textAlign': 'left'}}>
                                      หน้านี้จะแสดงงานประมูลวัสดุก่อสร้างทั้งหมดที่คุณสามารถเคาะราคาได้
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="internal-fsb-element col-12" internal-fsb-guid="0d656c9d">
                          <div className="container-fluid">
                            <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                              <div className="internal-fsb-element col-1 offset-0" internal-fsb-guid="44d05cb6" style={{'display': 'block', 'width': '100%'}}>
                                <img style={{'display': 'block', 'width': '100%'}} src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/bidded-active.png" />
                              </div>
                              <div className="internal-fsb-element col-11 offset-0" internal-fsb-guid="945cdc26">
                                <div className="container-fluid">
                                  <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                                    <div className="internal-fsb-element col-12 -fsb-preset-7a279686" internal-fsb-guid="cad0c464" style={{'textAlign': 'left', 'FsbInheritedPresets': '7a279686'}}>
                                      ประมูลผ่าน
                                    </div>
                                    <div className="internal-fsb-element col-12 -fsb-preset-4839e353" internal-fsb-guid="4bb72418" style={{'FsbInheritedPresets': '4839e353', 'textAlign': 'left'}}>
                                      งานประมูลราคาวัสดุก่อสร้างซึ่งผ่านงานประมูลที่รอลูกค้าเลือกซื้อ
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="internal-fsb-element col-12" internal-fsb-guid="ba43b015">
                          <div className="container-fluid">
                            <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                              <div className="internal-fsb-element offset--1 col-1 offset-0" internal-fsb-guid="694bb341" style={{'display': 'block', 'width': '100%'}}>
                                <img style={{'display': 'block', 'width': '100%'}} src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/chat-active.png" />
                              </div>
                              <div className="internal-fsb-element col-11 offset-0" internal-fsb-guid="6daabaa5">
                                <div className="container-fluid">
                                  <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                                    <div className="internal-fsb-element col-12 -fsb-preset-7a279686" internal-fsb-guid="53985b74" style={{'textAlign': 'left', 'FsbInheritedPresets': '7a279686'}}>
                                      คุยกับลูกค้า
                                    </div>
                                    <div className="internal-fsb-element col-12 -fsb-preset-4839e353" internal-fsb-guid="9a4086b9" style={{'FsbInheritedPresets': '4839e353', 'textAlign': 'left'}}>
                                      ระบบปฏิสัมพันธ์กับลูกค้าผ่านการพูดคุยกันผ่านข้อความเพื่อตอบคำถามก่อนที่ลูกค้าจะตัดสินใจซื้อ
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="internal-fsb-element col-12" internal-fsb-guid="2d35d6ec">
                          <div className="container-fluid">
                            <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                              <div className="internal-fsb-element col-1 offset-0" internal-fsb-guid="83bea00c" style={{'display': 'block', 'width': '100%'}}>
                                <img style={{'display': 'block', 'width': '100%'}} src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/sold-active.png" />
                              </div>
                              <div className="internal-fsb-element col-11 offset-0" internal-fsb-guid="3231834e">
                                <div className="container-fluid">
                                  <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                                    <div className="internal-fsb-element -fsb-preset-7a279686 col-12 offset-0" internal-fsb-guid="05491a78" style={{'FsbInheritedPresets': '7a279686'}}>
                                      จ่ายเงินแล้ว
                                    </div>
                                    <div className="internal-fsb-element -fsb-preset-4839e353 col-12 offset-0" internal-fsb-guid="8d41bdab" style={{'FsbInheritedPresets': '4839e353'}}>
                                      งานประมูลราคาวัสดุก่อสร้างที่ลูกค้าจ่ายเงินเรียบร้อยแล้วและรอทาง WiseBOQ โอนเงินไปให้ร้านค้าเพื่อทำการจัดส่งสินค้าต่อไป
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="internal-fsb-element" internal-fsb-guid="6e3ac549" style={{'flexGrow': '1', 'WebkitFlexGrow': '1', 'background': 'rgba(214, 237, 255, 1)'}}>
                    <div className="container-fluid">
                      <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                        <div className="internal-fsb-element col-12" internal-fsb-guid="6780405e">
                          <div className="container-fluid">
                            <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                            </div>
                          </div>
                        </div>
                        <div className="internal-fsb-element col-12" internal-fsb-guid="ab6509ae">
                          <div className="container-fluid">
                            <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                            </div>
                          </div>
                        </div>
                        <div className="internal-fsb-element col-12" internal-fsb-guid="9a851e7c">
                          <div className="container-fluid">
                            <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                            </div>
                          </div>
                        </div>
                        <div className="internal-fsb-element col-12" internal-fsb-guid="939e05e7">
                          <div className="container-fluid">
                            <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
DeclarationHelper.declare('Document', 'Controls.Rectangle_cad06e8d', Rectangle_cad06e8d);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.