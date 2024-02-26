import { http } from '@/api/http';

/**
* @link http://47.108.139.107:18100/doc.html#/default/产品订单相关/pageUsingPOST_5
*/
export default function fetchMethod(options: { data: IProductOrderPagingQueryObject }, extraOptions?: any) {
    return http<IJSONResultPagingInformationPagingResponseToProductOrders>(
        {
            url: "/plk-uaa-service/productOrder/page",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 产品订单分页查询对象 */
export interface IProductOrderPagingQueryObject {
    /** 产品订单编号 */
    code?: string;
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 企业ids */
    enterpriseIds?: number[];
    /** 排序字段集 */
    orders?: IPagingSort[];
    /** 汇总聚合维度字段集 */
    groupBys?: string[];
    /** 导出字段集 */
    exportFields?: string[];
    /** 下单用户ids */
    placeOrderUserIds?: number[];
    /** 下单时间 -- 结束 */
    placeOrderEndTime?: string;
    /** 订单类型列表 */
    typeList?: string[];
    /** 订单状态列表 */
    statusList?: string[];
    /** 下单时间 -- 开始 */
    placeOrderBeginTime?: string;
}
/** 分页排序 */
export interface IPagingSort {
    /** 需要进行排序的字段 */
    column?: string;
    /** 是否正序排列，默认Y */
    isAsc?: string;
}
/** JSONResult«分页信息«产品订单分页响应»» */
export interface IJSONResultPagingInformationPagingResponseToProductOrders {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPagingInformationPagingResponseToProductOrders;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«产品订单分页响应» */
export interface IPagingInformationPagingResponseToProductOrders {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: IProductOrderPagingResponse[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: string;
    /** 是否有下一页 */
    hasNextPage?: string;
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** 产品订单分页响应 */
export interface IProductOrderPagingResponse {
    /** 订单id */
    id?: number;
    /** 订单编号 */
    code?: string;
    /** 订单类型 */
    type?: string;
    /** 购买产品 */
    productType?: string;
    /** 企业id */
    enterpriseId?: number;
    /** 企业名称 */
    enterpriseName?: string;
    /** 订单金额 */
    orderMoneyQuantity?: number;
    /** 订单状态 */
    status?: string;
    /** 下单用户id */
    placeOrderUserId?: number;
    /** 下单用户名称 */
    placeOrderUserName?: string;
    /** 下单时间 */
    placeOrderTime?: string;
}
