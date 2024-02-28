import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:18100/doc.html#/default/客户线索相关/pageUsingPOST_1
*/
export default function fetchMethod(options: { data: IPagingQueryOfCustomerLeads }, extraOptions?: any) {
    return http<IJSONResultPagingInformationCustomerLeadPagingResponse>(
        {
            url: "/plk-uaa-service/enterpriseClue/page",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 客户线索分页查询 */
export interface IPagingQueryOfCustomerLeads {
    /** 当前页面 */
    pageNo?: number;
    /** 申请时间结束 */
    applyEndTime?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 联系人 */
    contactUserName?: string;
    /** 排序字段集 */
    orders?: IPagingSort[];
    /** 汇总聚合维度字段集 */
    groupBys?: string[];
    /** 导出字段集 */
    exportFields?: string[];
    /** 企业名称 */
    enterpriseName?: string;
    /** 申请时间开始 */
    applyBeginTime?: number;
    /** 联系电话 */
    contactPhone?: string;
}
/** 分页排序 */
export interface IPagingSort {
    /** 需要进行排序的字段 */
    column?: string;
    /** 是否正序排列，默认Y */
    isAsc?: EPagingSort_isAsc;
}
/** JSONResult«分页信息«客户线索分页响应»» */
export interface IJSONResultPagingInformationCustomerLeadPagingResponse {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationCustomerLeadPageResponse;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«客户线索分页响应» */
export interface IPageInformationCustomerLeadPageResponse {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: ICustomerLeadPagingResponse[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationCustomerLeadPageResponse_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPageInformationCustomerLeadPageResponse_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** 客户线索分页响应 */
export interface ICustomerLeadPagingResponse {
    /** 企业线索id */
    id?: string;
    /** 申请时间 */
    applyTime?: number;
    /** 企业名称 */
    enterpriseName?: string;
    /** 省份编码 */
    provinceCode?: string;
    /** 省份名称 */
    provinceName?: string;
    /** 市级编码 */
    cityCode?: string;
    /** 市级名称 */
    cityName?: string;
    /** 行业id */
    industryId?: string;
    /** 行业名称 */
    industryName?: string;
    /** 联系人姓名 */
    contactUserName?: string;
    /** 联系电话 */
    contactPhone?: string;
    /** 职位 */
    position?: string;
    /** 试用模块列表 */
    trialModules?: string[];
    /** 利用当前客户线索创建的企业id(为空则说明该条线索没有创建企业, 不为空则说明该条线索已经创建过了 */
    toEnterpriseId?: string;
    /** 利用当前客户线索创建的企业名称(为空则说明该条线索没有创建企业, 不为空则说明该条线索已经创建过了 */
    toEnterpriseName?: string;
    /** 备注 */
    remark?: string;
    /** 是否已开通试用 */
    isTrialed?: ECustomerLeadPagingResponse_isTrialed;
}

export enum EPagingSort_isAsc {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationCustomerLeadPageResponse_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationCustomerLeadPageResponse_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ECustomerLeadPagingResponse_isTrialed {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
