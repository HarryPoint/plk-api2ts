import { http } from '@/api/http';

/**
* @link http://47.108.139.107:18100/doc.html#/default/产品服务相关/pageUsingPOST_6
*/
export default function fetchMethod(options: { data: IProductServicePageQueryObject }, extraOptions?: any) {
    return http<IJSONResultPagingInformationProductServicePagingResponseObject>(
        {
            url: "/plk-uaa-service/productService/page",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 产品服务分页查询对象 */
export interface IProductServicePageQueryObject {
    /** 产品服务编号 */
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
    /** 到期时间 -- 结束 */
    expireEndTime?: string;
    /** 导出字段集 */
    exportFields?: string[];
    /** 创建时间 -- 开始 */
    createBeginTime?: string;
    /** 服务类型列表 */
    typeList?: EProductServicePageQueryObject_typeList_items[];
    /** undefined */
    todayEndTime?: string;
    /** 到期时间 -- 开始 */
    expireBeginTime?: string;
    /** 服务状态列表 */
    statusList?: EProductServicePageQueryObject_statusList_items[];
    /** 创建时间 -- 结束 */
    createEndTime?: string;
}
/** 分页排序 */
export interface IPagingSort {
    /** 需要进行排序的字段 */
    column?: string;
    /** 是否正序排列，默认Y */
    isAsc?: EPagingSort_isAsc;
}
/** JSONResult«分页信息«产品服务分页响应对象»» */
export interface IJSONResultPagingInformationProductServicePagingResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPagingInformationProductServicePagingResponseObject;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«产品服务分页响应对象» */
export interface IPagingInformationProductServicePagingResponseObject {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: IProductServicePagingResponseObject[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationProductServicePagingResponseObject_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationProductServicePagingResponseObject_hasNextPage;
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** 产品服务分页响应对象 */
export interface IProductServicePagingResponseObject {
    /** 产品服务id */
    id?: number;
    /** 编号 */
    code?: string;
    /** 类型 */
    type?: EProductServicePagingResponseObject_type;
    /** 企业id */
    enterpriseId?: number;
    /** 企业名称 */
    enterpriseName?: string;
    /** 产品类型 */
    productType?: EProductServicePagingResponseObject_productType;
    /** 到期时间 */
    expireTime?: string;
    /** 账号数 */
    availableAccountQuantity?: number;
    /** 状态 */
    status?: EProductServicePagingResponseObject_status;
    /** 最近变动时间 */
    lastModifyTime?: string;
    /** 创建 */
    createTime?: string;
    /** 是否有新购的产品订单 */
    hanNewBuyProductOrder?: EProductServicePagingResponseObject_hanNewBuyProductOrder;
}

export enum EProductServicePageQueryObject_typeList_items {
    TRIAL = "TRIAL",
    FORMAL = "FORMAL"
}

export enum EProductServicePageQueryObject_statusList_items {
    ON = "ON",
    EXPIRE = "EXPIRE",
    INVALID = "INVALID"
}

export enum EPagingSort_isAsc {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationProductServicePagingResponseObject_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationProductServicePagingResponseObject_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductServicePagingResponseObject_type {
    /** 试用 */
    TRIAL = "TRIAL",
    /** 正式 */
    FORMAL = "FORMAL"
}

export enum EProductServicePagingResponseObject_productType {
    /** MES系统 */
    MES = "MES"
}

export enum EProductServicePagingResponseObject_status {
    /** 服务中 */
    ON = "ON",
    /** 服务过期 */
    EXPIRE = "EXPIRE",
    /** 服务已停用 */
    INVALID = "INVALID"
}

export enum EProductServicePagingResponseObject_hanNewBuyProductOrder {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
