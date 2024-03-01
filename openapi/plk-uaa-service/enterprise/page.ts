import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:18100/doc.html#/default/企业客户相关/pageUsingPOST_2
*/
export default function fetchMethod(options: { data: IEnterprisePagingQueryObject }, extraOptions?: any) {
    return http<IJSONResultPagingInformationEnterprisePagingResponse>(
        {
            url: "/plk-uaa-service/enterprise/page",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 企业分页查询对象 */
export interface IEnterprisePagingQueryObject {
    /** 创建时间 -- 开始 */
    createBeginTime?: number;
    /** 创建时间 -- 结束 */
    createEndTime?: number;
    /** 创建人ids */
    createUserIds?: string[];
    /** 企业ids */
    enterpriseIds?: string[];
    /** 到期时间 -- 开始 */
    expireBeginTime?: number;
    /** 到期时间 -- 结束 */
    expireEndTime?: number;
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
    /** 服务状态列表 */
    productServiceStatusList?: EEnterprisePagingQueryObject_productServiceStatusList_items[];
    /** 服务类型列表 */
    productServiceTypeList?: EEnterprisePagingQueryObject_productServiceTypeList_items[];
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
    /** 响应结果 */
    data?: IPagingInformationEnterprisePagingResponse;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«企业分页响应» */
export interface IPagingInformationEnterprisePagingResponse {
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationEnterprisePagingResponse_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationEnterprisePagingResponse_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IEnterprisePagingResponse[];
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
/** 企业分页响应 */
export interface IEnterprisePagingResponse {
    /** 可用账号数 */
    availableAccountQuantity?: number;
    /** 编号 */
    code?: string;
    /** 创建时间 */
    createTime?: number;
    /** 创建人 */
    createUserName?: string;
    /** 到期时间 */
    expireTime?: number;
    /** 是否有新购的产品订单 */
    hanNewBuyProductOrder?: EEnterprisePagingResponse_hanNewBuyProductOrder;
    /** 企业id */
    id?: string;
    /** 是否启用批次关联 */
    isEnableBatchManagement?: EEnterprisePagingResponse_isEnableBatchManagement;
    /** 最近登录系统时间 */
    lastLoginTime?: number;
    /** 企业名称 */
    name?: string;
    /** 服务状态 */
    productServiceStatus?: EEnterprisePagingResponse_productServiceStatus;
    /** 服务类型 */
    productServiceType?: EEnterprisePagingResponse_productServiceType;
    /** 产品类型 */
    productType?: EEnterprisePagingResponse_productType;
    /** 系统当前版本号 */
    systemLastVersionCode?: string;
    /** 已使用账号数 */
    usedAccountQuantity?: number;
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

export enum EPagingInformationEnterprisePagingResponse_hasNextPage {
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

export enum EEnterprisePagingResponse_hanNewBuyProductOrder {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EEnterprisePagingResponse_isEnableBatchManagement {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EEnterprisePagingResponse_productServiceStatus {
    /** 服务中 */
    ON = "ON",
    /** 服务过期 */
    EXPIRE = "EXPIRE",
    /** 服务已停用 */
    INVALID = "INVALID"
}

export enum EEnterprisePagingResponse_productServiceType {
    /** 试用 */
    TRIAL = "TRIAL",
    /** 正式 */
    FORMAL = "FORMAL"
}

export enum EEnterprisePagingResponse_productType {
    /** MES系统 */
    MES = "MES"
}
