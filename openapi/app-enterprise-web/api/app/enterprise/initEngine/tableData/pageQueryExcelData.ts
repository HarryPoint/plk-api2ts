import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/初始化引擎 - 表数据相关/pageQueryExcelDataUsingPOST
*/
export default function fetchMethod(data: IPaging14, extraOptions?: any) {
    return http<IJSONResultPageInformationExcelRowDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/initEngine/tableData/pageQueryExcelData",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 分页_14 */
export interface IPaging14 {
    /** 表数据ID */
    tableDataId?: number;
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
    isAsc?: string;
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
    ts?: number;
}
/** 分页信息«ExcelRowDTO» */
export interface IPageInformationExcelRowDTO {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: IExcelRowDTO[];
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
/** ExcelRowDTO */
export interface IExcelRowDTO {
    /** 行数据ID */
    id?: number;
    /** 行下标 */
    rowIndex?: number;
    /** 单元格列表 */
    cellList?: IExcelCellDTO[];
}
/** ExcelCellDTO */
export interface IExcelCellDTO {
    /** 单元格ID */
    id?: number;
    /** 列下标 */
    columnIndex?: number;
    /** 单元格编码 */
    code?: string;
    /** 单元格值 */
    value?: string;
}
