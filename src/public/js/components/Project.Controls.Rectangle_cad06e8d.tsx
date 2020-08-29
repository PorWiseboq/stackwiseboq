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
  quoteType: QuoteType;
  selectedIndex: number;
  submitting: boolean;
  hasSubmitted: boolean;
  itemPrices: number[];
  remainingTimes: string[];
}

let DefaultProps = Object.assign({}, DefaultBaseProps, {
  
});
let DefaultState = Object.assign({}, DefaultBaseState, {
  quoteType: QuoteType.AUCTIONING,
  selectedIndex: 0,
  submitting: false,
  hasSubmitted: false,
  itemPrices: [],
  remainingTimes: []
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
    DataManipulationHelper.register("4a579143", "retrieve", ["1ae8405a","0856c24b"], {initClass: null, submitCrossType: null, enabledRealTimeUpdate: true, retrieveInto: null});
    DataManipulationHelper.register("c05b11c1", "retrieve", ["4cade2e7","93ab7a0b"], {initClass: null, submitCrossType: null, enabledRealTimeUpdate: true, retrieveInto: null});
    DataManipulationHelper.register("833e4eb9", "retrieve", ["d24ed774","6d57beb9"], {initClass: null, submitCrossType: null, enabledRealTimeUpdate: true, retrieveInto: null});
    DataManipulationHelper.register("e9c9b721", "retrieve", ["d1920261","c192b978"], {initClass: null, submitCrossType: null, enabledRealTimeUpdate: true, retrieveInto: null});
    DataManipulationHelper.register("e76846ad", "retrieve", ["31c75169"], {initClass: null, submitCrossType: null, enabledRealTimeUpdate: false, retrieveInto: "Quote[#i]"});
    DataManipulationHelper.register("802159d0", "retrieve", ["72aecc3a"], {initClass: null, submitCrossType: null, enabledRealTimeUpdate: false, retrieveInto: "Quote[#i]"});
    DataManipulationHelper.register("8cbc5b17", "retrieve", ["e8656190"], {initClass: null, submitCrossType: null, enabledRealTimeUpdate: false, retrieveInto: "Quote[#i]"});
    DataManipulationHelper.register("323ba37c", "retrieve", ["95270ad9"], {initClass: null, submitCrossType: null, enabledRealTimeUpdate: false, retrieveInto: "Quote[#i]"});
    DataManipulationHelper.register("9868a6d5", "upsert", ["1832b944","b91e2739","03aab0e5","957c1568","9c338431","c22ec668","d913e6a1","c03d6613","d30aa93b","ae7e2437","a5b102c4","1382e4c9"], {initClass: null, submitCrossType: "upsert", enabledRealTimeUpdate: false, retrieveInto: null});
  }
  // <---Auto[ClassBegin]
  
  // Declare class variables and functions here:
  //
  protected initialize(): void {
    window.setInterval((() => {
      this.refreshRemainingTime(false);
    }).bind(this), 1000);
    this.refreshRemainingTime(true);
  }
  
  protected componentDidMount(): void {
  	this.register();
  }
  
  protected componentWillUnmount(): void {
  }
  
  private getAuctionStatusDetail(i: number): string {
    const rank = this.getRank(i);
    const tag = this.getTag(i);
    
    if (rank == -1) return 'งานประมูลนี้ทางร้านค้ายังไม่เคยเคาะประมูลมาก่อน';
    if (rank == null) return 'งานประมูลของคุณยังไม่ได้ถูกจัดอันดับ... โปรดกรุณารอสักครู่';
    if (rank > 10) return 'งานประมูลนี้ทางร้านค้าเคยเคาะประมูลแล้วแต่พบว่าราคาแพงเกินไปจนหลุด 10 อันดับแรก';
    
    return `ตอนนี้คุณอยู่อันดับที่ ${rank} / 10 อันดับที่ลูกค้าสามารถเห็นได้ในกลุ่มที่${tag}`;
  }
  
  private getTitle(i: number): string {
    return this.getDataFromNotation('Quote[' + i + '].title');
  }
  
  private getRank(i: number): any {
    const auction = this.getDataFromNotation('Quote[' + i + '].Auction');
    const rank = this.getDataFromNotation('Rank');
    
    if (!auction || auction.length == 0) return -1;
    else {
      const aid = auction[0].columns['aid'];
      let r = null;
      
      for (let item of rank) {
        if (item.keys['aid'] == aid) {
          r = item.columns['rank'];
          break;
        }
      }
      
      return r;
    }
  }
  
  private getSubtitle(i: number): string {
    const rank = this.getRank(i);
    
    if (rank == -1) return '';
    if (rank == null) return 'ยังไม่ถูกจัดอันดับ';
    if (rank > 10) return 'ราคาแพงเกินไป';
    
    return `อันดับที่ ${rank} / 10`;
  }
  
  private getTag(i: number): string {
    const substitute = this.getDataFromNotation('Quote[' + i + '].substitute');
    const auction = this.getDataFromNotation('Quote[' + i + '].Auction');
    
    if (!auction || auction.length == 0) return 'ใหม่';
    else {
      let specific = true;
      
      for (const item of auction[0].relations['Substitute'].rows) {
        if (item.columns['type'] == 3) {
          specific = false;
          break;
        }
      }
      
      return (specific) ? 'เสนอครบ' : 'เสนอไม่ครบ';
    }
  }
  
  private hasError(i: number): boolean {
    const substitute = this.getDataFromNotation('Quote[' + i + '].substitute');
    const auction = this.getDataFromNotation('Quote[' + i + '].Auction');
    
    if (!auction || auction.length == 0) return false;
    else {
      for (const item of auction[0].relations['Substitute'].rows) {
        if (item.columns['type'] > substitute && item.columns['type'] != 3) {
          return true;
        }
      }
      
      return false;
    }
  }
  
  private isMatchedRank(i: number): boolean {
    if (i < 0 || i >= this.getDataFromNotation('Quote[#i].Rank').length) return false;
    
    return this.getDataFromNotation('Quote[#i].Auction.aid') == this.getDataFromNotation('Quote[#i].Rank')[i].keys['aid'];
  }
  
  private getRankDetail(i: number): string {
    if (this.isMatchedRank(i - 1) || this.isMatchedRank(i) || this.isMatchedRank(i + 1)) {
      return this.getDataFromNotation('Quote[#i].Rank')[i].columns['price'].toString() + ' บาท';
    } else {
      return `อันดับที่ ${i + 1}`;
    }
  }
  
  private refreshRemainingTime(refresh: boolean) {
    if (refresh) {
      this.state.remainingTimes = [];
    }
    
    const total = this.getDataFromNotation('Quote').length;
    const remainingTimes = this.state.remainingTimes;
    for (let i=0; i<total; i++) {
      remainingTimes[i] = this.getRemainingTime(i);
    }
    this.setState({remainingTimes: remainingTimes});
  }
  
  private getRemainingTime(i: number): string {
    const createdAt = this.getDataFromNotation('Quote[' + i + '].createdAt');
    const hoursChecked = this.getDataFromNotation('Quote[' + i + '].hoursChecked');
    let auctionHours = (hoursChecked) ? parseInt(this.getDataFromNotation('Quote[' + i + '].hours')) : 24;
    
    if (isNaN(auctionHours)) auctionHours = 24;
    
    const remaining = Math.max(0, new Date(createdAt).getTime() + auctionHours * 60 * 60 * 1000 - new Date().getTime());
    let seconds = remaining / 1000;
    let minutes = seconds / 60;
    let hours = minutes / 60;
    
    seconds = Math.floor(seconds) % 60;
    minutes = Math.floor(minutes) % 60;
    hours = Math.floor(hours);
    
    let _seconds = '';
    let _minutes = '';
    let _hours = '';
    
    if (seconds < 10) _seconds = '0' + seconds;
    else _seconds = seconds.toString();
    
    if (minutes < 10) _minutes = '0' + minutes;
    else _minutes = minutes.toString();
    
    if (hours < 10) _hours = '0' + hours;
    else _hours = hours.toString();
    
    return `${_hours}:${_minutes}:${_seconds}`;
  }
  
  private getRemainingTimeDisplay(i: number, fullmode: boolean=false): string {
    let remaining = (this.state.remainingTimes[i] !== undefined) ? this.state.remainingTimes[i] : '';
    if (fullmode) {
      if (remaining) {
        if (remaining == '00:00:00') {
          return 'งานประมูลนี้หมดเวลาแล้ว';
        } else {
          const splited = remaining.split(':');
          return `คุณเหลือเวลาอีก ${parseInt(splited[0])} ชั่วโมง ${parseInt(splited[1])} นาที ${parseInt(splited[2])} วินาที`;
        }
      } else {
        return '';
      }
    } else {
      return remaining;
    }
  }
  
  private getFormEnabledState() {
    return this.props.submitting || (this.getRemainingTimeDisplay(this.state.selectedIndex) == '00:00:00');
  }
  
  private onPriceChanged(index: number, price: number) {
    this.state.itemPrices[index] = price;
    
    const count = this.getDataFromNotation('Quote[#i].Listing').length;
    let sum = 0;
    for (let i=0; i<count; i++) {
      sum += this.state.itemPrices[i];
    }
    
    const element = ReactDOM.findDOMNode(this.refs.price);
    if (element) {
      if (isNaN(sum)) element.value = "กรุณากรอกราคาต่อหน่วยให้ครบ";
      else element.value = sum.toString();
    }
  }
  
  // Providing data array base on dot notation:
  // 
  protected getDataFromNotation(notation: string, inArray: boolean=false): any {
    notation = notation.replace('#i', this.state.selectedIndex.toString());
    
    if (notation.match(/^Quote\[[0-9]+\].Listing$/)) {
      let rows = super.getDataFromNotation(notation, true);
      let substitute = super.getDataFromNotation(`${notation.split('.')[0]}.Auction.Substitute`, true);
      
      for (let row of rows) {
      	row.relations['Substitute'] = {
      	  source: null,
      	  group: 'Substitute',
      	  rows: substitute.filter(_row => _row.keys['lid'] == row.keys['lid'])
      	};
      }
      
      return rows;
    } else if (notation.match(/^Quote\[[0-9]+\].Rank$/)) {
      const qid = this.getDataFromNotation('Quote[' + this.state.selectedIndex.toString() + '].qid');
      const rows = this.getDataFromNotation('Rank').filter(rank => rank.columns['qid'] == qid);
      
      rows.sort((a, b) => {
        return (a.columns['rank'] < b.columns['rank']) ? -1 : 1;
      });
      
      return rows;
    } else {
      return super.getDataFromNotation(notation, inArray);
    }
  }
  
  private getDisplayOf(quoteType: QuoteType, active: boolean) {
    if (active) return (this.state.quoteType === quoteType) ? 'block' : 'none';
    else return (this.state.quoteType === quoteType) ? 'none' : 'block';
  }
  
  // Auto[Merging]--->
  protected onButtonSubmitting_4a579143(event: Event) {

    // Handle the event of onButtonSubmitting (Button 1) here:
    // 
    if (this.state.submitting) return EventHelper.cancel(event);
    
  }

  protected onButtonSuccess_4a579143(event: Event) {

    // Handle the event of onButtonSuccess (Button 1) here:
    // 
    this.setState({quoteType: QuoteType.AUCTIONING, selectedIndex: 0, hasSubmitted: false});
    window.setTimeout(() => {
      this.refreshRemainingTime(true);
    }, 0);
    
  }

  protected onButtonSubmitting_c05b11c1(event: Event) {

    // Handle the event of onButtonSubmitting (Button 2) here:
    // 
    if (this.state.submitting) return EventHelper.cancel(event);
    
  }

  protected onButtonSuccess_c05b11c1(event: Event) {

    // Handle the event of onButtonSuccess (Button 2) here:
    // 
    this.setState({quoteType: QuoteType.OFFERING, selectedIndex: 0, hasSubmitted: false});
    window.setTimeout(() => {
      this.refreshRemainingTime(true);
    }, 0);
    
  }

  protected onButtonSubmitting_833e4eb9(event: Event) {

    // Handle the event of onButtonSubmitting (Button 3) here:
    // 
    if (this.state.submitting) return EventHelper.cancel(event);
    
  }

  protected onButtonSuccess_833e4eb9(event: Event) {

    // Handle the event of onButtonSuccess (Button 3) here:
    // 
    this.setState({quoteType: QuoteType.CHATTING, selectedIndex: 0, hasSubmitted: false});
    window.setTimeout(() => {
      this.refreshRemainingTime(true);
    }, 0);
    
  }

  protected onButtonSubmitting_e9c9b721(event: Event) {

    // Handle the event of onButtonSubmitting (Button 4) here:
    // 
    if (this.state.submitting) return EventHelper.cancel(event);
    
  }

  protected onButtonSuccess_e9c9b721(event: Event) {

    // Handle the event of onButtonSuccess (Button 4) here:
    // 
    this.setState({quoteType: QuoteType.PAID, selectedIndex: 0, hasSubmitted: false});
    window.setTimeout(() => {
      this.refreshRemainingTime(true);
    }, 0);
    
  }

  protected onButtonSubmitting_e76846ad(event: Event) {

    // Handle the event of onButtonSubmitting (Button 5) here:
    // 
    if (this.state.submitting) return EventHelper.cancel(event);
    
  }

  protected onButtonSuccess_e76846ad(event: Event) {

    // Handle the event of onButtonSuccess (Button 5) here:
    // 
    let element = EventHelper.getOriginalElement(event);
    
    this.state.selectedIndex = parseInt(element.getAttribute('data-index'));
    this.state.hasSubmitted = false;
    
    const price = ReactDOM.findDOMNode(this.refs.price);
    const auction = this.getDataFromNotation('Quote[#i].Auction');
    
    if (auction && auction.length != 0) {
      price.value = auction[0].columns['price'];
    } else {
      price.value = '';
    }
    
    this.forceUpdate();
    
  }

  protected onButtonSubmitting_802159d0(event: Event) {

    // Handle the event of onButtonSubmitting (Button 6) here:
    // 
    if (this.state.submitting) return EventHelper.cancel(event);
    
  }

  protected onButtonSuccess_802159d0(event: Event) {

    // Handle the event of onButtonSuccess (Button 6) here:
    // 
    let element = EventHelper.getOriginalElement(event);
    
    this.state.selectedIndex = parseInt(element.getAttribute('data-index'));
    this.state.hasSubmitted = false;
    
    this.forceUpdate();
    
  }

  protected onButtonSubmitting_8cbc5b17(event: Event) {

    // Handle the event of onButtonSubmitting (Button 7) here:
    // 
    if (this.state.submitting) return EventHelper.cancel(event);
    
  }

  protected onButtonSuccess_8cbc5b17(event: Event) {

    // Handle the event of onButtonSuccess (Button 7) here:
    // 
    let element = EventHelper.getOriginalElement(event);
    
    this.state.selectedIndex = parseInt(element.getAttribute('data-index'));
    this.state.hasSubmitted = false;
    
    this.forceUpdate();
    
  }

  protected onButtonSubmitting_323ba37c(event: Event) {

    // Handle the event of onButtonSubmitting (Button 8) here:
    // 
    if (this.state.submitting) return EventHelper.cancel(event);
    
  }

  protected onButtonSuccess_323ba37c(event: Event) {

    // Handle the event of onButtonSuccess (Button 8) here:
    // 
    let element = EventHelper.getOriginalElement(event);
    
    this.state.selectedIndex = parseInt(element.getAttribute('data-index'));
    this.state.hasSubmitted = false;
    
    this.forceUpdate();
    
  }

  protected onButtonSubmitting_9868a6d5(event: Event) {

    // Handle the event of onButtonSubmitting (Bid) here:
    // 
    this.state.submitting = true;
    this.state.hasSubmitted = true;
    this.forceUpdate();
    
  }

  protected onButtonSubmitted_9868a6d5(event: Event) {

    // Handle the event of onButtonSubmitted (Bid) here:
    // 
    this.state.submitting = false;
    this.forceUpdate();
    
  }

  protected onButtonSuccess_9868a6d5(event: Event) {

    // Handle the event of onButtonSuccess (Bid) here:
    // 
    const customEvent = event as CustomEvent;
    const rows = this.getDataFromNotation('Quote[#i].Auction');
    if (rows && customEvent.detail.results.results[0]) {
      rows[0] = customEvent.detail.results.results[0];
    }
    this.forceUpdate();
    
    alert('คุณเคาะประมูลเสร็จเรียบร้อยแล้ว');
    
  }
  // <---Auto[Merging]
  
  // Auto[ClassEnd]--->
  protected render(): any {
    return pug `
      div(style=Object.assign({'flexDirection': 'column', 'WebkitFlexDirection': 'column', 'MsFlexDirection': 'column', 'height': '100vh', 'display': 'flex', 'background': 'linear-gradient(15deg, rgba(153, 24, 245, 1) 0%, rgba(22, 98, 250, 1) 100%)', 'FsbBackgroundType': 'linear', 'paddingLeft': '0px', 'paddingRight': '0px', 'paddingTop': '0px', 'paddingBottom': '0px', 'width': '100vw'}, this.props.forward && this.props.forward.styles || {}), className="internal-fsb-element internal-fsb-allow-cursor col-12 " + (this.props.forward && this.props.forward.classes || ''), internal-fsb-guid="cad06e8d")
        .internal-fsb-element(style={'background': 'rgba(255, 255, 255, 0)', 'color': 'rgba(255, 255, 255, 1)'}, internal-fsb-guid="6a56a9be")
          .container-fluid
            .row.internal-fsb-strict-layout.internal-fsb-allow-cursor(style={'display': 'block'})
              .internal-fsb-element.offset-0(style={'fontSize': '24px', 'marginTop': '10px', 'marginLeft': '10px', 'marginBottom': '10px', 'float': 'left'}, internal-fsb-guid="c6200677")
                | WiseBOQ
              Button.internal-fsb-element.internal-fsb-allow-cursor.btn.btn-primary(style={'paddingLeft': '15px', 'paddingRight': '15px', 'float': 'right', 'fontSize': '14px', 'marginTop': '10px', 'marginRight': '10px'}, type="button", internal-fsb-guid="108bb2b9")
                .internal-fsb-element(internal-fsb-guid="108bb2b9-text")
                  | ออกจากระบบ
        .internal-fsb-element.internal-fsb-allow-cursor(style={'background': 'rgba(255, 255, 255, 0)', 'flexGrow': '1', 'WebkitFlexGrow': '1', 'position': 'relative'}, internal-fsb-guid="a30c3884")
          .internal-fsb-element.internal-fsb-allow-cursor(style={'height': '100%', 'width': '100%', 'position': 'absolute', 'top': '0px', 'left': '0px', 'right': '0px', 'bottom': '0px'}, internal-fsb-guid="9b826999")
            .internal-fsb-element.internal-fsb-allow-cursor(style={'height': '100%', 'width': '100%', 'position': 'relative', 'display': 'flex', 'flexDirection': 'row', 'WebkitFlexDirection': 'row', 'MsFlexDirection': 'row'}, internal-fsb-guid="e2254eb7")
              .internal-fsb-element.internal-fsb-allow-cursor(style={'borderRightColor': 'rgba(255, 255, 255, 1)', 'background': 'rgba(255, 255, 255, 0)', 'color': 'rgba(255, 255, 255, 1.0)', 'verticalAlign': 'top', 'position': 'relative', 'overflowY': 'auto', 'MsOverflowY': 'auto', 'flexGrow': '0', 'flexShrink': '0', 'flexBasis': '60px', 'WebkitFlexBasis': '60px'}, internal-fsb-guid="712e9de1")
                .internal-fsb-element(style={'fontSize': '11px', 'cursor': 'default'}, internal-fsb-guid="74e4253b")
                  .container-fluid
                    .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                      .internal-fsb-element.col-12(style={'marginBottom': '10px', 'marginTop': '10px', 'paddingLeft': '5px', 'paddingRight': '5px'}, internal-fsb-guid="ca80140b")
                        .container-fluid
                          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                            Button.internal-fsb-element.internal-fsb-allow-cursor(style={'background': 'rgba(255, 255, 255, 0)', 'borderTopStyle': 'none', 'borderLeftStyle': 'none', 'borderRightStyle': 'none', 'borderBottomStyle': 'none', 'paddingTop': '5px', 'paddingLeft': '5px', 'paddingRight': '5px', 'paddingBottom': '5px', display: (()=>{return this.getDisplayOf(QuoteType.AUCTIONING, false);})()}, onClick=((event) => { window.internalFsbSubmit('4a579143', 'Quote', event, ((results) => { this.manipulate('4a579143', 'Quote', results); }).bind(this)); }).bind(this), type="button", onSubmitting=this.onButtonSubmitting_4a579143.bind(this), onSuccess=this.onButtonSuccess_4a579143.bind(this), internal-fsb-guid="4a579143")
                              .internal-fsb-element(style={padding: '0px'}, internal-fsb-guid="04b90b11")
                                img(style={'display': 'block', 'opacity': '0.5', 'WebkitOpacity': '0.5', 'width': '40px', 'height': '40px', 'cursor': 'pointer'}, src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/bid-inactive.png")
                            input.internal-fsb-element(type="hidden", value="1", internal-fsb-guid="1ae8405a")
                            .internal-fsb-element.col-12(style={'textAlign': 'center', 'paddingLeft': '0px', 'paddingRight': '0px', 'color': 'rgba(255, 255, 255, 0.45)', display: (()=>{return this.getDisplayOf(QuoteType.AUCTIONING, false);})()}, internal-fsb-guid="9a91246d")
                              | เคาะประมูล
                            .internal-fsb-element.col-12(style={display: (()=>{return this.getDisplayOf(QuoteType.AUCTIONING, true);})(), padding: '0px'}, internal-fsb-guid="42b3dc9b")
                              img(style={'display': 'block', 'width': '40px', 'height': '40px', 'marginTop': '5px', 'borderRightWidth': '5px', 'marginLeft': '5px', 'marginBottom': '5px'}, src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/bid-active.png")
                            .internal-fsb-element.col-12(style={'textAlign': 'center', 'paddingLeft': '0px', 'paddingRight': '0px', display: (()=>{return this.getDisplayOf(QuoteType.AUCTIONING, true);})()}, internal-fsb-guid="51315831")
                              | เคาะประมูล
                      .internal-fsb-element.col-12(style={'marginBottom': '10px', 'paddingLeft': '5px', 'paddingRight': '5px'}, internal-fsb-guid="7b54582d")
                        .container-fluid
                          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                            Button.internal-fsb-element.internal-fsb-allow-cursor(style={'background': 'rgba(255, 255, 255, 0)', 'borderTopStyle': 'none', 'borderLeftStyle': 'none', 'borderRightStyle': 'none', 'borderBottomStyle': 'none', 'paddingTop': '5px', 'paddingLeft': '5px', 'paddingRight': '5px', 'paddingBottom': '5px', display: (()=>{return this.getDisplayOf(QuoteType.OFFERING, false);})()}, onClick=((event) => { window.internalFsbSubmit('c05b11c1', 'Quote', event, ((results) => { this.manipulate('c05b11c1', 'Quote', results); }).bind(this)); }).bind(this), type="button", onSuccess=this.onButtonSuccess_c05b11c1.bind(this), onSubmitting=this.onButtonSubmitting_c05b11c1.bind(this), internal-fsb-guid="c05b11c1")
                              .internal-fsb-element(style={padding: '0px'}, internal-fsb-guid="b6ec8d55")
                                img(style={'display': 'block', 'width': '40px', 'opacity': '0.5', 'WebkitOpacity': '0.5', 'height': '40px', 'cursor': 'pointer'}, src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/bidded-inactive.png")
                            input.internal-fsb-element(type="hidden", value="2", internal-fsb-guid="4cade2e7")
                            .internal-fsb-element.col-12(style={'textAlign': 'center', 'paddingLeft': '0px', 'paddingRight': '0px', 'color': 'rgba(255, 255, 255, 0.45)', display: (()=>{return this.getDisplayOf(QuoteType.OFFERING, false);})()}, internal-fsb-guid="ac1a1bce")
                              | ประมูลผ่าน
                            .internal-fsb-element.col-12(style={display: (()=>{return this.getDisplayOf(QuoteType.OFFERING, true);})(), padding: '0px'}, internal-fsb-guid="40ada351")
                              img(style={'display': 'block', 'width': '40px', 'height': '40px', 'marginTop': '5px', 'marginLeft': '5px', 'marginRight': '5px', 'marginBottom': '5px'}, src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/bidded-active.png")
                            .internal-fsb-element.col-12(style={'textAlign': 'center', 'paddingLeft': '0px', 'paddingRight': '0px', display: (()=>{return this.getDisplayOf(QuoteType.OFFERING, true);})()}, internal-fsb-guid="936e036b")
                              | ประมูลผ่าน
                      .internal-fsb-element.col-12(style={'marginBottom': '10px', 'paddingLeft': '5px', 'paddingRight': '5px'}, internal-fsb-guid="12a672c3")
                        .container-fluid
                          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                            Button.internal-fsb-element.internal-fsb-allow-cursor(style={'background': 'rgba(255, 255, 255, 0)', 'borderTopStyle': 'none', 'borderLeftStyle': 'none', 'borderRightStyle': 'none', 'borderBottomStyle': 'none', 'paddingTop': '5px', 'paddingLeft': '5px', 'paddingRight': '5px', 'paddingBottom': '5px', display: (()=>{return this.getDisplayOf(QuoteType.CHATTING, false);})()}, onClick=((event) => { window.internalFsbSubmit('833e4eb9', 'Quote', event, ((results) => { this.manipulate('833e4eb9', 'Quote', results); }).bind(this)); }).bind(this), type="button", onSuccess=this.onButtonSuccess_833e4eb9.bind(this), onSubmitting=this.onButtonSubmitting_833e4eb9.bind(this), internal-fsb-guid="833e4eb9")
                              .internal-fsb-element(style={padding: '0px'}, internal-fsb-guid="4bac7ab7")
                                img(style={'display': 'block', 'width': '40px', 'opacity': '0.5', 'WebkitOpacity': '0.5', 'height': '40px', 'cursor': 'pointer'}, src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/chat-inactive.png")
                            input.internal-fsb-element(type="hidden", value="3", internal-fsb-guid="d24ed774")
                            .internal-fsb-element.col-12(style={'textAlign': 'center', 'paddingLeft': '0px', 'paddingRight': '0px', 'color': 'rgba(255, 255, 255, 0.45)', display: (()=>{return this.getDisplayOf(QuoteType.CHATTING, false);})()}, internal-fsb-guid="8a12a919")
                              | คุยกับลูกค้า
                            .internal-fsb-element.col-12(style={display: (()=>{return this.getDisplayOf(QuoteType.CHATTING, true);})(), padding: '0px'}, internal-fsb-guid="7eb8a313")
                              img(style={'display': 'block', 'width': '40px', 'height': '40px', 'marginTop': '5px', 'marginRight': '5px', 'marginBottom': '5px', 'marginLeft': '5px'}, src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/chat-active.png")
                            .internal-fsb-element.col-12(style={'textAlign': 'center', 'paddingLeft': '0px', 'paddingRight': '0px', display: (()=>{return this.getDisplayOf(QuoteType.CHATTING, true);})()}, internal-fsb-guid="579741b7")
                              | คุยกับลูกค้า
                      .internal-fsb-element.col-12(style={'paddingLeft': '5px', 'paddingRight': '5px'}, internal-fsb-guid="9a5131da")
                        .container-fluid
                          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                            Button.internal-fsb-element.internal-fsb-allow-cursor(style={'background': 'rgba(255, 255, 255, 0)', 'borderTopStyle': 'none', 'borderLeftStyle': 'none', 'borderRightStyle': 'none', 'borderBottomStyle': 'none', 'paddingTop': '5px', 'paddingLeft': '5px', 'paddingRight': '5px', 'paddingBottom': '5px', display: (()=>{return this.getDisplayOf(QuoteType.PAID, false);})()}, onClick=((event) => { window.internalFsbSubmit('e9c9b721', 'Quote', event, ((results) => { this.manipulate('e9c9b721', 'Quote', results); }).bind(this)); }).bind(this), type="button", onSuccess=this.onButtonSuccess_e9c9b721.bind(this), onSubmitting=this.onButtonSubmitting_e9c9b721.bind(this), internal-fsb-guid="e9c9b721")
                              .internal-fsb-element(style={padding: '0px'}, internal-fsb-guid="6b7e8340")
                                img(style={'display': 'block', 'width': '40px', 'height': '40px', 'opacity': '0.5', 'WebkitOpacity': '0.5', 'cursor': 'pointer'}, src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/sold-inactive.png")
                            input.internal-fsb-element(type="hidden", value="4", internal-fsb-guid="d1920261")
                            .internal-fsb-element.col-12(style={'textAlign': 'center', 'color': 'rgba(255, 255, 255, 0.45)', 'paddingLeft': '0px', 'paddingRight': '0px', display: (()=>{return this.getDisplayOf(QuoteType.PAID, false);})()}, internal-fsb-guid="83e40405")
                              | จ่ายเงินแล้ว
                            .internal-fsb-element.col-12.offset-0(style={display: (()=>{return this.getDisplayOf(QuoteType.PAID, true);})(), padding: '0px'}, internal-fsb-guid="86510a55")
                              img(style={'display': 'block', 'width': '40px', 'height': '40px', 'marginTop': '5px', 'marginRight': '5px', 'marginBottom': '5px', 'marginLeft': '5px'}, src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/sold-active.png")
                            .internal-fsb-element.col-12(style={'textAlign': 'center', 'paddingLeft': '0px', 'paddingRight': '0px', display: (()=>{return this.getDisplayOf(QuoteType.PAID, true);})()}, internal-fsb-guid="b4775a3d")
                              | จ่ายเงินแล้ว
              .internal-fsb-element.internal-fsb-allow-cursor(style={'borderRightColor': 'rgba(22, 98, 250, 1)', 'background': 'rgba(255, 255, 255, 1)', 'flexGrow': '1', 'WebkitFlexGrow': '1'}, internal-fsb-guid="3e557242")
                .internal-fsb-element(style={'width': '100%', 'height': '100%', 'borderBottomColor': 'rgba(22, 98, 250, 1)', 'position': 'relative', 'display': 'flex', 'flexDirection': 'column', 'WebkitFlexDirection': 'column', 'MsFlexDirection': 'column'}, internal-fsb-guid="b3410868")
                  .internal-fsb-element(style={'borderBottomStyle': 'solid', 'borderBottomColor': 'rgba(22, 98, 250, 1)', 'borderBottomWidth': '2px', 'paddingTop': '10px', 'paddingBottom': '10px'}, internal-fsb-guid="4069ed4d")
                    .container-fluid
                      .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                        .internal-fsb-element.col-12(style={display: (()=>{return this.getDisplayOf(QuoteType.AUCTIONING, true);})()}, internal-fsb-guid="88db4eda")
                          .container-fluid
                            .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                              .internal-fsb-element.col-1.offset-0(style={padding: '0px'}, internal-fsb-guid="34a98650")
                                img(style={'display': 'block', 'width': '100%'}, src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/bid-active.png")
                              .internal-fsb-element.col-11.offset-0(internal-fsb-guid="5775d3be")
                                .container-fluid
                                  .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                    .internal-fsb-element.col-12.-fsb-preset-7a279686(style={'textAlign': 'left', 'FsbInheritedPresets': '7a279686'}, internal-fsb-guid="2434192c")
                                      | เคาะประมูล
                                    .internal-fsb-element.col-12.-fsb-preset-4839e353(style={'FsbInheritedPresets': '4839e353', 'textAlign': 'left'}, internal-fsb-guid="49d55ce2")
                                      | หน้านี้จะแสดงงานประมูลวัสดุก่อสร้างทั้งหมดที่คุณสามารถเคาะราคาได้ กรุณาระบุราคาของแต่ละรายการก่อนที่เวลาจะหมด
                        .internal-fsb-element.col-12(style={display: (()=>{return this.getDisplayOf(QuoteType.OFFERING, true);})()}, internal-fsb-guid="0d656c9d")
                          .container-fluid
                            .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                              .internal-fsb-element.col-1.offset-0(style={padding: '0px'}, internal-fsb-guid="44d05cb6")
                                img(style={'display': 'block', 'width': '100%'}, src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/bidded-active.png")
                              .internal-fsb-element.col-11.offset-0(internal-fsb-guid="945cdc26")
                                .container-fluid
                                  .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                    .internal-fsb-element.col-12.-fsb-preset-7a279686(style={'textAlign': 'left', 'FsbInheritedPresets': '7a279686'}, internal-fsb-guid="cad0c464")
                                      | ประมูลผ่าน
                                    .internal-fsb-element.col-12.-fsb-preset-4839e353(style={'FsbInheritedPresets': '4839e353', 'textAlign': 'left'}, internal-fsb-guid="4bb72418")
                                      | งานประมูลราคาวัสดุก่อสร้างซึ่งผ่านงานประมูล กำลังรอลูกค้าตัดสินใจเลือกซื้ออยู่
                        .internal-fsb-element.col-12(style={display: (()=>{return this.getDisplayOf(QuoteType.CHATTING, true);})()}, internal-fsb-guid="ba43b015")
                          .container-fluid
                            .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                              .internal-fsb-element.offset--1.col-1.offset-0(style={padding: '0px'}, internal-fsb-guid="694bb341")
                                img(style={'display': 'block', 'width': '100%'}, src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/chat-active.png")
                              .internal-fsb-element.col-11.offset-0(internal-fsb-guid="6daabaa5")
                                .container-fluid
                                  .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                    .internal-fsb-element.col-12.-fsb-preset-7a279686(style={'textAlign': 'left', 'FsbInheritedPresets': '7a279686'}, internal-fsb-guid="53985b74")
                                      | คุยกับลูกค้า
                                    .internal-fsb-element.col-12.-fsb-preset-4839e353(style={'FsbInheritedPresets': '4839e353', 'textAlign': 'left'}, internal-fsb-guid="9a4086b9")
                                      | ระบบปฏิสัมพันธ์กับลูกค้าผ่านการพูดคุยกันผ่านข้อความเพื่อตอบคำถามก่อนที่ลูกค้าจะตัดสินใจเลือกซื้อ
                        .internal-fsb-element.col-12(style={display: (()=>{return this.getDisplayOf(QuoteType.PAID, true);})()}, internal-fsb-guid="2d35d6ec")
                          .container-fluid
                            .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                              .internal-fsb-element.col-1.offset-0(style={padding: '0px'}, internal-fsb-guid="83bea00c")
                                img(style={'display': 'block', 'width': '100%'}, src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/sold-active.png")
                              .internal-fsb-element.col-11.offset-0(internal-fsb-guid="3231834e")
                                .container-fluid
                                  .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                    .internal-fsb-element.-fsb-preset-7a279686.col-12.offset-0(style={'FsbInheritedPresets': '7a279686'}, internal-fsb-guid="05491a78")
                                      | จ่ายเงินแล้ว
                                    .internal-fsb-element.-fsb-preset-4839e353.col-12.offset-0(style={'FsbInheritedPresets': '4839e353'}, internal-fsb-guid="8d41bdab")
                                      | งานประมูลราคาวัสดุก่อสร้างที่ลูกค้าจ่ายเงินเรียบร้อยแล้วและรอทาง WiseBOQ โอนเงินไปให้ร้านค้าเพื่อทำการจัดส่งสินค้าต่อไป
                  .internal-fsb-element.internal-fsb-allow-cursor(style={'background': 'rgba(255, 255, 255, 1)', 'flexGrow': '1', 'WebkitFlexGrow': '1', 'position': 'relative'}, internal-fsb-guid="ddec7e5c")
                    .internal-fsb-element.internal-fsb-allow-cursor(style={'height': '100%', 'width': '100%', 'position': 'absolute', 'top': '0px', 'left': '0px', 'bottom': '0px', 'right': '0px'}, internal-fsb-guid="71616aa2")
                      .internal-fsb-element.internal-fsb-allow-cursor(style={'width': '100%', 'height': '100%', 'position': 'relative', 'display': 'flex'}, internal-fsb-guid="2dbce05c")
                        .internal-fsb-element.internal-fsb-allow-cursor(style={'borderRightWidth': '2px', 'width': '200px', 'borderRightStyle': 'solid', 'borderRightColor': 'rgba(22, 98, 250, 1)', 'position': 'relative'}, internal-fsb-guid="03a20d7c")
                          .internal-fsb-element.internal-fsb-allow-cursor(style={'borderRightColor': 'rgba(22, 98, 250, 1)', 'overflowX': 'hidden', 'MsOverflowX': 'hidden', 'overflowY': 'auto', 'MsOverflowY': 'auto', 'position': 'absolute', 'top': '0px', 'left': '0px', 'bottom': '0px', 'right': '0px', 'paddingTop': '5px', 'paddingLeft': '5px', 'paddingRight': '5px'}, internal-fsb-guid="394c4745")
                            .internal-fsb-element(style={display: (()=>{return this.getDisplayOf(QuoteType.AUCTIONING, true);})()}, internal-fsb-guid="c3d853d0")
                              .container-fluid
                                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                  each data, i in this.getDataFromNotation("Quote", true)
                                    Button.internal-fsb-element.internal-fsb-allow-cursor.-fsb-self-e76846ad(style={background: (()=>{return (this.state.selectedIndex == i) ? '#007BFF' : ((this.hasError(i)) ? '#ffe0b2' : '');})(), color: (()=>{return (this.state.selectedIndex == i) ? '#FFFFFF' : '';})(), borderTopColor: (()=>{return (this.hasError(i)) ? '#e65100' : '';})(), borderRightColor: (()=>{return (this.hasError(i)) ? '#e65100' : '';})(), borderBottomColor: (()=>{return (this.hasError(i)) ? '#e65100' : '';})(), borderLeftColor: (()=>{return (this.hasError(i)) ? '#e65100' : '';})()}, key="item_" + i, onClick=((event) => { window.internalFsbSubmit('e76846ad', 'Listing', event, ((results) => { this.manipulate('e76846ad', 'Listing', results); }).bind(this)); }).bind(this), type="button", data-index=i + '', onSubmitting=this.onButtonSubmitting_e76846ad.bind(this), onSuccess=this.onButtonSuccess_e76846ad.bind(this), internal-fsb-guid="e76846ad")
                                      input.internal-fsb-element.col-12(type="hidden", value=this.getDataFromNotation("Quote[" + i + "].qid"), internal-fsb-guid="31c75169")
                                      .internal-fsb-element.-fsb-self-5a671a7d(style={'background': 'rgba(214, 237, 255, 0)', 'borderTopColor': 'rgba(77, 195, 250, 1)', 'borderLeftColor': 'rgba(77, 195, 250, 1)', 'borderRightColor': 'rgba(77, 195, 250, 1)', 'borderBottomColor': 'rgba(77, 195, 250, 1)', 'FsbReusableName': '', 'FsbReusableId': '5a671a7d', 'FsbInheritedPresets': ''}, internal-fsb-guid="5a671a7d")
                                        .container-fluid
                                          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                            .internal-fsb-element.-fsb-self-49a6327a.col-9.offset-0(style={color: (()=>{return (this.state.selectedIndex == i) ? '#FFFFFF' : ((this.hasError(i)) ? '#e65100' : '');})()}, internal-fsb-guid="49a6327a")
                                              | #{this.getTitle(i)}
                                            .internal-fsb-element.col-3.offset-0(style={'paddingLeft': '0px', 'paddingRight': '0px', 'textAlign': 'center', 'fontSize': '10px', 'color': (()=>{return (this.state.selectedIndex == i) ? '#FFFFFF' : (this.hasError(i) ? '#e65100' : '');})() || 'rgba(22, 98, 250, 1)', 'lineHeight': '19px', 'verticalAlign': 'middle'}, internal-fsb-guid="e267eda5")
                                              | #{this.state.remainingTimes[i]}
                                            .internal-fsb-element.col-7.offset-0.-fsb-self-4aee31ab(style={color: (()=>{return (this.state.selectedIndex == i) ? '#FFFFFF' : (this.hasError(i) ? '#e65100' : '');})()}, internal-fsb-guid="4aee31ab")
                                              | #{this.getSubtitle(i)}
                                            .internal-fsb-element.col-5.offset-0.-fsb-self-3bec5885(style={background: (()=>{return (this.hasError(i) ? '#e65100' : '');})()}, internal-fsb-guid="3bec5885")
                                              | #{this.getTag(i)}
                            .internal-fsb-element.col-12(style={'paddingLeft': '0px', 'paddingRight': '0px', display: (()=>{return this.getDisplayOf(QuoteType.OFFERING, true);})()}, internal-fsb-guid="24d70384")
                              .container-fluid
                                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                  each data, i in this.getDataFromNotation("Quote", true)
                                    Button.internal-fsb-element.internal-fsb-allow-cursor.-fsb-preset-e76846ad(style={'FsbInheritedPresets': 'e76846ad', background: (()=>{return (this.state.selectedIndex == i) ? '#007BFF' : ((this.hasError(i)) ? '#ffe0b2' : '');})(), color: (()=>{return (this.state.selectedIndex == i) ? '#FFFFFF' : '';})(), borderTopColor: (()=>{return (this.hasError(i)) ? '#e65100' : '';})(), borderRightColor: (()=>{return (this.hasError(i)) ? '#e65100' : '';})(), borderBottomColor: (()=>{return (this.hasError(i)) ? '#e65100' : '';})(), borderLeftColor: (()=>{return (this.hasError(i)) ? '#e65100' : '';})()}, key="item_" + i, onClick=((event) => { window.internalFsbSubmit('802159d0', 'Listing', event, ((results) => { this.manipulate('802159d0', 'Listing', results); }).bind(this)); }).bind(this), type="button", data-index=i + '', onSuccess=this.onButtonSuccess_802159d0.bind(this), onSubmitting=this.onButtonSubmitting_802159d0.bind(this), internal-fsb-guid="802159d0")
                                      input.internal-fsb-element.col-12(type="hidden", value=this.getDataFromNotation("Quote[" + i + "].qid"), internal-fsb-guid="72aecc3a")
                                      .internal-fsb-element(style={'FsbInheritedPresets': '', 'background': 'rgba(214, 237, 255, 0)'}, internal-fsb-guid="704100b7")
                                        .container-fluid
                                          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                            .internal-fsb-element.-fsb-preset-49a6327a.col-9.offset-0(style={'FsbInheritedPresets': '49a6327a', color: (()=>{return (this.state.selectedIndex == i) ? '#FFFFFF' : ((this.hasError(i)) ? '#e65100' : '');})()}, dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].title"))}, internal-fsb-guid="53d42bea")
                                            .internal-fsb-element.-fsb-preset-4aee31ab.col-7(style={'FsbInheritedPresets': '4aee31ab', color: (()=>{return (this.state.selectedIndex == i) ? '#FFFFFF' : (this.hasError(i) ? '#e65100' : '');})()}, internal-fsb-guid="3945ba95")
                                              | #{this.getSubtitle(i)}
                                            .internal-fsb-element.-fsb-preset-3bec5885.col-5(style={'FsbInheritedPresets': '3bec5885'}, internal-fsb-guid="c78396c8")
                                              | #{this.getTag(i)}
                            .internal-fsb-element.col-12(style={'paddingLeft': '0px', 'paddingRight': '0px', display: (()=>{return this.getDisplayOf(QuoteType.CHATTING, true);})()}, internal-fsb-guid="0250cb01")
                              .container-fluid
                                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                  each data, i in this.getDataFromNotation("Quote", true)
                                    Button.internal-fsb-element.internal-fsb-allow-cursor.-fsb-preset-e76846ad(style={'FsbInheritedPresets': 'e76846ad', background: (()=>{return (this.state.selectedIndex == i) ? '#007BFF' : '';})(), color: (()=>{return (this.state.selectedIndex == i) ? '#FFFFFF' : '';})()}, key="item_" + i, onClick=((event) => { window.internalFsbSubmit('8cbc5b17', 'Listing', event, ((results) => { this.manipulate('8cbc5b17', 'Listing', results); }).bind(this)); }).bind(this), type="button", onSuccess=this.onButtonSuccess_8cbc5b17.bind(this), onSubmitting=this.onButtonSubmitting_8cbc5b17.bind(this), internal-fsb-guid="8cbc5b17")
                                      input.internal-fsb-element.col-12(type="hidden", value=this.getDataFromNotation("Quote[" + i + "].qid"), internal-fsb-guid="e8656190")
                                      .internal-fsb-element(style={'background': (()=>{return (this.state.selectedIndex == i) ? '#007bf' : '';})() || 'rgba(214, 237, 255, 0)'}, internal-fsb-guid="1e5c65cc")
                                        .container-fluid
                                          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                            .internal-fsb-element.col-12.-fsb-preset-49a6327a(style={'FsbInheritedPresets': '49a6327a', color: (()=>{return (this.state.selectedIndex == i) ? '#FFFFFF' : '';})()}, dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].title"))}, internal-fsb-guid="32663907")
                                            .internal-fsb-element.-fsb-preset-4aee31ab.col-7(style={'FsbInheritedPresets': '4aee31ab', color: (()=>{return (this.state.selectedIndex == i) ? '#FFFFFF' : '';})()}, internal-fsb-guid="211827b2")
                                              | 150,000 บาท
                                            .internal-fsb-element.-fsb-preset-3bec5885.col-5(style={'FsbInheritedPresets': '3bec5885'}, internal-fsb-guid="0e8e4701")
                                              | ข้อความใหม่
                            .internal-fsb-element.col-12(style={'paddingLeft': '0px', 'paddingRight': '0px', display: (()=>{return this.getDisplayOf(QuoteType.PAID, true);})()}, internal-fsb-guid="a1595e85")
                              .container-fluid
                                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                  each data, i in this.getDataFromNotation("Quote", true)
                                    Button.internal-fsb-element.internal-fsb-allow-cursor.-fsb-preset-e76846ad(style={'FsbInheritedPresets': 'e76846ad', background: (()=>{return (this.state.selectedIndex == i) ? '#007BFF' : '';})(), color: (()=>{return (this.state.selectedIndex == i) ? '#FFFFFF' : '';})()}, key="item_" + i, onClick=((event) => { window.internalFsbSubmit('323ba37c', 'Listing', event, ((results) => { this.manipulate('323ba37c', 'Listing', results); }).bind(this)); }).bind(this), type="button", onSuccess=this.onButtonSuccess_323ba37c.bind(this), onSubmitting=this.onButtonSubmitting_323ba37c.bind(this), internal-fsb-guid="323ba37c")
                                      input.internal-fsb-element.col-12(type="hidden", value=this.getDataFromNotation("Quote[" + i + "].qid"), internal-fsb-guid="95270ad9")
                                      .internal-fsb-element(style={'FsbInheritedPresets': '', 'background': (()=>{return (this.state.selectedIndex == i) ? '#007bf' : '';})() || 'rgba(214, 237, 255, 0)'}, internal-fsb-guid="6bdca277")
                                        .container-fluid
                                          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                            .internal-fsb-element.col-12.-fsb-preset-49a6327a(style={'FsbInheritedPresets': '49a6327a', color: (()=>{return (this.state.selectedIndex == i) ? '#FFFFFF' : '';})()}, dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].title"))}, internal-fsb-guid="1c822d56")
                                            .internal-fsb-element.-fsb-preset-4aee31ab.col-7(style={'FsbInheritedPresets': '4aee31ab', color: (()=>{return (this.state.selectedIndex == i) ? '#FFFFFF' : '';})()}, internal-fsb-guid="39506c79")
                                              | 55,000 บาท
                                            .internal-fsb-element.-fsb-preset-3bec5885.col-5(style={'FsbInheritedPresets': '3bec5885'}, internal-fsb-guid="9ec45baa")
                                              | บัตรเครดิต
                        .internal-fsb-element.internal-fsb-allow-cursor(style={'position': 'relative', 'flexGrow': '1', 'WebkitFlexGrow': '1'}, internal-fsb-guid="154b7137")
                          .internal-fsb-element.internal-fsb-allow-cursor(style={'overflowX': 'hidden', 'MsOverflowX': 'hidden', 'overflowY': 'auto', 'MsOverflowY': 'auto', 'position': 'absolute', 'left': '0px', 'top': '0px', 'right': '0px', 'bottom': '0px', 'paddingTop': '5px', 'paddingBottom': '5px'}, internal-fsb-guid="ed65b978")
                            .internal-fsb-element(style={display: (()=>{return this.getDisplayOf(QuoteType.AUCTIONING, true);})()}, internal-fsb-guid="ae9a328e")
                              .container-fluid
                                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                  .internal-fsb-element.col-12(internal-fsb-guid="64a6ac8c")
                                    .container-fluid
                                      .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                        .internal-fsb-element.col-12.-fsb-preset-7a279686(style={'FsbInheritedPresets': '7a279686', 'paddingLeft': '0px', 'paddingRight': '0px'}, dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[#i].title"))}, internal-fsb-guid="8c2aa238")
                                        .internal-fsb-element.col-12.-fsb-preset-4839e353(style={'FsbInheritedPresets': '4839e353', 'paddingLeft': '0px', 'paddingRight': '0px'}, dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[#i].description"))}, internal-fsb-guid="7484ac1e")
                                        .internal-fsb-element.internal-fsb-allow-cursor.col-12(style={'display': 'flex', 'justifyContent': 'space-around', 'WebkitJustifyContent': 'space-around', 'marginBottom': '15px'}, internal-fsb-guid="9ee30bae")
                                          .internal-fsb-element.internal-fsb-allow-cursor(style={'background': 'rgba(252, 3, 3, 0)'}, internal-fsb-guid="96698691")
                                            each data, i in this.getDataFromNotation("Quote[#i].Rank", true)
                                              .internal-fsb-element(style={'width': '100px', 'display': 'inline-block'}, key="item_" + i, internal-fsb-guid="3317ca5e")
                                                .container-fluid
                                                  .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                                    .internal-fsb-element.col-12(style={display: (()=>{return (this.isMatchedRank(i)) ? 'block' : 'none';})(), padding: '0px'}, internal-fsb-guid="21d1c3ed")
                                                      img(style={'display': 'block', 'width': '80px', 'height': '80px', 'marginLeft': '10px', 'marginRight': '10px'}, src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/rank-active.png")
                                                    .internal-fsb-element.col-12(style={display: (()=>{return (this.isMatchedRank(i)) ? 'none' : 'block';})(), padding: '0px'}, internal-fsb-guid="cccea251")
                                                      img(style={'display': 'block', 'width': '60px', 'opacity': '0.5', 'WebkitOpacity': '0.5', 'marginLeft': '20px', 'height': '60px', 'marginTop': '10px', 'marginBottom': '10px', 'marginRight': '20px'}, src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/rank-inactive.png")
                                                    .internal-fsb-element.col-12(style={'fontSize': '12px', 'textAlign': 'center', 'paddingLeft': '0px', 'paddingRight': '0px', 'fontWeight': 'bold', 'color': (()=>{return (this.isMatchedRank(i)) ? 'rgb(22, 98, 250)' : '';})() || 'rgba(217, 217, 217, 1)', 'marginTop': '5px'}, internal-fsb-guid="5022e90e")
                                                      | #{this.getRankDetail(i)}
                                        .internal-fsb-element.col-12(internal-fsb-guid="0a39ec74")
                                          .container-fluid
                                            .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                        .internal-fsb-element.col-12.-fsb-self-1715aae1(internal-fsb-guid="1715aae1")
                                          | #{this.getAuctionStatusDetail(this.state.selectedIndex)}
                                        .internal-fsb-element.col-12(style={'color': 'rgba(22, 98, 250, 1)', 'textAlign': 'center', 'marginBottom': '15px'}, internal-fsb-guid="76197d74")
                                          | #{this.getRemainingTimeDisplay(this.state.selectedIndex, true)}
                                        .internal-fsb-element.col-12(style={'color': 'rgba(255, 0, 0, 1)', 'textAlign': 'center', 'marginBottom': '15px', display: (()=>{return (this.hasError(this.state.selectedIndex)) ? 'block' : 'none';})()}, internal-fsb-guid="22cb5230")
                                          | มีบางรายการที่คุณต้องแก้เพื่อให้ผ่านงานประมูลราคา
                                        each data, i in this.getDataFromNotation("Quote[#i].Listing", true)
                                          - const Project_Controls_FlowLayout_c6ba5b53_ = Project.Controls.FlowLayout_c6ba5b53;
                                          _Project_Controls_FlowLayout_c6ba5b53_(type=this.getDataFromNotation('Quote[#i].substitute', false), onpricechanged=this.onPriceChanged.bind(this), index=i, hassubmitted=this.state.hasSubmitted, enabled=this.getFormEnabledState(), key="item_" + i, row=data)
                                        .internal-fsb-element.col-12.-fsb-preset-1715aae1(style={'FsbInheritedPresets': '1715aae1'}, internal-fsb-guid="da4a5daa")
                                          | เสนอราคาใหม่ที่ราคา
                                        .internal-fsb-element.col-6.offset-3(style={padding: '0px'}, internal-fsb-guid="c03d6613")
                                          input.form-control.form-control-sm(style={'display': 'block', 'width': '100%'}, ref="price", type="text", placeholder="ราคารวมทั้งหมด", disabled=true, defaultValue=this.getDataFromNotation("Quote[#i].Auction.price"))
                                        .internal-fsb-element.col-2.offset-0(internal-fsb-guid="2b06dab6")
                                          | บาท
                                        input.internal-fsb-element.col-12(type="hidden", value="", internal-fsb-guid="d30aa93b")
                                        input.internal-fsb-element.col-12(type="hidden", value=this.getDataFromNotation("Quote[#i].qid"), internal-fsb-guid="a5b102c4")
                                        Button.internal-fsb-element.internal-fsb-allow-cursor.btn.btn-primary.btn-sm.col-4.offset-4(style={'marginTop': '10px', 'marginBottom': '10px'}, onClick=((event) => { window.internalFsbSubmit('9868a6d5', 'Auction', event, ((results) => { this.manipulate('9868a6d5', 'Auction', results); }).bind(this)); }).bind(this), type="button", disabled=this.getFormEnabledState(), onSuccess=this.onButtonSuccess_9868a6d5.bind(this), onSubmitting=this.onButtonSubmitting_9868a6d5.bind(this), onSubmitted=this.onButtonSubmitted_9868a6d5.bind(this), internal-fsb-guid="9868a6d5")
                                          .internal-fsb-element(internal-fsb-guid="9868a6d5-text")
                                            | เคาะ
                            .internal-fsb-element(style={display: (()=>{return this.getDisplayOf(QuoteType.OFFERING, true);})()}, internal-fsb-guid="51201e78")
                              .container-fluid
                                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                  .internal-fsb-element.col-12(internal-fsb-guid="7b15e8a1")
                                    .container-fluid
                                      .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                        .internal-fsb-element.col-12.-fsb-preset-7a279686(style={'FsbInheritedPresets': '7a279686', 'paddingLeft': '0px', 'paddingRight': '0px'}, dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[#i].title"))}, internal-fsb-guid="c7226b52")
                                        .internal-fsb-element.col-12.-fsb-preset-4839e353(style={'FsbInheritedPresets': '4839e353', 'paddingLeft': '0px', 'paddingRight': '0px'}, dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[#i].description"))}, internal-fsb-guid="39ca61d5")
                                        .internal-fsb-element.internal-fsb-allow-cursor.col-12(style={'marginBottom': '15px', 'display': 'flex', 'justifyContent': 'space-around', 'WebkitJustifyContent': 'space-around'}, internal-fsb-guid="3bc4945a")
                                          .internal-fsb-element.internal-fsb-allow-cursor(internal-fsb-guid="ed182a21")
                                            each data, i in this.getDataFromNotation("Quote[#i].Rank", true)
                                              .internal-fsb-element(style={'width': '100px', 'display': 'inline-block'}, key="item_" + i, internal-fsb-guid="b16bc14a")
                                                .container-fluid
                                                  .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                                    .internal-fsb-element(style={display: (()=>{return (this.isMatchedRank(i)) ? 'block' : 'none';})(), padding: '0px'}, internal-fsb-guid="82836507")
                                                      img(style={'display': 'block', 'width': '80px', 'marginLeft': '10px', 'marginRight': '10px', 'height': '80px'}, src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/rank-active.png")
                                                    .internal-fsb-element(style={display: (()=>{return (this.isMatchedRank(i)) ? 'none' : 'block';})(), padding: '0px'}, internal-fsb-guid="98b1615a")
                                                      img(style={'display': 'block', 'width': '60px', 'height': '60px', 'marginLeft': '20px', 'marginRight': '20px', 'marginTop': '10px', 'marginBottom': '10px'}, src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/rank-inactive.png")
                                                    .internal-fsb-element.col-12(style={'paddingLeft': '0px', 'paddingRight': '0px', 'marginTop': '5px', 'fontSize': '12px', 'textAlign': 'center', 'color': (()=>{return (this.isMatchedRank(i)) ? 'rgb(22, 98, 250)' : '';})() || 'rgba(217, 217, 217, 1)', 'fontWeight': 'bold'}, internal-fsb-guid="9be68c4e")
                                                      | #{this.getRankDetail(i)}
                                        .internal-fsb-element.col-12.-fsb-preset-1715aae1(style={'FsbInheritedPresets': '1715aae1', 'bottom': '15px'}, internal-fsb-guid="e1b315be")
                                          | #{this.getAuctionStatusDetail(this.state.selectedIndex)}
                                        each data, i in this.getDataFromNotation("Quote[#i].Listing", true)
                                          .internal-fsb-element.col-12.-fsb-preset-c6ba5b53(style={'FsbInheritedPresets': 'c6ba5b53', 'background': 'rgba(217, 217, 217, 1)', 'borderLeftColor': 'rgba(128, 128, 128, 1)', 'borderRightColor': 'rgba(128, 128, 128, 1)', 'borderTopColor': 'rgba(128, 128, 128, 1)', 'borderBottomColor': 'rgba(128, 128, 128, 1)'}, key="item_" + i, internal-fsb-guid="ce9a10c5")
                                            .container-fluid
                                              .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                                .internal-fsb-element.col-4.offset-0.-fsb-preset-65ec89d1(style={'FsbInheritedPresets': '65ec89d1'}, internal-fsb-guid="19ce03e8")
                                                  .container-fluid
                                                    .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                                      .internal-fsb-element.col-12(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[#i].Listing[" + i + "].title"))}, internal-fsb-guid="07673d1a")
                                                      .internal-fsb-element.col-12(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[#i].Listing[" + i + "].size"))}, internal-fsb-guid="19d0b023")
                                                      .internal-fsb-element.col-12(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[#i].Listing[" + i + "].quantity"))}, internal-fsb-guid="bd0d3bad")
                                                .internal-fsb-element.-fsb-preset-65ec89d1.col-3.offset-0(style={'FsbInheritedPresets': '65ec89d1'}, internal-fsb-guid="9ecd9ed0")
                                                  .container-fluid
                                                    .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                                      .internal-fsb-element.col-12(style={'fontWeight': 'bold', 'marginBottom': '5px'}, internal-fsb-guid="00758360")
                                                        | สินค้าเทียบเคียง: ทดแทน
                                                .internal-fsb-element.col-5.offset-0.-fsb-preset-65ec89d1(style={'FsbInheritedPresets': '65ec89d1'}, internal-fsb-guid="176a4c29")
                                                  .container-fluid
                                                    .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                                      .internal-fsb-element.col-3.offset-0(style={'fontWeight': 'bold', 'marginBottom': '5px'}, internal-fsb-guid="b840c1c0")
                                                        | เปลี่ยนวัสดุเป็น:
                                                      .internal-fsb-element.col-9.offset-0(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[#i].Listing[" + i + "].Auction.Substitute.title"))}, internal-fsb-guid="8656cea5")
                                                      .internal-fsb-element.col-9.offset-3(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[#i].Listing[" + i + "].Auction.Substitute.size"))}, internal-fsb-guid="ed22bc9a")
                                                      .internal-fsb-element.col-9.offset-3(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[#i].Listing[" + i + "].Auction.Substitute.quantity"))}, internal-fsb-guid="a9a3406a")
                                  .internal-fsb-element.-fsb-preset-1715aae1.col-12.offset-0(style={'FsbInheritedPresets': '1715aae1'}, internal-fsb-guid="5428078e")
                                    | คุณเสนอราคาที่ #{this.getDataFromNotation('Quote[#i].Auction.price')} บาท
                                  Button.internal-fsb-element.internal-fsb-allow-cursor.col-4.offset-4.btn.btn-danger.btn-sm(style={'marginTop': '10px', 'marginBottom': '10px'}, type="button", internal-fsb-guid="d3e31c36")
                                    .internal-fsb-element(internal-fsb-guid="d3e31c36-text")
                                      | ยกเลิก
                            .internal-fsb-element(style={display: (()=>{return this.getDisplayOf(QuoteType.CHATTING, true);})()}, internal-fsb-guid="76cdd2cd")
                              .container-fluid
                                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                  .internal-fsb-element.col-12(internal-fsb-guid="7958b83c")
                                    | ABCD
                            .internal-fsb-element(style={display: (()=>{return this.getDisplayOf(QuoteType.PAID, true);})()}, internal-fsb-guid="3318b254")
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