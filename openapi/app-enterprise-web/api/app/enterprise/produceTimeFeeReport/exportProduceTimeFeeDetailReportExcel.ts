import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/工时工费相关/exportProduceTimeFeeDetailReportExcelUsingPOST
export default function fetchMethod(data: IHourlyLaborRateReportSearchVO) {
    return http<IJSONResultlong>({
        url: "/app-enterprise-web/api/app/enterprise/produceTimeFeeReport/exportProduceTimeFeeDetailReportExcel",
        method: "post",
        data,
    });
}
// 工时工费报表搜索VO
export interface IHourlyLaborRateReportSearchVO {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: IPagingSortVO[];
    // 工序id集
    processIds: number[];
    // 生产订单号
    produceOrderCode: string;
    // 员工id集
    userIds: number[];
    // 物料id集
    materialIds: number[];
    // 班组id集
    classGroupIds: number[];
    // 查询开始日期 yyyy-MM-dd HH:mm:ss
    beginTime: string;
    // 查询结束日期 yyyy-MM-dd HH:mm:ss
    endTime: string;
    // 销售订单编号
    salesOrderCode: string;
    // 生产任务编码
    produceTaskNo: string;
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
