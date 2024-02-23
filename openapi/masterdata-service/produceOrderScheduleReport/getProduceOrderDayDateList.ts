import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/订单排产报表/getProduceOrderDayDateListUsingGET
export default function fetchMethod() {
    return get<IJSONResultListstring>({
      url: "/masterdata-service/produceOrderScheduleReport/getProduceOrderDayDateList",
    });
}
// JSONResult«List«string»»
export interface IJSONResultListstring {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: string[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
