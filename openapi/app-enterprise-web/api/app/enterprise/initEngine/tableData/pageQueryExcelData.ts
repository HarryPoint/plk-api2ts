import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16400/doc.html#/default/初始化引擎 - 表数据相关/pageQueryExcelDataUsingPOST
*/
export default function fetchMethod(options: { data: IPaging14 }, extraOptions?: any) {
    return http<IJSONResultPageInformationExcelRowDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/initEngine/tableData/pageQueryExcelData",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 分页_14 */
export interface IPaging14 {
    /** 表数据ID */
    tableDataId?: string;
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«ExcelRowDTO»» */
export interface IJSONResultPageInformationExcelRowDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationExcelRowDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«ExcelRowDTO» */
export interface IPageInformationExcelRowDTO {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: IExcelRowDTO[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationExcelRowDTO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPageInformationExcelRowDTO_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** ExcelRowDTO */
export interface IExcelRowDTO {
    /** 行数据ID */
    id?: string;
    /** 行下标 */
    rowIndex?: number;
    /** 单元格列表 */
    cellList?: IExcelCellDTO[];
}
/** ExcelCellDTO */
export interface IExcelCellDTO {
    /** 单元格ID */
    id?: string;
    /** 列下标 */
    columnIndex?: number;
    /** 单元格编码 */
    code?: string;
    /** 单元格值 */
    value?: string;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPageInformationExcelRowDTO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationExcelRowDTO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
