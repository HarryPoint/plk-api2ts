import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16700/doc.html#/default/质量人员服务相关/pageUsingPOST_3
*/
export default function fetchMethod(options: { data: IQualityPersonnelDropDownPageQueryObjects }, extraOptions?: any) {
    return http<IJSONResultPagingInformationQualityPersonnelDropdownResponseDTO>(
        {
            url: "/masterdata-service/qmsQualityPersonnel/page",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 质量人员下拉分页查询对象 */
export interface IQualityPersonnelDropDownPageQueryObjects {
    /** 编号或名称 */
    codeOrName?: string;
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
}
/** 分页排序 */
export interface IPagingSort {
    /** 需要进行排序的字段 */
    column?: string;
    /** 是否正序排列，默认Y */
    isAsc?: EPagingSort_isAsc;
}
/** JSONResult«分页信息«质量人员下拉响应DTO»» */
export interface IJSONResultPagingInformationQualityPersonnelDropdownResponseDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPagingInformationQualityPersonnelDropDownResponseDTO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«质量人员下拉响应DTO» */
export interface IPagingInformationQualityPersonnelDropDownResponseDTO {
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationQualityPersonnelDropDownResponseDTO_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationQualityPersonnelDropDownResponseDTO_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IQualityPersonnelDropDownResponseDTO[];
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
/** 质量人员下拉响应DTO */
export interface IQualityPersonnelDropDownResponseDTO {
    /** 员工编号 */
    employeeCode?: string;
    /** 员工姓名 */
    employeeName?: string;
    /** id */
    id?: string;
    /** 可检验项目 */
    qmsInspectionItemName?: string;
}

export enum EPagingSort_isAsc {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationQualityPersonnelDropDownResponseDTO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationQualityPersonnelDropDownResponseDTO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
