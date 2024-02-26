import { http } from '@/api/http';

/**
* @link http://47.108.139.107:18100/doc.html#/default/客户线索相关/pageUsingPOST_1
*/
export default function fetchMethod(options: { data: IPagingQueryOfCustomerLeads }, extraOptions?: any) {
    return http<IJSONResultPagingInformationCustomerLeadPagingResponse>(
        {
            url: "/plk-uaa-service/enterpriseClue/page",
            method: "post",
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
    applyEndTime?: string;
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
    applyBeginTime?: string;
    /** 联系电话 */
    contactPhone?: string;
}
/** 分页排序 */
export interface IPagingSort {
    /** 需要进行排序的字段 */
    column?: string;
    /** 是否正序排列，默认Y */
    isAsc?: ('Y' | 'N');
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
    ts?: number;
}
/** 分页信息«客户线索分页响应» */
export interface IPageInformationCustomerLeadPageResponse {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: ICustomerLeadPagingResponse[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: ('Y' | 'N');
    /** 是否有下一页 */
    hasNextPage?: ('Y' | 'N');
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** 客户线索分页响应 */
export interface ICustomerLeadPagingResponse {
    /** 企业线索id */
    id?: number;
    /** 申请时间 */
    applyTime?: string;
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
    industryId?: number;
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
    toEnterpriseId?: number;
    /** 利用当前客户线索创建的企业名称(为空则说明该条线索没有创建企业, 不为空则说明该条线索已经创建过了 */
    toEnterpriseName?: string;
    /** 备注 */
    remark?: string;
    /** 是否已开通试用 */
    isTrialed?: ('Y' | 'N');
}
