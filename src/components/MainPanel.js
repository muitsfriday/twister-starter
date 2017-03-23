import React, {Component} from 'react'
import NewTweet from './NewTweet'
import TweetList from './TweetList'

const lorem = 'Lorem Ipsum คือ เนื้อหาจำลองแบบเรียบๆ ที่ใช้กันในธุรกิจงานพิมพ์หรืองานเรียงพิมพ์' +
        ' มันได้กลายมาเป็นเนื้อหาจำลองมาตรฐานของธุรกิจดังกล่าวมาตั้งแต่ศตวรรษที่ 16 เมื่อ' +
        'เครื่องพิมพ์โนเนมเครื่องหนึ่งนำรางตัวพิมพ์มาสลับสับตำแหน่งตัวอักษรเพื่อทำหนังสือ' +
        'ตัวอย่าง Lorem Ipsum อยู่ยงคงกระพันมาไม่ใช่แค่เพียงห้าศตวรรษ แต่อยู่มาจนถึงยุคที' +
        '่พลิกโฉมเข้าสู่งานเรียงพิมพ์ด้วยวิธีทางอิเล็กทรอนิกส์ และยังคงสภาพเดิมไว้อย่างไม' +
        '่มีการเปลี่ยนแปลง มันได้รับความนิยมมากขึ้นในยุค ค.ศ. 1960 เมื่อแผ่น Letraset วาง' +
        'จำหน่ายโดยมีข้อความบนนั้นเป็น Lorem Ipsum และล่าสุดกว่านั้น คือเมื่อซอฟท์แวร์การ' +
        'ทำสื่อสิ่งพิมพ์ (Desktop Publishing) อย่าง Aldus PageMaker ได้รวมเอา Lorem Ipsum' +
        ' เวอร์ชั่นต่างๆ เข้าไว้ในซอฟท์แวร์ด้วย'

export default class MainPanel extends Component {

    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div>
                { 
                    this.props.enableTweet ?
                    <NewTweet
                    username={this.props.username}
                    name={this.props.name}
                    addToTweetList={this.props.addToTweetList}/> :
                    null
                }
                {
                    this.props.fetched ?
                    <TweetList tweets={this.props.tweets}/> :
                    <div>Loading</div>  
                }
            </div>
        )
    }
}