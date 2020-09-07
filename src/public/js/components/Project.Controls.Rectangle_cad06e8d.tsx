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
  quoteType: QuoteType;
  selectedIndex: number;
  submitting: boolean;
  submittingChat: boolean;
  isFormReady: boolean;
  itemPrices: number[];
  remainingTimes: string[];
  expandingChat: boolean;
  deliveryCost: string;
  discount: string;
  vatType: number;
  promotion: string;
}

let DefaultProps = Object.assign({}, DefaultBaseProps, {
  
});
let DefaultState = Object.assign({}, DefaultBaseState, {
  quoteType: QuoteType.AUCTIONING,
  selectedIndex: 0,
  submitting: false,
  submittingChat: false,
  isFormReady: false,
  itemPrices: [],
  remainingTimes: [],
  expandingChat: true,
  deliveryCost: '',
  discount: '',
  vatType: 0,
  promotion: ''
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
    DataManipulationHelper.register("e9c9b721", "retrieve", ["d1920261","c192b978"], {initClass: null, submitCrossType: null, enabledRealTimeUpdate: true, retrieveInto: null});
    DataManipulationHelper.register("e76846ad", "retrieve", ["31c75169"], {initClass: null, submitCrossType: null, enabledRealTimeUpdate: false, retrieveInto: "Quote[#i]"});
    DataManipulationHelper.register("802159d0", "retrieve", ["72aecc3a"], {initClass: null, submitCrossType: null, enabledRealTimeUpdate: false, retrieveInto: "Quote[#i]"});
    DataManipulationHelper.register("323ba37c", "retrieve", ["95270ad9"], {initClass: null, submitCrossType: null, enabledRealTimeUpdate: false, retrieveInto: "Quote[#i]"});
    DataManipulationHelper.register("9868a6d5", "upsert", ["1832b944","b91e2739","03aab0e5","957c1568","9c338431","c22ec668","d913e6a1","c03d6613","d30aa93b","ae7e2437","a5b102c4","1382e4c9","9d1cc748","1e76478b","54c30d5c","05733be3"], {initClass: null, submitCrossType: "upsert", enabledRealTimeUpdate: false, retrieveInto: null});
    DataManipulationHelper.register("c788d322", "insert", ["b16eadbb","208c3d23","8d1ec385","a1a3c540"], {initClass: null, submitCrossType: null, enabledRealTimeUpdate: false, retrieveInto: null});
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
    this.resetForm();
    this.scrollToBottom(true);
  }
  
  protected componentDidUpdate(prevProps, prevState): void {
    this.scrollToBottom();
  }
  
  // Private function for chat
  // 
  private scrollToBottom(force: boolean=false): void {
    const container = ReactDOM.findDOMNode(this.refs.scroll);
    if (force || container.scrollTop + 50 > container.scrollHeight - container.offsetHeight) {
      $(container).animate({scrollTop: container.scrollHeight - container.offsetHeight}, 500);
    }
  }
  
  private getNoticeSum(i: number): number {
    return this.getDataFromNotation('Notice.notice' + i) || 0;
  }
  
  private getNoticeCount(i: number): number {
    let count = 0;
    for (const message of this.getDataFromNotation('Quote[' + i + '].Message')) {
      if (message.columns['type'] == 0) count = 0;
      else count++;
    }
    return count;
  }
  
  // Private function of text displaying
  //
  private getTitle(i: number): string {
    return this.getDataFromNotation('Quote[' + i + '].title');
  }
  
  private getSubtitle(i: number): string {
    const rank = this.getRank(i);
    
    if (rank == -1) return '';
    if (rank == null) return 'ยังไม่ถูกจัดอันดับ';
    if (rank > 10) return 'ราคาแพงเกินไป';
    
    return `อันดับที่ ${rank} / 10`;
  }
  
  private getTag(i: number): string {
    const substitute = this.getDataFromNotation('Quote[' + i + '].Listing.substitute');
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
  
  private getAuctionSummary(i: number): string {
    const rank = this.getRank(i);
    const tag = this.getTag(i);
    
    if (rank == -1) return 'งานประมูลนี้ทางร้านค้ายังไม่เคยเคาะประมูลมาก่อน';
    if (rank == null) return 'งานประมูลของคุณยังไม่ได้ถูกจัดอันดับ... โปรดกรุณารอสักครู่';
    if (rank > 10) return 'งานประมูลนี้ทางร้านค้าเคยเคาะประมูลแล้วแต่พบว่าราคาแพงเกินไปจนหลุด 10 อันดับแรก';
    
    return `ตอนนี้คุณอยู่อันดับที่ ${rank} / 10 อันดับที่ลูกค้าสามารถเห็นได้ในกลุ่มที่${tag}`;
  }
  
  private getRankSequenceTag(i: number): string {
    if (this.isSelfRank(i - 1) || this.isSelfRank(i) || this.isSelfRank(i + 1)) {
      return this.getDataFromNotation('Quote[#i].Rank')[i].columns['price'].toString() + ' บาท';
    } else {
      return `อันดับที่ ${i + 1}`;
    }
  }
  
  private getShortRemainingTime(i: number): string {
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
  
  private getLongRemainingTime(i: number, fullmode: boolean=false): string {
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
  
  private getSubstituteDisplayText(i: number) {
    const type = this.getDataFromNotation('Quote[#i].Listing.Substitute.type');
    
    switch (type) {
      case 0:
        return 'เจาะจง';
      case 1:
        return 'เทียบเท่า';
      case 2:
        return 'ทดแทน';
      default:
        return 'ไม่มี';
    }
  }
  
  // Private function of state recognizing
  //
  private hasError(i: number): boolean {
    const listing = this.getDataFromNotation('Quote[' + i + '].Listing');
    
    if (!listing || listing.length == 0) return false;
    else {
      for (const row of listing) {
        if (!row.relations['Substitute'] || row.relations['Substitute'].rows.length == 0) continue;
        if (row.columns['substitute'] < row.relations['Substitute'].rows[0].columns['type'] && row.relations['Substitute'].rows[0].columns['type'] != 3) {
          return true;
        }
      }
      
      return false;
    }
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
  
  private isSelfRank(i: number): boolean {
    if (i < 0 || i >= this.getDataFromNotation('Quote[#i].Rank').length) return false;
    
    return this.getDataFromNotation('Quote[#i].Auction.aid') == this.getDataFromNotation('Quote[#i].Rank')[i].keys['aid'];
  }
  
  private refreshRemainingTime(refresh: boolean) {
    if (refresh) {
      this.state.remainingTimes = [];
    }
    
    const total = this.getDataFromNotation('Quote').length;
    const remainingTimes = this.state.remainingTimes;
    for (let i=0; i<total; i++) {
      remainingTimes[i] = this.getShortRemainingTime(i);
    }
    this.setState({remainingTimes: remainingTimes});
  }
  
  // Private function of CSS display
  //
  private getFormEnabledState() {
    return !this.state.submitting && (this.getShortRemainingTime(this.state.selectedIndex) != '00:00:00');
  }
  
  private getQuoteTypeDisplay(quoteType: QuoteType, active: boolean) {
    if (active) return (this.state.quoteType === quoteType) ? 'block' : 'none';
    else return (this.state.quoteType === quoteType) ? 'none' : 'block';
  }
  
  // Private function of event handling
  //
  private onPriceChanged(index: number, price: number) {
    this.state.itemPrices[index] = price;
    
    this.updatePrice();
  }
  
  private updatePrice() {
    const count = this.getDataFromNotation('Quote[#i].Listing').length;
    let sum = 0;
    for (let i=0; i<count; i++) {
      sum += this.state.itemPrices[i];
    }
    
    const element = ReactDOM.findDOMNode(this.refs.price);
    if (element) {
      if (isNaN(sum)) element.value = "กรุณากรอกราคาต่อหน่วยให้ครบ";
      return;
    }
    
    if (this.state.deliveryCost) sum += parseFloat(this.state.deliveryCost);
    if (this.state.discount) sum -= parseFloat(this.state.discount);
    
    if (element) {
      if (isNaN(sum)) element.value = "กรุณากรอกค่าขนส่งและส่วนลดให้ถูกต้อง";
    }
    
    if (this.state.vatType == 0) {
      sum = sum / 1.07;
    } else {
      sum = sum * 1.07;
    }
    
    if (element) {
      element.value = sum.toString();
    }
  }
  
  // Private function of form ready state
  // 
  private resetForm() {
    this.setState({
      isFormReady: false,
      deliveryCost: this.getDataFromNotation('Quote[#i].deliveryCost') || '',
      discount: this.getDataFromNotation('Quote[#i].discount') || '',
      vatType: this.getDataFromNotation('Quote[#i].vatType') || 0,
      promotion: this.getDataFromNotation('Quote[#i].promotion') || ''
    });
    
    // [TODO]: workaround for update timing problem
    // 
    window.setTimeout((() => {
      this.setState({
        isFormReady: true
      });
    }).bind(this), 1000);
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
  
  // Auto[Merging]--->
  protected onButtonSubmitting_4a579143(event: Event) {

    // Handle the event of onButtonSubmitting (Button 1) here:
    // 
    if (this.state.submitting) return EventHelper.cancel(event);
    
  }

  protected onButtonSuccess_4a579143(event: Event) {

    // Handle the event of onButtonSuccess (Button 1) here:
    // 
    this.setState({quoteType: QuoteType.AUCTIONING, selectedIndex: 0});
    window.setTimeout(() => {
      this.refreshRemainingTime(true);
    }, 0);
    
    this.resetForm();
    this.scrollToBottom(true);
    
  }

  protected onButtonSubmitting_c05b11c1(event: Event) {

    // Handle the event of onButtonSubmitting (Button 2) here:
    // 
    if (this.state.submitting) return EventHelper.cancel(event);
    
  }

  protected onButtonSuccess_c05b11c1(event: Event) {

    // Handle the event of onButtonSuccess (Button 2) here:
    // 
    this.setState({quoteType: QuoteType.OFFERING, selectedIndex: 0});
    window.setTimeout(() => {
      this.refreshRemainingTime(true);
    }, 0);
    
    this.resetForm();
    this.scrollToBottom(true);
    
  }

  protected onButtonSubmitting_e9c9b721(event: Event) {

    // Handle the event of onButtonSubmitting (Button 4) here:
    // 
    if (this.state.submitting) return EventHelper.cancel(event);
    
  }

  protected onButtonSuccess_e9c9b721(event: Event) {

    // Handle the event of onButtonSuccess (Button 4) here:
    // 
    this.setState({quoteType: QuoteType.PAID, selectedIndex: 0});
    window.setTimeout(() => {
      this.refreshRemainingTime(true);
    }, 0);
    
    this.resetForm();
    this.scrollToBottom(true);
    
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
    
    this.resetForm();
    
    const price = ReactDOM.findDOMNode(this.refs.price);
    const auction = this.getDataFromNotation('Quote[#i].Auction');
    
    if (auction && auction.length != 0) {
      price.value = auction[0].columns['price'];
    } else {
      price.value = '';
    }
    
    this.forceUpdate();
    this.scrollToBottom(true);
    
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
    
    this.resetForm();
    
    this.forceUpdate();
    this.scrollToBottom(true);
    
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
    
    this.resetForm();
    
    this.forceUpdate();
    this.scrollToBottom(true);
    
  }

  protected onTextboxChange_54c30d5c(event: Event) {

    // Handle the event of onTextboxChange (Textbox 1) here:
    // 
    const element = EventHelper.getCurrentElement(event);
    
    this.state.deliveryCost = element.value;
    this.forceUpdate();
    
    this.updatePrice();
    
  }

  protected onTextboxChange_05733be3(event: Event) {

    // Handle the event of onTextboxChange (Textbox 2) here:
    // 
    const element = EventHelper.getCurrentElement(event);
    
    this.state.discount = element.value;
    this.forceUpdate();
    
    this.updatePrice();
    
  }

  protected onRadioClick_9d1cc748(event: Event) {

    // Handle the event of onRadioClick (Radio 1) here:
    // 
    this.state.vatType = 0;
    this.forceUpdate();
    
    this.updatePrice();
    
  }

  protected onRadioClick_1e76478b(event: Event) {

    // Handle the event of onRadioClick (Radio 2) here:
    // 
    this.state.vatType = 1;
    this.forceUpdate();
    
    this.updatePrice();
    
  }

  protected onButtonSubmitting_9868a6d5(event: Event) {

    // Handle the event of onButtonSubmitting (Bid) here:
    // 
    this.state.submitting = true;
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

  protected onButtonClick_2b2a0681(event: Event) {

    // Handle the event of onButtonClick (Button 1) here:
    // 
    this.state.expandingChat = !this.state.expandingChat;
    this.forceUpdate();
    
  }

  protected onButtonSubmitting_c788d322(event: Event) {

    // Handle the event of onButtonSubmitting (Button 2) here:
    // 
    this.setState({submittingChat: true});
    
  }

  protected onButtonSubmitted_c788d322(event: Event) {

    // Handle the event of onButtonSubmitted (Button 2) here:
    // 
    this.setState({submittingChat: false});
    
  }

  protected onButtonSuccess_c788d322(event: Event) {

    // Handle the event of onButtonSuccess (Button 2) here:
    // 
    ReactDOM.findDOMNode(this.refs.chatInput).value = '';
    this.scrollToBottom(true);
    
  }
  // <---Auto[Merging]
  
  // Auto[ClassEnd]--->
  protected render(): any {
    return pug `
      div(style=Object.assign({'flexDirection': 'column', 'WebkitFlexDirection': 'column', 'MsFlexDirection': 'column', 'height': '100vh', 'display': 'flex', 'background': 'linear-gradient(15deg, rgba(153, 24, 245, 1) 0%, rgba(22, 98, 250, 1) 100%)', 'FsbBackgroundType': 'linear', 'paddingLeft': '0px', 'paddingRight': '0px', 'paddingTop': '0px', 'paddingBottom': '0px', 'width': '100vw', 'overflowX': 'hidden', 'MsOverflowX': 'hidden', 'overflowY': 'hidden', 'MsOverflowY': 'hidden'}, this.props.forward && this.props.forward.styles || {}), className="internal-fsb-element internal-fsb-allow-cursor col-12 " + (this.props.forward && this.props.forward.classes || ''), internal-fsb-guid="cad06e8d")
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
            .internal-fsb-element.internal-fsb-allow-cursor.-fsb-self-e2254eb7(style={'height': '100%', 'width': '100%', 'position': 'relative', 'display': 'flex', 'flexDirection': 'row', 'WebkitFlexDirection': 'row', 'MsFlexDirection': 'row', 'FsbReusableName': '', 'FsbReusableId': 'e2254eb7', 'FsbInheritedPresets': ''}, internal-fsb-guid="e2254eb7")
              .internal-fsb-element.internal-fsb-allow-cursor(style={'borderRightColor': 'rgba(255, 255, 255, 1)', 'background': 'rgba(255, 255, 255, 0)', 'color': 'rgba(255, 255, 255, 1.0)', 'verticalAlign': 'top', 'position': 'relative', 'overflowY': 'hidden', 'MsOverflowY': 'hidden', 'flexGrow': '0', 'flexShrink': '0', 'flexBasis': '60px', 'WebkitFlexBasis': '60px', 'overflowX': 'hidden', 'MsOverflowX': 'hidden'}, internal-fsb-guid="712e9de1")
                .internal-fsb-element(style={'fontSize': '11px', 'cursor': 'default'}, internal-fsb-guid="74e4253b")
                  .container-fluid
                    .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                      .internal-fsb-element.col-12(style={'marginBottom': '10px', 'marginTop': '10px', 'paddingLeft': '5px', 'paddingRight': '5px', 'position': 'relative'}, internal-fsb-guid="ca80140b")
                        .container-fluid
                          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                            Button.internal-fsb-element.internal-fsb-allow-cursor(style={'background': 'rgba(255, 255, 255, 0)', 'borderTopStyle': 'none', 'borderLeftStyle': 'none', 'borderRightStyle': 'none', 'borderBottomStyle': 'none', 'paddingTop': '5px', 'paddingLeft': '5px', 'paddingRight': '5px', 'paddingBottom': '5px', display: (()=>{return this.getQuoteTypeDisplay(QuoteType.AUCTIONING, false);})()}, onClick=((event) => { window.internalFsbSubmit('4a579143', 'Quote', event, ((results) => { this.manipulate('4a579143', 'Quote', results); }).bind(this)); }).bind(this), type="button", onSubmitting=this.onButtonSubmitting_4a579143.bind(this), onSuccess=this.onButtonSuccess_4a579143.bind(this), internal-fsb-guid="4a579143")
                              .internal-fsb-element(style={padding: '0px'}, internal-fsb-guid="04b90b11")
                                img(style={'display': 'block', 'opacity': '0.5', 'WebkitOpacity': '0.5', 'width': '40px', 'height': '40px', 'cursor': 'pointer'}, src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/bid-inactive.png")
                            input.internal-fsb-element(type="hidden", value="1", internal-fsb-guid="1ae8405a")
                            .internal-fsb-element.col-12(style={'textAlign': 'center', 'paddingLeft': '0px', 'paddingRight': '0px', 'color': 'rgba(255, 255, 255, 0.45)', display: (()=>{return this.getQuoteTypeDisplay(QuoteType.AUCTIONING, false);})()}, internal-fsb-guid="9a91246d")
                              | เคาะประมูล
                            .internal-fsb-element.col-12(style={display: (()=>{return this.getQuoteTypeDisplay(QuoteType.AUCTIONING, true);})(), padding: '0px'}, internal-fsb-guid="42b3dc9b")
                              img(style={'display': 'block', 'width': '40px', 'height': '40px', 'marginTop': '5px', 'borderRightWidth': '5px', 'marginLeft': '5px', 'marginBottom': '5px'}, src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/bid-active.png")
                            .internal-fsb-element.col-12(style={'textAlign': 'center', 'paddingLeft': '0px', 'paddingRight': '0px', display: (()=>{return this.getQuoteTypeDisplay(QuoteType.AUCTIONING, true);})()}, internal-fsb-guid="51315831")
                              | เคาะประมูล
                            .internal-fsb-element.col-12.-fsb-self-e729be84(style={position: (()=>{return 'absolute';})(), display: (()=>{return (this.getNoticeSum(0) != 0) ? 'block' : 'none'})()}, internal-fsb-guid="e729be84")
                              | #{this.getNoticeSum(0)}
                      .internal-fsb-element.col-12(style={'marginBottom': '10px', 'paddingLeft': '5px', 'paddingRight': '5px', 'position': 'relative'}, internal-fsb-guid="7b54582d")
                        .container-fluid
                          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                            Button.internal-fsb-element.internal-fsb-allow-cursor(style={'background': 'rgba(255, 255, 255, 0)', 'borderTopStyle': 'none', 'borderLeftStyle': 'none', 'borderRightStyle': 'none', 'borderBottomStyle': 'none', 'paddingTop': '5px', 'paddingLeft': '5px', 'paddingRight': '5px', 'paddingBottom': '5px', display: (()=>{return this.getQuoteTypeDisplay(QuoteType.OFFERING, false);})()}, onClick=((event) => { window.internalFsbSubmit('c05b11c1', 'Quote', event, ((results) => { this.manipulate('c05b11c1', 'Quote', results); }).bind(this)); }).bind(this), type="button", onSuccess=this.onButtonSuccess_c05b11c1.bind(this), onSubmitting=this.onButtonSubmitting_c05b11c1.bind(this), internal-fsb-guid="c05b11c1")
                              .internal-fsb-element(style={padding: '0px'}, internal-fsb-guid="b6ec8d55")
                                img(style={'display': 'block', 'width': '40px', 'opacity': '0.5', 'WebkitOpacity': '0.5', 'height': '40px', 'cursor': 'pointer'}, src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/bidded-inactive.png")
                            input.internal-fsb-element(type="hidden", value="2", internal-fsb-guid="4cade2e7")
                            .internal-fsb-element.col-12(style={'textAlign': 'center', 'paddingLeft': '0px', 'paddingRight': '0px', 'color': 'rgba(255, 255, 255, 0.45)', display: (()=>{return this.getQuoteTypeDisplay(QuoteType.OFFERING, false);})()}, internal-fsb-guid="ac1a1bce")
                              | ประมูลผ่าน
                            .internal-fsb-element.col-12(style={display: (()=>{return this.getQuoteTypeDisplay(QuoteType.OFFERING, true);})(), padding: '0px'}, internal-fsb-guid="40ada351")
                              img(style={'display': 'block', 'width': '40px', 'height': '40px', 'marginTop': '5px', 'marginLeft': '5px', 'marginRight': '5px', 'marginBottom': '5px'}, src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/bidded-active.png")
                            .internal-fsb-element.col-12(style={'textAlign': 'center', 'paddingLeft': '0px', 'paddingRight': '0px', display: (()=>{return this.getQuoteTypeDisplay(QuoteType.OFFERING, true);})()}, internal-fsb-guid="936e036b")
                              | ประมูลผ่าน
                            .internal-fsb-element.col-12.-fsb-preset-e729be84(style={'FsbInheritedPresets': 'e729be84', position: (()=>{return 'absolute';})(), display: (()=>{return (this.getNoticeSum(1) != 0) ? 'block' : 'none'})()}, internal-fsb-guid="7aa0ab8d")
                              | #{this.getNoticeSum(1)}
                      .internal-fsb-element.col-12(style={'paddingLeft': '5px', 'paddingRight': '5px', 'position': 'relative'}, internal-fsb-guid="9a5131da")
                        .container-fluid
                          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                            Button.internal-fsb-element.internal-fsb-allow-cursor(style={'background': 'rgba(255, 255, 255, 0)', 'borderTopStyle': 'none', 'borderLeftStyle': 'none', 'borderRightStyle': 'none', 'borderBottomStyle': 'none', 'paddingTop': '5px', 'paddingLeft': '5px', 'paddingRight': '5px', 'paddingBottom': '5px', display: (()=>{return this.getQuoteTypeDisplay(QuoteType.PAID, false);})()}, onClick=((event) => { window.internalFsbSubmit('e9c9b721', 'Quote', event, ((results) => { this.manipulate('e9c9b721', 'Quote', results); }).bind(this)); }).bind(this), type="button", onSuccess=this.onButtonSuccess_e9c9b721.bind(this), onSubmitting=this.onButtonSubmitting_e9c9b721.bind(this), internal-fsb-guid="e9c9b721")
                              .internal-fsb-element(style={padding: '0px'}, internal-fsb-guid="6b7e8340")
                                img(style={'display': 'block', 'width': '40px', 'height': '40px', 'opacity': '0.5', 'WebkitOpacity': '0.5', 'cursor': 'pointer'}, src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/sold-inactive.png")
                            input.internal-fsb-element(type="hidden", value="4", internal-fsb-guid="d1920261")
                            .internal-fsb-element.col-12(style={'textAlign': 'center', 'color': 'rgba(255, 255, 255, 0.45)', 'paddingLeft': '0px', 'paddingRight': '0px', display: (()=>{return this.getQuoteTypeDisplay(QuoteType.PAID, false);})()}, internal-fsb-guid="83e40405")
                              | จ่ายเงินแล้ว
                            .internal-fsb-element.col-12.offset-0(style={display: (()=>{return this.getQuoteTypeDisplay(QuoteType.PAID, true);})(), padding: '0px'}, internal-fsb-guid="86510a55")
                              img(style={'display': 'block', 'width': '40px', 'height': '40px', 'marginTop': '5px', 'marginRight': '5px', 'marginBottom': '5px', 'marginLeft': '5px'}, src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/sold-active.png")
                            .internal-fsb-element.col-12(style={'textAlign': 'center', 'paddingLeft': '0px', 'paddingRight': '0px', display: (()=>{return this.getQuoteTypeDisplay(QuoteType.PAID, true);})()}, internal-fsb-guid="b4775a3d")
                              | จ่ายเงินแล้ว
                            .internal-fsb-element.col-12.-fsb-preset-e729be84(style={'FsbInheritedPresets': 'e729be84', position: (()=>{return 'absolute';})(), display: (()=>{return (this.getNoticeSum(2) != 0) ? 'block' : 'none'})()}, internal-fsb-guid="693a4d21")
                              | #{this.getNoticeSum(2)}
              .internal-fsb-element.internal-fsb-allow-cursor(style={'borderRightColor': 'rgba(22, 98, 250, 1)', 'background': 'rgba(255, 255, 255, 1)', 'flexGrow': '1', 'WebkitFlexGrow': '1'}, internal-fsb-guid="3e557242")
                .internal-fsb-element(style={'width': '100%', 'height': '100%', 'borderBottomColor': 'rgba(22, 98, 250, 1)', 'position': 'relative', 'display': 'flex', 'flexDirection': 'column', 'WebkitFlexDirection': 'column', 'MsFlexDirection': 'column'}, internal-fsb-guid="b3410868")
                  .internal-fsb-element(style={'borderBottomStyle': 'solid', 'borderBottomColor': 'rgba(22, 98, 250, 1)', 'borderBottomWidth': '2px', 'paddingTop': '10px', 'paddingBottom': '10px'}, internal-fsb-guid="4069ed4d")
                    .container-fluid
                      .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                        .internal-fsb-element.col-12(style={display: (()=>{return this.getQuoteTypeDisplay(QuoteType.AUCTIONING, true);})()}, internal-fsb-guid="88db4eda")
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
                        .internal-fsb-element.col-12(style={display: (()=>{return this.getQuoteTypeDisplay(QuoteType.OFFERING, true);})()}, internal-fsb-guid="0d656c9d")
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
                        .internal-fsb-element.col-12(style={display: (()=>{return this.getQuoteTypeDisplay(QuoteType.PAID, true);})()}, internal-fsb-guid="2d35d6ec")
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
                            .internal-fsb-element(style={display: (()=>{return this.getQuoteTypeDisplay(QuoteType.AUCTIONING, true);})()}, internal-fsb-guid="c3d853d0")
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
                                            .internal-fsb-element.-fsb-self-098de259(style={display: (()=>{return (this.getNoticeCount(i) != 0) ? 'block' : 'none';})(), position: (()=>{return 'absolute';})()}, internal-fsb-guid="098de259")
                                              | #{this.getNoticeCount(i)}
                            .internal-fsb-element.col-12(style={'paddingLeft': '0px', 'paddingRight': '0px', display: (()=>{return this.getQuoteTypeDisplay(QuoteType.OFFERING, true);})()}, internal-fsb-guid="24d70384")
                              .container-fluid
                                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                  each data, i in this.getDataFromNotation("Quote", true)
                                    Button.internal-fsb-element.internal-fsb-allow-cursor.-fsb-preset-e76846ad(style={'FsbInheritedPresets': 'e76846ad', 'position': 'relative', background: (()=>{return (this.state.selectedIndex == i) ? '#007BFF' : ((this.hasError(i)) ? '#ffe0b2' : '');})(), color: (()=>{return (this.state.selectedIndex == i) ? '#FFFFFF' : '';})(), borderTopColor: (()=>{return (this.hasError(i)) ? '#e65100' : '';})(), borderRightColor: (()=>{return (this.hasError(i)) ? '#e65100' : '';})(), borderBottomColor: (()=>{return (this.hasError(i)) ? '#e65100' : '';})(), borderLeftColor: (()=>{return (this.hasError(i)) ? '#e65100' : '';})()}, key="item_" + i, onClick=((event) => { window.internalFsbSubmit('802159d0', 'Listing', event, ((results) => { this.manipulate('802159d0', 'Listing', results); }).bind(this)); }).bind(this), type="button", data-index=i + '', onSuccess=this.onButtonSuccess_802159d0.bind(this), onSubmitting=this.onButtonSubmitting_802159d0.bind(this), internal-fsb-guid="802159d0")
                                      input.internal-fsb-element.col-12(type="hidden", value=this.getDataFromNotation("Quote[" + i + "].qid"), internal-fsb-guid="72aecc3a")
                                      .internal-fsb-element(style={'FsbInheritedPresets': '', 'background': 'rgba(214, 237, 255, 0)'}, internal-fsb-guid="704100b7")
                                        .container-fluid
                                          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                            .internal-fsb-element.-fsb-preset-49a6327a.col-9.offset-0(style={'FsbInheritedPresets': '49a6327a', color: (()=>{return (this.state.selectedIndex == i) ? '#FFFFFF' : ((this.hasError(i)) ? '#e65100' : '');})()}, dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[" + i + "].title"))}, internal-fsb-guid="53d42bea")
                                            .internal-fsb-element.-fsb-preset-4aee31ab.col-7(style={'FsbInheritedPresets': '4aee31ab', color: (()=>{return (this.state.selectedIndex == i) ? '#FFFFFF' : (this.hasError(i) ? '#e65100' : '');})()}, internal-fsb-guid="3945ba95")
                                              | #{this.getSubtitle(i)}
                                            .internal-fsb-element.-fsb-preset-3bec5885.col-5(style={'FsbInheritedPresets': '3bec5885'}, internal-fsb-guid="c78396c8")
                                              | #{this.getTag(i)}
                                            .internal-fsb-element.-fsb-preset-098de259(style={'FsbInheritedPresets': '098de259', display: (()=>{return (this.getNoticeCount(i) != 0) ? 'block' : 'none';})(), position: (()=>{return 'absolute';})()}, internal-fsb-guid="9544ebc1")
                                              | #{this.getNoticeCount(i)}
                            .internal-fsb-element.col-12(style={'paddingLeft': '0px', 'paddingRight': '0px', display: (()=>{return this.getQuoteTypeDisplay(QuoteType.CHATTING, true);})()}, internal-fsb-guid="0250cb01")
                              .container-fluid
                                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                            .internal-fsb-element.col-12(style={'paddingLeft': '0px', 'paddingRight': '0px', display: (()=>{return this.getQuoteTypeDisplay(QuoteType.PAID, true);})()}, internal-fsb-guid="a1595e85")
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
                                            .internal-fsb-element.-fsb-preset-098de259(style={'FsbInheritedPresets': '098de259', display: (()=>{return (this.getNoticeCount(i) != 0) ? 'block' : 'none';})(), position: (()=>{return 'absolute';})()}, internal-fsb-guid="52b143be")
                                              | #{this.getNoticeCount(i)}
                        .internal-fsb-element.internal-fsb-allow-cursor(style={'position': 'relative', 'flexGrow': '1', 'WebkitFlexGrow': '1'}, internal-fsb-guid="154b7137")
                          .internal-fsb-element.internal-fsb-allow-cursor(style={'overflowX': 'hidden', 'MsOverflowX': 'hidden', 'overflowY': 'auto', 'MsOverflowY': 'auto', 'position': 'absolute', 'left': '0px', 'top': '0px', 'right': '0px', 'bottom': '0px', 'paddingTop': '5px', 'paddingBottom': '5px'}, internal-fsb-guid="ed65b978")
                            .internal-fsb-element(style={display: (()=>{return this.getQuoteTypeDisplay(QuoteType.AUCTIONING, true);})()}, internal-fsb-guid="ae9a328e")
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
                                                    .internal-fsb-element.col-12(style={display: (()=>{return (this.isSelfRank(i)) ? 'block' : 'none';})(), padding: '0px'}, internal-fsb-guid="21d1c3ed")
                                                      img(style={'display': 'block', 'width': '80px', 'height': '80px', 'marginLeft': '10px', 'marginRight': '10px'}, src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/rank-active.png")
                                                    .internal-fsb-element.col-12(style={display: (()=>{return (this.isSelfRank(i)) ? 'none' : 'block';})(), padding: '0px'}, internal-fsb-guid="cccea251")
                                                      img(style={'display': 'block', 'width': '60px', 'opacity': '0.5', 'WebkitOpacity': '0.5', 'marginLeft': '20px', 'height': '60px', 'marginTop': '10px', 'marginBottom': '10px', 'marginRight': '20px'}, src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/rank-inactive.png")
                                                    .internal-fsb-element.col-12(style={'fontSize': '12px', 'textAlign': 'center', 'paddingLeft': '0px', 'paddingRight': '0px', 'fontWeight': 'bold', 'color': (()=>{return (this.isSelfRank(i)) ? 'rgb(22, 98, 250)' : '';})() || 'rgba(217, 217, 217, 1)', 'marginTop': '5px'}, internal-fsb-guid="5022e90e")
                                                      | #{this.getRankSequenceTag(i)}
                                        .internal-fsb-element.col-12(internal-fsb-guid="0a39ec74")
                                          .container-fluid
                                            .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                        .internal-fsb-element.col-12.-fsb-self-1715aae1(internal-fsb-guid="1715aae1")
                                          | #{this.getAuctionSummary(this.state.selectedIndex)}
                                        .internal-fsb-element.col-12(style={'color': 'rgba(22, 98, 250, 1)', 'textAlign': 'center', 'marginBottom': '15px'}, internal-fsb-guid="76197d74")
                                          | #{this.getLongRemainingTime(this.state.selectedIndex, true)}
                                        .internal-fsb-element.col-12(style={'color': 'rgba(255, 0, 0, 1)', 'textAlign': 'center', 'marginBottom': '15px', display: (()=>{return (this.hasError(this.state.selectedIndex)) ? 'block' : 'none';})()}, internal-fsb-guid="22cb5230")
                                          | มีบางรายการที่คุณต้องแก้เพื่อให้ผ่านงานประมูลราคา
                                        each data, i in this.getDataFromNotation("Quote[#i].Listing", true)
                                          - const Project_Controls_FlowLayout_c6ba5b53_ = Project.Controls.FlowLayout_c6ba5b53;
                                          _Project_Controls_FlowLayout_c6ba5b53_(onpricechanged=this.onPriceChanged.bind(this), index=i, enabled=this.getFormEnabledState(), isformready=this.state.isFormReady, key="item_" + i, row=data)
                                        .internal-fsb-element.col-12.offset-0(style={'paddingLeft': '0px', 'paddingRight': '0px', 'marginTop': '30px'}, internal-fsb-guid="7800a559")
                                          .container-fluid
                                            .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                              .internal-fsb-element.col-12(style={'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-guid="b24342e9")
                                                .container-fluid
                                                  .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                                    .internal-fsb-element.col-3.offset-0(style={'fontSize': '14px', 'paddingTop': '5px', 'textAlign': 'right', 'paddingRight': '30px'}, internal-fsb-guid="8933226c")
                                                      | ค่าขนส่ง
                                                    .internal-fsb-element.col-6.offset-0(style={padding: '0px'}, internal-fsb-guid="54c30d5c")
                                                      input.form-control.form-control-sm(style={'display': 'block', 'width': '100%', 'marginBottom': '5px'}, onChange=this.onTextboxChange_54c30d5c.bind(this), type="text", disabled=!this.props.enabled, value=this.state.deliverCost)
                                                    .internal-fsb-element.col-2.offset-0(style={'fontSize': '14px', 'paddingTop': '5px'}, internal-fsb-guid="235c20be")
                                                      | บาท
                                              .internal-fsb-element.col-12.offset-0(style={'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-guid="3c9b5cca")
                                                .container-fluid
                                                  .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                                    .internal-fsb-element.col-3.offset-0(style={'fontSize': '14px', 'paddingTop': '5px', 'textAlign': 'right', 'paddingRight': '30px'}, internal-fsb-guid="5c476c10")
                                                      | ส่วนลด
                                                    .internal-fsb-element.col-6.offset-0(style={padding: '0px'}, internal-fsb-guid="05733be3")
                                                      input.form-control.form-control-sm(style={'display': 'block', 'width': '100%'}, onChange=this.onTextboxChange_05733be3.bind(this), type="text", disabled=!this.props.enabled, value=this.state.discount)
                                                    .internal-fsb-element.col-2.offset-0(style={'fontSize': '14px', 'paddingTop': '5px'}, internal-fsb-guid="ee68a094")
                                                      | บาท
                                              .internal-fsb-element.col-12(style={'paddingTop': '15px', 'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-guid="c3d6d83e")
                                                .container-fluid
                                                  .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                                    .internal-fsb-element.col-3.offset-0(style={'FsbInheritedPresets': '', 'fontSize': '14px', 'textAlign': 'right', 'paddingRight': '30px'}, internal-fsb-guid="ee46635c")
                                                      | การคำนวณภาษี
                                                    label.internal-fsb-element.col-2.offset-0(style={'paddingLeft': '0px', 'paddingRight': '0px', 'paddingTop': '2px'}, internal-fsb-guid="1bc65357")
                                                      .container-fluid
                                                        .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                                          .internal-fsb-element.-fsb-preset-b6c9ad89.col-1.offset-0(style={padding: '0px'}, internal-fsb-guid="9d1cc748")
                                                            input(style={'display': 'block', 'FsbInheritedPresets': 'b6c9ad89'}, onClick=this.onRadioClick_9d1cc748.bind(this), type="radio", disabled=!this.props.enabled, name="vat1", checked="true", value="0")
                                                          .internal-fsb-element.-fsb-preset-b5cd72c0.col-11.offset-0(style={'FsbInheritedPresets': 'b5cd72c0'}, internal-fsb-guid="ca6447e2")
                                                            | Vat ใน
                                                    label.internal-fsb-element.col-2.offset-0(style={'paddingLeft': '0px', 'paddingRight': '0px', 'paddingTop': '2px'}, internal-fsb-guid="d15e6502")
                                                      .container-fluid
                                                        .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                                          .internal-fsb-element.-fsb-preset-b6c9ad89.col-1.offset-0(style={padding: '0px'}, internal-fsb-guid="1e76478b")
                                                            input(style={'display': 'block', 'FsbInheritedPresets': 'b6c9ad89'}, onClick=this.onRadioClick_1e76478b.bind(this), type="radio", disabled=!this.props.enabled, name="vat1", checked=this.state.vatType == 1, value="1")
                                                          .internal-fsb-element.-fsb-preset-b5cd72c0.col-11.offset-0(style={'FsbInheritedPresets': 'b5cd72c0'}, internal-fsb-guid="08e399ae")
                                                            | Vat นอก
                                              .internal-fsb-element.col-12.offset-0(style={'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-guid="90c08e45")
                                                .container-fluid
                                                  .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                                    .internal-fsb-element.col-3.offset-0(style={'textAlign': 'right', 'fontSize': '14px', 'paddingRight': '30px', 'paddingTop': '5px'}, internal-fsb-guid="da006a4b")
                                                      | โปรโมชั่นพิเศษ
                                                    .internal-fsb-element.col-6.offset-0(style={padding: '0px'}, internal-fsb-guid="baa65b1b")
                                                      textarea.form-control.form-control-sm(style={'display': 'block', 'width': '100%'}, type="text", rows="2", value=this.state.promotion, disabled=!this.props.enabled)
                                        .internal-fsb-element.col-12.-fsb-preset-1715aae1(style={'FsbInheritedPresets': '1715aae1', 'fontWeight': 'bold', 'marginTop': '30px'}, internal-fsb-guid="da4a5daa")
                                          | เสนอราคาใหม่ที่ราคา
                                        .internal-fsb-element.col-6.offset-3(style={padding: '0px'}, internal-fsb-guid="c03d6613")
                                          input.form-control.form-control-sm(style={'display': 'block', 'width': '100%'}, ref="price", type="text", placeholder="ราคารวมทั้งหมด", disabled=true, defaultValue=this.getDataFromNotation("Quote[#i].Auction.price"))
                                        .internal-fsb-element.col-2.offset-0(internal-fsb-guid="2b06dab6")
                                          | บาท
                                        input.internal-fsb-element.col-12(type="hidden", value="", internal-fsb-guid="d30aa93b")
                                        input.internal-fsb-element.col-12(type="hidden", value=this.getDataFromNotation("Quote[#i].qid"), internal-fsb-guid="a5b102c4")
                                        Button.internal-fsb-element.internal-fsb-allow-cursor.btn.btn-primary.btn-sm.col-4.offset-4(style={'marginTop': '10px', 'marginBottom': '10px'}, onClick=((event) => { window.internalFsbSubmit('9868a6d5', 'Auction', event, ((results) => { this.manipulate('9868a6d5', 'Auction', results); }).bind(this)); }).bind(this), type="button", disabled=!this.getFormEnabledState(), onSuccess=this.onButtonSuccess_9868a6d5.bind(this), onSubmitting=this.onButtonSubmitting_9868a6d5.bind(this), onSubmitted=this.onButtonSubmitted_9868a6d5.bind(this), internal-fsb-guid="9868a6d5")
                                          .internal-fsb-element(internal-fsb-guid="9868a6d5-text")
                                            | เคาะ
                            .internal-fsb-element(style={display: (()=>{return this.getQuoteTypeDisplay(QuoteType.OFFERING, true);})()}, internal-fsb-guid="51201e78")
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
                                                    .internal-fsb-element(style={display: (()=>{return (this.isSelfRank(i)) ? 'block' : 'none';})(), padding: '0px'}, internal-fsb-guid="82836507")
                                                      img(style={'display': 'block', 'width': '80px', 'marginLeft': '10px', 'marginRight': '10px', 'height': '80px'}, src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/rank-active.png")
                                                    .internal-fsb-element(style={display: (()=>{return (this.isSelfRank(i)) ? 'none' : 'block';})(), padding: '0px'}, internal-fsb-guid="98b1615a")
                                                      img(style={'display': 'block', 'width': '60px', 'height': '60px', 'marginLeft': '20px', 'marginRight': '20px', 'marginTop': '10px', 'marginBottom': '10px'}, src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/rank-inactive.png")
                                                    .internal-fsb-element.col-12(style={'paddingLeft': '0px', 'paddingRight': '0px', 'marginTop': '5px', 'fontSize': '12px', 'textAlign': 'center', 'color': (()=>{return (this.isSelfRank(i)) ? 'rgb(22, 98, 250)' : '';})() || 'rgba(217, 217, 217, 1)', 'fontWeight': 'bold'}, internal-fsb-guid="9be68c4e")
                                                      | #{this.getRankSequenceTag(i)}
                                        .internal-fsb-element.col-12.-fsb-preset-1715aae1(style={'FsbInheritedPresets': '1715aae1', 'bottom': '15px'}, internal-fsb-guid="e1b315be")
                                          | #{this.getAuctionSummary(this.state.selectedIndex)}
                                        .internal-fsb-element.col-12(style={'marginBottom': '15px', 'textAlign': 'center', 'color': 'rgba(255, 0, 0, 1)', display: (()=>{return (this.hasError(this.state.selectedIndex)) ? 'block' : 'none';})()}, internal-fsb-guid="cbb50d4a")
                                          | มีบางรายการที่ไม่ผ่านเกณฑ์ และจะถูกแสดงในหน้าผลการสืบราคาของลูกค้าด้วยสีแดง
                                        each data, i in this.getDataFromNotation("Quote[#i].Listing", true)
                                          .internal-fsb-element.col-12.-fsb-preset-c6ba5b53(style={'FsbInheritedPresets': 'c6ba5b53', 'background': 'rgba(217, 217, 217, 1)', 'borderLeftColor': 'rgba(128, 128, 128, 1)', 'borderRightColor': 'rgba(128, 128, 128, 1)', 'borderTopColor': 'rgba(128, 128, 128, 1)', 'borderBottomColor': 'rgba(128, 128, 128, 1)'}, key="item_" + i, internal-fsb-guid="ce9a10c5")
                                            .container-fluid
                                              .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                                .internal-fsb-element.col-4.offset-0.-fsb-preset-65ec89d1(style={'FsbInheritedPresets': '65ec89d1', 'paddingLeft': '15px', 'paddingRight': '15px'}, internal-fsb-guid="19ce03e8")
                                                  .container-fluid
                                                    .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                                      .internal-fsb-element.col-12(style={'fontWeight': 'bold', 'fontSize': '14px', 'paddingLeft': '0px', 'paddingRight': '0px', 'borderBottomWidth': '1px', 'marginBottom': '5px', 'borderBottomStyle': 'solid', 'borderBottomColor': 'rgba(128, 128, 128, 0.25)'}, dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[#i].Listing[" + i + "].title"))}, internal-fsb-guid="07673d1a")
                                                      .internal-fsb-element.col-6.offset-0(style={'paddingLeft': '0px', 'paddingRight': '0px'}, dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[#i].Listing[" + i + "].size"))}, internal-fsb-guid="19d0b023")
                                                      .internal-fsb-element.col-6.offset-0(style={'paddingLeft': '0px', 'paddingRight': '0px'}, dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[#i].Listing[" + i + "].quantity"))}, internal-fsb-guid="bd0d3bad")
                                                      .internal-fsb-element.col-12(style={'paddingLeft': '0px', 'paddingRight': '0px', 'marginTop': '10px', 'fontSize': '12px', 'color': 'rgba(128, 128, 128, 1)'}, dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[#i].Listing[" + i + "].note"))}, internal-fsb-guid="937cee3d")
                                                .internal-fsb-element.-fsb-preset-65ec89d1.col-2.offset-0(style={'FsbInheritedPresets': '65ec89d1', 'background': 'rgba(252, 252, 252, 0.2)', 'borderRadius': '5px 5px 5px 5px', 'WebkitBorderRadius': '5px 5px 5px 5px', 'paddingLeft': '0px', 'paddingRight': '0px', 'borderTopColor': 'rgba(255, 255, 255, 0.25)', 'borderTopStyle': 'solid', 'borderLeftStyle': 'solid', 'borderLeftColor': 'rgba(255, 255, 255, 0.25)', 'borderBottomStyle': 'solid', 'borderBottomColor': 'rgba(255, 255, 255, 0.25)', 'borderRightStyle': 'solid', 'borderRightColor': 'rgba(255, 255, 255, 0.25)', 'borderTopWidth': '1px', 'borderLeftWidth': '1px', 'borderRightWidth': '1px', 'borderBottomWidth': '1px'}, internal-fsb-guid="9ecd9ed0")
                                                  .container-fluid
                                                    .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                                      .internal-fsb-element.col-12(style={'fontWeight': 'bold', 'marginBottom': '5px'}, internal-fsb-guid="00758360")
                                                        | สินค้าเทียบเคียง: #{this.getSubstituteDisplayText(i)}
                                                .internal-fsb-element.-fsb-preset-65ec89d1.col-2.offset-0(style={'FsbInheritedPresets': '65ec89d1', display: (()=>{return ([1, 2].indexOf(data.relations['Substitute'] && data.relations['Substitute'].rows[0] && data.relations['Substitute'].rows[0].columns['type']) != -1) ? 'block' : 'none';})()}, internal-fsb-guid="176a4c29")
                                                  .container-fluid
                                                    .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                                      .internal-fsb-element.col-12.offset-0(style={'fontWeight': 'bold', 'marginBottom': '5px'}, internal-fsb-guid="b840c1c0")
                                                        | เปลี่ยนวัสดุเป็น:
                                                .internal-fsb-element.col-4.offset-0.-fsb-preset-65ec89d1(style={'paddingLeft': '15px', 'paddingRight': '15px', 'FsbInheritedPresets': '65ec89d1', display: (()=>{return ([1, 2].indexOf(data.relations['Substitute'] && data.relations['Substitute'].rows[0] && data.relations['Substitute'].rows[0].columns['type']) != -1) ? 'block' : 'none';})()}, internal-fsb-guid="0d51ec0d")
                                                  .container-fluid
                                                    .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                                      .internal-fsb-element.col-12(style={'fontWeight': 'bold', 'fontSize': '14px', 'paddingLeft': '0px', 'paddingRight': '0px', 'borderBottomWidth': '1px', 'marginBottom': '5px', 'borderTopColor': 'rgba(128, 128, 128, 1)', 'borderBottomStyle': 'solid', 'borderBottomColor': 'rgba(128, 128, 128, 0.25)'}, dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[#i].Listing[" + i + "].Substitute.title"))}, internal-fsb-guid="8656cea5")
                                                      .internal-fsb-element.col-6.offset-0(style={'paddingLeft': '0px', 'paddingRight': '0px'}, dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[#i].Listing[" + i + "].Substitute.size"))}, internal-fsb-guid="ed22bc9a")
                                                      .internal-fsb-element.col-6.offset-0(style={'paddingLeft': '0px', 'paddingRight': '0px'}, dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[#i].Listing[" + i + "].Substitute.quantity"))}, internal-fsb-guid="a9a3406a")
                                  .internal-fsb-element.-fsb-preset-1715aae1.col-12.offset-0(style={'FsbInheritedPresets': '1715aae1'}, internal-fsb-guid="5428078e")
                                    | คุณเสนอราคาที่ #{this.getDataFromNotation('Quote[#i].Auction.price')} บาท
                                  Button.internal-fsb-element.internal-fsb-allow-cursor.col-4.offset-4.btn.btn-danger.btn-sm(style={'marginTop': '10px', 'marginBottom': '10px'}, type="button", internal-fsb-guid="d3e31c36")
                                    .internal-fsb-element(internal-fsb-guid="d3e31c36-text")
                                      | ยกเลิก
                            .internal-fsb-element(style={display: (()=>{return this.getQuoteTypeDisplay(QuoteType.CHATTING, true);})()}, internal-fsb-guid="76cdd2cd")
                              .container-fluid
                                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                  .internal-fsb-element.col-12(internal-fsb-guid="7958b83c")
                                    | ABCD
                            .internal-fsb-element(style={display: (()=>{return this.getQuoteTypeDisplay(QuoteType.PAID, true);})()}, internal-fsb-guid="3318b254")
                              .container-fluid
                                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                  .internal-fsb-element.col-12(internal-fsb-guid="a34ccc8e")
                                    | ABCD
        .internal-fsb-element(style={'position': 'fixed', 'width': '325px', 'right': '50px', 'bottom': '0px', 'zIndex': '2000', 'background': (()=>{return (this.state.expandingChat) ? '' : 'rgb(22, 98, 250)';})() || 'linear-gradient(0deg, rgba(153, 24, 245, 1) 0%, rgba(22, 98, 250, 1) 100%)', 'overflowY': 'hidden', 'MsOverflowY': 'hidden', 'overflowX': 'hidden', 'MsOverflowX': 'hidden', 'borderRadius': '4px 4px 0px 0px', 'WebkitBorderRadius': '4px 4px 0px 0px', 'paddingLeft': '2px', 'paddingRight': '2px', 'FsbBackgroundType': 'linear'}, internal-fsb-guid="c70d81e7")
          .container-fluid
            .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
              .internal-fsb-element.col-12(style={'paddingLeft': '0px', 'paddingRight': '0px', 'paddingTop': '5px', 'paddingBottom': '5px'}, internal-fsb-guid="05b62997")
                .container-fluid
                  .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                    Button.internal-fsb-element.internal-fsb-allow-cursor.col-12(style={'background': 'rgba(252, 252, 252, 0)', 'color': 'rgba(255, 255, 255, 1.0)', 'fontSize': '14px', 'fontWeight': 'bold', 'textAlign': 'left', 'paddingTop': '3px', 'paddingBottom': '3px', 'borderTopStyle': 'none', 'borderRightStyle': 'none', 'borderBottomStyle': 'none', 'borderLeftStyle': 'none'}, type="button", onClick=this.onButtonClick_2b2a0681.bind(this), internal-fsb-guid="2b2a0681")
                      .internal-fsb-element(style={'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-guid="d319e397")
                        | สนทนากับลูกค้า
              .internal-fsb-element.col-12(style={'background': 'rgba(255, 255, 255, 1)', 'paddingLeft': '0px', 'paddingRight': '0px', display: (()=>{return (this.state.expandingChat) ? 'block' : 'none';})()}, internal-fsb-guid="d124e365")
                .container-fluid
                  .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                    .internal-fsb-element.col-12(style={'overflowY': 'scroll', 'MsOverflowY': 'scroll', 'maxHeight': '33vh', 'paddingLeft': '7px', 'paddingRight': '7px'}, ref="scroll", internal-fsb-guid="5a07ab49")
                      .internal-fsb-element.col-12(style={'textAlign': 'center', 'color': 'rgba(128, 128, 128, 1)', 'fontSize': '12px', 'marginTop': '7px', 'marginBottom': '7px'}, internal-fsb-guid="eb02b828")
                        | ไม่มีข้อความถัดจากนี้
                      each data, i in this.getDataFromNotation("Quote[#i].Message", true)
                        .internal-fsb-element.col-12(style={'paddingLeft': '0px', 'paddingRight': '0px', 'paddingBottom': '7px'}, key="item_" + i, internal-fsb-guid="4996502e")
                          .container-fluid
                            .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                              .internal-fsb-element.internal-fsb-allow-cursor.col-10(style={'paddingLeft': '0px', 'paddingRight': '0px', 'display': (()=>{return (this.getDataFromNotation("Quote[#i].Message[" + i + "].type") == 1) ? 'flex' : 'none';})() || 'flex'}, internal-fsb-guid="ab5366c6")
                                .internal-fsb-element(style={'paddingLeft': '15px', 'paddingRight': '15px', 'fontSize': '13px', 'background': 'rgba(214, 237, 255, 1)', 'paddingTop': '5px', 'paddingBottom': '5px', 'borderRadius': '20px 20px 20px 20px', 'WebkitBorderRadius': '20px 20px 20px 20px'}, dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[#i].Message[" + i + "].message"))}, internal-fsb-guid="4e60b6c9")
                              .internal-fsb-element.internal-fsb-allow-cursor.offset-2.col-10(style={'paddingLeft': '0px', 'paddingRight': '0px', 'display': (()=>{return (this.getDataFromNotation("Quote[#i].Message[" + i + "].type") == 0) ? 'flex' : 'none';})() || 'flex', 'flexDirection': 'row-reverse', 'WebkitFlexDirection': 'row-reverse', 'MsFlexDirection': 'row-reverse'}, internal-fsb-guid="a7204427")
                                .internal-fsb-element(style={'fontSize': '13px', 'background': 'rgba(237, 237, 237, 1)', 'paddingLeft': '15px', 'paddingRight': '15px', 'paddingTop': '5px', 'paddingBottom': '5px', 'borderRadius': '20px 20px 20px 20px', 'WebkitBorderRadius': '20px 20px 20px 20px', 'textAlign': 'right'}, dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[#i].Message[" + i + "].message"))}, internal-fsb-guid="be9d8059")
                    .internal-fsb-element.col-12(style={'paddingLeft': '5px', 'paddingRight': '5px', 'borderTopWidth': '1px', 'borderTopColor': 'rgba(212, 212, 212, 1)', 'borderTopStyle': 'solid', 'paddingTop': '8px', 'paddingBottom': '8px'}, internal-fsb-guid="25678294")
                      .container-fluid
                        .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                          .internal-fsb-element.col-9.offset-0(style={padding: '0px'}, internal-fsb-guid="8d1ec385")
                            textarea.form-control.form-control-sm(style={'display': 'block', 'width': '100%', 'FsbInheritedPresets': '', 'borderRadius': '20px 20px 20px 20px', 'WebkitBorderRadius': '20px 20px 20px 20px'}, ref="chatInput", type="text", placeholder="ข้อความ", rows="1", required=true, disabled=this.state.submittingChat)
                          input.internal-fsb-element.col-12(type="hidden", value=this.getDataFromNotation("Quote[#i].qid"), internal-fsb-guid="b16eadbb")
                          input.internal-fsb-element.col-12(type="hidden", internal-fsb-guid="a1a3c540")
                          input.internal-fsb-element.col-12(type="hidden", value="0", internal-fsb-guid="208c3d23")
                          Button.internal-fsb-element.internal-fsb-allow-cursor.col-3.offset-0.btn.btn-primary.btn-sm(style={'borderRadius': '20px 20px 20px 20px', 'WebkitBorderRadius': '20px 20px 20px 20px'}, onClick=((event) => { window.internalFsbSubmit('c788d322', 'Message', event, ((results) => { this.manipulate('c788d322', 'Message', results); }).bind(this)); }).bind(this), type="button", disabled=this.state.submittingChat, onSuccess=this.onButtonSuccess_c788d322.bind(this), onSubmitting=this.onButtonSubmitting_c788d322.bind(this), onSubmitted=this.onButtonSubmitted_c788d322.bind(this), internal-fsb-guid="c788d322")
                            .internal-fsb-element(internal-fsb-guid="c788d322-text")
                              | ส่ง
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