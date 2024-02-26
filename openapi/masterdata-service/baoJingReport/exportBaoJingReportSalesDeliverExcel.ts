import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/宝晶报表相关/exportBaoJingReportSalesDeliverExcelUsingPOST
*/
export default function fetchMethod(options: { data: IBaojingSalesDeliveryReportSearchVO }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/masterdata-service/baoJingReport/exportBaoJingReportSalesDeliverExcel",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 宝晶销售发货报表搜索VO */
export interface IBaojingSalesDeliveryReportSearchVO {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 客户id集 */
    customerIds?: number[];
    /** 产品名称 */
    majorDataName?: string;
    /** 产品id集 */
    majorDataIds?: number[];
    /** 外部编码产品id集 */
    outerCodeMajorDataIds?: number[];
    /** 运单号 */
    trackNo?: string;
    /** 销售订单编号 */
    salesOrderNo?: string;
    /** 单据号 */
    workOrderNo?: string;
    /** 发货日期-开始 yyyy-MM-dd HH:mm:ss */
    deliverDateBegin?: string;
    /** 单据类型 */
    orderType?: string;
    /** 发货日期-结束 yyyy-MM-dd HH:mm:ss */
    deliverDateEnd?: string;
    /** 需求日期-开始 yyyy-MM-dd HH:mm:ss */
    demandDateBegin?: string;
    /** 需求日期-结束 yyyy-MM-dd HH:mm:ss */
    demandDateEnd?: string;
    /** 业务员ID列表 */
    businessUserIdList?: number[];
    /** 物料类型 */
    materialTypes?: string[];
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: ('Y' | 'N');
}
/** JSONResult«long» */
export interface IJSONResultlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: number;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
