import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16500/doc.html#/default/计算方案相关/pageUsingPOST
*/
export default function fetchMethod(options: { data: ICalculationSchemePagingQueryRequestDTO }, extraOptions?: any) {
    return http<IJSONResultPageInformationCalculationSchemePageQueryResponseDTO>(
        {
            url: "/flow-service/calculationPlan/page",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 计算方案分页查询请求DTO */
export interface ICalculationSchemePagingQueryRequestDTO {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSort[];
    /** 汇总聚合维度字段集 */
    groupBys?: string[];
    /** 导出字段集 */
    exportFields?: string[];
    /** 方案名称 */
    name?: string;
    /** 应用编码 */
    appCode?: string;
    /** 表格字段编码 */
    tableFieldCode?: string;
}
/** 分页排序 */
export interface IPagingSort {
    /** 需要进行排序的字段 */
    column?: string;
    /** 是否正序排列，默认Y */
    isAsc?: EPagingSort_isAsc;
}
/** JSONResult«分页信息«计算方案分页查询响应DTO»» */
export interface IJSONResultPageInformationCalculationSchemePageQueryResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationCalculationSchemePageQueryResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«计算方案分页查询响应DTO» */
export interface IPageInformationCalculationSchemePageQueryResponseDTO {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: ICalculateTheSchemePageQueryResponseDTO[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationCalculationSchemePageQueryResponseDTO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPageInformationCalculationSchemePageQueryResponseDTO_hasNextPage;
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** 计算方案分页查询响应DTO */
export interface ICalculateTheSchemePageQueryResponseDTO {
    /** 创建用户ID */
    createUserId?: number;
    /** 创建用户名 */
    createUserName?: string;
    /** 创建部门ID */
    createDeptId?: number;
    /** 创建部门名称 */
    createDeptName?: string;
    /** 更新部门ID */
    updateDeptId?: number;
    /** 更新部门名称 */
    updateDeptName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 更新用户ID */
    updateUserId?: number;
    /** 更新用户名称 */
    updateUserName?: string;
    /** 更新时间 */
    updateTime?: string;
    /** ID */
    id?: number;
    /** 名称 */
    name?: string;
    /** 业务 */
    business?: string;
    /** 计算公式 */
    formula?: string;
    /** 更新频率 */
    updateFrequency?: string;
}

export enum EPagingSort_isAsc {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationCalculationSchemePageQueryResponseDTO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationCalculationSchemePageQueryResponseDTO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
