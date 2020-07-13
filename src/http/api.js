import { apiServer } from './axios'
import { apiServero } from './axios2'

const baseURL = "http://118.190.106.118:8021/answer/manage" //公共域名
    //const baseURL = "http://192.168.0.100:8021/answer/manage"
const EData = (url, type = 'post') => (params) => apiServer[type](baseURL + url, params)
const EDatar = (url, type = 'post') => (params) => apiServero[type](baseURL + url, params)


//答题信息总览接口
export const OVW_information = {
    //展示的数据
    ong: EData('/InformationOverview'),
    //统计图
    statistical: EData('/InformationOverviewEcharts'),
    //答题题目
    Answerquestions: EData('/listItemSort'),
    //答题题目上下移动排序  
    sortord: EDatar('/upOrDown'),
    //答题小屏幕展示
    respondent: EDatar('/queryItemById'),
    //答题下载率
    answerAPP: EData('/manage/correctRate')



}

//奖金设置

export const Bonus_set = {
    //奖金设置展示数据
    Query_the_bonus: EDatar('/queryBonusSetting'),
    //账号统计
    Account_statistics: EData('/withdrawAccount'),
    //奖金设置完后提交
    bonus_payment: EData('/bonusSetting')
}

//基础设置
export const Base_Installation = {
    //基础设置预览
    Based_on_the_preview: EDatar('/queryBasicSetting'),
    //基础设置提交
    Set_the_BAse: EData('/basicSetting'),
    //基础设置背景音乐
    bacKGround_music: EData("/listMusics"),
    //删除背景音乐
    Delete_the_music: EDatar('/delMusic')

}

//答题设置
export const The_answer_set = {
    //答题预览
    ANswer_to_preview: EDatar('/queryItemSetting'),
    //答题提交
    ANswer_sheet: EData("/answerSetting"),
    //添加上传题目
    ADD_the_Title: EData('/addItem'),
    //题目渲染
    the_title_number: EDatar('/queryItemBank'),
    //题目修改
    the_title_fix: EData('/editItem'),
    //取消选中与不选中
    selecte_title: EDatar('/markSelected'),
    //题目删除
    Delete_the_topic: EDatar('/delItem'),
    //删除题目里面的图片
    strikethrough: EData('/delPicture')


}