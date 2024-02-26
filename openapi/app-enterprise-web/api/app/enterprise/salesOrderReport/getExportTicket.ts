import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/订单进度统计报表相关/getExportTicketUsingPOST_15
*/
export default function fetchMethod(data: IOrderProgressStatisticsQueryVO, extraOptions?: any) {
    return http<IJSONResultExportedTicketInformation>(
        {
            url: "/app-enterprise-web/api/app/enterprise/salesOrderReport/getExportTicket",
            method: "post",
            data,
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
    deliveryDateBegin?: string;
    /** 销售订单编号 */
    salesOrderCode?: string;
    /** 物料id集 */
    materialIds?: number[];
    /** 客户id集 */
    customerIds?: number[];
    /** 交付日期 - 结束 yyyy-MM-dd HH:mm:ss */
    deliveryDateEnd?: string;
    /** 物料编码 */
    materialCode?: string;
    /** 销售订单状态 */
    salesOrderStatus?: string;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: string;
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
    ts?: number;
}
/** 导出ticket信息 */
export interface IExportingTicketInformation {
    /** 导出凭证ticket */
    ticket?: string;
}
