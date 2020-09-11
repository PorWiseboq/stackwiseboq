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
enum Step {
  SELECTION,
  PAYMENT,
  PAID
};

/**
 * @author Jirachai Chansivanon <antronic.inc@gmail.com>
 * @see {@link https://github.com/antronic/that-baht-text-js|GitHub}
 */

// options

const MAX_POSITION = 6
const UNIT_POSITION = 0
const TEN_POSITION = 1

const PRIMARY_UNIT = 'บาท'
const SECONDARY_UNIT = 'สตางค์'
const WHOLE_NUMBER_TEXT = 'ถ้วน'

const NUMBER_TEXTS = 'ศูนย์,หนึ่ง,สอง,สาม,สี่,ห้า,หก,เจ็ด,แปด,เก้า,สิบ'.split(',')
const UNIT_TEXTS = 'สิบ,ร้อย,พัน,หมื่น,แสน,ล้าน'.split(',')

const getIntegerDigits = numberInput => parseInt(numberInput.split('.')[0], 10).toString()
const getFractionalDigits = numberInput => parseInt(numberInput.split('.')[1], 10).toString()

const hasFractionalDigits = numberInput => numberInput !== undefined && numberInput != '0'

const isZeroValue = number => number == 0
const isUnitPosition = position => position == UNIT_POSITION
const isTenPosition = position => position % MAX_POSITION == TEN_POSITION
const isMillionsPosition = position => (position >= MAX_POSITION && position % MAX_POSITION == 0)
const isLastPosition = (position, lengthOfDigits) => position + 1 < lengthOfDigits

const reverseNumber = (number) => {
	const numberStr = number.toString()
	return numberStr.split('').reverse().join('')
}

const getBathUnit = (position, number) => {
	let unitText = ''

	if (!isUnitPosition(position)) {
		unitText = UNIT_TEXTS[Math.abs(position - 1) % MAX_POSITION]
	}

	if (isZeroValue(number) && !isMillionsPosition(position)) {
		unitText = ''
	}

	return unitText
}

const getBathText = (position, number, lengthOfDigits) => {
	let numberText = NUMBER_TEXTS[number]

	if (isZeroValue(number)) {
		return ''
	}

	if (isTenPosition(position) && number == 1) {
		numberText = ''
	}

	if (isTenPosition(position) && number == 2) {
		numberText = 'ยี่'
	}

	if (isMillionsPosition(position) && isLastPosition(position, lengthOfDigits) && number == 1) {
		numberText = 'เอ็ด'
	}

	if (lengthOfDigits == 2 && isLastPosition(position, lengthOfDigits) && number == 1) {
		numberText = 'เอ็ด'
	}

	if (lengthOfDigits > 1 && isUnitPosition(position) && number == 1) {
		numberText = 'เอ็ด'
	}

	return numberText
}

// convert function without async
const convert = (numberInput) => {
	const numberReverse = reverseNumber(numberInput)
	let textOutput = ''
	// console.log('>', numberReverse.split(''))
	numberReverse.split('').forEach((number, i) => {
		textOutput = `${getBathText(i, number, numberReverse.length)}${getBathUnit(i, number)}${textOutput}`
	})
	return textOutput
}

const parseFloatWithPrecision = (number, precision = 2) => {
	const numberFloatStr = parseFloat(number).toString().split('.')
	const integerUnitStr = numberFloatStr[0]
	const fractionalUnitStr = (numberFloatStr.length == 2) ? numberFloatStr[1].substring(0, precision) : '00'
	return parseFloat(`${integerUnitStr}.${fractionalUnitStr}`).toFixed(precision)
}

const convertFullMoney = (numberInput) => {
	const numberStr = parseFloatWithPrecision(numberInput)

	const integerDigits = getIntegerDigits(numberStr)
	const fractionalDigits = getFractionalDigits(numberStr)

	const intTextOutput = convert(integerDigits)
	const textOutput = []
	if (intTextOutput) {
		textOutput.push(`${[intTextOutput, PRIMARY_UNIT].join('')}`)
	}
	if (intTextOutput && !hasFractionalDigits(fractionalDigits)) {
		textOutput.push(WHOLE_NUMBER_TEXT)
	}
	if (hasFractionalDigits(fractionalDigits) && convert(fractionalDigits)) {
		textOutput.push(`${[convert(fractionalDigits), SECONDARY_UNIT].join('')}`)
	}

	return textOutput.join('')
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
  step: Step;
  submitting: boolean;
}

let DefaultProps = Object.assign({}, DefaultBaseProps, {
  
});
let DefaultState = Object.assign({}, DefaultBaseState, {
  step: Step.SELECTION,
  submitting: false
});

// Auto[ClassBegin]--->
class FlowLayout_a23ed480 extends Base {
  state: IState = null;
  protected static defaultProps: IProps = DefaultProps;
  
  constructor(props) {
    super(props);
    this.state = CodeHelper.clone(DefaultState);
    
    this.initialize();
  }
  
  register() {
    DataManipulationHelper.register("bdcbb907", "update", ["c18d1ab2","6e068626","939d2d75"], {initClass: null, submitCrossType: null, enabledRealTimeUpdate: false, retrieveInto: null});
    DataManipulationHelper.register("d480ae4d", "update", ["c6cd6a36","5cab012e","39c374d3","0c59a0a4","c18d1ab2","6e068626","775b58b9","939d2d75","4b5256da","137c966d"], {initClass: null, submitCrossType: "upsert", enabledRealTimeUpdate: false, retrieveInto: null});
    DataManipulationHelper.register("0a5b0022", "retrieve", ["dc7901c9"], {initClass: null, submitCrossType: null, enabledRealTimeUpdate: false, retrieveInto: null});
  }
  // <---Auto[ClassBegin]
  
  // Declare class variables and functions here:
  //
  protected initialize(): void {
    if (this.getDataFromNotation('Statuses.status') != 0) {
      this.state.step = Step.PAID;
    }
    
    window.setInterval((() => {
      const element = ReactDOM.findDOMNode(this.refs.refresh);
      element && element.click();
    }).bind(this), 15 * 1000);
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
  
  private getPaymentStatus(): string {
    if (this.getDataFromNotation('Statuses.status') == 3) {
      return 'เกิดความผิดพลาด.. กรุณารอทางเราประสานงานกลับไป';
    }
    else if (this.getDataFromNotation('Statuses.status') == 2) {
      return 'ทางร้านค้าได้รับเงินเรียบร้อยและกำลังทำการจัดส่งสินค้า';
    }
    else if (this.getDataFromNotation('Statuses.status') == 1) {
      return 'WiseBOQ กำลังตรวจสอบจำนวนเงินที่ได้รับจากการโอน';
    }
    else {
      return 'ผู้ซื้อได้จัดการโอนเงินผ่านธนาคารเป็นที่เรียบร้อยแล้ว';
    }
  }
  
  private isMerchandiseInError(i: number, j: number): boolean {
    if (j == -1) {
      const listing = this.getDataFromNotation(`Quote[0].Listing`);
      for (let k=0; k<listing.length; k++) {
        if (this.isMerchandiseInError(i, k)) {
          return true;
        }
      }
      return false;
    } else {
      const auction = this.getDataFromNotation(`Quote[0].Auction[${i}]`);
      const listing = this.getDataFromNotation(`Quote[0].Listing[${j}]`);
      const substitute = auction.relations['Substitute'].rows[j];
      
      return substitute.columns['type'] > listing.columns['substitute'];
    }
  }
  
  // Providing data array base on dot notation:
  // 
  protected getDataFromNotation(notation: string, inArray: boolean=false): any {
    if (notation.match(/^Quote\[[0-9]+\].Listing$/)) {
      let rows = super.getDataFromNotation(notation, true);
      let _auctions = super.getDataFromNotation(`${notation.split('.')[0]}.Auction`, true);
      
      for (let row of rows) {
        let auctions = CodeHelper.clone(_auctions);
        
        for (let auction of auctions) {
          auction.relations['Substitute'].rows = auction.relations['Substitute'].rows.filter(substitute => substitute.keys['lid'] == row.keys['lid']);
        }
      
      	row.relations['Auction'] = {
      	  source: null,
      	  group: 'Auction',
      	  rows: auctions
      	};
      }
      
      return rows;
    } else {
      return super.getDataFromNotation(notation, inArray);
    }
  }
  
  // Auto[Merging]--->
  protected onButtonSubmitting_bdcbb907(event: Event) {

    // Handle the event of onButtonSubmitting (Button 1) here:
    // 
    const totalAmountInWord = ReactDOM.findDOMNode(this.refs.totalAmountInWord);
    const checkboxes = $('[data-pricing]:checked').toArray();
    let total = 0;
    
    for (const checkbox of checkboxes) {
      if (!$(checkbox).is(':disabled')) {
        total += parseFloat(checkbox.getAttribute('data-pricing').toString());
      }
    }
    
    if (total == 0) {
      alert('กรุณาเลือกร้านค้าอย่างน้อยหนึ่งรายการ');
      return EventHelper.cancel(event);
    }
    
    totalAmountInWord.innerHTML = convertFullMoney(total);
    
    this.setState({submitting: true});
    
  }

  protected onButtonSubmitted_bdcbb907(event: Event) {

    // Handle the event of onButtonSubmitted (Button 1) here:
    // 
    this.setState({submitting: false});
    
  }

  protected onButtonSuccess_bdcbb907(event: Event) {

    // Handle the event of onButtonSuccess (Button 1) here:
    // 
    this.setState({
      step: Step.PAYMENT
    });
    
  }

  protected onButtonClick_c1c0694d(event: Event) {

    // Handle the event of onButtonClick (Button 4) here:
    // 
    this.setState({
      step: Step.SELECTION
    });
    
  }

  protected onButtonSubmitting_d480ae4d(event: Event) {

    // Handle the event of onButtonSubmitting (Button 5) here:
    // 
    this.setState({submitting: true});
    
  }

  protected onButtonSubmitted_d480ae4d(event: Event) {

    // Handle the event of onButtonSubmitted (Button 5) here:
    // 
    this.setState({submitting: false});
    
  }

  protected onButtonSuccess_d480ae4d(event: Event) {

    // Handle the event of onButtonSuccess (Button 5) here:
    // 
    this.setState({
      step: Step.PAID
    });
    
  }

  protected onButtonClick_3d97109b(event: Event) {

    // Handle the event of onButtonClick (Button 1) here:
    // 
    this.setState({
      step: Step.PAID
    });
    
  }
  // <---Auto[Merging]
  
  // Auto[ClassEnd]--->
  protected render(): any {
    return pug `
      div(style=Object.assign({}, this.props.forward && this.props.forward.styles || {}), className="internal-fsb-element col-12 " + (this.props.forward && this.props.forward.classes || ''), internal-fsb-guid="a23ed480")
        .container-fluid
          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
            .internal-fsb-element.col-10.offset-1.-fsb-preset-180079a2(style={'FsbInheritedPresets': '180079a2', display: (()=>{return (this.state.step == Step.SELECTION) ? 'block' : 'none';})()}, internal-fsb-guid="94ab9997")
              .container-fluid
                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                  .internal-fsb-element.-fsb-preset-7a279686.col-12.offset-0(style={'FsbInheritedPresets': '7a279686'}, internal-fsb-guid="d4338262")
                    | ผลการประมูลราคาวัสดุก่อสร้าง
                  .internal-fsb-element.col-12.-fsb-preset-4839e353(style={'FsbInheritedPresets': '4839e353'}, internal-fsb-guid="b864ab8e")
                    | ข้างล่างนี้คือผลการประมูล กรุณาเลือกร้านค้าที่คุณพอใจมากที่สุด เพื่อชำระเงินในขั้นถัดไป
                  .internal-fsb-element.col-6.col-sm-5.col-md-4.col-lg-3(style={'paddingLeft': '0px', 'paddingRight': '0px', 'fontSize': '13px', 'borderRightColor': 'rgba(0, 53, 117, 1)', 'borderLeftColor': 'rgba(0, 53, 117, 1)', 'borderTopColor': 'rgba(0, 53, 117, 1)', 'borderBottomColor': 'rgba(0, 53, 117, 1)', 'borderRightWidth': '1px', 'borderRightStyle': 'solid'}, internal-fsb-guid="0ed4d727")
                    .container-fluid
                      .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                        .internal-fsb-element.col-12(style={'width': '200px', 'paddingLeft': '0px', 'paddingRight': '0px', 'borderBottomWidth': '1px', 'borderBottomColor': 'rgba(0, 53, 117, 1)', 'borderBottomStyle': 'solid', 'borderLeftColor': 'rgba(0, 53, 117, 1)', 'borderLeftStyle': 'solid', 'borderLeftWidth': '1px', 'borderTopColor': 'rgba(0, 53, 117, 1)', 'borderTopStyle': 'solid', 'borderTopWidth': '1px', 'paddingTop': '5px', 'paddingBottom': '5px'}, internal-fsb-guid="d223c869")
                          .container-fluid
                            .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                              .internal-fsb-element.col-12(style={'fontWeight': 'bold'}, internal-fsb-guid="59979477")
                                | รายการสินค้า
                        each data, i in this.getDataFromNotation("Quote[0].Listing", true)
                          .internal-fsb-element.col-12(style={'paddingLeft': '0px', 'paddingRight': '0px', 'borderBottomWidth': '1px', 'borderBottomStyle': 'solid', 'borderBottomColor': 'rgba(0, 53, 117, 1)', 'height': '65px', 'paddingTop': '3px', 'borderLeftStyle': 'solid', 'borderLeftColor': 'rgba(0, 53, 117, 1)', 'borderLeftWidth': '1px'}, key="item_" + i, internal-fsb-guid="11eb0e55")
                            .container-fluid
                              .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                .internal-fsb-element.offset-0.col-12.-fsb-preset-13b0cd97(style={'fontWeight': 'bold', 'FsbInheritedPresets': '13b0cd97'}, dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[0].Listing[" + i + "].title"))}, internal-fsb-guid="9d162b51")
                                .internal-fsb-element.offset-0.col-6.-fsb-self-13b0cd97(internal-fsb-guid="13b0cd97")
                                  | #{this.getDataFromNotation("Quote[0].Listing[" + i + "].quantity")}
                                .internal-fsb-element.offset-0.col-6.-fsb-preset-13b0cd97(style={'FsbInheritedPresets': '13b0cd97'}, dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[0].Listing[" + i + "].unit"))}, internal-fsb-guid="57421653")
                        .internal-fsb-element.col-12(style={'paddingLeft': '0px', 'paddingRight': '0px', 'textAlign': 'right', 'fontWeight': 'bold'}, internal-fsb-guid="94e22e23")
                          .container-fluid
                            .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                              .internal-fsb-element.col-12(style={'marginTop': '10px'}, internal-fsb-guid="83de46b7")
                                div
                                  | ค่าขนส่ง
                                div
                              .internal-fsb-element.col-12(internal-fsb-guid="4b04a001")
                                | ส่วนลด
                              .internal-fsb-element.col-12(style={'marginBottom': '20px'}, internal-fsb-guid="e3acab6b")
                                | โปรโมชั่น
                              .internal-fsb-element.col-12(style={'marginBottom': '20px'}, internal-fsb-guid="a92445c5")
                                div
                                  span(style={'fontFamily': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'})
                                    | ราคารวมภาษี
                                  br
                              .internal-fsb-element.col-12(style={'textAlign': 'right', 'fontWeight': 'bold'}, internal-fsb-guid="5eed917a")
                                | เลือกซื้อ
                  .internal-fsb-element.internal-fsb-allow-cursor.col-6.col-sm-7.col-md-8.col-lg-9(style={'overflowX': 'auto', 'MsOverflowX': 'auto', 'overflowY': 'hidden', 'MsOverflowY': 'hidden', 'paddingLeft': '0px', 'paddingRight': '0px', 'fontSize': '13px', 'borderTopColor': 'rgba(0, 53, 117, 1)', 'borderRightColor': 'rgba(0, 53, 117, 1)', 'borderBottomColor': 'rgba(0, 53, 117, 1)', 'borderBottomStyle': 'solid', 'borderBottomWidth': '1px', 'borderRightStyle': 'solid', 'borderTopStyle': 'solid', 'borderRightWidth': '1px', 'borderTopWidth': '1px'}, internal-fsb-guid="56392ad7")
                    .internal-fsb-element(style={'display': 'block', 'whiteSpace': 'nowrap'}, internal-fsb-guid="ebeaa554")
                      each data, i in this.getDataFromNotation("Quote[0].Auction", true)
                        .internal-fsb-element(style={'width': '130px', 'display': 'inline-block', 'borderRightWidth': '1px', 'borderRightColor': 'rgba(0, 53, 117, 1)', 'borderRightStyle': 'solid', 'paddingLeft': '0px', 'paddingRight': '0px', 'borderTopColor': 'rgba(0, 53, 117, 1)', 'FsbInheritedPresets': ''}, key="item_" + i, internal-fsb-guid="ba180c3c")
                          .container-fluid
                            .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                              .internal-fsb-element.col-12.-fsb-preset-13b0cd97(style={'borderBottomWidth': '1px', 'borderBottomStyle': 'solid', 'borderBottomColor': 'rgba(0, 53, 117, 1)', 'fontWeight': 'bold', 'textAlign': 'center', 'FsbInheritedPresets': '13b0cd97', 'paddingTop': '5px', 'paddingBottom': '5px', 'paddingLeft': '5px', 'paddingRight': '5px'}, dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[0].Auction[" + i + "].Store.name"))}, internal-fsb-guid="ce8a654a")
                              each data, j in this.getDataFromNotation("Quote[0].Auction[" + i + "].Substitute", true)
                                .internal-fsb-element.col-12(style={'paddingLeft': '0px', 'paddingRight': '0px'}, key="item_" + j, internal-fsb-guid="8d3daac0")
                                  .container-fluid
                                    .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                      .internal-fsb-element.col-12(style={'borderBottomStyle': 'solid', 'borderBottomColor': 'rgba(0, 53, 117, 1)', 'borderBottomWidth': '1px', 'paddingLeft': '0px', 'paddingRight': '0px', 'height': '65px', 'paddingTop': '3px', 'position': 'relative', color: (()=>{return (this.isMerchandiseInError(i, j)) ? '#ff0000' : '';})()}, internal-fsb-guid="4741d7c7")
                                        .container-fluid
                                          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                            .internal-fsb-element.col-12(style={'paddingLeft': '0px', 'paddingRight': '0px', display: (()=>{return ([0].indexOf(this.getDataFromNotation("Quote[0].Auction[" + i + "].Substitute[" + j + "].type")) != -1) ? 'block' : 'none';})()}, internal-fsb-guid="542d249d")
                                              .container-fluid
                                                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                                  .internal-fsb-element.col-12(style={'paddingLeft': '5px', 'paddingRight': '5px', 'fontWeight': 'bold', 'textAlign': 'center'}, internal-fsb-guid="cbd47cb3")
                                                    | เจาะจง
                                            .internal-fsb-element.col-12(style={'paddingLeft': '0px', 'paddingRight': '0px', display: (()=>{return ([3].indexOf(this.getDataFromNotation("Quote[0].Auction[" + i + "].Substitute[" + j + "].type")) != -1) ? 'block' : 'none';})()}, internal-fsb-guid="7848170c")
                                              .container-fluid
                                                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                                  .internal-fsb-element.col-12(style={'paddingLeft': '5px', 'paddingRight': '5px', 'textAlign': 'center', 'fontWeight': 'bold'}, internal-fsb-guid="6b009c31")
                                                    div
                                                      br
                                                    | ไม่มี
                                                    |                                                                                             
                                            .internal-fsb-element.col-12(style={'paddingLeft': '0px', 'paddingRight': '0px', display: (()=>{return ([1, 2].indexOf(this.getDataFromNotation("Quote[0].Auction[" + i + "].Substitute[" + j + "].type")) != -1) ? 'block' : 'none';})()}, internal-fsb-guid="6d820b70")
                                              .container-fluid
                                                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                                  .internal-fsb-element.col-12.-fsb-preset-13b0cd97(style={'fontWeight': 'bold', 'FsbInheritedPresets': '13b0cd97', 'paddingLeft': '5px', 'paddingRight': '5px', 'textAlign': 'center'}, data-toggle="tooltip", data-placement="top", title=this.getDataFromNotation("Quote[0].Auction[" + i + "].Substitute[" + j + "].title"), dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[0].Auction[" + i + "].Substitute[" + j + "].title"))}, internal-fsb-guid="1eae4292")
                                                  .internal-fsb-element.col-6.-fsb-preset-13b0cd97(style={'FsbInheritedPresets': '13b0cd97', 'paddingLeft': '2px', 'paddingRight': '5px', 'textAlign': 'center'}, title=this.getDataFromNotation("Quote[0].Auction[" + i + "].Substitute[" + j + "].quantity"), data-toggle="tooltip", data-placement="top", internal-fsb-guid="8dca02ed")
                                                    | #{this.getDataFromNotation("Quote[0].Auction[" + i + "].Substitute[" + j + "].quantity")}
                                                  .internal-fsb-element.col-6.-fsb-preset-13b0cd97(style={'FsbInheritedPresets': '13b0cd97', 'paddingLeft': '5px', 'paddingRight': '2px', 'textAlign': 'center'}, title=this.getDataFromNotation("Quote[0].Auction[" + i + "].Substitute[" + j + "].unit"), data-toggle="tooltip", data-placement="top", dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[0].Auction[" + i + "].Substitute[" + j + "].unit"))}, internal-fsb-guid="b5026407")
                                            .internal-fsb-element.col-12(style={'paddingLeft': '0px', 'paddingRight': '0px', 'position': 'absolute', 'left': '0px', 'right': '0px', 'bottom': '0px', display: (()=>{return ([0,1,2].indexOf(this.getDataFromNotation("Quote[0].Auction[" + i + "].Substitute[" + j + "].type")) != -1) ? 'block' : 'none';})()}, internal-fsb-guid="92eba465")
                                              .container-fluid
                                                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                                  .internal-fsb-element.col-12.-fsb-preset-13b0cd97(style={'textAlign': 'center', 'FsbInheritedPresets': '13b0cd97', 'paddingLeft': '5px', 'paddingRight': '5px', 'fontWeight': 'bold'}, title=this.getDataFromNotation("Quote[0].Auction[" + i + "].Substitute[" + j + "].price") + ' บาท', data-toggle="tooltip", data-placement="top", internal-fsb-guid="d58e0636")
                                                    | #{this.getDataFromNotation('Quote[0].Listing.Auction[' + i + '].Substitute.price')} บาท
                              .internal-fsb-element.col-12(style={'paddingLeft': '0px', 'paddingRight': '0px', 'paddingBottom': '10px'}, internal-fsb-guid="65beb763")
                                .container-fluid
                                  .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                    .internal-fsb-element.col-12.-fsb-preset-13b0cd97(style={'paddingLeft': '5px', 'paddingRight': '5px', 'fontWeight': 'bold', 'FsbInheritedPresets': '13b0cd97', 'textAlign': 'center', 'marginTop': '10px'}, internal-fsb-guid="215196e7")
                                      | #{(this.getDataFromNotation('Quote[0].Listing.Auction[' + i + '].deliverCost') || 0).toFixed(2)} บาท
                                    .internal-fsb-element.col-12.-fsb-preset-13b0cd97(style={'paddingLeft': '2px', 'paddingRight': '2px', 'fontWeight': 'bold', 'FsbInheritedPresets': '13b0cd97', 'textAlign': 'center'}, internal-fsb-guid="981552b5")
                                      | #{(this.getDataFromNotation('Quote[0].Listing.Auction[' + i + '].discount') || 0).toFixed(2)} บาท
                                    .internal-fsb-element.col-12.-fsb-preset-13b0cd97(style={'paddingLeft': '2px', 'paddingRight': '2px', 'FsbInheritedPresets': '13b0cd97', 'textAlign': 'center', 'marginBottom': '20px'}, title=this.getDataFromNotation('Quote[0].Listing.Auction[' + i + '].promotion') || 'ไม่มี', data-toggle="tooltip", data-placement="top", internal-fsb-guid="67979486")
                                      | #{this.getDataFromNotation('Quote[0].Listing.Auction[' + i + '].promotion') || 'ไม่มี'}
                                    .internal-fsb-element.col-12.-fsb-preset-13b0cd97(style={'fontWeight': 'bold', 'FsbInheritedPresets': '13b0cd97', 'textAlign': 'center', 'color': (()=>{return (this.isMerchandiseInError(i, -1) || this.getDataFromNotation('Quote[0].Listing.Auction[' + i + '].cancelled')) ? '#ff0000' : '';})() || 'rgba(22, 98, 250, 1)', 'paddingLeft': '2px', 'paddingRight': '2px', 'marginBottom': '20px'}, internal-fsb-guid="d40e3b62")
                                      | #{(this.getDataFromNotation('Quote[0].Listing.Auction[' + i + '].cancelled')) ? 'ยกเลิกไปแล้ว' : this.getDataFromNotation('Quote[0].Listing.Auction[' + i + '].price') + ' บาท'}
                                    input.internal-fsb-element.col-12(type="hidden", value=this.getDataFromNotation("Quote[0].Auction[" + i + "].sid"), internal-fsb-guid="c18d1ab2")
                                    input.internal-fsb-element.col-12(type="hidden", value=this.getDataFromNotation("Quote[0].Auction[" + i + "].qid"), internal-fsb-guid="939d2d75")
                                    .internal-fsb-element.offset-5(style={padding: '0px'}, internal-fsb-guid="6e068626")
                                      input(style={'display': 'block'}, data-index=i, data-pricing=this.getDataFromNotation('Quote[0].Listing.Auction[' + i + '].price'), type="checkbox", value="1", required=true, disabled=this.state.submitting || this.getDataFromNotation('Quote[0].Listing.Auction[' + i + '].cancelled'), defaultChecked=this.getDataFromNotation("Quote[0].Auction[" + i + "].bought") === true)
            Button.internal-fsb-element.-fsb-preset-180079a2.btn.btn-primary.btn-sm.col-4.offset-4(style={'marginTop': '15px', display: (()=>{return (this.state.step == Step.SELECTION) ? 'block' : 'none';})()}, onClick=((event) => { window.internalFsbSubmit('bdcbb907', 'Auction', event, ((results) => { this.manipulate('bdcbb907', 'Auction', results); }).bind(this)); }).bind(this), type="button", disabled=this.state.submitting, onSubmitting=this.onButtonSubmitting_bdcbb907.bind(this), onSuccess=this.onButtonSuccess_bdcbb907.bind(this), onSubmitted=this.onButtonSubmitted_bdcbb907.bind(this), internal-fsb-guid="bdcbb907")
              .internal-fsb-element(internal-fsb-guid="bdcbb907-text")
                | ถัดไป: เลือกวิธีการจ่ายเงิน
            .internal-fsb-element.col-10.offset-1.-fsb-preset-180079a2(style={'FsbInheritedPresets': '180079a2', display: (()=>{return (this.state.step == Step.PAYMENT) ? 'block' : 'none';})()}, internal-fsb-guid="41288a78")
              .container-fluid
                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                  .internal-fsb-element.col-12.-fsb-preset-7a279686(style={'FsbInheritedPresets': '7a279686'}, internal-fsb-guid="b0e94808")
                    | จ่ายเงินค่าสินค้า
                  .internal-fsb-element.col-12.-fsb-preset-4839e353(style={'FsbInheritedPresets': '4839e353'}, internal-fsb-guid="a68112ee")
                    | กรุณาเตรียมเงินและทำการจ่ายค่าสินค้าพร้อมค่าขนส่งให้เรียบร้อย
                  .internal-fsb-element.col-6.offset-3(style={'borderRightColor': 'rgba(22, 98, 250, 1)'}, internal-fsb-guid="179c943c")
                    .container-fluid
                      .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                        .internal-fsb-element.col-12.-fsb-preset-7a279686(style={'textAlign': 'center', 'FsbInheritedPresets': '7a279686'}, internal-fsb-guid="4040dba7")
                          | โอนเงินผ่านธนาคาร
                        .internal-fsb-element.col-12.-fsb-preset-4839e353(style={'textAlign': 'center', 'FsbInheritedPresets': '4839e353'}, internal-fsb-guid="16ed2784")
                          | กรุณาโอนเงินไปที่ธนาคารเอบีซี สาขาห้าหกเจ็ด
                          div
                            | นายกอขอคอ
                        .internal-fsb-element.col-12(internal-fsb-guid="7443b335")
                          .container-fluid
                            .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                              .internal-fsb-element.col-12.-fsb-preset-b5cd72c0(style={'textAlign': 'center', 'FsbInheritedPresets': 'b5cd72c0', 'fontWeight': 'bold', 'marginBottom': '5px', 'fontSize': '14px'}, internal-fsb-guid="ae38da00")
                                | จำนวนเงิน
                              .internal-fsb-element.col-12.-fsb-preset-b5cd72c0(style={'FsbInheritedPresets': 'b5cd72c0', 'textAlign': 'center'}, ref="totalAmountInWord", internal-fsb-guid="9699d64d")
                                | หนึ่งหมื่นห้าพันบาทยี่สิบสตางค์ถ้วน
                        .internal-fsb-element.col-12(style={'marginTop': '15px'}, internal-fsb-guid="a3c6554b")
                          .container-fluid
                            .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                              .internal-fsb-element.col-12.-fsb-preset-b5cd72c0(style={'textAlign': 'center', 'FsbInheritedPresets': 'b5cd72c0', 'fontWeight': 'bold', 'marginBottom': '5px', 'fontSize': '14px'}, internal-fsb-guid="782d3986")
                                | โปรดดำเนินการผ่านธนาคาร
                              .internal-fsb-element.col-12.-fsb-preset-b5cd72c0(style={'FsbInheritedPresets': 'b5cd72c0', 'textAlign': 'center', 'marginBottom': '15px'}, internal-fsb-guid="5eeaed97")
                                | คุณอาจเปิดหน้านี้ทิ้งไว้หรือเข้าสู่ระบบเพื่อกลับเข้ามายังหน้านี้ในภายหลังได้เช่นกัน
                              input.internal-fsb-element.col-12(type="hidden", value="1", internal-fsb-guid="39c374d3")
                              input.internal-fsb-element.col-12(type="hidden", value="123", internal-fsb-guid="137c966d")
                              input.internal-fsb-element.col-12(type="hidden", value="123", internal-fsb-guid="4b5256da")
                              input.internal-fsb-element.col-12(type="hidden", value="1", internal-fsb-guid="775b58b9")
                              .internal-fsb-element.col-12.offset-0(style={padding: '0px'}, internal-fsb-guid="c6cd6a36")
                                input.form-control.form-control-sm(style={'display': 'block', 'width': '100%', 'marginTop': '5px'}, type="text", placeholder="วันและเวลาที่โอนสำเร็จ ddmmyyyy hhmm", required=true, disabled=this.state.submitting)
                              .internal-fsb-element.col-12.offset-0(style={padding: '0px'}, internal-fsb-guid="0c59a0a4")
                                input.form-control.form-control-sm(style={'display': 'block', 'width': '100%', 'marginTop': '10px'}, type="text", placeholder="ชื่อผู้ที่ได้ทำการโอน", required=true, disabled=this.state.submitting)
                              .internal-fsb-element.col-12.offset-0(style={padding: '0px'}, internal-fsb-guid="5cab012e")
                                input.form-control.form-control-sm(style={'display': 'block', 'width': '100%', 'marginTop': '10px'}, type="text", placeholder="ชื่อธนาคารและสาขาต้นทาง", required=true, disabled=this.state.submitting)
                  .internal-fsb-element.col-6.offset-0(style={'borderLeftColor': 'rgba(22, 98, 250, 1)', 'borderLeftStyle': 'solid', 'borderLeftWidth': '1px', 'display': 'none'}, internal-fsb-guid="8173e6a3")
                    .container-fluid
                      .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                        .internal-fsb-element.col-12.-fsb-preset-7a279686(style={'textAlign': 'center', 'FsbInheritedPresets': '7a279686'}, internal-fsb-guid="81a37061")
                          | จ่ายผ่านบัตรเครดิต
                        .internal-fsb-element.col-12.-fsb-preset-4839e353(style={'textAlign': 'center', 'FsbInheritedPresets': '4839e353'}, internal-fsb-guid="9b4e1a4c")
                          | กรุณาเลือกประเภทบัตรเครดิต กรอกหมายเลขบัตร วันหมดอายุ พร้อมทั้งหมายเลข cvv ที่อยู่หลังบัตร
                        .internal-fsb-element.col-10.offset-1(dangerouslySetInnerHTML={__html: "<style type=\"text/css\">\n.StripeElement {\n  box-sizing: border-box;\n\n  height: 40px;\n\n  padding: 10px 12px;\n\n  border: 1px solid transparent;\n  border-radius: 4px;\n  background-color: white;\n\n  box-shadow: 0 1px 3px 0 #e6ebf1;\n  -webkit-transition: box-shadow 150ms ease;\n  transition: box-shadow 150ms ease;\n}\n\n.StripeElement--focus {\n  box-shadow: 0 1px 3px 0 #cfd7df;\n}\n\n.StripeElement--invalid {\n  border-color: #fa755a;\n}\n\n.StripeElement--webkit-autofill {\n  background-color: #fefde5 !important;\n}\n</style>\n<form action=\"/charge\" method=\"post\" id=\"payment-form\">\n  <div class=\"form-row\">\n    <div id=\"card-element\">\n      <!-- A Stripe Element will be inserted here. -->\n    </div>\n    <!-- Used to display form errors. -->\n    <div id=\"card-errors\" role=\"alert\"></div>\n  </div>\n</form>"}, internal-fsb-guid="a1407abd")
                        .internal-fsb-element.col-12(internal-fsb-guid="26a1c7b0")
                          .container-fluid
                            .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
            Button.internal-fsb-element.internal-fsb-allow-cursor.btn.btn-primary.btn-sm.offset-3.col-3(style={'marginTop': '15px', 'marginRight': '10px', display: (()=>{return (this.state.step == Step.PAYMENT) ? 'block' : 'none';})()}, type="button", disabled=this.state.submitting, onClick=this.onButtonClick_c1c0694d.bind(this), internal-fsb-guid="c1c0694d")
              .internal-fsb-element(internal-fsb-guid="c1c0694d-text")
                | ย้อนกลับ
            Button.internal-fsb-element.internal-fsb-allow-cursor.offset-0.btn.btn-primary.btn-sm.col-3(style={'marginTop': '15px', display: (()=>{return (this.state.step == Step.PAYMENT) ? 'block' : 'none';})()}, onClick=((event) => { window.internalFsbSubmit('d480ae4d', 'Auction', event, ((results) => { this.manipulate('d480ae4d', 'Auction', results); }).bind(this)); }).bind(this), type="button", disabled=this.state.submitting, onSuccess=this.onButtonSuccess_d480ae4d.bind(this), onSubmitting=this.onButtonSubmitting_d480ae4d.bind(this), onSubmitted=this.onButtonSubmitted_d480ae4d.bind(this), internal-fsb-guid="d480ae4d")
              .internal-fsb-element(internal-fsb-guid="d480ae4d-text")
                | โอนเงินผ่านธนาคาร
            Button.internal-fsb-element.internal-fsb-allow-cursor.btn.btn-primary.btn-sm.col-2(style={'marginTop': '15px', 'marginLeft': '10px', 'display': 'none'}, type="button", onClick=this.onButtonClick_3d97109b.bind(this), internal-fsb-guid="3d97109b")
              .internal-fsb-element(internal-fsb-guid="3d97109b-text")
                | จ่ายผ่านบัตร
            .internal-fsb-element.-fsb-preset-180079a2.col-10.offset-1(style={'FsbInheritedPresets': '180079a2', display: (()=>{return (this.state.step == Step.PAID) ? 'block' : 'none';})()}, internal-fsb-guid="084a0c00")
              .container-fluid
                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                  .internal-fsb-element.col-12.-fsb-preset-7a279686(style={'FsbInheritedPresets': '7a279686'}, internal-fsb-guid="b7b1b09d")
                    | จ่ายเงินเรียบร้อยแล้ว
                  .internal-fsb-element.col-12.-fsb-preset-4839e353(style={'FsbInheritedPresets': '4839e353'}, internal-fsb-guid="907bd1cd")
                    | ทางเรากำลังรออนุมัติการจ่ายเงิน กรุณารอทางเราติดต่อกลับผ่านทางโทรศัพท์
                  .internal-fsb-element.col-12(style={'position': 'relative'}, internal-fsb-guid="4541551d")
                    .container-fluid
                      .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                        .internal-fsb-element.col-12(dangerouslySetInnerHTML={__html: "<div class=\"loader\"></div><style type=\"text/css\">.loader,\n.loader:after {\n  border-radius: 50%;\n  width: 200px;\n  height: 200px;\n}\n.loader {\n  margin: 60px auto;\n  font-size: 10px;\n  position: relative;\n  text-indent: -9999em;\n  border-top: 1.1em solid rgba(0,199,253, 0.2);\n  border-right: 1.1em solid rgba(0,199,253, 0.2);\n  border-bottom: 1.1em solid rgba(0,199,253, 0.2);\n  border-left: 1.1em solid #00c7fd;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation: load8 1.1s infinite linear;\n  animation: load8 1.1s infinite linear;\n}\n@-webkit-keyframes load8 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@keyframes load8 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}</style> "}, internal-fsb-guid="407dc97d")
                        .internal-fsb-element.col-12(style={'position': 'absolute', 'top': '0px', 'left': '0px', 'right': '0px'}, internal-fsb-guid="bbc12ce1")
                          .container-fluid
                            .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                              .internal-fsb-element.offset-0(style={'fontSize': '13px', 'color': 'rgba(22, 98, 250, 1)', 'top': '145px', 'width': '160px', 'left': '50%', 'marginLeft': '-80px', 'textAlign': 'center'}, internal-fsb-guid="cac28984")
                                | ${this.getPaymentStatus()}
                  input.internal-fsb-element(type="hidden", value=this.getDataFromNotation("Quote[0].qid"), internal-fsb-guid="dc7901c9")
                  Button.internal-fsb-element.internal-fsb-allow-cursor(style={'display': 'none'}, ref="refresh", onClick=((event) => { window.internalFsbSubmit('0a5b0022', 'Quote', event, ((results) => { this.manipulate('0a5b0022', 'Quote', results); }).bind(this)); }).bind(this), type="button", internal-fsb-guid="0a5b0022")
                    .internal-fsb-element(internal-fsb-guid="0a5b0022-text")
                      | Button
    `
  }
}
DeclarationHelper.declare('Document', 'Controls.FlowLayout_a23ed480', FlowLayout_a23ed480);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.