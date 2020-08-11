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
}

let DefaultProps = Object.assign({}, DefaultBaseProps, {
  
});
let DefaultState = Object.assign({}, DefaultBaseState, {
  quoteType: QuoteType.AUCTIONING
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
  
  private getDisplayOf(quoteType: QuoteType, active: boolean) {
    if (active) return (this.state.quoteType === quoteType) ? 'block' : 'none';
    else return (this.state.quoteType === quoteType) ? 'none' : 'block';
  }
  
  // Auto[Merging]--->
  protected onImageClick_04b90b11(event: Event) {

    // Handle the event of onImageClick (Image 1) here:
    // 
    this.setState({quoteType: QuoteType.AUCTIONING});
    
  }

  protected onImageClick_b6ec8d55(event: Event) {

    // Handle the event of onImageClick (Image 2) here:
    // 
    this.setState({quoteType: QuoteType.OFFERING});
    
  }

  protected onImageClick_4bac7ab7(event: Event) {

    // Handle the event of onImageClick (Image 4) here:
    // 
    this.setState({quoteType: QuoteType.CHATTING});
    
  }

  protected onImageClick_6b7e8340(event: Event) {

    // Handle the event of onImageClick (Image 9) here:
    // 
    this.setState({quoteType: QuoteType.PAID});
    
  }
  // <---Auto[Merging]
  
  // Auto[ClassEnd]--->
  protected render(): any {
    return (
      <div className={"internal-fsb-element internal-fsb-allow-cursor col-12 " + (this.props.forward && this.props.forward.classes || '')} internal-fsb-guid="cad06e8d" style={Object.assign({'flexDirection': 'column', 'WebkitFlexDirection': 'column', 'MsFlexDirection': 'column', 'height': '100vh', 'display': 'flex', 'background': 'linear-gradient(15deg, rgba(153, 24, 245, 1) 0%, rgba(22, 98, 250, 1) 100%)', 'FsbBackgroundType': 'linear', 'paddingLeft': '0px', 'paddingRight': '0px', 'paddingTop': '0px', 'paddingBottom': '0px'}, this.props.forward && this.props.forward.styles || {})}>
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
        <div className="internal-fsb-element internal-fsb-allow-cursor" internal-fsb-guid="a30c3884" style={{'background': 'rgba(255, 255, 255, 0)', 'flexGrow': '1', 'WebkitFlexGrow': '1', 'width': '100%'}}>
          <div className="internal-fsb-element internal-fsb-allow-cursor" internal-fsb-guid="9b826999" style={{'display': 'table', 'height': '100%', 'width': '100%'}}>
            <div className="internal-fsb-element internal-fsb-allow-cursor" internal-fsb-guid="e2254eb7" style={{'display': 'table-row', 'height': '100%'}}>
              <div className="internal-fsb-element internal-fsb-allow-cursor" internal-fsb-guid="712e9de1" style={{'borderRightColor': 'rgba(255, 255, 255, 1)', 'background': 'rgba(255, 255, 255, 0)', 'color': 'rgba(255, 255, 255, 1.0)', 'overflowY': 'auto', 'MsOverflowY': 'auto', 'display': 'table-cell', 'verticalAlign': 'top', 'width': '1px'}}>
                <div className="internal-fsb-element" internal-fsb-guid="74e4253b" style={{'fontSize': '11px', 'flexShrink': '1', 'WebkitFlexShrink': '1', 'cursor': 'default'}}>
                  <div className="container-fluid">
                    <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                      <div className="internal-fsb-element col-12" internal-fsb-guid="ca80140b" style={{'marginBottom': '10px'}}>
                        <div className="container-fluid">
                          <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                            <div className="internal-fsb-element col-12" internal-fsb-guid="04b90b11" style={{display: (()=>{return this.getDisplayOf(QuoteType.AUCTIONING, false);})(), padding: '0px'}} onClick={this.onImageClick_04b90b11.bind(this)}>
                              <img style={{'display': 'block', 'opacity': '0.5', 'WebkitOpacity': '0.5', 'width': '40px', 'height': '40px', 'cursor': 'pointer'}} src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/bid-inactive.png" />
                            </div>
                            <div className="internal-fsb-element col-12" internal-fsb-guid="9a91246d" style={{'textAlign': 'center', 'paddingLeft': '0px', 'paddingRight': '0px', 'color': 'rgba(255, 255, 255, 0.45)', display: (()=>{return this.getDisplayOf(QuoteType.AUCTIONING, false);})()}}>
                              เคาะประมูล
                            </div>
                            <div className="internal-fsb-element col-12" internal-fsb-guid="42b3dc9b" style={{display: (()=>{return this.getDisplayOf(QuoteType.AUCTIONING, true);})(), padding: '0px'}}>
                              <img style={{'display': 'block', 'width': '40px', 'height': '40px'}} src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/bid-active.png" />
                            </div>
                            <div className="internal-fsb-element col-12" internal-fsb-guid="51315831" style={{'textAlign': 'center', 'paddingLeft': '0px', 'paddingRight': '0px', display: (()=>{return this.getDisplayOf(QuoteType.AUCTIONING, true);})()}}>
                              เคาะประมูล
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="internal-fsb-element col-12" internal-fsb-guid="7b54582d" style={{'marginBottom': '10px'}}>
                        <div className="container-fluid">
                          <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                            <div className="internal-fsb-element col-12" internal-fsb-guid="b6ec8d55" style={{display: (()=>{return this.getDisplayOf(QuoteType.OFFERING, false);})(), padding: '0px'}} onClick={this.onImageClick_b6ec8d55.bind(this)}>
                              <img style={{'display': 'block', 'width': '40px', 'opacity': '0.5', 'WebkitOpacity': '0.5', 'height': '40px', 'cursor': 'pointer'}} src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/bidded-inactive.png" />
                            </div>
                            <div className="internal-fsb-element col-12" internal-fsb-guid="ac1a1bce" style={{'textAlign': 'center', 'paddingLeft': '0px', 'paddingRight': '0px', 'color': 'rgba(255, 255, 255, 0.45)', display: (()=>{return this.getDisplayOf(QuoteType.OFFERING, false);})()}}>
                              ประมูลผ่าน
                            </div>
                            <div className="internal-fsb-element col-12" internal-fsb-guid="40ada351" style={{display: (()=>{return this.getDisplayOf(QuoteType.OFFERING, true);})(), padding: '0px'}}>
                              <img style={{'display': 'block', 'width': '40px', 'height': '40px'}} src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/bidded-active.png" />
                            </div>
                            <div className="internal-fsb-element col-12" internal-fsb-guid="936e036b" style={{'textAlign': 'center', 'paddingLeft': '0px', 'paddingRight': '0px', display: (()=>{return this.getDisplayOf(QuoteType.OFFERING, true);})()}}>
                              ประมูลผ่าน
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="internal-fsb-element col-12" internal-fsb-guid="12a672c3" style={{'marginBottom': '10px'}}>
                        <div className="container-fluid">
                          <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                            <div className="internal-fsb-element col-12" internal-fsb-guid="4bac7ab7" style={{display: (()=>{return this.getDisplayOf(QuoteType.CHATTING, false);})(), padding: '0px'}} onClick={this.onImageClick_4bac7ab7.bind(this)}>
                              <img style={{'display': 'block', 'width': '40px', 'opacity': '0.5', 'WebkitOpacity': '0.5', 'height': '40px', 'cursor': 'pointer'}} src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/chat-inactive.png" />
                            </div>
                            <div className="internal-fsb-element col-12" internal-fsb-guid="8a12a919" style={{'textAlign': 'center', 'paddingLeft': '0px', 'paddingRight': '0px', 'color': 'rgba(255, 255, 255, 0.45)', display: (()=>{return this.getDisplayOf(QuoteType.CHATTING, false);})()}}>
                              คุยกับลูกค้า
                            </div>
                            <div className="internal-fsb-element col-12" internal-fsb-guid="7eb8a313" style={{display: (()=>{return this.getDisplayOf(QuoteType.CHATTING, true);})(), padding: '0px'}}>
                              <img style={{'display': 'block', 'width': '40px', 'height': '40px'}} src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/chat-active.png" />
                            </div>
                            <div className="internal-fsb-element col-12" internal-fsb-guid="579741b7" style={{'textAlign': 'center', 'paddingLeft': '0px', 'paddingRight': '0px', display: (()=>{return this.getDisplayOf(QuoteType.CHATTING, true);})()}}>
                              คุยกับลูกค้า
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="internal-fsb-element col-12" internal-fsb-guid="9a5131da">
                        <div className="container-fluid">
                          <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                            <div className="internal-fsb-element col-12 offset-0" internal-fsb-guid="6b7e8340" style={{display: (()=>{return this.getDisplayOf(QuoteType.PAID, false);})(), padding: '0px'}} onClick={this.onImageClick_6b7e8340.bind(this)}>
                              <img style={{'display': 'block', 'width': '40px', 'height': '40px', 'opacity': '0.5', 'WebkitOpacity': '0.5', 'cursor': 'pointer'}} src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/sold-inactive.png" />
                            </div>
                            <div className="internal-fsb-element col-12" internal-fsb-guid="83e40405" style={{'textAlign': 'center', 'color': 'rgba(255, 255, 255, 0.45)', 'paddingLeft': '0px', 'paddingRight': '0px', display: (()=>{return this.getDisplayOf(QuoteType.PAID, false);})()}}>
                              จ่ายเงินแล้ว
                            </div>
                            <div className="internal-fsb-element col-12 offset-0" internal-fsb-guid="86510a55" style={{display: (()=>{return this.getDisplayOf(QuoteType.PAID, true);})(), padding: '0px'}}>
                              <img style={{'display': 'block', 'width': '40px', 'height': '40px'}} src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/sold-active.png" />
                            </div>
                            <div className="internal-fsb-element col-12" internal-fsb-guid="b4775a3d" style={{'textAlign': 'center', 'paddingLeft': '0px', 'paddingRight': '0px', display: (()=>{return this.getDisplayOf(QuoteType.PAID, true);})()}}>
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
                  <div className="internal-fsb-element" internal-fsb-guid="4069ed4d" style={{'borderBottomStyle': 'solid', 'borderBottomColor': 'rgba(22, 98, 250, 1)', 'borderBottomWidth': '2px', 'paddingTop': '10px', 'paddingBottom': '10px'}}>
                    <div className="container-fluid">
                      <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                        <div className="internal-fsb-element col-12" internal-fsb-guid="88db4eda" style={{display: (()=>{return this.getDisplayOf(QuoteType.AUCTIONING, true);})()}}>
                          <div className="container-fluid">
                            <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                              <div className="internal-fsb-element col-1 offset-0" internal-fsb-guid="34a98650" style={{padding: '0px'}}>
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
                        <div className="internal-fsb-element col-12" internal-fsb-guid="0d656c9d" style={{display: (()=>{return this.getDisplayOf(QuoteType.OFFERING, true);})()}}>
                          <div className="container-fluid">
                            <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                              <div className="internal-fsb-element col-1 offset-0" internal-fsb-guid="44d05cb6" style={{padding: '0px'}}>
                                <img style={{'display': 'block', 'width': '100%'}} src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/bidded-active.png" />
                              </div>
                              <div className="internal-fsb-element col-11 offset-0" internal-fsb-guid="945cdc26">
                                <div className="container-fluid">
                                  <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                                    <div className="internal-fsb-element col-12 -fsb-preset-7a279686" internal-fsb-guid="cad0c464" style={{'textAlign': 'left', 'FsbInheritedPresets': '7a279686'}}>
                                      ประมูลผ่าน
                                    </div>
                                    <div className="internal-fsb-element col-12 -fsb-preset-4839e353" internal-fsb-guid="4bb72418" style={{'FsbInheritedPresets': '4839e353', 'textAlign': 'left'}}>
                                      งานประมูลราคาวัสดุก่อสร้างซึ่งผ่านงานประมูลที่รอลูกค้าเลือกซื้อ กรุณาระบุราคาของแต่ละรายการภายใน 24 ชั่วโมง
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="internal-fsb-element col-12" internal-fsb-guid="ba43b015" style={{display: (()=>{return this.getDisplayOf(QuoteType.CHATTING, true);})()}}>
                          <div className="container-fluid">
                            <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                              <div className="internal-fsb-element offset--1 col-1 offset-0" internal-fsb-guid="694bb341" style={{padding: '0px'}}>
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
                        <div className="internal-fsb-element col-12" internal-fsb-guid="2d35d6ec" style={{display: (()=>{return this.getDisplayOf(QuoteType.PAID, true);})()}}>
                          <div className="container-fluid">
                            <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                              <div className="internal-fsb-element col-1 offset-0" internal-fsb-guid="83bea00c" style={{padding: '0px'}}>
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
                  <div className="internal-fsb-element internal-fsb-allow-cursor" internal-fsb-guid="ddec7e5c" style={{'background': 'rgba(255, 255, 255, 1)', 'flexGrow': '1', 'WebkitFlexGrow': '1'}}>
                    <div className="internal-fsb-element internal-fsb-allow-cursor" internal-fsb-guid="71616aa2" style={{'display': 'table', 'height': '100%', 'width': '100%'}}>
                      <div className="internal-fsb-element internal-fsb-allow-cursor" internal-fsb-guid="2dbce05c" style={{'display': 'table-row'}}>
                        <div className="internal-fsb-element internal-fsb-allow-cursor" internal-fsb-guid="03a20d7c" style={{'display': 'table-cell', 'borderRightWidth': '2px', 'width': '200px', 'borderRightStyle': 'solid', 'borderRightColor': 'rgba(22, 98, 250, 1)', 'position': 'relative'}}>
                          <div className="internal-fsb-element internal-fsb-allow-cursor" internal-fsb-guid="394c4745" style={{'borderRightColor': 'rgba(22, 98, 250, 1)', 'overflowX': 'hidden', 'MsOverflowX': 'hidden', 'overflowY': 'auto', 'MsOverflowY': 'auto', 'position': 'absolute', 'top': '0px', 'left': '0px', 'bottom': '0px', 'right': '0px', 'paddingTop': '5px', 'paddingLeft': '5px', 'paddingRight': '5px'}}>
                            <div className="internal-fsb-element" internal-fsb-guid="c3d853d0" style={{display: (()=>{return this.getDisplayOf(QuoteType.AUCTIONING, true);})()}}>
                              <div className="container-fluid">
                                <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                                  <div className="internal-fsb-element col-12 -fsb-self-5a671a7d" internal-fsb-guid="5a671a7d">
                                    <div className="container-fluid">
                                      <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                                        <div className="internal-fsb-element col-12 -fsb-self-49a6327a" internal-fsb-guid="49a6327a">
                                          ชื่อรายการ
                                        </div>
                                        <div className="internal-fsb-element col-7 offset-0 -fsb-self-4aee31ab" internal-fsb-guid="4aee31ab">
                                          อันดับที่ 5 / 10
                                        </div>
                                        <div className="internal-fsb-element col-5 offset-0 -fsb-self-3bec5885" internal-fsb-guid="3bec5885">
                                          เสนอครบ
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="internal-fsb-element col-12" internal-fsb-guid="24d70384" style={{'paddingLeft': '0px', 'paddingRight': '0px', display: (()=>{return this.getDisplayOf(QuoteType.OFFERING, true);})()}}>
                              <div className="container-fluid">
                                <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                                  <div className="internal-fsb-element col-12 -fsb-preset-5a671a7d" internal-fsb-guid="704100b7" style={{'FsbInheritedPresets': '5a671a7d'}}>
                                    <div className="container-fluid">
                                      <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                                        <div className="internal-fsb-element col-12 -fsb-preset-49a6327a" internal-fsb-guid="53d42bea" style={{'FsbInheritedPresets': '49a6327a'}}>
                                          ชื่อรายการ
                                        </div>
                                        <div className="internal-fsb-element -fsb-preset-4aee31ab col-7" internal-fsb-guid="3945ba95" style={{'FsbInheritedPresets': '4aee31ab'}}>
                                          อันดับที่ 2 / 10
                                        </div>
                                        <div className="internal-fsb-element -fsb-preset-3bec5885 col-5" internal-fsb-guid="c78396c8" style={{'FsbInheritedPresets': '3bec5885'}}>
                                          เสนอไม่ครบ
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="internal-fsb-element col-12" internal-fsb-guid="3493d374" style={{'paddingLeft': '0px', 'paddingRight': '0px', display: (()=>{return this.getDisplayOf(QuoteType.CHATTING, true);})()}}>
                              <div className="container-fluid">
                                <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                                  <div className="internal-fsb-element col-12 -fsb-preset-5a671a7d" internal-fsb-guid="24731127" style={{'borderTopWidth': '1px', 'borderLeftWidth': '1px', 'borderBottomWidth': '1px', 'paddingTop': '5px', 'paddingLeft': '8px', 'marginBottom': '5px', 'FsbInheritedPresets': '5a671a7d'}}>
                                    <div className="container-fluid">
                                      <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                                        <div className="internal-fsb-element col-12 -fsb-preset-49a6327a" internal-fsb-guid="32663907" style={{'FsbInheritedPresets': '49a6327a'}}>
                                          ชื่อรายการ
                                        </div>
                                        <div className="internal-fsb-element -fsb-preset-4aee31ab col-7" internal-fsb-guid="211827b2" style={{'FsbInheritedPresets': '4aee31ab'}}>
                                          150,000 บาท
                                        </div>
                                        <div className="internal-fsb-element -fsb-preset-3bec5885 col-5" internal-fsb-guid="0e8e4701" style={{'FsbInheritedPresets': '3bec5885'}}>
                                          ข้อความใหม่
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="internal-fsb-element col-12" internal-fsb-guid="a1595e85" style={{'paddingLeft': '0px', 'paddingRight': '0px', display: (()=>{return this.getDisplayOf(QuoteType.PAID, true);})()}}>
                              <div className="container-fluid">
                                <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                                  <div className="internal-fsb-element col-12 -fsb-preset-5a671a7d" internal-fsb-guid="6bdca277" style={{'FsbInheritedPresets': '5a671a7d'}}>
                                    <div className="container-fluid">
                                      <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                                        <div className="internal-fsb-element col-12 -fsb-preset-49a6327a" internal-fsb-guid="1c822d56" style={{'FsbInheritedPresets': '49a6327a'}}>
                                          ชื่อรายการ
                                        </div>
                                        <div className="internal-fsb-element -fsb-preset-4aee31ab col-7" internal-fsb-guid="39506c79" style={{'FsbInheritedPresets': '4aee31ab'}}>
                                          55,000 บาท
                                        </div>
                                        <div className="internal-fsb-element -fsb-preset-3bec5885 col-5" internal-fsb-guid="9ec45baa" style={{'FsbInheritedPresets': '3bec5885'}}>
                                          บัตรเครดิต
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="internal-fsb-element internal-fsb-allow-cursor" internal-fsb-guid="154b7137" style={{'display': 'table-cell', 'position': 'relative'}}>
                          <div className="internal-fsb-element internal-fsb-allow-cursor" internal-fsb-guid="ed65b978" style={{'overflowX': 'hidden', 'MsOverflowX': 'hidden', 'overflowY': 'auto', 'MsOverflowY': 'auto', 'position': 'absolute', 'left': '0px', 'top': '0px', 'right': '0px', 'bottom': '0px', 'paddingTop': '5px', 'paddingBottom': '5px'}}>
                            <div className="internal-fsb-element" internal-fsb-guid="ae9a328e" style={{display: (()=>{return this.getDisplayOf(QuoteType.AUCTIONING, true);})()}}>
                              <div className="container-fluid">
                                <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                                  <div className="internal-fsb-element col-12" internal-fsb-guid="64a6ac8c">
                                    <div className="container-fluid">
                                      <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                                        <div className="internal-fsb-element col-12 -fsb-preset-7a279686" internal-fsb-guid="8c2aa238" style={{'FsbInheritedPresets': '7a279686', 'paddingLeft': '0px', 'paddingRight': '0px'}}>
                                          ชื่อรายการ
                                        </div>
                                        <div className="internal-fsb-element col-12 -fsb-preset-4839e353" internal-fsb-guid="7484ac1e" style={{'FsbInheritedPresets': '4839e353', 'paddingLeft': '0px', 'paddingRight': '0px'}}>
                                          รายละเอียดโดยย่อ
                                        </div>
                                        <div className="internal-fsb-element col-12 -fsb-self-1715aae1" internal-fsb-guid="1715aae1">
                                          ตอนนี้คุณอยู่อันดับที่ 5 จาก 10 อันดับที่ลูกค้าสามารถเห็นได้ในกลุ่มที่เสนอครบ
                                        </div>
                                        <div className="internal-fsb-element col-12 -fsb-self-c6ba5b53" internal-fsb-guid="c6ba5b53">
                                          <div className="container-fluid">
                                            <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                                              <div className="internal-fsb-element col-4 offset-0 -fsb-self-65ec89d1" internal-fsb-guid="65ec89d1">
                                                <div className="container-fluid">
                                                  <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                                                    <div className="internal-fsb-element col-12" internal-fsb-guid="a818c946">
                                                      ชื่อวัสดุ
                                                    </div>
                                                    <div className="internal-fsb-element col-12" internal-fsb-guid="eccb7c51">
                                                      ขนาด
                                                    </div>
                                                    <div className="internal-fsb-element col-12" internal-fsb-guid="0e3365eb">
                                                      ปริมาณ
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="internal-fsb-element col-3 offset-0" internal-fsb-guid="e5e63918">
                                                <div className="container-fluid">
                                                  <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                                                    <label className="internal-fsb-element col-12 offset-0" internal-fsb-guid="b42d4545" style={{'paddingLeft': '0px', 'paddingRight': '0px', 'marginBottom': '3px'}}>
                                                      <div className="container-fluid">
                                                        <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                                                          <div className="internal-fsb-element -fsb-preset-b6c9ad89 col-2 offset-0" internal-fsb-guid="1832b944" style={{padding: '0px'}}>
                                                            <input style={{'display': 'block', 'paddingLeft': '0px', 'FsbInheritedPresets': 'b6c9ad89'}} type="radio" value="0" />
                                                          </div>
                                                          <div className="internal-fsb-element -fsb-preset-b5cd72c0 col-10 offset-0" internal-fsb-guid="b80041d3" style={{'FsbInheritedPresets': 'b5cd72c0'}}>
                                                            เจาะจง
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </label>
                                                    <label className="internal-fsb-element col-12 offset-0" internal-fsb-guid="eb192633" style={{'paddingLeft': '0px', 'paddingRight': '0px', 'marginBottom': '3px'}}>
                                                      <div className="container-fluid">
                                                        <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                                                          <div className="internal-fsb-element -fsb-preset-b6c9ad89 col-2 offset-0" internal-fsb-guid="b91e2739" style={{padding: '0px'}}>
                                                            <input style={{'display': 'block', 'paddingLeft': '0px', 'FsbInheritedPresets': 'b6c9ad89'}} type="radio" value="1" />
                                                          </div>
                                                          <div className="internal-fsb-element -fsb-preset-b5cd72c0 col-10 offset-0" internal-fsb-guid="58266972" style={{'FsbInheritedPresets': 'b5cd72c0'}}>
                                                            เทียบเท่า
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </label>
                                                    <label className="internal-fsb-element col-12 offset-0" internal-fsb-guid="2cb33325" style={{'paddingLeft': '0px', 'paddingRight': '0px', 'marginBottom': '3px'}}>
                                                      <div className="container-fluid">
                                                        <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                                                          <div className="internal-fsb-element -fsb-preset-b6c9ad89 col-2 offset-0" internal-fsb-guid="03aab0e5" style={{padding: '0px'}}>
                                                            <input style={{'display': 'block', 'paddingLeft': '0px', 'FsbInheritedPresets': 'b6c9ad89'}} type="radio" value="2" />
                                                          </div>
                                                          <div className="internal-fsb-element -fsb-preset-b5cd72c0 col-10 offset-0" internal-fsb-guid="5c2b0578" style={{'FsbInheritedPresets': 'b5cd72c0'}}>
                                                            ทดแทน
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </label>
                                                    <label className="internal-fsb-element col-12 offset-0" internal-fsb-guid="c1c5b10b" style={{'paddingLeft': '0px', 'paddingRight': '0px', 'marginBottom': '3px'}}>
                                                      <div className="container-fluid">
                                                        <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                                                          <div className="internal-fsb-element -fsb-preset-b6c9ad89 col-2 offset-0" internal-fsb-guid="957c1568" style={{padding: '0px'}}>
                                                            <input style={{'display': 'block', 'FsbInheritedPresets': 'b6c9ad89'}} type="radio" value="3" />
                                                          </div>
                                                          <div className="internal-fsb-element -fsb-preset-b5cd72c0 col-10 offset-0" internal-fsb-guid="a3b9410d" style={{'FsbInheritedPresets': 'b5cd72c0'}}>
                                                            ไม่มี
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </label>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="internal-fsb-element col-5 offset-0" internal-fsb-guid="483390a6">
                                                <div className="container-fluid">
                                                  <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                                                    <div className="internal-fsb-element col-12 offset-0" internal-fsb-guid="9c338431" style={{padding: '0px'}}>
                                                      <input className="form-control form-control-sm" style={{'display': 'block', 'width': '100%', 'marginBottom': '5px', 'fontSize': '12px'}} type="text" placeholder="เปลี่ยนวัสดุเป็น" />
                                                    </div>
                                                    <div className="internal-fsb-element col-12 offset-0" internal-fsb-guid="d913e6a1" style={{padding: '0px'}}>
                                                      <input className="form-control form-control-sm" style={{'display': 'block', 'width': '100%', 'marginBottom': '5px', 'fontSize': '12px'}} type="text" placeholder="เปลี่ยนขนาดเป็น" />
                                                    </div>
                                                    <div className="internal-fsb-element col-12 offset-0" internal-fsb-guid="c22ec668" style={{padding: '0px'}}>
                                                      <input className="form-control form-control-sm" style={{'display': 'block', 'width': '100%', 'fontSize': '12px'}} type="text" placeholder="เปลี่ยนปริมาณเป็น" />
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="internal-fsb-element col-12 -fsb-preset-1715aae1" internal-fsb-guid="da4a5daa" style={{'FsbInheritedPresets': '1715aae1'}}>
                                          เสนอราคาใหม่ที่ราคา
                                        </div>
                                        <div className="internal-fsb-element col-6 offset-3" internal-fsb-guid="c03d6613" style={{padding: '0px'}}>
                                          <input className="form-control form-control-sm" style={{'display': 'block', 'width': '100%'}} type="text" placeholder="ราคารวมทั้งหมด" />
                                        </div>
                                        <div className="internal-fsb-element col-1 offset-0" internal-fsb-guid="2b06dab6">
                                          บาท
                                        </div>
                                        <button className="internal-fsb-element internal-fsb-allow-cursor btn btn-primary btn-sm col-4 offset-4" internal-fsb-guid="9868a6d5" style={{'marginTop': '10px', 'marginBottom': '10px'}} type="button">
                                          <div className="internal-fsb-element" internal-fsb-guid="9868a6d5-text">
                                            เคาะ
                                          </div>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="internal-fsb-element" internal-fsb-guid="51201e78" style={{display: (()=>{return this.getDisplayOf(QuoteType.OFFERING, true);})()}}>
                              <div className="container-fluid">
                                <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                                  <div className="internal-fsb-element col-12" internal-fsb-guid="7b15e8a1">
                                    <div className="container-fluid">
                                      <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                                        <div className="internal-fsb-element col-12 -fsb-preset-7a279686" internal-fsb-guid="c7226b52" style={{'FsbInheritedPresets': '7a279686', 'paddingLeft': '0px', 'paddingRight': '0px'}}>
                                          ชื่อรายการ
                                        </div>
                                        <div className="internal-fsb-element col-12 -fsb-preset-4839e353" internal-fsb-guid="39ca61d5" style={{'FsbInheritedPresets': '4839e353', 'paddingLeft': '0px', 'paddingRight': '0px'}}>
                                          รายละเอียดโดยย่อ
                                        </div>
                                        <div className="internal-fsb-element col-12 -fsb-preset-1715aae1" internal-fsb-guid="e1b315be" style={{'FsbInheritedPresets': '1715aae1'}}>
                                          คุณอยู่อันดับที่ 2 จาก 10 อันดับที่ลูกค้าสามารถเห็นได้ในกลุ่มที่เสนอไม่ครบ
                                        </div>
                                        <div className="internal-fsb-element col-12 -fsb-preset-c6ba5b53" internal-fsb-guid="ce9a10c5" style={{'FsbInheritedPresets': 'c6ba5b53', 'background': 'rgba(217, 217, 217, 1)', 'borderLeftColor': 'rgba(128, 128, 128, 1)', 'borderRightColor': 'rgba(128, 128, 128, 1)', 'borderTopColor': 'rgba(128, 128, 128, 1)', 'borderBottomColor': 'rgba(128, 128, 128, 1)'}}>
                                          <div className="container-fluid">
                                            <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                                              <div className="internal-fsb-element col-4 offset-0 -fsb-preset-65ec89d1" internal-fsb-guid="19ce03e8" style={{'FsbInheritedPresets': '65ec89d1'}}>
                                                <div className="container-fluid">
                                                  <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                                                    <div className="internal-fsb-element col-12" internal-fsb-guid="07673d1a">
                                                      ชื่อวัสดุ
                                                    </div>
                                                    <div className="internal-fsb-element col-12" internal-fsb-guid="19d0b023">
                                                      ขนาด
                                                    </div>
                                                    <div className="internal-fsb-element col-12" internal-fsb-guid="bd0d3bad">
                                                      ปริมาณ
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="internal-fsb-element -fsb-preset-65ec89d1 col-3 offset-0" internal-fsb-guid="9ecd9ed0" style={{'FsbInheritedPresets': '65ec89d1'}}>
                                                <div className="container-fluid">
                                                  <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                                                    <div className="internal-fsb-element col-12" internal-fsb-guid="00758360" style={{'fontWeight': 'bold', 'marginBottom': '5px'}}>
                                                      สินค้าเทียบเคียง: ทดแทน
                                                    </div>
                                                    <div className="internal-fsb-element col-9 offset-0" internal-fsb-guid="1382e4c9" style={{padding: '0px'}}>
                                                      <input className="form-control form-control-sm" style={{'display': 'block', 'width': '100%', 'fontSize': '12px'}} type="text" placeholder="ราคาต่อหน่วย" />
                                                    </div>
                                                    <div className="internal-fsb-element col-3 offset-0" internal-fsb-guid="530bacd3" style={{'paddingTop': '4px', 'textAlign': 'left', 'paddingLeft': '0px'}}>
                                                      บาท
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="internal-fsb-element col-5 offset-0 -fsb-preset-65ec89d1" internal-fsb-guid="176a4c29" style={{'FsbInheritedPresets': '65ec89d1'}}>
                                                <div className="container-fluid">
                                                  <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                                                    <div className="internal-fsb-element col-12" internal-fsb-guid="b840c1c0" style={{'fontWeight': 'bold', 'marginBottom': '5px'}}>
                                                      เปลี่ยนวัสดุเป็น:
                                                    </div>
                                                    <div className="internal-fsb-element col-12" internal-fsb-guid="8656cea5">
                                                      ชื่อวัสดุใหม่
                                                    </div>
                                                    <div className="internal-fsb-element col-12" internal-fsb-guid="ed22bc9a">
                                                      ขนาดใหม่
                                                    </div>
                                                    <div className="internal-fsb-element col-12" internal-fsb-guid="a9a3406a">
                                                      ปริมาณใหม่
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
                                  <div className="internal-fsb-element col-12 -fsb-preset-1715aae1" internal-fsb-guid="53e2a8cc" style={{'FsbInheritedPresets': '1715aae1'}}>
                                    กรุณาระบุราคาต่อหน่วยทั้งหมดเพื่อคำนวณส่วนลด
                                  </div>
                                  <div className="internal-fsb-element col-6 offset-3" internal-fsb-guid="e68b9c07" style={{padding: '0px'}}>
                                    <input className="form-control form-control-sm" style={{'display': 'block', 'width': '100%', 'marginBottom': '5px'}} type="text" placeholder="ค่าขนส่ง (ถ้ามี)" />
                                  </div>
                                  <div className="internal-fsb-element col-1 offset-0" internal-fsb-guid="95c77e1a" style={{'marginBottom': '5px'}}>
                                    บาท
                                  </div>
                                  <div className="internal-fsb-element col-6 offset-3" internal-fsb-guid="dde4302b" style={{padding: '0px'}}>
                                    <input className="form-control form-control-sm" style={{'display': 'block', 'width': '100%'}} type="text" placeholder="ส่วนลด" disabled={true} />
                                  </div>
                                  <div className="internal-fsb-element col-1 offset-0" internal-fsb-guid="3c910e36">
                                    บาท
                                  </div>
                                  <div className="internal-fsb-element -fsb-preset-1715aae1 col-12 offset-0" internal-fsb-guid="5428078e" style={{'FsbInheritedPresets': '1715aae1'}}>
                                    คุณเสนอราคาที่ 125,000 บาท
                                  </div>
                                  <button className="internal-fsb-element internal-fsb-allow-cursor col-4 offset-4 btn btn-danger btn-sm" internal-fsb-guid="d3e31c36" style={{'marginTop': '10px', 'marginBottom': '10px'}} type="button">
                                    <div className="internal-fsb-element" internal-fsb-guid="d3e31c36-text">
                                      ยกเลิก
                                    </div>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="internal-fsb-element" internal-fsb-guid="76cdd2cd" style={{display: (()=>{return this.getDisplayOf(QuoteType.CHATTING, true);})()}}>
                              <div className="container-fluid">
                                <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                                  <div className="internal-fsb-element col-12" internal-fsb-guid="7958b83c">
                                    ABC
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="internal-fsb-element" internal-fsb-guid="3318b254" style={{display: (()=>{return this.getDisplayOf(QuoteType.PAID, true);})()}}>
                              <div className="container-fluid">
                                <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                                  <div className="internal-fsb-element col-12" internal-fsb-guid="a34ccc8e">
                                    ABC
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