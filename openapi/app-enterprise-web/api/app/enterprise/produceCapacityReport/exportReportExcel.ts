import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/产能利用率统计表/exportReportExcelUsingPOST_2
export default function fetchMethod(data: ICapacityUtilizationReportQueryingDtos, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceCapacityReport/exportReportExcel",
            method: "post",
            data,
        },
        extraOptions,
    );
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
