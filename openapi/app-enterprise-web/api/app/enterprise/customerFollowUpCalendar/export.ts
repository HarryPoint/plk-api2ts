import { post } from '@/api/http';
 
// http://47.108.139.107:16400/doc.html#/default/客户跟进日历相关/exportUsingPOST_10
export default function fetchMethod(data: ICustomerFollowUpCalendarInputVO) {
    return post<IJSONResultlong['data']>({
      url: "/app-enterprise-web/api/app/enterprise/customerFollowUpCalendar/export",
      data,
    });
}
// CustomerFollowUpCalendarInputVO
export interface ICustomerFollowUpCalendarInputVO {
    // 跟进人用户ID
    followUpUserId: string;
    // 客户ID
    customerId: string;
    // 日历类型
    calendarType: string;
    // 填报月份，格式 yyyy-MM-dd HH:mm:ss
    fillingMonth: string;
}
// JSONResult«long»
export interface IJSONResultlong {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: number;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
