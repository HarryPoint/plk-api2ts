import { http } from '@/api/http';

/**
* @link http://47.108.139.107:18100/doc.html#/default/企业客户相关/pageUsingPOST_2
*/
export default function fetchMethod(options: { data: IEnterprisePagingQueryObject }, extraOptions?: any) {
    return http<IJSONResultPagingInformationEnterprisePagingResponse>(
        {
            url: "/plk-uaa-service/enterprise/page",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 企业分页查询对象 */
export interface IEnterprisePagingQueryObject {
    /** 企业ids */
    enterpriseIds?: number[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSort[];
    /** 汇总聚合维度字段集 */
    groupBys?: string[];
    /** 服务状态列表 */
    productServiceStatusList?: EEnterprisePagingQueryObject_productServiceStatusList_items[];
    /** 创建人ids */
    createUserIds?: number[];
    /** 导出字段集 */
    exportFields?: string[];
    /** 创建时间 -- 开始 */
    createBeginTime?: string;
    /** 服务类型列表 */
    productServiceTypeList?: EEnterprisePagingQueryObject_productServiceTypeList_items[];
    /** 到期时间 -- 开始 */
    expireBeginTime?: string;
    /** 到期时间 -- 结束 */
    expireEndTime?: string;
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
/** JSONResult«分页信息«企业分页响应»» */
export interface IJSONResultPagingInformationEnterprisePagingResponse {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPagingInformationEnterprisePagingResponse;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«企业分页响应» */
export interface IPagingInformationEnterprisePagingResponse {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: IEnterprisePagingResponse[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationEnterprisePagingResponse_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationEnterprisePagingResponse_hasNextPage;
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** 企业分页响应 */
export interface IEnterprisePagingResponse {
    /** 企业id */
    id?: number;
    /** 编号 */
    code?: string;
    /** 企业名称 */
    name?: string;
    /** 产品类型 */
    productType?: EEnterprisePagingResponse_productType;
    /** 服务类型 */
    productServiceType?: EEnterprisePagingResponse_productServiceType;
    /** 服务状态 */
    productServiceStatus?: EEnterprisePagingResponse_productServiceStatus;
    /** 到期时间 */
    expireTime?: string;
    /** 可用账号数 */
    availableAccountQuantity?: number;
    /** 已使用账号数 */
    usedAccountQuantity?: number;
    /** 最近登录系统时间 */
    lastLoginTime?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    createUserName?: string;
    /** 是否启用批次关联 */
    isEnableBatchManagement?: EEnterprisePagingResponse_isEnableBatchManagement;
    /** 是否有新购的产品订单 */
    hanNewBuyProductOrder?: EEnterprisePagingResponse_hanNewBuyProductOrder;
    /** 系统当前版本号 */
    systemLastVersionCode?: string;
}

export enum EEnterprisePagingQueryObject_productServiceStatusList_items {
    ON = "ON",
    EXPIRE = "EXPIRE",
    INVALID = "INVALID"
}

export enum EEnterprisePagingQueryObject_productServiceTypeList_items {
    TRIAL = "TRIAL",
    FORMAL = "FORMAL"
}

export enum EPagingSort_isAsc {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationEnterprisePagingResponse_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationEnterprisePagingResponse_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EEnterprisePagingResponse_productType {
    /** MES系统 */
    MES = "MES"
}

export enum EEnterprisePagingResponse_productServiceType {
    /** 试用 */
    TRIAL = "TRIAL",
    /** 正式 */
    FORMAL = "FORMAL"
}

export enum EEnterprisePagingResponse_productServiceStatus {
    /** 服务中 */
    ON = "ON",
    /** 服务过期 */
    EXPIRE = "EXPIRE",
    /** 服务已停用 */
    INVALID = "INVALID"
}

export enum EEnterprisePagingResponse_isEnableBatchManagement {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EEnterprisePagingResponse_hanNewBuyProductOrder {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
