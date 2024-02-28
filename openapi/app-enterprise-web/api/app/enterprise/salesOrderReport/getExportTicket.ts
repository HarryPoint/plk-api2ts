import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16400/doc.html#/default/订单进度统计报表相关/getExportTicketUsingPOST_15
*/
export default function fetchMethod(options: { data: IOrderProgressStatisticsQueryVO }, extraOptions?: any) {
    return http<IJSONResultExportedTicketInformation>(
        {
            url: "/app-enterprise-web/api/app/enterprise/salesOrderReport/getExportTicket",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 订单进度统计查询VO */
export interface IOrderProgressStatisticsQueryVO {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 交付日期 - 开始 yyyy-MM-dd HH:mm:ss */
    deliveryDateBegin?: number;
    /** 销售订单编号 */
    salesOrderCode?: string;
    /** 物料id集 */
    materialIds?: string[];
    /** 客户id集 */
    customerIds?: string[];
    /** 交付日期 - 结束 yyyy-MM-dd HH:mm:ss */
    deliveryDateEnd?: number;
    /** 物料编码 */
    materialCode?: string;
    /** 销售订单状态 */
    salesOrderStatus?: EOrderProgressStatisticsQueryVO_salesOrderStatus;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«导出ticket信息» */
export interface IJSONResultExportedTicketInformation {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IExportingTicketInformation;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 导出ticket信息 */
export interface IExportingTicketInformation {
    /** 导出凭证ticket */
    ticket?: string;
}

export enum EOrderProgressStatisticsQueryVO_salesOrderStatus {
    /** 未转生产订单 */
    CREATED = "CREATED",
    /** 部分已转 */
    CONVERTING = "CONVERTING",
    /** 已转生产订单 */
    CONVERED = "CONVERED",
    /** 已取消 */
    CANCEL = "CANCEL",
    /** 已关闭 */
    CLOSE = "CLOSE"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}
