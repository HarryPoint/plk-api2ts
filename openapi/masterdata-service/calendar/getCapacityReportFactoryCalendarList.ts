import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/工厂日历相关/getCapacityReportFactoryCalendarListUsingPOST
export function fetchMethod(data: ICapacityUtilizationReportQueryingDtos, params: { enterpriseId: number }) {
    return post({
      url: "/masterdata-service/calendar/getCapacityReportFactoryCalendarList",
      data,
      params,
    });
}
// 产能利用率报表查询DTO
export interface ICapacityUtilizationReportQueryingDtos {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 工序id列表
    processIdList: number[];
    // 排序字段集
    orders: IPagingSortVO[];
    // 日期 -- 开始时间
    beginTime: string;
    // 天数
    dayCount: number;
    // 日期 -- 结束时间
    endTime: string;
    // undefined
    produceTaskIds: number[];
    // undefined
    panPanProduceOrderCompleteType: string;
    // 是否按天数过滤
    isFilterByDayCount: boolean;
}
// 分页排序VO
export interface IPagingSortVO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«List«产能利用率报表工厂日历VO»»
export interface IJSONResultListCapacityUtilizationReportFactoryCalendarVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ICapacityUtilizationReportFactoryCalendarVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 产能利用率报表工厂日历VO
export interface ICapacityUtilizationReportFactoryCalendarVO {
    // 日程安排日期
    scheduleDate: string;
    // 日程安排日期对应的工时统计（每个班次的时间*该班次相关的班组人数）
    workTimeQuantity: number;
    // 日程安排日期对应的班组人员统计
    workUserQuantity: number;
}
