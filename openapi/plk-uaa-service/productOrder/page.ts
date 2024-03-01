import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:18100/doc.html#/default/产品订单相关/pageUsingPOST_5
*/
export default function fetchMethod(options: { data: IProductOrderPagingQueryObject }, extraOptions?: any) {
    return http<IJSONResultPagingInformationPagingResponseToProductOrders>(
        {
            url: "/plk-uaa-service/productOrder/page",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 产品订单分页查询对象 */
export interface IProductOrderPagingQueryObject {
    /** 产品订单编号 */
    code?: string;
    /** 企业ids */
    enterpriseIds?: string[];
    /** 导出字段集 */
    exportFields?: string[];
    /** 汇总聚合维度字段集 */
    groupBys?: string[];
    /** 排序字段集 */
    orders?: IPagingSort[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 下单时间 -- 开始 */
    placeOrderBeginTime?: number;
    /** 下单时间 -- 结束 */
    placeOrderEndTime?: number;
    /** 下单用户ids */
    placeOrderUserIds?: string[];
    /** 订单状态列表 */
    statusList?: EProductOrderPagingQueryObject_statusList_items[];
    /** 订单类型列表 */
    typeList?: EProductOrderPagingQueryObject_typeList_items[];
}
/** 分页排序 */
export interface IPagingSort {
    /** 需要进行排序的字段 */
    column?: string;
    /** 是否正序排列，默认Y */
    isAsc?: EPagingSort_isAsc;
}
/** JSONResult«分页信息«产品订单分页响应»» */
export interface IJSONResultPagingInformationPagingResponseToProductOrders {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPagingInformationPagingResponseToProductOrders;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«产品订单分页响应» */
export interface IPagingInformationPagingResponseToProductOrders {
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationPagingResponseToProductOrders_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationPagingResponseToProductOrders_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IProductOrderPagingResponse[];
    /** 下一页页码 */
    nextPage?: string;
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 上一页页码 */
    previousPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 总页数 */
    totalPage?: string;
}
/** 产品订单分页响应 */
export interface IProductOrderPagingResponse {
    /** 订单编号 */
    code?: string;
    /** 企业id */
    enterpriseId?: string;
    /** 企业名称 */
    enterpriseName?: string;
    /** 订单id */
    id?: string;
    /** 订单金额 */
    orderMoneyQuantity?: number;
    /** 下单时间 */
    placeOrderTime?: number;
    /** 下单用户id */
    placeOrderUserId?: string;
    /** 下单用户名称 */
    placeOrderUserName?: string;
    /** 购买产品 */
    productType?: EProductOrderPagingResponse_productType;
    /** 订单状态 */
    status?: EProductOrderPagingResponse_status;
    /** 订单类型 */
    type?: EProductOrderPagingResponse_type;
}

export enum EProductOrderPagingQueryObject_statusList_items {
    WAIT_PAY = "WAIT_PAY",
    PART_PAY = "PART_PAY",
    COMPLETE_PAY = "COMPLETE_PAY"
}

export enum EProductOrderPagingQueryObject_typeList_items {
    NEW_BUY = "NEW_BUY",
    APPEND_BUY = "APPEND_BUY",
    TRIAL = "TRIAL",
    FORMAL_DELAY = "FORMAL_DELAY",
    TRIAL_DELAY = "TRIAL_DELAY"
}

export enum EPagingSort_isAsc {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationPagingResponseToProductOrders_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationPagingResponseToProductOrders_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductOrderPagingResponse_productType {
    /** MES系统 */
    MES = "MES"
}

export enum EProductOrderPagingResponse_status {
    /** 待支付 */
    WAIT_PAY = "WAIT_PAY",
    /** 部分支付 */
    PART_PAY = "PART_PAY",
    /** 完成 */
    COMPLETE_PAY = "COMPLETE_PAY"
}

export enum EProductOrderPagingResponse_type {
    /** 新购 */
    NEW_BUY = "NEW_BUY",
    /** 加购 */
    APPEND_BUY = "APPEND_BUY",
    /** 试用 */
    TRIAL = "TRIAL",
    /** 正式延期 */
    FORMAL_DELAY = "FORMAL_DELAY",
    /** 使用延期 */
    TRIAL_DELAY = "TRIAL_DELAY"
}
