import { post } from '@/api/http';
 
// http://47.108.139.107:16400/doc.html#/default/任务汇总表(基于工序字段)/exportDetailReportExcelUsingPOST
export default function fetchMethod(data: ITheTaskSummaryTableSearchesVOBasedOnProcessFields) {
    return post<IJSONResultlong['data']>({
      url: "/app-enterprise-web/api/app/enterprise/processFieldProduceTaskReport/detail/exportReportExcel",
      data,
    });
}
// 任务汇总表(基于工序字段)搜索VO
export interface ITheTaskSummaryTableSearchesVOBasedOnProcessFields {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: IPagingSortVO[];
    // 工序id
    processId: number;
    // 开始日期(计划生产日期) yyyy-MM-dd HH:mm:ss
    planStartDate: string;
    // 开始日期(计划生产日期) yyyy-MM-dd HH:mm:ss
    planEndDate: string;
    // 生产订单编号
    produceOrderCode: string;
    // 物料ids
    materialIds: number[];
    // 生产任务状态列表
    produceTaskStatusList: string[];
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
